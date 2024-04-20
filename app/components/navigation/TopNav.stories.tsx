import type { Meta } from "@storybook/react";
import { TopNav } from "./TopNav";
import { TopNavLink } from "./TopNavLink";
import { useMenu } from "../dialogs/Menu";
import { TopNavDropdownLink } from "./TopNavDropdownLink";
import { TopNavDropdown } from "./TopNavDropdown";
import { TopNavDropdownItem } from "./TopNavDropdownItem";
import { TopNavItem } from "./TopNavItem";
import { SideNav } from "./SideNav";
import { SideNavDropdown } from "./SideNavDropdown";
import { SideNavDropdownItem } from "./SideNavDropdownItem";
import { SideNavDropdownLink } from "./SideNavDropdownLink";
import { SideNavItem } from "./SideNavItem";
import { SideNavLink } from "./SideNavLink";

const meta: Meta = {
  title: "Page / TopNav",
  // @ts-expect-error type mismatch
  component: TopNav,
} satisfies Meta<typeof meta>;

export default meta;

export const Basic = () => {
  const sMenu = useMenu({
    placement: "bottom-start",
    mode: "focus",
    strategy: "fixed",
  });

  const cMenu = useMenu({
    placement: "bottom-start",
    mode: "focus",
    strategy: "fixed",
  });

  return (
    <>
      <TopNav>
        <TopNavItem>
          <TopNavLink ddLabel="about" />
        </TopNavItem>
        <TopNavItem>
          <TopNavLink ddLabel="services" {...sMenu.openProps} ddActive>
            <TopNavDropdown {...sMenu}>
              <TopNavDropdownItem>
                <TopNavDropdownLink className="active" href="/test-1">
                  fourth dug
                </TopNavDropdownLink>
              </TopNavDropdownItem>
              <TopNavDropdownItem>
                <TopNavDropdownLink href="/test-">Stuff</TopNavDropdownLink>
              </TopNavDropdownItem>
              <TopNavDropdownItem>
                <TopNavDropdownLink href="/test-1">
                  exactly anything
                </TopNavDropdownLink>
              </TopNavDropdownItem>
              <TopNavDropdownItem>
                <TopNavDropdownLink href="/test-1">
                  solve solve
                </TopNavDropdownLink>
              </TopNavDropdownItem>
              <TopNavDropdownItem>
                <TopNavDropdownLink href="/test-1">
                  place protection
                </TopNavDropdownLink>
              </TopNavDropdownItem>
              <TopNavDropdownItem>
                <TopNavDropdownLink href="/test-1">
                  mother flight
                </TopNavDropdownLink>
              </TopNavDropdownItem>
            </TopNavDropdown>
          </TopNavLink>
        </TopNavItem>
        <TopNavItem>
          <TopNavLink ddLabel="our company" {...cMenu.openProps}>
            <TopNavDropdown {...cMenu}>
              <TopNavDropdownItem>
                <TopNavDropdownLink href="/test-1">
                  most disappear
                </TopNavDropdownLink>
              </TopNavDropdownItem>
              <TopNavDropdownItem>
                <TopNavDropdownLink href="/test-2">
                  summer tongue
                </TopNavDropdownLink>
              </TopNavDropdownItem>
            </TopNavDropdown>
          </TopNavLink>
        </TopNavItem>
        <TopNavItem>
          <TopNavLink ddLabel="contact us" />
        </TopNavItem>
      </TopNav>
      <SideNav
        ddLogoSrc="/images/logos/logo-wordmark-stacked-2-tone-transparent.png"
        ddLogoAlt="logo"
      >
        <SideNavItem>
          <SideNavLink ddLabel="about" />
        </SideNavItem>
        <SideNavItem>
          <SideNavLink ddLabel="services" {...sMenu.openProps} ddActive>
            <SideNavDropdown {...sMenu}>
              <SideNavDropdownItem>
                <SideNavDropdownLink className="active" href="/test-1">
                  fourth dug
                </SideNavDropdownLink>
              </SideNavDropdownItem>
              <SideNavDropdownItem>
                <SideNavDropdownLink href="/test-">Stuff</SideNavDropdownLink>
              </SideNavDropdownItem>
              <SideNavDropdownItem>
                <SideNavDropdownLink href="/test-1">
                  exactly anything
                </SideNavDropdownLink>
              </SideNavDropdownItem>
              <SideNavDropdownItem>
                <SideNavDropdownLink href="/test-1">
                  solve solve
                </SideNavDropdownLink>
              </SideNavDropdownItem>
              <SideNavDropdownItem>
                <SideNavDropdownLink href="/test-1">
                  place protection
                </SideNavDropdownLink>
              </SideNavDropdownItem>
              <SideNavDropdownItem>
                <SideNavDropdownLink href="/test-1">
                  mother flight
                </SideNavDropdownLink>
              </SideNavDropdownItem>
            </SideNavDropdown>
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink ddLabel="our company" {...cMenu.openProps}>
            <SideNavDropdown {...cMenu}>
              <SideNavDropdownItem>
                <SideNavDropdownLink href="/test-1">
                  most disappear
                </SideNavDropdownLink>
              </SideNavDropdownItem>
              <SideNavDropdownItem>
                <SideNavDropdownLink href="/test-2">
                  summer tongue
                </SideNavDropdownLink>
              </SideNavDropdownItem>
            </SideNavDropdown>
          </SideNavLink>
        </SideNavItem>
        <SideNavItem>
          <SideNavLink ddLabel="contact us" />
        </SideNavItem>
      </SideNav>
    </>
  );
};
