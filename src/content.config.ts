import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const courses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()),
    objectives: z.array(z.string()),
    updated_at: z.coerce.date(),
    author: z.string(),
    readingTime: z.number().min(1),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    prerequisites: z.array(z.string()).optional(),
  }),
});

export const collections = { courses };
