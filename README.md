# Taqueria Cinco de Mayo

Independent four-page restaurant website for 7201 Annapolis Rd, Hyattsville, MD 20784. This project lives in its own folder; the parent JC Accounting application remains separate.

## Run

Use Bun 1.4 or later:

```sh
bun install --frozen-lockfile
bun run dev
```

Preview: `http://127.0.0.1:4321/`. The server binds to loopback only. It rebuilds when source files change; refresh the browser to see updates.

```sh
bun run build
bun run check
bun run preview
```

Build emits static HTML to `dist/`. There are no third-party runtime dependencies. Menu navigation, disclosures, ordering, calling, and directions work without JavaScript. Fonts use Google Fonts with local system fallbacks.

## Pages

- `/` — hero, favorites, dine-in/takeout, introduction, supplied review excerpts, directions, ordering.
- `/menu/` — curated, verified category guide with taco and quesadilla varieties, platillos, more favorites, drinks, and desserts.
- `/about/` — local introduction, Latino-owned identity, inclusive welcome, art.
- `/visit/` — address, hours, Google Maps directions, tap-to-call, pickup instructions, FAQs.
- `/404.html` — branded recovery page.

All ordering links use the restaurant's exact Toast store. Checkout, prices, modifiers, stock, payments, and pickup timing remain on Toast. No delivery, table booking, or on-site checkout is advertised.

## Future GitHub / Vercel handoff

Nothing has been pushed, registered, or deployed. When approved, use this directory as the new repository root, not the parent accounting repository. `vercel.json` is prepared for a static project with build command `bun run build` and output `dist`. Each route is a real HTML directory and does not need an SPA rewrite. Run build and check before pushing. Preserve published Git history.

## Content & assets

See `PROJECT_BRIEF.md` for the consolidated creative brief and `docs/content-sources.md` for source notes. Business details and testimonials come from the user's supplied Google listing. Menu categories were checked against the exact Toast location on September 10, 2026.

The user-supplied restaurant taco photograph and summer aguas frescas poster are featured on the site. Quesabirria photography remains AI-generated and illustrative; the footer discloses this. The restaurant's original logo was not provided; the site uses an original typographic wordmark. Asset filenames and built-in image-generation prompts are documented in `docs/art-direction.md`.
