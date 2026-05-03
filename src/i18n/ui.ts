export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'hero.title': 'Hi, I am',
    'hero.subtitle': 'Unity Developer & Software Engineer',
    'hero.description': 'I craft interactive experiences, robust systems, and powerful tools for Unity. Explore my projects and read their documentation.',
    'projects.title': 'Featured Projects',
    'projects.docs': 'Documentation',
    'projects.source': 'Source Code',
    'footer.made': 'Made with Astro by',
  },
  es: {
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',
    'hero.title': 'Hola, soy',
    'hero.subtitle': 'Desarrollador Unity y Software Engineer',
    'hero.description': 'Creo experiencias interactivas, sistemas robustos y herramientas potentes para Unity. Explora mis proyectos y lee su documentación.',
    'projects.title': 'Proyectos Destacados',
    'projects.docs': 'Documentación',
    'projects.source': 'Código Fuente',
    'footer.made': 'Hecho con Astro por',
  },
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
