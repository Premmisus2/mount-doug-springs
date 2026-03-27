'use client';

import ScrollReveal from './ScrollReveal';
import RippleButton from './RippleButton';

const P   = '#1E3892';
const T   = '#29ABE2';
const O   = '#29ABE2';

const features = [
  {
    icon: '🚗',
    title: 'Drive Right Up',
    body: 'Pull up to our Admirals Walk bay. No parking hassles, no long walks with heavy jugs.',
  },
  {
    icon: '💧',
    title: 'We Fill It Fresh',
    body: 'Your jug is sanitized and filled on the spot with multi-stage purified water.',
  },
  {
    icon: '💪',
    title: 'We Load Your Car',
    body: "Our staff carries your filled jugs and loads them directly into your vehicle. You don't lift a thing.",
  },
  {
    icon: '♻️',
    title: 'Drop & Go Exchange',
    body: 'Leave your empty, take a full one. Your $10 deposit comes back when you bring it in.',
  },
];

export default function LocalStory() {
  return (
    <section id="how-it-works" aria-label="About Mount Doug Springs" style={{ padding: '88px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }} className="story-grid">

          {/* Left — text */}
          <ScrollReveal variant="left">
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 14px', borderRadius: 100,
              background: `${T}15`, border: `1px solid ${T}30`,
              fontSize: 12, fontWeight: 700, color: T, letterSpacing: '0.06em', textTransform: 'uppercase',
              marginBottom: 24,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: T, display: 'inline-block' }} />
              Victoria's Local Water Store
            </span>

            <h2 style={{
              fontSize: 'clamp(1.9rem, 3.5vw, 3rem)', fontWeight: 800,
              color: P, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20,
            }}>
              We Do the Heavy<br />
              <span style={{ color: T }}>Lifting. Literally.</span>
            </h2>

            <p style={{ fontSize: 16, color: '#757575', lineHeight: 1.8, marginBottom: 16 }}>
              At <strong style={{ color: P }}>104-1505 Admirals Road</strong> in Victoria's Admirals Walk, we've built a reputation on something simple: making pure water effortless to get.
            </p>
            <p style={{ fontSize: 16, color: '#757575', lineHeight: 1.8, marginBottom: 32 }}>
              Every customer gets the same white-glove treatment — we sanitize your jug, fill it fresh, and carry it to your car. Whether you're a single household or an office with a standing order, you'll never struggle with a heavy water jug at our store.
            </p>

            {/* Feature list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 36 }}>
              {features.map((f, i) => (
                <ScrollReveal key={i} variant="up" delay={i * 0.08}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                    <div style={{
                      width: 44, height: 44, borderRadius: 12,
                      background: '#F8FAFC', border: '1px solid #e2e8f0',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 20, flexShrink: 0,
                    }}>{f.icon}</div>
                    <div>
                      <p style={{ fontSize: 15, fontWeight: 700, color: P, marginBottom: 3 }}>{f.title}</p>
                      <p style={{ fontSize: 14, color: '#757575', lineHeight: 1.6 }}>{f.body}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <RippleButton
                href="https://maps.google.com/?q=104-1505+Admirals+Road+Victoria+BC"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get directions to our store"
                style={{
                  padding: '13px 24px', borderRadius: 8,
                  background: O, color: P,
                  fontWeight: 700, fontSize: 15, textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                }}
              >
                📍 Get Directions
              </RippleButton>
              <RippleButton
                href="tel:2503812088"
                aria-label="Call us"
                style={{
                  padding: '13px 24px', borderRadius: 8,
                  background: 'transparent',
                  border: `1.5px solid ${P}40`,
                  color: P, fontWeight: 700, fontSize: 15, textDecoration: 'none',
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                }}
              >
                📞 250 381-2088
              </RippleButton>
            </div>
          </ScrollReveal>

          {/* Right — Wes at the filling station */}
          <ScrollReveal variant="right">
            <div style={{ position: 'relative' }}>
              {/* Main photo */}
              <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: `0 24px 72px rgba(30,56,146,0.18)` }}>
                <img
                  src="/wes-store.jpg"
                  alt="Wes Treleaven, founder of Mount Doug Springs, at the water filling station"
                  style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }}
                />
              </div>

              {/* Store address card */}
              <div style={{
                position: 'absolute', bottom: 28, left: 28, right: 28,
                background: 'rgba(255,255,255,0.97)', backdropFilter: 'blur(12px)',
                borderRadius: 16, padding: '20px 22px',
                boxShadow: '0 8px 32px rgba(30,56,146,0.2)',
              }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 10, background: `${T}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                      <path d="M9 2C6.239 2 4 4.239 4 7C4 10.5 9 16 9 16C9 16 14 10.5 14 7C14 4.239 11.761 2 9 2Z" stroke={T} strokeWidth="1.5"/>
                      <circle cx="9" cy="7" r="2" fill={T} fillOpacity="0.3" stroke={T} strokeWidth="1.2"/>
                    </svg>
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 800, color: P, marginBottom: 2 }}>Admirals Walk</p>
                    <p style={{ fontSize: 13, color: '#757575', lineHeight: 1.5 }}>104-1505 Admirals Road<br />Victoria, BC V9A 2P8</p>
                    <p style={{ fontSize: 12, color: T, fontWeight: 600, marginTop: 4 }}>Mon–Fri 9:30am–6pm · Sat 9:30am–5pm · Sun Closed</p>
                  </div>
                </div>
              </div>

              {/* Years badge */}
              <div style={{
                position: 'absolute', top: 24, right: 24,
                background: O, borderRadius: 14, padding: '14px 18px', textAlign: 'center',
                boxShadow: '0 6px 20px rgba(41,171,226,0.35)',
              }}>
                <p style={{ fontSize: 28, fontWeight: 800, color: P, lineHeight: 1 }}>21+</p>
                <p style={{ fontSize: 11, color: `${P}cc`, fontWeight: 600, marginTop: 2 }}>Years<br />Serving Victoria</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .story-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}
