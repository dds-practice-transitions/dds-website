import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./section-text.module.css";
import { Section } from "./Section";

export type SectionVariantTextPropsNative = JSX.IntrinsicElements["section"];
export type SectionVariantTextPropsCustom = Record<string, unknown>;
export type SectionVariantTextProps = SectionVariantTextPropsNative &
  SectionVariantTextPropsCustom;

export const SectionVariantText = forwardRef<
  HTMLElement,
  SectionVariantTextProps
>(function SectionVariantText({ children, className, ...restProps }, ref) {
  return (
    <Section {...restProps} className={clsx(styles.root, className)} ref={ref}>
      <div className={clsx(styles.content, styles["text"])}>{children}</div>
    </Section>
  );
});
