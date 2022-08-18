import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import React from "react";

const remotes = ["unstyled-ui"];

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
