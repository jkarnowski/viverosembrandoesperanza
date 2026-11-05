# viverosembrandoesperanza

## website for native tree nursery in Chile

Built with [Astro](https://astro.build). Spanish is the default language (`/`); English lives under `/en/`.

### Local setup

Requires Node.js (version in `.nvmrc`).

```bash
npm install
npm run dev       # http://localhost:4321/
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

Use `url('path')` from `src/i18n/ui.ts` for internal links and assets so they keep working if a base path is ever set in `astro.config.mjs`.

### Deployment

Pushes to `main` deploy to GitHub Pages via `.github/workflows/deploy.yml`, served at https://viverosembrandoesperanza.cl.
Pull requests run `astro check` and a build via `.github/workflows/ci.yml`.

Pages settings (repo **Settings → Pages**): **Source** is **GitHub Actions** and **Custom domain** is `viverosembrandoesperanza.cl`, with **Enforce HTTPS** on.

DNS records at the domain's DNS provider:

| Type  | Name  | Value                                                                  |
| ----- | ----- | ---------------------------------------------------------------------- |
| A     | `@`   | `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153` |
| AAAA  | `@`   | `2606:50c0:8000::153`, `2606:50c0:8001::153`, `2606:50c0:8002::153`, `2606:50c0:8003::153` |
| CNAME | `www` | `jkarnowski.github.io`                                                 |
