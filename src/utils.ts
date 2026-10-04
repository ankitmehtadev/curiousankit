import type { CollectionEntry } from 'astro:content';

export type Note = CollectionEntry<'blog'>;

export function sortNotes(notes: Note[]): Note[] {
  return [...notes].sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

// Each post lives under the address of its own section:
// /notes/..., /experiments/... or /learning/...
export function noteUrl(note: Note): string {
  return `${categoryUrl(note.data.category)}/${note.id}/`;
}

export function sectionOf(note: Note): string {
  return categoryUrl(note.data.category).slice(1);
}

const CATEGORY_URLS: Record<string, string> = {
  Notes: '/notes',
  Experiments: '/experiments',
  Learning: '/learning',
};

export function categoryUrl(category: string): string {
  return CATEGORY_URLS[category] ?? '/notes';
}

export function readingTime(body = ''): number {
  const words = body.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

export function formatDate(date: Date, withYear = true): string {
  return date.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'long',
    ...(withYear ? { year: 'numeric' } : {}),
  });
}
