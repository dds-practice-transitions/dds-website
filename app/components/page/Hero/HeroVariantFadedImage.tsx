import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./hero.module.css";
import {
  HeroSection,
  HeroSectionPropsCustom,
  HeroSectionPropsNative,
} from "./HeroSection";
import { HeroTitle } from "./HeroTitle";
import { HeroSubtitle } from "./HeroSubtitle";
import { HeroActions } from "./HeroActions";
import { HeroOverline } from "./HeroOverline";

export type HeroVariantFadedImagePropsNative = HeroSectionPropsNative;
export type HeroVariantFadedImagePropsCustom = HeroSectionPropsCustom & {
  ddTitle: string;
  ddSubtitle?: string;
  ddOverline?: string;
  ddAlign?: "left" | "center" | "right";
  ddLogoSrc?: string;
  ddLogoAlt?: string;
};
export type HeroVariantFadedImageProps = HeroVariantFadedImagePropsNative &
  HeroVariantFadedImagePropsCustom;
export const HeroVariantFadedImage = forwardRef<
  HTMLElement,
  HeroVariantFadedImageProps
>(function HeroVariantFadedImage(
  {
    children,
    ddTitle,
    ddSubtitle,
    ddOverline,
    ddBackgroundAlt,
    ddBackgroundSrc,
    ddLogoAlt,
    ddLogoSrc,
    ddAlign = "left",
    ...restProps
  },
  ref,
) {
  return (
    <HeroSection
      {...restProps}
      ddBackgroundAlt={ddBackgroundAlt}
      ddBackgroundSrc={ddBackgroundSrc}
      ref={ref}
    >
      <div className={styles.overlay} />
      <div className={clsx(styles["variant-faded-img"], ddAlign)}>
        <div>
          {ddLogoAlt && ddLogoSrc && (
            <img src={ddLogoSrc} alt={ddLogoAlt} className={styles.logo} />
          )}
          <HeroOverline>{ddOverline}</HeroOverline>
          <HeroTitle>{ddTitle}</HeroTitle>
          <HeroSubtitle>{ddSubtitle}</HeroSubtitle>
          <HeroActions>{children}</HeroActions>
        </div>
      </div>
    </HeroSection>
  );
});
