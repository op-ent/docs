// @ts-check
const listRemote = require("./docusaurus-lib-list-remote");
const { remoteDocs } = require("./remote-docs");

const repos = remoteDocs.map((value) => {
  const [owner, name, branch] = value.split("/");
  const repo = listRemote.createRepo(owner, name, branch);
  return repo;
});

const remotes = repos.map((repo) => {
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

exports.remotes = remotes;
