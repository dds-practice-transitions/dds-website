import { FC, forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./knowledge-base.module.css";
import { NativeAnchor } from "../../native";

export type KnowledgeBaseNavItemPropsNative = JSX.IntrinsicElements["a"];
export type KnowledgeBaseNavItemPropsCustom = {
  LinkComponent?: FC;
};
export type KnowledgeBaseNavItemProps = KnowledgeBaseNavItemPropsNative &
  KnowledgeBaseNavItemPropsCustom;

export const KnowledgeBaseNavItem = forwardRef<
  HTMLAnchorElement,
  KnowledgeBaseNavItemProps
>(function KnowledgeBaseNavItem(
  { children, className, LinkComponent = NativeAnchor, ...restProps },
  ref,
) {
  return (
    <LinkComponent
      {...restProps}
      className={clsx(styles.nav, className)}
      ref={ref}
    >
      {children}
    </LinkComponent>
  );
});
