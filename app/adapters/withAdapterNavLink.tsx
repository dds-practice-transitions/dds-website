import { FC, memo } from "react";

import { NavLink } from "@remix-run/react";

export type AnchorProps = JSX.IntrinsicElements["a"];

export function withAdapterNavLink(options: { to: string }) {
  const NavLinkComponent: FC<AnchorProps> = memo<AnchorProps>(
    function NavLinkComponent({ children, ...restAnchorProps }: AnchorProps) {
      return (
        <NavLink to={options.to as string} {...restAnchorProps}>
          {children}
        </NavLink>
      );
    },
  );

  return NavLinkComponent;
}
