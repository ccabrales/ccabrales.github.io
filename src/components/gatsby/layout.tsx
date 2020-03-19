import { Container, CssBaseline, Typography } from "@material-ui/core";
import Header from "@portfolio/components/gatsby/header";
import { graphql, StaticQuery } from "gatsby";
import * as React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <CssBaseline />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Container>
          <main>{children}</main>
          <footer>
            <Typography variant="body2" color="textSecondary" align="center">
              {"Copyright © "}
              {new Date().getFullYear()}
              {" Website by Casey Cabrales. All Rights Reserved"}
            </Typography>
          </footer>
        </Container>
      </>
    )}
  />
);

export default Layout;
