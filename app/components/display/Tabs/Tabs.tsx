import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./tabs.module.css";

export const Tabs = forwardRef<HTMLUListElement, JSX.IntrinsicElements["ul"]>(
  function Tabs({ children, className, ...restProps }, ref) {
    return (
      <ul {...restProps} className={clsx(styles.root, className)} ref={ref}>
        {children}
      </ul>
    );
  },
);
