import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { PhoneIcon } from '@/components/Icons';

export const metadata = {
  title: 'Cooler Help | Mount Doug Springs Victoria',
  description: 'Setup guides, care tips and troubleshooting for water coolers, from Mount Doug Springs in Victoria, BC. Buy or lease a pre-tested cooler.',
};

export default function CoolerHelpPage() {
  return (
    <main>
      <Nav />

      {/* Hero */}
      <section className="page-hero" style={{
        paddingTop: 128, paddingBottom: 80, paddingLeft: 24, paddingRight: 24,
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 50%, #f8fafc 100%)',
        textAlign: 'center',
        borderBottom: '1px solid #e2e8f0',
      }}>
        <span style={{
          display: 'inline-block', padding: '6px 16px', borderRadius: 6,
          background: '#eff6ff', color: '#0284c7',
          fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
          marginBottom: 20, border: '1px solid #bfdbfe',
        }}>Support</span>
        <h1 style={{ fontSize: 'clamp(1.9rem, 4vw, 2.9rem)', fontWeight: 800, color: '#1a2760', letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: 20 }}>
          Cooler Help Centre
        </h1>
        <p style={{ fontSize: 17, color: '#4b5563', maxWidth: 520, margin: '0 auto 40px', lineHeight: 1.7 }}>
          Everything you need to set up, maintain, and troubleshoot your water cooler. Can't find what you're looking for? Just call us.
        </p>
        <a href="tel:2503812088" style={{
          display: 'inline-flex', alignItems: 'center', gap: 10,
          padding: '12px 28px', borderRadius: 8,
          background: '#0284c7', color: '#fff',
          fontWeight: 700, fontSize: 15, textDecoration: 'none',
          boxShadow: '0 4px 16px rgba(2,132,199,0.3)',
        }}>
          <PhoneIcon size={16} /> 250 381-2088
        </a>
      </section>

      {/* Cooler types */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, color: '#1a2760', textAlign: 'center', marginBottom: 48, letterSpacing: '-0.025em' }}>
            Coolers and Dispensers We Carry
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24 }}>
            {[
              {
                title: 'Top-Loading Cooler',
                body: 'The classic design. The bottle sits on top, upside down. Choose hot and cold, or hot, room and cold.',
                tip: 'Buy or lease, pre-tested.',
              },
              {
                title: 'Bottom-Loading Cooler',
                body: 'The bottle sits in the cabinet below, out of sight. The same choices: hot and cold, or hot, room and cold.',
                tip: 'Buy or lease, pre-tested.',
              },
              {
                title: 'Porcelain Crock',
                body: 'A simple crock that sits on the counter with the bottle on top. Good for a kitchen or a small office.',
                tip: 'Ask in store for what is in stock.',
              },
              {
                title: 'Pumps and Dispensers',
                body: 'A manual hand pump, a USB electric pump, or a crown and cradle dispenser. Easy ways to pour from a big bottle.',
                tip: 'Pricing and availability: ask in store.',
              },
            ].map((item, i) => (
              <div key={i} style={{
                background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 16,
                padding: '28px 24px',
              }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#0284c7', marginBottom: 16 }} />
                <h3 style={{ fontSize: 16, fontWeight: 700, color: '#1a2760', marginBottom: 10 }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65, marginBottom: 12 }}>{item.body}</p>
                <p style={{ fontSize: 12, fontWeight: 600, color: '#0284c7' }}>{item.tip}</p>
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
              { step: 1, title: 'Choose Your Location', body: 'Place the cooler on a flat, level surface away from direct sunlight and heat. Leave some space around the sides and back so air can flow.' },
              { step: 2, title: 'Prepare the Bottle', body: 'Take the cap off just before loading. Try not to touch the opening or set it down on anything.' },
              { step: 3, title: 'Load the Bottle', body: 'For top-loading: turn the bottle over and place it firmly on the cooler. You\'ll hear a "glug" as water fills the reservoir. For bottom-loading: slide the bottle into the cabinet and connect the probe.' },
              { step: 4, title: 'Power On & Wait', body: 'Plug in your cooler and switch it on. Give the water time to chill and heat up before you use it. Your cooler\'s manual will say how long.' },
              { step: 5, title: 'First Pour', body: 'Run a little water through each tap before your first glass.' },
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
                  <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65, margin: 0 }}>{item.body}</p>
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
            Cooler Care
          </h2>
          <p style={{ textAlign: 'center', color: '#6b7280', fontSize: 15, marginBottom: 44 }}>
            Regular cleaning keeps your cooler clean and working well. Your cooler&apos;s manual has the steps for your model.
          </p>
          <div className="cooler-maintenance-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
            {[
              { freq: 'Each Bottle Change', tasks: ['Wipe the area where the bottle sits with a clean cloth', 'Check the drip tray. Empty and rinse it if needed', 'Check the bottle for cracks or damage'] },
              { freq: 'Every Few Weeks', tasks: ['Wash the drip tray in warm soapy water', 'Wipe down the outside with a damp cloth', 'Check the hot and cold taps are working'] },
              { freq: 'Deep Clean', tasks: ['Clean the inside the way your manual says', 'Check the tubes and seals for wear', 'Replace the filter if your model has one'] },
              { freq: 'Ask Us', tasks: ['Not sure how to clean your model? Give us a call', 'Thinking about a new cooler? We can help you choose', 'New coolers carry a three-year in-store warranty'] },
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
            { q: 'Water has a plastic taste', a: 'This can happen with a brand new cooler. Run some water through each tap before regular use. If the taste stays, the reservoir may need cleaning. Give us a call.' },
            { q: 'Water is not cold or hot enough', a: 'Make sure the cooler is plugged in and the hot and cold switches are on, if your model has them. Leave space around it so air can flow. Still not right? Give us a call.' },
            { q: 'There\'s a gurgling noise', a: 'That\'s normal. It\'s air going into the bottle as water comes out. If it\'s constant and loud, check that the bottle is seated properly.' },
            { q: 'Water is leaking from the bottom', a: 'Check that the bottle is fully seated and not cracked. On a bottom-loading model, make sure the probe is pushed all the way in. If it keeps leaking, give us a call.' },
            { q: 'The cooler is making a loud humming noise', a: 'A gentle hum is normal. That\'s the cooler chilling the water. A loud or uneven noise could mean a fault. Unplug the cooler and give us a call.' },
          ].map((item, i) => (
            <div key={i} style={{
              marginBottom: 16, padding: '20px 24px',
              background: '#fff', borderRadius: 14, border: '1px solid #e2e8f0',
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: '#1a2760', marginBottom: 8 }}>
                <span style={{ color: '#e11d48', marginRight: 8 }}>?</span>{item.q}
              </h3>
              <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.7, margin: 0 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '64px 24px', background: '#1a2760', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', marginBottom: 12 }}>
          Still Need Help?
        </h2>
        <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.88)', maxWidth: 420, margin: '0 auto 28px', lineHeight: 1.65 }}>
          Call or email us and we&apos;ll help you sort it out. We can also help you pick the right cooler for your home or office.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="tel:2503812088" style={{
            padding: '13px 28px', borderRadius: 8, background: '#0284c7', color: '#fff',
            fontWeight: 700, fontSize: 15, textDecoration: 'none',
            display: 'inline-flex', alignItems: 'center', gap: 8,
          }}><PhoneIcon size={16} /> Call 250 381-2088</a>
          <a href="mailto:delivery@mtdougsprings.com" style={{
            padding: '13px 28px', borderRadius: 8,
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
