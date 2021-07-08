/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Docs',
  url: 'https://taktikal.gitlab.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'favicon.ico',
  organizationName: 'taktikal',
  projectName: 'docs',
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Logo',
        src: 'logo-dark.svg',
        srcDark: 'logo-light.svg',
      },
      items: [
        { to: '/docs/fill-and-sign', label: 'Fill & Sign', position: 'left' },
        { to: '/docs/drop-and-sign', label: 'Drop & Sign', position: 'left' },
        { to: '/docs/smart-forms', label: 'Smart Forms', position: 'left' },
        { to: '/docs/api', label: 'API', position: 'left' },
        {
          href: 'https://gitlab.com/taktikal/docs',
          label: 'GitLab',
          position: 'right',
        },
      ],
    },
    prism: { additionalLanguages: ['csharp', 'php'] },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Drop & Sign',
              to: '/docs/drop-and-sign',
              activeBasePath: 'docs/drop-and-sign',
            },
            {
              label: 'Fill & Sign',
              to: '/docs/fill-and-sign',
              activeBasePath: 'docs/fill-and-sign',
            },
            {
              label: 'Smart Forms',
              to: '/docs/smart-forms',
              activeBasePath: 'docs/smart-forms',
            },
            {
              label: 'API',
              to: '/docs/api',
              activeBasePath: 'docs/api',
            },
          ],
        },
        {
          items: [
            {
              label: 'Taktikal',
              href: 'https://taktikal.is',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Taktikal Docs Built with Docusaurus.`,
    },
    algolia: {
      apiKey: 'ce54ae98420beac5aa8e3ad58d7786ce', // Read access key
      indexName: 'taktikal',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: 'https://gitlab.com/taktikal/docs/-/edit/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
