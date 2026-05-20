# Alejandro — Personal Portfolio

Personal portfolio built with **Astro 6**, deployed on GitHub Pages at:
**[https://Superkorlas.github.io/about-me](https://Superkorlas.github.io/about-me)**

## 📋 Content

A single-page site that includes:

- **Hero** — professional introduction and title
- **Professional Experience** — Salesforce Technical Lead background
- **Technical Expertise** — Salesforce, Full-Stack, programming languages and architecture
- **Featured Projects** — Octorabbit and RedemptionToys, with links to Itch.io

The page supports **i18n** in English and Spanish. Texts are managed in `src/i18n/ui.ts` and project/experience/skills data in `src/data/config.ts`.

## 🗂️ Project Structure

```
/
├── .github/
│   └── workflows/
│       └── docs.yml          # GitHub Actions — automatic build and deploy to GitHub Pages
├── public/
│   ├── favicon.svg
│   ├── favicon.ico
│   └── theme.css             # Shared theme (compatible with Astro Starlight)
├── src/
│   ├── components/
│   │   ├── ExperienceItem.astro
│   │   ├── ProjectCard.astro
│   │   └── SkillItem.astro
│   ├── data/
│   │   └── config.ts         # Site data: projects, experience, skills and social links
│   ├── i18n/
│   │   └── ui.ts             # EN / ES translations
│   ├── layouts/
│   │   └── Layout.astro      # Main layout with header and footer
│   ├── pages/
│   │   └── index.astro       # Main page
│   └── styles/
│       └── global.css        # Global styles (reset, container, background)
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

## 🧞 Commands

Run from the root of the project:

| Command           | Action                                          |
| :---------------- | :---------------------------------------------- |
| `npm install`     | Install dependencies                            |
| `npm run dev`     | Start local dev server at `localhost:4321`      |
| `npm run build`   | Build the production site to `./dist/`          |
| `npm run preview` | Preview the build locally before deploying      |

> Requires **Node.js >= 22.12.0**

## 🚀 Deployment

Deployment is **fully automated via GitHub Actions** (`.github/workflows/docs.yml`).
Every push to `master` triggers the workflow, which:
1. Installs dependencies with `npm ci`
2. Builds the site with `npm run build`
3. Publishes the `dist/` folder to GitHub Pages

Site configuration in `astro.config.mjs`:
```js
site: 'https://Superkorlas.github.io',
base: '/about-me',
```

## 🎨 Shared Theme (`theme.css`)

`public/theme.css` defines a colour palette and reusable components (`.glass-panel`, `.btn`, `.tag`, `.text-gradient`) inspired by **Astro Starlight**. It can be reused in other projects by importing directly from the public URL:

```html
<link rel="stylesheet" href="https://Superkorlas.github.io/about-me/theme.css" />
```

Or in Astro Starlight's `customCss` config:
```js
customCss: ['https://Superkorlas.github.io/about-me/theme.css']
```

## ✏️ Customisation

To add or update content, edit these two files:

- **`src/data/config.ts`** — projects (`PROJECTS`), experience (`EXPERIENCE`), skills (`SKILLS`) and social links (`SITE_CONFIG`)
- **`src/i18n/ui.ts`** — English (`en`) and Spanish (`es`) translations
