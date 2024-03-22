import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./accordion.module.css";

export const AccordionListItem = forwardRef<
  HTMLLIElement,
  JSX.IntrinsicElements["li"]
>(function AccordionListItem({ children, className, ...restProps }, ref) {
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
