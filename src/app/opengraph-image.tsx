import { ImageResponse } from "next/og";
import {
  LOCKUP_MARK_TRANSFORM,
  LOCKUP_VIEWBOX,
  LOCKUP_WORD_TRANSFORM,
  WORDMARK_PATH,
} from "@/components/ui/logo-geometry";

export const alt =
  "Afterkey — post-closing software for residential home builders and remodelers";
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
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* The Afterkey lockup: house-key mark + outlined wordmark */}
        <svg width="400" height="65" viewBox={LOCKUP_VIEWBOX}>
          <g transform={LOCKUP_MARK_TRANSFORM}>
            <circle cx="44" cy="62" r="26" fill="none" stroke="#b08d42" strokeWidth="16" />
            <path d="M70 54H214L222 62L214 70H70Z" fill="#b08d42" />
            <path
              d="M150 54V32L172 14L194 32V54ZM166 54V40H178V54Z"
              fill="#b08d42"
              fillRule="evenodd"
            />
          </g>
          <path transform={LOCKUP_WORD_TRANSFORM} d={WORDMARK_PATH} fill="#1a2332" />
        </svg>
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
          Post-closing software for home builders and remodelers — warranty
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
