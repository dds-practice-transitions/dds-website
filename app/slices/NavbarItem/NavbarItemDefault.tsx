import { FC } from "react";

import { NavbarItem as NavItem, NavbarLink } from "../../components";
import { withPrismicAdapterNavLink } from "../../adapters";
import { NavbarItemSliceDefault } from "../../../prismicio-types";
import { ResponsiveMobile } from "../../utils";

export const NavbarItemDefault: FC<NavbarItemSliceDefault> = (slice) => {
  return (
    <>
      <NavItem>
        <NavbarLink.Tablet
          ddLabel={slice.primary.label as string}
          LinkComponent={withPrismicAdapterNavLink({
            field: slice.primary.link,
          })}
        />
      </NavItem>
      {/* Mobile */}
      <ResponsiveMobile>
        <NavItem>
          <NavbarLink.Mobile
            ddLabel={slice.primary.label as string}
            LinkComponent={withPrismicAdapterNavLink({
              field: slice.primary.link,
            })}
          />
        </NavItem>
      </ResponsiveMobile>
    </>
  );
};
