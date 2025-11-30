import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

type CourseEntry = CollectionEntry<'courses'>;

export interface Chapter {
  slug: string;
  title: string;
  order: number;
  locale: string;
  content: CourseEntry;
}

export interface CourseInfo {
  type: 'single' | 'multi';
  category: string;
  topic: string;
  courseSlug: string;
  meta?: CourseEntry;
  chapters: Chapter[];
  availableLocales: string[];
}

interface ParsedId {
  category: string;
  topic: string;
  courseSlug: string;
  filename: string;
  locale: string;
  isChapter: boolean;
  isMeta: boolean;
  chapterOrder?: number;
  chapterSlug?: string;
}

/**
 * Parse course entry ID to extract components
 * Handles:
 * - Single-page courses: en (from en.md)
 * - Multi-chapter courses with locale suffix: 01-intro-en (from 01-intro-en.md)
 * - Meta files: _meta-en (from _meta-en.md)
 */
export function parseEntryId(id: string): ParsedId {
  const parts = id.split('/');
  const category = parts[0];
  const topic = parts[1];
  const courseSlug = parts[2];
  const filename = parts[3]; // Already has .md stripped by Astro

  // Check for locale suffix pattern: -en, -fr, -es at the end
  const localeMatch = filename.match(/^(.+)-([a-z]{2})$/);

  let locale: string;
  let baseName: string;

  if (localeMatch) {
    // Multi-chapter format: 01-intro-en or _meta-en
    baseName = localeMatch[1];
    locale = localeMatch[2];
  } else {
    // Single-page format: en, fr, es
    baseName = '';
    locale = filename;
  }

  const chapterMatch = baseName.match(/^(\d{2})-(.+)$/);
  const isMeta = baseName === '_meta';
  const isChapter = !!chapterMatch;

  return {
    category,
    topic,
    courseSlug,
    filename: baseName,
    locale,
    isChapter,
    isMeta,
    chapterOrder: chapterMatch ? parseInt(chapterMatch[1]) : undefined,
    chapterSlug: chapterMatch ? baseName : undefined,
  };
}

/**
 * Check if a course is multi-chapter based on its entries
 */
export function isMultiChapterCourse(entries: CourseEntry[]): boolean {
  return entries.some((entry) => parseEntryId(entry.id).isChapter);
}

/**
 * Get all information about a course
 */
export async function getCourseInfo(
  category: string,
  topic: string,
  courseSlug: string
): Promise<CourseInfo | null> {
  const allEntries = await getCollection('courses');

  const courseEntries = allEntries.filter((entry) => {
    const parsed = parseEntryId(entry.id);
    return (
      parsed.category === category &&
      parsed.topic === topic &&
      parsed.courseSlug === courseSlug
    );
  });

  if (courseEntries.length === 0) return null;

  const hasChapters = courseEntries.some((e) => parseEntryId(e.id).isChapter);
  const type = hasChapters ? 'multi' : 'single';

  const chapters: Chapter[] = [];
  let meta: CourseEntry | undefined;
  const localesSet = new Set<string>();

  for (const entry of courseEntries) {
    const parsed = parseEntryId(entry.id);
    localesSet.add(parsed.locale);

    if (parsed.isMeta) {
      if (!meta || parsed.locale === 'en') {
        meta = entry;
      }
    } else if (parsed.isChapter) {
      chapters.push({
        slug: parsed.chapterSlug!,
        title: entry.data.title,
        order: parsed.chapterOrder!,
        locale: parsed.locale,
        content: entry,
      });
    }
  }

  chapters.sort((a, b) => a.order - b.order);

  return {
    type,
    category,
    topic,
    courseSlug,
    meta,
    chapters,
    availableLocales: Array.from(localesSet),
  };
}

/**
 * Get chapters for a specific locale with fallback to English
 */
export function getChaptersForLocale(
  courseInfo: CourseInfo,
  locale: string
): Chapter[] {
  let chapters = courseInfo.chapters.filter((c) => c.locale === locale);
  if (chapters.length === 0) {
    chapters = courseInfo.chapters.filter((c) => c.locale === 'en');
  }
  return chapters.sort((a, b) => a.order - b.order);
}

/**
 * Get course metadata entry for a locale with fallback to English
 */
export async function getCourseMetaForLocale(
  category: string,
  topic: string,
  courseSlug: string,
  locale: string
): Promise<CourseEntry | undefined> {
  const allEntries = await getCollection('courses');

  const metaEntries = allEntries.filter((e) => {
    const parsed = parseEntryId(e.id);
    return (
      parsed.category === category &&
      parsed.topic === topic &&
      parsed.courseSlug === courseSlug &&
      parsed.isMeta
    );
  });

  return (
    metaEntries.find((e) => parseEntryId(e.id).locale === locale) ||
    metaEntries.find((e) => parseEntryId(e.id).locale === 'en')
  );
}

/**
 * Build the URL for a chapter
 */
export function getChapterUrl(
  locale: string,
  category: string,
  topic: string,
  courseSlug: string,
  chapterSlug?: string,
  isFirstChapter: boolean = false
): string {
  const basePath = `/${locale}/${category}/${topic}/${courseSlug}`;
  if (!chapterSlug || isFirstChapter) {
    return basePath;
  }
  return `${basePath}/${chapterSlug}`;
}

/**
 * Get previous and next chapters for navigation
 */
export function getChapterNavigation(
  chapters: Chapter[],
  currentChapterSlug: string,
  locale: string,
  category: string,
  topic: string,
  courseSlug: string
): {
  prev?: { slug: string; title: string; url: string };
  next?: { slug: string; title: string; url: string };
} {
  const currentIndex = chapters.findIndex((c) => c.slug === currentChapterSlug);

  const prev =
    currentIndex > 0
      ? {
          slug: chapters[currentIndex - 1].slug,
          title: chapters[currentIndex - 1].title,
          url: getChapterUrl(
            locale,
            category,
            topic,
            courseSlug,
            chapters[currentIndex - 1].slug,
            currentIndex - 1 === 0
          ),
        }
      : undefined;

  const next =
    currentIndex < chapters.length - 1
      ? {
          slug: chapters[currentIndex + 1].slug,
          title: chapters[currentIndex + 1].title,
          url: getChapterUrl(
            locale,
            category,
            topic,
            courseSlug,
            chapters[currentIndex + 1].slug,
            false
          ),
        }
      : undefined;

  return { prev, next };
}

/**
 * Group all courses by their path for static path generation
 */
export async function getAllCoursesPaths(): Promise<
  {
    category: string;
    topic: string;
    courseSlug: string;
    type: 'single' | 'multi';
    locales: string[];
  }[]
> {
  const allEntries = await getCollection('courses');
  const courseMap = new Map<
    string,
    { type: 'single' | 'multi'; locales: Set<string> }
  >();

  for (const entry of allEntries) {
    const parsed = parseEntryId(entry.id);
    const key = `${parsed.category}/${parsed.topic}/${parsed.courseSlug}`;

    if (!courseMap.has(key)) {
      courseMap.set(key, { type: 'single', locales: new Set() });
    }

    const course = courseMap.get(key)!;
    course.locales.add(parsed.locale);

    if (parsed.isChapter || parsed.isMeta) {
      course.type = 'multi';
    }
  }

  return Array.from(courseMap.entries()).map(([key, value]) => {
    const [category, topic, courseSlug] = key.split('/');
    return {
      category,
      topic,
      courseSlug,
      type: value.type,
      locales: Array.from(value.locales),
    };
  });
}
