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
        backgroundColor: "#faf8f4",
        padding: "80px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div
          style={{
            width: "64px",
            height: "64px",
            borderRadius: "10px",
            backgroundColor: "#b08d42",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* The Afterkey house mark — same glyph as the favicon and nav logo */}
          <svg
            width="34"
            height="34"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#1a2332"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9.5 12 3l9 6.5" />
            <path d="M5 9.5V21h14V9.5" />
          </svg>
        </div>
        <span style={{ fontSize: "40px", fontWeight: 600, color: "#1a2332" }}>
          Afterkey
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
        <div
          style={{
            fontSize: "68px",
            fontWeight: 600,
            color: "#1a2332",
            letterSpacing: "-0.03em",
            lineHeight: 1.05,
            maxWidth: "950px",
          }}
        >
          Everything that happens after the keys.
        </div>
        <div style={{ fontSize: "30px", color: "#4f4c46", maxWidth: "920px" }}>
          Post-closing software for residential home builders — warranty
          callbacks, sub dispatch, and AI-built maintenance schedules for
          every home, under your brand.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          fontSize: "26px",
          color: "#3a5a80",
          fontWeight: 600,
        }}
      >
        getafterkey.com
      </div>
    </div>,
    { ...size },
  );
}
