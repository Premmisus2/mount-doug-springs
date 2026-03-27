import Nav from '@/components/Nav';
import OrderShop from '@/components/OrderShop';
import Reviews from '@/components/Reviews';
import Footer from '@/components/Footer';

export const metadata: import("next").Metadata = {
  title: 'Order Purified Water Online | Mount Doug Springs Victoria',
  description: 'Order purified or oxygenated water online. Choose 11.3L or 18.9L jugs, pre-pay bundles, accessories and coolers. Home delivery across Victoria, BC or drive-up at 104-1505 Admirals Road.',
  keywords: ['order water Victoria BC', 'buy purified water online Victoria', 'water delivery order Victoria', 'water jug refill Victoria', '18.9L water order BC'],
  alternates: { canonical: 'https://www.mtdougsprings.com/order' },
  openGraph: { title: 'Order Pure Water | Mount Doug Springs', description: 'Shop purified & oxygenated water. Delivery across Greater Victoria, BC.', url: 'https://www.mtdougsprings.com/order', type: 'website' },
};

export default function OrderPage() {
  return (
    <main>
      <Nav />

      <OrderShop />

      {/* HOW IT WORKS */}
      <section style={{ padding:'88px 24px', background:'#fff' }}>
        <div style={{ maxWidth:960, margin:'0 auto' }}>
          <div style={{ textAlign:'center', marginBottom:60 }}>
            <span style={{ fontSize:11, fontWeight:700, color:'#29ABE2', letterSpacing:'.25em', textTransform:'uppercase', display:'block', marginBottom:12 }}>Simple Process</span>
            <h2 style={{ fontFamily:'var(--font-fraunces),serif', fontSize:'clamp(1.8rem,3.5vw,2.6rem)', fontWeight:600, color:'#1E3892', letterSpacing:'-.02em' }}>
              How to Place Your Order
            </h2>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(200px,1fr))', gap:32 }}>
            {[
              {step:'1',title:'Add to Cart',body:'Select your jug size and quantity. Mix and match purified or oxygenated.'},
              {step:'2',title:'Place Order',body:'Click "Place Order" and we receive your request immediately.'},
              {step:'3',title:'We Confirm',body:'We call or email to confirm your delivery time and address. No surprises.'},
              {step:'4',title:'Fresh Delivery',body:'Bottled the night before. Delivered to your door or loaded into your car.'},
            ].map(s=>(
              <div key={s.step} className="ord-step" style={{ display:'flex', flexDirection:'column', alignItems:'center', textAlign:'center' }}>
                <div className="ord-num" style={{ width:56, height:56, borderRadius:'50%', background:'#1E3892', color:'#fff', fontSize:20, fontWeight:800, display:'flex', alignItems:'center', justifyContent:'center', marginBottom:18, boxShadow:'0 6px 24px rgba(30,56,146,.25)' }}>{s.step}</div>
                <h3 style={{ fontSize:16, fontWeight:700, color:'#1E3892', marginBottom:10 }}>{s.title}</h3>
                <p style={{ fontSize:14, color:'#757575', lineHeight:1.65 }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY AREAS CALLOUT */}
      <section style={{ padding:'40px 24px', background:'#f8fafc', borderTop:'1px solid #e2e8f0', borderBottom:'1px solid #e2e8f0' }}>
        <div style={{ maxWidth:900, margin:'0 auto', display:'flex', flexWrap:'wrap', gap:20, alignItems:'center', justifyContent:'space-between' }}>
          <div>
            <p style={{ fontSize:16, fontWeight:700, color:'#1E3892', marginBottom:6 }}>🚚 Do we deliver to you?</p>
            <p style={{ fontSize:14, color:'#757575', margin:0 }}>We cover Victoria, Saanich, Langford, Esquimalt, Colwood, Sidney & more. Call to confirm your address.</p>
          </div>
          <div style={{ display:'flex', gap:10, flexWrap:'wrap' }}>
            <a href="/delivery-info" style={{ padding:'11px 22px', borderRadius:8, background:'#1E3892', color:'#fff', fontWeight:700, fontSize:14, textDecoration:'none', display:'inline-flex', alignItems:'center', gap:8 }}>
              View Delivery Zones
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M3 7h8M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </a>
            <a href="tel:2503812088" style={{ padding:'11px 22px', borderRadius:8, background:'transparent', border:'1.5px solid rgba(30,56,146,.25)', color:'#1E3892', fontWeight:600, fontSize:14, textDecoration:'none' }}>
              📞 250 381-2088
            </a>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section style={{ padding:'52px 24px', background:'linear-gradient(135deg,#1E3892,#063a78)' }}>
        <div style={{ maxWidth:900, margin:'0 auto', display:'flex', flexWrap:'wrap', gap:40, justifyContent:'center' }}>
          {[{num:'1,100+',label:'Delivery Customers'},{num:'5.0★',label:'Google Rating'},{num:'21+',label:'Years in Victoria'},{num:'$10',label:'Refundable Deposit'}].map((s,i)=>(
            <div key={i} style={{ textAlign:'center' }}>
              <div style={{ fontSize:28, fontWeight:800, color:'#29ABE2', lineHeight:1 }}>{s.num}</div>
              <div style={{ fontSize:13, color:'rgba(255,255,255,.55)', marginTop:6, fontWeight:500 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <Reviews />

      <Footer />
    </main>
  );
}
