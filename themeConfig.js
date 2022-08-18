// @ts-check
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
module.exports = {
  navbar: {
    title: "Documentation",
    logo: {
      alt: "Logo d'op-ent",
      src: "img/logo.svg",
    },
    items: [
      {
        label: "Accueil",
        to: "/",
        activeBasePath: "/",
        position: "left",
      },
      {
        label: "GitHub",
        href: "https://github.com/op-ent",
        position: "right",
      },
    ],
  },
  footer: {
    links: [
      {
        title: "Projet",
        items: [
          {
            label: "Blog",
            href: "https://op-ent.fr/blog",
          },
          {
            label: "Packages",
            to: "/packages",
          },
        ],
      },
      {
        title: "Ressources",
        items: [
          {
            label: "Identité graphique",
            href: "https://github.com/op-ent/brand",
          },
          {
            label: "Documentation",
            to: "/",
          },
          {
            label: "Support",
            href: "https://github.com/op-ent/op-ent/issues",
          },
          {
            label: "Etat des systèmes",
            href: "https://status.op-ent.fr",
          },
        ],
      },
      {
        title: "Communauté",
        items: [
          {
            label: "GitHub",
            href: "https://github.com/op-ent",
          },
          {
            label: "Discord",
            href: "https://discord.gg/kMFmfSbC2C",
          },
          {
            label: "Twitter",
            href: "https://twitter.com/opent_oss",
          },
        ],
      },
    ],
    copyright: `Copyright &copy; ${new Date().getFullYear()} op-ent.`,
  },
  prism: {
    theme: lightCodeTheme,
    darkTheme: darkCodeTheme,
  },
};
