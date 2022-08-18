// @ts-check
const listRemote = require("./lib/docusaurus-lib-list-remote");

const REPOS = ["op-ent/unstyled-ui/main"].map((value) => {
  const [owner, name, branch] = value.split("/");
  const repo = listRemote.createRepo(owner, name, branch);
  return repo;
});

const REMOTES = REPOS.map((repo) => {
  return [
    "docusaurus-plugin-remote-content",
    /** @type {import('docusaurus-plugin-remote-content').RemoteContentPluginOptions} */
    {
      name: repo.name,
      sourceBaseUrl: listRemote.buildRepoRawBaseUrl(repo),
      outDir: `docs/${repo.name}`,
      documents: listRemote.listDocuments(repo, ["docs/*.md"]),
      modifyContent(filename, content) {
        return {
          filename: filename.replace(/^docs\//, ""),
        };
      },
    },
  ];
});

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
  ...REMOTES,
];
