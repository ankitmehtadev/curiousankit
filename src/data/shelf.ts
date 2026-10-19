// The Shelf: books I have read and movies and series I have watched, all recommended.
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
  { type: 'Book', title: "Poor Charlie's Almanack", by: 'Charles T. Munger', genres: ['Money'], reading: true },
  { type: 'Book', title: 'Superintelligence: Paths, Dangers, Strategies', by: 'Nick Bostrom', genres: ['AI and Tech'], reading: true },
  { type: 'Movie', title: 'The Godfather', by: 'Francis Ford Coppola', genres: ['Crime', 'Drama'], language: 'English' },
  { type: 'Book', title: 'Sapiens', by: 'Yuval Noah Harari', genres: ['History'] },
  { type: 'Series', title: 'Scam 1992: The Harshad Mehta Story', by: 'Hansal Mehta', genres: ['Biography', 'Drama'], language: 'Hindi' },
  { type: 'Movie', title: 'Gangs of Wasseypur', by: 'Anurag Kashyap', genres: ['Crime', 'Action'], language: 'Hindi' },
  { type: 'Book', title: 'Freakonomics', by: 'Steven D. Levitt and Stephen J. Dubner', genres: ['Money'] },
  { type: 'Series', title: 'Chernobyl', by: 'Craig Mazin', genres: ['Drama', 'History'], language: 'English' },
  { type: 'Movie', title: 'Saving Private Ryan', by: 'Steven Spielberg', genres: ['War', 'Action'], language: 'English' },
  { type: 'Book', title: 'One Hundred Years of Solitude', by: 'Gabriel García Márquez', genres: ['Fiction'] },
  { type: 'Movie', title: 'Andhadhun', by: 'Sriram Raghavan', genres: ['Crime', 'Thriller'], language: 'Hindi' },
  { type: 'Series', title: 'Freedom at Midnight', by: 'Nikkhil Advani', genres: ['History', 'Drama', 'Thriller'], language: 'Hindi' },
  { type: 'Book', title: 'The Anarchy: The Relentless Rise of the East India Company', by: 'William Dalrymple', genres: ['History'] },
  { type: 'Movie', title: 'The Pianist', by: 'Roman Polanski', genres: ['War', 'Drama'], language: 'English' },
  { type: 'Movie', title: 'Rang De Basanti', by: 'Rakeysh Omprakash Mehra', genres: ['Action', 'Thriller'], language: 'Hindi' },
  { type: 'Series', title: 'Modern Family', by: 'Christopher Lloyd and Steven Levitan', genres: ['Comedy'], language: 'English' },
  { type: 'Book', title: 'A Short History of Nearly Everything', by: 'Bill Bryson', genres: ['Science'] },
  { type: 'Movie', title: 'The Bridge on the River Kwai', by: 'David Lean', genres: ['War', 'Adventure'], language: 'English' },
  { type: 'Movie', title: 'Udaan', by: 'Vikramaditya Motwane', genres: ['Drama'], language: 'Hindi' },
  { type: 'Series', title: 'Made in India: A Titan Story', by: 'Robbie Grewal', genres: ['Biography', 'Drama'], language: 'Hindi' },
  { type: 'Book', title: 'Treasure Island', by: 'Robert Louis Stevenson', genres: ['Fiction', 'Adventure'] },
  { type: 'Movie', title: "The King's Speech", by: 'Tom Hooper', genres: ['Drama', 'Biography'], language: 'English' },
  { type: 'Movie', title: 'F1', by: 'Joseph Kosinski', genres: ['Sport', 'Action'], language: 'English' },
];
