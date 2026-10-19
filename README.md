# Curious Ankit

Notes from an endlessly curious mind. Built with Astro, hosted on Cloudflare (Workers static assets), deployed from `main`.

## Run it

```
npm install
astro dev --background   # http://localhost:4321
npm run build            # output in ./dist
```

## Writing a post

Copy one of the templates in `src/content/blog/`, rename it without the leading underscore, and fill it in:

| Template | Stream | Address |
| --- | --- | --- |
| `_template-ai-note.mdx` | AI Journey, Note | `/notes/<file-name>/` |
| `_template-experiment.mdx` | AI Journey, Experiment (numbered Exp. 001 …) | `/experiments/<file-name>/` |
| `_template-rabbit-hole.mdx` | Rabbit Holes (Mind, History, Money, Productivity, Wildcard) | `/rabbit-holes/<file-name>/` |

Every field is explained inside the template. Files that start with `_` are never published.

## Everything else you can edit

- `src/consts.ts`: navigation, links (add LinkedIn here), the "Currently curious about" ticker, the newsletter form address.
- `src/data/shelf.ts`: the books, movies and series on the Shelf page.
- `src/styles/global.css`: brand colours and fonts.
