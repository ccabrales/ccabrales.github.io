import Layout from "@portfolio/components/gatsby/layout";
import SEO from "@portfolio/components/gatsby/seo";
import { Link } from "gatsby";
import * as React from "react";

const SecondPage: React.FunctionComponent<{}> = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
);

export default SecondPage;
