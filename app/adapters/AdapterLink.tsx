import { PrismicLink, PrismicLinkProps } from "@prismicio/react";
import { FC, memo } from "react";

import { NavLink } from "@remix-run/react";

export type AnchorProps = JSX.IntrinsicElements["a"];

export function withAdapterNavLink(options: PrismicLinkProps) {
  const NavLinkComponent: FC<AnchorProps> = memo<AnchorProps>(
    function NavLinkComponent({ children, ...restAnchorProps }: AnchorProps) {
      console.log("anchorProps", restAnchorProps, options);
      return (
        <PrismicLink
          {...options}
          internalComponent={({ href, ...restICProps }) => {
            return (
              <NavLink
                to={href as string}
                {...restICProps}
                {...restAnchorProps}
              >
                {children}
              </NavLink>
            );
          }}
        >
          {children}
        </PrismicLink>
      );
    },
  );

  return NavLinkComponent;
}
