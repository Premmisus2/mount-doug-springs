'use client';

import ScrollReveal from './ScrollReveal';

const P   = '#1E3892';
const T   = '#29ABE2';
const O   = '#29ABE2';

const lanes = [
  {
    num: '01',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 11L14 4L24 11V24C24 24.552 23.552 25 23 25H17V18H11V25H5C4.448 25 4 24.552 4 24V11Z" stroke="white" strokeWidth="1.8" strokeLinejoin="round" fill="none"/>
        <circle cx="14" cy="14" r="2.5" fill="white" fillOpacity="0.5"/>
      </svg>
    ),
    title: 'In-Store Drive-Up',
    sub: 'The White Glove Experience',
    body: 'Drive up to our Admirals Walk location. Our staff sanitizes and fills your jugs while you wait — then loads them into your car for you. Zero heavy lifting.',
    detail: '104-1505 Admirals Road, Victoria',
    cta: 'Get Directions',
    href: 'https://maps.google.com/?q=104-1505+Admirals+Road+Victoria+BC',
    accentBg: `${P}`,
    tagBg: `rgba(255,255,255,0.15)`,
    tagColor: 'rgba(255,255,255,0.9)',
    featured: true,
  },
  {
    num: '02',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="10" width="18" height="12" rx="2" stroke={T} strokeWidth="1.8"/>
        <path d="M20 14H24L26 18V22H20V14Z" stroke={T} strokeWidth="1.8" strokeLinejoin="round"/>
        <circle cx="7" cy="24" r="2.5" stroke={T} strokeWidth="1.6"/>
        <circle cx="23" cy="24" r="2.5" stroke={T} strokeWidth="1.6"/>
      </svg>
    ),
    title: 'Home Delivery',
    sub: 'We Come to You',
    body: 'Set up a weekly or bi-weekly delivery and we bring your purified water straight to your door. Regular routes cover all of Greater Victoria.',
    detail: 'Call 250 381-2088 to schedule',
    cta: 'View Delivery Routes',
    href: '/delivery-info',
    accentBg: 'white',
    tagBg: '#e0f7f8',
    tagColor: '#006d74',
    featured: false,
  },
  {
    num: '03',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="2" width="20" height="26" rx="2" stroke={T} strokeWidth="1.8"/>
        <path d="M10 8H18M10 13H18M10 18H14" stroke={T} strokeWidth="1.5" strokeLinecap="round"/>
        <rect x="11" y="22" width="6" height="6" rx="1" stroke={T} strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Office Solutions',
    sub: 'Bulk & Scheduled Delivery',
    body: 'Keep your team hydrated with scheduled bulk delivery. Pre-pay bundles, cooler rentals, and priority routing for offices, clinics, and businesses.',
    detail: 'Custom pricing for businesses',
    cta: 'Get a Quote',
    href: 'mailto:delivery@mtdougsprings.com?subject=Office Water Quote',
    accentBg: 'white',
    tagBg: '#e0f7f8',
    tagColor: '#006d74',
    featured: false,
  },
];

export default function Triage() {
  return (
    <section id="how-it-works" aria-label="Service options" style={{ padding: '80px 0', background: '#F8FAFC' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>

        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <p style={{ fontSize: 11, fontWeight: 700, color: T, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>
              Three Ways to Get Your Water
            </p>
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', fontWeight: 800,
              color: P, letterSpacing: '-0.025em', lineHeight: 1.15,
            }}>
              How Would You Like Your Water?
            </h2>
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="triage-grid">
          {lanes.map((lane, i) => (
            <ScrollReveal key={i} variant="up" delay={i * 0.1}>
            <div
              style={{
                borderRadius: 20,
                background: lane.accentBg,
                border: lane.featured ? 'none' : '1px solid #e2e8f0',
                padding: '32px 28px',
                display: 'flex', flexDirection: 'column',
                boxShadow: lane.featured
                  ? `0 16px 48px rgba(30,56,146,0.25)`
                  : '0 2px 12px rgba(0,0,0,0.04)',
                position: 'relative', overflow: 'hidden',
                transform: lane.featured ? 'translateY(-8px)' : 'none',
              }}
            >
              {lane.featured && (
                <>
                  {/* Background water pattern */}
                  <div style={{
                    position: 'absolute', top: -60, right: -60, width: 200, height: 200, borderRadius: '50%',
                    background: 'rgba(0,163,173,0.15)', pointerEvents: 'none',
                  }} />
                  <div style={{
                    position: 'absolute', bottom: -40, left: -40, width: 160, height: 160, borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)', pointerEvents: 'none',
                  }} />
                </>
              )}

              {/* Badge */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, position: 'relative' }}>
                <span style={{
                  fontSize: 10, fontWeight: 800, letterSpacing: '0.15em', textTransform: 'uppercase',
                  padding: '4px 12px', borderRadius: 100,
                  background: lane.tagBg, color: lane.tagColor,
                }}>{lane.sub}</span>
                <span style={{
                  fontSize: 11, fontWeight: 700,
                  color: lane.featured ? 'rgba(255,255,255,0.35)' : '#cbd5e1',
                }}>{lane.num}</span>
              </div>

              {/* Icon */}
              <div style={{
                width: 56, height: 56, borderRadius: 14,
                background: lane.featured ? 'rgba(255,255,255,0.12)' : '#f0f9ff',
                border: lane.featured ? '1px solid rgba(255,255,255,0.15)' : '1px solid #e0f7f8',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20, flexShrink: 0,
              }}>
                {lane.icon}
              </div>

              <h3 style={{
                fontSize: 20, fontWeight: 800, letterSpacing: '-0.02em',
                color: lane.featured ? '#fff' : P,
                marginBottom: 12,
              }}>{lane.title}</h3>

              <p className="mobile-hide" style={{
                fontSize: 14, lineHeight: 1.7,
                color: lane.featured ? 'rgba(255,255,255,0.75)' : '#757575',
                marginBottom: 16, flex: 1,
              }}>{lane.body}</p>

              <p style={{
                fontSize: 12, fontWeight: 600,
                color: lane.featured ? 'rgba(255,255,255,0.5)' : T,
                marginBottom: 24,
              }}>{lane.detail}</p>

              <a
                href={lane.href}
                target={lane.href.startsWith('http') ? '_blank' : undefined}
                rel={lane.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                  padding: '12px 20px', borderRadius: 8,
                  background: lane.featured ? O : 'transparent',
                  color: lane.featured ? P : P,
                  border: lane.featured ? 'none' : `1.5px solid ${P}33`,
                  fontWeight: 700, fontSize: 14, textDecoration: 'none',
                  transition: 'all 0.18s',
                  boxShadow: lane.featured ? '0 4px 16px rgba(255,107,53,0.4)' : 'none',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  if (lane.featured) { el.style.background = '#e55a27'; el.style.transform = 'translateY(-1px)'; }
                  else { el.style.background = `${P}0d`; }
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  if (lane.featured) { el.style.background = '#29ABE2'; el.style.transform = 'none'; }
                  else { el.style.background = 'transparent'; }
                }}
              >
                {lane.cta}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .triage-grid { grid-template-columns: 1fr !important; }
          .triage-grid > div { transform: none !important; }
        }
      `}</style>
    </section>
  );
}
