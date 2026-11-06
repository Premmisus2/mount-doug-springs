// Every fact on the page lives here, each one taken from the business's own sites
// (mtdougsprings.com and ultimatewaterstore.com, read 2026-11-06) or its Google listing.
// Nothing in this file is invented: if a fact is not on one of those pages, it is left off.

export const PHONE_DISPLAY = '(250) 381-2088';
export const PHONE_TEL = 'tel:+12503812088';
export const EMAIL = 'delivery@mtdougsprings.com';
export const ADDRESS_LINE = '104-1505 Admirals Road';
export const ADDRESS_CITY = 'Victoria, BC V9A 2P8';
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Ultimate+Water+Store+1505+Admirals+Rd+Victoria+BC';

export const HOURS = [
  { days: 'Monday to Friday', time: '9:30am to 6pm' },
  { days: 'Saturday', time: '9:30am to 5pm' },
  { days: 'Sundays and statutory holidays', time: 'Closed' },
];

// mtdougsprings.com, "Delivery Prices"
export const DELIVERY_PRICES = [
  {
    name: 'Purified',
    rows: [
      { size: '18.9L (5 gal)', price: '$10.50' },
      { size: '11.3L (3 gal)', price: '$7.50' },
      { size: 'Prepay 20 × 18.9L', price: '$200', note: '$10 each' },
    ],
  },
  {
    name: 'Oxygenated',
    rows: [
      { size: '18.9L (5 gal)', price: '$11.50' },
      { size: '11.3L (3 gal)', price: '$8.50' },
      { size: 'Prepay 20 × 18.9L', price: '$220', note: '$11 each' },
    ],
  },
];

// ultimatewaterstore.com price chart ("June 1st updated")
export const STORE_PRICES = [
  { size: '5 gallon', single: '$5.50', bulk: '30 for $130' },
  { size: '3 gallon', single: '$4.00', bulk: '36 for $114' },
  { size: '2 gallon', single: '$3.50', bulk: '36 for $108' },
];

export const RIBBON = [
  'Bottled the evening before delivery',
  'Sooke to Sidney, Oak Bay to Westshore',
  'Any brand of bottle, 1 to 5 gallons',
  'We carry it out to your car',
  'Under 0.1 ppm dissolved solids',
  'Hyper-oxygenated water',
  'Canadian owned, family run',
  "Victoria's only source of Saltspring's Finest",
];

export const DISPENSERS = [
  { name: 'Top-loading cooler', detail: 'Hot and cold, or hot, room and cold' },
  { name: 'Bottom-loading cooler', detail: 'Hot and cold, or hot, room and cold' },
  { name: 'Porcelain crock', detail: '' },
  { name: 'Manual hand pump', detail: '' },
  { name: 'USB electric pump', detail: '' },
  { name: 'Crown and cradle dispenser', detail: '' },
];
