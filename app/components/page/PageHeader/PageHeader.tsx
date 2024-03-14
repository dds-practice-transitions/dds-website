import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./page-header.module.css";
import { Icon } from "../../display/Icon";
import { PhoneCall, SendEmail } from "@icon-park/react";

export type PageHeaderProps = JSX.IntrinsicElements["header"];
export const PageHeader = forwardRef<HTMLElement, PageHeaderProps>(
  function PageHeader({ className, children, ...restProps }, ref) {
    return (
      <header {...restProps} className={clsx(styles.root, className)} ref={ref}>
        <div className={styles.secondary}>
          <a href="mailto:info@ddsbrokerage.com">
            <Icon DDIcon={SendEmail} ddSize={16} />
            <span>info@ddsbrokerage.com</span>
          </a>
          <a href="tel:4848990432">
            <Icon DDIcon={PhoneCall} ddSize={16} />
            <span>(484) 899-0432</span>
          </a>
        </div>
        <div className={styles.primary}>{children}</div>
      </header>
    );
  },
);
