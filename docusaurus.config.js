/** @type {import('@docusaurus/types').DocusaurusConfig} */

module.exports = {
  title: "Taktikal Docs",
  url: "https://taktikalpublic.gitlab.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.ico",
  organizationName: "taktikalPublic",
  projectName: "docs",
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      title: "",
      logo: {
        alt: "Logo",
        src: "svg/Logo.svg",
      },
      items: [
        { to: "/docs/portal", label: "Portal", position: "left" },
        { to: "/docs/drop-and-sign", label: "Drop & Sign", position: "left" },
        { to: "/docs/fill-and-sign", label: "Fill & Sign", position: "left" },
        { to: "/docs/smart-forms", label: "Smart Forms", position: "left" },
        { to: "/docs/api", label: "API", position: "left" },
      ],
    },
    prism: { additionalLanguages: ["csharp", "php"] },
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    algolia: {
      appId: "NN3GF28C9V",
      apiKey: "ae07f62e33c11329b545428aa2081b2f", // Read access key
      indexName: "taktikal",
    },
    mermaid: {
      theme: { light: "neutral", dark: "forest" },
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          editUrl: "https://github.com/taktikalPublic/docs/-/edit/master",
        },
        theme: {
          customCss: require.resolve("./src/css/defaults.css"),
        },
      },
    ],
  ],
  scripts: [
    {
      src: "https://app.taktikal.is/plausible/js/plausible.js",
      defer: true,
      async: true,
      "data-domain": "docs.taktikal.is",
      "data-api": "https://app.taktikal.is/plausible/api/event",
    },
  ],
  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],
};
