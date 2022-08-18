// @ts-check
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: "Documentation d'op-ent",
  url: "https://docs.op-ent.fr",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/logo.svg",
  organizationName: "op-ent",
  projectName: "docs",
  deploymentBranch: "gh-pages",
  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },
  trailingSlash: true,
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "unstyled-ui",
        path: "unstyled-ui",
        routeBasePath: "unstyled-ui",
        sidebarPath: require.resolve("./unstyledUiSidebars"),
      },
    ],
    async function docusaurusTailwindCss(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Documentation",
        logo: {
          alt: "Logo d'op-ent",
          src: "img/logo.svg",
        },
        items: [
          {
            href: "https://github.com/op-ent",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Home",
                to: "/docs/home",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discussion Github",
                href: "https://github.com/op-ent/op-ent",
              },
              {
                label: "Discord",
                href: "https://discord.gg/kMFmfSbC2C",
              },
            ],
          },
        ],
        copyright: `&copy; ${new Date().getFullYear()} op-ent.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};
