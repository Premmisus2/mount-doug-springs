'use client';

import { useInView } from '@/hooks/useInView';

const P = '#1E3892';
const T = '#29ABE2';

const badges = [
  { icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1L9.8 5.5L14.5 6.2L11 9.5L11.8 14.3L8 12.2L4.2 14.3L5 9.5L1.5 6.2L6.2 5.5L8 1Z" fill={P}/></svg>, label: 'BBB A+ Rated', sub: 'Accredited Business' },
  { icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="7" stroke={P} strokeWidth="1.5"/><path d="M5 8.5L7 10.5L11 6.5" stroke={T} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>, label: 'WorkSafeBC', sub: 'Certified & Compliant' },
  { icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 1.5L9.5 5.8L14 6.5L11 9.3L11.7 13.8L8 11.7L4.3 13.8L5 9.3L2 6.5L6.5 5.8L8 1.5Z" fill="#facc15"/></svg>, label: '5.0 Google Reviews', sub: '200+ Verified Reviews' },
  { icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2L3 4.5V8C3 11.5 5.2 14.2 8 15C10.8 14.2 13 11.5 13 8V4.5L8 2Z" stroke={P} strokeWidth="1.5" strokeLinejoin="round"/><path d="M5.5 8L7 9.5L10.5 6" stroke={T} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>, label: 'Chamber Member', sub: 'Victoria Chamber of Commerce' },
  { icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M8 2C8 2 4 6.5 4 9.5C4 11.985 5.791 14 8 14C10.209 14 12 11.985 12 9.5C12 6.5 8 2 8 2Z" fill={`${T}30`} stroke={P} strokeWidth="1.5"/></svg>, label: 'Family Owned', sub: 'Victoria, BC — Since 2003' },
];

export default function TrustBar() {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      role="region"
      aria-label="Business credentials and trust signals"
      style={{
        background: '#fff',
        borderBottom: '1px solid #e2e8f0',
        padding: '0 32px',
      }}
    >
      <div className="trust-bar-inner" style={{
        maxWidth: 1280, margin: '0 auto',
        display: 'flex', alignItems: 'stretch', justifyContent: 'center',
        flexWrap: 'wrap',
      }}>
        {badges.map((b, i) => (
          <div
            key={i}
            className="reveal"
            style={{
              display: 'flex', alignItems: 'center', gap: 10,
              padding: '14px 24px',
              borderRight: i < badges.length - 1 ? '1px solid #f1f5f9' : 'none',
              flexShrink: 0,
              transitionDelay: `${i * 0.08}s`,
              ...(inView ? { opacity: 1, transform: 'translateY(0)' } : { opacity: 0, transform: 'translateY(16px)' }),
              transition: `opacity 0.5s ease ${i * 0.08}s, transform 0.5s ease ${i * 0.08}s`,
            }}
          >
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: '#f8fafc', border: '1px solid #f1f5f9',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              {b.icon}
            </div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 700, color: P, lineHeight: 1.2, whiteSpace: 'nowrap' }}>{b.label}</p>
              <p style={{ fontSize: 11, color: '#9E9E9E', lineHeight: 1.2, whiteSpace: 'nowrap' }}>{b.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
