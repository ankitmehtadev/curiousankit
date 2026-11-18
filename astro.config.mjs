// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import fs from 'node:fs';

// Old post addresses (from the AI Journey and Rabbit Holes version of the site) point to the
// same post under /deep-dives/, so shared links keep working.
const oldPostRedirects = Object.fromEntries(
  fs
    .readdirSync('./src/content/blog')
    .filter((f) => /^[^_].*\.mdx?$/.test(f))
    .map((f) => f.replace(/\.mdx?$/, ''))
    .flatMap((slug) => [
      [`/rabbit-holes/${slug}`, `/deep-dives/${slug}/`],
      [`/notes/${slug}`, `/deep-dives/${slug}/`],
      [`/experiments/${slug}`, `/deep-dives/${slug}/`],
    ]),
);

// https://astro.build/config
export default defineConfig({
  site: 'https://curiousankit.com',
  integrations: [mdx(), sitemap()],
  // Code blocks are styled by our own CSS, not a colour theme.
  markdown: { syntaxHighlight: false },
  redirects: {
    // Old section pages
    '/ai-journey': '/deep-dives/',
    '/rabbit-holes': '/deep-dives/',
    '/archive': '/deep-dives/',
    '/contact': '/about/',
    // Addresses from the first version of the site
    '/blog': '/deep-dives/',
    '/notes': '/deep-dives/',
    '/experiments': '/deep-dives/',
    '/learning': '/deep-dives/',
    '/start': '/',
    '/search': '/deep-dives/',
    '/notes/why-these-notes': '/about/',
    '/notes/what-you-will-and-wont-find-here': '/about/',
    ...oldPostRedirects,
  },
});
