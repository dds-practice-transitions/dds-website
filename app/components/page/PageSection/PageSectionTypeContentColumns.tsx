import React, { forwardRef } from "react";
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
  { ddTitle, ddSubtitle, ddVariant, className, children, ...restProps },
  ref,
) {
  const numOfChildren = React.Children.count(children);

  return (
    <PageSection
      {...restProps}
      ddType="content"
      className={clsx(styles.root, className)}
      ref={ref}
    >
      <div className={clsx(styles[ddVariant], styles.content)}>
        <PageSectionTitle>{ddTitle}</PageSectionTitle>
        {ddSubtitle && <PageSectionSubtitle>{ddSubtitle}</PageSectionSubtitle>}
        <div
          className={clsx("cols", {
            two: numOfChildren === 2,
            three: numOfChildren === 3,
          })}
        >
          {React.Children.map(children, (child, i) =>
            // @ts-expect-error type mismatch
            React.cloneElement(child, {
              className: i % 2 ? "even" : "odd",
              ddNumOfCols: numOfChildren,
            }),
          )}
        </div>
      </div>
    </PageSection>
  );
});
