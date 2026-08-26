import { ImageResponse } from "next/og";

/** Home-screen icon for iOS — same house mark as /icon, at Apple's 180px. */
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#4f46e5",
      }}
    >
      <svg
        width="110"
        height="110"
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
