import { FC, forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./footer.module.css";
import { NativeAnchor } from "../../native";

export type FooterColumnLinkPropsNative = JSX.IntrinsicElements["a"];
export type FooterColumnLinkPropsCustom = {
  LinkComponent?: FC;
};
export type FooterColumnLinkProps = FooterColumnLinkPropsNative &
  FooterColumnLinkPropsCustom;
export const FooterColumnLink = forwardRef<
  HTMLAnchorElement,
  FooterColumnLinkProps
>(function FooterColumnLink(
  { children, className, LinkComponent = NativeAnchor, ...restProps },
  ref,
) {
  return (
    <LinkComponent
      {...restProps}
      className={clsx(styles["column-link"], className)}
      ref={ref}
    >
      {children}
    </LinkComponent>
  );
});
