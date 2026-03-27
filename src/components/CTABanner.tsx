'use client';

export default function CTABanner() {
  return (
    <section style={{ padding: '88px 0', background: 'linear-gradient(150deg, #1a2760 0%, #1e3a5f 60%, #0c4a6e 100%)', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: -100, right: -100, width: 350, height: 350, borderRadius: '50%', background: 'rgba(41,171,226,0.06)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: -60, left: -60, width: 250, height: 250, borderRadius: '50%', background: 'rgba(41,171,226,0.07)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center', padding: '0 32px', position: 'relative', zIndex: 1 }}>
        <p style={{ fontSize: 12, fontWeight: 700, color: 'rgba(186,230,253,0.75)', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 16 }}>Get Started Today</p>
        <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: 20 }}>
          Victoria's Cleanest Water,<br /><span style={{ color: '#29ABE2' }}>Delivered to You</span>
        </h2>
        <p style={{ fontSize: 17, color: 'rgba(186,230,253,0.7)', lineHeight: 1.65, marginBottom: 40, maxWidth: 440, margin: '0 auto 40px' }}>
          Stop by Admirals Walk or call to arrange your first delivery. Fresh water is a few steps away.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
          <a href="tel:2503812088" style={{
            padding: '15px 36px', borderRadius: 100, background: '#29ABE2', color: '#1E3892',
            fontWeight: 700, fontSize: 16, textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(41,171,226,0.35)', transition: 'background 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#1a9fd1'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#29ABE2'}
          >Order Delivery Now</a>
          <a href="https://maps.google.com/?q=104-1505+Admirals+Road+Victoria+BC" target="_blank" rel="noopener noreferrer"
            style={{
              padding: '15px 36px', borderRadius: 100,
              background: 'rgba(255,255,255,0.1)', border: '1.5px solid rgba(255,255,255,0.2)',
              color: '#fff', fontWeight: 700, fontSize: 16, textDecoration: 'none', transition: 'background 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.18)'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.1)'}
          >Visit Our Store</a>
        </div>
        <p style={{ marginTop: 28, fontSize: 14, color: 'rgba(186,230,253,0.45)' }}>
          104-1505 Admirals Road, Admirals Walk, Victoria, BC V9A 2P8
        </p>
      </div>
    </section>
  );
}
