import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./menu.module.css";

export const MenuList = forwardRef<
  HTMLUListElement,
  JSX.IntrinsicElements["ul"]
>(function MenuList({ children, className, ...restProps }, ref) {
  return (
    <ul {...restProps} className={clsx(styles.list, className)} ref={ref}>
      {children}
    </ul>
  );
});
