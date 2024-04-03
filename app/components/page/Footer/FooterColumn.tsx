import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./footer.module.css";

export type FooterColumnPropsNative = JSX.IntrinsicElements["div"];
export type FooterColumnPropsCustom = {
  ddTitle: string;
};
export type FooterColumnProps = FooterColumnPropsNative &
  FooterColumnPropsCustom;
export const FooterColumn = forwardRef<HTMLDivElement, FooterColumnProps>(
  function FooterColumn({ children, className, ddTitle, ...restProps }, ref) {
    return (
      <div {...restProps} className={clsx(styles.column, className)} ref={ref}>
        <h3>{ddTitle}</h3>
        <ul>{children}</ul>
      </div>
    );
  },
);
