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
    'projects.itch': 'View on Itch.io',

    'footer.made': 'Made with Astro by',

    // Octorabbit
    'project.octorabbit.name': 'Octorabbit',
    'project.octorabbit.description': 'Repair the ship and help save the universe! Control its tentacles to repair the ship, but be careful with the space garbage. Developed during Global Game Jam 2020.',
    'project.octorabbit.tag.1': 'Action',
    'project.octorabbit.tag.2': 'Arcade',
    'project.octorabbit.tag.3': 'Unity',

    // RedemptionToys
    'project.redemptiontoys.name': 'RedemptionToys',
    'project.redemptiontoys.description': 'Put yourself in the shoes of a toy maker who uses the circular economy to stay afloat. Repair toys managing your cards and resources! Created during GranadaJam2017.',
    'project.redemptiontoys.tag.1': 'Card Game',
    'project.redemptiontoys.tag.2': '2D',
    'project.redemptiontoys.tag.3': 'Unity',
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
    'projects.itch': 'Ver en Itch.io',

    'footer.made': 'Hecho con Astro por',

    // Octorabbit
    'project.octorabbit.description': '¡Repara la nave y ayuda a salvar el universo! Controla sus tentáculos para arreglar la nave evitando la basura espacial. Desarrollado durante la Global Game Jam 2020.',
    'project.octorabbit.tag.1': 'Acción',

    // RedemptionToys
    'project.redemptiontoys.description': 'Ponte en la piel de un juguetero que utiliza la economía circular para mantenerse a flote. ¡Repara juguetes gestionando tus cartas y recursos! Creado durante la GranadaJam2017.',
    'project.redemptiontoys.tag.1': 'Juego de Cartas',
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
