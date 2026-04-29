import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Signup() {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "", agree: false });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");
  const [showPass, setShowPass] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Invalid email";
    if (!form.password) errs.password = "Password is required";
    else if (form.password.length < 6) errs.password = "Minimum 6 characters";
    if (!form.confirmPassword) errs.confirmPassword = "Please confirm your password";
    else if (form.password !== form.confirmPassword) errs.confirmPassword = "Passwords do not match";
    if (!form.agree) errs.agree = "You must accept Terms & Conditions";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) { setErrors(validationErrors); return; }
    setLoading(true);
    try {
      await signup(form.name, form.email, form.password);
      navigate("/");
    } catch (err) {
      setServerError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page signup-page">
      <div className="auth-card signup-card">
        <div className="auth-logo">
          <img src="/assets/images/as.jpeg" alt="Atmasamman" className="auth-logo-img" />
        </div>
        <h2 className="auth-title">Create Account</h2>
        <p className="auth-subtitle">Join Atmasamman Group today</p>

        {serverError && <div className="auth-error">{serverError}</div>}

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="auth-field">
            <label>Full Name</label>
            <input
              type="text" name="name" placeholder="Your full name"
              value={form.name} onChange={handleChange}
              className={errors.name ? "field-error" : ""}
            />
            {errors.name && <span className="field-err-msg">{errors.name}</span>}
          </div>

          <div className="auth-field">
            <label>Email Address</label>
            <input
              type="email" name="email" placeholder="you@example.com"
              value={form.email} onChange={handleChange}
              className={errors.email ? "field-error" : ""}
            />
            {errors.email && <span className="field-err-msg">{errors.email}</span>}
          </div>

          <div className="auth-field">
            <label>Password</label>
            <div className="password-wrapper">
              <input
                type={showPass ? "text" : "password"} name="password"
                placeholder="Min 6 characters"
                value={form.password} onChange={handleChange}
                className={errors.password ? "field-error" : ""}
              />
              <button type="button" className="eye-btn" onClick={() => setShowPass(!showPass)}>
                {showPass ? "🙈" : "👁️"}
              </button>
            </div>
            {errors.password && <span className="field-err-msg">{errors.password}</span>}
          </div>

          <div className="auth-field">
            <label>Confirm Password</label>
            <input
              type="password" name="confirmPassword" placeholder="Confirm password"
              value={form.confirmPassword} onChange={handleChange}
              className={errors.confirmPassword ? "field-error" : ""}
            />
            {errors.confirmPassword && <span className="field-err-msg">{errors.confirmPassword}</span>}
          </div>

          <div className="auth-check">
            <input
              type="checkbox" name="agree" id="agree"
              checked={form.agree} onChange={handleChange}
            />
            <label htmlFor="agree">
              I agree to the <Link to="/terms">Terms & Conditions</Link>
            </label>
            {errors.agree && <span className="field-err-msg">{errors.agree}</span>}
          </div>

          <button type="submit" disabled={loading} className="auth-btn">
            {loading ? <span className="spinner" /> : null}
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p className="auth-switch">
          Already have an account? <Link to="/login">Sign in</Link>
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
          max-width: 460px;
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
        .auth-field input.field-error { border-color: rgba(239,68,68,0.6); }
        .field-err-msg { color: #fca5a5; font-size: 0.8rem; }
        .password-wrapper { position: relative; }
        .password-wrapper input { padding-right: 48px; }
        .eye-btn {
          position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
          background: none; border: none; cursor: pointer; font-size: 1rem; padding: 0;
        }
        .auth-check { display: flex; align-items: flex-start; gap: 8px; flex-wrap: wrap; }
        .auth-check input { margin-top: 2px; accent-color: #2563eb; }
        .auth-check label { color: rgba(255,255,255,0.7); font-size: 0.85rem; }
        .auth-check a { color: #60a5fa; }
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

export default Signup;
