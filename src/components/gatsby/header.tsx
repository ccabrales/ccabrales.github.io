import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Link } from "@portfolio/components/common/link";
import * as React from "react";

interface HeaderProps {
  siteTitle?: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle = "" }) => (
  <AppBar position="fixed" elevation={0}>
    <Toolbar>
      <Typography variant="h4" component="h1" gutterBottom>
        <Link to="/" color="secondary" underline="none">
          {siteTitle}
        </Link>
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Header;
