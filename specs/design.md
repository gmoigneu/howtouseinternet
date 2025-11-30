# Design Specification

## Overview

The design prioritizes readability and accessibility, creating a distraction-free learning environment.

## Typography

### Font Families

- **Headings**: Serif font (e.g., Libre Baskerville, Merriweather, or similar)
- **Body text**: Sans-serif font (e.g., Inter, Source Sans Pro, or similar)
- **Code**: Monospace font (e.g., JetBrains Mono, Fira Code)

### Font Sizes

| Element | Size | Line Height |
|---------|------|-------------|
| H1 | 2.5rem | 1.2 |
| H2 | 2rem | 1.25 |
| H3 | 1.5rem | 1.3 |
| H4 | 1.25rem | 1.35 |
| Body | 1.125rem | 1.7 |
| Small | 0.875rem | 1.5 |

### Readability

- Maximum content width: 65-75 characters per line
- Generous paragraph spacing
- Adequate contrast ratios (WCAG AA minimum)

## Color Palette

### Light Mode

| Token | Usage | Value |
|-------|-------|-------|
| `--color-text` | Primary text | #1a1a1a |
| `--color-text-muted` | Secondary text | #666666 |
| `--color-background` | Page background | #ffffff |
| `--color-surface` | Card/section background | #f8f9fa |
| `--color-border` | Borders | #e5e5e5 |
| `--color-primary` | Links, accents | #0066cc |
| `--color-primary-hover` | Link hover | #004499 |

### Dark Mode

| Token | Usage | Value |
|-------|-------|-------|
| `--color-text` | Primary text | #f0f0f0 |
| `--color-text-muted` | Secondary text | #a0a0a0 |
| `--color-background` | Page background | #121212 |
| `--color-surface` | Card/section background | #1e1e1e |
| `--color-border` | Borders | #333333 |
| `--color-primary` | Links, accents | #66b3ff |
| `--color-primary-hover` | Link hover | #99ccff |

## Spacing

Use a consistent spacing scale based on 0.25rem increments:

| Token | Value |
|-------|-------|
| `--space-1` | 0.25rem |
| `--space-2` | 0.5rem |
| `--space-3` | 0.75rem |
| `--space-4` | 1rem |
| `--space-6` | 1.5rem |
| `--space-8` | 2rem |
| `--space-12` | 3rem |
| `--space-16` | 4rem |

## Layout

### Page Structure

```
┌─────────────────────────────────────┐
│            Header/Nav               │
├─────────────────────────────────────┤
│                                     │
│           Main Content              │
│         (max-width: 800px)          │
│                                     │
├─────────────────────────────────────┤
│              Footer                 │
└─────────────────────────────────────┘
```

### Course Page Layout

```
┌─────────────────────────────────────┐
│            Header/Nav               │
├──────────┬──────────────────────────┤
│          │                          │
│ Chapter  │     Course Content       │
│   Nav    │                          │
│ (sticky) │                          │
│          │                          │
├──────────┴──────────────────────────┤
│              Footer                 │
└─────────────────────────────────────┘
```

### Responsive Breakpoints

| Name | Width |
|------|-------|
| Mobile | < 640px |
| Tablet | 640px - 1024px |
| Desktop | > 1024px |

## Components

### Navigation

- Clean, minimal header
- Language switcher
- Mobile hamburger menu

### Course Card

- Title (serif)
- Description (2 lines max)
- Metadata (difficulty, time)
- Subtle hover effect

### Chapter Navigation

- Sticky sidebar on desktop
- Collapsible on mobile
- Current chapter highlighted
- Progress indicator

### Callouts

Types:
- **Info**: Neutral information
- **Tip**: Helpful suggestions
- **Warning**: Important cautions
- **Example**: Practical demonstrations

## Accessibility

- WCAG 2.1 AA compliance minimum
- Keyboard navigation support
- Screen reader friendly
- Focus indicators
- Skip links
- Alt text for images
- Sufficient color contrast

## Animations

- Subtle, purposeful transitions
- Respect `prefers-reduced-motion`
- No distracting animations
- Smooth scroll behavior
