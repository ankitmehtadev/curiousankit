// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://curiousankit.com',
  integrations: [mdx(), sitemap()],
  // Code blocks are styled by our own CSS, not a colour theme.
  markdown: { syntaxHighlight: false },
  redirects: {
    // Old addresses from the first version of the site, so early links keep working.
    '/blog': '/archive/',
    '/notes': '/ai-journey/',
    '/experiments': '/ai-journey/',
    '/learning': '/ai-journey/',
    '/start': '/',
    '/search': '/archive/',
    '/notes/why-these-notes': '/about/',
    '/notes/what-you-will-and-wont-find-here': '/about/',
    '/notes/experiment-1-this-website': '/experiments/experiment-1-this-website/',
  },
});
