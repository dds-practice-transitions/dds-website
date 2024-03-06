import { forwardRef } from "react";
import { clsx } from "clsx";

import styles from "./footer.module.css";

export const Footer = forwardRef<HTMLElement, JSX.IntrinsicElements["nav"]>(
  function Footer({ children, className, ...restProps }, ref) {
    return (
      <footer
        {...restProps}
        className={clsx(styles.footer, className)}
        ref={ref}
      >
        <div className={styles.container}>{children}</div>
      </footer>
    );
  }
);
