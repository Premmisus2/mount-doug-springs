import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { PhoneIcon, DropIcon, BottleIcon, ClockIcon, StoreIcon, IconTile } from '@/components/Icons';

export const metadata: import("next").Metadata = {
  title: 'Emergency Water Supply Victoria BC | 72hr Preparedness | Mount Doug Springs',
  description: 'Emergency water for Victoria BC homes and offices. Ask Mount Doug Springs about emergency water, delivered across Greater Victoria or picked up in store. Call 250 381-2088.',
  keywords: ['emergency water Victoria BC', 'emergency water supply BC', 'earthquake water Victoria', 'flood preparedness water BC', 'emergency drinking water Canada', 'disaster water supply Victoria'],
  alternates: { canonical: 'https://www.mtdougsprings.com/emergency-water' },
  openGraph: { title: 'Emergency Water Supply Victoria BC | Mount Doug Springs', description: 'Be ready before you need it. Purified emergency water for Victoria BC households.', url: 'https://www.mtdougsprings.com/emergency-water', type: 'website' },
};

export default function EmergencyWaterPage() {
  return (
    <main>
      <Nav />

      <style>{`
        @keyframes emg-rise   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes emg-pulse  { 0%,100%{opacity:.4;transform:scale(1)} 50%{opacity:.1;transform:scale(1.4)} }
        @keyframes emg-urgent { 0%,100%{box-shadow:0 0 0 0 rgba(225,29,72,.4)} 70%{box-shadow:0 0 0 12px rgba(225,29,72,0)} }
        @keyframes emg-float  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
        .emg-card { transition:transform .22s, box-shadow .22s; }
        .emg-card:hover { transform:translateY(-4px); box-shadow:0 12px 36px rgba(30,56,146,.12); }
        .emg-option { transition:transform .22s, box-shadow .22s, border-color .22s; }
        .emg-option:hover { transform:translateY(-3px); box-shadow:0 10px 30px rgba(30,56,146,.1); border-color:#29ABE2; }
        .emg-cta-btn { transition:all .2s; }
        .emg-cta-btn:hover { transform:translateY(-2px); box-shadow:0 8px 28px rgba(225,29,72,.4); }
        .emg-check { list-style:none; padding:0; margin:0; }
        .emg-check li { display:flex; align-items:flex-start; gap:10px; padding:10px 0; border-bottom:1px solid #f1f5f9; font-size:14px; color:#5a5a5a; line-height:1.6; }
        .emg-check li:last-child { border-bottom:none; }
        .emg-check li::before { content:''; width:6px; height:11px; border:solid #059669; border-width:0 2.5px 2.5px 0; transform:rotate(45deg); flex-shrink:0; margin:4px 4px 0 3px; }
        .emg-faq { transition:background .2s; }
        .emg-faq:hover { background:#fff7f7; }
      `}</style>

      {/* HERO */}
      <section style={{ position:'relative', overflow:'hidden', paddingTop:140, paddingBottom:110, background:'linear-gradient(160deg,#020f1f 0%,#1a0a0f 40%,#2d0b15 70%,#1E3892 100%)', textAlign:'center' }}>
        <div style={{ position:'absolute', width:500, height:500, top:-100, left:-120, borderRadius:'50%', background:'rgba(225,29,72,.08)', animation:'emg-pulse 6s ease-in-out infinite', pointerEvents:'none' }} />
        <div style={{ position:'absolute', width:300, height:300, bottom:-80, right:-60, borderRadius:'50%', background:'rgba(41,171,226,.08)', animation:'emg-pulse 8s ease-in-out infinite 2s', pointerEvents:'none' }} />
        {[{t:'20%',l:'7%',d:'0s'},{t:'60%',l:'4%',d:'1s'},{t:'22%',r:'6%',d:'.6s'},{t:'65%',r:'10%',d:'1.6s'}].map((p,i)=>(
          <div key={i} style={{ position:'absolute', top:p.t, left:p.l, right:p.r, fontSize:20, animation:`emg-float 3.5s ease-in-out infinite`, animationDelay:p.d, pointerEvents:'none', color:'rgba(252,165,165,.6)' }}><DropIcon size={22} /></div>
        ))}

        <div style={{ position:'relative', zIndex:2, padding:'0 24px' }}>
          <span style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 18px', borderRadius:6, background:'rgba(225,29,72,.15)', border:'1px solid rgba(225,29,72,.4)', fontSize:11, fontWeight:700, color:'#fca5a5', letterSpacing:'.15em', textTransform:'uppercase', marginBottom:24, animation:'emg-rise .6s ease both' }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:'#ef4444', display:'inline-block', animation:'emg-urgent 2s ease-in-out infinite' }} />
            Emergency Preparedness · Victoria BC
          </span>
          <h1 style={{ fontSize:'clamp(2.4rem,5.5vw,3.8rem)', fontWeight:800, lineHeight:1.08, letterSpacing:'-.035em', color:'#fff', marginBottom:20, animation:'emg-rise .7s ease both .1s' }}>
            Be Ready{' '}
            <span style={{ background:'linear-gradient(90deg,#f87171,#fca5a5)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Before</span>
            {' '}You Need It.
          </h1>
          <p style={{ fontSize:17, color:'rgba(255,255,255,.88)', maxWidth:560, margin:'0 auto 44px', lineHeight:1.7, animation:'emg-rise .7s ease both .2s' }}>
            Emergency water is one of the water types we deliver across Greater Victoria. Call us to set some aside for your home or office.
          </p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap', animation:'emg-rise .7s ease both .3s' }}>
            <a href="tel:2503812088" className="emg-cta-btn" style={{ padding:'14px 32px', borderRadius:8, background:'#e11d48', color:'#fff', fontWeight:700, fontSize:15, textDecoration:'none', boxShadow:'0 6px 24px rgba(225,29,72,.4)', display:'inline-flex', alignItems:'center', gap:8 }}>
              <PhoneIcon size={16} /> Call 250 381-2088
            </a>
            <a href="/order" style={{ padding:'14px 32px', borderRadius:8, background:'rgba(255,255,255,.08)', border:'1.5px solid rgba(255,255,255,.25)', color:'#fff', fontWeight:600, fontSize:15, textDecoration:'none' }}>
              Order Online
            </a>
          </div>
          <div style={{ display:'flex', gap:24, justifyContent:'center', flexWrap:'wrap', marginTop:48, animation:'emg-rise .7s ease both .4s' }}>
            {[{val:'72 hours',label:'Be ready for at least'},{val:'4 litres',label:'Per person, per day'},{val:'Yearly',label:'Replace stored water'}].map((s,i)=>(
              <div key={i} style={{ textAlign:'center', padding:'16px 24px', borderRadius:12, background:'rgba(255,255,255,.06)', border:'1px solid rgba(255,255,255,.1)' }}>
                <div style={{ fontSize:22, fontWeight:800, color:'#fca5a5', lineHeight:1 }}>{s.val}</div>
                <div style={{ fontSize:12, color:'rgba(255,255,255,.82)', marginTop:6 }}>{s.label}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize:12, color:'rgba(255,255,255,.78)', marginTop:16, animation:'emg-rise .7s ease both .45s' }}>Guidance from the Government of Canada&apos;s Get Prepared.</p>
        </div>

        <div style={{ position:'absolute', bottom:0, left:0, right:0, height:64, overflow:'hidden', lineHeight:0 }}>
          <svg viewBox="0 0 1440 64" style={{ width:'200%', height:'100%', display:'block' }} preserveAspectRatio="none">
            <path d="M0 32 Q180 0 360 32 Q540 64 720 32 Q900 0 1080 32 Q1260 64 1440 32 L1440 64 L0 64Z" fill="#ffffff">
              <animateTransform attributeName="transform" type="translate" from="0,0" to="-720,0" dur="5s" repeatCount="indefinite"/>
            </path>
          </svg>
        </div>
      </section>

      {/* WHY IT MATTERS */}
      <section style={{ padding:'80px 24px', background:'#fff' }}>
        <div style={{ maxWidth:1000, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:52 }}>
            <span style={{ fontSize:11, fontWeight:700, color:'#e11d48', letterSpacing:'.25em', textTransform:'uppercase', display:'block', marginBottom:12 }}>Know the Risks</span>
            <h2 style={{ fontFamily:'var(--font-fraunces),serif', fontSize:'clamp(1.8rem,3.5vw,2.6rem)', fontWeight:600, color:'#1E3892', letterSpacing:'-.02em', marginBottom:14 }}>
              Why Emergency Water Matters
            </h2>
            <p style={{ color:'#6b7280', fontSize:15, maxWidth:520, margin:'0 auto', lineHeight:1.7 }}>
              Earthquakes, floods and power outages can cut off tap water. The Government of Canada says to be ready to look after yourself for <strong style={{ color:'#1E3892' }}>at least 72 hours</strong>. Water is the place to start.
            </p>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))', gap:20 }}>
            {[
              { icon:<DropIcon size={22} />, title:'Flooding', body:'Floods can affect tap water. Bottled water set aside at home is one less thing to worry about.', accent:'#29ABE2' },
              { icon:<BottleIcon size={22} />, title:'Earthquake', body:'A big earthquake can damage water lines. Keep water stored at home before you need it.', accent:'#e11d48' },
              { icon:<ClockIcon size={22} />, title:'Power Outage', body:'Bottled water is there when the power is not. Plan to be self-sufficient for at least 72 hours.', accent:'#f59e0b' },
              { icon:<StoreIcon size={22} />, title:'Home and Office', body:'We deliver to homes and offices across Greater Victoria. Call us about water for your workplace.', accent:'#29ABE2' },
            ].map((item,i)=>(
              <div key={i} className="emg-card" style={{ background:'#f8fafc', border:'1px solid #e2e8f0', borderRadius:16, padding:'28px 24px' }}>
                <div style={{ marginBottom:14 }}><IconTile>{item.icon}</IconTile></div>
                <h3 style={{ fontSize:16, fontWeight:700, color:'#1E3892', marginBottom:10 }}>{item.title}</h3>
                <p style={{ fontSize:14, color:'#6b7280', lineHeight:1.65 }}>{item.body}</p>
                <div style={{ width:32, height:3, borderRadius:2, background:item.accent, marginTop:16, opacity:.7 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREPAREDNESS CHECKLIST */}
      <section style={{ padding:'80px 24px', background:'#f8fafc' }}>
        <div style={{ maxWidth:900, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:48, alignItems:'start' }} className="emg-checklist-grid">
          <div>
            <span style={{ fontSize:11, fontWeight:700, color:'#e11d48', letterSpacing:'.25em', textTransform:'uppercase', display:'block', marginBottom:14 }}>Preparedness Checklist</span>
            <h2 style={{ fontFamily:'var(--font-fraunces),serif', fontSize:'clamp(1.7rem,3vw,2.4rem)', fontWeight:600, color:'#1E3892', letterSpacing:'-.02em', marginBottom:24, lineHeight:1.15 }}>
              Are You Ready?
            </h2>
            <p style={{ fontSize:15, color:'#5a5a5a', lineHeight:1.8, marginBottom:24 }}>
              The Government of Canada says to be prepared to be self-sufficient for at least 72 hours. Here is what that means for water:
            </p>
            <ul className="emg-check">
              <li>About 4 litres of water per person, per day, for drinking, cooking and sanitation</li>
              <li>Enough for at least 72 hours</li>
              <li>Include small bottles that can be carried easily</li>
              <li>Replace your stored water at least once a year</li>
              <li>A manual hand pump lets you pour from a big bottle with no power. We carry them in store</li>
            </ul>
          </div>
          <div>
            <span style={{ fontSize:11, fontWeight:700, color:'#29ABE2', letterSpacing:'.25em', textTransform:'uppercase', display:'block', marginBottom:14 }}>Calculate Your Needs</span>
            <h2 style={{ fontFamily:'var(--font-fraunces),serif', fontSize:'clamp(1.5rem,2.5vw,2rem)', fontWeight:600, color:'#1E3892', letterSpacing:'-.02em', marginBottom:20, lineHeight:1.2 }}>
              How Much Do You Need?
            </h2>
            <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
              {[
                { people:'1 person', days72:'12 litres', days14:'1 bottle' },
                { people:'2 people', days72:'24 litres', days14:'2 bottles' },
                { people:'4 people', days72:'48 litres', days14:'3 bottles' },
              ].map((row,i)=>(
                <div key={i} style={{ background:'#fff', borderRadius:12, padding:'18px 20px', border:'1.5px solid rgba(41,171,226,.15)', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:10, alignItems:'center' }}>
                  <p style={{ fontSize:14, fontWeight:700, color:'#1E3892', margin:0 }}>{row.people}</p>
                  <div>
                    <p style={{ fontSize:10, color:'#6b7280', fontWeight:600, textTransform:'uppercase', letterSpacing:'.06em', margin:'0 0 3px' }}>72 hours</p>
                    <p style={{ fontSize:13, fontWeight:600, color:'#29ABE2', margin:0 }}>{row.days72}</p>
                  </div>
                  <div>
                    <p style={{ fontSize:10, color:'#6b7280', fontWeight:600, textTransform:'uppercase', letterSpacing:'.06em', margin:'0 0 3px' }}>18.9L bottles</p>
                    <p style={{ fontSize:13, fontWeight:700, color:'#1E3892', margin:0 }}>{row.days14}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href="/order" style={{ display:'inline-flex', alignItems:'center', gap:8, marginTop:24, padding:'13px 24px', borderRadius:8, background:'#e11d48', color:'#fff', fontWeight:700, fontSize:14, textDecoration:'none', boxShadow:'0 4px 16px rgba(225,29,72,.3)' }}>
              Order Your Supply Now
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>
        </div>
      </section>

      {/* SUPPLY OPTIONS */}
      <section style={{ padding:'80px 24px', background:'#fff' }}>
        <div style={{ maxWidth:900, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:52 }}>
            <span style={{ fontSize:11, fontWeight:700, color:'#29ABE2', letterSpacing:'.25em', textTransform:'uppercase', display:'block', marginBottom:12 }}>Your Options</span>
            <h2 style={{ fontFamily:'var(--font-fraunces),serif', fontSize:'clamp(1.8rem,3.5vw,2.6rem)', fontWeight:600, color:'#1E3892', letterSpacing:'-.02em' }}>
              Emergency Supply Options
            </h2>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
            {[
              { title:'18.9L Purified Water', price:'$10.50', body:'Our purified water in the 5 gallon bottle, delivered. At about 4 litres a day, one bottle covers one person for 72 hours.', tag:'Purified', tagColor:'#29ABE2', img:'/p-purified-lg.jpg', href:'/order', cta:'Order Now' },
              { title:'20× Purified Prepay', price:'$200', body:'Prepay 20 bottles of purified water, $10 each. Use them as you go and keep a few set aside.', tag:'Best Value', tagColor:'#059669', img:'/p-bundle-purified.jpg', href:'/order', cta:'Order Now' },
              { title:'Emergency Water', price:'Ask us', body:'Emergency water is one of the water types on our delivery form. Call us and we will tell you what is available.', tag:'Emergency', tagColor:'#7c3aed', img:'/p-emergency.jpg', href:'tel:2503812088', cta:'Call Us' },
            ].map((item,i)=>(
              <div key={i} className="emg-option" style={{ display:'flex', gap:0, background:'#fff', border:'1.5px solid rgba(41,171,226,.15)', borderRadius:16, overflow:'hidden' }}>
                <div style={{ width:120, flexShrink:0, overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center', background:'#f8fafc' }}>
                  <img src={item.img} alt={item.title} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
                </div>
                <div style={{ flex:1, padding:'24px 28px', display:'flex', justifyContent:'space-between', alignItems:'center', gap:20, flexWrap:'wrap' }}>
                  <div style={{ flex:1, minWidth:200 }}>
                    <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10 }}>
                      <h3 style={{ fontSize:16, fontWeight:700, color:'#1E3892', margin:0 }}>{item.title}</h3>
                      <span style={{ fontSize:11, fontWeight:700, color:'#fff', padding:'3px 10px', borderRadius:6, background:item.tagColor }}>{item.tag}</span>
                    </div>
                    <p style={{ fontSize:14, color:'#6b7280', lineHeight:1.65, margin:0 }}>{item.body}</p>
                  </div>
                  <div style={{ textAlign:'right', flexShrink:0 }}>
                    <div style={{ fontSize:22, fontWeight:800, color:'#1E3892', marginBottom:12 }}>{item.price}</div>
                    <a href={item.href} style={{ display:'inline-block', padding:'10px 22px', borderRadius:8, background:'#1E3892', color:'#fff', fontWeight:600, fontSize:13, textDecoration:'none' }}>{item.cta}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding:'80px 24px', background:'#f8fafc' }}>
        <div style={{ maxWidth:800, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:48 }}>
            <span style={{ fontSize:11, fontWeight:700, color:'#e11d48', letterSpacing:'.25em', textTransform:'uppercase', display:'block', marginBottom:12 }}>Common Questions</span>
            <h2 style={{ fontFamily:'var(--font-fraunces),serif', fontSize:'clamp(1.8rem,3.5vw,2.6rem)', fontWeight:600, color:'#1E3892', letterSpacing:'-.02em' }}>
              Emergency Water FAQ
            </h2>
          </div>
          {[
            { q:'How much water do I need?', a:"The Government of Canada says about four litres per person, per day, for at least 72 hours. For a family of four that is 48 litres, or three 18.9L bottles." },
            { q:'How often should I replace stored water?', a:"The Government of Canada says to replace anything in your emergency kit that can expire, water included, at least once a year. Write the date on each bottle. When it's time, bring them in and we'll refill them." },
            { q:'Do you deliver to businesses?', a:"Yes. Mount Doug Springs delivers to homes and offices across Greater Victoria, from Sooke to Sidney and Oak Bay to Westshore. Call us at 250 381-2088 to set it up." },
            { q:"What if I need water fast?", a:"Come to The Ultimate Water Store at 104-1505 Admirals Road. We fill 1, 2, 3, 4 or 5 gallon bottles, any brand, and carry them out to your car. Open Monday to Friday 9:30am to 6pm and Saturday 9:30am to 5pm." },
          ].map((item,i)=>(
            <div key={i} className="emg-faq" style={{ marginBottom:12, padding:'22px 26px', background:'#fff', borderRadius:14, border:'1px solid #e2e8f0' }}>
              <h3 style={{ fontSize:15, fontWeight:700, color:'#1E3892', marginBottom:10, display:'flex', alignItems:'flex-start', gap:10 }}>
                <span style={{ width:24, height:24, borderRadius:'50%', background:'rgba(225,29,72,.1)', color:'#e11d48', fontSize:12, fontWeight:800, display:'inline-flex', alignItems:'center', justifyContent:'center', flexShrink:0, marginTop:1 }}>?</span>
                {item.q}
              </h3>
              <p style={{ fontSize:14, color:'#6b7280', lineHeight:1.75, margin:0, paddingLeft:34 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ position:'relative', overflow:'hidden', padding:'80px 24px', background:'linear-gradient(135deg,#1E3892,#020f1f)', textAlign:'center' }}>
        <div style={{ position:'absolute', width:400, height:400, top:-80, left:-80, borderRadius:'50%', background:'rgba(41,171,226,.1)', animation:'emg-pulse 7s ease-in-out infinite', pointerEvents:'none' }} />
        <div style={{ position:'relative', zIndex:2, maxWidth:620, margin:'0 auto' }}>
          <h2 style={{ fontFamily:'var(--font-fraunces),serif', fontSize:'clamp(1.8rem,3.5vw,2.6rem)', fontWeight:600, color:'#fff', letterSpacing:'-.02em', marginBottom:16 }}>
            Don't Wait Until You Need It.
          </h2>
          <p style={{ fontSize:16, color:'rgba(255,255,255,.88)', maxWidth:480, margin:'0 auto 40px', lineHeight:1.7 }}>
            Stock up now at 104-1505 Admirals Road, or call us to arrange delivery of your emergency supply.
          </p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href="tel:2503812088" style={{ padding:'14px 32px', borderRadius:8, background:'#e11d48', color:'#fff', fontWeight:700, fontSize:15, textDecoration:'none', boxShadow:'0 6px 24px rgba(225,29,72,.4)', display:'inline-flex', alignItems:'center', gap:8 }}>
              <PhoneIcon size={16} /> Talk to Us: 250 381-2088
            </a>
            <a href="/order" style={{ padding:'14px 32px', borderRadius:8, background:'rgba(255,255,255,.08)', border:'1.5px solid rgba(255,255,255,.2)', color:'#fff', fontWeight:600, fontSize:15, textDecoration:'none' }}>
              Order Online
            </a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 700px) {
          .emg-checklist-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
