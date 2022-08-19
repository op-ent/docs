// @ts-check
const remoteDocs = ["op-ent/unstyled-ui/main"];

/**
 * @param {string} repo
 * @returns {string}
 */
function getRemoteName(repo) {
  return repo.split("/")[1];
}

exports.remoteDocs = remoteDocs;
exports.getRemoteName = getRemoteName;
