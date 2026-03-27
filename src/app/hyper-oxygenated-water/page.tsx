import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata: import("next").Metadata = {
  title: 'Hyper-Oxygenated Water Victoria BC | 40ppm O₂ | Mount Doug Springs',
  description: 'Buy hyper-oxygenated water in Victoria BC. 38-40 ppm dissolved oxygen — up to 40x more than tap water. Supports athletic recovery, mental clarity, and superior hydration. In-store & delivery.',
  keywords: ['oxygenated water Victoria BC', 'hyper oxygenated water Victoria', 'oxygen water BC', 'O2 water Victoria', 'oxygen enriched water Canada', 'oxygenated water athletes Victoria', 'buy oxygenated water Victoria'],
  alternates: { canonical: 'https://www.mtdougsprings.com/hyper-oxygenated-water' },
  openGraph: { title: 'Hyper-Oxygenated Water 40ppm | Victoria BC', description: 'Water with 40x more dissolved oxygen than tap water. Favoured by athletes in Victoria, BC.', url: 'https://www.mtdougsprings.com/hyper-oxygenated-water', type: 'website' },
};

export default function HyperOxygenatedPage() {
  return (
    <main>
      <Nav />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          { "@type": "Question", "name": "Is hyper-oxygenated water safe to drink every day?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Hyper-oxygenated water is simply purified water with additional dissolved oxygen. There are no known adverse effects from daily consumption." } },
          { "@type": "Question", "name": "How long does oxygen stay in oxygenated water?", "acceptedAnswer": { "@type": "Answer", "text": "Once opened, oxygen slowly dissipates. We recommend consuming within 24–48 hours of opening for best effect." } },
          { "@type": "Question", "name": "What is the difference between oxygenated water and sparkling water?", "acceptedAnswer": { "@type": "Answer", "text": "Sparkling water contains dissolved carbon dioxide (CO₂). Hyper-oxygenated water contains dissolved oxygen (O₂) with no carbonation — it looks and tastes like regular water." } },
          { "@type": "Question", "name": "How much dissolved oxygen does Mount Doug Springs oxygenated water contain?", "acceptedAnswer": { "@type": "Answer", "text": "Our hyper-oxygenated water contains 38–40 ppm dissolved oxygen, up to 40 times more than regular tap water." } },
          { "@type": "Question", "name": "Where can I buy hyper-oxygenated water in Victoria BC?", "acceptedAnswer": { "@type": "Answer", "text": "At Mount Doug Springs — 104-1505 Admirals Road, Victoria BC, or order online for home delivery." } }
        ]
      })}} />

      <style>{`
        @keyframes oxy-bubble { 0%{transform:translateY(0) scale(1);opacity:.7} 100%{transform:translateY(-120px) scale(1.3);opacity:0} }
        @keyframes oxy-rise   { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
        @keyframes oxy-pulse  { 0%,100%{opacity:.35;transform:scale(1)} 50%{opacity:.1;transform:scale(1.45)} }
        .oxy-card { transition:transform .22s, box-shadow .22s, border-color .22s; }
        .oxy-card:hover { transform:translateY(-5px); box-shadow:0 14px 42px rgba(5,150,105,.15); border-color:#059669; }
        .oxy-faq  { transition:background .2s; cursor:default; }
        .oxy-faq:hover { background:#f0fdf4; }
        .oxy-stat { transition:transform .22s, box-shadow .22s; }
        .oxy-stat:hover { transform:translateY(-4px); box-shadow:0 10px 32px rgba(5,150,105,.18); }
      `}</style>

      {/* HERO */}
      <section style={{ position:'relative', overflow:'hidden', paddingTop:140, paddingBottom:110, background:'linear-gradient(160deg,#020f1f 0%,#1E3892 40%,#064e3b 100%)', textAlign:'center' }}>
        <div style={{ position:'absolute', width:500, height:500, top:-100, left:-130, borderRadius:'50%', background:'rgba(5,150,105,.1)', animation:'oxy-pulse 7s ease-in-out infinite', pointerEvents:'none' }} />
        <div style={{ position:'absolute', width:300, height:300, bottom:-80, right:-60, borderRadius:'50%', background:'rgba(41,171,226,.08)', animation:'oxy-pulse 5s ease-in-out infinite 2s', pointerEvents:'none' }} />
        {[{s:8,l:'8%',d:'0s'},{s:12,l:'18%',d:'.8s'},{s:6,l:'28%',d:'1.6s'},{s:10,r:'12%',d:'.4s'},{s:7,r:'22%',d:'1.2s'},{s:11,r:'32%',d:'2s'},{s:9,l:'50%',d:'1s'}].map((b,i)=>(
          <div key={i} style={{ position:'absolute', bottom:80, left:b.l, right:b.r, width:b.s, height:b.s, borderRadius:'50%', border:'1.5px solid rgba(52,211,153,.6)', animation:`oxy-bubble 3s ease-in infinite`, animationDelay:b.d, pointerEvents:'none' }} />
        ))}

        <div style={{ position:'relative', zIndex:2, padding:'0 24px' }}>
          <span style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'6px 18px', borderRadius:100, background:'rgba(52,211,153,.15)', border:'1px solid rgba(52,211,153,.35)', fontSize:11, fontWeight:700, color:'#34d399', letterSpacing:'.15em', textTransform:'uppercase', marginBottom:24, animation:'oxy-rise .6s ease both' }}>
            <span style={{ width:6, height:6, borderRadius:'50%', background:'#34d399', display:'inline-block' }} />
            Next-Level Hydration
          </span>
          <h1 style={{ fontSize:'clamp(2.2rem,5vw,3.8rem)', fontWeight:800, lineHeight:1.08, letterSpacing:'-.035em', color:'#fff', marginBottom:20, animation:'oxy-rise .7s ease both .1s' }}>
            Hyper-Oxygenated{' '}
            <span style={{ background:'linear-gradient(90deg,#34d399,#29ABE2)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent' }}>Water</span>
          </h1>
          <p style={{ fontSize:17, color:'rgba(255,255,255,.7)', maxWidth:560, margin:'0 auto 48px', lineHeight:1.7, animation:'oxy-rise .7s ease both .2s' }}>
            Water enriched with dissolved oxygen at 40+ ppm — up to 40× the concentration found in regular tap water. Favoured by athletes, wellness enthusiasts, and anyone who wants to hydrate smarter.
          </p>
          <div style={{ display:'flex', gap:20, justifyContent:'center', flexWrap:'wrap', animation:'oxy-rise .7s ease both .3s' }}>
            {[{value:'40+ ppm',label:'Dissolved O₂'},{value:'40×',label:'vs Tap Water'},{value:'100%',label:'Chemical-Free'},{value:'5×',label:'Faster Recovery'}].map((stat,i)=>(
              <div key={i} className="oxy-stat" style={{ background:'rgba(255,255,255,.07)', border:'1px solid rgba(52,211,153,.2)', borderRadius:16, padding:'20px 24px', backdropFilter:'blur(8px)' }}>
                <div style={{ fontSize:26, fontWeight:800, color:'#34d399', lineHeight:1 }}>{stat.value}</div>
                <div style={{ fontSize:12, color:'rgba(255,255,255,.55)', marginTop:6, fontWeight:500 }}>{stat.label}</div>
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

      {/* WHAT IS IT */}
      <section style={{ padding:'80px 24px', background:'#fff' }}>
        <div style={{ maxWidth:880, margin:'0 auto', display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, alignItems:'center' }} className="oxy-science-grid">
          <div>
            <span style={{ fontSize:11, fontWeight:700, color:'#059669', letterSpacing:'.2em', textTransform:'uppercase', display:'block', marginBottom:14 }}>The Science</span>
            <h2 style={{ fontFamily:'var(--font-fraunces),serif', fontSize:'clamp(1.7rem,3vw,2.4rem)', fontWeight:600, color:'#1E3892', letterSpacing:'-.02em', marginBottom:20, lineHeight:1.15 }}>
              What Is Hyper-Oxygenated Water?
            </h2>
            <p style={{ fontSize:15, color:'#5a5a5a', lineHeight:1.8, marginBottom:18 }}>
              Hyper-oxygenated water is purified water infused with a high concentration of dissolved oxygen molecules under pressure — reaching 40+ ppm, compared to just 1–2 ppm in regular tap water.
            </p>
            <p style={{ fontSize:15, color:'#5a5a5a', lineHeight:1.8, marginBottom:28 }}>
              The oxygen is absorbed through the gastrointestinal tract into the bloodstream. It contains zero additives, preservatives, or chemicals — just ultra-pure water and oxygen.
            </p>
            {/* Price callout */}
            <div style={{ background:'linear-gradient(135deg,rgba(5,150,105,.08),rgba(41,171,226,.06))', border:'1.5px solid rgba(5,150,105,.2)', borderRadius:14, padding:'20px 22px', marginBottom:24 }}>
              <p style={{ fontSize:12, fontWeight:700, color:'#059669', textTransform:'uppercase', letterSpacing:'.1em', marginBottom:8 }}>Pricing</p>
              <div style={{ display:'flex', gap:24, flexWrap:'wrap' }}>
                <div>
                  <p style={{ fontSize:22, fontWeight:800, color:'#1E3892', margin:0, lineHeight:1 }}>$10.50</p>
                  <p style={{ fontSize:12, color:'#757575', margin:'4px 0 0' }}>18.9L jug</p>
                </div>
                <div>
                  <p style={{ fontSize:22, fontWeight:800, color:'#1E3892', margin:0, lineHeight:1 }}>$7.50</p>
                  <p style={{ fontSize:12, color:'#757575', margin:'4px 0 0' }}>11.3L jug</p>
                </div>
              </div>
              <p style={{ fontSize:12, color:'#757575', marginTop:10, marginBottom:0 }}>+ $10 refundable jug deposit for new customers</p>
            </div>
            <a href="/order" style={{ display:'inline-flex', alignItems:'center', gap:8, padding:'13px 26px', borderRadius:8, background:'#059669', color:'#fff', fontWeight:700, fontSize:14, textDecoration:'none' }}>
              Order Now
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
          </div>

          {/* O2 graphic */}
          <div style={{ display:'flex', alignItems:'center', justifyContent:'center' }}>
            <div style={{ position:'relative', width:220, height:220 }}>
              <div style={{ position:'absolute', inset:0, borderRadius:'50%', background:'linear-gradient(135deg,rgba(5,150,105,.2),rgba(41,171,226,.15))', border:'2px solid rgba(52,211,153,.3)', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <div style={{ textAlign:'center' }}>
                  <div style={{ fontSize:48, fontWeight:800, color:'#059669', lineHeight:1 }}>O₂</div>
                  <div style={{ fontSize:13, color:'#757575', marginTop:8, fontWeight:500 }}>40+ ppm</div>
                </div>
              </div>
              {[0,60,120,180,240,300].map((deg,i)=>(
                <div key={i} style={{ position:'absolute', top:'50%', left:'50%', width:10, height:10, borderRadius:'50%', background:'rgba(52,211,153,.6)', transform:`rotate(${deg}deg) translateX(105px) translateY(-50%)`, marginLeft:-5 }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section style={{ padding:'80px 24px', background:'#f8fafc' }}>
        <div style={{ maxWidth:900, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:44 }}>
            <span style={{ fontSize:11, fontWeight:700, color:'#059669', letterSpacing:'.25em', textTransform:'uppercase', display:'block', marginBottom:12 }}>Side by Side</span>
            <h2 style={{ fontFamily:'var(--font-fraunces),serif', fontSize:'clamp(1.8rem,3.5vw,2.6rem)', fontWeight:600, color:'#1E3892', letterSpacing:'-.02em' }}>
              How It Compares
            </h2>
          </div>
          {/* Horizontal scroll wrapper for mobile */}
          <div style={{ overflowX:'auto', WebkitOverflowScrolling:'touch', borderRadius:20, border:'1.5px solid rgba(41,171,226,.15)', boxShadow:'0 4px 20px rgba(30,56,146,.07)' }}>
            <div style={{ minWidth:520 }}>
              {/* Header */}
              <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', background:'#1E3892' }}>
                {['', 'Tap Water', 'Purified', 'Hyper-Oxygenated'].map((h,i)=>(
                  <div key={i} style={{ padding:'16px 20px', fontSize:12, fontWeight:700, color: i === 3 ? '#34d399' : 'rgba(255,255,255,.7)', textAlign:'center', borderLeft: i > 0 ? '1px solid rgba(255,255,255,.1)' : 'none' }}>{h}</div>
                ))}
              </div>
              {[
                { label:'Dissolved Oxygen', tap:'1–2 ppm', pure:'6–8 ppm', oxy:'38–40 ppm', highlight:true },
                { label:'Chlorine & Chemicals', tap:'✓ Present', pure:'✗ Removed', oxy:'✗ Removed', highlight:false },
                { label:'Heavy Metals', tap:'✓ Possible', pure:'✗ Removed', oxy:'✗ Removed', highlight:false },
                { label:'Fluoride', tap:'✓ Present', pure:'✗ Removed', oxy:'✗ Removed', highlight:false },
                { label:'Taste', tap:'Varies', pure:'Clean & crisp', oxy:'Clean & crisp', highlight:false },
                { label:'Hydration Speed', tap:'Standard', pure:'Better', oxy:'Up to 5× faster', highlight:true },
                { label:'Price per litre', tap:'~$0.002', pure:'~$0.50', oxy:'~$0.56', highlight:false },
              ].map((row,i)=>(
                <div key={i} style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', background: row.highlight ? 'rgba(5,150,105,.04)' : (i%2===0?'#fff':'#f8fafc'), borderTop:'1px solid #f1f5f9' }}>
                  <div style={{ padding:'14px 20px', fontSize:13, fontWeight:600, color:'#1E3892' }}>{row.label}</div>
                  <div style={{ padding:'14px 20px', fontSize:13, color:'#9E9E9E', textAlign:'center', borderLeft:'1px solid #f1f5f9' }}>{row.tap}</div>
                  <div style={{ padding:'14px 20px', fontSize:13, color:'#29ABE2', fontWeight:500, textAlign:'center', borderLeft:'1px solid #f1f5f9' }}>{row.pure}</div>
                  <div style={{ padding:'14px 20px', fontSize:13, color:'#059669', fontWeight:700, textAlign:'center', borderLeft:'1px solid #f1f5f9' }}>{row.oxy}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section style={{ padding:'80px 24px', background:'#fff' }}>
        <div style={{ maxWidth:1100, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:52 }}>
            <span style={{ fontSize:11, fontWeight:700, color:'#059669', letterSpacing:'.25em', textTransform:'uppercase', display:'block', marginBottom:12 }}>Why People Choose It</span>
            <h2 style={{ fontFamily:'var(--font-fraunces),serif', fontSize:'clamp(1.8rem,3.5vw,2.6rem)', fontWeight:600, color:'#1E3892', letterSpacing:'-.02em' }}>
              The Benefits
            </h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(270px,1fr))', gap:24 }}>
            {[
              { icon:'🏃', title:'Athletic Performance', body:'Many athletes report reduced recovery time and sustained energy. Increased oxygen availability supports muscles during intense exercise.', accent:'#059669' },
              { icon:'🧠', title:'Mental Clarity', body:'The brain is highly oxygen-dependent. Users report improved focus and reduced mental fatigue after switching to oxygenated water.', accent:'#29ABE2' },
              { icon:'💆', title:'Hangover Relief', body:'Oxygen is used by the liver to metabolize alcohol. Hydrating with oxygen-rich water may help the body recover faster.', accent:'#7c3aed' },
              { icon:'🌿', title:'Altitude Support', body:'Visitors and residents adjusting to altitude changes report that oxygenated water helps ease the transition and reduce fatigue.', accent:'#059669' },
              { icon:'💧', title:'Superior Hydration', body:'Because our base water is already multi-stage purified, you get maximum hydration with no chlorine, heavy metals, or contaminants.', accent:'#29ABE2' },
              { icon:'✅', title:'Zero Additives', body:'No sugar, no electrolytes, no synthetic compounds. Just pure water and dissolved oxygen — the way nature intended, amplified.', accent:'#059669' },
            ].map((item,i)=>(
              <div key={i} className="oxy-card" style={{ background:'#f8fafc', border:`1.5px solid rgba(5,150,105,.15)`, borderRadius:16, padding:'28px 24px' }}>
                <div style={{ fontSize:28, marginBottom:14 }}>{item.icon}</div>
                <h3 style={{ fontSize:16, fontWeight:700, color:'#1E3892', marginBottom:10 }}>{item.title}</h3>
                <p style={{ fontSize:14, color:'#757575', lineHeight:1.65 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding:'80px 24px', background:'#f8fafc' }}>
        <div style={{ maxWidth:800, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:48 }}>
            <span style={{ fontSize:11, fontWeight:700, color:'#059669', letterSpacing:'.25em', textTransform:'uppercase', display:'block', marginBottom:12 }}>Common Questions</span>
            <h2 style={{ fontFamily:'var(--font-fraunces),serif', fontSize:'clamp(1.8rem,3.5vw,2.6rem)', fontWeight:600, color:'#1E3892', letterSpacing:'-.02em' }}>FAQ</h2>
          </div>
          {[
            { q:"Is it safe to drink every day?", a:"Yes. Hyper-oxygenated water is simply purified water with additional dissolved oxygen. Oxygen is a natural component of all water — we've just increased the concentration significantly. No known adverse effects from daily consumption." },
            { q:'How long does the oxygen stay in the water?', a:'Once opened, the oxygen slowly dissipates. We recommend consuming within 24–48 hours of opening for best effect. Our jugs are sealed under pressure to preserve oxygen concentration until ready.' },
            { q:"How is it different from sparkling water?", a:"Sparkling water contains dissolved carbon dioxide (CO₂) which creates bubbles. Our hyper-oxygenated water contains dissolved oxygen (O₂) with no carbonation — it tastes and looks exactly like regular water." },
            { q:"Is the science proven?", a:"Research on oral oxygen absorption is ongoing. While double-blind clinical evidence is still emerging, many athletes and health-conscious individuals report clear benefits. We present it as a wellness option, not a medical treatment." },
          ].map((item,i)=>(
            <div key={i} className="oxy-faq" style={{ marginBottom:16, padding:'24px 28px', background:'#fff', borderRadius:14, border:'1px solid #e2e8f0' }}>
              <h3 style={{ fontSize:15, fontWeight:700, color:'#1E3892', marginBottom:10, display:'flex', alignItems:'center', gap:10 }}>
                <span style={{ width:24, height:24, borderRadius:'50%', background:'rgba(5,150,105,.12)', color:'#059669', fontSize:13, fontWeight:800, display:'inline-flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>?</span>
                {item.q}
              </h3>
              <p style={{ fontSize:14, color:'#757575', lineHeight:1.7, margin:0, paddingLeft:34 }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ position:'relative', overflow:'hidden', padding:'80px 24px', background:'linear-gradient(135deg,#1E3892,#064e3b)', textAlign:'center' }}>
        <div style={{ position:'absolute', width:400, height:400, top:-80, right:-80, borderRadius:'50%', background:'rgba(52,211,153,.08)', animation:'oxy-pulse 7s ease-in-out infinite', pointerEvents:'none' }} />
        <div style={{ position:'relative', zIndex:2, maxWidth:580, margin:'0 auto' }}>
          <h2 style={{ fontFamily:'var(--font-fraunces),serif', fontSize:'clamp(1.8rem,3.5vw,2.6rem)', fontWeight:600, color:'#fff', letterSpacing:'-.02em', marginBottom:16 }}>
            Try It Today
          </h2>
          <p style={{ fontSize:16, color:'rgba(255,255,255,.65)', maxWidth:440, margin:'0 auto 36px', lineHeight:1.7 }}>
            Available in-store at 104-1505 Admirals Road, or order online for home delivery in Victoria.
          </p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <a href="/order" style={{ padding:'14px 32px', borderRadius:8, background:'#059669', color:'#fff', fontWeight:700, fontSize:15, textDecoration:'none', boxShadow:'0 6px 24px rgba(5,150,105,.4)' }}>Order Online — $10.50 / 18.9L</a>
            <a href="tel:2503812088" style={{ padding:'14px 32px', borderRadius:8, background:'rgba(255,255,255,.08)', border:'1.5px solid rgba(255,255,255,.2)', color:'#fff', fontWeight:600, fontSize:15, textDecoration:'none' }}>Call 250 381-2088</a>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @media (max-width: 700px) {
          .oxy-science-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  );
}
