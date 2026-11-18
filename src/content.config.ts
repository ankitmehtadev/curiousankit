import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every post lives in src/content/blog. Files whose names start with an underscore are ignored
// (drafts and templates). Copy _template-everyday-why.md or _template-deep-dive.mdx to start.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/[^_]*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    // Everyday Why: the one line hook under the title. Deep Dive: the subtitle.
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    // Which kind of post this is.
    type: z.enum(['Everyday Why', 'Deep Dive']).default('Deep Dive'),

    // Deep Dives: one short topic (AI, Money, Productivity, Design, Tech ...). Used for the filter pills.
    topic: z.string().default(''),
    // 'Experiment' adds an Experiment tag to a Deep Dive.
    format: z.enum(['Note', 'Experiment']).default('Note'),
    tags: z.array(z.string()).default([]),

    // Everyday Whys
    week: z.number().int().optional(), // leave out to use the week of pubDate
    payoff: z.string().optional(), // the fun fact in one sentence
    myth: z.string().optional(), // optional "Myth or true?" note

    // Deep Dives
    surface: z.array(z.string()).default([]), // "The short answer": one line or a few bullets
    takeaways: z.array(z.string()).default([]), // "What I'd tell a friend"
    aiNote: z.string().optional(), // optional one line "How I used AI"

    // Both
    sources: z.array(z.object({ label: z.string(), url: z.string().optional() })).default([]),

    // Experiment extras (optional)
    question: z.string().optional(),
    tools: z.array(z.string()).default([]),
    duration: z.string().optional(),
    outcome: z.enum(['Worked', 'Mixed', 'Did not work', 'In progress']).optional(),
    verdict: z.string().optional(),
    log: z.array(z.object({ day: z.string(), title: z.string().optional(), text: z.string() })).default([]),
    scorecard: z.array(z.object({ label: z.string(), score: z.number().min(0).max(5), note: z.string().optional() })).default([]),
  }),
});

export const collections = { blog };
