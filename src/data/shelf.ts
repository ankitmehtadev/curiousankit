// The Shelf: books I have read and movies and series I have watched, all recommended.
//
// IMPORTANT: apart from Superintelligence (which I am reading now), the entries below are
// STAND INS copied from the design mock up. Replace them with your own list before going live.
//
// How to add an entry
//   type      'Book', 'Movie' or 'Series'
//   title     the name
//   by        author for books, director or creator for movies and series
//   genres    one or more genres. The first one is printed on the card. Filters use all of them.
//   language  movies and series only (books are not filtered by language)
//   note      optional one line on why you recommend it (shown as a tooltip for now)
//   reading   optional, true for a book you are still reading. It gets a "Reading now" stamp.
//
// Entries are numbered (No. 001, No. 002 ...) in the order they appear here.

export type ShelfType = 'Book' | 'Movie' | 'Series';

export type ShelfItem = {
  type: ShelfType;
  title: string;
  by: string;
  genres: string[];
  language?: string;
  note?: string;
  reading?: boolean;
};

export const SHELF: ShelfItem[] = [
  { type: 'Book', title: 'Superintelligence: Paths, Dangers, Strategies', by: 'Nick Bostrom', genres: ['AI and Tech'], reading: true },
  { type: 'Book', title: 'Sapiens', by: 'Yuval Noah Harari', genres: ['History'] },
  { type: 'Movie', title: 'Parasite', by: 'Bong Joon Ho', genres: ['Thriller'], language: 'Korean' },
  { type: 'Book', title: 'Atomic Habits', by: 'James Clear', genres: ['Productivity'] },
  { type: 'Series', title: 'Panchayat', by: 'TVF', genres: ['Comedy'], language: 'Hindi' },
  { type: 'Book', title: 'Thinking, Fast and Slow', by: 'Daniel Kahneman', genres: ['Psychology'] },
  { type: 'Movie', title: 'Spirited Away', by: 'Hayao Miyazaki', genres: ['Animation'], language: 'Japanese' },
  { type: 'Book', title: 'The Psychology of Money', by: 'Morgan Housel', genres: ['Money'] },
  { type: 'Series', title: 'Dark', by: 'Baran bo Odar, Jantje Friese', genres: ['Sci fi'], language: 'German' },
  { type: 'Movie', title: '3 Idiots', by: 'Rajkumar Hirani', genres: ['Comedy'], language: 'Hindi' },
  { type: 'Book', title: 'The Alignment Problem', by: 'Brian Christian', genres: ['AI and Tech'] },
  { type: 'Series', title: 'Money Heist', by: 'Álex Pina', genres: ['Thriller'], language: 'Spanish' },
  { type: 'Book', title: 'Deep Work', by: 'Cal Newport', genres: ['Productivity'] },
  { type: 'Movie', title: 'Interstellar', by: 'Christopher Nolan', genres: ['Sci fi'], language: 'English' },
  { type: 'Book', title: 'Guns, Germs, and Steel', by: 'Jared Diamond', genres: ['History'] },
  { type: 'Series', title: 'Chernobyl', by: 'Craig Mazin', genres: ['Drama'], language: 'English' },
  { type: 'Book', title: 'Project Hail Mary', by: 'Andy Weir', genres: ['Fiction'] },
  { type: 'Series', title: 'The Office', by: 'Greg Daniels', genres: ['Comedy'], language: 'English' },
];
