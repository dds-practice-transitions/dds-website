import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { withAdapterLink } from "../../adapters/AdapterLink";
import { NavbarDropdownItem, NavbarDropdownLink } from "../../components";

/**
 * Props for `NavbarSubmenuItem`.
 */
export type NavbarSubmenuItemProps =
  SliceComponentProps<Content.NavbarSubmenuItemSlice>;

/**
 * Component for "NavbarSubmenuItem" Slices.
 */
const NavbarSubmenuItem = ({ slice }: NavbarSubmenuItemProps): JSX.Element => {
  return (
    <NavbarDropdownItem>
      <NavbarDropdownLink
        LinkComponent={withAdapterLink({
          adapter: "navlink",
          field: slice.primary.link,
        })}
      >
        {slice.primary.label}
      </NavbarDropdownLink>
    </NavbarDropdownItem>
  );
};

export default NavbarSubmenuItem;
