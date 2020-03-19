import { Link as MuiLink, LinkProps as MuiLinkProps } from "@material-ui/core";
import { Link as GatsbyLink, GatsbyLinkProps } from "gatsby";
import * as React from "react";

type LinkProps = MuiLinkProps & GatsbyLinkProps<{}>;

export const Link = React.forwardRef<HTMLSpanElement, LinkProps>(
  (props, ref) => <MuiLink component={GatsbyLink as any} ref={ref} {...props} />
);

Link.displayName = "Link";
