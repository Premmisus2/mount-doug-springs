'use client';
import { useState } from 'react';

/* ------------------------------------------------------------------ */
/*  Explore the Range — horizontal scroll cards (like Enrich20)        */
/* ------------------------------------------------------------------ */

const range = [
  {
    tag: 'Everyday Purified',
    name: 'Classic Still Water',
    img: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=800&q=80',
  },
  {
    tag: 'High Performance',
    name: 'Oxygenated Water',
    img: 'https://images.unsplash.com/photo-1560023907-5f339617ea30?auto=format&fit=crop&w=800&q=80',
  },
  {
    tag: 'Emergency Ready',
    name: 'Emergency Supply Jug',
    img: 'https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&w=800&q=80',
  },
  {
    tag: 'Best Value',
    name: '20× Pre-Pay Bundle',
    img: 'https://images.unsplash.com/photo-1625465809518-56046973ecbf?auto=format&fit=crop&w=800&q=80',
  },
];

export default function Range() {
  const [active, setActive] = useState(0);

  const scroll = (dir: -1 | 1) => {
    setActive(Math.max(0, Math.min(range.length - 1, active + dir)));
    const el = document.getElementById('range-scroll');
    if (el) el.scrollBy({ left: dir * 380, behavior: 'smooth' });
  };

  return (
    <section style={{ padding: '88px 0', background: '#1a2760' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>

        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 20 }}>
          <div style={{ maxWidth: 420 }}>
            <p style={{ fontSize: 12, fontWeight: 700, color: '#38bdf8', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>
              Explore the Range
            </p>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: 12 }}>
              Water for Every Need
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(186,230,253,0.7)', lineHeight: 1.65 }}>
              From everyday hydration to emergency preparedness — we have the right water for every situation.
            </p>
          </div>

          {/* Arrow controls */}
          <div style={{ display: 'flex', gap: 10 }}>
            {([-1, 1] as (-1 | 1)[]).map((dir, i) => (
              <button key={i} onClick={() => scroll(dir)} style={{
                width: 48, height: 48, borderRadius: '50%', cursor: 'pointer',
                background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.18)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'}
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d={dir === -1 ? 'M11 4L6 9L11 14' : 'M7 4L12 9L7 14'} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal scroll cards */}
        <div
          id="range-scroll"
          className="no-scrollbar"
          style={{ display: 'flex', gap: 20, overflowX: 'auto', scrollSnapType: 'x mandatory', paddingBottom: 8 }}
        >
          {range.map((item, i) => (
            <div
              key={i}
              className="group"
              style={{
                minWidth: 340, flexShrink: 0, scrollSnapAlign: 'start',
                borderRadius: 24, overflow: 'hidden',
                border: '1px solid rgba(255,255,255,0.08)',
                cursor: 'pointer', position: 'relative',
                aspectRatio: '4/5',
                background: '#0f2d4a',
                transition: 'transform 0.25s',
              }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)'}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.transform = 'none'}
            >
              <img src={item.img} alt={item.name} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.65, display: 'block', position: 'absolute', inset: 0 }} />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(12,35,64,0.85) 0%, transparent 50%)' }} />

              {/* Arrow button top-right */}
              <div style={{
                position: 'absolute', top: 20, right: 20,
                width: 40, height: 40, borderRadius: '50%',
                background: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(6px)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M4 12L12 4M12 4H6M12 4V10" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              {/* Label */}
              <div style={{ position: 'absolute', bottom: 28, left: 24, right: 24 }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: '#7dd3fc', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>
                  {item.tag}
                </p>
                <h4 style={{ fontSize: 22, fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
