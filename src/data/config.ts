export const SITE_CONFIG = {
  github: "https://github.com/Superkorlas",
  linkedin: "https://linkedin.com/in/your-profile",
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
