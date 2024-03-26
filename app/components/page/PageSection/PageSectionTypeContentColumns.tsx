import { forwardRef } from "react";
import { PageSectionTitle } from "./PageSectionTitle";
import { PageSectionSubtitle } from "./PageSectionSubtitle";
import { PageSection } from "./PageSection";

import {
  PageSectionTypeContentPropsNative,
  PageSectionTypeContentPropsVariantColumns,
} from "./PageSectionTypeContent";
import clsx from "clsx";

import styles from "./page-section-content.module.css";

export type PageSectionTypeContentColumnsProps =
  PageSectionTypeContentPropsNative & PageSectionTypeContentPropsVariantColumns;
export const PageSectionTypeContentColumns = forwardRef<
  HTMLElement,
  PageSectionTypeContentColumnsProps
>(function PageSectionTypeContentColumns(
  { ddTitle, ddSubtitle, ddVariant, ddColumns, className, ...restProps },
  ref,
) {
  return (
    <PageSection
      {...restProps}
      ddType="content"
      className={clsx(styles.root, className)}
      ref={ref}
    >
      <div className={styles[ddVariant]}>
        <PageSectionTitle>{ddTitle}</PageSectionTitle>
        {ddSubtitle && <PageSectionSubtitle>{ddSubtitle}</PageSectionSubtitle>}
        <div
          className={clsx("cols", {
            two: ddColumns.length === 2,
            three: ddColumns.length === 3,
          })}
        >
          {ddColumns.map((col, i) => (
            <figure key={`col-${i}`} className={i % 2 ? "even" : "odd"}>
              <img src={col.ddImageSrc} alt={col.ddImageAlt} />
              <figcaption>
                <h2>{col.ddTitle}</h2>
                <p>{col.ddSubtitle}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </PageSection>
  );
});
