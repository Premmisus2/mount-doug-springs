'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';

const P = '#1E3892';
const T = '#29ABE2';

const CATEGORIES = ['All', 'Purified', 'Oxygenated', 'Emergency', 'Bundles', 'Coolers', 'Accessories'];

const ALL_PRODUCTS = [
  { id: 'water-18-9l',          category: 'Purified',     name: '18.9L Purified Water',         sub: '5-gallon · Multi-stage filtered',   price: 9.50,  deposit: 10, badge: 'Best Seller', noDeposit: false, img: '/p-purified-lg.jpg' },
  { id: 'water-11-3l',          category: 'Purified',     name: '11.3L Purified Water',         sub: '3-gallon · Countertop-ready',       price: 6.50,  deposit: 10, badge: null,          noDeposit: false, img: '/p-purified-sm.jpg' },
  { id: 'water-oxy-189',        category: 'Oxygenated',   name: '18.9L Oxygenated Water',       sub: '38–40 ppm dissolved O₂',           price: 10.50, deposit: 10, badge: '40ppm O₂',    noDeposit: false, img: '/p-oxy-lg.jpg' },
  { id: 'water-oxy-113',        category: 'Oxygenated',   name: '11.3L Oxygenated Water',       sub: '38–40 ppm dissolved O₂',           price: 7.50,  deposit: 10, badge: '40ppm O₂',    noDeposit: false, img: '/p-oxy-sm.jpg' },
  { id: 'water-emergency',      category: 'Emergency',    name: '18.9L Emergency Bottle',       sub: 'Sealed · Long shelf-life',          price: 15.00, deposit: 0,  badge: '72hr Kit',     noDeposit: true,  img: '/p-emergency.jpg' },
  { id: 'bundle-purified-20x',  category: 'Bundles',      name: '20× Purified Prepay',          sub: '$9.00/jug · Save $10',             price: 180,   deposit: 0,  badge: 'Best Value',   noDeposit: true,  img: '/p-bundle-purified.jpg' },
  { id: 'bundle-oxy-20x',       category: 'Bundles',      name: '20× Oxygenated Prepay',        sub: '$9.50/jug · Save $20',             price: 190,   deposit: 0,  badge: 'Save $20',     noDeposit: true,  img: '/p-oxy-lg.jpg' },
  { id: 'cooler-standard',      category: 'Coolers',      name: 'Standard Top-Load Cooler',     sub: 'Hot & cold · Floor-standing',      price: 0,     deposit: 0,  badge: 'Ask In-Store', noDeposit: true,  img: '/p-cooler-standard.jpg' },
  { id: 'cooler-primo-white',   category: 'Coolers',      name: 'Primo Top-Load White',         sub: 'Hot & cold · Primo brand',         price: 0,     deposit: 0,  badge: 'Ask In-Store', noDeposit: true,  img: '/p-cooler-white.png' },
  { id: 'cooler-primo-stainless', category: 'Coolers',    name: 'Primo Bottom-Load Stainless',  sub: 'No lifting · Premium finish',      price: 0,     deposit: 0,  badge: 'Premium',      noDeposit: true,  img: '/p-cooler-stainless.png' },
  { id: 'acc-crock-plain',      category: 'Accessories',  name: 'Plain Crock Dispenser',        sub: 'Ceramic · Classic style',          price: 80,    deposit: 0,  badge: null,           noDeposit: true,  img: '/p-crock-plain.jpg' },
  { id: 'acc-crock-blue',       category: 'Accessories',  name: 'Ceramic Crock Blue Stripe',    sub: 'Ceramic · Decorative',             price: 80,    deposit: 0,  badge: null,           noDeposit: true,  img: '/p-crock-blue.jpg' },
  { id: 'acc-pump-manual',      category: 'Accessories',  name: 'Manual Hand Pump',             sub: 'No electricity needed',            price: 30,    deposit: 0,  badge: null,           noDeposit: true,  img: '/p-pump-manual.jpg' },
  { id: 'acc-pump-usb',         category: 'Accessories',  name: 'USB Rechargeable Pump',        sub: 'Button-activated dispenser',       price: 35,    deposit: 0,  badge: null,           noDeposit: true,  img: '/p-pump-usb.png' },
  { id: 'acc-leak-alarm',       category: 'Accessories',  name: 'WiFi Leak Detection Alarm',    sub: 'Phone alerts · Connected',         price: 29,    deposit: 0,  badge: 'Smart',        noDeposit: true,  img: '/p-wifi-leak.png' },
];

const SLIDES = [
  {
    cat: 'Purified',
    accent: T,
    bg: 'linear-gradient(130deg, #020f1f 0%, #1E3892 55%, #0a3d7a 100%)',
    eyebrow: 'Most Popular',
    title: "Victoria's Purest\nWater",
    sub: '18.9L from $9.50 · Multi-stage filtered · Bottled fresh nightly',
    cta: 'Shop Purified Water',
    sideImg: '/bottle.png',
  },
  {
    cat: 'Oxygenated',
    accent: '#34d399',
    bg: 'linear-gradient(130deg, #020f1f 0%, #064e3b 50%, #1E3892 100%)',
    eyebrow: '40+ ppm O₂',
    title: 'Hyper-Oxygenated\nWater',
    sub: '40× more dissolved oxygen than tap · Favoured by athletes · From $10.50',
    cta: 'Shop Oxygenated',
    sideImg: null,
  },
  {
    cat: 'Bundles',
    accent: '#facc15',
    bg: 'linear-gradient(130deg, #1E3892 0%, #0c2d6b 50%, #020f1f 100%)',
    eyebrow: 'Best Value',
    title: '20× Prepay\nBundles',
    sub: 'Save up to $20 · Pre-pay for 20 fills · We track your credits on file',
    cta: 'Shop Bundles',
    sideImg: null,
  },
];

const BADGE_COLOR: Record<string, string> = {
  'Best Seller': P,
  'Best Value': '#059669',
  'Save $20': '#059669',
  '40ppm O₂': '#059669',
  '72hr Kit': '#dc2626',
  'Premium': '#7c3aed',
  'Smart': '#0284c7',
  'Ask In-Store': '#757575',
};

export default function OrderShop() {
  const { addItem, items, subtotal, total, setOpen } = useCart();
  const [slide, setSlide] = useState(0);
  const [category, setCategory] = useState('All');
  const [addedId, setAddedId] = useState<string | null>(null);

  // Auto-cycle carousel every 5 s
  useEffect(() => {
    const t = setInterval(() => setSlide(s => (s + 1) % SLIDES.length), 5000);
    return () => clearInterval(t);
  }, []);

  function handleAdd(p: typeof ALL_PRODUCTS[0]) {
    addItem({ id: p.id, name: p.name, price: p.price, deposit: p.noDeposit ? 0 : 10 });
    setAddedId(p.id);
    setTimeout(() => setAddedId(null), 1300);
  }

  const filtered = category === 'All'
    ? ALL_PRODUCTS
    : ALL_PRODUCTS.filter(p => p.category === category);

  const cartCount = items.reduce((s, i) => s + i.qty, 0);

  return (
    <>
      {/* ── CAROUSEL ── */}
      <div style={{ position: 'relative', marginTop: 62, height: 'clamp(320px, 55vh, 560px)', overflow: 'hidden' }}>

        {SLIDES.map((s, i) => (
          <div
            key={i}
            aria-hidden={slide !== i}
            style={{
              position: 'absolute', inset: 0,
              background: s.bg,
              opacity: slide === i ? 1 : 0,
              transition: 'opacity 0.75s ease',
              display: 'flex', alignItems: 'center',
              pointerEvents: slide === i ? 'auto' : 'none',
            }}
          >
            {/* Decorative bubble */}
            <div style={{ position: 'absolute', width: 480, height: 480, top: -120, right: -80, borderRadius: '50%', background: `${s.accent}0d`, pointerEvents: 'none' }} />

            <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 clamp(24px, 5vw, 72px)', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32 }}>

              {/* Text side */}
              <div style={{ maxWidth: 580 }}>
                <span style={{ display: 'inline-block', padding: '4px 12px', borderRadius: 100, background: `${s.accent}22`, border: `1px solid ${s.accent}55`, fontSize: 10, fontWeight: 700, color: s.accent, letterSpacing: '.18em', textTransform: 'uppercase', marginBottom: 18 }}>
                  {s.eyebrow}
                </span>
                <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', lineHeight: 1.05, letterSpacing: '-.035em', marginBottom: 16, whiteSpace: 'pre-line' }}>
                  {s.title}
                </h2>
                <p style={{ fontSize: 'clamp(13px, 1.5vw, 15px)', color: 'rgba(255,255,255,.68)', marginBottom: 28, lineHeight: 1.65 }}>{s.sub}</p>
                <button
                  onClick={() => setCategory(s.cat)}
                  style={{
                    padding: '13px 28px', borderRadius: 8,
                    background: s.accent, color: s.accent === '#facc15' ? '#1a1a00' : P,
                    fontWeight: 800, fontSize: 13, border: 'none', cursor: 'pointer',
                    letterSpacing: '.04em', textTransform: 'uppercase',
                    transition: 'opacity .18s, transform .18s',
                    display: 'inline-flex', alignItems: 'center', gap: 8,
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.opacity = '.88'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.opacity = '1'; (e.currentTarget as HTMLElement).style.transform = 'none'; }}
                >
                  {s.cta}
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 3l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </button>
              </div>

              {/* Optional bottle image */}
              {s.sideImg && (
                <div className="ord-slide-img-wrap">
                  <img
                    src={s.sideImg}
                    alt="Mount Doug Springs Water"
                    style={{ height: '100%', width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 24px 48px rgba(0,0,0,0.45))' }}
                  />
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Prev / Next */}
        <button
          className="ord-carousel-btn ord-carousel-prev"
          onClick={() => setSlide(s => (s - 1 + SLIDES.length) % SLIDES.length)}
          aria-label="Previous slide"
        >‹</button>
        <button
          className="ord-carousel-btn ord-carousel-next"
          onClick={() => setSlide(s => (s + 1) % SLIDES.length)}
          aria-label="Next slide"
        >›</button>

        {/* Dot indicators */}
        <div style={{ position: 'absolute', bottom: 20, left: 0, right: 0, display: 'flex', justifyContent: 'center', gap: 8, zIndex: 5 }}>
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: slide === i ? 28 : 8, height: 8, borderRadius: 4, padding: 0,
                background: slide === i ? T : 'rgba(255,255,255,.35)',
                border: 'none', cursor: 'pointer', transition: 'all .35s',
              }}
            />
          ))}
        </div>
      </div>

      {/* ── DEPOSIT NOTICE ── */}
      <div style={{ background: '#f0f9ff', borderBottom: '1px solid rgba(41,171,226,.15)', padding: '12px 24px', textAlign: 'center' }}>
        <p style={{ fontSize: 13, color: '#0369a1', margin: 0, fontWeight: 500 }}>
          💧 <strong>New customer?</strong> All jugs require a one-time <strong>$10 refundable deposit</strong> — returned when you bring the jug back.
        </p>
      </div>

      {/* ── STORE ── */}
      <section style={{ background: '#f8fafc', minHeight: '60vh' }}>

        {/* Sticky category + cart bar */}
        <div className="ord-store-bar">
          <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, height: '100%' }}>

            {/* Category tabs */}
            <div className="ord-cat-scroll" role="tablist" aria-label="Product categories">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  role="tab"
                  aria-selected={category === cat}
                  onClick={() => setCategory(cat)}
                  style={{
                    padding: '0 16px', height: 52, background: 'none',
                    border: 'none', borderBottom: category === cat ? `2.5px solid ${P}` : '2.5px solid transparent',
                    cursor: 'pointer', fontSize: 13, fontWeight: category === cat ? 700 : 500,
                    color: category === cat ? P : '#757575',
                    whiteSpace: 'nowrap', transition: 'color .15s, border-color .15s',
                    flexShrink: 0,
                  }}
                >{cat}</button>
              ))}
            </div>

            {/* Cart shortcut */}
            <button
              onClick={() => setOpen(true)}
              style={{
                display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0,
                padding: '8px 16px', borderRadius: 8,
                background: cartCount > 0 ? P : 'transparent',
                border: cartCount > 0 ? 'none' : `1.5px solid rgba(30,56,146,.2)`,
                color: cartCount > 0 ? '#fff' : P,
                fontWeight: 700, fontSize: 13, cursor: 'pointer',
                transition: 'all .18s',
              }}
              aria-label={`Cart: ${cartCount} items`}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/>
              </svg>
              {cartCount > 0
                ? <span>{cartCount} item{cartCount > 1 ? 's' : ''} · ${total.toFixed(2)}</span>
                : <span>Cart</span>}
            </button>
          </div>
        </div>

        {/* Product count + grid */}
        <div style={{ maxWidth: 1400, margin: '0 auto', padding: '28px 24px 80px' }}>

          <p style={{ fontSize: 12, color: '#9E9E9E', fontWeight: 500, marginBottom: 20 }}>
            {filtered.length} product{filtered.length !== 1 ? 's' : ''}{category !== 'All' ? ` in ${category}` : ''}
          </p>

          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '72px 24px', color: '#9E9E9E', fontSize: 15 }}>No products found.</div>
          ) : (
            <div className="ord-grid">
              {filtered.map((p, i) => (
                <div
                  key={p.id}
                  className="ord-card"
                  style={{ animationDelay: `${Math.min(i, 8) * 0.055}s` }}
                >
                  {/* Product image */}
                  <div className="ord-img-wrap">
                    <img
                      src={p.img}
                      alt={p.name}
                      className="ord-img"
                      loading="lazy"
                    />
                    {p.badge && (
                      <span style={{
                        position: 'absolute', top: 10, left: 10,
                        padding: '4px 10px', borderRadius: 100,
                        background: BADGE_COLOR[p.badge] ?? T,
                        color: '#fff', fontSize: 10, fontWeight: 700, letterSpacing: '.06em',
                      }}>{p.badge}</span>
                    )}
                    {/* Category chip */}
                    <span style={{
                      position: 'absolute', top: 10, right: 10,
                      padding: '3px 9px', borderRadius: 100,
                      background: 'rgba(255,255,255,.9)',
                      color: '#757575', fontSize: 10, fontWeight: 600, letterSpacing: '.05em',
                    }}>{p.category}</span>
                  </div>

                  {/* Product info */}
                  <div style={{ padding: '16px 18px 20px' }}>
                    <p style={{ fontSize: 15, fontWeight: 700, color: P, marginBottom: 4, lineHeight: 1.25 }}>{p.name}</p>
                    <p style={{ fontSize: 12, color: '#9E9E9E', marginBottom: 16, lineHeight: 1.4 }}>{p.sub}</p>

                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 8 }}>
                      {/* Price */}
                      <div>
                        {p.price > 0 ? (
                          <>
                            <span style={{ fontSize: 20, fontWeight: 800, color: P, lineHeight: 1 }}>${p.price.toFixed(2)}</span>
                            {!p.noDeposit && (
                              <span style={{ fontSize: 11, color: '#9E9E9E', display: 'block', marginTop: 3 }}>+ $10 refundable deposit</span>
                            )}
                          </>
                        ) : (
                          <span style={{ fontSize: 13, color: '#757575', fontWeight: 600, lineHeight: 1 }}>See In-Store</span>
                        )}
                      </div>

                      {/* CTA */}
                      {p.price > 0 ? (
                        <button
                          onClick={() => handleAdd(p)}
                          className={`ord-add-btn${addedId === p.id ? ' ord-add-btn--added' : ''}`}
                          aria-label={`Add ${p.name} to cart`}
                        >
                          {addedId === p.id ? (
                            <>
                              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                                <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                              Added
                            </>
                          ) : (
                            <>
                              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                                <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"/>
                              </svg>
                              Add to Cart
                            </>
                          )}
                        </button>
                      ) : (
                        <a
                          href="tel:2503812088"
                          style={{ padding: '9px 14px', borderRadius: 8, background: 'rgba(30,56,146,.07)', color: P, fontSize: 12, fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap', display: 'inline-block' }}
                        >Call Us</a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <style>{`
        /* ── Carousel ── */
        .ord-carousel-btn {
          position: absolute; top: 50%; transform: translateY(-50%);
          width: 46px; height: 46px; border-radius: 50%;
          background: rgba(255,255,255,.12); border: 1.5px solid rgba(255,255,255,.25);
          backdrop-filter: blur(6px);
          color: #fff; font-size: 26px; font-weight: 300;
          cursor: pointer; z-index: 10;
          display: flex; align-items: center; justify-content: center;
          transition: background .2s, transform .2s;
          line-height: 1;
        }
        .ord-carousel-btn:hover { background: rgba(255,255,255,.25); transform: translateY(-50%) scale(1.08); }
        .ord-carousel-prev { left: clamp(12px, 3vw, 36px); }
        .ord-carousel-next { right: clamp(12px, 3vw, 36px); }

        .ord-slide-img-wrap {
          height: clamp(200px, 40vh, 400px);
          flex-shrink: 0;
          display: flex; align-items: center; justify-content: center;
        }

        /* ── Store bar ── */
        .ord-store-bar {
          position: sticky; top: 62px; z-index: 20;
          background: #fff; border-bottom: 1px solid #eef0f4;
          height: 52px;
          box-shadow: 0 2px 12px rgba(30,56,146,.05);
        }
        .ord-cat-scroll {
          display: flex; overflow-x: auto; height: 100%;
          scrollbar-width: none; -ms-overflow-style: none;
        }
        .ord-cat-scroll::-webkit-scrollbar { display: none; }

        /* ── Product grid ── */
        .ord-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 22px;
        }

        /* ── Product card ── */
        .ord-card {
          background: #fff;
          border: 1.5px solid #eef0f4;
          border-radius: 14px;
          overflow: hidden;
          transition: transform .22s, box-shadow .22s, border-color .22s;
          animation: ord-card-in .4s ease both;
        }
        @keyframes ord-card-in {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .ord-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 16px 48px rgba(30,56,146,.12);
          border-color: rgba(41,171,226,.35);
        }

        /* ── Product image ── */
        .ord-img-wrap {
          position: relative;
          background: #f0f7ff;
          overflow: hidden;
        }
        .ord-img {
          width: 100%;
          aspect-ratio: 1 / 1;
          object-fit: contain;
          object-position: center;
          display: block;
          padding: 12px;
          transition: transform .4s ease;
        }
        .ord-card:hover .ord-img { transform: scale(1.06); }

        /* ── Add to cart button ── */
        .ord-add-btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 9px 14px; border-radius: 8px;
          background: ${P}; color: #fff;
          font-size: 12px; font-weight: 700;
          border: none; cursor: pointer;
          transition: background .18s, transform .15s;
          white-space: nowrap; letter-spacing: .02em;
          flex-shrink: 0;
        }
        .ord-add-btn:hover { background: #152e78; transform: scale(1.03); }
        .ord-add-btn--added { background: #059669 !important; transform: scale(1.03); }

        /* ── How it works steps ── */
        .ord-step .ord-num { transition: all .22s; }
        .ord-step:hover .ord-num { transform: scale(1.12); background: #29ABE2 !important; color: #1E3892 !important; }

        /* ── Responsive ── */
        @media (max-width: 1180px) {
          .ord-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 820px) {
          .ord-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; }
          .ord-slide-img-wrap { display: none; }
        }
        @media (max-width: 480px) {
          .ord-grid { grid-template-columns: 1fr; gap: 14px; }
          .ord-carousel-btn { display: none; }
          .ord-img { aspect-ratio: 4 / 3; padding: 16px; }
        }
      `}</style>
    </>
  );
}
