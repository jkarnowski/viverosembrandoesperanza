# viverosembrandoesperanza

## website for native tree nursery in Chile

Built with [Astro](https://astro.build). The site is published in Spanish only for now; the code is set up so English can be added later (see below).

### Local setup

Requires Node.js (version in `.nvmrc`).

```bash
npm install
npm run dev       # http://localhost:4321/viverosembrandoesperanza/
npm run build     # outputs to dist/
npm run preview   # serves the built site
npm run check     # type-checks .astro and .ts files
```

### Editing content

| What                                   | Where                                   |
| -------------------------------------- | --------------------------------------- |
| Contact details, WhatsApp, hours       | `src/data/site.ts`                      |
| Species (one file per species)         | `src/content/species/<slug>.md`         |
| Stock per pot size, planting months    | `formats:` and `months:` in each species file |
| Photos                                 | `public/photos/` (set `photo:` in the species file) |
| Team names, bios, photos               | `src/data/team.ts`, `public/team/`      |
| "Nosotros" page text                   | `src/content/pages/about.es.md`         |
| Interface text (buttons, headings)     | `src/i18n/ui.ts`                        |
| Colours and fonts                      | `src/styles/global.css`                 |

To add a species, copy an existing file in `src/content/species/`, rename it (the file name becomes the URL, e.g. `lingue.md` → `/especies/lingue/`) and edit the fields. `npm run check` reports any missing or misspelled field. Each pot size in `formats:` has a `stock` of `disponible`, `pocas`, `agotado` or `proximamente`; the species badge shows the best one. `months:` lists the months (1–12) shown on the species page and the Temporadas calendar. Set `featured: true` to show a species on the home page (the first three alphabetically are used).

#### Before launch

- [ ] Replace the placeholder contact details in `src/data/site.ts`.
- [ ] Have the nursery review the species list and descriptions.
- [ ] Confirm the stock numbers in each species file (they came from the Lovable MVP and may be placeholders).
- [ ] Replace the Wikimedia photos (roble, maitén, arrayán) with the nursery's own when available.

### Design

Colours, fonts (Urbanist + Epilogue), the photo hero, the Temporadas calendar and the institutional projects section come from the Lovable MVP "Native Tree Finder". The Lovable project is kept as a reference; this repo is the one to keep working on.

### Later

- **Recomendador** ("¿Qué árbol va en mi terreno?" with a photo and location): the Lovable MVP has an AI version, which needs a server. GitHub Pages only serves static files, so for now the button opens WhatsApp. Bringing it back means adding a serverless function (e.g. Netlify or Cloudflare).

### Project layout

```
src/
  content/           species and page text (Markdown)
  content.config.ts  fields each species must have
  data/site.ts       contact details
  i18n/ui.ts         interface text + link helpers
  layouts/           shared page shell (<head>, header, footer)
  components/        header, footer, species card, ...
  views/             page templates
  pages/             routes (thin wrappers around views/)
public/              static files served as-is
```

Build internal links with `href(lang, 'species')` / `url('path')` from `src/i18n/ui.ts`, so they keep working under the GitHub Pages base path and when the custom domain removes it.

### Adding English later

English interface text (`src/i18n/ui.ts`), species fields (`en:` in each species file) and `src/content/pages/about.en.md` are already in place. To publish it:

1. Add `'en'` to `enabledLangs` in `src/i18n/ui.ts` and to `locales` in `astro.config.mjs`. This turns on the language switch and `hreflang` tags.
2. Create the routes under `src/pages/en/`, each a one-line wrapper around a view with `lang="en"`: `index.astro` (Home), `species/index.astro` (SpeciesIndex), `species/[slug].astro` (copy `especies/[slug].astro`), `about.astro` (About), `contact.astro` (Contact).

### Deployment

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`.
Pull requests run `astro check` and a build via `.github/workflows/ci.yml`.

One-time setup: in the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
