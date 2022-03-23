// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hail VEP Pipeline',
  url: 'https://hail-vep-pipeline.public.tennex.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'tennex-io',
  projectName: 'hail-vep-pipeline',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: '/',
          editUrl: 'https://github.com/tennex-io/hail-vep-pipeline/tree/main/docs/index.md',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Hail VEP Pipeline - AWS RODA Documentation',
        logo: {
          alt: 'Logo',
          src: 'img/logo-light-square.png',
          srcDark: 'img/logo-dark-square.png',
        },
        items: [
          {
            href: 'https://github.com/tennex-io/hail-vep-pipeline',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `<div>Maintained by <a href="https://tennex.io">Tennex</a>. Built with <a href="https://github.com/facebook/docusaurus">Docusaurus</a>.</div>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
