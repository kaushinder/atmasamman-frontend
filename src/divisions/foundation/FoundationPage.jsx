import React from "react";
import { Link } from "react-router-dom";

function Foundation() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Plus+Jakarta+Sans:wght@400;500;600&display=swap');

        .found-page {
          font-family: 'Plus Jakarta Sans', sans-serif;
          background: #faf7f2;
          color: #2c1f14;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ── Warm grain texture overlay ── */
        .found-page::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image:
            radial-gradient(circle at 15% 25%, rgba(210,120,50,0.07) 0%, transparent 50%),
            radial-gradient(circle at 85% 75%, rgba(180,140,80,0.06) 0%, transparent 50%);
          pointer-events: none;
          z-index: 0;
        }

        .found-inner {
          position: relative;
          z-index: 1;
        }

        /* ── Hero ── */
        .found-hero {
          text-align: center;
          padding: 90px 20px 56px;
        }

        .found-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #c2620a;
          background: rgba(194,98,10,0.08);
          border: 1px solid rgba(194,98,10,0.22);
          padding: 5px 16px;
          border-radius: 20px;
          margin-bottom: 26px;
        }

        .found-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #e07b2a;
          animation: pulse-terra 2.2s ease-in-out infinite;
        }

        @keyframes pulse-terra {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.65); }
        }

        .found-hero h1 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.4rem, 5vw, 4rem);
          font-weight: 700;
          line-height: 1.1;
          margin-bottom: 20px;
          color: #1a0f08;
        }

        .found-hero h1 em {
          font-style: italic;
          color: #c2620a;
        }

        .found-hero p {
          font-size: 17px;
          color: #7a6355;
          max-width: 540px;
          margin: 0 auto;
          line-height: 1.85;
        }

        /* ── Divider ── */
        .found-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(194,98,10,0.25), transparent);
          margin: 12px 0;
        }

        /* ── Section labels ── */
        .section-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: #c2620a;
          margin-bottom: 8px;
        }

        .section-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.7rem, 3vw, 2.5rem);
          font-weight: 700;
          color: #1a0f08;
          margin-bottom: 14px;
          line-height: 1.2;
        }

        .section-desc {
          color: #7a6355;
          font-size: 15px;
          line-height: 1.85;
        }

        /* ── About ── */
        .about-section { padding: 60px 0; }

        .found-img-wrap {
          position: relative;
          border-radius: 20px;
        }

        .found-img-wrap img {
          width: 100%;
          border-radius: 20px;
          display: block;
          object-fit: cover;
          max-height: 360px;
          box-shadow: 0 24px 64px rgba(120,60,20,0.18);
        }

        .found-img-badge {
          position: absolute;
          bottom: -16px;
          left: 24px;
          background: #c2620a;
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          padding: 10px 18px;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(194,98,10,0.35);
          white-space: nowrap;
          letter-spacing: 0.03em;
        }

        /* ── Focus area cards ── */
        .focus-section { padding: 60px 0; }

        .focus-card {
          background: #fff;
          border: 1px solid rgba(194,98,10,0.12);
          border-radius: 20px;
          padding: 36px 28px;
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        .focus-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #c2620a, #e8a857);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s ease;
        }

        .focus-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(120,60,20,0.12);
          border-color: rgba(194,98,10,0.28);
        }

        .focus-card:hover::before { transform: scaleX(1); }

        .focus-icon {
          width: 56px; height: 56px;
          border-radius: 16px;
          background: rgba(194,98,10,0.08);
          border: 1px solid rgba(194,98,10,0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 26px;
          margin: 0 auto 22px;
          transition: background 0.25s;
        }

        .focus-card:hover .focus-icon {
          background: rgba(194,98,10,0.14);
        }

        .focus-card h5 {
          font-family: 'Cormorant Garamond', serif;
          font-size: 20px;
          font-weight: 700;
          color: #1a0f08;
          margin-bottom: 10px;
        }

        .focus-card p {
          color: #7a6355;
          font-size: 14px;
          line-height: 1.75;
          margin: 0;
        }

        /* ── Mission banner ── */
        .mission-section { padding: 60px 0; }

        .mission-card {
          background: linear-gradient(135deg, #2c1202, #5a2808, #3a1a06);
          border-radius: 24px;
          padding: 64px 48px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .mission-card::before {
          content: '"';
          font-family: 'Cormorant Garamond', serif;
          position: absolute;
          top: -20px; left: 32px;
          font-size: 180px;
          color: rgba(232,168,87,0.1);
          line-height: 1;
          pointer-events: none;
          user-select: none;
        }

        .mission-card::after {
          content: '';
          position: absolute;
          bottom: -60px; right: -60px;
          width: 240px; height: 240px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(194,98,10,0.2) 0%, transparent 70%);
          pointer-events: none;
        }

        .mission-card p {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.25rem, 2.5vw, 1.65rem);
          font-weight: 600;
          color: #f0d9b5;
          line-height: 1.7;
          max-width: 680px;
          margin: 0 auto 24px;
          position: relative;
        }

        .mission-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #e8a857;
          border: 1px solid rgba(232,168,87,0.3);
          padding: 4px 14px;
          border-radius: 20px;
          position: relative;
        }

        /* ── Why / values grid ── */
        .values-section { padding: 40px 0 60px; }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }

        .value-item {
          background: #fff;
          border: 1px solid rgba(194,98,10,0.12);
          border-radius: 14px;
          padding: 22px 20px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          transition: border-color 0.25s, box-shadow 0.25s;
        }

        .value-item:hover {
          border-color: rgba(194,98,10,0.32);
          box-shadow: 0 8px 24px rgba(120,60,20,0.08);
        }

        .value-icon {
          width: 28px; height: 28px;
          border-radius: 8px;
          background: rgba(194,98,10,0.08);
          border: 1px solid rgba(194,98,10,0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .value-text {
          font-size: 14px;
          font-weight: 500;
          color: #3a2518;
          line-height: 1.55;
        }

        /* ── CTA ── */
        .cta-section {
          padding: 40px 20px 80px;
        }

        .cta-wrap {
          text-align: center;
          background: #fff;
          border: 1px solid rgba(194,98,10,0.15);
          border-radius: 24px;
          padding: 64px 40px;
          max-width: 700px;
          margin: 0 auto;
          box-shadow: 0 12px 48px rgba(120,60,20,0.08);
          position: relative;
          overflow: hidden;
        }

        .cta-wrap::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          background: linear-gradient(90deg, #c2620a, #e8a857, #c2620a);
        }

        .cta-wrap h3 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.6rem, 3vw, 2.3rem);
          font-weight: 700;
          color: #1a0f08;
          margin-bottom: 14px;
        }

        .cta-wrap p {
          color: #7a6355;
          font-size: 16px;
          margin-bottom: 36px;
          line-height: 1.8;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #c2620a, #9e4a06);
          color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          padding: 14px 34px;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 8px 28px rgba(194,98,10,0.35);
          transition: all 0.25s ease;
        }

        .cta-btn:hover {
          background: linear-gradient(135deg, #e07b2a, #c2620a);
          box-shadow: 0 12px 36px rgba(194,98,10,0.5);
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

      <div className="found-page">
        <div className="found-inner container-fluid px-3 px-md-5">

          {/* ── Hero ── */}
          <div className="found-hero fade-up fu1">
            <div className="found-eyebrow">
              <span className="found-eyebrow-dot"></span>
              Atmasamman Foundation
            </div>
            <h1>Empowering Lives Through<br /><em>Education & Opportunity</em></h1>
            <p>
              Bridging the gap between knowledge and opportunity — for those
              who need it most.
            </p>
          </div>

          <div className="found-divider" />

          {/* ── About ── */}
          <div className="about-section">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 fade-up fu2">
                <div className="found-img-wrap">
                  <img src="/assets/images/foundation.jpg" alt="Atmasamman Foundation" />
                  <div className="found-img-badge">🌱 Social Impact Initiative</div>
                </div>
              </div>
              <div className="col-lg-6 fade-up fu3" style={{ paddingTop: "16px" }}>
                <p className="section-label">Who We Are</p>
                <h2 className="section-title">Creating Opportunity for Everyone</h2>
                <p className="section-desc mb-3">
                  Atmasamman Foundation is the social initiative of Atmasamman Group,
                  focused on creating opportunities for individuals through education,
                  skill development, and technology access.
                </p>
                <p className="section-desc">
                  Our mission is to support students, empower communities, and bridge
                  the gap between knowledge and opportunity — especially for those
                  who need it the most.
                </p>
              </div>
            </div>
          </div>

          <div className="found-divider" />

          {/* ── Focus Areas ── */}
          <div className="focus-section">
            <div className="text-center mb-5 fade-up fu1">
              <p className="section-label">What We Do</p>
              <h2 className="section-title">Our Focus Areas</h2>
            </div>
            <div className="row g-4">
              {[
                { icon: "📚", title: "Education Support", desc: "Providing learning resources, mentorship, and guidance to students who lack access to quality education." },
                { icon: "🛠️", title: "Skill Development", desc: "Training programs that help individuals build job-ready skills and unlock new career opportunities." },
                { icon: "🤝", title: "Social Impact", desc: "Community-driven initiatives aimed at uplifting underserved groups and creating lasting change." },
              ].map((f, i) => (
                <div key={i} className={`col-md-4 fade-up fu${i + 2}`}>
                  <div className="focus-card">
                    <div className="focus-icon">{f.icon}</div>
                    <h5>{f.title}</h5>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="found-divider" />

          {/* ── Mission ── */}
          <div className="mission-section fade-up fu2">
            <div className="mission-card">
              <p>
                To create an inclusive ecosystem where education, technology,
                and opportunity are accessible to everyone — enabling
                individuals to grow, lead, and succeed on their own terms.
              </p>
              <span className="mission-tag">✦ Our Mission</span>
            </div>
          </div>

          <div className="found-divider" />

          {/* ── Values ── */}
          <div className="values-section fade-up fu2">
            <div className="text-center mb-5">
              <p className="section-label">Our Values</p>
              <h2 className="section-title">What Drives Us</h2>
            </div>
            <div className="values-grid">
              {[
                { icon: "🌍", text: "Inclusive access to education" },
                { icon: "💡", text: "Technology as a tool for uplift" },
                { icon: "🫂", text: "Community-first approach" },
                { icon: "🌱", text: "Sustainable long-term impact" },
              ].map((v, i) => (
                <div key={i} className="value-item">
                  <div className="value-icon">{v.icon}</div>
                  <div className="value-text">{v.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── CTA ── */}
          <div className="cta-section fade-up fu3">
            <div className="cta-wrap">
              <h3>Be a Part of the Change</h3>
              <p>
                Join us in making a difference. Together, we can empower
                lives and build a better future for all.
              </p>
              <Link to="/getInvolved" className="cta-btn">
                Get Involved
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

export default Foundation;