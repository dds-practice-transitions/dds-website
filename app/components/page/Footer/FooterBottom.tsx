import React, { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./footer.module.css";

export type FooterBottomPropsNative = JSX.IntrinsicElements["div"];
export type FooterBottomPropsCustom = {
  ddCopyrightYear: number;
};
export type FooterBottomProps = FooterBottomPropsNative &
  FooterBottomPropsCustom;
export const FooterBottom = forwardRef<HTMLDivElement, FooterBottomProps>(
  function FooterBottom(
    { children, className, ddCopyrightYear, ...restProps },
    ref,
  ) {
    return (
      <div {...restProps} className={clsx(styles.bottom, className)} ref={ref}>
        <span>
          Copyright © {ddCopyrightYear} DDS Practice Transitions, LLC
        </span>
        <span>|</span>
        <span>All Rights Reserved</span>
        {React.Children.map(children, (child) => (
          <>
            <span>|</span>
            <span>{child}</span>
          </>
        ))}
      </div>
    );
  },
);
