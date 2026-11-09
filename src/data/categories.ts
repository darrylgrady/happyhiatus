// The seven Happy Hiatus categories. Edit names, intros, and items here;
// the home page, category pages, and filters all read from this file.

export type Category = {
  slug: string;
  name: string;
  number: string;
  /** Plain-language name used in earlier planning, handy for headings and SEO */
  group: string;
  intro: string;
  items: string[];
  bg: string;
  /** true when the tile background is dark and needs light text */
  dark: boolean;
};

export const categories: Category[] = [
  {
    slug: 'breathe',
    name: 'Breathe',
    number: '01',
    group: 'Stillness & Presence',
    intro: 'Stillness you can step into: a slow breath, a quiet room, an hour that belongs only to you.',
    items: ['Breathing', 'Quiet', 'Solitude'],
    bg: '#DCE2CF',
    dark: false,
  },
  {
    slug: 'move',
    name: 'Move',
    number: '02',
    group: 'Movement',
    intro: 'Motion that feels good rather than punishing: a workout, a trail, a walk with nowhere to be.',
    items: ['Working out', 'Hiking', 'Peaceful walks'],
    bg: '#EBD5BE',
    dark: false,
  },
  {
    slug: 'explore',
    name: 'Explore',
    number: '03',
    group: 'Adventure',
    intro: 'New places, new experiences, and the thrill of being a beginner again.',
    items: ['Traveling', 'New experiences', 'Learning new hobbies'],
    bg: '#3E4B34',
    dark: true,
  },
  {
    slug: 'wilding',
    name: 'Wilding',
    number: '04',
    group: 'Places in Nature',
    intro: 'Salt air and mountain air, and the places where the world gets bigger and you get quieter.',
    items: ['Beaches', 'Mountains', 'Beaches & Mountains'],
    bg: '#D3C4A6',
    dark: false,
  },
  {
    slug: 'feel',
    name: 'Feel',
    number: '05',
    group: 'Sensory Moments',
    intro:
      'The small, physical moments that bring you back to your body: rain on warm skin, sand between your toes, soil on your hands.',
    items: ['Soft rain on a warm day', 'Toes in the sand', 'Hands in soil'],
    bg: '#E8CBB8',
    dark: false,
  },
  {
    slug: 'connect',
    name: 'Connect',
    number: '06',
    group: 'Loved Ones',
    intro: 'The people and animals who make a day feel like it counted.',
    items: ['Grandkids', 'Pets', 'Your person'],
    bg: '#E4D9C2',
    dark: false,
  },
  {
    slug: 'evolve',
    name: 'Evolve',
    number: '07',
    group: 'Personal Growth',
    intro: 'Growing on purpose: learning, stretching, and taking on the challenges that change you.',
    items: ['Personal growth', 'Personal development', 'Challenges'],
    bg: '#9A4F2B',
    dark: true,
  },
];

export const categorySlugs = categories.map((c) => c.slug) as [string, ...string[]];

export function getCategory(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}
