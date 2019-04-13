import Layout from "@portfolio/components/layout";
import SEO from "@portfolio/components/seo";
import * as React from "react";

const NotFoundPage: React.FunctionComponent<{}> = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;