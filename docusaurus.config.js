/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Docs',
  url: 'https://taktikal.gitlab.io',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'taktikal',
  projectName: 'docs',
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Logo',
        src: 'img/logo-dark.svg',
        srcDark: 'img/logo-light.svg',
      },
      items: [
        {
          href: 'https://gitlab.com/taktikal/docs',
          label: 'GitLab',
          position: 'right',
        },
      ],
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://gitlab.com/taktikal/docs/-/edit/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
