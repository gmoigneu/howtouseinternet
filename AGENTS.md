# AGENTS.md

Guidelines for AI assistants working on this project.

## Project Overview

How To Use Internet is a knowledge website built with Astro, providing free courses about internet concepts, security, and AI usage.

## Technology Stack

- **Framework**: Astro (static site generator)
- **Content**: Markdown files
- **Styling**: CSS with serif fonts for titles, sans-serif for content
- **Languages**: Multi-language support (i18n)

## Content Structure

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

### Hierarchy

1. **Category**: Broad subject area (e.g., "security", "technology", "ai")
2. **Topic**: Specific subject within category (e.g., "passwords", "networking")
3. **Course**: Folder containing locale-specific markdown files

### Course File Format

Courses are markdown files named by locale (e.g., `en.md`, `fr.md`) with frontmatter and chapter sections:

```markdown
---
title: "Course title in sentence case"
description: "Course description"
keywords:
  - keyword1
  - keyword2
objectives:
  - Learning objective 1
  - Learning objective 2
updated_at: 2024-01-15
author: "Author Name"
---

## Chapter 1: Introduction

Content...

## Chapter 2: Next topic

Content...
```

### Title Capitalization

All titles and headings use **sentence case** (not title case):
- Capitalize only the first word and proper nouns
- Acronyms remain uppercase (e.g., "AI", "DNS")
- Example: "Understanding how AI actually works" (not "Understanding How AI Actually Works")

## Design Guidelines

- **Typography**: Serif fonts for headings, sans-serif for body text
- **Readability**: High contrast, generous line height, appropriate font sizes
- **Layout**: Clean, distraction-free, focused on content

## Accessibility (CRITICAL)

This project must be 100% accessible. Follow WCAG 2.1 Level AA and ARIA best practices.

### Key Requirements

- **Semantic HTML first**: Use native elements (`<nav>`, `<main>`, `<button>`) before ARIA
- **Keyboard navigation**: All interactive elements must be keyboard accessible
- **Focus indicators**: Visible focus states on all focusable elements
- **Skip links**: Include "Skip to main content" link
- **Heading hierarchy**: Single h1 per page, logical heading order
- **Language attributes**: Set `lang` on `<html>`, use `hreflang` for language links
- **Color contrast**: Minimum 4.5:1 for text, 3:1 for large text
- **Alt text**: All images must have appropriate alt text

### ARIA Guidelines

```html
<!-- Navigation landmarks -->
<nav aria-label="Main navigation">
<nav aria-label="Language selector">

<!-- Language links -->
<a href="/fr/..." lang="fr" hreflang="fr">Français</a>

<!-- Current page -->
<a href="..." aria-current="page">Current Page</a>

<!-- Course chapter navigation -->
<nav aria-label="Course chapters">
```

See `specs/accessibility.md` for complete guidelines.

## Coding Standards

### Astro Components

- Use `.astro` files for pages and components
- Keep components focused and single-purpose
- Use TypeScript for type safety

### CSS

- Use CSS custom properties for theming
- Mobile-first responsive design
- Prefer semantic class names

### Content

- Write in clear, accessible language
- Use examples and analogies
- Break complex topics into digestible sections
- Include practical exercises where appropriate

## Internationalization

Astro's built-in i18n routing is configured with locale-prefixed URLs.

### Configuration

- Locales: `en` (default), `fr`, `es`
- All URLs include locale prefix (`/en/`, `/fr/`, `/es/`)
- Root `/` redirects to `/en/`

### Translations

All translations are in `src/i18n/translations.ts`:

```typescript
import { t, getCategoryName, getTopicName } from '../i18n/translations';

t(locale, 'home')                    // UI strings
getCategoryName(locale, 'ai')        // Category names
getTopicName(locale, 'passwords')    // Topic names
```

### Adding New Translations

1. Add the locale to `astro.config.mjs` i18n.locales
2. Add translations to `src/i18n/translations.ts`
3. Create locale file in course folder (e.g., `de.md`)

See `specs/internationalization.md` for complete guidelines.

## File Naming Conventions

- Use kebab-case for files and folders
- Locale codes: ISO 639-1 (e.g., `en`, `fr`, `es`)
- Category/topic slugs: lowercase, hyphenated

## Specifications

Project specifications are documented in the `specs/` folder as markdown files. Always consult these specifications before making architectural decisions.

## Commands

```bash
pnpm dev      # Start development server
pnpm build    # Build for production
pnpm preview  # Preview production build
```

## MCP Servers

- **Astro Docs**: Use the `mcp__astro-docs__search_astro_docs` tool to search the official Astro documentation for framework-specific guidance.

## Important Notes

- This is an open-source project under Apache 2.0 license
- All content should be original or properly attributed
- Focus on accessibility and inclusivity
- Keep the codebase simple and maintainable
- You have access to the Chrome MCP to test the website if needed