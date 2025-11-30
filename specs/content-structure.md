# Content Structure Specification

## Overview

Content is organized in a three-level hierarchy: Category > Topic > Course.

## Hierarchy

### Category

Broad subject areas that group related topics.

**Examples:**
- `technology` - How the internet and web technologies work
- `security` - Online safety and privacy
- `ai` - Artificial intelligence and its applications
- `productivity` - Digital tools and efficiency

### Topic

Specific subjects within a category.

**Examples under `security`:**
- `passwords` - Password management and best practices
- `privacy` - Protecting personal information
- `scams` - Recognizing and avoiding online scams

### Course

A complete learning unit containing multiple chapters. Each course is a single markdown file.

## Directory Structure

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
src/
└── content/
    └── courses/
        └── security/
            └── passwords/
                ├── creating-strong-passwords/
                │   ├── en.md
                │   ├── fr.md
                │   └── es.md
                └── password-managers/
                    ├── en.md
                    └── fr.md
```

## Course File Format

### Frontmatter

```yaml
---
title: "Creating Strong Passwords"
description: "Learn how to create and remember secure passwords"
keywords:
  - passwords
  - security
  - authentication
objectives:
  - Understand why strong passwords matter
  - Learn techniques for creating memorable yet secure passwords
  - Know when to use a password manager
updated_at: 2024-01-15
author: "Contributor Name"
---
```

### Chapter Structure

Chapters are defined using H2 headings (`##`):

```markdown
## Chapter 1: Why Passwords Matter

Content for chapter 1...

## Chapter 2: Password Best Practices

Content for chapter 2...

## Chapter 3: Using Password Managers

Content for chapter 3...
```

### Content Guidelines

- Each chapter should be self-contained but build on previous ones
- Use H3 (`###`) for subsections within chapters
- Include practical examples and exercises
- Add callouts for important information
- Keep paragraphs short and scannable

## URL Structure

URLs follow the content hierarchy:

```
/{locale}/{category}/{topic}/{course-slug}
```

**Examples:**
- `/en/security/passwords/creating-strong-passwords`
- `/fr/technology/networking/how-internet-works`

## Metadata

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| title | string | Course title |
| description | string | Brief course description (1-2 sentences) |
| keywords | array | List of keywords for search and SEO |
| objectives | array | Learning objectives (what the reader will learn) |
| updated_at | date | Last modification date (YYYY-MM-DD) |
| author | string | Content author name |

### Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| difficulty | enum | beginner, intermediate, advanced |
| estimatedTime | string | Estimated reading time |
| prerequisites | array | Required prior courses |
