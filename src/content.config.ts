import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every post lives in src/content/blog. Files whose names start with an underscore are ignored
// (drafts and templates). See the _template-*.md files for a ready to copy starting point.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/[^_]*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    // Which stream the post belongs to.
    stream: z.enum(['AI Journey', 'Rabbit Holes']),
    // AI Journey only: a Note, or a numbered Experiment.
    format: z.enum(['Note', 'Experiment']).default('Note'),
    // AI Journey: any short topic (Lessons, Tools, Builds ...).
    // Rabbit Holes: one of Mind, History, Money, Productivity, Wildcard.
    topic: z.string(),
    tags: z.array(z.string()).default([]),

    // Shared extras
    takeaways: z.array(z.string()).default([]),
    sources: z.array(z.object({ label: z.string(), url: z.string().optional() })).default([]),

    // Rabbit Holes
    depth: z.number().int().min(1).max(3).optional(),
    surface: z.array(z.string()).default([]), // the "Short on time?" bullets
    deepDive: z.boolean().default(false), // shows in "Deepest dives"

    // Experiments
    exp: z.number().int().optional(), // 1 shows as Exp. 001
    status: z.enum(['Running', 'Done']).optional(),
    question: z.string().optional(),
    hypothesis: z.string().optional(),
    setup: z.string().optional(),
    tools: z.array(z.string()).default([]),
    duration: z.string().optional(),
    log: z.array(z.object({ day: z.string(), title: z.string().optional(), text: z.string() })).default([]),
    scorecard: z.array(z.object({ label: z.string(), score: z.number().min(0).max(5), note: z.string().optional() })).default([]),
    outcome: z.enum(['Worked', 'Mixed', 'Did not work', 'In progress']).optional(),
    verdict: z.string().optional(),
  }),
});

export const collections = { blog };
