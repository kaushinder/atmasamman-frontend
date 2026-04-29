import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function ForgotPassword() {
  const { forgotPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage(""); setError("");
    setLoading(true);
    try {
      await forgotPassword(email);
      setMessage("If an account exists with that email, a reset link has been sent.");
      setEmail("");
    } catch (err) {
      setError(err.message || "Failed to send reset email. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <img src="/assets/images/as.jpeg" alt="Atmasamman" className="auth-logo-img" />
        </div>
        <h2 className="auth-title">Forgot Password</h2>
        <p className="auth-subtitle">Enter your email to receive a reset link</p>

        {message && <div className="auth-success">{message}</div>}
        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleReset} className="auth-form">
          <div className="auth-field">
            <label>Email Address</label>
            <input
              type="email" placeholder="you@example.com"
              value={email} onChange={(e) => setEmail(e.target.value)} required
            />
          </div>
          <button type="submit" disabled={loading} className="auth-btn">
            {loading ? <span className="spinner" /> : null}
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <p className="auth-switch">
          Remember your password? <Link to="/login">Sign in</Link>
        </p>
      </div>

      <style>{`
        .auth-page {
          min-height: 100vh; display: flex; align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          padding: 20px;
        }
        .auth-card {
          width: 100%; max-width: 420px;
          background: rgba(255,255,255,0.05); backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1); border-radius: 24px;
          padding: 40px 36px; box-shadow: 0 25px 60px rgba(0,0,0,0.5);
          animation: slideUp 0.6s ease;
        }
        @keyframes slideUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
        .auth-logo { text-align: center; margin-bottom: 20px; }
        .auth-logo-img { width:72px; height:72px; border-radius:50%; object-fit:cover; border:2px solid #2563eb; }
        .auth-title { color:#fff; font-size:1.6rem; font-weight:700; text-align:center; margin:0 0 6px; }
        .auth-subtitle { color:rgba(255,255,255,0.55); font-size:0.9rem; text-align:center; margin:0 0 28px; }
        .auth-success { background:rgba(34,197,94,0.15); border:1px solid rgba(34,197,94,0.4); color:#86efac; border-radius:10px; padding:10px 14px; font-size:0.85rem; margin-bottom:20px; text-align:center; }
        .auth-error { background:rgba(239,68,68,0.15); border:1px solid rgba(239,68,68,0.4); color:#fca5a5; border-radius:10px; padding:10px 14px; font-size:0.85rem; margin-bottom:20px; text-align:center; }
        .auth-form { display:flex; flex-direction:column; gap:16px; }
        .auth-field { display:flex; flex-direction:column; gap:6px; }
        .auth-field label { color:rgba(255,255,255,0.75); font-size:0.85rem; font-weight:500; }
        .auth-field input { background:rgba(255,255,255,0.08); border:1px solid rgba(255,255,255,0.12); border-radius:12px; padding:12px 16px; color:#fff; font-size:0.95rem; outline:none; transition:border-color 0.2s; width:100%; box-sizing:border-box; }
        .auth-field input::placeholder { color:rgba(255,255,255,0.3); }
        .auth-field input:focus { border-color:#2563eb; background:rgba(37,99,235,0.1); }
        .auth-btn { background:linear-gradient(135deg,#2563eb,#3b82f6); color:#fff; border:none; border-radius:12px; padding:13px; font-size:0.95rem; font-weight:600; cursor:pointer; transition:opacity 0.2s; display:flex; align-items:center; justify-content:center; gap:8px; }
        .auth-btn:disabled { opacity:0.6; cursor:not-allowed; }
        .spinner { width:16px; height:16px; border:2px solid rgba(255,255,255,0.3); border-top-color:#fff; border-radius:50%; animation:spin 0.7s linear infinite; }
        @keyframes spin { to { transform:rotate(360deg); } }
        .auth-switch { color:rgba(255,255,255,0.6); font-size:0.87rem; text-align:center; margin:20px 0 0; }
        .auth-switch a { color:#60a5fa; text-decoration:none; font-weight:500; }
      `}</style>
    </div>
  );
}

export default ForgotPassword;
