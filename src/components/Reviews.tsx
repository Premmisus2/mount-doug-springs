'use client';

import { useInView } from '@/hooks/useInView';
import { useCountUp } from '@/hooks/useCountUp';
import ScrollReveal from './ScrollReveal';

const P = '#1E3892';
const T = '#29ABE2';
const CTA = '#29ABE2';

const reviews = [
  { name: 'Sarah M.', location: 'Oak Bay', rating: 5, text: "Best water in Victoria, hands down. The staff always loads the jugs right into my car — I never have to lift a thing. Been a customer for 4 years and wouldn't go anywhere else.", since: 'Customer since 2020' },
  { name: 'James T.', location: 'Saanich', rating: 5, text: 'We switched from tap water after a neighbour recommended Mount Doug Springs. The difference in taste is incredible. The oxygenated water is something else entirely.', since: 'Customer since 2021' },
  { name: 'Linda K.', location: 'Langford', rating: 5, text: 'Home delivery is so convenient. They always bottle it fresh the night before — you can actually taste the difference from store-bought. Wes and his team are amazing.', since: 'Customer since 2019' },
  { name: 'David R.', location: 'Esquimalt', rating: 5, text: "Our office runs on Mount Doug Springs water. Professional, reliable, and the water tastes genuinely pure. We've been on the delivery route for two years without a single issue.", since: 'Business customer' },
  { name: 'Michelle P.', location: 'View Royal', rating: 5, text: 'The drive-up service is unbeatable. I pull in, they take my jugs, fill them, and load them back — all in under five minutes. Perfect for a busy schedule.', since: 'Customer since 2022' },
  { name: 'Robert H.', location: 'Central Saanich', rating: 5, text: "Family-owned businesses don't get better than this. Wes genuinely cares about the quality of his water and his community. Five stars isn't enough.", since: 'Customer since 2018' },
];

function StarRow({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#facc15">
          <path d="M7 1L8.6 4.9L13 5.5L10 8.3L10.8 12.8L7 10.7L3.2 12.8L4 8.3L1 5.5L5.4 4.9L7 1Z"/>
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const { ref: aggRef, inView: aggInView } = useInView();
  const reviewCount = useCountUp(200, aggInView, 1600);

  return (
    <section id="reviews" aria-label="Customer reviews" style={{ padding: '96px 0', background: '#F8FAFC' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{ fontSize: 11, fontWeight: 700, color: T, letterSpacing: '0.25em', textTransform: 'uppercase', display: 'block', marginBottom: 14 }}>Google Reviews</span>
            <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: 600, color: P, letterSpacing: '-0.02em', lineHeight: 1.12, marginBottom: 16 }}>
              Victoria Speaks for Itself
            </h2>
            <p style={{ fontSize: 16, color: '#757575', maxWidth: 480, margin: '0 auto', lineHeight: 1.7 }}>
              Over 200 five-star reviews from families, offices, and businesses across Greater Victoria.
            </p>
            {/* Animated aggregate badge */}
            <div
              ref={aggRef as React.RefObject<HTMLDivElement>}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 12,
                marginTop: 24, padding: '12px 24px',
                background: '#fff', borderRadius: 100,
                border: `1.5px solid rgba(41,171,226,0.2)`,
                boxShadow: '0 4px 16px rgba(30,56,146,0.07)',
              }}
            >
              <div style={{ display: 'flex', gap: 3 }}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 14 14" fill="#facc15">
                    <path d="M7 1L8.6 4.9L13 5.5L10 8.3L10.8 12.8L7 10.7L3.2 12.8L4 8.3L1 5.5L5.4 4.9L7 1Z"/>
                  </svg>
                ))}
              </div>
              <span style={{ fontSize: 18, fontWeight: 800, color: P }}>5.0</span>
              <span style={{ fontSize: 13, color: '#757575', fontWeight: 500 }}>from {reviewCount}+ reviews on Google</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Review cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="reviews-grid">
          {reviews.map((r, i) => (
            <ScrollReveal key={i} variant="up" delay={i * 0.07} className={i >= 3 ? 'mobile-hide' : ''}>
              <div
                style={{
                  background: '#fff', borderRadius: 18, padding: '26px 24px',
                  border: '1.5px solid rgba(41,171,226,0.1)',
                  boxShadow: '0 2px 12px rgba(30,56,146,0.05)',
                  display: 'flex', flexDirection: 'column', gap: 14,
                  height: '100%',
                  transition: 'box-shadow 0.2s, transform 0.2s, border-color 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = '0 12px 36px rgba(41,171,226,0.15)';
                  el.style.transform = 'translateY(-4px)';
                  el.style.borderColor = 'rgba(41,171,226,0.35)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.boxShadow = '0 2px 12px rgba(30,56,146,0.05)';
                  el.style.transform = 'none';
                  el.style.borderColor = 'rgba(41,171,226,0.1)';
                }}
              >
                <StarRow count={r.rating} />
                <p style={{ fontSize: 14, color: '#5a5a5a', lineHeight: 1.75, margin: 0, flex: 1, fontStyle: 'italic' }}>"{r.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingTop: 14, borderTop: '1px solid #f1f5f9' }}>
                  <div style={{
                    width: 38, height: 38, borderRadius: '50%',
                    background: `linear-gradient(135deg, ${T} 0%, ${CTA} 100%)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, fontWeight: 800, color: '#fff', flexShrink: 0,
                  }}>
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <p style={{ fontSize: 13, fontWeight: 700, color: P, margin: 0, lineHeight: 1.2 }}>{r.name}</p>
                    <p style={{ fontSize: 11, color: '#9E9E9E', margin: '2px 0 0', fontWeight: 500 }}>{r.location} · {r.since}</p>
                  </div>
                  <div style={{ marginLeft: 'auto' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={0.2}>
          <div style={{ textAlign: 'center', marginTop: 44 }}>
            <a
              href="https://www.google.com/maps/place/Mount+Doug+Springs"
              target="_blank" rel="noopener noreferrer"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '13px 28px', borderRadius: 8,
                background: 'transparent', border: `1.5px solid rgba(41,171,226,0.3)`,
                color: T, fontWeight: 700, fontSize: 14, textDecoration: 'none',
                transition: 'all 0.18s',
              }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = `rgba(41,171,226,0.06)`; el.style.borderColor = T; }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = 'transparent'; el.style.borderColor = 'rgba(41,171,226,0.3)'; }}
            >
              Read all reviews on Google
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </ScrollReveal>
      </div>

      <style>{`
        @media (max-width: 639px) { .reviews-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 640px) and (max-width: 900px) { .reviews-grid { grid-template-columns: 1fr 1fr !important; } }
      `}</style>
    </section>
  );
}
