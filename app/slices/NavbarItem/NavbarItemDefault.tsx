import { FC } from "react";

import { withPrismicAdapterNavLink } from "../../adapters";
import { NavbarItemSliceDefault } from "../../../prismicio-types";
import { useNavigationContext } from "../../components/navigation";

export const NavbarItemDefault: FC<NavbarItemSliceDefault> = (slice) => {
  const { NavigationLink, NavigationItem } = useNavigationContext();

  return (
    <NavigationItem>
      <NavigationLink
        ddLabel={slice.primary.label as string}
        LinkComponent={withPrismicAdapterNavLink({
          field: slice.primary.link,
        })}
      />
    </NavigationItem>
  );
};
