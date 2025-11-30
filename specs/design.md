# Design Specification

## Overview

The design is inspired by modern Wikipedia redesigns - clean, elegant, and focused on readability. It prioritizes accessibility and creates a distraction-free learning environment.

## Typography

### Font Families

- **Headings**: Cormorant Garamond (elegant serif with high contrast)
- **Body text**: Inter (clean, highly readable sans-serif)
- **Navigation**: Inter (uppercase, letter-spaced for sidebar)
- **Code**: JetBrains Mono

### Font Sizes

| Element | Size | Weight | Line Height | Style |
|---------|------|--------|-------------|-------|
| H1 (Page title) | 4rem (64px) | 400 | 1.1 | Serif, elegant |
| H2 (Chapter) | 2.5rem (40px) | 400 | 1.2 | Serif |
| H3 (Section) | 1.5rem (24px) | 500 | 1.3 | Sans-serif |
| Body | 1.125rem (18px) | 400 | 1.8 | Sans-serif |
| Navigation | 0.75rem (12px) | 500 | 1.4 | Uppercase, letter-spacing 0.05em |
| Small/Meta | 0.875rem (14px) | 400 | 1.5 | Sans-serif, muted |

### Readability

- Maximum content width: 680px (approximately 75 characters)
- Generous paragraph spacing (1.5em margin-bottom)
- High contrast ratios (WCAG AAA where possible)

## Color Palette

### Light Mode (Primary)

| Token | Usage | Value |
|-------|-------|-------|
| `text` | Primary text | #1a1a1a |
| `text-muted` | Secondary text, nav items | #6b6b6b |
| `text-subtle` | Tertiary, hints | #999999 |
| `background` | Page background | #ffffff |
| `surface` | Cards, sections | #fafafa |
| `border` | Dividers, borders | #e5e5e5 |
| `link` | Links | #1a1a1a (underlined) |
| `link-hover` | Link hover | #000000 |

### Design Notes

- Links are **underlined** rather than colored (like Wikipedia)
- Navigation items are muted gray, current item is bold black
- Minimal use of color - black, white, grays only
- Focus states use black outline

## Spacing

Use Tailwind's default spacing scale. Key values:

| Usage | Tailwind Class | Value |
|-------|----------------|-------|
| Section gap | `gap-16` | 4rem |
| Paragraph gap | `mb-6` | 1.5rem |
| Component gap | `gap-8` | 2rem |
| Small gap | `gap-4` | 1rem |
| Inline gap | `gap-2` | 0.5rem |

## Layout

### Three-Column Layout (Desktop)

```
┌────────────────────────────────────────────────────────┐
│  Logo          Article | Talk        Search    User    │
├──────────┬─────────────────────────────┬───────────────┤
│          │                             │               │
│ CHAPTER  │      Main Content           │   (Optional)  │
│ NAV      │      max-width: 680px       │   Right       │
│          │                             │   Sidebar     │
│ Sticky   │                             │               │
│ Uppercase│                             │               │
│ Muted    │                             │               │
│          │                             │               │
├──────────┴─────────────────────────────┴───────────────┤
│                      Footer                            │
└────────────────────────────────────────────────────────┘
```

### Grid Structure

- **Sidebar**: 200px fixed width
- **Content**: flex-1, max-width 680px
- **Gap**: 4rem between columns

### Responsive Breakpoints

| Name | Width | Layout |
|------|-------|--------|
| Mobile | < 768px | Single column, hamburger menu |
| Tablet | 768px - 1024px | Two columns, sidebar collapsible |
| Desktop | > 1024px | Full three-column layout |

## Components

### Header

- Clean horizontal bar
- Logo on left (serif font)
- Minimal navigation center (Article | Talk style)
- Search and language on right
- Bottom border (1px #e5e5e5)

### Sidebar Navigation

- Fixed position on desktop
- Uppercase text (0.75rem, letter-spacing 0.05em)
- Muted gray (#6b6b6b)
- Current section: Bold black
- No bullets, clean list
- Section dividers with extra spacing

### Chapter Navigation (Course Page)

```html
<nav aria-label="Course chapters">
  <div class="uppercase text-xs tracking-wide font-medium text-muted mb-4">
    EARLY LIFE
  </div>
  <a class="text-muted hover:text-black">CAREER</a>
  <a class="text-muted hover:text-black">PERSONAL LIFE</a>
  ...
</nav>
```

### Content Typography

- H1: Large serif, elegant, 4rem
- H2: Medium serif, 2.5rem, chapter headings
- Paragraphs: 18px, 1.8 line-height, comfortable reading
- Links: Underlined, black (not blue)
- Lists: Standard bullets, adequate spacing

### Footer

- Minimal
- Copyright text
- Muted color
- Top border

## Accessibility

- WCAG 2.1 AA compliance minimum
- Keyboard navigation support
- Screen reader friendly
- Focus indicators (black outline, 2px)
- Skip links
- Alt text for images
- Minimum 4.5:1 contrast ratio

## Animations

- Subtle, purposeful transitions
- Respect `prefers-reduced-motion`
- Hover transitions: 150ms ease
- No distracting animations
- Smooth scroll behavior for anchor links
