// @ts-check

module.exports = [
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
];
