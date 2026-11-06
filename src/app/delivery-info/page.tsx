import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { PhoneIcon, PinIcon, MailIcon, ClockIcon, StoreIcon, DropIcon, CarIcon, ExchangeIcon, IconTile } from '@/components/Icons';

export const metadata: import("next").Metadata = {
  title: 'Water Delivery Victoria BC | Delivery & Pickup Info',
  description: 'Home and office water delivery across Greater Victoria BC, from Sooke to Sidney and Oak Bay to Westshore. Every two weeks, monthly or on request. Call 250 381-2088.',
  keywords: ['water delivery Victoria BC', 'water delivery Saanich', 'water delivery Langford', 'water delivery Esquimalt', 'water delivery schedule Victoria', 'water pickup Victoria BC'],
  alternates: { canonical: 'https://www.mtdougsprings.com/delivery-info' },
  openGraph: { title: 'Water Delivery Victoria BC | Mount Doug Springs', description: 'Home and office water delivery across Greater Victoria, from Sooke to Sidney and Oak Bay to Westshore.', url: 'https://www.mtdougsprings.com/delivery-info', type: 'website' },
};

export default function DeliveryInfoPage() {
  return (
    <main>
      <Nav />

      <style>{`
        @keyframes del-float { 0%,100%{transform:translateY(0) rotate(0deg)} 50%{transform:translateY(-12px) rotate(3deg)} }
        @keyframes del-rise  { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes del-pulse { 0%,100%{opacity:.4;transform:scale(1)} 50%{opacity:.1;transform:scale(1.4)} }
        .del-zone { transition:transform .22s, box-shadow .22s, border-color .22s; }
        .del-zone:hover { transform:translateY(-4px); box-shadow:0 12px 36px rgba(41,171,226,.14); border-color:#29ABE2; }
        .del-cta-btn { transition:all .2s; }
        .del-cta-btn:hover { transform:translateY(-2px); box-shadow:0 8px 28px rgba(41,171,226,.4); }
        .del-step:not(:last-child)::after { content:''; display:block; width:2px; height:32px; background:rgba(41,171,226,.25); margin:10px auto 0; }
        .del-hours-row:nth-child(odd) { background:#f8fafc; }
      `}</style>

      {/* HERO */}
      <section style={{ position:'relative', overflow:'hidden', paddingTop:140, paddingBottom:110, background:'linear-gradient(160deg,#020f1f 0%,#1E3892 60%,#0a4a7a 100%)', textAlign:'center' }}>
        <div style={{ position:'absolute', width:500, height:500, top:-100, right:-150, borderRadius:'50%', background:'rgba(41,171,226,.1)', animation:'del-pulse 7s ease-in-out infinite', pointerEvents:'none' }} />
        <div style={{ position:'absolute', width:250, height:250, bottom:-40, left:-80, borderRadius:'50%', background:'rgba(41,171,226,.07)', animation:'del-pulse 5s ease-in-out infinite 1.5s', pointerEvents:'none' }} />
        {[{t:'20%',l:'8%',d:'0s'},{t:'55%',l:'5%',d:'1.2s'},{t:'18%',r:'7%',d:'.6s'},{t:'65%',r:'9%',d:'1.8s'}].map((p,i)=>(
          <div key={i} style={{ position:'absolute', top:p.t, left:p.l, right:p.r, animation:`del-float 3.5s ease-in-out infinite`, animationDelay:p.d, pointerEvents:'none' }}>
            <PinIcon size={24} color="rgba(41,171,226,.6)" />
          </div>
        ))}

        <div style={{ position:'relative', zIndex:2, padding:'0 24px' }}>
          <span style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 18px', borderRadius:4, background:'rgba(41,171,226,.12)', border:'1px solid rgba(41,171,226,.3)', fontSize:11, fontWeight:700, color:'#29ABE2', letterSpacing:'.15em', textTransform:'uppercase', marginBottom:24, animation:'del-rise .6s ease both' }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:'#29ABE2', display:'inline-block' }} />
            Delivery & Pickup · Victoria BC
          </span>
          <h1 style={{ fontSize:'clamp(2.4rem,5.5vw,3.8rem)', fontWeight:800, lineHeight:1.08, letterSpacing:'-.035em', color:'#fff', marginBottom:20, animation:'del-rise .7s ease both .1s' }}>
            We Bring Clean Water{' '}
            <span style={{ background:'linear-gradient(90deg,#29ABE2,#29ABE2)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>
              Right to You.
            </span>
          </h1>
          <p style={{ fontSize:17, color:'rgba(255,255,255,.88)', maxWidth:500, margin:'0 auto 44px', lineHeight:1.7, animation:'del-rise .7s ease both .2s' }}>
            Home and office delivery across Greater Victoria, from Sooke to Sidney and Oak Bay to Westshore. Your water is bottled the evening before it arrives.
          </p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap', animation:'del-rise .7s ease both .3s' }}>
            <a href="tel:2503812088" className="del-cta-btn" style={{ padding:'14px 32px', borderRadius:8, background:'#29ABE2', color:'#fff', fontWeight:700, fontSize:15, textDecoration:'none', boxShadow:'0 6px 24px rgba(41,171,226,.4)', display:'inline-flex', alignItems:'center', gap:8 }}>
              <PhoneIcon size={16} /> Call 250 381-2088
            </a>
            <a href="/order" style={{ padding:'14px 32px', borderRadius:8, background:'rgba(255,255,255,.08)', border:'1.5px solid rgba(255,255,255,.25)', color:'#fff', fontWeight:600, fontSize:15, textDecoration:'none' }}>
              Order Online
            </a>
          </div>
        </div>

        <div style={{ position:'absolute', bottom:0, left:0, right:0, height:64, overflow:'hidden', lineHeight:0 }}>
          <svg viewBox="0 0 1440 64" style={{ width:'200%', height:'100%', display:'block' }} preserveAspectRatio="none">
            <path d="M0 32 Q180 0 360 32 Q540 64 720 32 Q900 0 1080 32 Q1260 64 1440 32 L1440 64 L0 64Z" fill="#f0f7ff">
              <animateTransform attributeName="transform" type="translate" from="0,0" to="-720,0" dur="5s" repeatCount="indefinite"/>
            </path>
          </svg>
        </div>
      </section>

      {/* HOW DELIVERY WORKS */}
      <section style={{ padding:'80px 24px', background:'#f0f7ff' }}>
        <div style={{ maxWidth:860, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:52 }}>
            <span style={{ fontSize:11, fontWeight:700, color:'#29ABE2', letterSpacing:'.25em', textTransform:'uppercase', display:'block', marginBottom:12 }}>Step by Step</span>
            <h2 style={{ fontFamily:'var(--font-fraunces),serif', fontSize:'clamp(1.8rem,3.5vw,2.6rem)', fontWeight:600, color:'#1E3892', letterSpacing:'-.02em', marginBottom:14 }}>
              How Delivery Works
            </h2>
            <p style={{ color:'#757575', fontSize:15, maxWidth:460, margin:'0 auto', lineHeight:1.7 }}>
              Simple from start to finish. Call or email, and we take it from there.
            </p>
          </div>

          <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
            {[
              { num:'1', icon:<PhoneIcon size={20} color="#29ABE2" />, title:'Call or Email Us', body:'Reach us at 250 381-2088 or delivery@mtdougsprings.com and tell us where you are. We deliver across Greater Victoria, from Sooke to Sidney and Oak Bay to Westshore.' },
              { num:'2', icon:<ClockIcon size={20} color="#29ABE2" />, title:'Choose How Often', body:'Every two weeks, monthly, or on request. Each bottle has an initial refundable deposit when you start.' },
              { num:'3', icon:<DropIcon size={20} color="#29ABE2" />, title:'Bottled Fresh the Night Before', body:'Your water is bottled the evening before your delivery day.' },
              { num:'4', icon:<CarIcon size={20} color="#29ABE2" />, title:'Delivered to Your Door', body:'We bring it to your home or office. On delivery day, leave your empty bottles out for the driver.' },
            ].map((step,i)=>(
              <div key={i} className="del-step" style={{ width:'100%', maxWidth:640 }}>
                <div style={{ display:'flex', gap:20, alignItems:'flex-start', background:'#fff', borderRadius:16, padding:'24px 28px', border:'1.5px solid rgba(41,171,226,.12)', boxShadow:'0 2px 12px rgba(30,56,146,.05)' }}>
                  <div style={{ width:48, height:48, borderRadius:'50%', background:'#1E3892', color:'#fff', display:'flex', alignItems:'center', justifyContent:'center', fontSize:18, fontWeight:800, flexShrink:0 }}>
                    {step.num}
                  </div>
                  <div style={{ flex:1 }}>
                    <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:8 }}>
                      <span style={{ display:'inline-flex' }}>{step.icon}</span>
                      <h3 style={{ fontSize:16, fontWeight:700, color:'#1E3892', margin:0 }}>{step.title}</h3>
                    </div>
                    <p style={{ fontSize:14, color:'#757575', lineHeight:1.7, margin:0 }}>{step.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE HIGHLIGHTS + HOURS */}
      <section style={{ padding:'72px 24px', background:'#fff' }}>
        <div style={{ maxWidth:1100, margin:'0 auto', display:'grid', gridTemplateColumns:'2fr 1fr', gap:40, alignItems:'start' }} className="del-info-grid">
          {/* Service highlights */}
          <div>
            <h2 style={{ fontFamily:'var(--font-fraunces),serif', fontSize:'clamp(1.5rem,2.5vw,2rem)', fontWeight:600, color:'#1E3892', letterSpacing:'-.02em', marginBottom:28 }}>
              Service Options
            </h2>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }} className="del-services-grid">
              {[
                { icon:<StoreIcon size={20} />, title:'In-Store Pickup', body:'Bring your bottles in to 104-1505 Admirals Road. We fill any brand from 1 to 5 gallons, and our staff carry it out to your car.' },
                { icon:<CarIcon size={20} />, title:'Home & Office Delivery', body:'We deliver to your home or office across Greater Victoria.' },
                { icon:<ExchangeIcon size={20} />, title:'Bottle Exchange', body:'On delivery day, leave your empty bottles out for the driver.' },
                { icon:<ClockIcon size={20} />, title:'Flexible Scheduling', body:'Choose delivery every two weeks, monthly, or on request.' },
              ].map((item,i)=>(
                <div key={i} style={{ background:'#f8fafc', border:'1.5px solid rgba(41,171,226,.12)', borderRadius:14, padding:'22px 18px' }}>
                  <div style={{ marginBottom:12 }}><IconTile>{item.icon}</IconTile></div>
                  <h3 style={{ fontSize:14, fontWeight:700, color:'#1E3892', marginBottom:8 }}>{item.title}</h3>
                  <p style={{ fontSize:13, color:'#757575', lineHeight:1.65, margin:0 }}>{item.body}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hours + Contact */}
          <div>
            <h2 style={{ fontFamily:'var(--font-fraunces),serif', fontSize:'clamp(1.5rem,2.5vw,2rem)', fontWeight:600, color:'#1E3892', letterSpacing:'-.02em', marginBottom:28 }}>
              Store Hours
            </h2>
            <div style={{ borderRadius:14, overflow:'hidden', border:'1.5px solid rgba(41,171,226,.15)', marginBottom:24 }}>
              <div style={{ background:'#1E3892', padding:'10px 18px' }}>
                <p style={{ fontSize:12, fontWeight:700, color:'#29ABE2', letterSpacing:'.1em', textTransform:'uppercase', margin:0 }}>Open Mon to Sat</p>
              </div>
              {[
                { day:'Monday', hours:'9:30am to 6pm' },
                { day:'Tuesday', hours:'9:30am to 6pm' },
                { day:'Wednesday', hours:'9:30am to 6pm' },
                { day:'Thursday', hours:'9:30am to 6pm' },
                { day:'Friday', hours:'9:30am to 6pm' },
                { day:'Saturday', hours:'9:30am to 5pm' },
                { day:'Sunday & stat holidays', hours:'Closed' },
              ].map((row,i)=>(
                <div key={i} className="del-hours-row" style={{ display:'flex', justifyContent:'space-between', padding:'9px 18px', fontSize:13 }}>
                  <span style={{ color:'#5a5a5a', fontWeight:500 }}>{row.day}</span>
                  <span style={{ color:'#29ABE2', fontWeight:700 }}>{row.hours}</span>
                </div>
              ))}
            </div>
            <div style={{ background:'#f0f7ff', borderRadius:14, padding:'20px 18px', border:'1.5px solid rgba(41,171,226,.15)' }}>
              <p style={{ fontSize:13, fontWeight:700, color:'#1E3892', marginBottom:10, display:'flex', alignItems:'center', gap:8 }}><PinIcon size={15} /> Find Us</p>
              <p style={{ fontSize:13, color:'#757575', lineHeight:1.6, marginBottom:12 }}>104-1505 Admirals Road<br/>Victoria, BC V9A 2P8</p>
              <a href="tel:2503812088" style={{ fontSize:14, fontWeight:700, color:'#29ABE2', textDecoration:'none', display:'flex', alignItems:'center', gap:8, marginBottom:6 }}><PhoneIcon size={15} /> 250 381-2088</a>
              <a href="mailto:delivery@mtdougsprings.com" style={{ fontSize:13, color:'#757575', textDecoration:'none' }}>delivery@mtdougsprings.com</a>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY AREA */}
      <section style={{ padding:'80px 24px', background:'#f8fafc' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:52 }}>
            <span style={{ fontSize:11, fontWeight:700, color:'#29ABE2', letterSpacing:'.25em', textTransform:'uppercase', display:'block', marginBottom:12 }}>Coverage Area</span>
            <h2 style={{ fontFamily:'var(--font-fraunces),serif', fontSize:'clamp(1.8rem,3.5vw,2.6rem)', fontWeight:600, color:'#1E3892', letterSpacing:'-.02em', marginBottom:14 }}>
              Where We Deliver
            </h2>
            <p style={{ color:'#757575', fontSize:15, maxWidth:440, margin:'0 auto' }}>
              Homes and offices across Greater Victoria. Not sure if we reach you? Give us a call.
            </p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:20 }}>
            {[
              { zone:'Victoria', areas:'Homes and offices across the city.', tag:'Home & office', hot:true },
              { zone:'Oak Bay', areas:'East to Oak Bay.', tag:'East', hot:false },
              { zone:'Sidney', areas:'North up the Saanich Peninsula to Sidney.', tag:'North', hot:false },
              { zone:'Westshore', areas:'Out to the Westshore communities.', tag:'West', hot:false },
              { zone:'Sooke', areas:'As far west as Sooke.', tag:'West', hot:false },
              { zone:'Not Sure?', areas:'Call 250 381-2088 or email delivery@mtdougsprings.com and we will let you know.', tag:'Ask us', hot:false },
            ].map((z,i)=>(
              <div key={i} className="del-zone" style={{ background:'#fff', border:`1.5px solid ${z.hot?'#29ABE2':'rgba(41,171,226,.15)'}`, borderRadius:16, padding:'24px 20px', cursor:'default' }}>
                <div style={{ display:'flex', justifyContent:'space-between', alignItems:'flex-start', marginBottom:10 }}>
                  <h3 style={{ fontSize:15, fontWeight:700, color:'#1E3892' }}>{z.zone}</h3>
                  <span style={{ fontSize:11, fontWeight:700, color:z.hot?'#fff':'#29ABE2', padding:'3px 10px', borderRadius:4, background:z.hot?'#29ABE2':'rgba(41,171,226,.1)', whiteSpace:'nowrap', marginLeft:8 }}>{z.tag}</span>
                </div>
                <p style={{ fontSize:13, color:'#757575', lineHeight:1.6 }}>{z.areas}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section style={{ padding:'80px 24px', background:'#fff' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:40 }}>
            <span style={{ fontSize:11, fontWeight:700, color:'#29ABE2', letterSpacing:'.25em', textTransform:'uppercase', display:'block', marginBottom:12 }}>Find Us</span>
            <h2 style={{ fontFamily:'var(--font-fraunces),serif', fontSize:'clamp(1.8rem,3.5vw,2.6rem)', fontWeight:600, color:'#1E3892', letterSpacing:'-.02em' }}>
              104-1505 Admirals Road, Victoria
            </h2>
          </div>
          <div style={{ borderRadius:24, overflow:'hidden', boxShadow:'0 8px 40px rgba(30,56,146,.12)', border:'1.5px solid rgba(41,171,226,.15)' }}>
            <iframe
              src="https://maps.google.com/maps?q=104-1505+Admirals+Road+Victoria+BC+V9A+2P8&output=embed&z=15"
              width="100%"
              height="400"
              style={{ border:0, display:'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mount Doug Springs store location"
            />
          </div>
        </div>
      </section>

      {/* DEPOSIT */}
      <section style={{ position:'relative', overflow:'hidden', padding:'80px 24px', background:'linear-gradient(135deg,#1E3892,#020f1f)', textAlign:'center' }}>
        <div style={{ position:'absolute', width:400, height:400, top:-100, left:-100, borderRadius:'50%', background:'rgba(41,171,226,.1)', animation:'del-pulse 8s ease-in-out infinite', pointerEvents:'none' }} />
        <div style={{ position:'relative', zIndex:2, maxWidth:680, margin:'0 auto' }}>
          <span style={{ fontSize:11, fontWeight:700, color:'#29ABE2', letterSpacing:'.25em', textTransform:'uppercase', display:'block', marginBottom:16 }}>Bottle Deposit</span>
          <h2 style={{ fontFamily:'var(--font-fraunces),serif', fontSize:'clamp(1.8rem,3.5vw,2.6rem)', fontWeight:600, color:'#fff', letterSpacing:'-.02em', marginBottom:20 }}>
            The Bottle Deposit Is Refundable
          </h2>
          <p style={{ fontSize:16, color:'rgba(255,255,255,.88)', lineHeight:1.8, marginBottom:40 }}>
            Each bottle carries an <strong style={{ color:'#29ABE2' }}>initial refundable deposit</strong> when you start delivery. Call or email us for the current amount. We take e-transfer, online banking, EFT, cheque, Mastercard and Visa.
          </p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href="tel:2503812088" className="del-cta-btn" style={{ padding:'14px 32px', borderRadius:8, background:'#29ABE2', color:'#fff', fontWeight:700, fontSize:15, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8 }}>
              <PhoneIcon size={16} /> Call 250 381-2088
            </a>
            <a href="mailto:delivery@mtdougsprings.com" style={{ padding:'14px 32px', borderRadius:8, background:'rgba(255,255,255,.08)', border:'1.5px solid rgba(255,255,255,.2)', color:'#fff', fontWeight:600, fontSize:15, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8 }}>
              <MailIcon size={16} /> Email Us
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 860px) {
          .del-info-grid { grid-template-columns: 1fr !important; }
          .del-services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
