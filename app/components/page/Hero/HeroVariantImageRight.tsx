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

export type HeroVariantImageRightPropsNative = HeroSectionPropsNative;
export type HeroVariantImageRightPropsCustom = HeroSectionPropsCustom & {
  ddTitle: string;
  ddSubtitle: string;
  ddOverline?: string;
  ddImageSrc: string;
  ddImageAlt: string;
};
export type HeroVariantImageRightProps = HeroVariantImageRightPropsNative &
  HeroVariantImageRightPropsCustom;
export const HeroVariantImageRight = forwardRef<
  HTMLElement,
  HeroVariantImageRightProps
>(function HeroVariantImageRight(
  {
    children,
    ddTitle,
    ddSubtitle,
    ddOverline,
    ddBackgroundAlt,
    ddBackgroundSrc,
    ddImageSrc,
    ddImageAlt,
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
      <div className={clsx(styles["variant-image-right"])}>
        <div>
          <HeroOverline>{ddOverline}</HeroOverline>
          <HeroTitle>{ddTitle}</HeroTitle>
          <HeroSubtitle>{ddSubtitle}</HeroSubtitle>
          <HeroActions>{children}</HeroActions>
        </div>
        <div>
          <img src={ddImageSrc} alt={ddImageAlt} />
        </div>
      </div>
    </HeroSection>
  );
});
