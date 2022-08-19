import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import React from "react";
import { remoteDocs, getRemoteName } from "../../lib/remote-docs";

// const remotes = ["unstyled-ui"];
const remotes = remoteDocs.map((e) => getRemoteName(e));

export default function Packages() {
  return (
    <Layout>
      <div>Projects</div>
      <div>
        {remotes.map((remote) => (
          <Link key={remote} to={`/${remote}`}>
            {remote}
          </Link>
        ))}
      </div>
    </Layout>
  );
}
