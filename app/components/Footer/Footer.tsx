import { forwardRef } from "react";
import { clsx } from "clsx";

import styles from "./footer.module.css";

export const Footer = forwardRef<HTMLElement, JSX.IntrinsicElements["nav"]>(
  function Footer(props, ref) {
    return (
      <footer {...props} className={clsx(styles.footer)} ref={ref}>
        test
      </footer>
    );
  }
);
