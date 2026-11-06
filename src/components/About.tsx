'use client';

import ScrollReveal from './ScrollReveal';

const P = '#1E3892';
const T = '#29ABE2';
const CTA = '#29ABE2';

const milestones = [
  { year: '1975', label: 'Arrived in Victoria', detail: 'Wes Treleaven first moved to Victoria, BC — and spotted a property that would change everything.' },
  { year: '1998', label: 'Dream Became Reality', detail: 'Wes acquired the Mount Douglas Springs property. The dream he had carried for over two decades finally came to life.' },
  { year: '2021', label: '1,100+ Customers', detail: 'Mount Doug Springs had grown to serve over 1,100 bottled water delivery customers across Greater Victoria.' },
  { year: 'Today', label: 'The Ultimate Water Store', detail: 'Now at 104-1505 Admirals Road, bottling fresh the evening before every delivery. Serving Victoria and beyond.' },
];

export default function About() {
  return (
    <section
      id="about"
      itemScope
      itemType="https://schema.org/AboutPage"
      style={{ padding: '96px 0', background: 'linear-gradient(180deg, #f0f7ff 0%, #ffffff 100%)' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <span style={{
              fontSize: 11, fontWeight: 700, color: T,
              letterSpacing: '0.25em', textTransform: 'uppercase',
              display: 'block', marginBottom: 14,
            }}>Our Story</span>
            <h2 style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: 600,
              color: P, letterSpacing: '-0.02em', lineHeight: 1.12, marginBottom: 16,
            }}>
              A Victoria Story, 21+ Years in the Making
            </h2>
            <p style={{ fontSize: 16, color: '#757575', maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
              Family-owned, community-rooted, and deeply committed to delivering the purest water in Greater Victoria.
            </p>
          </div>
        </ScrollReveal>

        {/* Main two-column layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 64,
          alignItems: 'center',
          marginBottom: 72,
        }}>

          {/* Left — founder photo */}
          <ScrollReveal variant="left">
          <div style={{ position: 'relative' }}>
            {/* Decorative teal blob behind photo */}
            <div style={{
              position: 'absolute',
              top: -20, left: -20,
              width: '70%', height: '70%',
              borderRadius: '50% 40% 60% 50%',
              background: `linear-gradient(135deg, ${T}18 0%, ${CTA}10 100%)`,
              zIndex: 0,
            }} />
            <div style={{
              position: 'relative', zIndex: 1,
              borderRadius: 24,
              overflow: 'hidden',
              boxShadow: `0 32px 80px rgba(30,56,146,0.2), 0 8px 24px rgba(41,171,226,0.12)`,
              border: `2px solid rgba(41,171,226,0.15)`,
            }}>
              <img
                src="/wes-founder.jpg"
                alt="Wes Treleaven, founder of Mount Doug Springs, at the water filling station in Victoria BC"
                itemProp="image"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              {/* Founder badge overlay */}
              <div style={{
                position: 'absolute', bottom: 20, left: 20,
                background: 'rgba(30,56,146,0.88)',
                backdropFilter: 'blur(12px)',
                borderRadius: 14,
                padding: '14px 18px',
                border: '1px solid rgba(41,171,226,0.2)',
              }}>
                <p style={{ fontSize: 13, fontWeight: 800, color: '#fff', margin: 0, lineHeight: 1.2 }}>Wes Treleaven</p>
                <p style={{ fontSize: 11, color: `${CTA}cc`, margin: '3px 0 0', fontWeight: 600, letterSpacing: '0.05em' }}>Founder & Owner</p>
              </div>
            </div>
            {/* Stats pill */}
            <div className="about-float-pill" style={{
              position: 'absolute', top: 20, right: -16, zIndex: 2,
              background: '#fff',
              borderRadius: 14,
              padding: '12px 18px',
              boxShadow: '0 8px 28px rgba(30,56,146,0.14)',
              border: `1.5px solid rgba(41,171,226,0.18)`,
              textAlign: 'center',
            }}>
              <p style={{ fontSize: 22, fontWeight: 800, color: T, margin: 0, lineHeight: 1 }}>21+</p>
              <p style={{ fontSize: 10, color: '#757575', margin: '3px 0 0', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Years Serving<br/>Victoria</p>
            </div>
          </div>
          </ScrollReveal>

          {/* Right — story text */}
          <ScrollReveal variant="right">
          <div itemScope itemType="https://schema.org/Person" itemProp="founder">
            <meta itemProp="name" content="Wes Treleaven" />
            <meta itemProp="jobTitle" content="Founder & Owner, Mount Doug Springs" />

            <h3 style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontSize: 'clamp(1.4rem, 2.5vw, 2rem)', fontWeight: 600,
              color: P, lineHeight: 1.2, marginBottom: 20, letterSpacing: '-0.015em',
            }}>
              From a Dream on Mount Douglas<br/>to Victoria's Premier Water Store
            </h3>

            <p style={{ fontSize: 15, color: '#5a5a5a', lineHeight: 1.8, marginBottom: 16 }}>
              When Wes Treleaven first arrived in Victoria in 1975, he spotted a property near Mount Douglas that captured his imagination. Over two decades later, in 1998, that dream became reality — and <strong style={{ color: P }}>Mount Doug Springs was born</strong>.
            </p>
            <p className="mobile-hide" style={{ fontSize: 15, color: '#5a5a5a', lineHeight: 1.8, marginBottom: 16 }}>
              What started as a passion for delivering genuinely pure water to Victoria families grew into Greater Victoria's most trusted water store. By 2021, Mount Doug Springs was proudly serving <strong style={{ color: P }}>over 1,100 delivery customers</strong> across Saanich, Oak Bay, Esquimalt, Langford, and beyond.
            </p>
            <p style={{ fontSize: 15, color: '#5a5a5a', lineHeight: 1.8, marginBottom: 32 }}>
              Today, from <strong style={{ color: P }}>104-1505 Admirals Road</strong>, the team bottles your water fresh the evening before delivery. Every jug is sanitized, filled, and loaded for you. <em>That's the Mount Doug difference.</em>
            </p>

            {/* Trust indicators */}
            <div className="about-stats" style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 16, paddingTop: 28,
              borderTop: `1px solid rgba(41,171,226,0.15)`,
            }}>
              {[
                { num: '1,100+', label: 'Delivery Customers' },
                { num: '5.0 ★', label: 'Google Rating' },
                { num: '21+',   label: 'Years in Victoria' },
              ].map((stat, i) => (
                <div key={i} style={{ textAlign: 'center' }}>
                  <p style={{ fontSize: 20, fontWeight: 800, color: T, margin: 0, lineHeight: 1 }}>{stat.num}</p>
                  <p style={{ fontSize: 11, color: '#9E9E9E', margin: '5px 0 0', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.07em', lineHeight: 1.3 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
          </ScrollReveal>
        </div>

        {/* Timeline */}
        <ScrollReveal variant="up" delay={0.15}>
        <div className="about-timeline-wrap" style={{
          background: '#fff',
          borderRadius: 24,
          border: `1.5px solid rgba(41,171,226,0.12)`,
          padding: '40px 40px 36px',
          boxShadow: '0 4px 24px rgba(30,56,146,0.06)',
        }}>
          <p style={{
            fontSize: 11, fontWeight: 700, color: T,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            textAlign: 'center', marginBottom: 32,
          }}>The Journey</p>

          <div className="about-timeline" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 24,
            position: 'relative',
          }}>
            {/* Connecting line */}
            <div className="mobile-hide" style={{
              position: 'absolute',
              top: 20, left: '12.5%', right: '12.5%',
              height: 2,
              background: `linear-gradient(to right, ${T}40, ${T}, ${CTA}, ${T}40)`,
              zIndex: 0,
            }} />

            {milestones.map((m, i) => (
              <div key={i} style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                {/* Year dot */}
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: i === milestones.length - 1 ? T : '#fff',
                  border: `2.5px solid ${T}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 14px',
                  boxShadow: `0 0 0 6px ${T}18`,
                }}>
                  <div style={{
                    width: 10, height: 10, borderRadius: '50%',
                    background: i === milestones.length - 1 ? '#fff' : T,
                  }} />
                </div>
                <p style={{ fontSize: 16, fontWeight: 800, color: P, margin: '0 0 4px', lineHeight: 1 }}>{m.year}</p>
                <p style={{ fontSize: 12, fontWeight: 700, color: T, margin: '0 0 8px', letterSpacing: '0.03em' }}>{m.label}</p>
                <p className="mobile-hide" style={{ fontSize: 12, color: '#757575', lineHeight: 1.6, margin: 0 }}>{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
        </ScrollReveal>

      </div>

      <style>{`
        @media (max-width: 640px) {
          .about-timeline {
            grid-template-columns: 1fr !important;
          }
          .about-timeline > div:not(:last-child)::after {
            content: '';
            display: block;
            width: 2px;
            height: 20px;
            background: ${T};
            margin: 8px auto 0;
            opacity: 0.4;
          }
        }
      `}</style>
    </section>
  );
}
