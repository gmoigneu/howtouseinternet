import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const courses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/courses' }),
  schema: z.object({
    // Required for all files
    title: z.string(),
    // Optional - used for course metadata (_meta files) and single-page courses
    description: z.string().optional(),
    keywords: z.array(z.string()).optional(),
    objectives: z.array(z.string()).optional(),
    updated_at: z.coerce.date().optional(),
    author: z.string().optional(),
    readingTime: z.number().min(1).optional(),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
    prerequisites: z.array(z.string()).optional(),
  }),
});

export const collections = { courses };
