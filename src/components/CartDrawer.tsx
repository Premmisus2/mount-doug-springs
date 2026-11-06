'use client';

import { useCart } from '@/context/CartContext';
import { useEffect } from 'react';

const P   = '#1E3892';
const T   = '#29ABE2';
const O   = '#29ABE2';

export default function CartDrawer() {
  const { items, count, subtotal, totalDeposit, total, open, setOpen, removeItem, updateQty, updateDeposit } = useCart();

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const orderBody = [
    ...items.map(i => `${i.qty}x ${i.name} @ $${i.price.toFixed(2)}${i.deposit > 0 ? ` + $${(i.deposit * i.qty).toFixed(2)} deposit` : ''}`),
    ``,
    `Subtotal: $${subtotal.toFixed(2)}`,
    totalDeposit > 0 ? `Bottle Security Credits (refundable): $${totalDeposit.toFixed(2)}` : '',
    `TOTAL: $${total.toFixed(2)}`,
    ``,
    `Please contact me to confirm delivery.`,
  ].filter(Boolean).join('%0A');

  return (
    <>
      {open && (
        <div
          onClick={() => setOpen(false)}
          aria-hidden="true"
          style={{ position: 'fixed', inset: 0, background: 'rgba(30,56,146,0.55)', zIndex: 100, backdropFilter: 'blur(3px)' }}
        />
      )}

      <aside
        aria-label="Shopping cart"
        role="dialog"
        aria-modal="true"
        style={{
          position: 'fixed', top: 0, right: 0, bottom: 0,
          width: 'min(100vw, 440px)',
          background: '#fff',
          zIndex: 101,
          boxShadow: '-12px 0 60px rgba(30,56,146,0.2)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.32s cubic-bezier(0.4,0,0.2,1)',
          display: 'flex', flexDirection: 'column',
        }}>

        {/* Header */}
        <div style={{ padding: '18px 24px', borderBottom: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: P }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M2 2H4L4.4 4M4.4 4H18L16 12H6M4.4 4L6 12" stroke="rgba(255,255,255,0.9)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="8" cy="16" r="1.5" fill="rgba(255,255,255,0.9)"/>
              <circle cx="14.5" cy="16" r="1.5" fill="rgba(255,255,255,0.9)"/>
            </svg>
            <span style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>Your Order</span>
            {count > 0 && (
              <span style={{ padding: '2px 9px', borderRadius: 100, background: O, color: P, fontSize: 12, fontWeight: 800 }}>{count}</span>
            )}
          </div>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close cart"
            style={{ background: 'rgba(255,255,255,0.15)', border: 'none', cursor: 'pointer', color: '#fff', borderRadius: 6, padding: '5px 6px', display: 'flex', alignItems: 'center' }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 3L15 15M15 3L3 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Items */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '16px 20px' }}>
          {items.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '64px 0' }}>
              <div style={{ width: 64, height: 64, borderRadius: '50%', background: '#f0f9ff', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path d="M14 3L7 13.5C7 17.642 10.134 21 14 21C17.866 21 21 17.642 21 13.5L14 3Z" fill="#dbeafe" stroke={T} strokeWidth="1.5"/>
                </svg>
              </div>
              <p style={{ fontSize: 16, fontWeight: 700, color: P, marginBottom: 6 }}>Your cart is empty</p>
              <p style={{ fontSize: 14, color: '#757575', marginBottom: 20 }}>Add some water packages to get started.</p>
              <button onClick={() => setOpen(false)} style={{
                padding: '10px 24px', borderRadius: 8,
                background: O, color: P, fontWeight: 700, fontSize: 14,
                border: 'none', cursor: 'pointer',
              }}>Shop Products</button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {items.map(item => (
                <div key={item.id} style={{
                  borderRadius: 12,
                  border: '1px solid #e2e8f0',
                  background: '#f8fafc',
                  overflow: 'hidden',
                }}>
                  {/* Item row */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px' }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 8,
                      background: 'linear-gradient(135deg, #e0f7f8, #dbeafe)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M9 2L5 8.5C5 11.538 6.791 14 9 14C11.209 14 13 11.538 13 8.5L9 2Z" fill="#dbeafe" stroke={T} strokeWidth="1.2"/>
                      </svg>
                    </div>

                    <div style={{ flex: 1, minWidth: 0 }}>
                      <p style={{ fontSize: 13, fontWeight: 700, color: P, lineHeight: 1.3 }}>{item.name}</p>
                      <p style={{ fontSize: 13, fontWeight: 700, color: T, marginTop: 2 }}>${(item.price * item.qty).toFixed(2)}</p>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <button
                        aria-label="Decrease quantity"
                        onClick={() => updateQty(item.id, item.qty - 1)}
                        style={{ width: 26, height: 26, borderRadius: 6, border: '1px solid #e2e8f0', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 15, color: '#5a5a5a' }}
                      >−</button>
                      <span style={{ fontSize: 14, fontWeight: 700, color: P, minWidth: 18, textAlign: 'center' }}>{item.qty}</span>
                      <button
                        aria-label="Increase quantity"
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        style={{ width: 26, height: 26, borderRadius: 6, border: '1px solid #e2e8f0', background: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 15, color: '#5a5a5a' }}
                      >+</button>
                    </div>

                    <button
                      aria-label={`Remove ${item.name}`}
                      onClick={() => removeItem(item.id)}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#cbd5e1', padding: 4, flexShrink: 0 }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 2L12 12M12 2L2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>

                  {/* Bottles: their site publishes a refundable deposit per bottle but not the amount */}
                  {item.id.startsWith('water-') && (
                    <div style={{ padding: '10px 14px', background: '#f0fdfb', borderTop: '1px solid #e2e8f0' }}>
                      <p style={{ fontSize: 12, color: '#4b5563', lineHeight: 1.5, margin: 0 }}>
                        Have bottles in good shape? Leave them out for the driver. New bottles carry a refundable deposit, confirmed when we call.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer totals + CTA */}
        {items.length > 0 && (
          <div style={{ padding: '18px 20px', borderTop: '1px solid #f1f5f9', background: '#fafafa' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 16 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 14, color: '#757575' }}>Water subtotal</span>
                <span style={{ fontSize: 14, fontWeight: 600, color: P }}>${subtotal.toFixed(2)}</span>
              </div>
              {totalDeposit > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 10px', borderRadius: 8, background: '#fff8f5', border: '1px solid #fed7c0' }}>
                  <span style={{ fontSize: 13, color: '#c04a1a', fontWeight: 600 }}>
                    Bottle deposits
                    <span style={{ fontWeight: 400, color: '#9E9E9E', fontSize: 12, display: 'block' }}>Fully refundable when returned</span>
                  </span>
                  <span style={{ fontSize: 14, fontWeight: 700, color: '#c04a1a' }}>+${totalDeposit.toFixed(2)}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop: 8, borderTop: '1px solid #e2e8f0', marginTop: 4 }}>
                <span style={{ fontSize: 16, fontWeight: 800, color: P }}>Total</span>
                <span style={{ fontSize: 16, fontWeight: 800, color: P }}>${total.toFixed(2)}</span>
              </div>
            </div>

            <a
              href={`mailto:delivery@mtdougsprings.com?subject=Water Order&body=${orderBody}`}
              aria-label="Place order via email"
              style={{
                display: 'block', textAlign: 'center',
                padding: '14px 0', borderRadius: 8,
                background: O, color: P,
                fontWeight: 800, fontSize: 16, textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(255,107,53,0.35)',
                transition: 'background 0.2s, transform 0.15s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = '#00c4db'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = O; (e.currentTarget as HTMLElement).style.transform = 'none'; }}
            >
              Place Order · ${total.toFixed(2)}
            </a>
            <p style={{ fontSize: 12, color: '#9E9E9E', textAlign: 'center', marginTop: 10, lineHeight: 1.5 }}>
              Opens your email app. We'll call to confirm delivery &amp; collect payment.
            </p>
          </div>
        )}
      </aside>
    </>
  );
}
