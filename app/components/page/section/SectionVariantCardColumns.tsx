import React, { forwardRef } from "react";
import { SectionTitle } from "./SectionTitle";
import { SectionSubtitle } from "./SectionSubtitle";

import clsx from "clsx";

import styles from "./page-section-content.module.css";
import { SectionPropsBase } from "./page-section.types";
import { Section } from "./Section";

export type SectionVariantCardColumnsPropsNative =
  JSX.IntrinsicElements["section"];
export type SectionVariantCardColumnsPropsCustom = SectionPropsBase;

export type SectionVariantCardColumnsProps =
  SectionVariantCardColumnsPropsNative & SectionVariantCardColumnsPropsCustom;

export const SectionVariantCardColumns = forwardRef<
  HTMLElement,
  SectionVariantCardColumnsProps
>(function SectionVariantCardColumns(
  { ddTitle, ddSubtitle, className, children, ...restProps },
  ref,
) {
  const numOfChildren = React.Children.count(children);

  return (
    <Section {...restProps} className={clsx(styles.root, className)} ref={ref}>
      <div className={clsx(styles.content, styles.columns)}>
        <SectionTitle>{ddTitle}</SectionTitle>
        {ddSubtitle && <SectionSubtitle>{ddSubtitle}</SectionSubtitle>}
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
    </Section>
  );
});
