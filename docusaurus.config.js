// @ts-check
const presets = require("./presets");
const plugins = require("./plugins");
const themeConfig = require("./themeConfig");

/** @type {import('@docusaurus/types').Config} */
const globalConfig = {
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
};

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  ...globalConfig,
  presets,
  plugins,
  themeConfig,
};
