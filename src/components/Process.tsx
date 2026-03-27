'use client';

import ScrollReveal from './ScrollReveal';

const P = '#1E3892';
const T = '#29ABE2';

const cards = [
  {
    pos: 'topLeft',
    icon: (
      <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
        <path d="M4 18h4l2-3h6l2 3h4" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="3" y="15" width="20" height="5" rx="2" stroke="white" strokeWidth="1.5" fill="none"/>
        <circle cx="8" cy="21.5" r="1.5" fill="white"/>
        <circle cx="18" cy="21.5" r="1.5" fill="white"/>
        <path d="M13 6v6M10 9h6" stroke="white" strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
    ),
    title: 'White Glove Service',
    body: 'Forget heavy lifting. We sanitize, fill, and load your bottles directly into your vehicle. Pure convenience, every visit.',
  },
  {
    pos: 'bottomLeft',
    icon: (
      <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
        <path d="M5 13a8 8 0 0 1 14.5-4.6" stroke="white" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M21 13a8 8 0 0 1-14.5 4.6" stroke="white" strokeWidth="1.7" strokeLinecap="round"/>
        <path d="M19 5l1.5 3.5L17 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M7 21l-1.5-3.5L9 16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="13" cy="13" r="2.5" fill="white"/>
      </svg>
    ),
    title: 'Eco-Friendly Loop',
    body: 'Our refundable bottle system eliminates thousands of single-use plastics in BC every year. Pure water, zero waste.',
  },
  {
    pos: 'topRight',
    icon: (
      <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
        <path d="M13 3L5 6.5v6c0 5 3.5 9 8 10.5 4.5-1.5 8-5.5 8-10.5v-6L13 3z" stroke="white" strokeWidth="1.7" fill="none" strokeLinejoin="round"/>
        <path d="M9 13l2.5 2.5 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Certified Purity',
    body: 'Tested beyond industry standards. We provide laboratory-grade hydration that exceeds municipal tap water quality.',
  },
  {
    pos: 'bottomRight',
    icon: (
      <svg width="24" height="24" viewBox="0 0 26 26" fill="none">
        <path d="M13 3C9.5 3 7 6 7 9c0 5 6 14 6 14s6-9 6-14c0-3-2.5-6-6-6z" stroke="white" strokeWidth="1.7" fill="none"/>
        <circle cx="13" cy="9" r="2.5" fill="white"/>
      </svg>
    ),
    title: "Victoria's Own",
    body: "Family-owned and deeply rooted in the community. Serving Saanich, Esquimalt, and Oak Bay with local pride.",
  },
];

/* ── Card — modern frosted look ── */
function Card({ data }: { data: typeof cards[0] }) {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, #f8fbff 0%, #eef6fd 100%)',
        border: '1.5px solid rgba(41,171,226,0.16)',
        borderRadius: 20,
        padding: '22px 20px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 16,
        boxShadow: '0 2px 20px rgba(30,56,146,0.06), 0 1px 4px rgba(30,56,146,0.04)',
        transition: 'box-shadow 0.24s, border-color 0.24s, transform 0.24s',
        cursor: 'default',
        height: '100%',
        boxSizing: 'border-box',
      }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = '0 12px 40px rgba(30,56,146,0.14), 0 2px 8px rgba(41,171,226,0.1)';
        el.style.borderColor = 'rgba(41,171,226,0.4)';
        el.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement;
        el.style.boxShadow = '0 2px 20px rgba(30,56,146,0.06), 0 1px 4px rgba(30,56,146,0.04)';
        el.style.borderColor = 'rgba(41,171,226,0.16)';
        el.style.transform = 'none';
      }}
    >
      {/* Navy icon badge */}
      <div style={{
        width: 52, height: 52, borderRadius: 14,
        background: `linear-gradient(135deg, ${P} 0%, #0a3d7a 100%)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
        boxShadow: '0 4px 16px rgba(30,56,146,0.28)',
      }}>
        {data.icon}
      </div>

      {/* Text */}
      <div>
        <h4 style={{ fontSize: 15, fontWeight: 800, color: P, marginBottom: 8, lineHeight: 1.25 }}>
          {data.title}
        </h4>
        <p style={{ fontSize: 13, color: '#6b7a99', lineHeight: 1.75, margin: 0 }}>
          {data.body}
        </p>
      </div>
    </div>
  );
}

/* ── Straight connector line with dot at bottle end ── */
function Connector({ side }: { side: 'left' | 'right' }) {
  const dot = (
    <div style={{
      width: 10, height: 10, borderRadius: '50%',
      background: T,
      flexShrink: 0,
      boxShadow: `0 0 0 3px rgba(41,171,226,0.22)`,
    }} />
  );

  const line = (
    <div style={{
      flex: 1, height: 1.5,
      background: side === 'left'
        ? `linear-gradient(to right, rgba(41,171,226,0.08), rgba(41,171,226,0.55))`
        : `linear-gradient(to left, rgba(41,171,226,0.08), rgba(41,171,226,0.55))`,
    }} />
  );

  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%' }}>
      {side === 'left'  && <>{line}{dot}</>}
      {side === 'right' && <>{dot}{line}</>}
    </div>
  );
}

export default function Process() {
  const [tl, bl, tr, br] = cards;

  return (
    <section id="process" style={{ background: '#ffffff', padding: '104px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>

        {/* Header */}
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <span style={{
              fontSize: 11, fontWeight: 700, color: T,
              letterSpacing: '0.25em', textTransform: 'uppercase',
              display: 'block', marginBottom: 14,
            }}>Why Choose Us</span>
            <h2 style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontSize: 'clamp(1.9rem, 3.5vw, 2.9rem)', fontWeight: 600,
              color: P, letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: 18,
            }}>
              How We Deliver Freshness
            </h2>
            <p style={{ fontSize: 16, color: '#757575', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
              Sustainably sourced and expertly purified — bringing Victoria's purest water straight to you.
            </p>
          </div>
        </ScrollReveal>

        {/* ── Desktop layout ── */}
        <ScrollReveal variant="up" delay={0.1}>
        <div className="process-desktop" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 88px 260px 88px 1fr',
          gridTemplateRows: '1fr 36px 1fr',
          minHeight: 460,
          alignItems: 'stretch',
        }}>

          {/* Top-left card */}
          <div style={{ gridColumn: 1, gridRow: 1, paddingRight: 0, display: 'flex', alignItems: 'center' }}>
            <Card data={tl} />
          </div>
          {/* Top-left connector */}
          <div style={{ gridColumn: 2, gridRow: 1, display: 'flex', alignItems: 'center' }}>
            <Connector side="left" />
          </div>

          {/* Bottle — spans all 3 rows, static */}
          <div style={{
            gridColumn: 3, gridRow: '1 / 4',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative', zIndex: 2,
          }}>
            <img
              src="/bottle.png"
              alt="Mount Doug Springs 18.9L Purified Water"
              style={{
                width: '100%',
                maxWidth: 240,
                height: 'auto',
                display: 'block',
                filter: 'drop-shadow(0 32px 48px rgba(30,56,146,0.18)) drop-shadow(0 8px 20px rgba(41,171,226,0.14))',
              }}
            />
          </div>

          {/* Top-right connector */}
          <div style={{ gridColumn: 4, gridRow: 1, display: 'flex', alignItems: 'center' }}>
            <Connector side="right" />
          </div>
          {/* Top-right card */}
          <div style={{ gridColumn: 5, gridRow: 1, paddingLeft: 0, display: 'flex', alignItems: 'center' }}>
            <Card data={tr} />
          </div>

          {/* Bottom-left card */}
          <div style={{ gridColumn: 1, gridRow: 3, paddingRight: 0, display: 'flex', alignItems: 'center' }}>
            <Card data={bl} />
          </div>
          {/* Bottom-left connector */}
          <div style={{ gridColumn: 2, gridRow: 3, display: 'flex', alignItems: 'center' }}>
            <Connector side="left" />
          </div>
          {/* Bottom-right connector */}
          <div style={{ gridColumn: 4, gridRow: 3, display: 'flex', alignItems: 'center' }}>
            <Connector side="right" />
          </div>
          {/* Bottom-right card */}
          <div style={{ gridColumn: 5, gridRow: 3, paddingLeft: 0, display: 'flex', alignItems: 'center' }}>
            <Card data={br} />
          </div>

        </div>
        </ScrollReveal>

        {/* ── Mobile layout ── */}
        <div className="process-mobile" style={{ display: 'none', flexDirection: 'column', gap: 12, alignItems: 'center' }}>
          <img
            src="/bottle.png"
            alt="Mount Doug Springs 18.9L"
            style={{
              width: '45%', maxWidth: 160, display: 'block', marginBottom: 8,
              filter: 'drop-shadow(0 16px 32px rgba(30,56,146,0.18))',
            }}
          />
          {cards.map((card, i) => (
            <Card key={i} data={card} />
          ))}
        </div>

      </div>

      <style>{`
        @media (max-width: 820px) {
          .process-desktop { display: none !important; }
          .process-mobile  { display: flex !important; }
        }
      `}</style>
    </section>
  );
}
