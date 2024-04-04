import { forwardRef } from "react";
import { clsx } from "clsx";
import { PageSectionTitle } from "./PageSectionTitle";
import { PageSectionSubtitle } from "./PageSectionSubtitle";
import { PageSection } from "./PageSection";
import styles from "./page-section.contact.module.css";
import { PageSectionPropsShared } from "./page-section.types";

export type SectionContactContentRightPropsNative =
  JSX.IntrinsicElements["section"];
export type SectionContactContentRightPropsCustom = PageSectionPropsShared;
export type SectionContactContentRightProps =
  SectionContactContentRightPropsNative & SectionContactContentRightPropsCustom;

export const SectionContactContentRight = forwardRef<
  HTMLElement,
  SectionContactContentRightProps
>(function SectionContactContentRight(
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
      <div className={clsx(styles.contact, styles["content-right"])}>
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
