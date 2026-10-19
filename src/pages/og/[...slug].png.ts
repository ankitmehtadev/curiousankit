import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import fs from 'node:fs';
import path from 'node:path';
import satori from 'satori';
import sharp from 'sharp';
import { expLabel, formatDate, isExperiment, isRabbit, sectionOf, type Note } from '../../utils';

// Share images (1200 x 630), made at build time in the site's own brand.
//   /og/default.png            the site card
//   /og/<section>/<post>.png   one card per post, showing its stream and title

const W = 1200;
const H = 630;
const INK = '#0B0B0B';
const WHITE = '#FFFFFF';
const RED = '#D93A3A';
const SMOKE = '#8C8C8C';
const GRID = '#1A1A1A';

const fontFile = (pkg: string, file: string) =>
  fs.readFileSync(path.join(process.cwd(), 'node_modules', '@fontsource', pkg, 'files', file));

let fonts: any[] | undefined;
function loadFonts() {
  fonts ??= [
    { name: 'Archivo', data: fontFile('archivo', 'archivo-latin-800-normal.woff'), weight: 800, style: 'normal' },
    { name: 'Plex', data: fontFile('ibm-plex-mono', 'ibm-plex-mono-latin-400-normal.woff'), weight: 400, style: 'normal' },
    { name: 'Plex', data: fontFile('ibm-plex-mono', 'ibm-plex-mono-latin-500-normal.woff'), weight: 500, style: 'normal' },
  ];
  return fonts;
}

// A tiny helper for the element objects satori expects.
const h = (type: string, style: Record<string, unknown>, children?: unknown): any => ({
  type,
  props: { style: { display: 'flex', ...style }, children },
});

const mono = (size: number, color = WHITE, extra: Record<string, unknown> = {}) => ({
  fontFamily: 'Plex',
  fontWeight: 400,
  fontSize: size,
  color,
  ...extra,
});

// The Lens wordmark: Curi(o)us over Ankit, the o drawn as a red magnifying glass.
function logo(size: number, color = WHITE) {
  const ring = size * 0.5;
  const stroke = size * 0.11;
  const text = { fontFamily: 'Archivo', fontWeight: 800, fontSize: size, lineHeight: 0.86, letterSpacing: -0.05 * size, color };
  return h('div', { flexDirection: 'column' }, [
    h('div', { alignItems: 'flex-end' }, [
      h('div', text, 'Curi'),
      h('div', { position: 'relative', width: ring, height: ring, marginLeft: size * 0.01, marginRight: size * 0.03, marginBottom: size * 0.1 }, [
        h('div', { width: ring, height: ring, borderRadius: ring, border: `${stroke}px solid ${RED}` }),
        h('div', {
          position: 'absolute',
          width: size * 0.1,
          height: size * 0.24,
          background: RED,
          right: -size * 0.12,
          bottom: -size * 0.2,
          transform: 'rotate(-45deg)',
        }),
      ]),
      h('div', text, 'us'),
    ]),
    h('div', text, 'Ankit'),
  ]);
}

// The six column grid that runs behind the site.
function grid() {
  return h(
    'div',
    { position: 'absolute', top: 0, left: 0, width: W, height: H },
    Array.from({ length: 6 }, (_, i) => h('div', { position: 'absolute', top: 0, left: (W / 6) * i, width: 1, height: H, background: GRID })),
  );
}

function frame(children: any[], bg = INK) {
  return h('div', { width: W, height: H, position: 'relative', background: bg, color: WHITE }, [
    grid(),
    h('div', { position: 'relative', width: W, height: H, flexDirection: 'column', justifyContent: 'space-between', padding: '56px 64px' }, children),
  ]);
}

function siteCard() {
  const big = { fontFamily: 'Archivo', fontWeight: 800, fontSize: 96, lineHeight: 0.88, letterSpacing: -5 };
  return frame([
    h('div', { justifyContent: 'space-between', alignItems: 'flex-start' }, [logo(56), h('div', mono(20, SMOKE), 'curiousankit.com')]),
    h('div', { flexDirection: 'column' }, [
      h('div', big, 'Notes from an'),
      h('div', big, [h('span', { marginRight: 26 }, 'endlessly'), h('span', { color: RED, marginRight: 26 }, 'curious'), h('span', {}, 'mind.')]),
    ]),
    h('div', { gap: 16 }, [
      h('div', { ...mono(20), padding: '10px 16px', background: RED }, 'AI Journey'),
      h('div', { ...mono(20, INK), padding: '10px 16px', background: WHITE }, 'Rabbit Holes'),
    ]),
  ]);
}

function titleSize(title: string) {
  const n = title.length;
  if (n <= 20) return 120;
  if (n <= 34) return 104;
  if (n <= 50) return 88;
  if (n <= 70) return 74;
  return 62;
}

function streamLabel(note: Note) {
  if (isRabbit(note)) return `Rabbit Hole · ${note.data.topic}`;
  if (isExperiment(note)) return `AI Journey · ${expLabel(note.data.exp)}`;
  return 'AI Journey · Note';
}

function postCard(note: Note) {
  const title = note.data.title.length > 110 ? note.data.title.slice(0, 107).trimEnd() + '...' : note.data.title;
  const rabbit = isRabbit(note);
  const size = titleSize(title);
  return frame([
    h('div', { justifyContent: 'space-between', alignItems: 'flex-start' }, [
      logo(44),
      h(
        'div',
        rabbit
          ? { ...mono(20, INK, { fontWeight: 500 }), padding: '10px 16px', background: WHITE }
          : { ...mono(20, WHITE, { fontWeight: 500 }), padding: '10px 16px', background: RED },
        streamLabel(note),
      ),
    ]),
    h('div', { fontFamily: 'Archivo', fontWeight: 800, fontSize: size, lineHeight: 0.9, letterSpacing: -0.05 * size, paddingRight: 40 }, title),
    h('div', { flexDirection: 'column', width: '100%' }, [
      h('div', { height: 2, width: '100%', background: WHITE }),
      h('div', { justifyContent: 'space-between', marginTop: 20 }, [
        h('div', mono(20, SMOKE), 'curiousankit.com'),
        h('div', mono(20, SMOKE), formatDate(note.data.pubDate)),
      ]),
    ]),
  ]);
}

export const getStaticPaths = (async () => {
  const posts = await getCollection('blog');
  return [
    { params: { slug: 'default' }, props: { note: undefined } },
    ...posts.map((note) => ({ params: { slug: `${sectionOf(note)}/${note.id}` }, props: { note } })),
  ];
}) satisfies GetStaticPaths;

export const GET: APIRoute = async ({ props }) => {
  const note = (props as { note?: Note }).note;
  const tree = note ? postCard(note) : siteCard();
  const svg = await satori(tree, { width: W, height: H, fonts: loadFonts() });
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
