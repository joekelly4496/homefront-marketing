import { ImageResponse } from 'next/og';

export const alt = 'Homefront — Post-closing service, finally organized';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#ffffff',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              backgroundColor: '#4f46e5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
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
              <path d="M3 9.5 12 3l9 6.5" />
              <path d="M5 9.5V21h14V9.5" />
            </svg>
          </div>
          <span
            style={{ fontSize: '40px', fontWeight: 600, color: '#0f172a' }}
          >
            Homefront
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 600,
              color: '#0f172a',
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              maxWidth: '950px',
            }}
          >
            Post-closing service, finally organized.
          </div>
          <div style={{ fontSize: '32px', color: '#475569', maxWidth: '900px' }}>
            Builders, homeowners, and subcontractors on the same page — from the
            first warranty request to the final completion photo.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            fontSize: '26px',
            color: '#4f46e5',
            fontWeight: 600,
          }}
        >
          Built for residential home builders
        </div>
      </div>
    ),
    { ...size }
  );
}
