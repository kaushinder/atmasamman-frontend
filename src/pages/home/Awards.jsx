import React from "react";
import Loader from "../../components/Loader";

function Awards() {
  return (
    <div className="container py-5">

      <div
        className="row align-items-center p-4"
        style={{
          borderRadius: "20px",
          background: "linear-gradient(135deg, #0f172a, #1e293b)",
          color: "white",
          boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
        }}
      >

        {/* Loader Section (replaces image) */}
        <div className="col-lg-5 text-center mb-4 mb-lg-0">
          <div
            style={{
              height: "230px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Loader />
          </div>
        </div>

        {/* Content Section */}
        <div className="col-lg-7">

          <h1
            className="fw-bold mb-3"
            style={{
              background: "linear-gradient(135deg, #60a5fa, #2563eb)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Our Vision
          </h1>

          <p style={{ opacity: 0.85, fontSize: "1.05rem" }} className="mb-4">
            To become a leading force in technology, making advanced IT solutions
            and future ready skills accessible and affordable for all.
          </p>

          <div className="row">

            {/* Our Units */}
            <div className="col-md-6 mb-3">
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "15px",
                  borderRadius: "12px",
                  backdropFilter: "blur(8px)",
                }}
              >
                <h5 className="fw-bold mb-3" style={{ color: "#60a5fa" }}>
                  Our Units
                </h5>
                <ul className="list-unstyled" style={{ fontSize: "0.95rem" }}>
                  <li className="mb-2">✔ ATS - Tech Services</li>
                  <li className="mb-2">✔ ASAI - AI School</li>
                  <li className="mb-2">✔ AIMT - Institute</li>
                  <li>✔ Atmasamman Foundation</li>
                </ul>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="col-md-6 mb-3">
              <div
                style={{
                  background: "rgba(255,255,255,0.05)",
                  padding: "15px",
                  borderRadius: "12px",
                  backdropFilter: "blur(8px)",
                }}
              >
                <h5 className="fw-bold mb-3" style={{ color: "#60a5fa" }}>
                  Why Choose Us
                </h5>
                <ul className="list-unstyled" style={{ fontSize: "0.95rem" }}>
                  <li className="mb-2">✔ Strong tech foundation</li>
                  <li className="mb-2">✔ Learn → Build → Apply</li>
                  <li>✔ Affordable & scalable learning</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Animation */}
      <style>
        {`
          .row {
            animation: fadeUp 0.8s ease-in-out;
          }

          @keyframes fadeUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}

export default Awards;