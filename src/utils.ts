import type { CollectionEntry } from 'astro:content';

export type Note = CollectionEntry<'blog'>;

export function sortNotes(notes: Note[]): Note[] {
  return [...notes].sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export const isExperiment = (n: Note) => n.data.stream === 'AI Journey' && n.data.format === 'Experiment';
export const isAINote = (n: Note) => n.data.stream === 'AI Journey' && n.data.format !== 'Experiment';
export const isRabbit = (n: Note) => n.data.stream === 'Rabbit Holes';

// Addresses:
//   AI notes        /notes/<slug>/
//   AI experiments  /experiments/<slug>/
//   Rabbit holes    /rabbit-holes/<slug>/
export function sectionOf(n: Note): 'notes' | 'experiments' | 'rabbit-holes' {
  if (isRabbit(n)) return 'rabbit-holes';
  return isExperiment(n) ? 'experiments' : 'notes';
}

export function noteUrl(n: Note): string {
  return `/${sectionOf(n)}/${n.id}/`;
}

// Exp. 001
export function expLabel(n?: number): string {
  return `Exp. ${String(n ?? 0).padStart(3, '0')}`;
}

// The small label used in lists: "Note", "Exp. 001 · Done", "Mind"
export function kindLabel(n: Note): string {
  if (isRabbit(n)) return n.data.topic;
  if (isExperiment(n)) return `${expLabel(n.data.exp)}${n.data.status ? ' · ' + n.data.status : ''}`;
  return 'Note';
}

export function readingTime(body = ''): number {
  const words = body.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

// 4 Oct 2026
export function formatDate(date: Date, withYear = true): string {
  return date.toLocaleDateString('en-AU', {
    day: 'numeric',
    month: 'short',
    ...(withYear ? { year: 'numeric' } : {}),
  }).replace('Sept', 'Sep');
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
