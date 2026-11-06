'use client';
import { useEffect, useState } from 'react';
import { useCart } from '@/context/CartContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PhoneIcon } from './Icons';

const P   = '#1E3892';   // Deep Pacific Navy
const T   = '#29ABE2';   // Crystal Teal
const O   = '#29ABE2';   // Electric Cyan CTA

const links = [
  { label: 'Home',                     href: '/' },
  { label: 'Order',                    href: '/order' },
  { label: 'Delivery Info',            href: '/delivery-info' },
  { label: 'The Ultimate Water Store', href: '/the-ultimate-water-store' },
  { label: 'Hyper-Oxygenated Water',   href: '/hyper-oxygenated-water' },
  { label: 'Emergency Water',          href: '/emergency-water' },
  { label: 'Cooler Help',              href: '/cooler-help' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, setOpen } = useCart();
  const [bump, setBump] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    if (count === 0) return;
    setBump(true);
    const t = setTimeout(() => setBump(false), 300);
    return () => clearTimeout(t);
  }, [count]);

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: scrolled ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.98)',
        backdropFilter: 'blur(16px)',
        borderBottom: `1px solid ${scrolled ? '#e2e8f0' : '#f1f5f9'}`,
        boxShadow: scrolled ? '0 2px 20px rgba(30,56,146,0.08)' : 'none',
        transition: 'box-shadow 0.3s, border-color 0.3s',
      }}
    >
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 24px', height: 62, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>

        {/* Logo */}
        <Link href="/" aria-label="Mount Doug Springs home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <div style={{ background: P, borderRadius: 8, padding: '7px 16px', display: 'inline-flex', alignItems: 'center' }}>
            <img src="/logo.png" alt="Mount Doug Springs" style={{ height: 34, width: 'auto', display: 'block' }} />
          </div>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 0, flex: 1, justifyContent: 'center' }}>
          {links.map(l => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontSize: 11, fontWeight: active ? 800 : 500,
                  color: active ? T : '#5a5a5a',
                  textDecoration: 'none',
                  padding: '5px 10px', borderRadius: 6,
                  background: active ? `${T}10` : 'transparent',
                  transition: 'all 0.15s',
                  whiteSpace: 'nowrap',
                  borderBottom: active ? `2px solid ${T}` : '2px solid transparent',
                  letterSpacing: active ? '0.01em' : 'normal',
                }}
                onMouseEnter={e => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.color = P;
                    (e.currentTarget as HTMLElement).style.background = '#f8fafc';
                  }
                }}
                onMouseLeave={e => {
                  if (!active) {
                    (e.currentTarget as HTMLElement).style.color = '#5a5a5a';
                    (e.currentTarget as HTMLElement).style.background = 'transparent';
                  }
                }}
              >{l.label}</Link>
            );
          })}
        </div>

        {/* Right side */}
        <div className="hidden md:flex" style={{ alignItems: 'center', gap: 14, flexShrink: 0 }}>
          <a
            href="tel:2503812088"
            style={{
              border: `1.5px solid ${P}30`, borderRadius: 8, padding: '7px 14px',
              display: 'flex', alignItems: 'center', gap: 7,
              fontSize: 12, fontWeight: 700, color: P, textDecoration: 'none', whiteSpace: 'nowrap',
              transition: 'all 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = `${P}10`; (e.currentTarget as HTMLElement).style.borderColor = P; }}
            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.borderColor = `${P}30`; }}
          >
            <PhoneIcon size={14} color={P} />
            250 381-2088
          </a>

          <button
            onClick={() => setOpen(true)}
            aria-label={`Open cart, ${count} item${count !== 1 ? 's' : ''}`}
            style={{
              position: 'relative',
              background: count > 0 ? O : 'transparent',
              border: count > 0 ? 'none' : `1.5px solid ${P}30`,
              borderRadius: 8, padding: '7px 14px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 7,
              transition: 'all 0.2s',
              transform: bump ? 'scale(1.1)' : 'scale(1)',
            }}
            onMouseEnter={e => {
              if (count === 0) {
                (e.currentTarget as HTMLElement).style.background = `${P}10`;
                (e.currentTarget as HTMLElement).style.borderColor = P;
              }
            }}
            onMouseLeave={e => {
              if (count === 0) {
                (e.currentTarget as HTMLElement).style.background = 'transparent';
                (e.currentTarget as HTMLElement).style.borderColor = `${P}30`;
              }
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M1.5 1.5H3.5L3.8 3M3.8 3H14L12 10H5.3M3.8 3L5.3 10" stroke={count > 0 ? '#fff' : P} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="6.5" cy="13" r="1.4" fill={count > 0 ? '#fff' : P}/>
              <circle cx="11.5" cy="13" r="1.4" fill={count > 0 ? '#fff' : P}/>
            </svg>
            <span style={{ fontSize: 12, fontWeight: 700, color: count > 0 ? '#fff' : P }}>
              {count > 0 ? `${count} item${count > 1 ? 's' : ''}` : 'Cart'}
            </span>
            {count > 0 && (
              <span style={{
                position: 'absolute', top: -7, right: -7,
                width: 18, height: 18, borderRadius: '50%',
                background: P, color: '#fff',
                fontSize: 10, fontWeight: 800,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '2px solid #fff',
              }}>{count}</span>
            )}
          </button>
        </div>

        {/* Mobile: cart + hamburger */}
        <div className="flex md:hidden" style={{ alignItems: 'center', gap: 10 }}>
          <button
            onClick={() => setOpen(true)}
            aria-label={`Cart with ${count} items`}
            style={{ background: 'none', border: 'none', cursor: 'pointer', position: 'relative', padding: 4 }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M2 2H5L5.5 5M5.5 5H20L17.5 14H8M5.5 5L8 14" stroke={P} strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="10" cy="18" r="2" fill={P}/>
              <circle cx="16.5" cy="18" r="2" fill={P}/>
            </svg>
            {count > 0 && (
              <span style={{ position: 'absolute', top: 0, right: 0, width: 16, height: 16, borderRadius: '50%', background: O, color: '#fff', fontSize: 10, fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{count}</span>
            )}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: P }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              {menuOpen
                ? <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                : <path d="M3 6H19M3 11H19M3 16H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: '#fff', borderTop: '1px solid #f1f5f9', padding: '8px 20px 20px' }}>
          {links.map(l => {
            const active = pathname === l.href;
            return (
              <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block', padding: '12px 4px', fontSize: 15, fontWeight: active ? 800 : 500,
                  color: active ? T : P, textDecoration: 'none',
                  borderBottom: '1px solid #f8fafc',
                }}>
                {l.label}
              </Link>
            );
          })}
          <a href="tel:2503812088" style={{ display: 'block', marginTop: 16, padding: '12px 0', textAlign: 'center', borderRadius: 8, background: O, color: P, fontWeight: 800, fontSize: 15, textDecoration: 'none' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}><PhoneIcon size={16} /> Call 250 381-2088</span>
          </a>
        </div>
      )}
    </nav>
  );
}
