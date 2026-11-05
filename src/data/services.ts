import type { UiKey } from '../i18n/ui';

// The two services shown on the home and Servicios pages. Text lives in src/i18n/ui.ts.
export const services: { title: UiKey; body: UiKey; points: UiKey; icon: string }[] = [
  {
    title: 'services.seedlings.title',
    body: 'services.seedlings.body',
    points: 'services.seedlings.points',
    // seedling in a pot
    icon: 'M7 14h10l-1.5 6h-7L7 14Zm5 0V8m0 2c-2.5 0-4-1.6-4-4 2.5 0 4 1.6 4 4Zm0-1.5c0-2.6 1.7-4.5 4.5-4.5 0 2.6-1.7 4.5-4.5 4.5Z',
  },
  {
    title: 'services.care.title',
    body: 'services.care.body',
    points: 'services.care.points',
    // tree with a calendar ring
    icon: 'M12 21v-6m0 0c-3.3 0-6-2.5-6-5.6C6 6.4 8.7 3 12 3s6 3.4 6 6.4c0 3.1-2.7 5.6-6 5.6Zm-2.5-4.5L12 13l3-3',
  },
];
