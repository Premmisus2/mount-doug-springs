'use client';

import ScrollReveal from './ScrollReveal';
import RippleButton from './RippleButton';
import { StoreIcon, DropIcon, CarIcon, BottleIcon, PhoneIcon, ArrowIcon, IconTile } from './Icons';

const P   = '#1E3892';
const T   = '#29ABE2';
const O   = '#29ABE2';

// Every line here is from their own sites (mtdougsprings.com, ultimatewaterstore.com).
const features = [
  {
    icon: <StoreIcon size={20} />,
    title: 'Bring Any Bottle',
    body: 'Bring your bottles to 104-1505 Admirals Road. We fill 1, 2, 3, 4 and 5 gallon bottles of any brand.',
  },
  {
    icon: <DropIcon size={20} />,
    title: 'We Fill It Fresh',
    body: 'Our staff fill your bottles on the spot with purified water from our six-step process.',
  },
  {
    icon: <CarIcon size={20} />,
    title: 'We Carry It Out',
    body: "Our staff carry your filled bottles out to your car. You don't lift a thing.",
  },
  {
    icon: <BottleIcon size={20} />,
    title: 'New Bottles In Store',
    body: 'No bottle yet? We sell new ones in the store, along with coolers, crocks and pumps.',
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
              padding: '6px 14px', borderRadius: 4,
              background: `${T}15`, border: `1px solid ${T}30`,
              fontSize: 12, fontWeight: 700, color: T, letterSpacing: '0.06em', textTransform: 'uppercase',
              marginBottom: 24,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: 1, background: T, display: 'inline-block' }} />
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
              At <strong style={{ color: P }}>104-1505 Admirals Road</strong> in View Royal, we fill your bottles fresh and carry them out to your car. <span className="mobile-hide">Bring any brand, from 1 to 5 gallons.</span>
            </p>
            <p className="mobile-hide" style={{ fontSize: 16, color: '#757575', lineHeight: 1.8, marginBottom: 32 }}>
              Every customer gets the same treatment. Whether you're a single household or an office, you'll never have to carry a heavy bottle out of our store.
            </p>

            {/* Feature list */}
            <div className="mobile-hide" style={{ display: 'flex', flexDirection: 'column', gap: 18, marginBottom: 36 }}>
              {features.map((f, i) => (
                <ScrollReveal key={i} variant="up" delay={i * 0.08}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16 }}>
                    <IconTile>{f.icon}</IconTile>
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
                Get Directions <ArrowIcon size={16} />
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
                <PhoneIcon size={16} /> 250 381-2088
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
                  <IconTile size={40}><StoreIcon size={18} /></IconTile>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 800, color: P, marginBottom: 2 }}>The Ultimate Water Store</p>
                    <p style={{ fontSize: 13, color: '#757575', lineHeight: 1.5 }}>104-1505 Admirals Road<br />Victoria, BC V9A 2P8</p>
                    <p style={{ fontSize: 12, color: T, fontWeight: 600, marginTop: 4 }}>Mon to Fri 9:30am to 6pm · Sat 9:30am to 5pm · Sun closed</p>
                  </div>
                </div>
              </div>

              {/* Years badge */}
              <div style={{
                position: 'absolute', top: 24, right: 24,
                background: O, borderRadius: 6, padding: '14px 18px', textAlign: 'center',
                boxShadow: '0 6px 20px rgba(41,171,226,0.35)',
              }}>
                <p style={{ fontSize: 28, fontWeight: 800, color: P, lineHeight: 1 }}>20+</p>
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
