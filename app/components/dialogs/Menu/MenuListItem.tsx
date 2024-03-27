import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./menu.module.css";

export const MenuListItem = forwardRef<
  HTMLLIElement,
  JSX.IntrinsicElements["li"]
>(function MenuListItem({ children, className, ...restProps }, ref) {
  return (
    <li
      {...restProps}
      className={clsx(styles["list-item"], className)}
      ref={ref}
    >
      {children}
    </li>
  );
});
