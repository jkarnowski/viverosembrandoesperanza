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
  services: { es: 'servicios', en: 'services' },
  about: { es: 'nosotros', en: 'about' },
  contact: { es: 'contacto', en: 'contact' },
} as const;

export type Route = keyof typeof routes;

export const ui = {
  es: {
    'site.title': 'Vivero Sembrando Esperanza',
    'site.tagline': 'Vivero familiar de árboles nativos de Chile',
    'site.description':
      'Vivero de especies nativas de Chile: quillay, peumo, maitén, araucaria, notro y más. Venta de plantines desde 500 unidades y mantención forestal durante el primer año.',
    'nav.home': 'Inicio',
    'nav.species': 'Especies',
    'nav.services': 'Servicios',
    'nav.about': 'Nosotros',
    'nav.contact': 'Contacto',
    'nav.menu': 'Menú',
    'nav.skip': 'Saltar al contenido',
    'home.hero.title': 'Sembramos los árboles que siempre fueron de aquí',
    'home.hero.body':
      'Producimos árboles nativos de Chile para proyectos de reforestación, jardines y colegios.',
    'home.hero.cta': 'Ver especies',
    'home.hero.cta2': 'Solicitar cotización',
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
    'home.featured.title': 'Nuestros árboles',
    'home.featured.all': 'Ver todos nuestros árboles',
    'home.services.title': 'Qué ofrecemos',
    'home.services.more': 'Ver servicios',
    'home.family.eyebrow': 'Un proyecto familiar',
    'home.family.title': 'Un legado que se planta',
    'home.family.body':
      'Somos Pablo y Jaclyn, un matrimonio con tres hijos. Seguimos el camino que comenzó el padre de Pablo al plantar más de mil árboles en el campo familiar cerca de Lautaro, y sembramos para que nuestros hijos, y los suyos, hereden una tierra más viva.',
    'home.family.cta': 'Conoce nuestra historia',
    'home.quote.title': '¿Tienes un proyecto de reforestación?',
    'home.quote.body':
      'Cuéntanos qué especies y cuántos plantines necesitas. El pedido mínimo es de 500 plantines.',
    'species.title': 'Especies',
    'species.intro':
      'Árboles nativos que producimos en el vivero. Vendemos plantines en pedidos desde 500 unidades, y puedes combinar especies.',
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
    'species.ask': 'Cotizar plantines',
    'species.askMessage': 'Hola, quisiera cotizar plantines (pedido mínimo 500) de',
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
    'about.team': 'Una familia que siembra',
    'about.teamIntro':
      'Pablo y Jaclyn están casados y tienen tres hijos. Este vivero es su legado familiar: árboles que crecerán junto a sus hijos y seguirán en pie para las generaciones que vienen.',
    'services.title': 'Servicios',
    'services.intro':
      'Producimos plantines de árboles nativos para proyectos de reforestación y te acompañamos durante el primer año para que tus árboles crezcan sanos.',
    'services.seedlings.title': 'Venta de plantines',
    'services.seedlings.body':
      'Plantines de especies nativas producidos en nuestro vivero, listos para plantar.',
    'services.seedlings.points': 'Pedido mínimo de 500 plantines|Puedes combinar distintas especies en un mismo pedido|Te ayudamos a elegir las especies según el clima de tu terreno',
    'services.care.title': 'Mantención forestal por un año',
    'services.care.body':
      'Cuidamos los árboles durante su primer año en terreno, la etapa más crítica, para aumentar las probabilidades de que crezcan sanos.',
    'services.care.points': 'Seguimiento durante 12 meses después de la plantación|Visitas en terreno de nuestro equipo|Tecnología de monitoreo para detectar problemas a tiempo',
    'services.approach.title': 'Personas y tecnología',
    'services.approach.body':
      'Combinamos el conocimiento y el cuidado de nuestro equipo en terreno con herramientas tecnológicas de monitoreo. Así detectamos a tiempo lo que cada árbol necesita.',
    'services.minOrder': 'Pedido mínimo',
    'services.minOrderValue': '500 plantines',
    'services.cta': 'Solicitar cotización',
    'services.ctaMessage': 'Hola, quisiera cotizar plantines y el servicio de mantención forestal.',
    'contact.title': 'Contacto',
    'contact.intro':
      'Escríbenos para cotizar plantines (pedido mínimo de 500 unidades) o el servicio de mantención forestal durante el primer año.',
    'contact.whatsapp': 'Escríbenos por WhatsApp',
    'contact.whatsappMessage': 'Hola, quisiera cotizar plantines nativos.',
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
    'site.tagline': 'Family-run native tree nursery in Chile',
    'site.description':
      'Nursery growing native Chilean species: quillay, peumo, maitén, araucaria, notro and more. Seedlings sold from 500 units, plus forest care during the first year.',
    'nav.home': 'Home',
    'nav.species': 'Species',
    'nav.services': 'Services',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.skip': 'Skip to content',
    'home.hero.title': 'Growing the trees that always belonged here',
    'home.hero.body':
      'We grow native Chilean trees and shrubs for gardens, farms, schools and restoration projects.',
    'home.hero.cta': 'Browse species',
    'home.hero.cta2': 'Request a quote',
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
    'home.featured.title': 'Our trees',
    'home.featured.all': 'See all our trees',
    'home.services.title': 'What we offer',
    'home.services.more': 'See services',
    'home.family.eyebrow': 'A family project',
    'home.family.title': 'A legacy you can plant',
    'home.family.body':
      "We are Pablo and Jaclyn, a married couple with three children. We follow the path Pablo's father began when he planted more than a thousand trees on the family land near Lautaro, and we plant so that our children, and theirs, inherit a more living land.",
    'home.family.cta': 'Read our story',
    'home.quote.title': 'Planning a reforestation project?',
    'home.quote.body':
      'Tell us which species and how many seedlings you need. The minimum order is 500 seedlings.',
    'species.title': 'Species',
    'species.intro':
      'Native trees we grow at the nursery. We sell seedlings in orders of 500 or more, and you can mix species.',
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
    'species.ask': 'Request a quote',
    'species.askMessage': 'Hello, I would like a quote for seedlings (minimum order 500) of',
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
    'about.team': 'A family that plants',
    'about.teamIntro':
      'Pablo and Jaclyn are married with three children. This nursery is their family legacy: trees that will grow up alongside their children and still be standing for the generations to come.',
    'services.title': 'Services',
    'services.intro':
      'We grow native tree seedlings for reforestation projects and stay with you through the first year so your trees grow healthy.',
    'services.seedlings.title': 'Seedling sales',
    'services.seedlings.body': 'Native species seedlings grown at our nursery, ready to plant.',
    'services.seedlings.points': 'Minimum order of 500 seedlings|Mix different species in one order|We help you choose species for your site\'s climate',
    'services.care.title': 'One year of forest care',
    'services.care.body':
      'We look after the trees during their first year in the ground, the most critical stage, to improve their chances of healthy growth.',
    'services.care.points': '12 months of follow-up after planting|Site visits from our team|Monitoring technology to catch problems early',
    'services.approach.title': 'People and technology',
    'services.approach.body':
      'We combine our field team\'s knowledge and care with technology-based monitoring, so we can spot early what each tree needs.',
    'services.minOrder': 'Minimum order',
    'services.minOrderValue': '500 seedlings',
    'services.cta': 'Request a quote',
    'services.ctaMessage': 'Hello, I would like a quote for seedlings and the forest care service.',
    'contact.title': 'Contact',
    'contact.intro':
      'Get in touch for a quote on seedlings (minimum order 500) or our first-year forest care service.',
    'contact.whatsapp': 'Message us on WhatsApp',
    'contact.whatsappMessage': 'Hello, I would like a quote for native seedlings.',
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
