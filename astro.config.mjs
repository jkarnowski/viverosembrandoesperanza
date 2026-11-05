// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://jkarnowski.github.io/viverosembrandoesperanza/
// If a custom domain is added later, set `site` to it, remove `base`,
// and add public/CNAME with the domain.
export default defineConfig({
  site: 'https://jkarnowski.github.io',
  base: '/viverosembrandoesperanza',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
