import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./footer.module.css";

export type FooterPropsNative = JSX.IntrinsicElements["footer"];
export type FooterProps = FooterPropsNative;
export const Footer = forwardRef<HTMLElement, FooterProps>(function Footer(
  { children, className, ...restProps },
  ref,
) {
  return (
    <footer {...restProps} className={clsx(styles.footer, className)} ref={ref}>
      {children}
    </footer>
  );
});
