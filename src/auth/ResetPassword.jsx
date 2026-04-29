import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

function ResetPassword() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  // Invalid link — no token or email in URL
  if (!token || !email) {
    return (
      <div className="auth-page">
        <div className="auth-card">
          <h2 className="auth-title">Invalid Link</h2>
          <p className="auth-subtitle">This password reset link is invalid or has expired.</p>
          <Link to="/forgotPassword" className="auth-btn" style={{ textDecoration: "none", marginTop: 16 }}>
            Request a new link
          </Link>
        </div>
        <style>{sharedStyles}</style>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); setMessage("");

    if (password.length < 6) return setError("Password must be at least 6 characters");
    if (password !== confirmPassword) return setError("Passwords do not match");

    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/api/auth/reset-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, email, password }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Reset failed");

      setMessage("Password reset successful! Redirecting to login...");
      setTimeout(() => navigate("/login"), 2500);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
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
        <h2 className="auth-title">Reset Password</h2>
        <p className="auth-subtitle">Enter your new password below</p>

        {message && <div className="auth-success">{message}</div>}
        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-field">
            <label>New Password</label>
            <div className="password-wrapper">
              <input
                type={showPass ? "text" : "password"}
                placeholder="Min 6 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="button" className="eye-btn" onClick={() => setShowPass(!showPass)}>
                {showPass ? "🙈" : "👁️"}
              </button>
            </div>
          </div>

          <div className="auth-field">
            <label>Confirm New Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" disabled={loading} className="auth-btn">
            {loading ? <span className="spinner" /> : null}
            {loading ? "Resetting..." : "Reset Password"}
          </button>
        </form>

        <p className="auth-switch">
          Remember your password? <Link to="/login">Sign in</Link>
        </p>
      </div>
      <style>{sharedStyles}</style>
    </div>
  );
}

const sharedStyles = `
  .auth-page { min-height:100vh; display:flex; align-items:center; justify-content:center; background:linear-gradient(135deg,#0f172a,#1e293b); padding:20px; }
  .auth-card { width:100%; max-width:420px; background:rgba(255,255,255,0.05); backdrop-filter:blur(20px); border:1px solid rgba(255,255,255,0.1); border-radius:24px; padding:40px 36px; box-shadow:0 25px 60px rgba(0,0,0,0.5); animation:slideUp 0.6s ease; }
  @keyframes slideUp { from { opacity:0; transform:translateY(30px); } to { opacity:1; transform:translateY(0); } }
  .auth-logo { text-align:center; margin-bottom:20px; }
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
  .password-wrapper { position:relative; }
  .password-wrapper input { padding-right:48px; }
  .eye-btn { position:absolute; right:12px; top:50%; transform:translateY(-50%); background:none; border:none; cursor:pointer; font-size:1rem; padding:0; }
  .auth-btn { background:linear-gradient(135deg,#2563eb,#3b82f6); color:#fff; border:none; border-radius:12px; padding:13px; font-size:0.95rem; font-weight:600; cursor:pointer; transition:opacity 0.2s; display:flex; align-items:center; justify-content:center; gap:8px; margin-top:4px; }
  .auth-btn:hover:not(:disabled) { opacity:0.9; }
  .auth-btn:disabled { opacity:0.6; cursor:not-allowed; }
  .spinner { width:16px; height:16px; border:2px solid rgba(255,255,255,0.3); border-top-color:#fff; border-radius:50%; animation:spin 0.7s linear infinite; }
  @keyframes spin { to { transform:rotate(360deg); } }
  .auth-switch { color:rgba(255,255,255,0.6); font-size:0.87rem; text-align:center; margin:20px 0 0; }
  .auth-switch a { color:#60a5fa; text-decoration:none; font-weight:500; }
`;

export default ResetPassword;