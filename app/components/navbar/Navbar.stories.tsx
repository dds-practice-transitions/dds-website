import type { Meta } from "@storybook/react";
import { Navbar } from "./Navbar";
import { NavbarLink } from "./NavbarLink";
import { useMenu } from "../dialogs/Menu";
import { NavbarDropdownLink } from "./NavbarDropdownLink";
import { NavbarDropdown } from "./NavbarDropdown";
import { NavbarDropdownItem } from "./NavbarDropdownItem";
import { NavbarItem } from "./NavbarItem";

const meta: Meta = {
  title: "Page / Navbar",
  // @ts-expect-error type mismatch
  component: Navbar,
} satisfies Meta<typeof meta>;

export default meta;

export const Basic = () => {
  const sMenu = useMenu({
    placement: "bottom-start",
    mode: "focus",
  });

  const cMenu = useMenu({
    placement: "bottom-start",
    mode: "focus",
  });

  return (
    <Navbar>
      <NavbarItem>
        <NavbarLink ddLabel="about" />
      </NavbarItem>
      <NavbarItem>
        <NavbarLink ddLabel="services" {...sMenu.openProps} ddActive>
          <NavbarDropdown {...sMenu}>
            <NavbarDropdownItem>
              <NavbarDropdownLink className="active" href="/test-1">
                fourth dug
              </NavbarDropdownLink>
            </NavbarDropdownItem>
            <NavbarDropdownItem>
              <NavbarDropdownLink href="/test-">Stuff</NavbarDropdownLink>
            </NavbarDropdownItem>
            <NavbarDropdownItem>
              <NavbarDropdownLink href="/test-1">
                exactly anything
              </NavbarDropdownLink>
            </NavbarDropdownItem>
            <NavbarDropdownItem>
              <NavbarDropdownLink href="/test-1">
                solve solve
              </NavbarDropdownLink>
            </NavbarDropdownItem>
            <NavbarDropdownItem>
              <NavbarDropdownLink href="/test-1">
                place protection
              </NavbarDropdownLink>
            </NavbarDropdownItem>
            <NavbarDropdownItem>
              <NavbarDropdownLink href="/test-1">
                mother flight
              </NavbarDropdownLink>
            </NavbarDropdownItem>
          </NavbarDropdown>
        </NavbarLink>
      </NavbarItem>
      <NavbarItem>
        <NavbarLink ddLabel="our company" {...cMenu.openProps}>
          <NavbarDropdown {...cMenu}>
            <NavbarDropdownItem>
              <NavbarDropdownLink href="/test-1">
                most disappear
              </NavbarDropdownLink>
            </NavbarDropdownItem>
            <NavbarDropdownItem>
              <NavbarDropdownLink href="/test-2">
                summer tongue
              </NavbarDropdownLink>
            </NavbarDropdownItem>
          </NavbarDropdown>
        </NavbarLink>
      </NavbarItem>
      <NavbarItem>
        <NavbarLink ddLabel="contact us" />
      </NavbarItem>
    </Navbar>
  );
};
