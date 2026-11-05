import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Species = CollectionEntry<'species'>;
export type Stock = Species['data']['formats'][number]['stock'];

/** All species, sorted by name in the given language. */
export async function getSpecies(lang: Lang) {
  const all = await getCollection('species');
  return all.sort((a, b) => a.data.name[lang].localeCompare(b.data.name[lang], lang));
}

export function formatHeight([min, max]: [number, number]) {
  return min === max ? `${min} m` : `${min}–${max} m`;
}

/** Best stock status across a species' pot sizes (same rule as the Lovable MVP). */
export function overallStock(species: Species): Stock {
  const stocks = species.data.formats.map((f) => f.stock);
  for (const s of ['disponible', 'pocas', 'proximamente'] as const) {
    if (stocks.includes(s)) return s;
  }
  return 'agotado';
}
