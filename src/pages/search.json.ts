import { getCollection } from 'astro:content';
import { noteUrl, sortNotes } from '../utils';

export async function GET() {
  const notes = sortNotes(await getCollection('blog'));
  const index = notes.map((note) => ({
    title: note.data.title,
    description: note.data.description,
    category: note.data.category,
    tags: note.data.tags,
    date: note.data.pubDate.toISOString(),
    url: noteUrl(note),
    text: (note.body ?? '').replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').slice(0, 6000),
  }));
  return new Response(JSON.stringify(index), {
    headers: { 'Content-Type': 'application/json' },
  });
}
