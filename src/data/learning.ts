// What I am studying, and what I have finished. Edit this list and the Learning page and the
// "Currently studying" box on the home page both update.
//
// status: 'studying' (in progress), 'next' (planned) or 'finished'.
// The first 'studying' item is shown large at the top of the Learning page.
// Keep each group in the order you want it shown (newest finished first).

export type LearningItem = {
  title: string;
  kind: 'Course' | 'Book' | 'Video';
  by: string; // provider or author
  byUrl?: string; // link for the provider, if there is one
  url?: string; // link for the course or book itself
  status: 'studying' | 'next' | 'finished';
  started?: string; // for example 'October 2026'
  finished?: string; // for example 'December 2026'
  progress?: { done: number; total: number; unit: string }; // unit: 'module', 'page', 'chapter', 'minute' ...
  takeaway?: string; // what stands out so far (studying) or what I took from it (finished)
  notes?: string; // address of my write up, for example '/learning/elements-of-ai/'
};

export const LEARNING: LearningItem[] = [
  {
    title: 'Elements of AI (Part 1: Introduction to AI)',
    kind: 'Course',
    by: 'MinnaLearn',
    byUrl: 'https://www.minnalearn.com',
    url: 'https://www.elementsofai.com',
    status: 'studying',
    started: 'October 2026',
    progress: { done: 1, total: 6, unit: 'module' },
    // takeaway: 'A line or two on what stands out so far.',
  },
  {
    title: 'Superintelligence: Paths, Dangers, Strategies',
    kind: 'Book',
    by: 'Nick Bostrom',
    status: 'studying',
  },
  {
    title: 'Elements of AI (Part 2: Building AI)',
    kind: 'Course',
    by: 'MinnaLearn',
    byUrl: 'https://www.minnalearn.com',
    url: 'https://buildingai.elementsofai.com',
    status: 'next',
  },
  {
    title: 'Master AIGP from zero to pass',
    kind: 'Course',
    by: 'Ksenia Laputko on Udemy',
    url: 'https://www.udemy.com/course/master-aigp-governance-from-zero-to-pass/',
    status: 'next',
  },
  {
    title: 'Large Language Models explained briefly',
    kind: 'Video',
    by: '3Blue1Brown on YouTube',
    url: 'https://www.youtube.com/watch?v=LPZh9BOjkQs',
    status: 'next',
  },
  {
    title: 'Large Language Models Explained! How LLMs Work for Beginners',
    kind: 'Video',
    by: 'The Data and AI Guy on YouTube',
    url: 'https://www.youtube.com/watch?v=RhPKBmeYNuI',
    status: 'next',
  },
];
