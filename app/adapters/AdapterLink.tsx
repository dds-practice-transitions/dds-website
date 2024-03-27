import { PrismicLink, PrismicLinkProps } from "@prismicio/react";
import { FC } from "react";

import { Link, LinkProps, NavLink, NavLinkProps } from "@remix-run/react";
import { exhaustiveMatchGuard } from "../utils";

export type AnchorProps = JSX.IntrinsicElements["a"];

type AdapterLinkProps = { adapter: "link" } & Omit<LinkProps, "to"> &
  PrismicLinkProps;
type AdapterNavLinkProps = { adapter: "navlink" } & Omit<NavLinkProps, "to"> &
  PrismicLinkProps;
type HOCProps = AdapterLinkProps | AdapterNavLinkProps;

export function withAdapterLink(hocProps: HOCProps) {
  switch (hocProps.adapter) {
    case "link": {
      const LinkComponent: FC<AnchorProps> = ({
        children,
        ...restAnchorProps
      }) => (
        // @ts-expect-error mismatch between HTMLElement & HTMLAnchor
        <PrismicLink
          {...hocProps}
          {...restAnchorProps}
          internalComponent={({ href, ...restProps }) => (
            <Link {...restProps} to={href as string} />
          )}
        >
          {children}
        </PrismicLink>
      );
      return LinkComponent;
    }

    case "navlink": {
      const LinkComponent: FC<AnchorProps> = ({
        children,
        ...restAnchorProps
      }) => (
        // @ts-expect-error mismatch between HTMLElement & HTMLAnchor
        <PrismicLink
          {...hocProps}
          {...restAnchorProps}
          internalComponent={({ href, ...restProps }) => (
            <NavLink {...restProps} to={href as string} />
          )}
        >
          {children}
        </PrismicLink>
      );
      return LinkComponent;
    }

    default:
      return exhaustiveMatchGuard(hocProps);
  }
}
