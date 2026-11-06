'use client';

import { useCart } from '@/context/CartContext';

const P   = '#1E3892';
const T   = '#29ABE2';
const O   = '#29ABE2';

const items = [
  {
    id: 'acc-leak-alarm',
    name: 'Leak Detection Alarm',
    price: 18.00,
    priceDisplay: '$18.00',
    desc: 'Audible alert the moment water leaks near your cooler base. Protects floors and cabinets from water damage. Battery powered, no wiring.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L16.5 9H22L17.5 12.5L19.5 18L14 14.5L8.5 18L10.5 12.5L6 9H11.5L14 4Z" stroke={T} strokeWidth="1.6" strokeLinejoin="round" fill={`${T}15`}/>
        <path d="M14 20V24" stroke={O} strokeWidth="2" strokeLinecap="round"/>
        <circle cx="14" cy="26" r="1.5" fill={O}/>
      </svg>
    ),
    badge: 'Safety',
    badgeColor: '#e11d48',
  },
  {
    id: 'acc-aqua-stacker',
    name: 'Aqua Stacker',
    price: 11.50,
    priceDisplay: '$11.50',
    desc: 'Store up to 4 extra water jugs vertically with this space-saving stacker rack. Keeps jugs stable, off the floor, and easy to roll out.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="6" y="16" width="16" height="8" rx="2" stroke={T} strokeWidth="1.6"/>
        <rect x="6" y="8" width="16" height="8" rx="2" stroke={T} strokeWidth="1.6" fill={`${T}10`}/>
        <rect x="6" y="1" width="16" height="7" rx="2" stroke={T} strokeWidth="1.6" fill={`${T}20`}/>
      </svg>
    ),
    badge: 'Storage',
    badgeColor: '#7c3aed',
  },
  {
    id: 'acc-manual-pump',
    name: 'Manual Pump Dispenser',
    price: 14.00,
    priceDisplay: '$14.00',
    desc: 'No-spill manual pump dispenser for 18.9L jugs. No electricity needed — just press down and pour. Great for countertop use or travel.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="10" y="12" width="8" height="14" rx="2" stroke={T} strokeWidth="1.6"/>
        <path d="M14 12V6M14 6H18M14 6L12 4" stroke={T} strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M8 20H10M18 20H20" stroke={T} strokeWidth="1.4" strokeLinecap="round"/>
        <circle cx="14" cy="8" r="2" fill={`${T}30`} stroke={T} strokeWidth="1.2"/>
      </svg>
    ),
    badge: 'Dispenser',
    badgeColor: '#0369a1',
  },
];

export default function Accessories() {
  const { addItem } = useCart();

  return (
    <section id="accessories" aria-label="Accessories and add-ons" style={{ padding: '80px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>

        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: T, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 12 }}>
            Essential Add-ons
          </p>
          <h2 style={{
            fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', fontWeight: 800,
            color: P, letterSpacing: '-0.025em', lineHeight: 1.12, marginBottom: 12,
          }}>
            Complete Your Setup
          </h2>
          <p style={{ fontSize: 16, color: '#757575', maxWidth: 400, margin: '0 auto' }}>
            Everything you need to get the most out of your water system.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="acc-grid">
          {items.map(item => (
            <div
              key={item.id}
              role="article"
              aria-label={item.name}
              style={{
                background: '#F8FAFC', border: '1px solid #e2e8f0', borderRadius: 18,
                padding: '28px 24px', display: 'flex', flexDirection: 'column',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = `${T}66`;
                el.style.boxShadow = `0 8px 28px rgba(0,163,173,0.12)`;
                el.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = '#e2e8f0';
                el.style.boxShadow = 'none';
                el.style.transform = 'none';
              }}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 20 }}>
                <div style={{
                  width: 56, height: 56, borderRadius: 14,
                  background: '#fff', border: '1px solid #e2e8f0',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}>
                  {item.icon}
                </div>
                <span style={{
                  padding: '4px 12px', borderRadius: 100, fontSize: 11, fontWeight: 700,
                  background: `${item.badgeColor}15`, color: item.badgeColor,
                }}>{item.badge}</span>
              </div>

              <h3 style={{ fontSize: 17, fontWeight: 800, color: P, marginBottom: 8, letterSpacing: '-0.01em' }}>{item.name}</h3>
              <p style={{ fontSize: 14, color: '#757575', lineHeight: 1.65, marginBottom: 20, flex: 1 }}>{item.desc}</p>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                <span style={{ fontSize: 24, fontWeight: 800, color: P, letterSpacing: '-0.02em' }}>{item.priceDisplay}</span>
                <button
                  aria-label={`Add ${item.name} to cart`}
                  onClick={() => addItem({ id: item.id, name: item.name, price: item.price, deposit: 0 })}
                  style={{
                    padding: '10px 20px', borderRadius: 8,
                    background: P, color: '#fff',
                    fontWeight: 700, fontSize: 14,
                    border: 'none', cursor: 'pointer',
                    transition: 'all 0.18s',
                    display: 'flex', alignItems: 'center', gap: 7,
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#00c4db'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = P; (e.currentTarget as HTMLElement).style.transform = 'none'; }}
                >
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M1.5 1.5H3L3.3 3M3.3 3H12L10.5 8H5M3.3 3L5 8" stroke="white" strokeWidth="1.4" strokeLinecap="round"/>
                    <circle cx="6" cy="11" r="1.2" fill="white"/>
                    <circle cx="10" cy="11" r="1.2" fill="white"/>
                  </svg>
                  Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) { .acc-grid { grid-template-columns: 1fr !important; } }
        @media (min-width: 641px) and (max-width: 900px) { .acc-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
