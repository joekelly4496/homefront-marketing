import { ImageResponse } from "next/og";

/**
 * Browser-tab icon: the Afterkey house mark — white house glyph on the
 * brand-indigo rounded square, matching the nav Logo and OG image. Served
 * by Next at /icon as a PNG; replaces the stock scaffold favicon.ico.
 */
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#4f46e5",
        borderRadius: "14px",
      }}
    >
      <svg
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M3 9.5 12 3l9 6.5" />
        <path d="M5 9.5V21h14V9.5" />
      </svg>
    </div>,
    { ...size },
  );
}
