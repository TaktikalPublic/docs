/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Taktikal Docs",
  url: "https://taktikal.gitlab.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "favicon.ico",
  organizationName: "taktikal",
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
      apiKey: "ce54ae98420beac5aa8e3ad58d7786ce", // Read access key
      indexName: "taktikal",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.ts"),
          editUrl: "https://gitlab.com/taktikal/docs/-/edit/master",
        },
        theme: {
          customCss: require.resolve("./src/css/defaults.css"),
        },
      },
    ],
  ],
};
