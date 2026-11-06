'use client';

import { useState } from 'react';

// The four stages, in the store's own words (ultimatewaterstore.com):
// "Three-stage charcoal micron filtration, reverse osmosis, ultra-violet light, and ozonation
// renders water with <0.1 ppm total dissolved solids. It is pH balanced to be slightly alkaline
// and aerated for a fresh, clean taste."
const STAGES = [
  {
    n: '01',
    title: 'The Deep Clean',
    body: 'Three stages of charcoal micron filtration clean the water first.',
    top: '54%',
    left: '15%',
  },
  {
    n: '02',
    title: 'Molecular Purity',
    body: 'Reverse osmosis brings total dissolved solids under 0.1 ppm.',
    top: '42%',
    left: '44%',
  },
  {
    n: '03',
    title: 'The Oxygen Boost',
    body: 'For our hyper-oxygenated water: 35 to 40 ppm of oxygen, about four times the usual, for a lighter, smoother taste.',
    top: '36%',
    left: '71%',
  },
  {
    n: '04',
    title: 'The Safety Seal',
    body: 'Ultraviolet light and ozonation, then pH balanced to be slightly alkaline and aerated for a fresh, clean taste.',
    top: '52%',
    left: '88%',
  },
];

export default function Purity() {
  const [active, setActive] = useState(0);

  return (
    <section id="water" className="section section-mist">
      <div className="wrap">
        <div className="section-head">
          <p className="eyebrow">Our water</p>
          <h2>The Purity Journey</h2>
          <p className="lede">Our six-step process, in four stages. Choose a number to see what happens at each one.</p>
        </div>

        <div className="purity">
          <div className="purity-figure">
            <img src="/purification-system.jpg" alt="The purification system, from filtration to the final seal" />
            {STAGES.map((s, i) => (
              <button
                key={s.n}
                type="button"
                className={`purity-dot${i === active ? ' is-active' : ''}`}
                style={{ top: s.top, left: s.left }}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                aria-label={`Stage ${s.n}: ${s.title}`}
              >
                {s.n}
              </button>
            ))}
          </div>

          <ol className="purity-steps">
            {STAGES.map((s, i) => (
              <li key={s.n}>
                <button
                  type="button"
                  className={`purity-step${i === active ? ' is-active' : ''}`}
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  aria-pressed={i === active}
                >
                  <span className="purity-n">{s.n}</span>
                  <span>
                    <span className="purity-title">{s.title}</span>
                    <span className="purity-body">{s.body}</span>
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
