'use client';

export default function Services() {
  return (
    <section id="services" style={{ padding: '88px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 12, fontWeight: 700, color: '#0284c7', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 12 }}>How We Serve You</p>
          <h2 style={{ fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: 800, color: '#1a2760', letterSpacing: '-0.025em', lineHeight: 1.15, marginBottom: 14 }}>
            Pure Water, Your Way
          </h2>
          <p style={{ fontSize: 16, color: '#757575', maxWidth: 440, margin: '0 auto' }}>
            Whether you stop by or want it delivered, we make getting clean water completely effortless.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
          {[
            {
              icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 8.5L11 3L19 8.5V19C19 19.552 18.552 20 18 20H14V14H8V20H4C3.448 20 3 19.552 3 19V8.5Z" stroke="#0284c7" strokeWidth="1.6" strokeLinejoin="round" fill="none" /></svg>,
              title: 'In-Store Filling',
              body: "Swing by our Admirals Walk location any day of the week. Bring your jug — we'll fill it on the spot, no appointment needed.",
              detail: '104-1505 Admirals Road, Victoria',
            },
            {
              icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="1" y="8" width="14" height="10" rx="1.5" stroke="#0284c7" strokeWidth="1.6" /><path d="M15 11H19L21 15V18H15V11Z" stroke="#0284c7" strokeWidth="1.6" strokeLinejoin="round" /><circle cx="6" cy="19" r="2" stroke="#0284c7" strokeWidth="1.5" /><circle cx="18" cy="19" r="2" stroke="#0284c7" strokeWidth="1.5" /></svg>,
              title: 'Home Delivery',
              body: "Set up a delivery schedule and we'll bring fresh water straight to your door. Regular routes throughout Victoria.",
              detail: 'Call 250 381-2088 to arrange',
            },
            {
              icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M16 2L20 6L16 10" stroke="#0284c7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M4 12V10C4 7.791 5.791 6 8 6H20" stroke="#0284c7" strokeWidth="1.6" strokeLinecap="round" /><path d="M6 22L2 18L6 14" stroke="#0284c7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /><path d="M20 12V14C20 16.209 18.209 18 16 18H2" stroke="#0284c7" strokeWidth="1.6" strokeLinecap="round" /></svg>,
              title: 'Jug Exchange',
              body: 'Return your empty jug and walk out with a full one. Our $10 deposit keeps jugs in circulation and waste out of landfills.',
              detail: '$10.00 fully refundable deposit',
            },
            {
              icon: <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="6" width="16" height="12" rx="2" stroke="#0284c7" strokeWidth="1.6" /><path d="M3 10H19" stroke="#0284c7" strokeWidth="1.6" /><path d="M7 14H10" stroke="#0284c7" strokeWidth="1.6" strokeLinecap="round" /></svg>,
              title: 'Pre-Pay Bundle',
              body: 'Pay for 20 fills upfront and save. No need to think about it — just show up and fill. Great for families and offices.',
              detail: '20 fills for $180.00',
            },
          ].map((s, i) => (
            <div key={i} style={{
              background: '#fff', border: '1px solid #e2e8f0', borderRadius: 16,
              padding: '28px 24px', transition: 'all 0.22s ease',
            }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = '#93c5fd';
                el.style.background = '#f0f9ff';
                el.style.transform = 'translateY(-3px)';
                el.style.boxShadow = '0 8px 24px rgba(2,132,199,0.1)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement;
                el.style.borderColor = '#e2e8f0';
                el.style.background = '#fff';
                el.style.transform = 'none';
                el.style.boxShadow = 'none';
              }}
            >
              <div style={{ width: 48, height: 48, borderRadius: 12, background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                {s.icon}
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: '#1a2760', marginBottom: 10 }}>{s.title}</h3>
              <p style={{ fontSize: 14, color: '#757575', lineHeight: 1.65, marginBottom: 14 }}>{s.body}</p>
              <p style={{ fontSize: 13, fontWeight: 600, color: '#0284c7' }}>{s.detail}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48, display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
          <a href="tel:2503812088" style={{
            padding: '14px 32px', borderRadius: 100, background: '#0284c7', color: '#fff',
            fontWeight: 600, fontSize: 15, textDecoration: 'none',
            boxShadow: '0 4px 16px rgba(2,132,199,0.25)', transition: 'background 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#0369a1'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = '#0284c7'}
          >Schedule Delivery — 250 381-2088</a>
          <a href="mailto:delivery@mtdougsprings.com" style={{
            padding: '14px 32px', borderRadius: 100, background: 'transparent',
            color: '#1a2760', fontWeight: 600, fontSize: 15, textDecoration: 'none',
            border: '1.5px solid #bfdbfe', transition: 'background 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = '#eff6ff'}
            onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
          >Send an Email</a>
        </div>
      </div>
    </section>
  );
}
