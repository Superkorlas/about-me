// Single source of truth for all icon URLs.
// Changing a URL here updates it across the entire app.
// Use '' to force text fallback (icon not available).
// Supported formats:
//   - External URL:  'https://cdn.simpleicons.org/python'
//   - Local:         '/icons/my-icon.svg'  (place file in public/icons/)

export const ICONS = {

    // --- Navigation (muted color on dark background) ---
    nav: {
        itchio: 'https://cdn.simpleicons.org/itchdotio/94a3b8',
        github: 'https://cdn.simpleicons.org/github/94a3b8',
        linkedin: '/icons/linkedin-white.svg',
    },

    // --- Buttons on project cards ---
    btn: {
        itchio: 'https://cdn.simpleicons.org/itchdotio/ffffff',
        github: 'https://cdn.simpleicons.org/github/c7d2fe',
    },

    // --- Tech Stack carousel ---
    tech: {
        python: '/icons/python.svg',
        cplusplus: '/icons/cplusplus.svg',
        csharp: '/icons/csharp.svg',
        java: '/icons/java.svg',
        javascript: 'https://cdn.simpleicons.org/javascript',
        typescript: 'https://cdn.simpleicons.org/typescript',
        salesforce: '/icons/salesforce.svg',
        angular: '/icons/angular.svg',
        html5: 'https://cdn.simpleicons.org/html5',
        css: 'https://cdn.simpleicons.org/CSS',
        git: 'https://cdn.simpleicons.org/git',
        github: 'https://cdn.simpleicons.org/github/ffffff',
        astro: 'https://cdn.simpleicons.org/astro/ffffff',
        unity: 'https://cdn.simpleicons.org/unity/ffffff',
        unreal: 'https://cdn.simpleicons.org/unrealengine/ffffff',
        godot: '/icons/godotengine.svg',
    },

} as const;

export type NavIconKey = keyof typeof ICONS['nav'];
export type BtnIconKey = keyof typeof ICONS['btn'];
export type TechIconKey = keyof typeof ICONS['tech'];
