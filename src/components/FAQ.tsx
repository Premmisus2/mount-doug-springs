'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';
import { PhoneIcon } from './Icons';

const P = '#1E3892';
const T = '#29ABE2';

// Every answer from their own sites (mtdougsprings.com, ultimatewaterstore.com). No certification claims: none could be verified.
const faqs = [
  {
    q: "Do I need to bring my own bottle?",
    a: "No. We sell new bottles in the store. If you have your own, we fill 1, 2, 3, 4 and 5 gallon bottles of any brand. Delivery bottles carry a refundable deposit.",
  },
  {
    q: "How often should I get my water refilled?",
    a: "Whatever suits you. Delivery can come every two weeks, monthly, or whenever you ask. In the store, just come in when you run low.",
  },
  {
    q: "What areas do you deliver to?",
    a: "We deliver across Greater Victoria, from Sooke to Sidney and Oak Bay to Westshore. Call us at 250 381-2088 to confirm your address.",
  },
  {
    q: "What is the difference between Purified and Hyper-Oxygenated water?",
    a: "Our purified water goes through our six-step process: three stages of charcoal micron filtration, reverse osmosis, ultraviolet light and ozonation, leaving under 0.1 ppm total dissolved solids. Our hyper-oxygenated water starts as that purified water and holds 35 to 40 ppm of oxygen, about four times the usual amount. In the store it's 50¢ more per bottle.",
  },
  {
    q: "Do I have to carry the bottles myself?",
    a: "No. Our staff fill your bottles and carry them out to your car.",
  },
  {
    q: "Can I pre-pay for multiple fills and save money?",
    a: "Yes. For delivery, prepay 20 bottles of 18.9L purified for $200 ($10 each), or oxygenated for $220 ($11 each). In the store, a 5 gallon refill is $5.50, or 30 for $130 prepaid.",
  },
  {
    q: "Do you sell coolers and dispensers?",
    a: "Yes. Buy or rent a pre-tested cooler, top-loading or bottom-loading, hot and cold or hot, room and cold. We also carry porcelain crocks, hand pumps, USB pumps and crown and cradle dispensers. New coolers come with a three-year in-store warranty.",
  },
  {
    q: "What are your opening hours?",
    a: "Monday to Friday 9:30am to 6pm, and Saturday 9:30am to 5pm. We're closed Sundays and statutory holidays. Find us at 104-1505 Admirals Road, Victoria, BC. For delivery, call 250 381-2088 or email delivery@mtdougsprings.com.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      aria-label="Frequently asked questions"
      style={{ padding: '96px 0', background: '#fff' }}
    >
      {/* JSON-LD for FAQ rich results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqs.map(f => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }),
        }}
      />

      <div style={{ maxWidth: 860, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <span style={{
              fontSize: 11, fontWeight: 700, color: T,
              letterSpacing: '0.25em', textTransform: 'uppercase',
              display: 'block', marginBottom: 14,
            }}>FAQ</span>
            <h2 style={{
              fontFamily: 'var(--font-fraunces), serif',
              fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: 600,
              color: P, letterSpacing: '-0.02em', lineHeight: 1.12, marginBottom: 16,
            }}>
              Common Questions
            </h2>
            <p style={{ fontSize: 16, color: '#757575', maxWidth: 460, margin: '0 auto', lineHeight: 1.7 }}>
              Everything you need to know before your first visit or delivery.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion */}
        <ScrollReveal variant="up" delay={0.1}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                itemScope
                itemType="https://schema.org/Question"
                style={{
                  borderRadius: 14,
                  border: `1.5px solid ${isOpen ? `rgba(41,171,226,0.4)` : '#e2e8f0'}`,
                  background: isOpen ? '#f0f9ff' : '#fff',
                  overflow: 'hidden',
                  transition: 'border-color 0.2s, background 0.2s',
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%', textAlign: 'left',
                    padding: '20px 24px',
                    background: 'none', border: 'none',
                    cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
                  }}
                >
                  <span
                    itemProp="name"
                    style={{
                      fontSize: 15, fontWeight: 700,
                      color: isOpen ? T : P,
                      lineHeight: 1.4,
                      transition: 'color 0.2s',
                    }}
                  >
                    {faq.q}
                  </span>
                  {/* +/– icon */}
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                    background: isOpen ? T : '#f1f5f9',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.2s',
                  }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none"
                      style={{ transition: 'transform 0.2s', transform: isOpen ? 'rotate(45deg)' : 'none' }}>
                      <path d="M6 1V11M1 6H11" stroke={isOpen ? '#fff' : P} strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </div>
                </button>

                {/* Answer */}
                <div
                  itemScope
                  itemType="https://schema.org/Answer"
                  style={{
                    maxHeight: isOpen ? 800 : 0,
                    overflow: 'hidden',
                    transition: 'max-height 0.32s ease',
                  }}
                >
                  <p
                    itemProp="text"
                    style={{
                      fontSize: 14, color: '#5a5a5a', lineHeight: 1.8,
                      padding: '0 24px 22px',
                      margin: 0,
                    }}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        </ScrollReveal>

        {/* Bottom CTA */}
        <ScrollReveal variant="up" delay={0.2}>
        <div style={{
          marginTop: 48, textAlign: 'center',
          padding: '32px 28px',
          background: `linear-gradient(135deg, ${P} 0%, #0a4a8a 100%)`,
          borderRadius: 20,
        }}>
          <p style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 6 }}>Still have questions?</p>
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', marginBottom: 24, lineHeight: 1.6 }}>
            Call us or send an email. We're a small family business.
          </p>
          <div className="faq-cta-buttons" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="tel:2503812088"
              style={{
                padding: '11px 22px', borderRadius: 8,
                background: '#29ABE2', color: P,
                fontWeight: 700, fontSize: 14, textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 7,
              }}
            >
              <PhoneIcon size={15} />
              250 381-2088
            </a>
            <a
              href="mailto:delivery@mtdougsprings.com"
              style={{
                padding: '11px 22px', borderRadius: 8,
                background: 'rgba(255,255,255,0.1)',
                border: '1.5px solid rgba(255,255,255,0.25)',
                color: '#fff',
                fontWeight: 700, fontSize: 14, textDecoration: 'none',
                display: 'inline-flex', alignItems: 'center', gap: 7,
              }}
            >
              <span className="mobile-hide">delivery@mtdougsprings.com</span>
              <span className="mobile-only">Send an Email</span>
            </a>
          </div>
        </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
