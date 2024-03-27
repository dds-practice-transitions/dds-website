import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./accordion.module.css";

export const AccordionList = forwardRef<
  HTMLUListElement,
  JSX.IntrinsicElements["ul"]
>(function AccordionList({ children, className, ...restProps }, ref) {
  return (
    <ul {...restProps} className={clsx(styles.list, className)} ref={ref}>
      {children}
    </ul>
  );
});
