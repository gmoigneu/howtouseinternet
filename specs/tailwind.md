# Tailwind CSS v4 Specification

## Overview

This project uses Tailwind CSS v4, which introduces significant changes from v3 including CSS-first configuration, native CSS cascade layers, and improved performance.

## Installation

```bash
pnpm add tailwindcss @tailwindcss/postcss
```

## Configuration

### CSS-First Configuration

Tailwind v4 uses CSS-based configuration instead of `tailwind.config.js`. All customizations are defined in the main CSS file.

```css
@import "tailwindcss";

@theme {
  /* Custom theme values */
}
```

### Theme Configuration

Define custom theme values using the `@theme` directive:

```css
@import "tailwindcss";

@theme {
  /* Typography */
  --font-serif: "Libre Baskerville", "Georgia", serif;
  --font-sans: "Inter", "system-ui", sans-serif;
  --font-mono: "JetBrains Mono", "Fira Code", monospace;

  /* Colors - Light Mode Base */
  --color-text: #1a1a1a;
  --color-text-muted: #666666;
  --color-background: #ffffff;
  --color-surface: #f8f9fa;
  --color-border: #e5e5e5;
  --color-primary: #0066cc;
  --color-primary-hover: #004499;

  /* Spacing Scale */
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-3: 0.75rem;
  --spacing-4: 1rem;
  --spacing-6: 1.5rem;
  --spacing-8: 2rem;
  --spacing-12: 3rem;
  --spacing-16: 4rem;

  /* Content Width */
  --width-content: 800px;
  --width-content-wide: 1200px;

  /* Breakpoints */
  --breakpoint-sm: 640px;
  --breakpoint-md: 768px;
  --breakpoint-lg: 1024px;
  --breakpoint-xl: 1280px;
}
```

### Dark Mode

Use the `@variant` directive for dark mode styles:

```css
@variant dark (&:where(.dark, .dark *));
```

Or use the built-in `dark:` variant with system preference:

```css
@import "tailwindcss";

@theme {
  --color-text: #1a1a1a;
  --color-text-dark: #f0f0f0;
  --color-background: #ffffff;
  --color-background-dark: #121212;
}
```

## Astro Integration

### PostCSS Configuration

Create `postcss.config.mjs`:

```js
export default {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};
```

### Main Stylesheet

Create `src/styles/global.css`:

```css
@import "tailwindcss";

@theme {
  /* Font families from design spec */
  --font-serif: "Libre Baskerville", "Georgia", serif;
  --font-sans: "Inter", "system-ui", sans-serif;
  --font-mono: "JetBrains Mono", "Fira Code", monospace;

  /* Colors */
  --color-text: #1a1a1a;
  --color-text-muted: #666666;
  --color-background: #ffffff;
  --color-surface: #f8f9fa;
  --color-border: #e5e5e5;
  --color-primary: #0066cc;
  --color-primary-hover: #004499;

  /* Typography scale */
  --text-sm: 0.875rem;
  --text-base: 1.125rem;
  --text-lg: 1.25rem;
  --text-xl: 1.5rem;
  --text-2xl: 2rem;
  --text-3xl: 2.5rem;

  /* Line heights */
  --leading-tight: 1.2;
  --leading-snug: 1.35;
  --leading-normal: 1.5;
  --leading-relaxed: 1.7;
}

/* Dark mode overrides */
@media (prefers-color-scheme: dark) {
  :root {
    --color-text: #f0f0f0;
    --color-text-muted: #a0a0a0;
    --color-background: #121212;
    --color-surface: #1e1e1e;
    --color-border: #333333;
    --color-primary: #66b3ff;
    --color-primary-hover: #99ccff;
  }
}
```

### Import in Layout

In `src/layouts/BaseLayout.astro`:

```astro
---
import "../styles/global.css";
---

<html>
  <head>
    <!-- head content -->
  </head>
  <body class="bg-background text-text font-sans">
    <slot />
  </body>
</html>
```

## Usage Guidelines

### Typography

```html
<!-- Headings use serif font -->
<h1 class="font-serif text-3xl leading-tight">Page Title</h1>
<h2 class="font-serif text-2xl leading-snug">Section Title</h2>

<!-- Body text uses sans-serif -->
<p class="font-sans text-base leading-relaxed">Body content...</p>

<!-- Code uses monospace -->
<code class="font-mono text-sm">code example</code>
```

### Layout

```html
<!-- Centered content container -->
<main class="mx-auto max-w-[800px] px-4">
  <!-- content -->
</main>

<!-- Course page with sidebar -->
<div class="lg:grid lg:grid-cols-[250px_1fr] lg:gap-8">
  <aside class="lg:sticky lg:top-4 lg:self-start">
    <!-- chapter nav -->
  </aside>
  <article>
    <!-- course content -->
  </article>
</div>
```

### Responsive Design

Use mobile-first approach with breakpoint prefixes:

```html
<div class="px-4 md:px-6 lg:px-8">
  <nav class="hidden lg:block"><!-- desktop nav --></nav>
  <nav class="lg:hidden"><!-- mobile nav --></nav>
</div>
```

### Colors

Use semantic color tokens:

```html
<div class="bg-background text-text">
  <p class="text-text-muted">Secondary text</p>
  <a class="text-primary hover:text-primary-hover">Link</a>
  <div class="border-border bg-surface">Card</div>
</div>
```

## Custom Components

### Callout Styles

```css
@layer components {
  .callout {
    @apply rounded-lg border-l-4 p-4 my-6;
  }

  .callout-info {
    @apply bg-blue-50 border-blue-500 dark:bg-blue-950;
  }

  .callout-tip {
    @apply bg-green-50 border-green-500 dark:bg-green-950;
  }

  .callout-warning {
    @apply bg-amber-50 border-amber-500 dark:bg-amber-950;
  }
}
```

### Prose Styles for Course Content

```css
@layer components {
  .prose {
    @apply text-text leading-relaxed;

    h1,
    h2,
    h3,
    h4 {
      @apply font-serif text-text;
    }

    h1 {
      @apply text-3xl leading-tight mt-0 mb-8;
    }
    h2 {
      @apply text-2xl leading-snug mt-12 mb-4;
    }
    h3 {
      @apply text-xl leading-snug mt-8 mb-3;
    }

    p {
      @apply my-4;
    }

    a {
      @apply text-primary hover:text-primary-hover underline;
    }

    code {
      @apply font-mono text-sm bg-surface px-1.5 py-0.5 rounded;
    }

    pre {
      @apply bg-surface p-4 rounded-lg overflow-x-auto my-6;
    }

    ul,
    ol {
      @apply my-4 pl-6;
    }

    li {
      @apply my-2;
    }
  }
}
```

## v4 Migration Notes

### Key Changes from v3

1. **No `tailwind.config.js`**: Configuration is now in CSS using `@theme`
2. **Native CSS imports**: Use `@import "tailwindcss"` instead of `@tailwind` directives
3. **CSS cascade layers**: Tailwind uses native `@layer` for better specificity control
4. **Improved dark mode**: Native CSS support for color scheme preferences
5. **No JIT mode toggle**: Always uses on-demand compilation
6. **Simplified PostCSS**: Uses `@tailwindcss/postcss` plugin

### Removed Features

- `@apply` still works but prefer utility classes in templates
- `theme()` function replaced by CSS custom properties
- Config file is optional and only for advanced cases

### New Features

- CSS-native configuration with `@theme`
- Better IDE support with standard CSS
- Smaller bundle sizes
- Faster builds
- Native container queries support

## File Structure

```
src/
└── styles/
    └── global.css      # Main stylesheet with Tailwind imports and theme
```

## Performance Considerations

- Tailwind v4 automatically tree-shakes unused styles
- Use `@layer components` for reusable component styles
- Prefer utility classes over custom CSS when possible
- CSS custom properties enable efficient theming without duplication
