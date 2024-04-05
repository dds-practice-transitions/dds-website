import { forwardRef } from "react";
import { SectionTitle } from "./SectionTitle";
import { SectionSubtitle } from "./SectionSubtitle";
import { SectionActions } from "./SectionActions";
import { PageSection } from "./PageSection";

import {
  SectionVariantCardPropsNative,
  SectionVariantCardPropsVariantCardLeft,
} from "./SectionVariantCard";
import clsx from "clsx";

import styles from "./page-section-content.module.css";

export type SectionVariantCardLeftProps = SectionVariantCardPropsNative &
  SectionVariantCardPropsVariantCardLeft;
export const SectionVariantCardLeft = forwardRef<
  HTMLElement,
  SectionVariantCardLeftProps
>(function SectionVariantCardLeft(
  {
    ddTitle,
    ddSubtitle,
    ddVariant,
    ddImageSrc,
    ddImageAlt,
    ddBackgroundAlt,
    ddBackgroundSrc,
    children,
    className,
    ...restProps
  },
  ref,
) {
  console.log(
    ddTitle,
    ddSubtitle,
    ddVariant,
    ddImageSrc,
    ddImageAlt,
    ddBackgroundAlt,
    ddBackgroundSrc,
    children,
    className,
    restProps,
  );
  return (
    <PageSection
      {...restProps}
      ddBackgroundAlt={ddBackgroundAlt}
      ddBackgroundSrc={ddBackgroundSrc}
      className={clsx(styles.root, className)}
      ref={ref}
    >
      <div className={clsx(styles[ddVariant], styles.content)}>
        <img src={ddImageSrc} alt={ddImageAlt} />
        <div className="card">
          <SectionTitle>{ddTitle}</SectionTitle>
          {ddSubtitle && <SectionSubtitle>{ddSubtitle}</SectionSubtitle>}
          <SectionActions>{children}</SectionActions>
        </div>
      </div>
    </PageSection>
  );
});
