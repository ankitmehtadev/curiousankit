import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import fs from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import sharp from 'sharp';
import { SITE_DESCRIPTION } from '../../consts';
import { formatDate, sectionOf } from '../../utils';

// Share images (1200 x 630), made at build time from the site's own fonts.
//   /og/default.png            the site card
//   /og/<section>/<post>.png   one card per post, showing its title

const W = 1200;
const H = 630;
const INK = '#111111';
const MUTED = '#6b6b6b';
const RULE = '#e6e6e6';

const fontFile = (pkg: string, file: string) =>
  fs.readFileSync(path.join(process.cwd(), 'node_modules', '@fontsource', pkg, 'files', file));

let fonts: any[] | undefined;
function loadFonts() {
  fonts ??= [
    { name: 'Cormorant Garamond', data: fontFile('cormorant-garamond', 'cormorant-garamond-latin-600-normal.woff'), weight: 600, style: 'normal' },
    { name: 'Cormorant Garamond', data: fontFile('cormorant-garamond', 'cormorant-garamond-latin-500-italic.woff'), weight: 500, style: 'italic' },
    { name: 'Libre Baskerville', data: fontFile('libre-baskerville', 'libre-baskerville-latin-400-normal.woff'), weight: 400, style: 'normal' },
  ];
  return fonts;
}

// Cormorant draws numerals old style by default, so a "1" looks like a capital I. Ask for lining figures.
const LINING = { fontFeatureSettings: '"lnum" 1' };

// A tiny helper for the element objects satori expects.
const h = (type: string, style: Record<string, unknown>, children?: unknown): any => ({
  type,
  props: { style, children },
});

// The stacked wordmark: a thin vertical rule, "Curious" over italic "Ankit".
function wordmark(first: number, second: number, rule: number, gap: number) {
  return h('div', { display: 'flex', alignItems: 'stretch' }, [
    h('div', { width: rule, background: INK, marginRight: gap }),
    h('div', { display: 'flex', flexDirection: 'column' }, [
      h('div', { fontFamily: 'Cormorant Garamond', fontWeight: 600, fontSize: first, lineHeight: 1, color: INK, ...LINING }, 'Curious'),
      h('div', { fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontWeight: 500, fontSize: second, lineHeight: 1, color: MUTED, marginTop: Math.round(first * 0.06) }, 'Ankit'),
    ]),
  ]);
}

function footer(right?: string) {
  const small = { fontFamily: 'Libre Baskerville', fontSize: 24, color: MUTED };
  return h('div', { display: 'flex', flexDirection: 'column', width: '100%' }, [
    h('div', { height: 2, width: '100%', background: INK }),
    h('div', { display: 'flex', justifyContent: 'space-between', marginTop: 22 }, [
      h('div', small, 'curiousankit.com'),
      h('div', small, right ?? ''),
    ]),
  ]);
}

function siteCard() {
  return h('div', { width: W, height: H, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#ffffff', padding: '72px 80px 56px' }, [
    wordmark(124, 92, 4, 24),
    h('div', { display: 'flex', flexDirection: 'column' }, [
      h('div', { fontFamily: 'Cormorant Garamond', fontWeight: 600, fontSize: 60, lineHeight: 1.1, color: INK, ...LINING }, 'A notebook on learning AI,'),
      h('div', { fontFamily: 'Cormorant Garamond', fontStyle: 'italic', fontWeight: 500, fontSize: 60, lineHeight: 1.1, color: MUTED }, 'one experiment at a time.'),
    ]),
    footer(),
  ]);
}

function titleSize(title: string) {
  const n = title.length;
  if (n <= 24) return 112;
  if (n <= 36) return 100;
  if (n <= 52) return 88;
  if (n <= 72) return 76;
  return 64;
}

function postCard(title: string, category: string, date: Date) {
  const clipped = title.length > 110 ? title.slice(0, 107).trimEnd() + '...' : title;
  // Keep anything in brackets together, so a line never breaks inside "(and will)".
  const shown = clipped.replace(/\([^)]*\)/g, (group) => group.replace(/ /g, '\u00A0'));
  // Titles such as "Experiment 1: This website" read best split at the colon.
  const colon = shown.indexOf(': ');
  const lines = colon > 0 ? [shown.slice(0, colon + 1), shown.slice(colon + 2)] : [shown];
  const style = { fontFamily: 'Cormorant Garamond', fontWeight: 600, fontSize: titleSize(shown), lineHeight: 1.04, color: INK, ...LINING };
  return h('div', { width: W, height: H, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#ffffff', padding: '60px 80px 52px' }, [
    h('div', { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }, [
      wordmark(46, 35, 3, 14),
      h('div', { fontFamily: 'Libre Baskerville', fontSize: 22, letterSpacing: 4, color: MUTED, marginTop: 8 }, category.toUpperCase()),
    ]),
    h('div', { display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center', paddingRight: 40 }, lines.map((line) => h('div', style, line))),
    footer(formatDate(date)),
  ]);
}

export const getStaticPaths = (async () => {
  const posts = await getCollection('blog');
  return [
    { params: { slug: 'default' }, props: { kind: 'site' as const } },
    ...posts.map((note) => ({
      params: { slug: `${sectionOf(note)}/${note.id}` },
      props: { kind: 'post' as const, title: note.data.title, category: note.data.category, date: note.data.pubDate },
    })),
  ];
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const p = props as any;
  const tree = p.kind === 'site' ? siteCard() : postCard(p.title, p.category, p.date);
  const svg = await satori(tree, { width: W, height: H, fonts: loadFonts() });
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
