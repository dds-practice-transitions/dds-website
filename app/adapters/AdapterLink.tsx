import { PrismicLink, PrismicLinkProps } from "@prismicio/react";
import { FC, memo } from "react";

import { Link } from "@remix-run/react";

export type AnchorProps = JSX.IntrinsicElements["a"];

export function withAdapterLink(options: PrismicLinkProps) {
  const LinkComponent: FC<AnchorProps> = memo<AnchorProps>(
    function LinkComponent({ children, ...restAnchorProps }: AnchorProps) {
      return (
        // @ts-expect-error mismatch on the refs... this is okay
        <PrismicLink
          {...options}
          internalComponent={({ href, ...restICProps }) => {
            return (
              <Link to={href as string} {...restICProps} {...restAnchorProps}>
                {children}
              </Link>
            );
          }}
        >
          {children}
        </PrismicLink>
      );
    },
  );

  return LinkComponent;
}
