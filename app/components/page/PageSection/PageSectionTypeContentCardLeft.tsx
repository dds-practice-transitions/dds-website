import { forwardRef } from "react";
import { PageSectionTitle } from "./PageSectionTitle";
import { PageSectionSubtitle } from "./PageSectionSubtitle";
import { PageSectionActions } from "./PageSectionActions";
import { PageSection } from "./PageSection";

import {
  PageSectionTypeContentPropsNative,
  PageSectionTypeContentPropsVariantCardLeft,
} from "./PageSectionTypeContent";
import clsx from "clsx";

import styles from "./page-section-content.module.css";

export type PageSectionTypeContentCardLeftProps =
  PageSectionTypeContentPropsNative &
    PageSectionTypeContentPropsVariantCardLeft;
export const PageSectionTypeContentCardLeft = forwardRef<
  HTMLElement,
  PageSectionTypeContentCardLeftProps
>(function PageSectionTypeContentCardLeft(
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
          <PageSectionTitle>{ddTitle}</PageSectionTitle>
          {ddSubtitle && (
            <PageSectionSubtitle>{ddSubtitle}</PageSectionSubtitle>
          )}
          <PageSectionActions>{children}</PageSectionActions>
        </div>
      </div>
    </PageSection>
  );
});
