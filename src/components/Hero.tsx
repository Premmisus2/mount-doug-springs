'use client';
import { useEffect, useRef, useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';
import { frameConfig } from '@/lib/frameConfig';
import RippleButton from './RippleButton';

const P   = '#1E3892';
const T   = '#29ABE2';
const CTA = '#29ABE2';

// Every line from their own sites, the BC registry or their Google listing.
const ticker = [
  '18.9L delivered · $10.50',
  'Bottled the evening before delivery',
  'Family owned since 2003',
  'We carry it out to your car',
  '4.6 ★ on Google',
  'Delivery every 2 weeks, monthly or on request',
  '35 to 40 ppm oxygen',
  'Sooke to Sidney, Oak Bay to Westshore',
];

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { containerRef, scrollProgress } = useScrollAnimation();
  const [tickerOffset, setTickerOffset] = useState(0);
  const { ref: statsRef, inView: statsInView } = useInView();

  const years     = useCountUp(20, statsInView, 1400);

  const textOpacity = Math.max(0, 1 - scrollProgress * 2.8);
  const textY = scrollProgress * 40;

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.playbackRate = 0.45;
  }, []);

  useEffect(() => {
    let frame: number;
    let pos = 0;
    const step = () => {
      pos += 0.4;
      setTickerOffset(pos);
      frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section ref={containerRef} style={{ height: `${frameConfig.SCROLL_HEIGHT_VH}vh`, position: 'relative' }}>
      <div style={{ position: 'sticky', top: 0, height: '100svh', overflow: 'hidden' }}>

        {/* VIDEO */}
        <video
          ref={videoRef}
          src="/hero-water.mp4"
          autoPlay muted loop playsInline aria-hidden="true"
          className="hero-video"
          style={{
            position: 'absolute', inset: 0,
            width: '100%', height: '100%',
            objectFit: 'cover', objectPosition: 'center center',
          }}
        />

        {/* Overlay — left heavy */}
        <div style={{
          position: 'absolute', inset: 0,
          background: `linear-gradient(105deg, rgba(30,56,146,0.88) 0%, rgba(30,56,146,0.7) 45%, rgba(30,56,146,0.2) 100%)`,
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: '18%',
          background: `linear-gradient(to bottom, rgba(30,56,146,0.7) 0%, transparent 100%)`,
          pointerEvents: 'none',
        }} />
        <div className="hero-corner" style={{
          position: 'absolute', bottom: 0, right: 0,
          width: '22%', height: '18%',
          background: 'linear-gradient(to top left, rgba(30,56,146,1) 0%, rgba(30,56,146,0.8) 40%, transparent 75%)',
          pointerEvents: 'none',
        }} />

        {/* CONTENT */}
        <div className="hero-content" style={{
          position: 'absolute', inset: 0,
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: 'clamp(24px, 4vw, 60px) clamp(28px, 6vw, 80px)',
          opacity: textOpacity,
          transform: `translateY(${textY}px)`,
        }}>

          {/* Main content */}
          <div style={{ maxWidth: 680 }}>

            {/* Location pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 20 }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                padding: '5px 12px', borderRadius: 4,
                background: 'rgba(41,171,226,0.1)',
                border: '1px solid rgba(41,171,226,0.22)',
                fontSize: 11, fontWeight: 700, color: CTA,
                letterSpacing: '0.12em', textTransform: 'uppercase',
              }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: CTA, display: 'inline-block', boxShadow: `0 0 6px ${CTA}` }} />
                Victoria, BC
              </span>
              <span className="mobile-hide" style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', fontWeight: 600 }}>
                · Admirals Road · Since 2003
              </span>
            </div>

            {/* Headline */}
            <h1 style={{ margin: '0 0 20px', lineHeight: 1.0 }}>
              <span style={{
                display: 'block',
                fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 900,
                color: '#ffffff', letterSpacing: '-0.04em', lineHeight: 0.95,
              }}>
                Victoria's
              </span>
              <span style={{
                display: 'block',
                fontSize: 'clamp(3rem, 7vw, 6rem)', fontWeight: 900,
                background: `linear-gradient(90deg, #ffffff 0%, ${T} 60%)`,
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                letterSpacing: '-0.04em', lineHeight: 0.95,
              }}>
                Purest Water.
              </span>
              <span style={{
                display: 'block',
                fontSize: 'clamp(1.1rem, 2.2vw, 1.8rem)', fontWeight: 400,
                color: 'rgba(255,255,255,0.88)', letterSpacing: '-0.01em',
                lineHeight: 1.3, marginTop: 14, fontStyle: 'italic',
              }}>
                Zero heavy lifting.
              </span>
            </h1>

            <p className="mobile-hide" style={{
              fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)',
              color: 'rgba(255,255,255,0.9)',
              lineHeight: 1.75, maxWidth: 420, marginBottom: 32,
            }}>
              We fill your bottles and <strong style={{ color: '#fff', fontWeight: 700 }}>carry them out to your car</strong>.
              In-store pickup or home delivery. Pure water, done for you.
            </p>
            <p className="mobile-only" style={{
              fontSize: '0.95rem',
              color: 'rgba(255,255,255,0.9)',
              lineHeight: 1.65, maxWidth: 320, marginBottom: 28,
            }}>
              In-store pickup or home delivery. <strong style={{ color: '#fff' }}>We carry every bottle out for you.</strong>
            </p>

            {/* CTAs with Ripple */}
            <div className="hero-ctas" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 44 }}>
              <RippleButton
                href="#products"
                style={{
                  padding: '14px 30px', borderRadius: 6,
                  background: CTA, color: P,
                  fontWeight: 800, fontSize: 14, textDecoration: 'none',
                  letterSpacing: '0.03em', textTransform: 'uppercase',
                  boxShadow: `0 8px 32px rgba(41,171,226,0.3)`,
                  display: 'inline-flex', alignItems: 'center', gap: 8,
                }}
              >
                Order Water
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                  <path d="M2 6.5H11M7 2.5L11 6.5L7 10.5" stroke={P} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </RippleButton>
              <RippleButton
                href="/delivery-info"
                style={{
                  padding: '14px 30px', borderRadius: 6,
                  background: 'rgba(255,255,255,0.07)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  color: '#fff', fontWeight: 600, fontSize: 14, textDecoration: 'none',
                  letterSpacing: '0.03em', textTransform: 'uppercase',
                }}
              >
                Delivery Areas
              </RippleButton>
            </div>

            {/* Animated stats */}
            <div
              ref={statsRef as React.RefObject<HTMLDivElement>}
              className="hero-stats"
              style={{
                display: 'flex', gap: 0,
                borderTop: '1px solid rgba(255,255,255,0.08)',
                paddingTop: 24,
              }}
            >
              {[
                { display: '2003', label: 'Family owned since' },
                { display: '4.6 ★', label: 'Google' },
                { display: `${years}+`, label: 'Years' },
              ].map((s, i) => (
                <div key={i} style={{
                  paddingRight: 32, marginRight: 32,
                  borderRight: i < 2 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                }}>
                  <div style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 800, color: CTA, lineHeight: 1 }}>{s.display}</div>
                  <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.8)', marginTop: 4, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* TICKER */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 36,
          background: 'rgba(41,171,226,0.85)', backdropFilter: 'blur(8px)',
          overflow: 'hidden', display: 'flex', alignItems: 'center',
          opacity: Math.max(0, 1 - scrollProgress * 4),
        }}>
          <div style={{
            display: 'flex',
            transform: `translateX(-${tickerOffset % (ticker.length * 220)}px)`,
            willChange: 'transform', whiteSpace: 'nowrap',
          }}>
            {[...ticker, ...ticker, ...ticker, ...ticker].map((item, i) => (
              <span key={i} style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                padding: '0 28px', fontSize: 11, fontWeight: 700,
                color: 'rgba(255,255,255,0.9)', letterSpacing: '0.1em', textTransform: 'uppercase',
              }}>
                <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'rgba(255,255,255,0.5)', display: 'inline-block', flexShrink: 0 }} />
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
