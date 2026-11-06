import Nav from '@/components/Nav';
import Process from '@/components/Process';
import Footer from '@/components/Footer';
import { PhoneIcon, PinIcon, ClockIcon, StoreIcon, DropIcon, ExchangeIcon, BottleIcon, ArrowIcon } from '@/components/Icons';

export const metadata: import("next").Metadata = {
  title: 'The Ultimate Water Store Victoria BC | 104-1505 Admirals Road',
  description: 'Visit The Ultimate Water Store at 104-1505 Admirals Road, View Royal, Victoria BC. We fill 1 to 5 gallon bottles of any brand and carry them out to your car. Mon to Fri 9:30am to 6pm, Sat 9:30am to 5pm.',
  keywords: ['water store Victoria BC', 'ultimate water store Victoria', 'water shop Victoria', '1505 Admirals Road Victoria', 'water refill store Victoria BC', 'water cooler store Victoria'],
  alternates: { canonical: 'https://www.mtdougsprings.com/the-ultimate-water-store' },
  openGraph: { title: 'The Ultimate Water Store | Victoria BC', description: 'Purified and oxygenated water refills, coolers and accessories at 104-1505 Admirals Road, Victoria.', url: 'https://www.mtdougsprings.com/the-ultimate-water-store', type: 'website' },
};

export default function UltimateWaterStorePage() {
  return (
    <main>
      <Nav />

      <style>{`
        @keyframes uws-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes uws-rise  { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes uws-pulse { 0%,100%{opacity:.4;transform:scale(1)} 50%{opacity:.1;transform:scale(1.4)} }
        .uws-card { transition:transform .22s, box-shadow .22s; position:relative; overflow:hidden; }
        .uws-card:hover { transform:translateY(-5px); box-shadow:0 16px 48px rgba(30,56,146,.14); }
        .uws-card::after { content:''; position:absolute; top:0; left:-100%; width:60%; height:100%; background:linear-gradient(90deg,transparent,rgba(255,255,255,.25),transparent); transition:left .5s; }
        .uws-card:hover::after { left:200%; }
        .uws-info-row { border-bottom:1px solid rgba(255,255,255,.1); }
        .uws-info-row:last-child { border-bottom:none; }
        .uws-cta-btn { transition:all .2s; }
        .uws-cta-btn:hover { transform:translateY(-2px); box-shadow:0 8px 28px rgba(41,171,226,.4); }
        .uws-hours-row:nth-child(odd) { background:#f8fafc; }
      `}</style>

      {/* HERO */}
      <section style={{ position:'relative', overflow:'hidden', paddingTop:140, paddingBottom:110, background:'linear-gradient(160deg,#020f1f 0%,#1E3892 55%,#063a78 100%)', textAlign:'center' }}>
        <div style={{ position:'absolute', width:480, height:480, top:-100, left:-120, borderRadius:'50%', background:'rgba(41,171,226,.12)', animation:'uws-pulse 6s ease-in-out infinite', pointerEvents:'none' }} />
        <div style={{ position:'absolute', width:300, height:300, bottom:-80, right:-60, borderRadius:'50%', background:'rgba(41,171,226,.08)', animation:'uws-pulse 9s ease-in-out infinite 2s', pointerEvents:'none' }} />
        {[{s:10,t:'20%',l:'10%',d:'0s'},{s:7,t:'58%',l:'6%',d:'1s'},{s:13,t:'22%',r:'8%',d:'.5s'},{s:8,t:'68%',r:'12%',d:'1.8s'}].map((p,i)=>(
          <div key={i} style={{ position:'absolute', top:p.t, left:p.l, right:p.r, width:p.s, height:p.s, borderRadius:'50%', background:'rgba(41,171,226,.4)', animation:`uws-float 3.5s ease-in-out infinite`, animationDelay:p.d, pointerEvents:'none' }} />
        ))}

        <div style={{ position:'relative', zIndex:2, padding:'0 24px' }}>
          <span style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 18px', borderRadius:4, background:'rgba(41,171,226,.12)', border:'1px solid rgba(41,171,226,.3)', fontSize:11, fontWeight:700, color:'#29ABE2', letterSpacing:'.15em', textTransform:'uppercase', marginBottom:24, animation:'uws-rise .6s ease both' }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:'#29ABE2', display:'inline-block' }} />
            Victoria, BC · 104-1505 Admirals Road
          </span>
          <h1 style={{ fontSize:'clamp(2.2rem,5vw,3.8rem)', fontWeight:800, lineHeight:1.08, letterSpacing:'-.035em', color:'#fff', marginBottom:20, animation:'uws-rise .7s ease both .1s' }}>
            The{' '}
            <span style={{ background:'linear-gradient(90deg,#29ABE2,#29ABE2)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Ultimate</span>
            {' '}Water Store
          </h1>
          <p style={{ fontSize:17, color:'rgba(255,255,255,.88)', maxWidth:540, margin:'0 auto 44px', lineHeight:1.7, animation:'uws-rise .7s ease both .2s' }}>
            Our walk-in refill store in View Royal. Bring your bottles in, any brand from 1 to 5 gallons, and our staff will fill them and carry them out to your car.
          </p>

          {/* Store info card */}
          <div style={{ maxWidth:480, margin:'0 auto', background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.15)', borderRadius:20, padding:'24px 28px', backdropFilter:'blur(12px)', textAlign:'left', animation:'uws-rise .7s ease both .3s' }}>
            {[
              { label:'Address', value:'104-1505 Admirals Road, View Royal, Victoria, BC', icon:<PinIcon size={18} color="#29ABE2" /> },
              { label:'Phone', value:'250 381-2088', icon:<PhoneIcon size={18} color="#29ABE2" /> },
              { label:'Hours', value:'Mon to Fri 9:30am to 6pm  ·  Sat 9:30am to 5pm  ·  Closed Sundays and stat holidays', icon:<ClockIcon size={18} color="#29ABE2" /> },
            ].map((item,i)=>(
              <div key={i} className="uws-info-row" style={{ display:'flex', alignItems:'flex-start', gap:14, padding:'14px 0' }}>
                <span style={{ display:'inline-flex', flexShrink:0, marginTop:2 }}>{item.icon}</span>
                <div>
                  <p style={{ fontSize:10, fontWeight:700, color:'rgba(255,255,255,.8)', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:3 }}>{item.label}</p>
                  <p style={{ fontSize:14, fontWeight:600, color:'#fff' }}>{item.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ position:'absolute', bottom:0, left:0, right:0, height:64, overflow:'hidden', lineHeight:0 }}>
          <svg viewBox="0 0 1440 64" style={{ width:'200%', height:'100%', display:'block' }} preserveAspectRatio="none">
            <path d="M0 32 Q180 0 360 32 Q540 64 720 32 Q900 0 1080 32 Q1260 64 1440 32 L1440 64 L0 64Z" fill="#ffffff">
              <animateTransform attributeName="transform" type="translate" from="0,0" to="-720,0" dur="5s" repeatCount="indefinite"/>
            </path>
          </svg>
        </div>
      </section>

      {/* STORE PHOTO + INTRO */}
      <section style={{ padding:'80px 24px', background:'#fff' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, alignItems:'center' }} className="uws-photo-grid">
          {/* Photo */}
          <div style={{ position:'relative' }}>
            <div style={{ borderRadius:24, overflow:'hidden', boxShadow:'0 24px 72px rgba(30,56,146,.18)', position:'relative' }}>
              <img
                src="/store-front.jpg"
                alt="The Ultimate Water Store exterior at night, 104-1505 Admirals Road, Victoria BC"
                style={{ width:'100%', height:'auto', display:'block' }}
              />
              {/* Open badge */}
              <div style={{ position:'absolute', top:20, right:20, background:'rgba(30,56,146,.88)', backdropFilter:'blur(10px)', borderRadius:12, padding:'10px 16px', border:'1px solid rgba(41,171,226,.25)' }}>
                <p style={{ fontSize:11, fontWeight:800, color:'#29ABE2', margin:0, letterSpacing:'.1em', textTransform:'uppercase' }}>Open Mon to Sat</p>
              </div>
            </div>
            {/* Unit number badge */}
            <div style={{ position:'absolute', bottom:-18, left:24, background:'#fff', borderRadius:14, padding:'14px 20px', boxShadow:'0 8px 28px rgba(30,56,146,.14)', border:'1.5px solid rgba(41,171,226,.15)' }}>
              <p style={{ fontSize:13, fontWeight:800, color:'#1E3892', margin:0, lineHeight:1.2 }}>Unit 104</p>
              <p style={{ fontSize:12, color:'#6b7280', margin:'2px 0 0' }}>1505 Admirals Road, Victoria</p>
            </div>
          </div>

          {/* Text */}
          <div style={{ paddingTop:20 }}>
            <span style={{ fontSize:11, fontWeight:700, color:'#29ABE2', letterSpacing:'.22em', textTransform:'uppercase', display:'block', marginBottom:14 }}>Walk In · Fill Up · We Carry It Out</span>
            <h2 style={{ fontFamily:'var(--font-fraunces),serif', fontSize:'clamp(1.7rem,3vw,2.4rem)', fontWeight:600, color:'#1E3892', letterSpacing:'-.02em', lineHeight:1.15, marginBottom:20 }}>
              Victoria&apos;s Home for Pure Water, In Person
            </h2>
            <p style={{ fontSize:15, color:'#5a5a5a', lineHeight:1.8, marginBottom:16 }}>
              The Ultimate Water Store is the walk-in refill store of Mount Doug Springs, a Canadian owned and operated family business founded by Wes Treleaven and in business since 2003. Inside you&apos;ll find new bottles, dispensers, personal water bottles and portable dispensers for pets. We&apos;re also the only place in Victoria to get Saltspring&apos;s Finest Spring Water.
            </p>
            <p style={{ fontSize:15, color:'#5a5a5a', lineHeight:1.8, marginBottom:28 }}>
              Bring your bottles in and we fill them, any brand from 1 to 5 gallons. Our staff carry them out to your car, so you never have to carry a heavy bottle out of the store.
            </p>

            {/* Hours table */}
            <div style={{ borderRadius:14, overflow:'hidden', border:'1.5px solid rgba(41,171,226,.15)', marginBottom:28 }}>
              <div style={{ background:'#1E3892', padding:'10px 18px' }}>
                <p style={{ fontSize:12, fontWeight:700, color:'#29ABE2', letterSpacing:'.1em', textTransform:'uppercase', margin:0 }}>Store Hours</p>
              </div>
              {[
                { day:'Monday to Friday', hours:'9:30am to 6pm' },
                { day:'Saturday', hours:'9:30am to 5pm' },
                { day:'Sunday & stat holidays', hours:'Closed' },
              ].map((row,i)=>(
                <div key={i} className="uws-hours-row" style={{ display:'flex', justifyContent:'space-between', padding:'10px 18px', fontSize:13 }}>
                  <span style={{ color:'#1E3892', fontWeight:600 }}>{row.day}</span>
                  <span style={{ color:'#29ABE2', fontWeight:700 }}>{row.hours}</span>
                </div>
              ))}
            </div>

            <div style={{ display:'flex', gap:12, flexWrap:'wrap' }}>
              <a href="https://maps.google.com/?q=104-1505+Admirals+Road+Victoria+BC" target="_blank" rel="noopener noreferrer" className="uws-cta-btn" style={{ padding:'12px 24px', borderRadius:8, background:'#29ABE2', color:'#fff', fontWeight:700, fontSize:14, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8 }}>
                Get Directions <ArrowIcon size={16} />
              </a>
              <a href="tel:2503812088" style={{ padding:'12px 24px', borderRadius:8, background:'transparent', border:'1.5px solid rgba(30,56,146,.25)', color:'#1E3892', fontWeight:700, fontSize:14, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8 }}>
                <PhoneIcon size={16} /> 250 381-2088
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE CARRY */}
      <section style={{ padding:'80px 24px', background:'#f8fafc' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:52 }}>
            <span style={{ fontSize:11, fontWeight:700, color:'#29ABE2', letterSpacing:'.25em', textTransform:'uppercase', display:'block', marginBottom:12 }}>In Store</span>
            <h2 style={{ fontFamily:'var(--font-fraunces),serif', fontSize:'clamp(1.8rem,3.5vw,2.6rem)', fontWeight:600, color:'#1E3892', letterSpacing:'-.02em', marginBottom:14 }}>
              Everything You Need
            </h2>
            <p style={{ color:'#757575', fontSize:16, maxWidth:440, margin:'0 auto', lineHeight:1.65 }}>
              Walk in, fill up, and have a look at our water accessories while you&apos;re here.
            </p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:24 }}>
            {[
              { title:'Purified Water', body:'Made with our 6-step process: three-stage charcoal micron filtration, reverse osmosis, ultraviolet light and ozonation. We fill 1 to 5 gallon bottles of any brand.', accent:'#29ABE2', bg:'rgba(41,171,226,.06)', icon:DropIcon, price:'From $3.50' },
              { title:'Hyper-Oxygenated Water', body:'Holds 35 to 40 ppm of oxygen, with a lighter, smoother taste. In store it is 50 cents more per bottle than purified.', accent:'#059669', bg:'rgba(5,150,105,.06)', icon:DropIcon, price:'+50¢ a bottle' },
              { title:'Water Coolers', body:'Buy or lease a pre-tested cooler: top-loading, bottom-loading or porcelain crock. New coolers carry a three-year in-store warranty.', accent:'#d97706', bg:'rgba(217,119,6,.06)', icon:BottleIcon, price:'Ask in store' },
              { title:'Accessories & Pumps', body:'Manual hand pumps, USB electric pumps, crown and cradle dispensers, personal water bottles and portable dispensers for pets.', accent:'#7c3aed', bg:'rgba(124,58,237,.06)', icon:StoreIcon, price:'Ask in store' },
              { title:'Emergency Water', body:'Emergency water is one of the water types we deliver. Call 250 381-2088 to add it to your order.', accent:'#e11d48', bg:'rgba(225,29,72,.06)', icon:BottleIcon, price:'Ask us' },
              { title:'Buy in Bulk', body:'5 gallon fills are $5.50 each, or 10 for $50, 20 for $90 and 30 for $130 ($4.33 each). 3 and 2 gallon bundles too.', accent:'#29ABE2', bg:'rgba(41,171,226,.06)', icon:ExchangeIcon, price:'30 for $130' },
            ].map((item,i)=>(
              <div key={i} className="uws-card" style={{ background:item.bg, border:`1.5px solid ${item.accent}22`, borderRadius:16, padding:'28px 24px' }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:14 }}>
                  <item.icon size={28} color={item.accent} />
                  <span style={{ fontSize:12, fontWeight:700, color:item.accent, background:`${item.accent}15`, padding:'4px 10px', borderRadius:4 }}>{item.price}</span>
                </div>
                <h3 style={{ fontSize:16, fontWeight:700, color:'#1E3892', marginBottom:10 }}>{item.title}</h3>
                <p style={{ fontSize:14, color:'#757575', lineHeight:1.65 }}>{item.body}</p>
                <div style={{ width:32, height:3, borderRadius:2, background:item.accent, marginTop:18, opacity:.7 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIND US: Map */}
      <section style={{ padding:'80px 24px', background:'#fff' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:44 }}>
            <span style={{ fontSize:11, fontWeight:700, color:'#29ABE2', letterSpacing:'.25em', textTransform:'uppercase', display:'block', marginBottom:12 }}>Find Us</span>
            <h2 style={{ fontFamily:'var(--font-fraunces),serif', fontSize:'clamp(1.8rem,3.5vw,2.6rem)', fontWeight:600, color:'#1E3892', letterSpacing:'-.02em' }}>
              We&apos;re Easy to Find
            </h2>
          </div>
          <div style={{ borderRadius:24, overflow:'hidden', boxShadow:'0 8px 40px rgba(30,56,146,.12)', border:'1.5px solid rgba(41,171,226,.15)' }}>
            <iframe
              src="https://maps.google.com/maps?q=104-1505+Admirals+Road+Victoria+BC+V9A+2P8&output=embed&z=15"
              width="100%"
              height="420"
              style={{ border:0, display:'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mount Doug Springs location map"
            />
          </div>
          <div style={{ display:'flex', gap:12, justifyContent:'center', marginTop:24, flexWrap:'wrap' }}>
            <a href="https://maps.google.com/?q=104-1505+Admirals+Road+Victoria+BC" target="_blank" rel="noopener noreferrer" className="uws-cta-btn" style={{ padding:'13px 28px', borderRadius:8, background:'#29ABE2', color:'#fff', fontWeight:700, fontSize:14, textDecoration:'none' }}>
              Open in Google Maps
            </a>
            <a href="tel:2503812088" style={{ padding:'13px 28px', borderRadius:8, background:'transparent', border:'1.5px solid rgba(30,56,146,.2)', color:'#1E3892', fontWeight:700, fontSize:14, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8 }}>
              <PhoneIcon size={16} /> Call 250 381-2088
            </a>
          </div>
        </div>
      </section>

      {/* THE ADVANTAGE */}
      <Process />

      {/* CTA */}
      <section style={{ position:'relative', overflow:'hidden', padding:'80px 24px', background:'linear-gradient(135deg,#1E3892,#020f1f)', textAlign:'center' }}>
        <div style={{ position:'absolute', width:350, height:350, top:-80, right:-80, borderRadius:'50%', background:'rgba(41,171,226,.1)', animation:'uws-pulse 7s ease-in-out infinite', pointerEvents:'none' }} />
        <div style={{ position:'relative', zIndex:2, maxWidth:620, margin:'0 auto' }}>
          <h2 style={{ fontFamily:'var(--font-fraunces),serif', fontSize:'clamp(1.8rem,3.5vw,2.6rem)', fontWeight:600, color:'#fff', letterSpacing:'-.02em', marginBottom:16 }}>
            Come Visit Us Today
          </h2>
          <p style={{ fontSize:16, color:'rgba(255,255,255,.88)', lineHeight:1.8, marginBottom:40 }}>
            104-1505 Admirals Road, View Royal, Victoria, BC. Bring your bottles in and our friendly staff will fill them and carry them out to your car.
          </p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href="tel:2503812088" className="uws-cta-btn" style={{ padding:'14px 32px', borderRadius:8, background:'#29ABE2', color:'#fff', fontWeight:700, fontSize:15, textDecoration:'none', boxShadow:'0 6px 24px rgba(41,171,226,.4)', display:'inline-flex', alignItems:'center', gap:8 }}>
              <PhoneIcon size={16} /> Call 250 381-2088
            </a>
            <a href="/order" style={{ padding:'14px 32px', borderRadius:8, background:'rgba(255,255,255,.08)', border:'1.5px solid rgba(255,255,255,.2)', color:'#fff', fontWeight:600, fontSize:15, textDecoration:'none' }}>
              Order Online
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 860px) {
          .uws-photo-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </main>
  );
}
