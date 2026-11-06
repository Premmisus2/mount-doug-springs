import Purity from '@/components/Purity';
import DeliveryForm from '@/components/DeliveryForm';
import {
  ADDRESS_CITY,
  ADDRESS_LINE,
  DELIVERY_PRICES,
  DISPENSERS,
  EMAIL,
  HOURS,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  RIBBON,
  STORE_PRICES,
} from '@/lib/site';

function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <a href="#top" className={`mark${light ? ' mark-light' : ''}`} aria-label="Mount Doug Springs, home">
      <span className="mark-name">
        <b>M</b>ount <b>D</b>oug <b>S</b>prings
      </span>
      <span className="mark-sub">The Ultimate Water Store</span>
    </a>
  );
}

const FAQ = [
  {
    q: 'Do I need my own bottles?',
    a: 'No. We sell new bottles in the store. If you have your own, we fill 1, 2, 3, 4 and 5 gallon bottles of any brand.',
  },
  {
    q: 'Is there a deposit for delivery bottles?',
    a: 'Yes, a refundable deposit per bottle. If you already have bottles in good shape, leave them out for the driver on delivery day.',
  },
  {
    q: 'Where do you deliver?',
    a: 'Across Greater Victoria, from Sooke to Sidney and Oak Bay to Westshore.',
  },
  {
    q: 'How do I pay for delivery?',
    a: 'E-transfer, online banking, EFT or cheque are preferred. We also take Mastercard and Visa.',
  },
  {
    q: 'What is hyper-oxygenated water?',
    a: 'Our purified water with 35 to 40 ppm of oxygen, about four times the usual amount, for a lighter, smoother taste. In the store it is 50¢ more per bottle.',
  },
];

export default function Home() {
  return (
    <main id="top">
      <header className="header">
        <div className="wrap header-inner">
          <Wordmark />
          <nav className="nav" aria-label="Main">
            <a href="#delivery">Delivery</a>
            <a href="#store">The Store</a>
            <a href="#water">Our Water</a>
            <a href="#about">About</a>
          </nav>
          <a className="btn btn-primary btn-sm" href={PHONE_TEL}>
            {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-water" aria-hidden="true">
          <span className="ripple ripple-a" />
          <span className="ripple ripple-b" />
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className={`bubble b${i}`} />
          ))}
          <svg className="waves" viewBox="0 0 2880 120" preserveAspectRatio="none">
            <path className="wave wave-back" d="M0 60 C 240 20 480 20 720 60 S 1200 100 1440 60 S 1920 20 2160 60 S 2640 100 2880 60 V120 H0 Z" />
            <path className="wave wave-front" d="M0 70 C 240 100 480 100 720 70 S 1200 40 1440 70 S 1920 100 2160 70 S 2640 40 2880 70 V120 H0 Z" />
          </svg>
        </div>
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">Greater Victoria, BC</p>
            <h1>Pure water, bottled fresh for Victoria.</h1>
            <p className="hero-lede">
              We deliver to homes and offices from Sooke to Sidney, bottled the evening before your delivery. Or bring
              your bottles to our store on Admirals Road, and we&apos;ll fill them and carry them out to your car.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary" href="#start">Set up delivery</a>
              <a className="btn btn-ghost" href="#store">Visit the store</a>
            </div>
          </div>
          <div className="hero-jug">
            <img src="/bottle.png" alt="An 18.9 litre Mount Doug Springs bottle of purified drinking water" />
          </div>
        </div>
      </section>

      <div className="ribbon" aria-label="About our water">
        <div className="ribbon-track">
          {[...RIBBON, ...RIBBON].map((item, i) => (
            <span key={i} aria-hidden={i >= RIBBON.length}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Two ways to get your water</p>
            <h2>Delivered to your door, or filled while you wait.</h2>
          </div>

          <div className="ways">
            <article id="delivery" className="way">
              <p className="way-kicker">Mount Doug Springs</p>
              <h3>Home and office delivery</h3>
              <p>
                Bottled the evening before delivery, so it arrives fresh. We deliver across Greater Victoria, from
                Sooke to Sidney and Oak Bay to Westshore.
              </p>
              <div className="price-cols">
                {DELIVERY_PRICES.map((group) => (
                  <table key={group.name} className="prices">
                    <caption>{group.name}</caption>
                    <tbody>
                      {group.rows.map((r) => (
                        <tr key={r.size}>
                          <th scope="row">{r.size}</th>
                          <td>
                            {r.price}
                            {r.note ? <small>{r.note}</small> : null}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ))}
              </div>
              <p className="fine">Refundable deposit per bottle. Already have bottles? Leave them out for the driver.</p>
              <a className="btn btn-primary" href="#start">Set up delivery</a>
            </article>

            <article id="store" className="way way-store">
              <img className="way-photo" src="/wes-store.jpg" alt="Wes filling a bottle at The Ultimate Water Store" />
              <div className="way-body">
                <p className="way-kicker">The Ultimate Water Store</p>
                <h3>Walk-in refills</h3>
                <p>
                  Bring any brand of 1 to 5 gallon bottle to {ADDRESS_LINE}. We fill it while you wait and carry it
                  out to your car. No bottle? We have new ones in the store.
                </p>
                <table className="prices">
                  <caption>Purified, per fill</caption>
                  <tbody>
                    {STORE_PRICES.map((r) => (
                      <tr key={r.size}>
                        <th scope="row">{r.size}</th>
                        <td>
                          {r.single}
                          <small>or {r.bulk} prepaid</small>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="fine">Oxygenated water is 50¢ more per bottle.</p>
                <a className="btn btn-ghost" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                  Get directions
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>

      <Purity />

      <section id="start" className="section">
        <div className="wrap start">
          <div className="start-copy">
            <p className="eyebrow">Start delivery</p>
            <h2>Set up your delivery in a minute.</h2>
            <p className="lede">
              Tell us what you need and how often, and we&apos;ll get back to you as soon as we can. Prefer to talk? Call{' '}
              <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>.
            </p>
          </div>
          <DeliveryForm />
        </div>
      </section>

      <section className="section section-mist">
        <div className="wrap">
          <div className="section-head">
            <p className="eyebrow">Need a dispenser?</p>
            <h2>Rent or buy a pre-tested cooler.</h2>
            <p className="lede">
              New coolers come with a three-year in-store warranty. Not sure which suits your home or office? Call us
              and we&apos;ll help you choose.
            </p>
          </div>
          <ul className="dispensers">
            {DISPENSERS.map((d) => (
              <li key={d.name}>
                <span className="dispenser-name">{d.name}</span>
                {d.detail ? <span className="dispenser-detail">{d.detail}</span> : null}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="about" className="section">
        <div className="wrap about">
          <img className="about-photo" src="/wes-founder.jpg" alt="Wes, founder of Mount Doug Springs, in the bottling room" />
          <div className="about-copy">
            <p className="eyebrow">Family run</p>
            <h2>A Canadian owned and operated family business.</h2>
            <p>
              Wes and his team run Mount Doug Springs delivery and The Ultimate Water Store on Admirals Road. Delivery
              water is bottled the evening before it goes out, and walk-in bottles are filled while you wait.
            </p>
            <p>We&apos;re also the only place in Victoria to buy Saltspring&apos;s Finest Spring Water.</p>
            <a className="rating" href={MAPS_URL} target="_blank" rel="noopener noreferrer">
              <span className="rating-score">4.6</span>
              <span className="rating-stars" aria-hidden="true">★</span>
              <span className="rating-text">24 Google reviews · Read them on Google</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section section-mist">
        <div className="wrap faq-wrap">
          <div className="section-head">
            <p className="eyebrow">Questions</p>
            <h2>Good to know.</h2>
          </div>
          <div className="faq">
            {FAQ.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="wrap footer-grid">
          <div>
            <Wordmark light />
            <p className="footer-note">Mount Doug Springs delivery and The Ultimate Water Store. One family business.</p>
          </div>
          <div>
            <h4>Visit</h4>
            <p>
              {ADDRESS_LINE}
              <br />
              {ADDRESS_CITY}
            </p>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer">Get directions</a>
          </div>
          <div>
            <h4>Contact</h4>
            <p>
              <a href={PHONE_TEL}>{PHONE_DISPLAY}</a>
              <br />
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </p>
          </div>
          <div>
            <h4>Hours</h4>
            <ul className="hours">
              {HOURS.map((h) => (
                <li key={h.days}>
                  <span>{h.days}</span>
                  <span>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="wrap footer-base">© 2026 Mount Doug Springs, Victoria, BC</div>
      </footer>

      <div className="mobile-bar">
        <a className="btn btn-ghost" href={PHONE_TEL}>Call</a>
        <a className="btn btn-primary" href="#start">Set up delivery</a>
      </div>
    </main>
  );
}
