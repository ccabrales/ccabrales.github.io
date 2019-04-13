import Image from "@portfolio/components/image";
import Layout from "@portfolio/components/layout";
import SEO from "@portfolio/components/seo";
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
