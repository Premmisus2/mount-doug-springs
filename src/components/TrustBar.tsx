'use client';

import { useInView } from '@/hooks/useInView';

const P = '#1E3892';

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
      role="region"
      aria-label="Business credentials"
      className="trust-bar-wrap"
      style={{
        background: '#ffffff',
        borderBottom: '1px solid #f0f4f8',
        padding: '0 24px',
      }}
    >
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className="trust-bar-inner"
        style={{
          maxWidth: 1280, margin: '0 auto',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {badges.map((b, i) => (
          <div
            key={i}
            style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '13px 22px',
              borderRight: i < badges.length - 1 ? '1px solid #f0f4f8' : 'none',
              flexShrink: 0,
              ...(inView
                ? { opacity: 1, transform: 'translateY(0)' }
                : { opacity: 0, transform: 'translateY(10px)' }),
              transition: `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`,
            }}
          >
            <span style={{ fontSize: 11, color: '#94a3b8', fontWeight: 800, flexShrink: 0 }}>{b.icon}</span>
            <span style={{ fontSize: 12, fontWeight: 600, color: P, whiteSpace: 'nowrap', letterSpacing: '0.01em' }}>{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
