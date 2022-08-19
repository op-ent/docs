// @ts-check
const { remotes } = require("./lib/generate-remote-content");

module.exports = [
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
  ...remotes,
];
