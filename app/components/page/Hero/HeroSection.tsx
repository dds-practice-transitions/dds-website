import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./hero.module.css";

export type HeroSectionPropsCustom = {
  ddBackgroundSrc?: string;
  ddBackgroundAlt?: string;
};
export type HeroSectionPropsNative = JSX.IntrinsicElements["section"];
export type HeroSectionProps = HeroSectionPropsNative & HeroSectionPropsCustom;
export const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(
  function HeroSection(
    { children, ddBackgroundAlt, ddBackgroundSrc, className, ...restProps },
    ref,
  ) {
    return (
      <section
        {...restProps}
        className={clsx(styles.section, className)}
        ref={ref}
      >
        {ddBackgroundAlt && ddBackgroundSrc && (
          <img src={ddBackgroundSrc} alt={ddBackgroundAlt} />
        )}
        {children}
      </section>
    );
  },
);
