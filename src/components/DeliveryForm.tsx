'use client';

import { useState } from 'react';

// Demo only: the form never sends. On the live site this request would text Wes straight away.
// Choices mirror the delivery form on mtdougsprings.com.
const CHOICES = {
  water: ['Purified', 'Oxygenated'],
  size: ['5 gallon (18.9L)', '3 gallon (11.3L)'],
  often: ['Every two weeks', 'Monthly', 'When I ask'],
  dispenser: ['I have one', 'Rent one', 'Buy one'],
};

function Choice({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <fieldset className="choice">
      <legend>{label}</legend>
      <div className="choice-row">
        {options.map((o, i) => (
          <label key={o}>
            <input type="radio" name={name} value={o} defaultChecked={i === 0} />
            <span>{o}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export default function DeliveryForm() {
  const [sentTo, setSentTo] = useState<string | null>(null);

  if (sentTo !== null) {
    return (
      <div className="form-card form-done" role="status">
        <p className="eyebrow">Request received</p>
        <h3>Thanks{sentTo ? `, ${sentTo}` : ''}.</h3>
        <p>
          On the live site, this request goes straight to Wes as a text message, so he can get back to you
          right away.
        </p>
        <p className="demo-note">Demo preview: nothing was sent.</p>
        <button type="button" className="btn btn-ghost" onClick={() => setSentTo(null)}>
          Start again
        </button>
      </div>
    );
  }

  return (
    <form
      className="form-card"
      onSubmit={(e) => {
        e.preventDefault();
        const name = String(new FormData(e.currentTarget).get('name') || '').trim().split(' ')[0];
        setSentTo(name);
      }}
    >
      <div className="field-grid">
        <label className="field">
          <span>Name</span>
          <input name="name" autoComplete="name" required />
        </label>
        <label className="field">
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" required />
        </label>
        <label className="field">
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" />
        </label>
        <label className="field">
          <span>Delivery address</span>
          <input name="address" autoComplete="street-address" required />
        </label>
      </div>
      <Choice name="water" label="Water" options={CHOICES.water} />
      <Choice name="size" label="Bottle size" options={CHOICES.size} />
      <Choice name="often" label="How often" options={CHOICES.often} />
      <Choice name="dispenser" label="Dispenser" options={CHOICES.dispenser} />
      <button type="submit" className="btn btn-primary btn-wide">Request delivery</button>
      <p className="demo-note">Demo preview: this form does not send anything.</p>
    </form>
  );
}
