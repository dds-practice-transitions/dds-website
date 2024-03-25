import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./avatar.module.css";
import { AvatarDetails, AvatarDetailsPropsCustom } from "./AvatarDetails";

export type AvatarPropsNative = JSX.IntrinsicElements["figure"];
export type AvatarPropsCustom = {
  ddImgSrc: string;
  ddSize: "sm" | "md" | "lg";
  ddPosition: "top" | "center" | "bottom";
} & AvatarDetailsPropsCustom;
export type AvatarProps = AvatarPropsNative & AvatarPropsCustom;
export const Avatar = forwardRef<HTMLElement, AvatarProps>(function Avatar(
  {
    children,
    className,
    ddFullName,
    ddJobTitle,
    ddPosition = "center",
    ddImgSrc,
    ddSize = "md",
    ...restProps
  },
  ref,
) {
  return (
    <figure
      {...restProps}
      className={clsx(styles.avatar, className, ddSize, ddPosition, {
        "has-details": ddFullName || ddJobTitle,
      })}
      ref={ref}
    >
      <img src={ddImgSrc} alt="avatar" />
      <AvatarDetails ddFullName={ddFullName} ddJobTitle={ddJobTitle}>
        {children}
      </AvatarDetails>
    </figure>
  );
});
