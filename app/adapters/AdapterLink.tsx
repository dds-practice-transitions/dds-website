import { PrismicLink, PrismicLinkProps } from "@prismicio/react";
import { FC, memo } from "react";

import { Link } from "@remix-run/react";

export type AnchorProps = JSX.IntrinsicElements["a"];

const InternalLink = memo(function InternalLink(props) {
  console.log("InternalLinkProps", props);
  return (
    <Link className="internal" {...props}>
      {children}
    </Link>
  );
});

export function withAdapterNavLink(options: PrismicLinkProps) {
  const NavLinkComponent: FC<AnchorProps> = memo<AnchorProps>(
    function NavLinkComponent({ children, ...anchorProps }) {
      console.log("anchorProps", anchorProps, options);
      return <PrismicLink {...options} internalComponent={InternalLink} />;
    },
  );

  return NavLinkComponent;
}
