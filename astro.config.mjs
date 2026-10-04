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
  redirects: { '/blog': '/notes' },
});
