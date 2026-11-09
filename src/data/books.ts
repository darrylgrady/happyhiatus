// Bookshelf entries. Replace the placeholders with real picks.
// `url` is your Bookshop.org or Amazon affiliate link; leave empty to hide the link.

export type Book = {
  title: string;
  author: string;
  category: string; // a slug from categories.ts
  note: string; // two sentences on why you loved it
  url: string;
  cover: string; // placeholder cover color until you add images
  darkCover: boolean;
};

export const books: Book[] = [
  { title: '[BOOK TITLE]', author: '[AUTHOR]', category: 'breathe', note: '[Two sentences on why you loved it and who it is for.]', url: '', cover: '#8A9A72', darkCover: false },
  { title: '[BOOK TITLE]', author: '[AUTHOR]', category: 'move', note: '[Two sentences on why you loved it and who it is for.]', url: '', cover: '#B5683F', darkCover: true },
  { title: '[BOOK TITLE]', author: '[AUTHOR]', category: 'explore', note: '[Two sentences on why you loved it and who it is for.]', url: '', cover: '#3E4B34', darkCover: true },
  { title: '[BOOK TITLE]', author: '[AUTHOR]', category: 'wilding', note: '[Two sentences on why you loved it and who it is for.]', url: '', cover: '#D3C4A6', darkCover: false },
  { title: '[BOOK TITLE]', author: '[AUTHOR]', category: 'feel', note: '[Two sentences on why you loved it and who it is for.]', url: '', cover: '#E8CBB8', darkCover: false },
  { title: '[BOOK TITLE]', author: '[AUTHOR]', category: 'connect', note: '[Two sentences on why you loved it and who it is for.]', url: '', cover: '#9A4F2B', darkCover: true },
  { title: '[BOOK TITLE]', author: '[AUTHOR]', category: 'evolve', note: '[Two sentences on why you loved it and who it is for.]', url: '', cover: '#B9C4A6', darkCover: false },
  { title: '[BOOK TITLE]', author: '[AUTHOR]', category: 'breathe', note: '[Two sentences on why you loved it and who it is for.]', url: '', cover: '#E0B9A0', darkCover: false },
];
