import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  // Files whose names start with an underscore are ignored (drafts and templates).
  loader: glob({ base: './src/content/blog', pattern: '**/[^_]*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    category: z.enum(['Notes', 'Experiments', 'Learning']).default('Notes'),
    // Used by the Experiments page. All optional.
    question: z.string().optional(),
    outcome: z.enum(['Worked', 'Mixed', 'Did not work', 'In progress']).optional(),
    tools: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    // Start here page: mark a post with startHere, say why in one line, and set its place in the order.
    startHere: z.boolean().default(false),
    startReason: z.string().optional(),
    startOrder: z.number().optional(),
  }),
});

export const collections = { blog };
