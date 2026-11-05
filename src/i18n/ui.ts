export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

export const ui = {
  es: {
    'site.title': 'Vivero Sembrando Esperanza',
    'site.tagline': 'Vivero de árboles nativos de Chile',
    'home.intro': 'Sitio en construcción.',
  },
  en: {
    'site.title': 'Vivero Sembrando Esperanza',
    'site.tagline': 'Native tree nursery in Chile',
    'home.intro': 'Site under construction.',
  },
} as const;

export function t(lang: Lang, key: keyof (typeof ui)['es']) {
  return ui[lang][key] ?? ui[defaultLang][key];
}

/** Prefixes a site-relative path with the configured base (needed on GitHub Pages). */
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}
