'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const P = '#1E3892';
const T = '#29ABE2';

const faqs = [
  {
    q: 'Do I need to bring my own bottle?',
    a: 'No — we sell BPA-free 18.9L and 11.3L jugs for a one-time deposit of $10. You can also buy a new jug outright. Once you have one, just bring it back each time and we refill it fresh on the spot.',
  },
  {
    q: 'How often should I get my water refilled?',
    a: 'For a family of four, an 18.9L jug typically lasts 1–2 weeks as your main drinking and cooking water. Many customers set up a regular delivery schedule or drive in every week or two — whatever works for your household.',
  },
  {
    q: 'What areas do you deliver to?',
    a: 'We deliver across Greater Victoria including Saanich, Oak Bay, Esquimalt, View Royal, Langford, Colwood, Central Saanich, North Saanich, and Sidney. Call us at 250 381-2088 or check our delivery page to confirm your address.',
  },
  {
    q: 'What is the difference between Purified and Hyper-Oxygenated water?',
    a: 'Our Purified water goes through a multi-stage filtration process including Reverse Osmosis, removing 99.8% of dissolved solids, chlorine, fluoride, and heavy metals. Our Hyper-Oxygenated water starts as our purified water and is then infused with medical-grade oxygen to reach 38–40 ppm dissolved oxygen — roughly 5× the oxygen content of standard water — which many customers find aids recovery and hydration.',
  },
  {
    q: 'Do I have to lift the jugs myself at the drive-up?',
    a: 'Never. That\'s the whole point of our white-glove service. Pull up to our bay at Admirals Walk and our staff will take your empty jugs, sanitize them, fill them, and load them back into your car. You don\'t touch a thing.',
  },
  {
    q: 'Can I pre-pay for multiple fills and save money?',
    a: 'Yes — our most popular option is the 20× Purified Water Bundle at $180, saving you $10 compared to individual fills. Just bring your jug and we draw from your pre-paid credits each visit. We track it on file.',
  },
  {
    q: 'Is your water tested and certified?',
    a: 'Absolutely. Every batch is tested beyond industry standards. We hold WorkSafeBC certification and carry a BBB A+ rating. Our multi-stage system includes sediment filtration, carbon filtration, Reverse Osmosis, UV-C sterilisation, and ozone treatment — far exceeding what municipal tap water goes through.',
  },
  {
    q: 'What are your opening hours?',
    a: 'We\'re open Monday to Friday 9:30am–6pm and Saturday 9:30am–5pm. We are closed on Sundays and holidays. Find us at 104-1505 Admirals Road, Victoria, BC. For delivery scheduling, call us at 250 381-2088 or email delivery@mtdougsprings.com.',
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
            Call us or send an email — we're a small local team and we actually pick up.
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
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 2.5C2 2.5 3.5 1 4.5 2.5L5.5 4.5C5.5 4.5 5 5.5 4.5 6C4 6.5 5.5 8 7 9.5C8.5 11 10 12.5 10.5 12C11 11.5 12 11 12 11L13.5 12C15 13 13.5 14.5 13.5 14.5C11.5 16.5 2 6.5 2 2.5Z" fill={P}/>
              </svg>
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
