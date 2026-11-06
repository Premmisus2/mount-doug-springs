'use client';

import { useState, useMemo } from 'react';
import { useCart } from '@/context/CartContext';

const P = '#1E3892';
const T = '#29ABE2';
const O = '#29ABE2';

const CATEGORIES = ['All', 'Purified', 'Oxygenated', 'Emergency', 'Bundles', 'Coolers', 'Accessories'];

const ALL_PRODUCTS = [
  {
    id: 'water-18-9l',
    category: 'Purified',
    name: '18.9L Purified Water',
    sub: '5-gallon · Multi-stage filtered',
    price: 9.50,
    deposit: 10,
    badge: 'Best Seller',
    noDeposit: false,
    img: '/p-purified-lg.jpg',
  },
  {
    id: 'water-11-3l',
    category: 'Purified',
    name: '11.3L Purified Water',
    sub: '3-gallon · Countertop-ready',
    price: 6.50,
    deposit: 10,
    badge: null,
    noDeposit: false,
    img: '/p-purified-sm.jpg',
  },
  {
    id: 'water-oxy-189',
    category: 'Oxygenated',
    name: '18.9L Oxygenated Water',
    sub: '38–40 ppm dissolved O₂',
    price: 10.50,
    deposit: 10,
    badge: '40ppm O₂',
    noDeposit: false,
    img: '/p-oxy-lg.jpg',
  },
  {
    id: 'water-oxy-113',
    category: 'Oxygenated',
    name: '11.3L Oxygenated Water',
    sub: '38–40 ppm dissolved O₂',
    price: 7.50,
    deposit: 10,
    badge: '40ppm O₂',
    noDeposit: false,
    img: '/p-oxy-sm.jpg',
  },
  {
    id: 'water-emergency',
    category: 'Emergency',
    name: '18.9L Emergency Bottle',
    sub: 'Sealed · Long shelf-life',
    price: 15.00,
    deposit: 0,
    badge: '72hr Kit',
    noDeposit: true,
    img: '/p-emergency.jpg',
  },
  {
    id: 'bundle-purified-20x',
    category: 'Bundles',
    name: '20× Purified Prepay',
    sub: '$9.00/jug · Save $10',
    price: 180,
    deposit: 0,
    badge: 'Best Value',
    noDeposit: true,
    img: '/p-bundle-purified.jpg',
  },
  {
    id: 'bundle-oxy-20x',
    category: 'Bundles',
    name: '20× Oxygenated Prepay',
    sub: '$9.50/jug · Save $20',
    price: 190,
    deposit: 0,
    badge: 'Save $20',
    noDeposit: true,
    img: '/p-oxy-lg.jpg',
  },
  {
    id: 'cooler-standard',
    category: 'Coolers',
    name: 'Standard Top-Load Cooler',
    sub: 'Hot & cold · Floor-standing',
    price: 0,
    deposit: 0,
    badge: 'Ask In-Store',
    noDeposit: true,
    img: '/p-cooler-standard.jpg',
  },
  {
    id: 'cooler-primo-white',
    category: 'Coolers',
    name: 'Primo Top-Load White',
    sub: 'Hot & cold · Primo brand',
    price: 0,
    deposit: 0,
    badge: 'Ask In-Store',
    noDeposit: true,
    img: '/p-cooler-white.png',
  },
  {
    id: 'cooler-primo-stainless',
    category: 'Coolers',
    name: 'Primo Bottom-Load Stainless',
    sub: 'No lifting · Premium finish',
    price: 0,
    deposit: 0,
    badge: 'Premium',
    noDeposit: true,
    img: '/p-cooler-stainless.png',
  },
  {
    id: 'acc-crock-plain',
    category: 'Accessories',
    name: 'Plain Crock Dispenser',
    sub: 'Ceramic · Classic style',
    price: 80,
    deposit: 0,
    badge: null,
    noDeposit: true,
    img: '/p-crock-plain.jpg',
  },
  {
    id: 'acc-crock-blue',
    category: 'Accessories',
    name: 'Ceramic Crock Blue Stripe',
    sub: 'Ceramic · Decorative',
    price: 80,
    deposit: 0,
    badge: null,
    noDeposit: true,
    img: '/p-crock-blue.jpg',
  },
  {
    id: 'acc-pump-manual',
    category: 'Accessories',
    name: 'Manual Hand Pump',
    sub: 'No electricity needed',
    price: 30,
    deposit: 0,
    badge: null,
    noDeposit: true,
    img: '/p-pump-manual.jpg',
  },
  {
    id: 'acc-pump-usb',
    category: 'Accessories',
    name: 'USB Rechargeable Pump',
    sub: 'Button-activated dispenser',
    price: 35,
    deposit: 0,
    badge: null,
    noDeposit: true,
    img: '/p-pump-usb.png',
  },
  {
    id: 'acc-leak-alarm',
    category: 'Accessories',
    name: 'WiFi Leak Detection Alarm',
    sub: 'Phone alerts · Connected',
    price: 29,
    deposit: 0,
    badge: 'Smart',
    noDeposit: true,
    img: '/p-wifi-leak.png',
  },
];

export default function Products() {
  const { items, addItem, updateQty, subtotal, totalDeposit, total, setOpen } = useCart();
  const [category, setCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [cartOpen, setCartOpen] = useState(false);
  const [addedId, setAddedId] = useState<string | null>(null);

  function handleAdd(p: typeof ALL_PRODUCTS[0]) {
    addItem({ id: p.id, name: p.name, price: p.price, deposit: 0 });
    setAddedId(p.id);
    setTimeout(() => setAddedId(null), 1200);
  }

  const filtered = useMemo(() =>
    ALL_PRODUCTS.filter(p =>
      (category === 'All' || p.category === category) &&
      p.name.toLowerCase().includes(search.toLowerCase())
    ), [category, search]);

  const cartCount = items.reduce((s, i) => s + i.qty, 0);

  return (
    <section
      id="products"
      aria-label="Water products shop"
      style={{ padding: '64px 0', background: '#f4f6f9' }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 24px' }}>

        {/* Section label */}
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: T, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>Online Store</p>
          <h2 style={{ fontFamily: 'var(--font-fraunces), serif', fontSize: 'clamp(1.8rem,3vw,2.6rem)', fontWeight: 600, color: P, marginBottom: 0 }}>
            Shop Pure Water
          </h2>
        </div>

        {/* App container */}
        <div className="mds-container">

          {/* ── LEFT PANEL ── */}
          <div className={`mds-left${cartOpen ? ' mds-left-hide' : ''}`}>

            {/* Header */}
            <div className="mds-header">
              <div className="mds-filter-wrap">
                {/* Category dropdown */}
                <select
                  className="mds-cat-select"
                  value={category}
                  onChange={e => setCategory(e.target.value)}
                  aria-label="Filter by category"
                >
                  {CATEGORIES.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
                <input
                  className="mds-search"
                  type="text"
                  placeholder="Search products…"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  aria-label="Search products"
                />
              </div>
              {/* Mobile cart toggle */}
              <button
                className="mds-bag-btn"
                onClick={() => setCartOpen(true)}
                aria-label="Open cart"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/>
                </svg>
                {cartCount > 0 && <span className="mds-bag-count">{cartCount}</span>}
              </button>
            </div>

            {/* Content header */}
            <div className="mds-content-header">
              <h3 className="mds-content-title">
                Discover <span>the best</span>
              </h3>
              <span className="mds-count">{filtered.length} products</span>
            </div>

            {/* Product grid */}
            <div className="mds-grid-scroll">
              {filtered.length === 0 ? (
                <div style={{ padding: '48px', textAlign: 'center', color: '#9E9E9E', fontSize: 14 }}>
                  No products found.
                </div>
              ) : (
                <div className="mds-grid">
                  {filtered.map((p, i) => (
                    <div
                      key={p.id}
                      className="mds-card"
                      style={{ animationDelay: `${i * 0.06}s` }}
                    >
                      <div className="mds-card-img-wrap">
                        <img
                          src={p.img}
                          alt={p.name}
                          className="mds-card-img"
                          loading="lazy"
                        />
                        {p.badge && (
                          <span className="mds-card-badge">{p.badge}</span>
                        )}
                      </div>
                      <div className="mds-card-info">
                        <p className="mds-card-cat">{p.category}</p>
                        <p className="mds-card-name">{p.name}</p>
                        <p className="mds-card-sub">{p.sub}</p>
                        <div className="mds-card-footer">
                          <span className="mds-card-price">
                            ${p.price.toFixed(2)}
                            {!p.noDeposit && <span className="mds-card-dep"> +$10 dep</span>}
                          </span>
                          <button
                            className={`mds-add-btn${addedId === p.id ? ' mds-add-btn--added' : ''}`}
                            aria-label={`Add ${p.name} to cart`}
                            onClick={() => handleAdd(p)}
                          >
                            {addedId === p.id ? (
                              <>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                  <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                Added
                              </>
                            ) : (
                              <>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                  <path d="M7 1v12M1 7h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                                Add
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* ── RIGHT PANEL — Cart ── */}
          <div className={`mds-right${cartOpen ? ' mds-right-open' : ''}`}>
            {/* Mobile close */}
            <button className="mds-right-close" onClick={() => setCartOpen(false)} aria-label="Close cart">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20" viewBox="0 0 24 24">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            <div className="mds-right-content">
              <p className="mds-cart-title">Your Order</p>

              {items.length === 0 ? (
                <div className="mds-cart-empty">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" opacity="0.3">
                    <path d="M5 5H10L11 10M11 10H35L30 26H15M11 10L15 26" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <circle cx="17" cy="32" r="2.5" fill="#fff"/>
                    <circle cx="28" cy="32" r="2.5" fill="#fff"/>
                  </svg>
                  <p>Your cart is empty.</p>
                  <p style={{ fontSize: 12, opacity: 0.4, marginTop: 4 }}>Add a product to get started.</p>
                </div>
              ) : (
                <ul className="mds-cart-list">
                  {items.map(item => (
                    <li key={item.id} className="mds-cart-item">
                      <div className="mds-cart-img-wrap">
                        <img
                          src={ALL_PRODUCTS.find(p => p.id === item.id)?.img ?? ''}
                          alt={item.name}
                          className="mds-cart-img"
                        />
                      </div>
                      <div className="mds-cart-item-content">
                        <div className="mds-cart-item-info">
                          <p className="mds-cart-name">{item.name}</p>
                          <p className="mds-cart-price">
                            ${item.price.toFixed(2)}
                            {item.deposit > 0 && <span className="mds-cart-dep-tag"> +${item.deposit} dep</span>}
                          </p>
                        </div>
                        <div className="mds-qty-wrap">
                          <button
                            className="mds-qty-btn"
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            aria-label="Increase quantity"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 15l-6-6-6 6"/></svg>
                          </button>
                          <span className="mds-qty">{item.qty}</span>
                          <button
                            className="mds-qty-btn"
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            aria-label="Decrease quantity"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {/* Price summary */}
              {items.length > 0 && (
                <div className="mds-summary">
                  <div className="mds-summary-row">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  {totalDeposit > 0 && (
                    <div className="mds-summary-row">
                      <span>Bottle Deposits</span>
                      <span>${totalDeposit.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="mds-summary-row">
                    <span>Delivery</span>
                    <span className="mds-summary-link">See delivery info</span>
                  </div>
                  <div className="mds-summary-total">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => setOpen(true)}
              className="mds-checkout-btn"
              aria-label="Open cart to place order"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              {items.length > 0 ? `Place Order — $${total.toFixed(2)}` : 'View Cart'}
            </button>
          </div>

        </div>
      </div>

      <style>{`
        /* ── Container ── */
        .mds-container {
          background: #ffffff;
          border-radius: 24px;
          display: flex;
          height: 78vh;
          max-height: 820px;
          min-height: 580px;
          overflow: hidden;
          box-shadow: 0 8px 48px rgba(30,56,146,0.10);
        }

        /* ── Left panel ── */
        .mds-left {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
          padding: 0 28px;
        }

        /* ── Header ── */
        .mds-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 24px 0 16px;
          gap: 12px;
          flex-shrink: 0;
        }
        .mds-filter-wrap {
          display: flex;
          align-items: center;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          overflow: hidden;
          flex: 1;
          max-width: 480px;
        }
        .mds-cat-select {
          border: none;
          background: transparent;
          padding: 12px 16px;
          font-size: 13px;
          color: ${P};
          font-weight: 600;
          cursor: pointer;
          outline: none;
          border-right: 1px solid #e2e8f0;
          font-family: var(--font-dm-sans), sans-serif;
          flex-shrink: 0;
          min-width: 130px;
        }
        .mds-search {
          border: none;
          background: transparent;
          padding: 12px 16px;
          font-size: 14px;
          color: #444444;
          outline: none;
          flex: 1;
          font-family: var(--font-dm-sans), sans-serif;
        }
        .mds-search::placeholder { color: #9E9E9E; }

        .mds-bag-btn {
          display: none;
          align-items: center;
          justify-content: center;
          width: 44px; height: 44px;
          border-radius: 12px;
          border: none;
          background: ${P};
          color: #fff;
          cursor: pointer;
          position: relative;
          flex-shrink: 0;
        }
        .mds-bag-count {
          position: absolute;
          top: -4px; right: -4px;
          background: ${O};
          color: ${P};
          font-size: 10px; font-weight: 800;
          width: 18px; height: 18px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
        }

        /* ── Content header ── */
        .mds-content-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          flex-shrink: 0;
        }
        .mds-content-title {
          font-family: var(--font-fraunces), serif;
          font-size: 26px;
          font-weight: 600;
          color: ${P};
          margin: 0;
        }
        .mds-content-title span { font-weight: 300; }
        .mds-count {
          font-size: 13px;
          color: #9E9E9E;
        }

        /* ── Product grid ── */
        .mds-grid-scroll {
          overflow-y: auto;
          flex: 1;
          padding-bottom: 20px;
        }
        .mds-grid-scroll::-webkit-scrollbar { width: 4px; }
        .mds-grid-scroll::-webkit-scrollbar-track { background: transparent; }
        .mds-grid-scroll::-webkit-scrollbar-thumb { background: #e2e8f0; border-radius: 4px; }

        .mds-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 16px;
        }

        .mds-card {
          border-radius: 16px;
          overflow: hidden;
          background: #fff;
          border: 1px solid #f0f0f0;
          box-shadow: 0 2px 12px rgba(0,0,0,0.05);
          cursor: pointer;
          transition: transform 0.18s, box-shadow 0.18s;
          animation: mds-fadein 0.5s both;
          display: flex;
          flex-direction: column;
        }
        .mds-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 28px rgba(30,56,146,0.12);
        }
        @keyframes mds-fadein {
          from { opacity: 0; transform: translateY(10px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        .mds-card-img-wrap {
          position: relative;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          background: #f0f7ff;
        }
        .mds-card-img {
          width: 100%; height: 100%;
          object-fit: contain;
          object-position: center;
          padding: 10px;
          transition: transform 0.35s;
        }
        .mds-card:hover .mds-card-img { transform: scale(1.06); }

        .mds-card-badge {
          position: absolute;
          top: 10px; right: 10px;
          background: ${P};
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.05em;
          padding: 3px 9px;
          border-radius: 20px;
          text-transform: uppercase;
        }

        .mds-card-info {
          padding: 12px 14px 14px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .mds-card-cat {
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: ${T};
          font-weight: 700;
          margin-bottom: 4px;
        }
        .mds-card-name {
          font-family: var(--font-fraunces), serif;
          font-size: 15px;
          font-weight: 600;
          color: ${P};
          margin-bottom: 3px;
          line-height: 1.25;
        }
        .mds-card-sub {
          font-size: 11px;
          color: #9E9E9E;
          margin-bottom: 10px;
          flex: 1;
        }
        .mds-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .mds-card-price {
          font-size: 18px;
          font-weight: 800;
          color: ${P};
          font-family: var(--font-fraunces), serif;
        }
        .mds-card-dep {
          font-size: 10px;
          color: #9E9E9E;
          font-weight: 400;
          font-family: var(--font-dm-sans), sans-serif;
        }
        .mds-add-btn {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 7px 14px;
          border-radius: 8px;
          border: none;
          background: ${P};
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.15s, transform 0.15s;
          font-family: var(--font-dm-sans), sans-serif;
        }
        .mds-add-btn:hover { background: ${T}; transform: scale(1.04); }
        .mds-add-btn--added { background: #059669 !important; transform: scale(1.04); }
        @keyframes mds-added-pop { 0% { transform: scale(1.15); } 100% { transform: scale(1.04); } }
        .mds-add-btn--added { animation: mds-added-pop 0.2s ease-out both; }

        /* ── Right panel ── */
        .mds-right {
          background: ${P};
          width: 340px;
          flex-shrink: 0;
          border-radius: 20px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          position: relative;
        }
        .mds-right-content {
          flex: 1;
          overflow-y: auto;
          padding: 28px 24px 16px;
        }
        .mds-right-content::-webkit-scrollbar { width: 4px; }
        .mds-right-content::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.15); border-radius: 4px; }

        .mds-right-close {
          display: none;
          position: absolute;
          top: 12px; right: 12px;
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.6);
          cursor: pointer;
          padding: 4px;
        }

        .mds-cart-title {
          font-family: var(--font-fraunces), serif;
          font-size: 20px;
          font-weight: 600;
          color: #fff;
          margin-bottom: 20px;
        }

        .mds-cart-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
          color: rgba(255,255,255,0.5);
          font-size: 14px;
          text-align: center;
          gap: 12px;
        }

        .mds-cart-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .mds-cart-item {
          background: rgba(255,255,255,0.07);
          border-radius: 12px;
          display: flex;
          align-items: center;
          overflow: hidden;
          max-height: 80px;
          animation: mds-fadein 0.4s both;
          transition: background 0.15s;
        }
        .mds-cart-item:hover { background: rgba(255,255,255,0.11); }

        .mds-cart-img-wrap {
          flex-basis: 80px;
          flex-shrink: 0;
          height: 80px;
          overflow: hidden;
        }
        .mds-cart-img {
          width: 100%; height: 100%;
          object-fit: contain;
          object-position: center;
          background: #f0f7ff;
          padding: 4px;
        }
        .mds-cart-item-content {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 12px;
        }
        .mds-cart-item-info { flex: 1; min-width: 0; }
        .mds-cart-name {
          font-size: 13px;
          font-weight: 600;
          color: #fff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-bottom: 4px;
        }
        .mds-cart-price {
          font-size: 13px;
          color: rgba(255,255,255,0.7);
        }
        .mds-cart-dep-tag {
          font-size: 10px;
          opacity: 0.6;
        }

        .mds-qty-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2px;
          flex-shrink: 0;
        }
        .mds-qty-btn {
          background: transparent;
          border: none;
          color: rgba(255,255,255,0.7);
          cursor: pointer;
          padding: 2px;
          display: flex;
          align-items: center;
          transition: color 0.15s;
        }
        .mds-qty-btn:hover { color: ${O}; }
        .mds-qty {
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          min-width: 20px;
          text-align: center;
        }

        /* ── Summary ── */
        .mds-summary {
          background: rgba(255,255,255,0.07);
          border-radius: 14px;
          padding: 16px;
          margin-top: 16px;
        }
        .mds-summary-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
          font-size: 13px;
          color: rgba(255,255,255,0.65);
        }
        .mds-summary-link {
          font-size: 11px;
          color: ${O};
          opacity: 0.8;
          margin-left: 6px;
        }
        .mds-summary-total {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 12px;
          border-top: 1px solid rgba(255,255,255,0.15);
          font-size: 18px;
          font-weight: 700;
          color: #fff;
          font-family: var(--font-fraunces), serif;
        }

        /* ── Checkout button ── */
        .mds-checkout-btn {
          border-radius: 0 0 20px 20px;
          border: none;
          padding: 16px;
          width: 100%;
          color: ${P};
          background: ${O};
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 800;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.18s;
          letter-spacing: 0.02em;
          font-family: var(--font-dm-sans), sans-serif;
          flex-shrink: 0;
        }
        .mds-checkout-btn:hover { background: #00c4db; }

        /* ── Responsive ── */
        @media (max-width: 880px) {
          .mds-container { position: relative; }
          .mds-bag-btn { display: flex; }
          .mds-right {
            display: none;
            position: absolute;
            top: 0; right: 0;
            height: 100%; width: calc(100% - 32px);
            z-index: 10;
            border-radius: 16px;
            opacity: 0;
            transition: opacity 0.2s;
          }
          .mds-right.mds-right-open {
            display: flex;
            opacity: 1;
          }
          .mds-right-close { display: block; }
          .mds-left-hide { display: none; }
          .mds-grid { grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); }
        }
        @media (max-width: 520px) {
          .mds-grid { grid-template-columns: repeat(2, 1fr); gap: 10px; }
          .mds-left { padding: 0 12px; }
          .mds-content-title { font-size: 20px; }
        }
      `}</style>
    </section>
  );
}
