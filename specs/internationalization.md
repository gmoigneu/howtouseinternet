# Internationalization Specification

## Overview

The website supports multiple languages to make content accessible globally. Astro's built-in i18n routing is configured with locale-prefixed URLs.

## Supported Locales

### Initial Launch

- English (`en`) - Default
- French (`fr`)
- Spanish (`es`)

### Future Additions

- German (`de`)
- Portuguese (`pt`)
- Arabic (`ar`) - RTL support
- Chinese Simplified (`zh`)
- Japanese (`ja`)

## Astro i18n Configuration

```javascript
// astro.config.mjs
export default defineConfig({
  i18n: {
    locales: ['en', 'fr', 'es'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
```

## URL Structure

Locale is the first segment of the URL path. Slugs remain in English for URL stability:

```
/{locale}/{category}/{topic}/{course}
```

**Examples:**
- `/en/ai/getting-better-at-using-ai/efficient-prompting`
- `/fr/ai/getting-better-at-using-ai/efficient-prompting`
- `/es/ai/getting-better-at-using-ai/efficient-prompting`

### Default Locale Handling

- All URLs include locale prefix (including default `en`)
- Root `/` redirects to `/en/`
- This ensures consistent URLs across all languages

## Content Structure

### Directory Structure

Courses are organized by category/topic/course, with locale-specific markdown files:

```
src/
└── content/
    └── courses/
        └── [category]/
            └── [topic]/
                └── [course-slug]/
                    ├── en.md
                    ├── fr.md
                    └── es.md
```

**Example:**
```
src/content/courses/ai/getting-better-at-using-ai/efficient-prompting/
├── en.md
├── fr.md
└── es.md
```

### Content Collection

Courses are defined as an Astro content collection in `src/content.config.ts`:

```typescript
const courses = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/courses' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.array(z.string()),
    objectives: z.array(z.string()),
    updated_at: z.coerce.date(),
    author: z.string(),
  }),
});
```

## UI Translations

### Location

All translations are in a single TypeScript file:

```
src/
└── i18n/
    └── translations.ts
```

### Structure

```typescript
export const translations = {
  en: {
    categories: {
      ai: 'AI',
      security: 'Security',
    },
    topics: {
      'getting-better-at-using-ai': 'Getting better at using AI',
    },
    ui: {
      home: 'Home',
      backToHome: '← Back to home',
      courses: 'Courses',
      chapters: 'Chapters',
      // ...
    },
  },
  fr: { /* ... */ },
  es: { /* ... */ },
};
```

### Helper Functions

```typescript
// Get UI string
t(locale, 'home') // → "Accueil" (for fr)

// Get localized category name
getCategoryName(locale, 'ai') // → "IA" (for fr)

// Get localized topic name
getTopicName(locale, 'getting-better-at-using-ai') // → "Mieux utiliser l'IA" (for fr)
```

## Language Switcher

### Behavior

1. Display current language
2. Show available translations for current page
3. If translation doesn't exist, link to home page in that language
4. Preserve user preference in localStorage

### UI

- Located in header
- Shows language code or name
- Dropdown with available languages

## RTL Support

For RTL languages (Arabic, Hebrew):

- Flip layout direction
- Use logical CSS properties (`margin-inline-start` vs `margin-left`)
- Mirror icons where appropriate
- Adjust text alignment

## SEO

### Hreflang Tags

```html
<link rel="alternate" hreflang="en" href="https://howtouseinternet.com/en/..." />
<link rel="alternate" hreflang="fr" href="https://howtouseinternet.com/fr/..." />
<link rel="alternate" hreflang="x-default" href="https://howtouseinternet.com/en/..." />
```

### Metadata Translation

Each locale version has translated:
- Page title
- Meta description
- Open Graph tags

## Content Fallback

If content is not available in requested locale:

1. Show notice that content is not yet translated
2. Offer to view in default language (English)
3. Link to contribute translation

## Translation Workflow

1. Content is authored in English first
2. Translation requests are tracked in issues
3. Community contributors can submit translations
4. Translations are reviewed before merging
