/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import Helmet, { HelmetProps } from "react-helmet";
import * as favicon from "../../images/favicon.png";

interface SEOProps {
  description?: string;
  lang?: string;
  keywords?: string[];
  meta?: HelmetProps["meta"];
  title: string;
}

const SEO: React.FC<SEOProps> = ({
  description = "",
  lang = "en",
  meta = [],
  keywords = [],
  title,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const metadata: HelmetProps["meta"] = meta
    .concat([
      {
        content: metaDescription,
        name: `description`,
      },
      {
        content: title,
        property: `og:title`,
      },
      {
        content: metaDescription,
        property: `og:description`,
      },
      {
        content: `website`,
        property: `og:type`,
      },
      {
        content: `summary`,
        name: `twitter:card`,
      },
      {
        content: site.siteMetadata.author,
        name: `twitter:creator`,
      },
      {
        content: title,
        name: `twitter:title`,
      },
      {
        content: metaDescription,
        name: `twitter:description`,
      },
    ])
    .concat(
      keywords.length > 0
        ? {
            content: keywords.join(`, `),
            name: `keywords`,
          }
        : []
    );

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={metadata}
      link={[{ rel: "shortcut icon", href: favicon }]}
    />
  );
};

export default SEO;
