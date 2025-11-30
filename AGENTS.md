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
    └── [locale]/
        └── [category]/
            └── [topic]/
                └── [course].md
```

### Hierarchy

1. **Category**: Broad subject area (e.g., "security", "technology", "ai")
2. **Topic**: Specific subject within category (e.g., "passwords", "networking")
3. **Course**: Single markdown file containing multiple chapters

### Course File Format

Courses are single markdown files with frontmatter and chapter sections:

```markdown
---
title: "Course Title"
description: "Course description"
category: "security"
topic: "passwords"
locale: "en"
---

## Chapter 1: Introduction

Content...

## Chapter 2: Next Topic

Content...
```

## Design Guidelines

- **Typography**: Serif fonts for headings, sans-serif for body text
- **Readability**: High contrast, generous line height, appropriate font sizes
- **Layout**: Clean, distraction-free, focused on content
- **Accessibility**: WCAG compliant, keyboard navigable

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

- Default locale: English (`en`)
- Content files organized by locale
- UI strings in translation files
- RTL support for applicable languages

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
