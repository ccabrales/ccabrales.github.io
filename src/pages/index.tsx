import Image from "@portfolio/components/gatsby/image";
import Layout from "@portfolio/components/gatsby/layout";
import SEO from "@portfolio/components/gatsby/seo";
import { Link } from "gatsby";
import * as React from "react";

const IndexPage: React.FunctionComponent<{}> = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
