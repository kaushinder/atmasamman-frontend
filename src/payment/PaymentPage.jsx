import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";
const RAZORPAY_KEY = process.env.REACT_APP_RAZORPAY_KEY_ID;

const PROGRAMS = [
  { label: "ATS - Tech Services", fee: 15000 },
  { label: "ASAI - AI School", fee: 18000 },
  { label: "AIMT - Management & Tech", fee: 20000 },
  { label: "Foundation Program", fee: 5000 },
];

function ShimmerPayment() {
  return (
    <div className="payment-page">
      <div className="payment-container">
        <div className="shimmer-block" style={{ height: 40, width: "60%", margin: "0 auto 12px" }} />
        <div className="shimmer-block" style={{ height: 20, width: "40%", margin: "0 auto 40px" }} />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          <div>
            {[1,2,3,4].map(i => <div key={i} className="shimmer-block" style={{ height: 56, marginBottom: 16 }} />)}
          </div>
          <div>
            {[1,2,3].map(i => <div key={i} className="shimmer-block" style={{ height: 56, marginBottom: 16 }} />)}
          </div>
        </div>
      </div>
      <style>{`.shimmer-block { background: linear-gradient(90deg, #e8e8e8 25%, #f5f5f5 50%, #e8e8e8 75%); background-size: 200%; animation: shimmer 1.5s infinite; border-radius: 10px; } @keyframes shimmer { from { background-position: 200% 0; } to { background-position: -200% 0; } }`}</style>
    </div>
  );
}

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useAuth();

  const [initializing, setInitializing] = useState(true);
  const [name, setName] = useState(location.state?.name || currentUser?.name || "");
  const [email, setEmail] = useState(location.state?.email || currentUser?.email || "");
  const [program, setProgram] = useState(location.state?.program || "");
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("razorpay");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(null);
  const [serverError, setServerError] = useState("");

  useEffect(() => {
    // Set suggested amount from program
    const found = PROGRAMS.find(p => p.label === program);
    if (found) setAmount(String(found.fee));
    setTimeout(() => setInitializing(false), 600);
  }, [program]);

  // Load Razorpay script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => { try { document.body.removeChild(script); } catch(e){} };
  }, []);

  const validate = () => {
    const errs = {};
    if (!name.trim()) errs.name = "Name is required";
    if (!email || !/\S+@\S+\.\S+/.test(email)) errs.email = "Valid email required";
    if (!program) errs.program = "Select a program";
    if (!amount || isNaN(amount) || Number(amount) <= 0) errs.amount = "Enter a valid amount";
    return errs;
  };

  const handleRazorpayPayment = async () => {
    setServerError("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setLoading(true);

    try {
      // Step 1: Create order on backend
      const orderRes = await fetch(`${API_URL}/api/payment/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: Number(amount), program, name, email }),
      });
      const orderData = await orderRes.json();
      if (!orderData.success) throw new Error(orderData.message || "Could not create order");

      const { orderId, amount: orderAmount, currency, keyId, mock } = orderData.data;

      if (mock || !window.Razorpay) {
        // Demo mode — simulate success
        await simulatePayment(orderId);
        return;
      }

      // Step 2: Open Razorpay checkout
      const options = {
        key: keyId || RAZORPAY_KEY,
        amount: orderAmount,
        currency: currency || "INR",
        name: "Atmasamman Group",
        description: program,
        order_id: orderId,
        prefill: { name, email },
        theme: { color: "#2563eb" },
        handler: async (response) => {
          // Step 3: Verify payment
          await verifyAndSave(response, orderId);
        },
        modal: {
          ondismiss: () => {
            setLoading(false);
            setServerError("Payment was cancelled. Please try again.");
          }
        }
      };

      const rzp = new window.Razorpay(options);
      rzp.on("payment.failed", (response) => {
        setLoading(false);
        setServerError("Payment failed: " + (response.error?.description || "Please try again."));
      });
      rzp.open();
    } catch (err) {
      setLoading(false);
      setServerError(err.message || "Unable to initiate payment. Please try again.");
    }
  };

  const verifyAndSave = async (razorpayResponse, orderId) => {
    try {
      const res = await fetch(`${API_URL}/api/payment/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          razorpay_order_id: orderId,
          razorpay_payment_id: razorpayResponse.razorpay_payment_id,
          razorpay_signature: razorpayResponse.razorpay_signature,
          name, email, program, amount: Number(amount), method: "razorpay",
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(data.data);
      } else {
        setServerError(data.message || "Payment verification failed.");
      }
    } catch (err) {
      setServerError("Payment verification failed. Please contact support.");
    } finally {
      setLoading(false);
    }
  };

  const simulatePayment = async (orderId) => {
    try {
      const res = await fetch(`${API_URL}/api/payment/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          razorpay_order_id: orderId,
          razorpay_payment_id: null,
          razorpay_signature: null,
          name, email, program, amount: Number(amount), method: "card",
        }),
      });
      const data = await res.json();
      if (data.success) setSuccess(data.data);
      else setServerError(data.message || "Payment failed");
    } catch {
      setServerError("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (initializing) return <ShimmerPayment />;

  if (success) {
    return (
      <div className="payment-page">
        <div className="payment-success">
          <div className="success-icon">✅</div>
          <h2>Payment Successful!</h2>
          <p>Your enrollment for <strong>{success.program}</strong> is confirmed.</p>
          <div className="success-details">
            <div className="detail-row"><span>Transaction ID</span><strong>{success.transactionId}</strong></div>
            <div className="detail-row"><span>Amount Paid</span><strong>₹{success.amount?.toLocaleString("en-IN")}</strong></div>
            <div className="detail-row"><span>Status</span><span className="badge-success">{success.status}</span></div>
          </div>
          <div className="success-actions">
            <button className="btn-primary" onClick={() => navigate("/")}>Back to Home</button>
            <button className="btn-outline" onClick={() => window.print()}>Print Receipt</button>
          </div>
        </div>
        <style>{paymentStyles}</style>
      </div>
    );
  }

  return (
    <div className="payment-page">
      <div className="payment-container">
        <div className="payment-header">
          <h2>Complete Your Payment</h2>
          <p>Secure enrollment payment for Atmasamman Group programs</p>
        </div>

        {serverError && <div className="pay-error">{serverError}</div>}

        <div className="payment-grid">
          {/* LEFT: Details */}
          <div className="payment-card details-card">
            <h3 className="card-title">
              <span className="card-num">1</span> Enrollment Details
            </h3>

            <div className="pay-field">
              <label>Full Name</label>
              <input type="text" value={name} className={errors.name ? "err" : ""}
                onChange={(e) => { setName(e.target.value); setErrors({...errors,name:""}); }}
                placeholder="Your full name" />
              {errors.name && <span className="err-msg">{errors.name}</span>}
            </div>

            <div className="pay-field">
              <label>Email Address</label>
              <input type="email" value={email} className={errors.email ? "err" : ""}
                onChange={(e) => { setEmail(e.target.value); setErrors({...errors,email:""}); }}
                placeholder="you@example.com" />
              {errors.email && <span className="err-msg">{errors.email}</span>}
            </div>

            <div className="pay-field">
              <label>Program</label>
              <select value={program} className={errors.program ? "err" : ""}
                onChange={(e) => { setProgram(e.target.value); setErrors({...errors,program:""}); }}>
                <option value="">Select a program...</option>
                {PROGRAMS.map(p => <option key={p.label} value={p.label}>{p.label} — ₹{p.fee.toLocaleString("en-IN")}</option>)}
              </select>
              {errors.program && <span className="err-msg">{errors.program}</span>}
            </div>

            <div className="pay-field">
              <label>Amount (₹)</label>
              <input type="number" value={amount} min="1" className={errors.amount ? "err" : ""}
                onChange={(e) => { setAmount(e.target.value); setErrors({...errors,amount:""}); }}
                placeholder="Enter amount" />
              {errors.amount && <span className="err-msg">{errors.amount}</span>}
            </div>

            <div className="amount-display">
              <span>Total Payable</span>
              <strong>₹{amount ? Number(amount).toLocaleString("en-IN") : "0"}</strong>
            </div>
          </div>

          {/* RIGHT: Payment */}
          <div className="payment-card pay-card">
            <h3 className="card-title">
              <span className="card-num">2</span> Payment Method
            </h3>

            <div className="method-options">
              <label className={`method-option ${method === "razorpay" ? "active" : ""}`}>
                <input type="radio" value="razorpay" checked={method === "razorpay"} onChange={() => setMethod("razorpay")} />
                <span className="method-icon">💳</span>
                <div>
                  <div className="method-name">Pay via Razorpay</div>
                  <div className="method-desc">Cards, UPI, Wallets, Net Banking</div>
                </div>
              </label>
            </div>

            <div className="razorpay-info">
              <div className="rp-badge">
                <img src="https://razorpay.com/favicon.ico" alt="" width="16" />
                <span>Powered by Razorpay</span>
              </div>
              <ul className="rp-features">
                <li>✅ 100% Secure & Encrypted</li>
                <li>✅ All major cards accepted</li>
                <li>✅ UPI, Google Pay, PhonePe</li>
                <li>✅ Net Banking & Wallets</li>
                <li>✅ Instant confirmation</li>
              </ul>
            </div>

            <button className="pay-btn" onClick={handleRazorpayPayment} disabled={loading}>
              {loading ? (
                <>
                  <span className="spinner-white" /> Processing...
                </>
              ) : (
                <>
                  🔒 Pay ₹{amount ? Number(amount).toLocaleString("en-IN") : "0"} Securely
                </>
              )}
            </button>

            <p className="secure-note">
              🔐 Your payment is secured by 256-bit SSL encryption
            </p>
          </div>
        </div>
      </div>

      <style>{paymentStyles}</style>
    </div>
  );
}

const paymentStyles = `
  .payment-page {
    min-height: 100vh;
    background: #f0f4ff;
    padding: 40px 20px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  .payment-container { max-width: 900px; margin: 0 auto; }
  .payment-header { text-align: center; margin-bottom: 36px; }
  .payment-header h2 { font-size: 2rem; font-weight: 700; color: #1e293b; margin: 0 0 8px; }
  .payment-header p { color: #64748b; font-size: 1rem; }
  .pay-error {
    background: #fef2f2; border: 1px solid #fca5a5; color: #dc2626;
    border-radius: 10px; padding: 12px 16px; margin-bottom: 20px; text-align: center; font-size: 0.9rem;
  }
  .payment-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 24px; }
  @media (max-width: 700px) { .payment-grid { grid-template-columns: 1fr; } }
  .payment-card {
    background: #fff; border-radius: 20px;
    padding: 28px; box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  }
  .card-title { font-size: 1rem; font-weight: 600; color: #1e293b; margin: 0 0 20px; display: flex; align-items: center; gap: 10px; }
  .card-num {
    width: 28px; height: 28px; background: #2563eb; color: #fff;
    border-radius: 50%; display: inline-flex; align-items: center; justify-content: center;
    font-size: 0.8rem; font-weight: 700; flex-shrink: 0;
  }
  .pay-field { display: flex; flex-direction: column; gap: 6px; margin-bottom: 16px; }
  .pay-field label { font-size: 0.83rem; font-weight: 600; color: #475569; }
  .pay-field input, .pay-field select {
    border: 1.5px solid #e2e8f0; border-radius: 10px; padding: 11px 14px;
    font-size: 0.9rem; color: #1e293b; outline: none; transition: border-color 0.2s;
    background: #f8fafc; width: 100%; box-sizing: border-box;
  }
  .pay-field input:focus, .pay-field select:focus { border-color: #2563eb; background: #fff; }
  .pay-field input.err, .pay-field select.err { border-color: #ef4444; }
  .err-msg { color: #ef4444; font-size: 0.78rem; }
  .amount-display {
    display: flex; justify-content: space-between; align-items: center;
    background: linear-gradient(135deg, #eff6ff, #dbeafe);
    border-radius: 12px; padding: 14px 16px; margin-top: 8px;
  }
  .amount-display span { color: #3b82f6; font-size: 0.85rem; font-weight: 500; }
  .amount-display strong { color: #1d4ed8; font-size: 1.4rem; font-weight: 700; }
  .method-options { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; }
  .method-option {
    display: flex; align-items: center; gap: 12px;
    border: 2px solid #e2e8f0; border-radius: 12px; padding: 14px;
    cursor: pointer; transition: all 0.2s;
  }
  .method-option input { display: none; }
  .method-option.active { border-color: #2563eb; background: #eff6ff; }
  .method-icon { font-size: 1.5rem; }
  .method-name { font-weight: 600; color: #1e293b; font-size: 0.9rem; }
  .method-desc { color: #64748b; font-size: 0.78rem; }
  .razorpay-info {
    background: #f8fafc; border-radius: 12px; padding: 16px; margin-bottom: 20px;
  }
  .rp-badge {
    display: flex; align-items: center; gap: 6px; margin-bottom: 12px;
    color: #1e293b; font-size: 0.85rem; font-weight: 600;
  }
  .rp-features { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 6px; }
  .rp-features li { color: #475569; font-size: 0.82rem; }
  .pay-btn {
    width: 100%; padding: 15px; background: linear-gradient(135deg, #1d4ed8, #2563eb);
    color: #fff; border: none; border-radius: 14px; font-size: 1rem; font-weight: 700;
    cursor: pointer; transition: all 0.2s; display: flex; align-items: center;
    justify-content: center; gap: 8px; box-shadow: 0 4px 14px rgba(37,99,235,0.4);
  }
  .pay-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 20px rgba(37,99,235,0.5); }
  .pay-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none; }
  .spinner-white {
    width: 18px; height: 18px; border: 2px solid rgba(255,255,255,0.4);
    border-top-color: #fff; border-radius: 50%; animation: spin 0.7s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }
  .secure-note { text-align: center; color: #94a3b8; font-size: 0.78rem; margin: 12px 0 0; }
  .payment-success {
    max-width: 480px; margin: 60px auto; background: #fff; border-radius: 24px;
    padding: 48px 40px; text-align: center; box-shadow: 0 8px 30px rgba(0,0,0,0.12);
    animation: popIn 0.5s ease;
  }
  @keyframes popIn { from { opacity:0; transform:scale(0.9); } to { opacity:1; transform:scale(1); } }
  .success-icon { font-size: 4rem; margin-bottom: 16px; }
  .payment-success h2 { color: #16a34a; font-size: 1.8rem; font-weight: 700; margin: 0 0 10px; }
  .payment-success p { color: #475569; margin: 0 0 28px; }
  .success-details { background: #f8fafc; border-radius: 14px; padding: 20px; text-align: left; margin-bottom: 28px; }
  .detail-row { display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid #e2e8f0; font-size: 0.88rem; }
  .detail-row:last-child { border-bottom: none; }
  .detail-row span { color: #64748b; }
  .detail-row strong { color: #1e293b; }
  .badge-success { background: #dcfce7; color: #16a34a; padding: 3px 10px; border-radius: 20px; font-size: 0.8rem; font-weight: 600; }
  .success-actions { display: flex; gap: 12px; }
  .btn-primary { flex: 1; background: linear-gradient(135deg,#2563eb,#3b82f6); color: #fff; border: none; padding: 12px; border-radius: 10px; font-weight: 600; cursor: pointer; }
  .btn-outline { flex: 1; background: transparent; color: #2563eb; border: 2px solid #2563eb; padding: 12px; border-radius: 10px; font-weight: 600; cursor: pointer; }
`;

export default Payment;
