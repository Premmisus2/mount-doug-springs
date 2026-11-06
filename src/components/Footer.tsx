'use client';
import { PhoneIcon, PinIcon, MailIcon } from './Icons';

const P = '#1E3892';
const T = '#29ABE2';

const serviceAreas = [
  'Victoria', 'Oak Bay', 'Saanich', 'Esquimalt', 'View Royal',
  'Langford', 'Colwood', 'James Bay', 'Fairfield', 'Fernwood',
  'Cook St Village', 'Quadra Village', 'Gordon Head', 'Cedar Hill',
  'Cordova Bay', 'Broadmead', 'Southlake', 'Happy Valley',
  'Central Saanich', 'North Saanich', 'Sidney', 'Sooke',
];

export default function Footer() {
  const link = (label: string, href: string) => (
    <a
      key={label}
      href={href}
      style={{ display: 'block', marginBottom: 10, fontSize: 14, color: 'rgba(255,255,255,0.88)', textDecoration: 'none', transition: 'color 0.2s' }}
      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = T}
      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.88)'}
    >{label}</a>
  );

  return (
    <footer
      id="contact"
      aria-label="Site footer"
      style={{ background: P, borderTop: `3px solid ${T}` }}
    >
      <div className="footer-inner" style={{ maxWidth: 1280, margin: '0 auto', padding: '64px 32px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1.4fr', gap: 40, marginBottom: 52 }} className="footer-grid">

          {/* Brand */}
          <div>
            <div style={{ marginBottom: 18 }}>
              <img src="/logo.png" alt="Mount Doug Springs" style={{ height: 40, width: 'auto', display: 'block' }} />
            </div>
            <p className="mobile-hide" style={{ fontSize: 14, color: 'rgba(255,255,255,0.88)', lineHeight: 1.7, maxWidth: 220 }}>
              Purified water delivery across Greater Victoria, and The Ultimate Water Store on Admirals Road. Family owned since 2003.
            </p>
          </div>

          {/* Shop */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 18 }}>Shop</p>
            {link('18.9L Purified Water', '/order')}
            {link('11.3L Purified Water', '/order')}
            {link('Hyper-Oxygenated Water', '/hyper-oxygenated-water')}
            {link('Emergency Water', '/emergency-water')}
            {link('20× Pre-Pay Bundle', '/order')}
            {link('Accessories', '/order')}
          </div>

          {/* Services */}
          <div>
            <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 18 }}>Services</p>
            {link('In-Store Pickup', '/the-ultimate-water-store')}
            {link('Home Delivery', '/delivery-info')}
            {link('Office Solutions', '/delivery-info')}
            {link('Jug Exchange Program', '/delivery-info')}
            {link('Cooler Help', '/cooler-help')}
            {link('Emergency Supply', '/emergency-water')}
          </div>

          {/* Info */}
          <div className="mobile-hide">
            <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 18 }}>Info</p>
            {link('Our Purification Process', '/the-ultimate-water-store')}
            {link('About Our Store', '/the-ultimate-water-store')}
            {link('Delivery Areas', '/delivery-info')}
            {link('Oxygenated Water FAQ', '/hyper-oxygenated-water')}
          </div>

          {/* Contact */}
          <div className="footer-contact-full">
            <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 18 }}>Contact</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              <a
                href="https://maps.google.com/?q=104-1505+Admirals+Road+Victoria+BC"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 14, color: 'rgba(255,255,255,0.88)', textDecoration: 'none', lineHeight: 1.6, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = T}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.88)'}
              >
                <span style={{ display: 'inline-flex', gap: 8, alignItems: 'flex-start' }}><PinIcon size={15} /><span>104-1505 Admirals Road<br />Victoria, BC V9A 2P8</span></span>
              </a>
              <a href="tel:2503812088" style={{ fontSize: 14, color: 'rgba(255,255,255,0.88)', textDecoration: 'none', fontWeight: 700, transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = T}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.88)'}
              ><span style={{ display: 'inline-flex', gap: 8, alignItems: 'center' }}><PhoneIcon size={15} />250 381-2088</span></a>
              <a href="mailto:delivery@mtdougsprings.com" style={{ fontSize: 14, color: 'rgba(255,255,255,0.88)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = T}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.88)'}
              ><span style={{ display: 'inline-flex', gap: 8, alignItems: 'center' }}><MailIcon size={15} />delivery@mtdougsprings.com</span></a>
              <div>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.88)', lineHeight: 1.6 }}>Mon to Fri: 9:30am to 6pm<br />Saturday: 9:30am to 5pm<br />Sundays and stat holidays: Closed</p>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="footer-service-areas" style={{ padding: '28px 0', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', marginBottom: 28 }}>
          <p style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.75)', letterSpacing: '0.14em', textTransform: 'uppercase', marginBottom: 14 }}>
            Service Areas: Water Delivery Across Greater Victoria
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 0' }}>
            {serviceAreas.map((area, i) => (
              <span key={area} style={{ fontSize: 13, color: 'rgba(255,255,255,0.88)' }}>
                {area}{i < serviceAreas.length - 1 && <span style={{ margin: '0 10px', color: 'rgba(255,255,255,0.4)' }}>·</span>}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,0.72)' }}>
            © {new Date().getFullYear()} Mount Doug Springs and The Ultimate Water Store. Victoria, BC, Canada.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#" style={{ fontSize: 13, color: 'rgba(255,255,255,0.72)', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.88)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.72)'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1100px) {
          .footer-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 640px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
