export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'es';

/**
 * Languages the site is currently published in. English strings and content are kept
 * so it can be switched back on: add 'en' here, add it to `locales` in astro.config.mjs,
 * and restore the route files under src/pages/en/ (see README).
 */
export const enabledLangs: readonly Lang[] = ['es'];

/** Localized URL segments for each section. */
export const routes = {
  home: { es: '', en: '' },
  species: { es: 'especies', en: 'species' },
  about: { es: 'nosotros', en: 'about' },
  contact: { es: 'contacto', en: 'contact' },
} as const;

export type Route = keyof typeof routes;

export const ui = {
  es: {
    'site.title': 'Vivero Sembrando Esperanza',
    'site.tagline': 'Vivero de árboles y arbustos nativos de Chile',
    'site.description':
      'Vivero de especies nativas de Chile: quillay, peumo, maitén, araucaria, notro y más. Plantas para jardines, reforestación y restauración ecológica.',
    'nav.home': 'Inicio',
    'nav.species': 'Especies',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.menu': 'Menú',
    'nav.skip': 'Saltar al contenido',
    'home.hero.title': 'Sembramos los árboles que siempre fueron de aquí',
    'home.hero.body':
      'Producimos árboles nativos de Chile para proyectos de reforestación, jardines y colegios.',
    'home.hero.cta': 'Ver especies',
    'home.hero.cta2': 'Escríbenos',
    'home.why.title': '¿Por qué plantar nativo?',
    'home.why.water.title': 'Menos riego',
    'home.why.water.body':
      'Las especies nativas están adaptadas al clima local; una vez establecidas, muchas necesitan poca agua.',
    'home.why.wildlife.title': 'Vida silvestre',
    'home.why.wildlife.body':
      'Dan alimento y refugio a aves, insectos polinizadores y otra fauna nativa.',
    'home.why.soil.title': 'Suelos sanos',
    'home.why.soil.body':
      'Protegen el suelo de la erosión y ayudan a recuperar quebradas, laderas y riberas.',
    'home.featured.title': 'Algunas de nuestras especies',
    'home.featured.all': 'Ver todas las especies',
    'home.visit.title': 'Visítanos en el vivero',
    'home.visit.body':
      'Te asesoramos para elegir la especie adecuada según tu espacio, suelo y clima.',
    'species.title': 'Especies',
    'species.intro':
      'Árboles y arbustos nativos que producimos en el vivero. Consulta disponibilidad y tamaños por WhatsApp o correo.',
    'species.filter.label': 'Filtrar por clima',
    'species.filter.all': 'Todas',
    'species.count': 'especies',
    'species.empty': 'No hay especies con ese filtro.',
    'species.family': 'Familia',
    'species.height': 'Altura adulta',
    'species.growth': 'Crecimiento',
    'species.sun': 'Luz',
    'species.water': 'Riego',
    'species.climate': 'Clima',
    'species.range': 'Distribución natural',
    'species.conservation': 'Estado de conservación',
    'species.uses': 'Usos',
    'species.ask': 'Consultar disponibilidad',
    'species.askMessage': 'Hola, quisiera consultar por disponibilidad de',
    'species.back': 'Volver a especies',
    'species.unavailable': 'Sin stock por ahora',
    'growth.slow': 'Lento',
    'growth.medium': 'Medio',
    'growth.fast': 'Rápido',
    'sun.full': 'Pleno sol',
    'sun.partial': 'Semisombra',
    'sun.shade': 'Sombra',
    'water.low': 'Bajo',
    'water.medium': 'Medio',
    'water.high': 'Alto',
    'climate.mediterranean': 'Mediterráneo',
    'climate.temperate': 'Templado lluvioso',
    'climate.cold': 'Frío de montaña',
    'conservation.VU': 'Vulnerable',
    'conservation.EN': 'En peligro',
    'about.title': 'Nosotros',
    'about.team': 'Equipo',
    'contact.title': 'Contacto',
    'contact.intro':
      'Escríbenos para consultar disponibilidad, precios, pedidos para proyectos o para coordinar una visita.',
    'contact.whatsapp': 'Escríbenos por WhatsApp',
    'contact.whatsappMessage': 'Hola, quisiera hacer una consulta sobre el vivero.',
    'contact.email': 'Correo',
    'contact.phone': 'Teléfono',
    'contact.address': 'Dirección',
    'contact.map': 'Ver en el mapa',
    'contact.hours': 'Horario',
    'footer.rights': 'Todos los derechos reservados.',
    'notFound.title': 'Página no encontrada',
    'notFound.body': 'La página que buscas no existe o fue movida.',
    'notFound.back': 'Volver al inicio',
  },
  en: {
    'site.title': 'Vivero Sembrando Esperanza',
    'site.tagline': 'Native tree and shrub nursery in Chile',
    'site.description':
      'Nursery growing native Chilean species: quillay, peumo, maitén, araucaria, notro and more. Plants for gardens, reforestation and ecological restoration.',
    'nav.home': 'Home',
    'nav.species': 'Species',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.skip': 'Skip to content',
    'home.hero.title': 'Growing the trees that always belonged here',
    'home.hero.body':
      'We grow native Chilean trees and shrubs for gardens, farms, schools and restoration projects.',
    'home.hero.cta': 'Browse species',
    'home.hero.cta2': 'Get in touch',
    'home.why.title': 'Why plant native?',
    'home.why.water.title': 'Less watering',
    'home.why.water.body':
      'Native species are adapted to the local climate; once established, many need little water.',
    'home.why.wildlife.title': 'Wildlife',
    'home.why.wildlife.body':
      'They provide food and shelter for birds, pollinating insects and other native fauna.',
    'home.why.soil.title': 'Healthy soil',
    'home.why.soil.body':
      'They protect soil from erosion and help restore ravines, hillsides and riverbanks.',
    'home.featured.title': 'Some of our species',
    'home.featured.all': 'See all species',
    'home.visit.title': 'Visit the nursery',
    'home.visit.body':
      'We help you choose the right species for your space, soil and climate.',
    'species.title': 'Species',
    'species.intro':
      'Native trees and shrubs we grow at the nursery. Ask about availability and sizes by WhatsApp or email.',
    'species.filter.label': 'Filter by climate',
    'species.filter.all': 'All',
    'species.count': 'species',
    'species.empty': 'No species match that filter.',
    'species.family': 'Family',
    'species.height': 'Mature height',
    'species.growth': 'Growth rate',
    'species.sun': 'Light',
    'species.water': 'Water',
    'species.climate': 'Climate',
    'species.range': 'Native range',
    'species.conservation': 'Conservation status',
    'species.uses': 'Uses',
    'species.ask': 'Ask about availability',
    'species.askMessage': 'Hello, I would like to ask about availability of',
    'species.back': 'Back to species',
    'species.unavailable': 'Out of stock for now',
    'growth.slow': 'Slow',
    'growth.medium': 'Medium',
    'growth.fast': 'Fast',
    'sun.full': 'Full sun',
    'sun.partial': 'Part shade',
    'sun.shade': 'Shade',
    'water.low': 'Low',
    'water.medium': 'Medium',
    'water.high': 'High',
    'climate.mediterranean': 'Mediterranean',
    'climate.temperate': 'Temperate rainy',
    'climate.cold': 'Cold mountain',
    'conservation.VU': 'Vulnerable',
    'conservation.EN': 'Endangered',
    'about.title': 'About us',
    'about.team': 'Team',
    'contact.title': 'Contact',
    'contact.intro':
      'Get in touch to ask about availability, prices, orders for projects, or to arrange a visit.',
    'contact.whatsapp': 'Message us on WhatsApp',
    'contact.whatsappMessage': 'Hello, I have a question about the nursery.',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.address': 'Address',
    'contact.map': 'View on map',
    'contact.hours': 'Opening hours',
    'footer.rights': 'All rights reserved.',
    'notFound.title': 'Page not found',
    'notFound.body': 'The page you are looking for does not exist or has moved.',
    'notFound.back': 'Back to home',
  },
} as const;

export type UiKey = keyof (typeof ui)['es'];

export function t(lang: Lang, key: UiKey) {
  return ui[lang][key] ?? ui[defaultLang][key];
}

/** Prefixes a site-relative path with the configured base (needed on GitHub Pages). */
export function url(path = '') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${path.replace(/^\//, '')}`;
}

/** Site-relative path for a section (and optional slug) in a language, e.g. "en/species/quillay/". */
export function routePath(lang: Lang, route: Route, slug?: string) {
  const parts = [lang === defaultLang ? '' : lang, routes[route][lang], slug].filter(Boolean);
  return parts.length ? `${parts.join('/')}/` : '';
}

/** Full href for a section in a language. */
export function href(lang: Lang, route: Route, slug?: string) {
  return url(routePath(lang, route, slug));
}
