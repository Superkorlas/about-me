export const SITE_CONFIG = {
    github: "https://github.com/Superkorlas",
    linkedin: "https://www.linkedin.com/in/alejandro-de-la-plata-ramos",
    itchio: "https://superkorlas.itch.io/",
    email: "fire.softworks.entertainment@gmail.com",
    photoUrl: "/profile.jpg",
    web3formsKey: "6d97e85d-32fe-4d2c-b0e8-298d8655c288",
};

// Icon URLs are managed in src/data/icons.ts
// 'icon' must be a key of ICONS.tech
export const TECH_STACK = [
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
    { name: 'Python', icon: 'python' },
    { name: 'C++', icon: 'cplusplus' },
    { name: 'C#', icon: 'csharp' },
    { name: 'Java', icon: 'java' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Angular', icon: 'angular' },
    { name: 'Astro', icon: 'astro' },
    { name: 'HTML5', icon: 'html5' },
    { name: 'CSS', icon: 'css' },
    { name: 'Unity', icon: 'unity' },
    { name: 'Unreal', icon: 'unreal' },
    { name: 'Godot Engine', icon: 'godot' },
    { name: 'Salesforce', icon: 'salesforce' },
] as const;

export const PROJECTS = [
    {
        id: "octorabbit",
        nameKey: "project.octorabbit.name",
        descriptionKey: "project.octorabbit.description",
        tagsKeys: ["project.octorabbit.tag.1", "project.octorabbit.tag.2", "project.octorabbit.tag.3"],
        githubUrl: "",
        demoUrl: "",
        docsUrl: "",
        itchUrl: "https://dianavi.itch.io/octorabbit",
        imageUrl: "/projects/octorabbit-portrait.png",
    },
    {
        id: "redemptiontoys",
        nameKey: "project.redemptiontoys.name",
        descriptionKey: "project.redemptiontoys.description",
        tagsKeys: ["project.redemptiontoys.tag.1", "project.redemptiontoys.tag.2", "project.redemptiontoys.tag.3"],
        githubUrl: "",
        demoUrl: "",
        docsUrl: "",
        itchUrl: "https://superkorlas.itch.io/redemptiontoys",
        imageUrl: "/projects/redemption-toys-portrait.png",
    }
] as const;

export const EXPERIENCE = [
    {
        id: "omega-lead",
        roleKey: "exp.omega.lead.role",
        descriptionKeys: [
            "exp.omega.lead.desc.1",
            "exp.omega.lead.desc.2",
            "exp.omega.lead.desc.3",
            "exp.omega.lead.desc.4"
        ]
    }
] as const;

export const SKILLS = [
    {
        categoryKey: "skills.salesforce.category",
        itemsKey: "skills.salesforce.items"
    },
    {
        categoryKey: "skills.fullstack.category",
        itemsKey: "skills.fullstack.items"
    },
    {
        categoryKey: "skills.languages.category",
        itemsKey: "skills.languages.items"
    },
    {
        categoryKey: "skills.architecture.category",
        itemsKey: "skills.architecture.items"
    }
] as const;
