import { forwardRef } from "react";
import { clsx } from "clsx";
import { PageSectionTitle } from "./PageSectionTitle";
import { PageSectionSubtitle } from "./PageSectionSubtitle";
import { PageSection } from "./PageSection";
import styles from "./page-section.contact.module.css";
import { PageSectionPropsShared } from "./page-section.types";

export type SectionContactContentLeftPropsNative =
  JSX.IntrinsicElements["section"];
export type SectionContactContentLeftPropsCustom = PageSectionPropsShared;
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
          <PageSectionTitle>{ddTitle}</PageSectionTitle>
          {ddSubtitle && (
            <PageSectionSubtitle ddColor="secondary">
              {ddSubtitle}
            </PageSectionSubtitle>
          )}
        </div>
        <div>{children}</div>
      </div>
    </PageSection>
  );
});
