import React from "react";
import { Link } from "react-router-dom";

function ATS() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=DM+Sans:wght@400;500&display=swap');

        .ats-page {
          font-family: 'DM Sans', sans-serif;
          background: #07080f;
          color: #e8e6f0;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ── Grid background ── */
        .ats-page::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image:
            linear-gradient(rgba(83,74,183,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(83,74,183,0.07) 1px, transparent 1px);
          background-size: 48px 48px;
          pointer-events: none;
          z-index: 0;
        }

        .ats-inner {
          position: relative;
          z-index: 1;
        }

        /* ── Hero ── */
        .ats-hero {
          text-align: center;
          padding: 90px 20px 60px;
        }

        .ats-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #AFA9EC;
          background: rgba(83,74,183,0.15);
          border: 1px solid rgba(83,74,183,0.35);
          padding: 5px 14px;
          border-radius: 20px;
          margin-bottom: 24px;
        }

        .ats-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #7F77DD;
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(0.7); }
        }

        .ats-hero h1 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 20px;
          background: linear-gradient(135deg, #fff 30%, #AFA9EC 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ats-hero p {
          font-size: 17px;
          color: rgba(200,195,230,0.7);
          max-width: 540px;
          margin: 0 auto;
          line-height: 1.75;
        }

        /* ── Section headers ── */
        .section-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #7F77DD;
          margin-bottom: 10px;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 700;
          color: #fff;
          margin-bottom: 16px;
        }

        .section-desc {
          color: rgba(200,195,230,0.65);
          font-size: 15px;
          line-height: 1.75;
        }

        /* ── About section ── */
        .about-section {
          padding: 60px 0;
        }

        .about-img-wrap {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
        }

        .about-img-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 20px;
          border: 1px solid rgba(127,119,221,0.3);
          pointer-events: none;
        }

        .about-img-wrap img {
          border-radius: 20px;
          width: 100%;
          display: block;
          filter: brightness(0.85) saturate(1.1);
        }

        /* ── Service cards ── */
        .services-section { padding: 60px 0; }

        .service-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(127,119,221,0.18);
          border-radius: 18px;
          padding: 32px 24px;
          height: 100%;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, #534AB7, #7F77DD, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .service-card:hover {
          transform: translateY(-6px);
          border-color: rgba(127,119,221,0.5);
          box-shadow: 0 20px 48px rgba(83,74,183,0.25);
        }

        .service-card:hover::before { opacity: 1; }

        .service-icon {
          width: 48px; height: 48px;
          border-radius: 12px;
          background: rgba(83,74,183,0.18);
          border: 1px solid rgba(127,119,221,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          margin: 0 auto 20px;
        }

        .service-card h5 {
          font-family: 'Syne', sans-serif;
          font-size: 17px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
        }

        .service-card p {
          color: rgba(200,195,230,0.65);
          font-size: 14px;
          line-height: 1.7;
          margin: 0;
        }

        /* ── Process steps ── */
        .process-section { padding: 60px 0; }

        .process-step {
          text-align: center;
          padding: 28px 16px;
          position: relative;
        }

        .step-number {
          font-family: 'Syne', sans-serif;
          font-size: 42px;
          font-weight: 800;
          color: rgba(127,119,221,0.12);
          line-height: 1;
          margin-bottom: 8px;
        }

        .step-label {
          font-size: 13px;
          font-weight: 500;
          color: rgba(200,195,230,0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .step-check {
          width: 18px; height: 18px;
          border-radius: 50%;
          background: rgba(83,74,183,0.25);
          border: 1px solid #534AB7;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          font-size: 9px;
          color: #AFA9EC;
          flex-shrink: 0;
        }

        /* ── Why choose ── */
        .why-section { padding: 60px 0; }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }

        .why-item {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(127,119,221,0.15);
          border-radius: 14px;
          padding: 24px 20px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          transition: border-color 0.25s, background 0.25s;
        }

        .why-item:hover {
          border-color: rgba(127,119,221,0.4);
          background: rgba(83,74,183,0.07);
        }

        .why-check {
          width: 28px; height: 28px;
          border-radius: 8px;
          background: rgba(83,74,183,0.2);
          border: 1px solid rgba(127,119,221,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #AFA9EC;
          font-size: 13px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .why-text {
          font-size: 14px;
          font-weight: 500;
          color: rgba(220,215,255,0.85);
          line-height: 1.5;
        }

        /* ── Divider ── */
        .ats-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(127,119,221,0.3), transparent);
          margin: 20px 0;
        }

        /* ── CTA ── */
        .cta-section {
          text-align: center;
          padding: 80px 20px;
          position: relative;
        }

        .cta-glow {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 400px; height: 400px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(83,74,183,0.18) 0%, transparent 70%);
          pointer-events: none;
        }

        .cta-section h3 {
          font-family: 'Syne', sans-serif;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          font-weight: 800;
          color: #fff;
          margin-bottom: 14px;
          position: relative;
        }

        .cta-section p {
          color: rgba(200,195,230,0.65);
          font-size: 16px;
          margin-bottom: 36px;
          position: relative;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #7F77DD, #534AB7);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          padding: 14px 32px;
          border-radius: 12px;
          text-decoration: none;
          border: none;
          box-shadow: 0 8px 28px rgba(83,74,183,0.45);
          transition: all 0.25s ease;
          position: relative;
        }

        .cta-btn:hover {
          background: linear-gradient(135deg, #AFA9EC, #7F77DD);
          box-shadow: 0 12px 36px rgba(127,119,221,0.55);
          transform: translateY(-3px);
          color: #fff;
          text-decoration: none;
        }

        /* ── Fade-up animation ── */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fade-up { animation: fadeUp 0.65s ease forwards; }
        .fade-up-1 { animation-delay: 0.1s; opacity: 0; }
        .fade-up-2 { animation-delay: 0.2s; opacity: 0; }
        .fade-up-3 { animation-delay: 0.3s; opacity: 0; }
        .fade-up-4 { animation-delay: 0.4s; opacity: 0; }
      `}</style>

      <div className="ats-page">
        <div className="ats-inner container-fluid px-3 px-md-5">

          {/* ── Hero ── */}
          <div className="ats-hero fade-up fade-up-1">
            <div className="ats-eyebrow">
              <span className="ats-eyebrow-dot"></span>
              Atmasamman Tech Services
            </div>
            <h1>Innovative IT Solutions<br />for the Digital Era</h1>
            <p>
              Delivering scalable applications, modern websites, and AI-driven
              systems that solve real-world problems.
            </p>
          </div>

          <div className="ats-divider" />

          {/* ── About ── */}
          <div className="about-section">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 fade-up fade-up-2">
                <div className="about-img-wrap">
                  <img src="/assets/images/ecosystem.png" alt="ATS ecosystem" />
                </div>
              </div>
              <div className="col-lg-6 fade-up fade-up-3">
                <p className="section-label">Who We Are</p>
                <h2 className="section-title">The Technology Wing of Atmasamman Group</h2>
                <p className="section-desc mb-3">
                  Atmasamman Tech Services (ATS) is focused on delivering
                  high-quality IT solutions for startups, businesses, and individuals
                  who want to thrive in the digital world.
                </p>
                <p className="section-desc">
                  We specialize in building scalable applications, modern websites,
                  and AI-driven systems to solve real-world problems — affordably
                  and reliably.
                </p>
              </div>
            </div>
          </div>

          <div className="ats-divider" />

          {/* ── Services ── */}
          <div className="services-section">
            <div className="text-center mb-5">
              <p className="section-label">What We Do</p>
              <h2 className="section-title">Our Services</h2>
            </div>
            <div className="row g-4">
              {[
                { icon: "🌐", title: "Web Development", desc: "Responsive and modern websites using React, Node.js, and the latest web technologies." },
                { icon: "🤖", title: "AI Solutions", desc: "Smart AI-based applications including chatbots, automation pipelines, and analytics." },
                { icon: "📱", title: "App Development", desc: "Build scalable mobile and web applications tailored precisely to your business needs." },
              ].map((s, i) => (
                <div key={i} className={`col-md-4 fade-up fade-up-${i + 2}`}>
                  <div className="service-card text-center">
                    <div className="service-icon">{s.icon}</div>
                    <h5>{s.title}</h5>
                    <p>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ats-divider" />

          {/* ── Process ── */}
          <div className="process-section">
            <div className="text-center mb-5">
              <p className="section-label">How We Work</p>
              <h2 className="section-title">Our Process</h2>
            </div>
            <div className="row g-2">
              {[
                "Requirement Analysis",
                "Design & Development",
                "Testing & Deployment",
                "Support & Maintenance",
              ].map((step, i) => (
                <div key={i} className="col-md-3">
                  <div className="process-step">
                    <div className="step-number">0{i + 1}</div>
                    <div className="step-label">
                      <span className="step-check">✓</span>
                      {step}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="ats-divider" />

          {/* ── Why Choose ── */}
          <div className="why-section">
            <div className="text-center mb-5">
              <p className="section-label">Our Edge</p>
              <h2 className="section-title">Why Choose ATS?</h2>
            </div>
            <div className="why-grid">
              {[
                { icon: "⚡", text: "Skilled, experienced developers" },
                { icon: "💰", text: "Affordable, transparent solutions" },
                { icon: "🕐", text: "On-time delivery, every time" },
                { icon: "🎯", text: "Client-focused approach" },
              ].map((item, i) => (
                <div key={i} className="why-item">
                  <div className="why-check">{item.icon}</div>
                  <div className="why-text">{item.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="cta-section">
            <div className="cta-glow"></div>
            <h3>Let's Build Something Amazing Together</h3>
            <p>Get in touch with our team to start your project today.</p>
            <Link to="/contact" className="cta-btn">
              Contact Us
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}

export default ATS;