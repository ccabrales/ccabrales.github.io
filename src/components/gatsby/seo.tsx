/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import { graphql, useStaticQuery } from "gatsby";
import * as React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  description?: string;
  lang?: string;
  keywords?: string[];
  pathname?: string;
  title: string;
}

const SEO: React.FC<SEOProps> = ({
  description = "",
  lang = "en",
  keywords = [],
  pathname,
  title,
}) => {
  const {
    site: {
      siteMetadata: {
        author,
        defaultDescription,
        image,
        defaultTitle,
        siteUrl,
      },
    },
  } = useStaticQuery(
    graphql`
      query SEO {
        site {
          siteMetadata {
            author
            defaultDescription: description
            image
            defaultTitle: title
            siteUrl: url
          }
        }
      }
    `
  );

  const seo = {
    author,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    title: title || defaultTitle,
    url: `${siteUrl}${pathname || "/"}`,
  };

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={seo.title}
      titleTemplate={`%s | ${defaultTitle}`}
    >
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seo.author} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
};

export default SEO;
