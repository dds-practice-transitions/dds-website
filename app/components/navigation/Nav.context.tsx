import React, { ReactNode, FC, useMemo, useContext } from "react";

import { TopNavDropdown } from "./TopNavDropdown";
import { TopNavDropdownItem } from "./TopNavDropdownItem";
import { TopNavDropdownLink } from "./TopNavDropdownLink";
import { TopNavItem } from "./TopNavItem";
import { TopNavLink } from "./TopNavLink";

import { SideNavItem } from "./SideNavItem";
import { SideNavLink } from "./SideNavLink";
import { SideNavDropdown } from "./SideNavDropdown";
import { SideNavDropdownItem } from "./SideNavDropdownItem";
import { SideNavDropdownLink } from "./SideNavDropdownLink";
import { match } from "ts-pattern";
import { NavLinkProps } from "./NavLink";
import { NavDropdownLinkProps } from "./NavDropdownLink";

type NavigationContextType = {
  NavigationItem: FC<{ children: ReactNode }>;
  NavigationLink: FC<NavLinkProps>;
  NavigationDropdown: FC<{ children: ReactNode }>;
  NavigationDropdownItem: FC<{ children: ReactNode }>;
  NavigationDropdownLink: FC<NavDropdownLinkProps>;
};
const NavigationContext = React.createContext<NavigationContextType | null>(
  null,
);
export type NavType = "top" | "side";
export type NavigationProviderProps = {
  children: ReactNode;
  navType: "top" | "side";
};
export const NavigationProvider: FC<NavigationProviderProps> = ({
  children,
  navType,
}) => {
  const value = useMemo(
    () =>
      match<NavType, NavigationContextType>(navType)
        .with("side", () => ({
          NavigationItem: SideNavItem,
          NavigationLink: SideNavLink,
          NavigationDropdown: SideNavDropdown,
          NavigationDropdownItem: SideNavDropdownItem,
          NavigationDropdownLink: SideNavDropdownLink,
        }))
        .with("top", () => ({
          NavigationItem: TopNavItem,
          NavigationLink: TopNavLink,
          // @ts-expect-error mismatch in the props but we handle it at runtime
          NavigationDropdown: TopNavDropdown,
          NavigationDropdownItem: TopNavDropdownItem,
          NavigationDropdownLink: TopNavDropdownLink,
        }))
        .exhaustive(),
    [navType],
  );

  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigationContext = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error(
      "'useNavigationContext()' must be used within a <NavigationProvider /> component",
    );
  }
  return context;
};
