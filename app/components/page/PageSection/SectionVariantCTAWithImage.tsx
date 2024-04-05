import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./section-cta.module.css";
import { Section } from "./Section";
import { PageSectionActions } from "./PageSectionActions";
import { SectionSubtitle } from "./SectionSubtitle";
import { SectionTitle } from "./SectionTitle";
import { SectionPropsBase } from "./page-section.types";

export type SectionVariantCTAWithImagePropsNative =
  JSX.IntrinsicElements["section"];
export type SectionVariantCTAWithImagePropsCustom = SectionPropsBase & {
  ddImageAlt: string;
  ddImageSrc: string;
};
export type SectionVariantCTAWithImageProps =
  SectionVariantCTAWithImagePropsNative & SectionVariantCTAWithImagePropsCustom;

export const SectionVariantCTAWithImage = forwardRef<
  HTMLElement,
  SectionVariantCTAWithImageProps
>(function SectionVariantCTAWithImage(
  { children, ddTitle, ddSubtitle, ddImageAlt, ddImageSrc, ...restProps },
  ref,
) {
  return (
    <Section {...restProps} ref={ref}>
      <div className={clsx(styles.root, styles["variant-with-image"])}>
        <div>
          <SectionTitle>{ddTitle}</SectionTitle>
          <SectionSubtitle>{ddSubtitle}</SectionSubtitle>
          <PageSectionActions>{children}</PageSectionActions>
        </div>
        <div>
          <img src={ddImageSrc} alt={ddImageAlt} />
        </div>
      </div>
    </Section>
  );
});
