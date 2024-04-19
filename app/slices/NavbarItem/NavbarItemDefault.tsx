import { FC } from "react";

import { NavbarItem as NavItem, NavbarLink } from "../../components";
import { withPrismicAdapterNavLink } from "../../adapters";
import { NavbarItemSliceDefault } from "../../../prismicio-types";

export const NavbarItemDefault: FC<NavbarItemSliceDefault> = (slice) => {
  return (
    <NavItem>
      <NavbarLink
        ddLabel={slice.primary.label as string}
        LinkComponent={withPrismicAdapterNavLink({
          field: slice.primary.link,
        })}
      />
    </NavItem>
  );
};
