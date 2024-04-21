import { forwardRef } from "react";

export type SideNavDropdownPropsNative = JSX.IntrinsicElements["ul"];
export type SideNavDropdownProps = SideNavDropdownPropsNative;

export const SideNavDropdown = forwardRef<
  HTMLUListElement,
  SideNavDropdownProps
>(function SideNavDropdown({ children, ...restProps }, ref) {
  return (
    <ul {...restProps} ref={ref}>
      {children}
    </ul>
  );
});
