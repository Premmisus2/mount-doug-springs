import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Cooler Help | Mount Doug Springs Victoria',
  description: 'Setup guides, maintenance tips, and troubleshooting for water coolers. Expert support from Mount Doug Springs in Victoria, BC.',
};

export default function CoolerHelpPage() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section style={{
        paddingTop: 128, paddingBottom: 80, paddingLeft: 24, paddingRight: 24,
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f8fafc 100%)',
        textAlign: 'center',
        borderBottom: '1px solid #e2e8f0',
      }}>
        <span style={{
          display: 'inline-block', padding: '6px 16px', borderRadius: 100,
          background: '#eff6ff', color: '#0284c7',
          fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
          marginBottom: 20, border: '1px solid #bfdbfe',
        }}>Support</span>
        <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3.4rem)', fontWeight: 800, color: '#1a2760', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20 }}>
          Cooler Help Centre
        </h1>
        <p style={{ fontSize: 17, color: '#757575', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.7 }}>
          Everything you need to set up, maintain, and troubleshoot your water cooler. Can't find what you're looking for? Just call us.
        </p>
        <a href="tel:2503812088" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '12px 28px', borderRadius: 100,
          background: '#0284c7', color: '#fff',
          fontWeight: 700, fontSize: 15, textDecoration: 'none',
          boxShadow: '0 4px 16px rgba(2,132,199,0.3)',
        }}>
          📞 250 381-2088
        </a>
      </section>

      {/* Cooler types */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#1a2760', textAlign: 'center', marginBottom: 48, letterSpacing: '-0.025em' }}>
            Cooler Types We Support
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              {
                title: 'Top-Load Cooler',
                body: 'The classic design. Jug sits on top, inverted. Gravity feeds water into the reservoir. Simple, reliable, and easy to maintain.',
                tip: 'Works with 18.9L jugs only.',
              },
              {
                title: 'Bottom-Load Cooler',
                body: 'Jug sits inside the cabinet, hidden from view. No heavy lifting — just slide the jug in and connect the probe. Great for tight spaces.',
                tip: 'Compatible with 11.3L and 18.9L jugs.',
              },
              {
                title: 'Countertop Dispenser',
                body: 'Compact and space-efficient. Sits on any counter and connects directly to your jug. Ideal for offices, kitchens, and smaller spaces.',
                tip: 'Works with pump or gravity dispensers.',
              },
              {
                title: 'Floor-Standing Unit',
                body: 'Full-size cooler with hot and cold taps, drip tray, and cabinet. The complete solution for families and offices.',
                tip: 'Available for rent or purchase in-store.',
              },
            ].map((item, i) => (
              <div key={i} style={{
                background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 16,
                padding: '28px 24px',
              }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#0284c7', marginBottom: 16 }} />
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1a2760', marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#757575', lineHeight: 1.65, marginBottom: 12 }}>{item.body}</p>
                <p style={{ fontSize: 12, fontWeight: 600, color: '#0284c7' }}>💡 {item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Setup guide */}
      <section style={{ padding: '72px 24px', background: 'linear-gradient(180deg, #f0f9ff 0%, #f8fafc 100%)' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#1a2760', marginBottom: 48, letterSpacing: '-0.025em', textAlign: 'center' }}>
            Setting Up Your Cooler
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { step: 1, title: 'Choose Your Location', body: 'Place the cooler on a flat, level surface away from direct sunlight and heat sources. Leave at least 4 inches of clearance on the sides and back for ventilation.' },
              { step: 2, title: 'Prepare the Jug', body: 'Remove the tamper-evident seal from the top of the jug just before loading. Do not touch the opening or allow it to contact any surface.' },
              { step: 3, title: 'Load the Jug', body: 'For top-load: invert the jug and place it firmly on the cooler\'s probe. You\'ll hear a "glug" as water fills the reservoir. For bottom-load: slide the jug into the cabinet and connect the probe tube to the cap.' },
              { step: 4, title: 'Power On & Wait', body: 'Plug in your cooler and switch it on. Wait 15–20 minutes for the cold water to chill and the hot water to heat before use. Do not dispense water during this period.' },
              { step: 5, title: 'First Dispense', body: 'Run 2–3 cups of water through each tap before drinking. This flushes any residual particles from the internal lines.' },
            ].map((item) => (
              <div key={item.step} style={{
                display: 'flex', gap: 20, alignItems: 'flex-start',
                background: '#fff', border: '1px solid #e2e8f0', borderRadius: 14,
                padding: '20px 24px',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%', flexShrink: 0,
                  background: '#0284c7', color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16, fontWeight: 800,
                }}>{item.step}</div>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: '#1a2760', marginBottom: 6 }}>{item.title}</h3>
                  <p style={{ fontSize: 14, color: '#757575', lineHeight: 1.65, margin: 0 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section style={{ padding: '72px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#1a2760', marginBottom: 12, letterSpacing: '-0.025em', textAlign: 'center' }}>
            Maintenance Schedule
          </h2>
          <p style={{ textAlign: 'center', color: '#757575', fontSize: 15, marginBottom: 44 }}>
            Regular cleaning keeps your cooler hygienic and extending its lifespan.
          </p>
          <div className="cooler-maintenance-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {[
              { freq: 'Each Jug Change', tasks: ['Wipe the probe/neck area with a clean cloth', 'Check the drip tray — empty and rinse if needed', 'Inspect the jug for cracks or damage'] },
              { freq: 'Monthly', tasks: ['Clean the drip tray with warm soapy water', 'Wipe down exterior with a damp cloth', 'Check hot & cold output temperatures'] },
              { freq: 'Every 6 Months', tasks: ['Full interior sanitization (contact us)', 'Inspect internal tubes and seals', 'Replace filter if your model has one'] },
              { freq: 'Annually', tasks: ['Professional service and deep clean', 'Check compressor and heating element', 'Replace any worn parts'] },
            ].map((col, i) => (
              <div key={i} style={{
                background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 16, padding: '24px 20px',
              }}>
                <p style={{ fontSize: 11, fontWeight: 700, color: '#0284c7', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: 14 }}>{col.freq}</p>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {col.tasks.map((task, j) => (
                    <li key={j} style={{ fontSize: 13, color: '#5a5a5a', lineHeight: 1.6, marginBottom: 8, paddingLeft: 16, position: 'relative' }}>
                      <span style={{ position: 'absolute', left: 0, color: '#0284c7' }}>·</span>
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '72px 24px', background: '#f8fafc' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#1a2760', marginBottom: 40, letterSpacing: '-0.025em', textAlign: 'center' }}>
            Troubleshooting
          </h2>
          {[
            { q: 'Water has a plastic taste', a: 'This usually happens with a brand new cooler. Flush 3–4 full jugs of water through it before regular use. If the taste persists, the internal reservoir may need sanitizing — call us.' },
            { q: 'Water is not cold/hot enough', a: 'Ensure the cooler is plugged in and both switches (hot and cold, if separate) are turned on. Check that there\'s at least 4 inches of clearance for ventilation. If still not working, call us for a service visit.' },
            { q: 'There\'s a gurgling noise', a: 'Completely normal. This is air entering the jug as water leaves. It should settle once the jug is about 1/3 full. If it\'s constant and loud, check that the jug is seated properly.' },
            { q: 'Water is leaking from the bottom', a: 'Check that the jug is fully seated on the probe and the seal is intact. If using a bottom-load model, ensure the probe tube is fully inserted. For persistent leaks, contact us immediately.' },
            { q: 'The cooler is making a loud humming noise', a: 'A gentle hum is normal — it\'s the compressor. A loud or irregular sound may indicate a fault. Unplug the cooler and call us for a service assessment.' },
          ].map((item, i) => (
            <div key={i} style={{
              marginBottom: 16, padding: '20px 24px',
              background: '#fff', borderRadius: 14, border: '1px solid #e2e8f0',
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: '#1a2760', marginBottom: 8 }}>
                <span style={{ color: '#e11d48', marginRight: 8 }}>?</span>{item.q}
              </h3>
              <p style={{ fontSize: 14, color: '#757575', lineHeight: 1.7, margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '64px 24px', background: '#1a2760', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
          Still Need Help?
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(186,230,253,0.8)', maxWidth: 380, margin: '0 auto 28px', lineHeight: 1.65 }}>
          Our team is happy to walk you through any issue over the phone or arrange a service visit.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:2503812088" style={{
            padding: '13px 28px', borderRadius: 100, background: '#0284c7', color: '#fff',
            fontWeight: 700, fontSize: 15, textDecoration: 'none',
          }}>Call 250 381-2088</a>
          <a href="mailto:delivery@mtdougsprings.com" style={{
            padding: '13px 28px', borderRadius: 100,
            background: 'transparent', border: '1.5px solid rgba(255,255,255,0.3)',
            color: '#fff', fontWeight: 600, fontSize: 15, textDecoration: 'none',
          }}>Send an Email</a>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .cooler-maintenance-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .cooler-maintenance-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Footer />
    </main>
  );
}
