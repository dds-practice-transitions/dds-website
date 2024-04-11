import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./hero.module.css";
import {
  HeroSection,
  HeroSectionPropsCustom,
  HeroSectionPropsNative,
} from "./HeroSection";
import { HeroTitle } from "./HeroTitle";
import { HeroActions } from "./HeroActions";

export type HeroVariantSEOBannerPropsNative = HeroSectionPropsNative;
export type HeroVariantSEOBannerPropsCustom = HeroSectionPropsCustom & {
  ddTitle: string;
  ddLogoSrc: string;
  ddLogoAlt: string;
};
export type HeroVariantSEOBannerProps = HeroVariantSEOBannerPropsNative &
  HeroVariantSEOBannerPropsCustom;
export const HeroVariantSEOBanner = forwardRef<
  HTMLElement,
  HeroVariantSEOBannerProps
>(function HeroVariantSEOBanner(
  {
    children,
    ddTitle,
    ddLogoSrc,
    ddLogoAlt,
    ddBackgroundAlt,
    ddBackgroundSrc,
    ...restProps
  },
  ref,
) {
  return (
    <HeroSection
      {...restProps}
      className={styles["seo-container"]}
      ddBackgroundAlt={ddBackgroundAlt}
      ddBackgroundSrc={ddBackgroundSrc}
      ref={ref}
    >
      <div className={clsx(styles["variant-seo-banner"])}>
        <img src={ddLogoSrc} alt={ddLogoAlt} />
        <HeroTitle>{ddTitle}</HeroTitle>
        <HeroActions>{children}</HeroActions>
      </div>
    </HeroSection>
  );
});
