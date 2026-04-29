import React from "react";

export const ShimmerCard = ({ height = 200, borderRadius = 12 }) => (
  <div className="shimmer-card" style={{ height, borderRadius }} />
);

export const ShimmerText = ({ width = "100%", height = 18, mb = 8 }) => (
  <div className="shimmer-card" style={{ width, height, borderRadius: 6, marginBottom: mb }} />
);

export const ShimmerPage = () => (
  <div style={{ padding: "40px 20px", maxWidth: 1000, margin: "0 auto" }}>
    <div className="shimmer-card" style={{ height: 48, width: "40%", borderRadius: 8, marginBottom: 16, marginLeft: "auto", marginRight: "auto" }} />
    <div className="shimmer-card" style={{ height: 24, width: "60%", borderRadius: 6, marginBottom: 40, marginLeft: "auto", marginRight: "auto" }} />
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
      {[1,2,3,4].map(i => (
        <div key={i} style={{ background: "#fff", borderRadius: 16, padding: 24, boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
          <div className="shimmer-card" style={{ height: 160, borderRadius: 10, marginBottom: 16 }} />
          <div className="shimmer-card" style={{ height: 22, width: "70%", borderRadius: 6, marginBottom: 10 }} />
          <div className="shimmer-card" style={{ height: 16, width: "90%", borderRadius: 6, marginBottom: 8 }} />
          <div className="shimmer-card" style={{ height: 16, width: "75%", borderRadius: 6 }} />
        </div>
      ))}
    </div>
    <style>{`
      .shimmer-card {
        background: linear-gradient(90deg, #e8edf5 25%, #f5f8ff 50%, #e8edf5 75%);
        background-size: 200% 100%;
        animation: shimmer 1.6s infinite ease-in-out;
      }
      @keyframes shimmer {
        from { background-position: 200% 0; }
        to { background-position: -200% 0; }
      }
    `}</style>
  </div>
);

export default ShimmerPage;
