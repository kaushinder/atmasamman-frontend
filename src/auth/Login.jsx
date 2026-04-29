import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await login(email, password);
      navigate(from, { replace: true });
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
        <h2 className="auth-title">Welcome Back</h2>
        <p className="auth-subtitle">Sign in to your account</p>

        {error && <div className="auth-error">{error}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-field">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="auth-field">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="eye-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
          </div>
          <div className="auth-forgot">
            <Link to="/forgotPassword">Forgot Password?</Link>
          </div>
          <button type="submit" disabled={loading} className="auth-btn">
            {loading ? <span className="spinner" /> : null}
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <p className="auth-switch">
          Don't have an account? <Link to="/SignUp">Sign up</Link>
        </p>
      </div>

      <style>{`
        .auth-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          padding: 20px;
        }
        .auth-card {
          width: 100%;
          max-width: 420px;
          background: rgba(255,255,255,0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 24px;
          padding: 40px 36px;
          box-shadow: 0 25px 60px rgba(0,0,0,0.5);
          animation: slideUp 0.6s ease;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .auth-logo { text-align: center; margin-bottom: 20px; }
        .auth-logo-img { width: 72px; height: 72px; border-radius: 50%; object-fit: cover; border: 2px solid #2563eb; }
        .auth-title { color: #fff; font-size: 1.6rem; font-weight: 700; text-align: center; margin: 0 0 6px; }
        .auth-subtitle { color: rgba(255,255,255,0.55); font-size: 0.9rem; text-align: center; margin: 0 0 28px; }
        .auth-error {
          background: rgba(239,68,68,0.15);
          border: 1px solid rgba(239,68,68,0.4);
          color: #fca5a5;
          border-radius: 10px;
          padding: 10px 14px;
          font-size: 0.85rem;
          margin-bottom: 20px;
          text-align: center;
        }
        .auth-form { display: flex; flex-direction: column; gap: 16px; }
        .auth-field { display: flex; flex-direction: column; gap: 6px; }
        .auth-field label { color: rgba(255,255,255,0.75); font-size: 0.85rem; font-weight: 500; }
        .auth-field input {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 12px;
          padding: 12px 16px;
          color: #fff;
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s;
          width: 100%;
          box-sizing: border-box;
        }
        .auth-field input::placeholder { color: rgba(255,255,255,0.3); }
        .auth-field input:focus { border-color: #2563eb; background: rgba(37,99,235,0.1); }
        .password-wrapper { position: relative; }
        .password-wrapper input { padding-right: 48px; }
        .eye-btn {
          position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
          background: none; border: none; cursor: pointer; font-size: 1rem; padding: 0;
        }
        .auth-forgot { text-align: right; }
        .auth-forgot a { color: #60a5fa; font-size: 0.82rem; text-decoration: none; }
        .auth-forgot a:hover { text-decoration: underline; }
        .auth-btn {
          background: linear-gradient(135deg, #2563eb, #3b82f6);
          color: #fff;
          border: none;
          border-radius: 12px;
          padding: 13px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.1s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-top: 4px;
        }
        .auth-btn:hover:not(:disabled) { opacity: 0.9; transform: translateY(-1px); }
        .auth-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        .spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }
        @keyframes spin { to { transform: rotate(360deg); } }
        .auth-switch { color: rgba(255,255,255,0.6); font-size: 0.87rem; text-align: center; margin: 20px 0 0; }
        .auth-switch a { color: #60a5fa; text-decoration: none; font-weight: 500; }
        .auth-switch a:hover { text-decoration: underline; }
      `}</style>
    </div>
  );
}

export default Login;
