import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./footer.module.css";

export type FooterTopPropsNative = JSX.IntrinsicElements["div"];
export type FooterTopPropsCustom = {
  ddImgSrc: string;
  ddImgAlt: string;
  ddSummary: string;
};
export type FooterTopProps = FooterTopPropsNative & FooterTopPropsCustom;
export const FooterTop = forwardRef<HTMLDivElement, FooterTopProps>(
  function FooterTop(
    { children, className, ddImgSrc, ddImgAlt, ddSummary, ...restProps },
    ref,
  ) {
    return (
      <div {...restProps} className={clsx(styles.top, className)} ref={ref}>
        <div className={styles.main}>
          <div>
            <img src={ddImgSrc} alt={ddImgAlt} />
            <p>{ddSummary}</p>
          </div>
          <div className={styles.cols}>{children}</div>
        </div>
      </div>
    );
  },
);
