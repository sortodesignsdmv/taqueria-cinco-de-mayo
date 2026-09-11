# Restaurant routes

This is a separate static website, not a route inside the parent JC Accounting TanStack application. Its own routes are built into real HTML documents so navigation, menu browsing, contact links, and ordering work without JavaScript.

`index.js` → `/`, `menu.js` → `/menu/`, `about.js` → `/about/`, `visit.js` → `/visit/`.
`__root.js` owns the shared document, header, footer, and mobile order bar.
Do not change the parent application's routes or generated route tree.

Run `bun run build` to produce `dist/`; `bun run dev` serves the site on loopback port 4321 and rebuilds source changes. No runtime dependencies.
