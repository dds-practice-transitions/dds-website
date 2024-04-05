import { forwardRef } from "react";
import { clsx } from "clsx";
import { SectionTitle } from "./SectionTitle";
import { SectionSubtitle } from "./SectionSubtitle";
import {
  AccordionList,
  AccordionListItem,
  Accordion,
  AccordionProps,
} from "../../display/Accordion";
import { SectionPropsBase } from "./page-section.types";
import { Section } from "./Section";
import styles from "./section-faq.module.css";

export type SectionVariantFAQPropsNative = JSX.IntrinsicElements["section"];
export type SectionVariantFAQPropsCustom = SectionPropsBase & {
  ddItems: (Pick<AccordionProps, "ddTitle"> & { ddContent: string })[];
};
export type SectionVariantFAQProps = SectionVariantFAQPropsNative &
  SectionVariantFAQPropsCustom;

export const SectionVariantFAQ = forwardRef<
  HTMLElement,
  SectionVariantFAQProps
>(function SectionVariantFAQ(
  { className, ddTitle, ddSubtitle, ddItems = [], ...restProps },
  ref,
) {
  return (
    <Section {...restProps} className={clsx(styles.root, className)} ref={ref}>
      <div className={clsx(styles.content, styles["faq"])}>
        <SectionTitle>{ddTitle}</SectionTitle>
        <SectionSubtitle ddColor="secondary">{ddSubtitle}</SectionSubtitle>
        <AccordionList>
          {ddItems.map(({ ddContent, ddTitle }, i) => (
            <AccordionListItem key={`accordion-${i}`}>
              <Accordion ddTitle={ddTitle}>{ddContent}</Accordion>
            </AccordionListItem>
          ))}
        </AccordionList>
      </div>
    </Section>
  );
});
