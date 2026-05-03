const en = {
  'site.title': 'Superkorlas Portfolio',
  'site.description': 'Personal portfolio showcasing my Unity projects, games, and documentation.',
  'site.author': 'Superkorlas',

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

  // Projects
  'project.placeholder.name': 'Upcoming Project',
  'project.placeholder.description': 'More awesome Unity tools and games are coming soon.',
  'project.placeholder.tag.1': 'Coming Soon',
};

const es: Partial<typeof en> = {
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

  // Projects
  'project.placeholder.name': 'Próximo Proyecto',
  'project.placeholder.description': 'Pronto llegarán más herramientas y juegos increíbles para Unity.',
  'project.placeholder.tag.1': 'Próximamente',
};

export const languages = {
  en: 'English',
  es: 'Español',
};

export const defaultLang = 'en';

export const ui = {
  en,
  es,
} as const;

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return (ui[lang] as any)[key] || ui[defaultLang][key];
  }
}
