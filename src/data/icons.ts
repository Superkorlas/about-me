// Fichero único de URLs de iconos.
// Cambiar una URL aquí la actualiza en toda la app.
// Usa '' para forzar el fallback de texto (icono no disponible).
// Formatos soportados:
//   - URL externa:  'https://cdn.simpleicons.org/python'
//   - Local:        '/icons/mi-icono.svg'  (colocar en public/icons/)

export const ICONS = {

    // --- Navegación (color muted sobre fondo oscuro) ---
    nav: {
        itchio: 'https://cdn.simpleicons.org/itchdotio/94a3b8',
        github: 'https://cdn.simpleicons.org/github/94a3b8',
        linkedin: '',
    },

    // --- Botones en tarjetas de proyecto ---
    btn: {
        itchio: 'https://cdn.simpleicons.org/itchdotio/ffffff',
        github: 'https://cdn.simpleicons.org/github/c7d2fe',
    },

    // --- Tech Stack carousel ---
    tech: {
        python: 'https://cdn.simpleicons.org/python',
        csharp: '',
        java: 'https://cdn.simpleicons.org/java',
        javascript: 'https://cdn.simpleicons.org/javascript',
        typescript: 'https://cdn.simpleicons.org/typescript',
        salesforce: '',
        angular: 'https://cdn.simpleicons.org/angular/ffffff',
        unity: 'https://cdn.simpleicons.org/unity/ffffff',
        html5: 'https://cdn.simpleicons.org/html5',
        css: 'https://cdn.simpleicons.org/CSS',
        git: 'https://cdn.simpleicons.org/git',
        github: 'https://cdn.simpleicons.org/github/ffffff',
        astro: 'https://cdn.simpleicons.org/astro/ffffff',
    },

} as const;

export type NavIconKey = keyof typeof ICONS['nav'];
export type BtnIconKey = keyof typeof ICONS['btn'];
export type TechIconKey = keyof typeof ICONS['tech'];
