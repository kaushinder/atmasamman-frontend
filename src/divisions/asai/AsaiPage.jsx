import React from "react";
import { Link } from "react-router-dom";

function ASAI() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Orbitron:wght@700;900&display=swap');

        .asai-page {
          font-family: 'Space Grotesk', sans-serif;
          background: #020817;
          color: #c8d8f0;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ── Neural net background ── */
        .asai-page::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image:
            radial-gradient(circle at 20% 30%, rgba(0,180,255,0.06) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(120,60,255,0.07) 0%, transparent 50%),
            linear-gradient(rgba(0,180,255,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,180,255,0.04) 1px, transparent 1px);
          background-size: 100% 100%, 100% 100%, 40px 40px, 40px 40px;
          pointer-events: none;
          z-index: 0;
        }

        .asai-inner {
          position: relative;
          z-index: 1;
        }

        /* ── Hero ── */
        .asai-hero {
          text-align: center;
          padding: 90px 20px 60px;
        }

        .asai-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #00c8ff;
          background: rgba(0,180,255,0.08);
          border: 1px solid rgba(0,180,255,0.25);
          padding: 5px 16px;
          border-radius: 20px;
          margin-bottom: 26px;
        }

        .asai-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #00c8ff;
          animation: pulse-cyan 1.8s ease-in-out infinite;
        }

        @keyframes pulse-cyan {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(0,200,255,0.5); }
          50% { opacity: 0.6; box-shadow: 0 0 0 5px rgba(0,200,255,0); }
        }

        .asai-hero h1 {
          font-family: 'Orbitron', monospace;
          font-size: clamp(1.7rem, 4vw, 3rem);
          font-weight: 900;
          line-height: 1.15;
          margin-bottom: 20px;
          color: #fff;
          letter-spacing: -0.01em;
        }

        .asai-hero h1 .cyan { color: #00c8ff; }

        .asai-hero p {
          font-size: 17px;
          color: rgba(180,210,240,0.65);
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.8;
        }

        /* ── Divider ── */
        .asai-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0,180,255,0.25), transparent);
          margin: 12px 0;
        }

        /* ── Section labels ── */
        .section-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #00c8ff;
          margin-bottom: 8px;
        }

        .section-title {
          font-family: 'Orbitron', monospace;
          font-size: clamp(1.3rem, 2.5vw, 1.9rem);
          font-weight: 700;
          color: #fff;
          margin-bottom: 14px;
          line-height: 1.3;
        }

        .section-desc {
          color: rgba(180,210,240,0.65);
          font-size: 15px;
          line-height: 1.8;
        }

        /* ── About ── */
        .about-section { padding: 60px 0; }

        .asai-avatar-wrap {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .asai-avatar-ring {
          position: relative;
          width: 280px; height: 280px;
        }

        .asai-avatar-ring::before,
        .asai-avatar-ring::after {
          content: '';
          position: absolute;
          border-radius: 50%;
          animation: orbit 6s linear infinite;
        }

        .asai-avatar-ring::before {
          inset: -12px;
          border: 1px dashed rgba(0,200,255,0.3);
        }

        .asai-avatar-ring::after {
          inset: -24px;
          border: 1px dashed rgba(120,60,255,0.2);
          animation-direction: reverse;
          animation-duration: 9s;
        }

        @keyframes orbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        .asai-avatar {
          width: 280px; height: 280px;
          border-radius: 50%;
          object-fit: cover;
          display: block;
          border: 2px solid rgba(0,200,255,0.4);
          box-shadow:
            0 0 40px rgba(0,200,255,0.2),
            0 0 80px rgba(0,200,255,0.08);
        }

        /* ── Program cards ── */
        .programs-section { padding: 60px 0; }

        .prog-card {
          background: rgba(0,180,255,0.04);
          border: 1px solid rgba(0,180,255,0.15);
          border-radius: 18px;
          padding: 32px 24px;
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .prog-card::before {
          content: '';
          position: absolute;
          top: 0; left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 1px;
          background: linear-gradient(90deg, transparent, #00c8ff, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .prog-card:hover {
          transform: translateY(-6px);
          border-color: rgba(0,200,255,0.4);
          box-shadow: 0 20px 48px rgba(0,180,255,0.15);
        }

        .prog-card:hover::before { opacity: 1; }

        .prog-icon {
          width: 52px; height: 52px;
          border-radius: 14px;
          background: rgba(0,180,255,0.1);
          border: 1px solid rgba(0,180,255,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin: 0 auto 20px;
        }

        .prog-card h5 {
          font-family: 'Orbitron', monospace;
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 10px;
          letter-spacing: 0.03em;
        }

        .prog-card p {
          color: rgba(180,210,240,0.65);
          font-size: 14px;
          line-height: 1.7;
          margin: 0;
        }

        /* ── Tools section ── */
        .tools-section { padding: 60px 0; }

        .tool-chips {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          justify-content: center;
          margin-top: 28px;
        }

        .tool-chip {
          font-size: 13px;
          font-weight: 500;
          color: #00c8ff;
          background: rgba(0,180,255,0.08);
          border: 1px solid rgba(0,180,255,0.25);
          padding: 7px 16px;
          border-radius: 8px;
          transition: background 0.2s, box-shadow 0.2s;
          cursor: default;
        }

        .tool-chip:hover {
          background: rgba(0,180,255,0.15);
          box-shadow: 0 4px 16px rgba(0,180,255,0.2);
        }

        /* ── Why section ── */
        .why-section { padding: 60px 0; }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
          gap: 16px;
        }

        .why-item {
          background: rgba(0,180,255,0.03);
          border: 1px solid rgba(0,180,255,0.12);
          border-radius: 14px;
          padding: 22px 20px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          transition: border-color 0.25s, background 0.25s;
        }

        .why-item:hover {
          border-color: rgba(0,200,255,0.35);
          background: rgba(0,180,255,0.07);
        }

        .why-check {
          width: 28px; height: 28px;
          border-radius: 8px;
          background: rgba(0,180,255,0.12);
          border: 1px solid rgba(0,180,255,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .why-text {
          font-size: 14px;
          font-weight: 500;
          color: rgba(200,225,245,0.85);
          line-height: 1.55;
        }

        /* ── CTA ── */
        .cta-section {
          padding: 80px 20px;
        }

        .cta-card {
          background: linear-gradient(135deg, #040f2a, #071830, #04101f);
          border: 1px solid rgba(0,180,255,0.2);
          border-radius: 24px;
          padding: 64px 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
          max-width: 760px;
          margin: 0 auto;
        }

        .cta-card::before {
          content: '';
          position: absolute;
          top: -100px; left: 50%;
          transform: translateX(-50%);
          width: 400px; height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0,180,255,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        .cta-card h3 {
          font-family: 'Orbitron', monospace;
          font-size: clamp(1.4rem, 2.5vw, 2rem);
          font-weight: 900;
          color: #fff;
          margin-bottom: 14px;
          position: relative;
        }

        .cta-card p {
          color: rgba(160,210,240,0.65);
          font-size: 16px;
          margin-bottom: 36px;
          position: relative;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #0090cc, #0060aa);
          color: #fff;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 15px;
          font-weight: 600;
          padding: 14px 34px;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 8px 28px rgba(0,180,255,0.35);
          transition: all 0.25s ease;
          position: relative;
        }

        .cta-btn:hover {
          background: linear-gradient(135deg, #00c8ff, #0090cc);
          box-shadow: 0 12px 36px rgba(0,200,255,0.45);
          transform: translateY(-3px);
          color: #fff;
          text-decoration: none;
        }

        /* ── Fade-up ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.65s ease forwards; }
        .fu1 { animation-delay: 0.05s; opacity: 0; }
        .fu2 { animation-delay: 0.15s; opacity: 0; }
        .fu3 { animation-delay: 0.25s; opacity: 0; }
        .fu4 { animation-delay: 0.35s; opacity: 0; }
      `}</style>

      <div className="asai-page">
        <div className="asai-inner container-fluid px-3 px-md-5">

          {/* ── Hero ── */}
          <div className="asai-hero fade-up fu1">
            <div className="asai-eyebrow">
              <span className="asai-eyebrow-dot"></span>
              Atmasamman School of Artificial Intelligence
            </div>
            <h1>Shaping the Future<br />with <span className="cyan">AI & ML</span></h1>
            <p>
              Cutting-edge programs in Artificial Intelligence, Machine Learning,
              and Data Science — combining theory with real-world applications.
            </p>
          </div>

          <div className="asai-divider" />

          {/* ── About ── */}
          <div className="about-section">
            <div className="row align-items-center g-5">
              <div className="col-lg-5 fade-up fu2">
                <div className="asai-avatar-wrap">
                  <div className="asai-avatar-ring">
                    <img src="/assets/images/ASAI.png" alt="ASAI" className="asai-avatar" />
                  </div>
                </div>
              </div>
              <div className="col-lg-7 fade-up fu3">
                <p className="section-label">Who We Are</p>
                <h2 className="section-title">AI-Focused Learning for the Real World</h2>
                <p className="section-desc mb-3">
                  ASAI is the AI-focused initiative of Atmasamman Group, designed
                  to equip students with cutting-edge skills in Artificial Intelligence,
                  Machine Learning, and Data Science.
                </p>
                <p className="section-desc">
                  Our goal is to prepare individuals for the future by combining
                  deep theoretical knowledge with real-world AI applications,
                  live projects, and expert mentorship.
                </p>
              </div>
            </div>
          </div>

          <div className="asai-divider" />

          {/* ── Programs ── */}
          <div className="programs-section">
            <div className="text-center mb-5 fade-up fu1">
              <p className="section-label">Curriculum</p>
              <h2 className="section-title">Our Programs</h2>
            </div>
            <div className="row g-4">
              {[
                { icon: "🧠", title: "Machine Learning", desc: "Learn supervised & unsupervised learning algorithms with real datasets and hands-on labs." },
                { icon: "📊", title: "Data Science", desc: "Analyze data, visualize insights, and build predictive models using industry tools." },
                { icon: "🚀", title: "AI Projects", desc: "Work on real-world AI applications and build a portfolio that stands out to employers." },
              ].map((p, i) => (
                <div key={i} className={`col-md-4 fade-up fu${i + 2}`}>
                  <div className="prog-card">
                    <div className="prog-icon">{p.icon}</div>
                    <h5>{p.title}</h5>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="asai-divider" />

          {/* ── Tools ── */}
          <div className="tools-section fade-up fu2">
            <div className="text-center mb-2">
              <p className="section-label">Tech Stack</p>
              <h2 className="section-title">Tools & Technologies</h2>
            </div>
            <div className="tool-chips">
              {["Python", "TensorFlow", "Scikit-learn", "Pandas", "NumPy", "Power BI", "Keras", "Matplotlib", "OpenCV", "Jupyter"].map((tool) => (
                <span key={tool} className="tool-chip">{tool}</span>
              ))}
            </div>
          </div>

          <div className="asai-divider" />

          {/* ── Why ASAI ── */}
          <div className="why-section fade-up fu2">
            <div className="text-center mb-5">
              <p className="section-label">Our Edge</p>
              <h2 className="section-title">Why Choose ASAI?</h2>
            </div>
            <div className="why-grid">
              {[
                { icon: "🎯", text: "Industry-relevant AI curriculum" },
                { icon: "🔬", text: "Hands-on project experience" },
                { icon: "👨‍💻", text: "Expert mentors in AI & Data Science" },
                { icon: "💼", text: "Career & placement support" },
              ].map((item, i) => (
                <div key={i} className="why-item">
                  <div className="why-check">{item.icon}</div>
                  <div className="why-text">{item.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="cta-section fade-up fu3">
            <div className="cta-card">
              <h3>Step into the Future with AI</h3>
              <p>
                Join ASAI and build a career in Artificial Intelligence
                and Data Science.
              </p>
              <Link to="/enroll" className="cta-btn">
                Enroll Now
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default ASAI;