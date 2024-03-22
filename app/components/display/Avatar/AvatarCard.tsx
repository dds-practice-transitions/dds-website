import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./avatar.module.css";

export type AvatarCardPropsNative = JSX.IntrinsicElements["figure"];
export type AvatarCardPropsCustom = {
  ddFullName: string;
  ddTitle: string;
  ddDescription: string;
  ddImgSrc: string;
  ddImgAlt: string;
};
export type AvatarCardProps = AvatarCardPropsNative & AvatarCardPropsCustom;
export const AvatarCard = forwardRef<HTMLElement, AvatarCardProps>(
  function AvatarCard(
    {
      children,
      className,
      ddImgAlt,
      ddImgSrc,
      ddFullName,
      ddDescription,
      ddTitle,
      ...restProps
    },
    ref,
  ) {
    return (
      <figure {...restProps} className={clsx(styles.card, className)} ref={ref}>
        <img alt={ddImgAlt} src={ddImgSrc} />
        <figcaption>
          <h3>{ddFullName}</h3>
          <h4>{ddTitle}</h4>
          <p>{ddDescription}</p>
          <div>{children}</div>
        </figcaption>
      </figure>
    );
  },
);
