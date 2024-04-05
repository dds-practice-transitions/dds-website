import { forwardRef } from "react";
import { SectionTitle } from "./SectionTitle";
import { SectionSubtitle } from "./SectionSubtitle";
import { SectionActions } from "./SectionActions";

import clsx from "clsx";

import styles from "./section-card.module.css";
import { Section } from "./Section";
import { SectionPropsBase } from "./page-section.types";

export type SectionVariantCardLeftPropsNative =
  JSX.IntrinsicElements["section"];
export type SectionVariantCardLeftPropsCustom = SectionPropsBase & {
  ddImageSrc: string;
  ddImageAlt: string;
};
export type SectionVariantCardLeftProps = SectionVariantCardLeftPropsNative &
  SectionVariantCardLeftPropsCustom;
export const SectionVariantCardLeft = forwardRef<
  HTMLElement,
  SectionVariantCardLeftProps
>(function SectionVariantCardLeft(
  {
    ddTitle,
    ddSubtitle,
    ddImageSrc,
    ddImageAlt,
    children,
    className,
    ...restProps
  },
  ref,
) {
  return (
    <Section {...restProps} className={clsx(styles.root, className)} ref={ref}>
      <div className={clsx(styles.content, styles["card-left"])}>
        <img src={ddImageSrc} alt={ddImageAlt} />
        <div className="card">
          <SectionTitle>{ddTitle}</SectionTitle>
          <SectionSubtitle>{ddSubtitle}</SectionSubtitle>
          <SectionActions>{children}</SectionActions>
        </div>
      </div>
    </Section>
  );
});
