import React from "react";

function Pricing() {
  return (
    <>
      <style>{`
        .plan-card {
          border-radius: 16px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          overflow: hidden;
          cursor: pointer;
        }
        .plan-card:hover { transform: translateY(-6px); }

        /* Free */
        .free-card { background: #fff; border: 1px solid #e0e0e0; }
        .free-card:hover { border-color: #7F77DD !important; box-shadow: 0 12px 40px rgba(127,119,221,0.18); }
        .free-badge { background: #EEEDFE; color: #3C3489; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; padding: 4px 10px; border-radius: 20px; display: inline-flex; align-items: center; gap: 6px; }
        .free-card .plan-name { color: #1a1a1a; font-size: 26px; font-weight: 700; }
        .free-card .plan-desc { color: #666; font-size: 14px; line-height: 1.65; }
        .free-card .feature-item { color: #666; }
        .free-card .check-icon { background: #EEEDFE; color: #534AB7; }
        .free-btn { background: transparent; border: 1.5px solid #7F77DD; color: #534AB7; border-radius: 10px; padding: 11px 0; font-size: 14px; font-weight: 600; width: 100%; transition: all 0.25s ease; cursor: pointer; }
        .free-btn:hover { background: #EEEDFE; transform: scale(1.02); }

        /* Premium */
        .premium-card { background: linear-gradient(135deg, #1a1233, #2d1f5e, #1a2d4a); border: 1px solid #534AB7 !important; }
        .premium-card:hover { box-shadow: 0 12px 48px rgba(83,74,183,0.45); border-color: #AFA9EC !important; }
        .premium-badge { background: rgba(175,169,236,0.15); color: #AFA9EC; border: 1px solid rgba(175,169,236,0.3); font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; padding: 4px 10px; border-radius: 20px; display: inline-flex; align-items: center; gap: 6px; }
        .premium-card .plan-name { color: #fff; font-size: 26px; font-weight: 700; }
        .premium-card .plan-desc { color: rgba(200,190,255,0.75); font-size: 14px; line-height: 1.65; }
        .premium-card .feature-item { color: rgba(220,215,255,0.9); }
        .premium-card .check-icon { background: rgba(127,119,221,0.3); color: #AFA9EC; }
        .premium-btn { background: linear-gradient(135deg, #7F77DD, #534AB7); color: #fff; box-shadow: 0 4px 16px rgba(83,74,183,0.4); border: none; border-radius: 10px; padding: 11px 0; font-size: 14px; font-weight: 600; width: 100%; transition: all 0.25s ease; cursor: pointer; }
        .premium-btn:hover { background: linear-gradient(135deg, #AFA9EC, #7F77DD); box-shadow: 0 6px 24px rgba(127,119,221,0.55); transform: scale(1.02); }

        /* Shared */
        .features-list { display: flex; flex-direction: column; gap: 9px; margin-bottom: 24px; list-style: none; padding: 0; }
        .feature-item { display: flex; align-items: center; gap: 10px; font-size: 13px; }
        .check-icon { width: 18px; height: 18px; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 10px; }
        .popular-ribbon { position: absolute; top: 14px; right: 14px; font-size: 10px; font-weight: 600; text-transform: uppercase; background: rgba(175,169,236,0.2); color: #AFA9EC; border: 1px solid rgba(175,169,236,0.35); padding: 3px 9px; border-radius: 20px; }
        .shimmer { position: absolute; top: -60%; left: -60%; width: 40%; height: 200%; background: linear-gradient(105deg, transparent 40%, rgba(175,169,236,0.12) 50%, transparent 60%); transform: rotate(25deg); transition: left 0.6s ease; pointer-events: none; }
        .premium-card:hover .shimmer { left: 120%; }
        .badge-dot { width: 6px; height: 6px; border-radius: 50%; background: currentColor; display: inline-block; flex-shrink: 0; }
      `}</style>

      <div className="container py-5">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-lg-5 mb-4">
            <h1 className="fw-bold mb-3">Affordable Learning & Services</h1>
            <p className="text-muted">
              Atmasamman Group provides high-quality IT services and career-focused
              education at affordable pricing, making technology accessible for everyone.
            </p>
            <a href="/contact" className="text-primary text-decoration-none fw-semibold">
              Get Started <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>

          {/* Right Cards */}
          <div className="col-lg-7">
            <div className="row text-center">

              {/* Free Card */}
              <div className="col-md-6 mb-3">
                <div className="plan-card free-card p-4 h-100">
                  <div className="mb-3">
                    <span className="free-badge">
                      <span className="badge-dot"></span> Free
                    </span>
                  </div>
                  <h2 className="plan-name mb-2">Starter</h2>
                  <p className="plan-desc mb-3">
                    Basic learning resources, workshops, and community support
                    to kickstart your journey.
                  </p>
                  <ul className="features-list text-start">
                    <li className="feature-item">
                      <span className="check-icon">✓</span> Core learning resources
                    </li>
                    <li className="feature-item">
                      <span className="check-icon">✓</span> Community workshops
                    </li>
                    <li className="feature-item">
                      <span className="check-icon">✓</span> Peer community access
                    </li>
                    <li className="feature-item">
                      <span className="check-icon">✓</span> Basic support
                    </li>
                  </ul>
                  <button className="free-btn">Get started free</button>
                </div>
              </div>

              {/* Premium Card */}
              <div className="col-md-6 mb-3">
                <div className="plan-card premium-card p-4 h-100 position-relative">
                  <div className="shimmer"></div>
                  <span className="popular-ribbon">Most popular</span>
                  <div className="mb-3">
                    <span className="premium-badge">
                      <span className="badge-dot"></span> Premium
                    </span>
                  </div>
                  <h2 className="plan-name mb-2">Pro</h2>
                  <p className="plan-desc mb-3">
                    Advanced courses, AI training, real-world projects, and
                    career guidance for professional growth.
                  </p>
                  <ul className="features-list text-start">
                    <li className="feature-item">
                      <span className="check-icon">✓</span> Advanced course library
                    </li>
                    <li className="feature-item">
                      <span className="check-icon">✓</span> AI-powered training
                    </li>
                    <li className="feature-item">
                      <span className="check-icon">✓</span> Real-world projects
                    </li>
                    <li className="feature-item">
                      <span className="check-icon">✓</span> Career guidance & mentorship
                    </li>
                  </ul>
                  <button className="premium-btn">Upgrade to Pro →</button>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Pricing;