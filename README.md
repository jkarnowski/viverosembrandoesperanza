# viverosembrandoesperanza

## website for native tree nursery in Chile

Built with [Astro](https://astro.build). Spanish is the default language (`/`); English lives under `/en/`.

### Local setup

Requires Node.js (version in `.nvmrc`).

```bash
npm install
npm run dev       # http://localhost:4321/viverosembrandoesperanza/
npm run build     # outputs to dist/
npm run preview   # serves the built site
npm run check     # type-checks .astro and .ts files
```

### Project layout

```
src/
  i18n/ui.ts        translated strings + url() helper
  layouts/Base.astro shared page shell
  pages/            Spanish pages
  pages/en/         English pages
public/             static files served as-is
```

Use `url('path')` from `src/i18n/ui.ts` for internal links and assets so they work under the GitHub Pages base path.

### Deployment

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`.
Pull requests run `astro check` and a build via `.github/workflows/ci.yml`.

One-time setup: in the repo's **Settings → Pages**, set **Source** to **GitHub Actions**.
