export type Tool = {
  slug: string;
  name: string;
  category: string; // a slug from categories.ts
  blurb: string;
  status: 'live' | 'soon';
};

export const tools: Tool[] = [
  {
    slug: 'breathing-timer',
    name: 'Breathing timer',
    category: 'breathe',
    blurb: 'Pick a rhythm and follow the circle as it grows and shrinks.',
    status: 'live',
  },
  {
    slug: 'sound-mixer',
    name: 'Ambient sound mixer',
    category: 'feel',
    blurb: 'Layer soft rain, waves, and wind to bring a moment with you.',
    status: 'soon',
  },
];
