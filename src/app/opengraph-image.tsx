import { ImageResponse } from "next/og";

export const alt =
  "Afterkey — post-closing software for residential home builders";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#ffffff",
        padding: "80px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "16px",
            backgroundColor: "#4f46e5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Key — the "after the keys are handed over" mark */}
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="7.5" cy="15.5" r="4.5" />
            <path d="m10.7 12.3 8.5-8.5" />
            <path d="m17 5 3 3" />
            <path d="m14 8 3 3" />
          </svg>
        </div>
        <span style={{ fontSize: "40px", fontWeight: 600, color: "#0f172a" }}>
          Afterkey
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div
          style={{
            fontSize: "68px",
            fontWeight: 600,
            color: "#0f172a",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            maxWidth: "950px",
          }}
        >
          Everything that happens after the keys.
        </div>
        <div style={{ fontSize: "30px", color: "#475569", maxWidth: "920px" }}>
          Post-closing software for residential home builders — warranty
          requests, subcontractor coordination, and AI-built maintenance
          schedules for every home.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: "26px",
          color: "#4f46e5",
          fontWeight: 600,
        }}
      >
        getafterkey.com
      </div>
    </div>,
    { ...size },
  );
}
