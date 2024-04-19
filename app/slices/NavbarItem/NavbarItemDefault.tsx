import { FC } from "react";

import { NavbarItem as NavItem, NavbarLink } from "../../components";
import { withPrismicAdapterNavLink } from "../../adapters";
import { NavbarItemSliceDefault } from "../../../prismicio-types";
import { ResponsiveTablet } from "../../utils/ResponsiveTablet";
import { ResponsiveMobile } from "../../utils";

export const NavbarItemDefault: FC<NavbarItemSliceDefault> = (slice) => {
  return (
    <NavItem>
      {/* Mobile */}
      <ResponsiveMobile>
        <NavbarLink.Mobile
          ddLabel={slice.primary.label as string}
          LinkComponent={withPrismicAdapterNavLink({
            field: slice.primary.link,
          })}
        />
      </ResponsiveMobile>
      {/* Tablet */}
      <ResponsiveTablet>
        <NavbarLink.Tablet
          ddLabel={slice.primary.label as string}
          LinkComponent={withPrismicAdapterNavLink({
            field: slice.primary.link,
          })}
        />
      </ResponsiveTablet>
    </NavItem>
  );
};
