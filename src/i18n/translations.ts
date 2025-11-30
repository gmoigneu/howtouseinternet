export const locales = ['en', 'fr', 'es'] as const;
export type Locale = (typeof locales)[number];

export const translations: Record<Locale, Translation> = {
  en: {
    categories: {
      ai: 'AI',
      security: 'Security',
      technology: 'Technology',
      productivity: 'Productivity',
    },
    topics: {
      'getting-better-at-using-ai': 'Getting better at using AI',
      passwords: 'Passwords',
      privacy: 'Privacy',
      scams: 'Scams',
      networking: 'Networking',
    },
    ui: {
      home: 'Home',
      backToHome: '← Back to home',
      backTo: '← Back to',
      courses: 'Courses',
      course: 'course',
      topics: 'Topics',
      whatYoullLearn: "What you'll learn",
      chapters: 'Chapters',
      author: 'Author',
      lastUpdated: 'Last updated',
      notTranslated: 'This course is not yet available in your language. Showing English version.',
      siteTitle: 'How To Use Internet',
      siteDescription: 'Free courses about internet concepts, security, and AI usage.',
    },
  },
  fr: {
    categories: {
      ai: 'IA',
      security: 'Sécurité',
      technology: 'Technologie',
      productivity: 'Productivité',
    },
    topics: {
      'getting-better-at-using-ai': 'Mieux utiliser l\'IA',
      passwords: 'Mots de passe',
      privacy: 'Vie privée',
      scams: 'Arnaques',
      networking: 'Réseaux',
    },
    ui: {
      home: 'Accueil',
      backToHome: '← Retour à l\'accueil',
      backTo: '← Retour à',
      courses: 'Cours',
      course: 'cours',
      topics: 'Sujets',
      whatYoullLearn: 'Ce que vous apprendrez',
      chapters: 'Chapitres',
      author: 'Auteur',
      lastUpdated: 'Dernière mise à jour',
      notTranslated: 'Ce cours n\'est pas encore disponible dans votre langue. Affichage de la version anglaise.',
      siteTitle: 'How To Use Internet',
      siteDescription: 'Cours gratuits sur les concepts d\'internet, la sécurité et l\'utilisation de l\'IA.',
    },
  },
  es: {
    categories: {
      ai: 'IA',
      security: 'Seguridad',
      technology: 'Tecnología',
      productivity: 'Productividad',
    },
    topics: {
      'getting-better-at-using-ai': 'Mejorar el uso de la IA',
      passwords: 'Contraseñas',
      privacy: 'Privacidad',
      scams: 'Estafas',
      networking: 'Redes',
    },
    ui: {
      home: 'Inicio',
      backToHome: '← Volver al inicio',
      backTo: '← Volver a',
      courses: 'Cursos',
      course: 'curso',
      topics: 'Temas',
      whatYoullLearn: 'Lo que aprenderás',
      chapters: 'Capítulos',
      author: 'Autor',
      lastUpdated: 'Última actualización',
      notTranslated: 'Este curso aún no está disponible en tu idioma. Mostrando la versión en inglés.',
      siteTitle: 'How To Use Internet',
      siteDescription: 'Cursos gratuitos sobre conceptos de internet, seguridad y uso de IA.',
    },
  },
};

interface Translation {
  categories: Record<string, string>;
  topics: Record<string, string>;
  ui: {
    home: string;
    backToHome: string;
    backTo: string;
    courses: string;
    course: string;
    topics: string;
    whatYoullLearn: string;
    chapters: string;
    author: string;
    lastUpdated: string;
    notTranslated: string;
    siteTitle: string;
    siteDescription: string;
  };
}

export function t(locale: string, key: keyof Translation['ui']): string {
  const loc = (locales.includes(locale as Locale) ? locale : 'en') as Locale;
  return translations[loc].ui[key];
}

export function getCategoryName(locale: string, slug: string): string {
  const loc = (locales.includes(locale as Locale) ? locale : 'en') as Locale;
  return translations[loc].categories[slug] || translations.en.categories[slug] || slug;
}

export function getTopicName(locale: string, slug: string): string {
  const loc = (locales.includes(locale as Locale) ? locale : 'en') as Locale;
  return translations[loc].topics[slug] || translations.en.topics[slug] || slug;
}
