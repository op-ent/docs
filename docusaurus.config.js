// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const sidebars = require('./sidebars');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation de OP-ENT',
  tagline: 'l\'ENT open source',
  url: 'https://docs.op-ent.fr',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'op-ent', // Usually your GitHub org/user name.
  projectName: 'op-ent', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'unstyled-ui',
        path: 'unstyled-ui',
        routeBasePath: 'unstyled-ui',
        sidebarPath: require.resolve('./unstyledUiSidebars')
      }
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'op-ent',
        logo: {
          alt: 'Logo de op-ent.',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'home',
            position: 'left',
            label: 'Documentation d\'op-ent',
          },
          {
            href: 'https://github.com/op-ent',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Home',
                to: '/docs/home',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discussion Github',
                href: 'https://github.com/op-ent/op-ent',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/kMFmfSbC2C',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} op-ent, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
