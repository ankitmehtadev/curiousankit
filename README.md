# Curious Ankit

Notes from a technologist who can't stop asking why. Built with Astro, hosted on Cloudflare (Workers static assets), deployed from `main`.

## Run it

```
npm install
astro dev --background   # http://localhost:4321
npm run build            # output in ./dist
```

## Writing a post

Copy one of the templates in `src/content/blog/`, rename it without the leading underscore, and fill it in:

| Template | Kind | Address |
| --- | --- | --- |
| `_template-everyday-why.md` | Everyday Why: the weekly 200 to 400 word story behind an everyday thing | `/everyday-whys/<file-name>/` |
| `_template-deep-dive.mdx` | Deep Dive: a longer piece on one question (set `format: 'Experiment'` for experiments) | `/deep-dives/<file-name>/` |

Every field is explained inside the template. Files that start with `_` are never published.

## Everything else you can edit

- `src/consts.ts`: navigation, links (add LinkedIn here), the "Currently curious about" ticker, the newsletter form address.
- `src/data/shelf.ts`: the books, movies and series on the Shelf page.
- `src/styles/global.css`: brand colours and fonts.
