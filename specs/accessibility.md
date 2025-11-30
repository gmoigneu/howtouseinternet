# Accessibility Specification

## Overview

How To Use Internet is committed to being 100% accessible. All pages and components must comply with WCAG 2.1 Level AA guidelines and follow ARIA (Accessible Rich Internet Applications) best practices.

## Core Principles

### 1. Perceivable

- **Text Alternatives**: All non-text content has text alternatives
- **Captions**: Video/audio content includes captions or transcripts
- **Adaptable**: Content can be presented in different ways without losing meaning
- **Distinguishable**: Content is easy to see and hear
  - Minimum contrast ratio of 4.5:1 for normal text
  - Minimum contrast ratio of 3:1 for large text (18px+ or 14px+ bold)

### 2. Operable

- **Keyboard Accessible**: All functionality available via keyboard
  - All interactive elements are focusable
  - Visible focus indicators on all focusable elements
  - No keyboard traps
  - Logical tab order follows visual order
- **Enough Time**: Users have enough time to read and use content
- **Seizures**: No content that flashes more than 3 times per second
- **Navigable**: Users can navigate and find content easily
  - Skip links to main content
  - Descriptive page titles
  - Meaningful heading hierarchy (h1 → h2 → h3)
  - Focus order matches visual order

### 3. Understandable

- **Readable**: Text is readable and understandable
  - Language declared on `<html>` element
  - Language changes marked with `lang` attribute
- **Predictable**: Pages behave in predictable ways
- **Input Assistance**: Help users avoid and correct mistakes

### 4. Robust

- **Compatible**: Content works with assistive technologies
  - Valid HTML
  - Proper ARIA usage
  - Name, role, and value available for all UI components

## ARIA Guidelines

### When to Use ARIA

1. **Use native HTML first**: Prefer semantic HTML over ARIA
   - Use `<button>` instead of `<div role="button">`
   - Use `<nav>` instead of `<div role="navigation">`
   - Use `<main>` instead of `<div role="main">`

2. **Add ARIA only when necessary**: When native HTML doesn't provide enough information

3. **Don't change native semantics**: Don't add conflicting roles to semantic elements

### Required ARIA Attributes

#### Landmarks
```html
<header>           <!-- banner landmark (implicit) -->
<nav>              <!-- navigation landmark (implicit) -->
<main>             <!-- main landmark (implicit) -->
<footer>           <!-- contentinfo landmark (implicit) -->
```

#### Navigation
```html
<nav aria-label="Main navigation">
<nav aria-label="Language selector">
```

#### Interactive Elements
```html
<!-- Current page in navigation -->
<a href="..." aria-current="page">

<!-- Expanded/collapsed state -->
<button aria-expanded="true/false">

<!-- Loading states -->
<button aria-busy="true">
```

#### Language Selector
```html
<nav aria-label="Language selector">
  <a href="/en/..." lang="en" hreflang="en">English</a>
  <a href="/fr/..." lang="fr" hreflang="fr">Français</a>
</nav>
```

### Common Patterns

#### Skip Link
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

#### Page Structure
```html
<html lang="en">
  <body>
    <a href="#main-content" class="skip-link">Skip to main content</a>
    <header>
      <nav aria-label="Main navigation">...</nav>
      <nav aria-label="Language selector">...</nav>
    </header>
    <main id="main-content">
      <article>
        <h1>Page Title</h1>
        ...
      </article>
    </main>
    <footer>...</footer>
  </body>
</html>
```

#### Course Navigation (Table of Contents)
```html
<nav aria-label="Course chapters">
  <h2>Chapters</h2>
  <ol>
    <li><a href="#chapter-1">Chapter 1: Introduction</a></li>
    ...
  </ol>
</nav>
```

## Implementation Checklist

### Every Page Must Have

- [ ] Declared language on `<html>` element
- [ ] Unique, descriptive `<title>`
- [ ] Skip link to main content
- [ ] Proper heading hierarchy (single h1, logical order)
- [ ] All images have alt text (or empty alt="" for decorative)
- [ ] All links have descriptive text (no "click here")
- [ ] Visible focus indicators
- [ ] Sufficient color contrast

### Interactive Components Must Have

- [ ] Keyboard accessibility
- [ ] Visible focus state
- [ ] Appropriate ARIA roles/states/properties
- [ ] Screen reader announcements for state changes

### Forms Must Have

- [ ] Labels associated with inputs
- [ ] Error messages linked to fields
- [ ] Clear validation feedback

## Testing Requirements

### Manual Testing

1. Navigate entire site using only keyboard
2. Test with screen reader (VoiceOver, NVDA, or JAWS)
3. Check color contrast with browser devtools
4. Verify heading hierarchy with browser extensions
5. Test at 200% zoom

### Automated Testing

- Use axe-core or similar for automated accessibility scanning
- Run Lighthouse accessibility audits
- Validate HTML

## Resources

- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [ARIA Authoring Practices Guide](https://www.w3.org/WAI/ARIA/apg/)
- [MDN Accessibility Guide](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
