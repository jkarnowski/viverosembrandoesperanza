import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const localized = z.object({ es: z.string(), en: z.string() });

// One Markdown file per species in src/content/species/. The file name is the URL slug.
const species = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/species' }),
  schema: z.object({
    name: localized,
    scientificName: z.string(),
    family: z.string(),
    /** Mature height range in metres, e.g. [10, 15]. */
    height: z.tuple([z.number(), z.number()]),
    growth: z.enum(['slow', 'medium', 'fast']),
    sun: z.enum(['full', 'partial', 'shade']),
    water: z.enum(['low', 'medium', 'high']),
    /** Climates the species does well in (used by the catalog filter). */
    climate: z.array(z.enum(['mediterranean', 'temperate', 'cold'])).min(1),
    range: localized,
    /** IUCN-style category, only for threatened species. */
    conservation: z.enum(['VU', 'EN']).optional(),
    summary: localized,
    description: localized,
    uses: localized,
    /** Evergreen or deciduous. */
    leaf: z.enum(['evergreen', 'deciduous']),
    soil: localized,
    frost: localized,
    /** Photo file in public/photos/. The coloured panel is shown when missing. */
    photo: z.string().optional(),
    /** Credit line for photos that aren't the nursery's own. */
    photoCredit: z.string().optional(),
    /** Pot sizes on offer and their stock. `units` is shown when set. */
    formats: z
      .array(
        z.object({
          name: z.string(),
          stock: z.enum(['disponible', 'pocas', 'agotado', 'proximamente']),
          units: z.number().int().nonnegative().optional(),
        }),
      )
      .min(1),
    /** Months (1–12) when the species is sold and planted. */
    months: z.array(z.number().int().min(1).max(12)).min(1),
    /** Shown on the home page when true. */
    featured: z.boolean().default(false),
    /** Card tint, any CSS colour. */
    color: z.string().default('#5f8a5a'),
  }),
});

// Long-form page text, one Markdown file per language: src/content/pages/<page>.<lang>.md
const pages = defineCollection({
  loader: glob({
    pattern: '*.md',
    base: './src/content/pages',
    // Keep the dot in ids like "about.es" (the default slugifier drops it).
    generateId: ({ entry }) => entry.replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = { species, pages };
