import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export const isWhy = (p: Post) => p.data.type === 'Everyday Why';
export const isDive = (p: Post) => p.data.type === 'Deep Dive';

export function sortPosts(posts: Post[]): Post[] {
  return [...posts].sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

// All published posts of one kind, newest first.
export async function getWhys(): Promise<Post[]> {
  return sortPosts((await getCollection('blog')).filter(isWhy));
}
export async function getDives(): Promise<Post[]> {
  return sortPosts((await getCollection('blog')).filter(isDive));
}

// Addresses:
//   Everyday Whys  /everyday-whys/<slug>/
//   Deep Dives     /deep-dives/<slug>/
export function sectionOf(p: Post): 'everyday-whys' | 'deep-dives' {
  return isWhy(p) ? 'everyday-whys' : 'deep-dives';
}
export function postUrl(p: Post): string {
  return `/${sectionOf(p)}/${p.id}/`;
}

// ISO week number of a date (weeks start on Monday).
export function isoWeek(date: Date): number {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  return Math.ceil(((d.valueOf() - yearStart.valueOf()) / 86400000 + 1) / 7);
}

export function weekOf(p: Post): number {
  return p.data.week ?? isoWeek(p.data.pubDate);
}

// "Deep Dive · Money · Experiment"
export function kickerOf(p: Post): string {
  if (isWhy(p)) return `Everyday Whys · Week ${weekOf(p)}`;
  return ['Deep Dive', p.data.topic, p.data.format === 'Experiment' ? 'Experiment' : '']
    .filter(Boolean)
    .join(' · ');
}

export function readingTime(body = ''): number {
  const words = body.replace(/<[^>]*>/g, ' ').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}

// 21/11/2026
export function formatDate(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()}`;
}

// November 2026
export function monthLabel(date: Date): string {
  return date.toLocaleDateString('en-AU', { month: 'long', year: 'numeric' });
}

// 2026-10-19, using the same calendar day the post shows (not shifted to UTC).
export function isoDate(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, '0');
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}
