import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./page-header.module.css";

export const PageHeaderLogo = forwardRef<
  HTMLImageElement,
  JSX.IntrinsicElements["img"]
>(function PageHeaderLogo(
  { children, className, alt = "page-header-logo", ...restProps },
  ref,
) {
  return (
    <img
      {...restProps}
      alt={alt}
      className={clsx(styles.img, className)}
      ref={ref}
    >
      {children}
    </img>
  );
});
