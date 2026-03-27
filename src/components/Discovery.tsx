'use client';

import { useState } from 'react';
import Link from 'next/link';

const P = '#1E3892';
const T = '#29ABE2';
const O = '#29ABE2';

const nodes = [
  {
    id: 1,
    label: '01',
    top: '54%',
    left: '15%',
    popupSide: 'right',
    phase: 'Phase 01',
    title: 'The Deep Clean',
    problem: 'Chlorine, rust & micro-sediments from tap water.',
    solution: 'Advanced sediment + carbon filtration.',
    result: 'Chemical odours stripped. Pure, crisp taste starts here.',
    href: '/the-ultimate-water-store',
  },
  {
    id: 2,
    label: '02',
    top: '42%',
    left: '44%',
    popupSide: 'right',
    phase: 'Phase 02',
    title: 'Molecular Purity',
    problem: 'Invisible lead, fluoride & heavy metals.',
    solution: 'High-pressure Reverse Osmosis membrane.',
    result: '99.8% of all dissolved solids removed. Pure H₂O.',
    href: '/the-ultimate-water-store',
  },
  {
    id: 3,
    label: '03',
    top: '36%',
    left: '71%',
    popupSide: 'left',
    phase: 'Phase 03',
    title: 'The Oxygen Boost',
    problem: 'Standard water is flat and slow to hydrate.',
    solution: 'Medical-grade O₂ infusion.',
    result: 'Up to 5× higher oxygen. Faster recovery, better hydration.',
    href: '/hyper-oxygenated-water',
  },
  {
    id: 4,
    label: '04',
    top: '52%',
    left: '88%',
    popupSide: 'left',
    phase: 'Phase 04',
    title: 'The Safety Seal',
    problem: 'Bacteria & viral growth during storage.',
    solution: 'UV-C sterilisation + Ozone treatment.',
    result: '100% germ-free. Extended shelf life. Every bottle.',
    href: '/the-ultimate-water-store',
  },
];

export default function Discovery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section style={{ padding: '88px 0', background: '#F8FAFC' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <span style={{
            fontSize: 11, fontWeight: 700, color: T,
            letterSpacing: '0.25em', textTransform: 'uppercase', display: 'block', marginBottom: 14,
          }}>Interactive · Hover Each Stage</span>
          <h2 style={{
            fontFamily: 'var(--font-fraunces), serif',
            fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: 600,
            color: P, letterSpacing: '-0.02em', lineHeight: 1.12, marginBottom: 14,
          }}>
            The Purity Journey
          </h2>
          <p style={{ fontSize: 16, color: '#757575', maxWidth: 460, margin: '0 auto', lineHeight: 1.65 }}>
            Four stages. Zero compromises. Hover the numbered points to see exactly what happens to your water.
          </p>
        </div>

        {/* Interactive image panel */}
        <div style={{
          position: 'relative',
          borderRadius: 24,
          overflow: 'hidden',
          aspectRatio: '1408 / 768',
          background: '#071830',
          boxShadow: `0 24px 72px rgba(30,56,146,0.28)`,
        }}>
          {/* The purification system image */}
          <img
            src="/purification-system.jpg"
            alt="Mount Doug Springs four-stage water purification system"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center center', display: 'block' }}
          />
          {/* Subtle bottom vignette so popups read cleanly */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(30,56,146,0.25) 0%, transparent 40%)',
            pointerEvents: 'none',
          }} />

          {/* Nodes */}
          {nodes.map(node => (
            <div
              key={node.id}
              onMouseEnter={() => setActive(node.id)}
              onMouseLeave={() => setActive(null)}
              onClick={() => setActive(active === node.id ? null : node.id)}
              style={{
                position: 'absolute',
                top: node.top,
                left: node.left,
                cursor: 'pointer',
                zIndex: active === node.id ? 30 : 10,
              }}
            >
              {/* Pulse ring */}
              <div style={{
                position: 'absolute',
                inset: -10,
                borderRadius: '50%',
                background: `${O}30`,
                animation: 'pulse-node 2.2s cubic-bezier(0.4,0,0.6,1) infinite',
              }} />

              {/* Dot */}
              <div style={{
                position: 'relative',
                width: 36, height: 36, borderRadius: '50%',
                background: active === node.id ? O : P,
                border: `2px solid ${active === node.id ? '#fff' : 'rgba(255,255,255,0.7)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 800, color: active === node.id ? P : '#fff',
                boxShadow: active === node.id
                  ? `0 0 0 4px ${O}40, 0 4px 16px rgba(41,171,226,0.5)`
                  : '0 2px 10px rgba(30,56,146,0.4)',
                transition: 'all 0.2s',
                transform: active === node.id ? 'scale(1.18)' : 'scale(1)',
              }}>
                {node.label}
              </div>

              {/* Popup card */}
              <div style={{
                position: 'absolute',
                bottom: 'calc(100% + 14px)',
                transform: `translateX(${node.popupSide === 'right' ? '-8px' : 'calc(-100% + 44px)'}) translateY(${active === node.id ? '0px' : '8px'})`,
                opacity: active === node.id ? 1 : 0,
                transition: 'opacity 0.22s ease, transform 0.22s ease',
                pointerEvents: active === node.id ? 'auto' : 'none',
                width: 248,
                background: 'rgba(255,255,255,0.97)',
                backdropFilter: 'blur(20px)',
                borderRadius: 16,
                padding: '16px 18px',
                boxShadow: '0 12px 40px rgba(30,56,146,0.22)',
                border: '1px solid rgba(255,255,255,0.7)',
              }}>
                {/* Phase label + title */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
                  <span style={{
                    width: 26, height: 26, borderRadius: '50%',
                    background: P, color: '#fff',
                    fontSize: 10, fontWeight: 800,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>{node.label}</span>
                  <div>
                    <p style={{ fontSize: 9, fontWeight: 700, color: T, letterSpacing: '0.12em', textTransform: 'uppercase', margin: 0 }}>{node.phase}</p>
                    <p style={{ fontSize: 14, fontWeight: 700, color: P, margin: 0, lineHeight: 1.2 }}>{node.title}</p>
                  </div>
                </div>

                {/* Problem / Solution / Result */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <div style={{ display: 'flex', gap: 7, alignItems: 'flex-start' }}>
                    <span style={{ fontSize: 9, fontWeight: 800, color: '#e11d48', background: '#fee2e2', padding: '2px 6px', borderRadius: 4, flexShrink: 0, marginTop: 1 }}>Problem</span>
                    <p style={{ fontSize: 12, color: '#757575', margin: 0, lineHeight: 1.5 }}>{node.problem}</p>
                  </div>
                  <div style={{ display: 'flex', gap: 7, alignItems: 'flex-start' }}>
                    <span style={{ fontSize: 9, fontWeight: 800, color: T, background: `${T}18`, padding: '2px 6px', borderRadius: 4, flexShrink: 0, marginTop: 1 }}>Fix</span>
                    <p style={{ fontSize: 12, color: '#757575', margin: 0, lineHeight: 1.5 }}>{node.solution}</p>
                  </div>
                  <div style={{ display: 'flex', gap: 7, alignItems: 'flex-start' }}>
                    <span style={{ fontSize: 9, fontWeight: 800, color: '#059669', background: '#d1fae5', padding: '2px 6px', borderRadius: 4, flexShrink: 0, marginTop: 1 }}>Result</span>
                    <p style={{ fontSize: 12, color: P, fontWeight: 600, margin: 0, lineHeight: 1.5 }}>{node.result}</p>
                  </div>
                </div>

                {/* CTA */}
                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: 10, marginTop: 10 }}>
                  <Link href={node.href} style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    fontSize: 12, fontWeight: 700, color: T, textDecoration: 'none',
                  }}>
                    Learn more
                    <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
                      <path d="M2 7H12M8 3L12 7L8 11" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile fallback */}
        <div className="discovery-mobile" style={{ display: 'none', flexDirection: 'column', gap: 14, marginTop: 28 }}>
          {nodes.map(node => (
            <div key={node.id} style={{
              background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 16,
              padding: '18px 20px', display: 'flex', gap: 14, alignItems: 'flex-start',
            }}>
              <div style={{
                width: 36, height: 36, borderRadius: '50%', background: P,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 800, color: '#fff', flexShrink: 0,
              }}>{node.label}</div>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 10, fontWeight: 700, color: T, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 3 }}>{node.phase}</p>
                <h4 style={{ fontSize: 15, fontWeight: 700, color: P, marginBottom: 10 }}>{node.title}</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
                  {[
                    { label: 'Problem', text: node.problem, color: '#e11d48', bg: '#fee2e2' },
                    { label: 'Fix', text: node.solution, color: T, bg: `${T}18` },
                    { label: 'Result', text: node.result, color: '#059669', bg: '#d1fae5' },
                  ].map(row => (
                    <div key={row.label} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <span style={{ fontSize: 9, fontWeight: 800, color: row.color, background: row.bg, padding: '2px 6px', borderRadius: 4, flexShrink: 0, marginTop: 2 }}>{row.label}</span>
                      <p style={{ fontSize: 13, color: '#757575', margin: 0, lineHeight: 1.55 }}>{row.text}</p>
                    </div>
                  ))}
                </div>
                <Link href={node.href} style={{ fontSize: 13, fontWeight: 700, color: T, textDecoration: 'none', display: 'inline-block', marginTop: 10 }}>Learn more →</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse-node {
          0%   { transform: scale(0.9); opacity: 0.7; }
          50%  { transform: scale(1.2); opacity: 0.3; }
          100% { transform: scale(0.9); opacity: 0.7; }
        }
        @media (max-width: 768px) {
          .discovery-mobile { display: flex !important; }
        }
      `}</style>
    </section>
  );
}
