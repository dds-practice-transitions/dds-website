import { forwardRef } from "react";
import { clsx } from "clsx";
import { type PageSectionTypeFAQPropsVariantDefault } from "./PageSectionTypeFAQ";
import { SectionTitle } from "./SectionTitle";
import { SectionSubtitle } from "./SectionSubtitle";
import { PageSection } from "./PageSection";
import {
  AccordionList,
  AccordionListItem,
  Accordion,
} from "../../display/Accordion";

export type PageSectionTypeFAQDefaultProps = Omit<
  JSX.IntrinsicElements["section"],
  "children"
> &
  PageSectionTypeFAQPropsVariantDefault;

export const PageSectionTypeFAQDefault = forwardRef<
  HTMLElement,
  PageSectionTypeFAQDefaultProps
>(function PageSectionTypeFAQDefault(
  { className, ddTitle, ddSubtitle, ddItems = [], ddVariant, ...restProps },
  ref,
) {
  return (
    <PageSection
      {...restProps}
      ddType="faq"
      className={clsx(ddVariant, className)}
      ref={ref}
    >
      <div>
        <SectionTitle>{ddTitle}</SectionTitle>
        {ddSubtitle && (
          <SectionSubtitle ddColor="secondary">{ddSubtitle}</SectionSubtitle>
        )}
        <AccordionList>
          {ddItems.map(({ ddContent, ddTitle }, i) => (
            <AccordionListItem key={`accordion-${i}`}>
              <Accordion ddTitle={ddTitle}>{ddContent}</Accordion>
            </AccordionListItem>
          ))}
        </AccordionList>
      </div>
    </PageSection>
  );
});
