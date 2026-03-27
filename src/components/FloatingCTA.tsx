'use client';

export default function FloatingCTA() {
  return (
    <>
      <a
        href="tel:2503812088"
        aria-label="Call Mount Doug Springs at 250 381-2088"
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 90,
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          padding: '13px 20px',
          borderRadius: 100,
          background: '#29ABE2',
          color: '#1E3892',
          fontWeight: 800,
          fontSize: 14,
          textDecoration: 'none',
          boxShadow: '0 6px 24px rgba(41,171,226,0.45)',
          transition: 'transform 0.18s, box-shadow 0.18s',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px) scale(1.03)';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 10px 32px rgba(41,171,226,0.5)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.transform = 'none';
          (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 24px rgba(41,171,226,0.45)';
        }}
        className="floating-call"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3.5 2H6.5L8 5.5L6 7C7 9 9 11 11 12L12.5 10L16 11.5V14.5C16 15.328 15.328 16 14.5 16C7.596 16 2 10.404 2 3.5C2 2.672 2.672 2 3.5 2Z" stroke="#1E3892" strokeWidth="1.6" strokeLinejoin="round"/>
        </svg>
        <span>Call Now</span>
        <span style={{ fontSize: 12, opacity: 0.85, fontWeight: 600 }}>250 381-2088</span>
      </a>

      <style>{`
        @media (min-width: 768px) {
          .floating-call { display: none !important; }
        }
      `}</style>
    </>
  );
}
