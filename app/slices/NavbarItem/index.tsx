import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { exhaustiveMatchGuard } from "../../utils";
import { NavbarItemDefault } from "./NavbarItemDefault";
import { NavbarItemWithSubmenu } from "./NavbarItemWithSubmenu";

/**
 * Props for `NavbarItem`.
 */
export type NavbarItemProps = SliceComponentProps<Content.NavbarItemSlice>;

/**
 * Component for "NavbarItem" Slices.
 */
const NavbarItem = ({ slice }: NavbarItemProps) => {
  switch (slice.variation) {
    case "default":
      return <NavbarItemDefault {...slice} />;

    case "withSubmenu":
      return <NavbarItemWithSubmenu {...slice} />;

    default:
      return exhaustiveMatchGuard(slice);
  }
};

export default NavbarItem;
