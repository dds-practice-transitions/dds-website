import { forwardRef } from "react";
import { clsx } from "clsx";

import styles from "./page-footer.module.css";

export const PageFooter = forwardRef<HTMLElement, JSX.IntrinsicElements["nav"]>(
  function PageFooter({ children, className, ...restProps }, ref) {
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
