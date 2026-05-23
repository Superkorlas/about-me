const en = {
    'site.title': 'Alejandro Portfolio',
    'site.description': 'Personal portfolio showcasing my Unity projects, games, and documentation.',
    'site.author': 'Alejandro',

    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',

    'hero.title': 'Hi, I am',
    'hero.subtitle': 'Technical Lead & Software Engineer',
    'hero.description': 'I craft robust enterprise systems, complex integrations, and interactive experiences.',


    'tech.title': 'Tech Stack',

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

    // Experience Section
    'experience.title': 'Professional Experience',
    'exp.omega.lead.role': 'Salesforce Technical Lead',
    'exp.omega.lead.desc.1': 'Leadership and management of the development team, ensuring quality and efficiency in project delivery.',
    'exp.omega.lead.desc.2': 'Specialized in Agentforce, implementing solutions with external integrations and technical value propositions.',
    'exp.omega.lead.desc.3': 'Technical Lead for the implementation of a Contact Center in Salesforce, integrating Amazon Connect.',
    'exp.omega.lead.desc.4': 'Developed automation scripts using SFDX for environment refreshes and CI/CD workflow optimization.',

    // Skills Section
    'skills.title': 'Technical Expertise',
    'skills.salesforce.category': 'Salesforce Ecosystem',
    'skills.salesforce.items': 'Expert in Apex, LWC, Aura Components, Agentforce, Integrations, SOQL and DevOps (SFDX).',

    'skills.fullstack.category': 'Full-Stack Development',
    'skills.fullstack.items': 'TypeScript, JavaScript (ES6+), Angular, HTML5, CSS3, SQL.',

    'skills.languages.category': 'Programming Languages',
    'skills.languages.items': 'Java, C#, C++, Python.',

    'skills.architecture.category': 'Architecture & Quality',
    'skills.architecture.items': 'Design Patterns, SOLID principles, Clean Code, Agile (SCRUM), Git.',
};

const es: Partial<typeof en> = {
    'nav.home': 'Inicio',
    'nav.projects': 'Proyectos',
    'nav.about': 'Sobre mí',

    'hero.title': 'Hola, soy',
    'hero.subtitle': 'Technical Lead y Software Engineer',
    'hero.description': 'Creo sistemas empresariales robustos, integraciones complejas y experiencias interactivas.',


    'tech.title': 'Tecnologías',

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

    // Experience Section
    'experience.title': 'Trayectoria Profesional',
    'exp.omega.lead.role': 'Salesforce Technical Lead',
    'exp.omega.lead.desc.1': 'Liderazgo y gestión del equipo de desarrollo, asegurando la calidad y eficiencia en la entrega de proyectos.',
    'exp.omega.lead.desc.2': 'Especializado en Agentforce, implementando soluciones con integraciones externas y propuestas de valor técnico.',
    'exp.omega.lead.desc.3': 'Technical Lead para la implementación de un Contact Center en Salesforce, integrando Amazon Connect.',
    'exp.omega.lead.desc.4': 'Desarrollo de scripts de automatización con SFDX para refresco de entornos y optimización de flujos CI/CD.',

    // Skills Section
    'skills.title': 'Conocimientos Técnicos',
    'skills.salesforce.category': 'Ecosistema Salesforce',
    'skills.salesforce.items': 'Experto en Apex, LWC, Aura Components, Agentforce, Data Cloud, Integraciones, SOQL y DevOps (SFDX).',

    'skills.fullstack.category': 'Desarrollo Full-Stack',

    'skills.languages.category': 'Lenguajes de Programación',

    'skills.architecture.category': 'Arquitectura y Calidad',
    'skills.architecture.items': 'Patrones de Diseño, Principios SOLID, Clean Code, Agile (SCRUM), Git.',
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
