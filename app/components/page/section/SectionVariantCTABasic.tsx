import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./section-cta.module.css";
import { Section } from "./Section";
import { SectionActions } from "./SectionActions";
import { SectionSubtitle } from "./SectionSubtitle";
import { SectionTitle } from "./SectionTitle";
import { SectionPropsBase } from "./page-section.types";

export type SectionVariantCTABasicPropsNative =
  JSX.IntrinsicElements["section"];
export type SectionVariantCTABasicPropsCustom = SectionPropsBase;
export type SectionVariantCTABasicProps = SectionVariantCTABasicPropsNative &
  SectionVariantCTABasicPropsCustom;

export const SectionVariantCTABasic = forwardRef<
  HTMLElement,
  SectionVariantCTABasicProps
>(function SectionVariantCTABasic(
  { children, ddTitle, ddSubtitle, ...restProps },
  ref,
) {
  return (
    <Section
      {...restProps}
      ref={ref}
      style={{
        marginTop: 0,
      }}
    >
      <div className={clsx(styles.root, styles["variant-basic"])}>
        <SectionTitle>{ddTitle}</SectionTitle>
        <SectionSubtitle>{ddSubtitle}</SectionSubtitle>
        <SectionActions>{children}</SectionActions>
      </div>
    </Section>
  );
});
