import { FC, forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./button.module.css";
import { ButtonPropsCustom } from "./Button";
import { NativeAnchor } from "../../native";

export type ButtonLinkPropsNative = JSX.IntrinsicElements["a"];
export type ButtonLinkPropsCustom = ButtonPropsCustom & {
  LinkComponent?: FC;
};
export type ButtonLinkProps = ButtonLinkPropsNative & ButtonLinkPropsCustom;
export const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(
  function ButtonLink(
    {
      children,
      className,
      ddSize = "md",
      ddVariant = "primary",
      LinkComponent = NativeAnchor,
      ...restProps
    },
    ref,
  ) {
    return (
      <LinkComponent
        {...restProps}
        className={clsx(
          styles.root,
          className,
          styles[ddSize],
          styles[ddVariant],
        )}
        ref={ref}
      >
        {children}
      </LinkComponent>
    );
  },
);
