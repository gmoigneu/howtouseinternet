# Internationalization Specification

## Overview

The website supports multiple languages to make content accessible globally.

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

## URL Structure

Locale is the first segment of the URL path:

```
/{locale}/{category}/{topic}/{course}
```

**Examples:**
- `/en/security/passwords/creating-strong-passwords`
- `/fr/securite/mots-de-passe/creer-mots-de-passe-forts`

### Default Locale Handling

- Default locale (`en`) may optionally omit the locale prefix
- `/security/passwords/...` redirects to `/en/security/passwords/...`

## Content Translation

### Directory Structure

Each locale has its own content directory:

```
src/
└── content/
    ├── en/
    │   └── security/
    │       └── passwords/
    │           └── creating-strong-passwords.md
    ├── fr/
    │   └── securite/
    │       └── mots-de-passe/
    │           └── creer-mots-de-passe-forts.md
    └── es/
        └── seguridad/
            └── contrasenas/
                └── crear-contrasenas-seguras.md
```

### Translation Keys

Category and topic names are translated:

| English | French | Spanish |
|---------|--------|---------|
| security | securite | seguridad |
| passwords | mots-de-passe | contrasenas |
| technology | technologie | tecnologia |

## UI Translations

### Location

```
src/
└── i18n/
    ├── en.json
    ├── fr.json
    └── es.json
```

### Format

```json
{
  "nav": {
    "home": "Home",
    "courses": "Courses",
    "about": "About"
  },
  "course": {
    "difficulty": "Difficulty",
    "estimatedTime": "Estimated time",
    "chapters": "Chapters"
  },
  "common": {
    "readMore": "Read more",
    "backTo": "Back to"
  }
}
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
