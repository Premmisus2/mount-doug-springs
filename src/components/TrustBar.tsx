'use client';

import { useInView } from '@/hooks/useInView';

const P = '#1E3892';
const T = '#29ABE2';

const badges = [
  { icon: '★', label: 'BBB A+ Rated' },
  { icon: '✓', label: 'WorkSafeBC Certified' },
  { icon: '★', label: '5.0 Google Reviews' },
  { icon: '◆', label: 'Chamber Member' },
  { icon: '♥', label: 'Family Owned Since 2003' },
];

export default function TrustBar() {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      role="region"
      aria-label="Business credentials"
      style={{
        background: 'linear-gradient(to bottom, #eef6fc 0%, #ffffff 100%)',
        borderBottom: '1px solid #e8f0f8',
        padding: '0 24px',
      }}
    >
      <div className="trust-row" style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        {badges.map((b, i) => (
          <div
            key={i}
            className="trust-item"
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '13px 22px',
              borderRight: i < badges.length - 1 ? '1px solid #e8f0f8' : 'none',
              ...(inView
                ? { opacity: 1, transform: 'translateY(0)' }
                : { opacity: 0, transform: 'translateY(10px)' }),
              transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`,
            }}
          >
            <span style={{ fontSize: 11, color: T, fontWeight: 800, flexShrink: 0 }}>{b.icon}</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: P, whiteSpace: 'nowrap', letterSpacing: '0.01em' }}>{b.label}</span>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .trust-row {
            justify-content: flex-start !important;
          }
          .trust-item {
            width: 50%;
            border-right: none !important;
            border-bottom: 1px solid #f0f5fa;
            padding: 11px 12px !important;
            box-sizing: border-box;
          }
          .trust-item:nth-child(n+5) {
            border-bottom: none;
          }
        }
        @media (max-width: 380px) {
          .trust-item { width: 100%; }
        }
      `}</style>
    </div>
  );
}
