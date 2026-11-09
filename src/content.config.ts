import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { categorySlugs } from './data/categories';

// Each journal post is a Markdown file in src/content/journal/.
const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Happy Hiatus'),
    category: z.enum(categorySlugs),
    moment: z.string().optional(), // e.g. "Toes in the sand"
    draft: z.boolean().default(false),
  }),
});

export const collections = { journal };
