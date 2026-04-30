import React from "react";
import { Link } from "react-router-dom";

function AIMT() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=Outfit:wght@400;500;600&display=swap');

        .aimt-page {
          font-family: 'Outfit', sans-serif;
          background: #f7f5f0;
          color: #1a1a2e;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ── Subtle dot pattern ── */
        .aimt-page::before {
          content: '';
          position: fixed;
          inset: 0;
          background-image: radial-gradient(circle, rgba(15,90,80,0.08) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
          z-index: 0;
        }

        .aimt-inner {
          position: relative;
          z-index: 1;
        }

        /* ── Hero ── */
        .aimt-hero {
          text-align: center;
          padding: 90px 20px 56px;
        }

        .aimt-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #0F5A50;
          background: rgba(15,90,80,0.1);
          border: 1px solid rgba(15,90,80,0.25);
          padding: 5px 14px;
          border-radius: 20px;
          margin-bottom: 24px;
        }

        .aimt-eyebrow-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #1D9E75;
          animation: pulse-teal 2s ease-in-out infinite;
        }

        @keyframes pulse-teal {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(0.7); }
        }

        .aimt-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4.5vw, 3.4rem);
          font-weight: 800;
          line-height: 1.15;
          margin-bottom: 20px;
          color: #0a1628;
        }

        .aimt-hero h1 span {
          color: #1D9E75;
        }

        .aimt-hero p {
          font-size: 17px;
          color: #5a6070;
          max-width: 560px;
          margin: 0 auto;
          line-height: 1.8;
        }

        /* ── Divider ── */
        .aimt-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(29,158,117,0.3), transparent);
          margin: 12px 0;
        }

        /* ── Section labels ── */
        .section-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #1D9E75;
          margin-bottom: 8px;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.5rem, 3vw, 2.1rem);
          font-weight: 700;
          color: #0a1628;
          margin-bottom: 14px;
          line-height: 1.25;
        }

        .section-desc {
          color: #5a6070;
          font-size: 15px;
          line-height: 1.8;
        }

        /* ── About ── */
        .about-section { padding: 60px 0; }

        .about-img-wrap {
          position: relative;
          border-radius: 20px;
        }

        .about-img-wrap img {
          width: 100%;
          border-radius: 20px;
          display: block;
          object-fit: cover;
          max-height: 340px;
          box-shadow: 0 20px 60px rgba(15,90,80,0.15);
        }

        .about-img-badge {
          position: absolute;
          bottom: -16px;
          right: -16px;
          background: #1D9E75;
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          padding: 10px 18px;
          border-radius: 12px;
          box-shadow: 0 8px 24px rgba(29,158,117,0.35);
          white-space: nowrap;
        }

        /* ── Program / Tech cards ── */
        .programs-section, .tech-section { padding: 60px 0; }

        .prog-card {
          background: #fff;
          border: 1px solid rgba(29,158,117,0.15);
          border-radius: 18px;
          padding: 32px 24px;
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .prog-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #1D9E75, #5DCAA5);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .prog-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(29,158,117,0.15);
          border-color: rgba(29,158,117,0.35);
        }

        .prog-card:hover::after { opacity: 1; }

        .prog-icon {
          width: 52px; height: 52px;
          border-radius: 14px;
          background: #E1F5EE;
          border: 1px solid rgba(29,158,117,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin: 0 auto 20px;
        }

        .prog-card h5 {
          font-family: 'Playfair Display', serif;
          font-size: 17px;
          font-weight: 700;
          color: #0a1628;
          margin-bottom: 10px;
        }

        .prog-card p {
          color: #5a6070;
          font-size: 14px;
          line-height: 1.7;
          margin: 0;
        }

        /* ── Tech support cards — amber tinted ── */
        .tech-card {
          background: #fff;
          border: 1px solid rgba(186,117,23,0.15);
          border-radius: 18px;
          padding: 32px 24px;
          height: 100%;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .tech-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #BA7517, #EF9F27);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .tech-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 48px rgba(186,117,23,0.13);
          border-color: rgba(186,117,23,0.35);
        }

        .tech-card:hover::after { opacity: 1; }

        .tech-icon {
          width: 52px; height: 52px;
          border-radius: 14px;
          background: #FAEEDA;
          border: 1px solid rgba(186,117,23,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin: 0 auto 20px;
        }

        .tech-card h5 {
          font-family: 'Playfair Display', serif;
          font-size: 17px;
          font-weight: 700;
          color: #0a1628;
          margin-bottom: 10px;
        }

        .tech-card p {
          color: #5a6070;
          font-size: 14px;
          line-height: 1.7;
          margin: 0;
        }

        .tech-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #BA7517;
          margin-bottom: 8px;
        }

        /* ── Why section ── */
        .why-section { padding: 60px 0; }

        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
          gap: 16px;
        }

        .why-item {
          background: #fff;
          border: 1px solid rgba(29,158,117,0.15);
          border-radius: 14px;
          padding: 22px 20px;
          display: flex;
          align-items: flex-start;
          gap: 14px;
          transition: border-color 0.25s, box-shadow 0.25s;
        }

        .why-item:hover {
          border-color: rgba(29,158,117,0.4);
          box-shadow: 0 8px 28px rgba(29,158,117,0.1);
        }

        .why-check {
          width: 28px; height: 28px;
          border-radius: 8px;
          background: #E1F5EE;
          border: 1px solid rgba(29,158,117,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0F6E56;
          font-size: 12px;
          flex-shrink: 0;
          margin-top: 1px;
        }

        .why-text {
          font-size: 14px;
          font-weight: 500;
          color: #2a3040;
          line-height: 1.55;
        }

        /* ── CTA ── */
        .cta-section {
          text-align: center;
          padding: 80px 20px;
          position: relative;
        }

        .cta-card {
          background: linear-gradient(135deg, #0a2e28, #0F5A50, #0a2040);
          border-radius: 24px;
          padding: 64px 40px;
          position: relative;
          overflow: hidden;
          max-width: 760px;
          margin: 0 auto;
        }

        .cta-card::before {
          content: '';
          position: absolute;
          top: -80px; right: -80px;
          width: 280px; height: 280px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(29,158,117,0.25) 0%, transparent 70%);
          pointer-events: none;
        }

        .cta-card h3 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 800;
          color: #fff;
          margin-bottom: 14px;
          position: relative;
        }

        .cta-card p {
          color: rgba(200,240,225,0.7);
          font-size: 16px;
          margin-bottom: 36px;
          position: relative;
        }

        .cta-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #1D9E75, #0F6E56);
          color: #fff;
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          font-weight: 600;
          padding: 14px 34px;
          border-radius: 12px;
          text-decoration: none;
          box-shadow: 0 8px 28px rgba(29,158,117,0.45);
          transition: all 0.25s ease;
          position: relative;
        }

        .cta-btn:hover {
          background: linear-gradient(135deg, #5DCAA5, #1D9E75);
          box-shadow: 0 12px 36px rgba(29,158,117,0.55);
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

      <div className="aimt-page">
        <div className="aimt-inner container-fluid px-3 px-md-5">

          {/* ── Hero ── */}
          <div className="aimt-hero fade-up fu1">
            <div className="aimt-eyebrow">
              <span className="aimt-eyebrow-dot"></span>
              Atmasamman Institute of Management & Technology
            </div>
            <h1>Empowering Students for<br /><span>the Digital Future</span></h1>
            <p>
              Career-oriented education in technology, management, and innovation —
              with real projects, mentorship, and industry exposure.
            </p>
          </div>

          <div className="aimt-divider" />

          {/* ── About ── */}
          <div className="about-section">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 fade-up fu2">
                <div className="about-img-wrap">
                  <img src="/assets/images/master.webp" alt="AIMT campus" />
                  <div className="about-img-badge">🎓 Job-Ready Programs</div>
                </div>
              </div>
              <div className="col-lg-6 fade-up fu3">
                <p className="section-label">Who We Are</p>
                <h2 className="section-title">Education Built Around Your Career</h2>
                <p className="section-desc mb-3">
                  AIMT is the education arm of Atmasamman Group, delivering
                  career-oriented programs in technology and management that go
                  beyond textbooks.
                </p>
                <p className="section-desc">
                  We provide hands-on learning, real-world projects, mentorship,
                  and technical exposure to help students become confident,
                  job-ready professionals.
                </p>
              </div>
            </div>
          </div>

          <div className="aimt-divider" />

          {/* ── Programs ── */}
          <div className="programs-section">
            <div className="text-center mb-5 fade-up fu1">
              <p className="section-label">What You'll Learn</p>
              <h2 className="section-title">Our Programs</h2>
            </div>
            <div className="row g-4">
              {[
                { icon: "🌐", title: "Web Development", desc: "Learn frontend & backend development with real-world projects using React, Node.js, and more." },
                { icon: "🤖", title: "Artificial Intelligence", desc: "Master AI, machine learning, and data science concepts with hands-on lab sessions." },
                { icon: "💼", title: "Management & Soft Skills", desc: "Build leadership, communication, and professional career skills for the modern workplace." },
              ].map((p, i) => (
                <div key={i} className={`col-md-4 fade-up fu${i + 2}`}>
                  <div className="prog-card text-center">
                    <div className="prog-icon">{p.icon}</div>
                    <h5>{p.title}</h5>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="aimt-divider" />

          {/* ── Tech Support ── */}
          <div className="tech-section">
            <div className="text-center mb-5 fade-up fu1">
              <p className="tech-label">Extra Support</p>
              <h2 className="section-title">Tech Support & Services</h2>
            </div>
            <div className="row g-4">
              {[
                { icon: "🛠️", title: "IT Support", desc: "Assistance with software, systems, and troubleshooting for smooth day-to-day operations." },
                { icon: "📐", title: "Project Guidance", desc: "Expert help building academic and real-world technical projects from concept to completion." },
                { icon: "🏢", title: "Internship Support", desc: "Guidance and placement opportunities to gain real, valuable industry experience." },
              ].map((t, i) => (
                <div key={i} className={`col-md-4 fade-up fu${i + 2}`}>
                  <div className="tech-card text-center">
                    <div className="tech-icon">{t.icon}</div>
                    <h5>{t.title}</h5>
                    <p>{t.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="aimt-divider" />

          {/* ── Why AIMT ── */}
          <div className="why-section fade-up fu2">
            <div className="text-center mb-5">
              <p className="section-label">Our Edge</p>
              <h2 className="section-title">Why Choose AIMT?</h2>
            </div>
            <div className="why-grid">
              {[
                { icon: "📚", text: "Industry-focused curriculum" },
                { icon: "🔨", text: "Hands-on project experience" },
                { icon: "🧑‍🏫", text: "Expert mentorship" },
                { icon: "🎯", text: "Career guidance & support" },
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
              <h3>Start Your Learning Journey Today</h3>
              <p>
                Join AIMT and build the skills needed to succeed in the modern
                digital world.
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

export default AIMT;