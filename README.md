# How To Use Internet

A free, open-source knowledge website teaching essential internet concepts to everyone. Learn how the internet works, online security, efficient AI usage, and more.

**Website:** [howtouseinternet.com](https://howtouseinternet.com)

## About

How To Use Internet provides accessible courses explaining the main concepts of the internet. Our mission is to help everyone understand and navigate the digital world safely and effectively.

### Topics Covered

- **How the Internet Works** - Understanding the technology behind the web
- **Online Security** - Protecting yourself and your data online
- **Using AI Efficiently** - Getting the most out of AI tools
- And more...

## Content Structure

Content is organized in a three-level hierarchy:

```
Category
└── Topic
    └── Course (contains multiple chapters)
```

- **Category**: Broad subject areas (e.g., Security, Technology)
- **Topic**: Specific subjects within a category (e.g., Password Management)
- **Course**: Complete learning material with multiple chapters in a single markdown file

## Internationalization

The website supports multiple languages to make content accessible globally.

### Supported Languages

- English (default)
- French
- Spanish

### URL Structure

All URLs are prefixed with locale code:
- `/en/ai/getting-better-at-using-ai/efficient-prompting`
- `/fr/ai/getting-better-at-using-ai/efficient-prompting`

### Translation System

- **Content**: Each course has locale-specific markdown files (`en.md`, `fr.md`, `es.md`)
- **UI Strings**: Centralized in `src/i18n/translations.ts`
- **Category/Topic Names**: Localized display names with stable English URL slugs

### Adding a New Language

1. Add locale to `astro.config.mjs`
2. Add translations to `src/i18n/translations.ts`
3. Create translated course files (e.g., `de.md`)

## Technology

Built with [Astro](https://astro.build/) as a static site generator for fast, accessible pages.

## Accessibility

This project is committed to being 100% accessible, following WCAG 2.1 Level AA guidelines and ARIA best practices.

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatible
- High contrast colors
- Skip links and proper focus management

## Design Philosophy

- Highly readable typography
- Serif fonts for titles
- Sans-serif fonts for content
- Clean, distraction-free layout

## Development

### Prerequisites

- Node.js 18+
- pnpm

### Commands

| Command          | Action                                      |
| :--------------- | :------------------------------------------ |
| `pnpm install`   | Install dependencies                        |
| `pnpm dev`       | Start local dev server at `localhost:4321`  |
| `pnpm build`     | Build production site to `./dist/`          |
| `pnpm preview`   | Preview build locally before deploying      |

## Contributing

We welcome contributions! Please see our contributing guidelines for more information.

## License

This project is licensed under the Apache License, Version 2.0. See [LICENSE](LICENSE) for details.
