import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Species = CollectionEntry<'species'>;

/** All species, sorted by name in the given language. */
export async function getSpecies(lang: Lang) {
  const all = await getCollection('species');
  return all.sort((a, b) => a.data.name[lang].localeCompare(b.data.name[lang], lang));
}

export function formatHeight([min, max]: [number, number]) {
  return min === max ? `${min} m` : `${min}–${max} m`;
}
