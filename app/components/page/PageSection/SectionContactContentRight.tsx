import { forwardRef } from "react";
import { clsx } from "clsx";
import { SectionTitle } from "./SectionTitle";
import { SectionSubtitle } from "./SectionSubtitle";
import { PageSection } from "./PageSection";
import styles from "./page-section.contact.module.css";
import { SectionPropsBase } from "./page-section.types";

export type SectionContactContentRightPropsNative =
  JSX.IntrinsicElements["section"];
export type SectionContactContentRightPropsCustom = SectionPropsBase;
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
          <SectionTitle>{ddTitle}</SectionTitle>
          {ddSubtitle && (
            <SectionSubtitle ddColor="secondary">{ddSubtitle}</SectionSubtitle>
          )}
        </div>
        <div>{children}</div>
      </div>
    </PageSection>
  );
});
