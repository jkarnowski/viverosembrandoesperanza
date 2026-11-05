// @ts-check
import { defineConfig } from 'astro/config';

// Served from the custom domain via GitHub Pages. The domain itself is set in
// the repo's Settings → Pages (a CNAME file is ignored by Actions deploys).
export default defineConfig({
  site: 'https://viverosembrandoesperanza.cl',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
