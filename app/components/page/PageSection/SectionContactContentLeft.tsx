import { forwardRef } from "react";
import { clsx } from "clsx";
import { SectionTitle } from "./SectionTitle";
import { SectionSubtitle } from "./SectionSubtitle";
import { PageSection } from "./PageSection";
import styles from "./page-section.contact.module.css";
import { SectionPropsBase } from "./page-section.types";

export type SectionContactContentLeftPropsNative =
  JSX.IntrinsicElements["section"];
export type SectionContactContentLeftPropsCustom = SectionPropsBase;
export type SectionContactContentLeftProps =
  SectionContactContentLeftPropsNative & SectionContactContentLeftPropsCustom;

export const SectionContactContentLeft = forwardRef<
  HTMLElement,
  SectionContactContentLeftProps
>(function SectionContactContentLeft(
  { className, ddTitle, ddSubtitle, children, ...restProps },
  ref,
) {
  return (
    <PageSection
      {...restProps}
      ddType="contact"
      className={clsx(className, styles.section)}
      ref={ref}
    >
      <div className={clsx(styles.contact, styles["content-left"])}>
        <div>
          <SectionTitle>{ddTitle}</SectionTitle>
          <SectionSubtitle ddColor="secondary">{ddSubtitle}</SectionSubtitle>
        </div>
        <div>{children}</div>
      </div>
    </PageSection>
  );
});
