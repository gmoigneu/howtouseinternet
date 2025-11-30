export const locales = ['en', 'fr', 'es'] as const;
export type Locale = (typeof locales)[number];

export const translations: Record<Locale, Translation> = {
  en: {
    categories: {
      'stay-safe-online': 'Stay safe online',
      'internet-technologies': 'The technologies behind Internet',
      'artificial-intelligence': 'Artificial Intelligence',
    },
    topics: {
      // Stay safe online
      'passwords': 'Passwords',
      'privacy': 'Privacy',
      'scams': 'Scams & phishing',
      'malware': 'Malware & viruses',
      'social-engineering': 'Social engineering',
      // Internet technologies
      'how-internet-works': 'How the Internet works',
      'browsers': 'Web browsers',
      'networking': 'Networking basics',
      'cloud': 'Cloud computing',
      'encryption': 'Encryption',
      // Artificial Intelligence
      'getting-started-with-ai': 'Getting started with AI',
      'prompting': 'Effective prompting',
      'ai-tools': 'AI tools & applications',
      'ai-ethics': 'AI ethics & safety',
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
      heroTitle: 'Learn to navigate the digital world with confidence',
      heroDescription: 'Free, open-source courses designed for everyone — no technical background required. Understand how the internet works, stay safe online, and make the most of AI tools.',
      missionTitle: 'Our Mission',
      missionDescription: 'We believe everyone deserves to understand the technology they use every day. Our courses break down complex topics into simple, practical lessons that anyone can follow.',
      openSourceTitle: 'Open Source',
      openSourceDescription: 'All our content is free and open source under the Apache 2.0 license. Anyone can contribute, translate, or adapt our courses.',
      forEveryoneTitle: 'For Everyone',
      forEveryoneDescription: 'Written in plain language, our courses are designed for people who want to learn without getting lost in technical jargon.',
      exploreCourses: 'Explore our courses',
      editThisCourse: 'Edit this course',
      viewOnGithub: 'GitHub',
      license: 'License',
      licenseTitle: 'Apache License 2.0',
      licenseDescription: 'This project is licensed under the Apache License, Version 2.0.',
      readingTime: '{minutes} min read',
      difficulty: 'Difficulty',
      difficultyBeginner: 'Beginner',
      difficultyIntermediate: 'Intermediate',
      difficultyAdvanced: 'Advanced',
      progress: 'Progress',
      previousChapter: 'Previous',
      nextChapter: 'Next',
      chapterCompleted: 'Completed',
      startCourse: 'Start course',
    },
  },
  fr: {
    categories: {
      'stay-safe-online': 'Rester en sécurité en ligne',
      'internet-technologies': 'Les technologies derrière Internet',
      'artificial-intelligence': 'Intelligence Artificielle',
    },
    topics: {
      // Stay safe online
      'passwords': 'Mots de passe',
      'privacy': 'Vie privée',
      'scams': 'Arnaques & hameçonnage',
      'malware': 'Logiciels malveillants & virus',
      'social-engineering': 'Ingénierie sociale',
      // Internet technologies
      'how-internet-works': 'Comment fonctionne Internet',
      'browsers': 'Navigateurs web',
      'networking': 'Bases des réseaux',
      'cloud': 'Cloud computing',
      'encryption': 'Chiffrement',
      // Artificial Intelligence
      'getting-started-with-ai': 'Débuter avec l\'IA',
      'prompting': 'Rédiger des prompts efficaces',
      'ai-tools': 'Outils & applications IA',
      'ai-ethics': 'Éthique & sécurité de l\'IA',
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
      heroTitle: 'Apprenez à naviguer dans le monde numérique en toute confiance',
      heroDescription: 'Des cours gratuits et open source conçus pour tous — aucune connaissance technique requise. Comprenez comment fonctionne Internet, restez en sécurité en ligne et tirez le meilleur parti des outils d\'IA.',
      missionTitle: 'Notre Mission',
      missionDescription: 'Nous pensons que chacun mérite de comprendre la technologie qu\'il utilise au quotidien. Nos cours décomposent des sujets complexes en leçons simples et pratiques accessibles à tous.',
      openSourceTitle: 'Open Source',
      openSourceDescription: 'Tout notre contenu est gratuit et open source sous licence Apache 2.0. Chacun peut contribuer, traduire ou adapter nos cours.',
      forEveryoneTitle: 'Pour Tous',
      forEveryoneDescription: 'Rédigés dans un langage simple, nos cours sont conçus pour ceux qui veulent apprendre sans se perdre dans le jargon technique.',
      exploreCourses: 'Découvrir nos cours',
      editThisCourse: 'Modifier ce cours',
      viewOnGithub: 'GitHub',
      license: 'Licence',
      licenseTitle: 'Licence Apache 2.0',
      licenseDescription: 'Ce projet est sous licence Apache, Version 2.0.',
      readingTime: '{minutes} min de lecture',
      difficulty: 'Difficulté',
      difficultyBeginner: 'Débutant',
      difficultyIntermediate: 'Intermédiaire',
      difficultyAdvanced: 'Avancé',
      progress: 'Progression',
      previousChapter: 'Précédent',
      nextChapter: 'Suivant',
      chapterCompleted: 'Terminé',
      startCourse: 'Commencer le cours',
    },
  },
  es: {
    categories: {
      'stay-safe-online': 'Mantente seguro en línea',
      'internet-technologies': 'Las tecnologías detrás de Internet',
      'artificial-intelligence': 'Inteligencia Artificial',
    },
    topics: {
      // Stay safe online
      'passwords': 'Contraseñas',
      'privacy': 'Privacidad',
      'scams': 'Estafas & phishing',
      'malware': 'Malware & virus',
      'social-engineering': 'Ingeniería social',
      // Internet technologies
      'how-internet-works': 'Cómo funciona Internet',
      'browsers': 'Navegadores web',
      'networking': 'Conceptos básicos de redes',
      'cloud': 'Computación en la nube',
      'encryption': 'Cifrado',
      // Artificial Intelligence
      'getting-started-with-ai': 'Primeros pasos con la IA',
      'prompting': 'Prompts efectivos',
      'ai-tools': 'Herramientas y aplicaciones de IA',
      'ai-ethics': 'Ética y seguridad de la IA',
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
      heroTitle: 'Aprende a navegar el mundo digital con confianza',
      heroDescription: 'Cursos gratuitos y de código abierto diseñados para todos — no se requieren conocimientos técnicos. Comprende cómo funciona Internet, mantente seguro en línea y aprovecha al máximo las herramientas de IA.',
      missionTitle: 'Nuestra Misión',
      missionDescription: 'Creemos que todos merecen entender la tecnología que usan cada día. Nuestros cursos desglosan temas complejos en lecciones simples y prácticas que cualquiera puede seguir.',
      openSourceTitle: 'Código Abierto',
      openSourceDescription: 'Todo nuestro contenido es gratuito y de código abierto bajo la licencia Apache 2.0. Cualquiera puede contribuir, traducir o adaptar nuestros cursos.',
      forEveryoneTitle: 'Para Todos',
      forEveryoneDescription: 'Escritos en lenguaje sencillo, nuestros cursos están diseñados para personas que quieren aprender sin perderse en jerga técnica.',
      exploreCourses: 'Explorar nuestros cursos',
      editThisCourse: 'Editar este curso',
      viewOnGithub: 'GitHub',
      license: 'Licencia',
      licenseTitle: 'Licencia Apache 2.0',
      licenseDescription: 'Este proyecto está licenciado bajo la Licencia Apache, Versión 2.0.',
      readingTime: '{minutes} min de lectura',
      difficulty: 'Dificultad',
      difficultyBeginner: 'Principiante',
      difficultyIntermediate: 'Intermedio',
      difficultyAdvanced: 'Avanzado',
      progress: 'Progreso',
      previousChapter: 'Anterior',
      nextChapter: 'Siguiente',
      chapterCompleted: 'Completado',
      startCourse: 'Iniciar curso',
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
    heroTitle: string;
    heroDescription: string;
    missionTitle: string;
    missionDescription: string;
    openSourceTitle: string;
    openSourceDescription: string;
    forEveryoneTitle: string;
    forEveryoneDescription: string;
    exploreCourses: string;
    editThisCourse: string;
    viewOnGithub: string;
    license: string;
    licenseTitle: string;
    licenseDescription: string;
    readingTime: string;
    difficulty: string;
    difficultyBeginner: string;
    difficultyIntermediate: string;
    difficultyAdvanced: string;
    progress: string;
    previousChapter: string;
    nextChapter: string;
    chapterCompleted: string;
    startCourse: string;
  };
}

export function getDifficultyLabel(locale: string, difficulty: 'beginner' | 'intermediate' | 'advanced'): string {
  const loc = (locales.includes(locale as Locale) ? locale : 'en') as Locale;
  const difficultyMap = {
    beginner: translations[loc].ui.difficultyBeginner,
    intermediate: translations[loc].ui.difficultyIntermediate,
    advanced: translations[loc].ui.difficultyAdvanced,
  };
  return difficultyMap[difficulty];
}

export function getReadingTime(locale: string, minutes: number): string {
  const loc = (locales.includes(locale as Locale) ? locale : 'en') as Locale;
  return translations[loc].ui.readingTime.replace('{minutes}', String(minutes));
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
