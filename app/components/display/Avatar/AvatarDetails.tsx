import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./avatar.module.css";

export type AvatarDetailsPropsNative = JSX.IntrinsicElements["figcaption"];
export type AvatarDetailsPropsCustom = {
  ddFullName?: string;
  ddJobTitle?: string;
  ddDescription?: string;
};
export type AvatarDetailsProps = AvatarDetailsPropsNative &
  AvatarDetailsPropsCustom;
export const AvatarDetails = forwardRef<HTMLElement, AvatarDetailsProps>(
  function AvatarDetails(
    {
      children,
      className,
      ddFullName,
      ddJobTitle,
      ddDescription,
      ...restProps
    },
    ref,
  ) {
    if (!ddFullName && !ddJobTitle) return null;

    return (
      <figcaption
        {...restProps}
        className={clsx(styles.details, className)}
        ref={ref}
      >
        <h3>{ddFullName}</h3>
        {ddJobTitle && <h4>{ddJobTitle}</h4>}
        {ddDescription && <p>{ddDescription}</p>}
        <div>{children}</div>
      </figcaption>
    );
  },
);
