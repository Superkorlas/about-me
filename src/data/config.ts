export const SITE_CONFIG = {
  github: "https://github.com/Superkorlas",
  linkedin: "https://www.linkedin.com/in/alejandro-de-la-plata-ramos",
  itchio: "https://superkorlas.itch.io/",
  email: "your.email@example.com",
};

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
