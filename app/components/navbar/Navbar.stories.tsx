import type { Meta } from "@storybook/react";
import { Navbar } from "./Navbar";
import { NavbarLink } from "./NavbarLink";

const meta: Meta = {
  title: "Page / Navbar",
  component: Navbar,
} satisfies Meta<typeof meta>;

export default meta;

export const Basic = () => {
  return (
    <Navbar>
      <NavbarLink ddLabel="about us" />
      <NavbarLink ddLabel="services" />
      <NavbarLink ddLabel="our company">
        <div></div>
        {/* <NavbarMenu>
          <NavbarMenuList>
            <NavbarMenuLink></NavbarMenuLink>
          </NavbarMenuList>
        </NavbarMenu> */}
      </NavbarLink>
      <NavbarLink ddLabel="contact us" />
    </Navbar>
  );
};
