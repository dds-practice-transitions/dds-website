import { forwardRef } from "react";
import { clsx } from "clsx";
import { type PageSectionTypeFAQPropsVariantDefault } from "./PageSectionTypeFAQ";
import { PageSectionTitle } from "./PageSectionTitle";
import { PageSectionSubtitle } from "./PageSectionSubtitle";
import { PageSection } from "./PageSection";

export type PageSectionTypeFAQDefaultProps = Omit<
  JSX.IntrinsicElements["section"],
  "children"
> &
  PageSectionTypeFAQPropsVariantDefault;
export const PageSectionTypeFAQDefault = forwardRef<
  HTMLElement,
  PageSectionTypeFAQDefaultProps
>(function PageSectionTypeFAQDefault(
  { className, ddTitle, ddSubtitle, ddVariant, ...restProps },
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
        <PageSectionTitle>{ddTitle}</PageSectionTitle>
        {ddSubtitle && (
          <PageSectionSubtitle ddColor="secondary">
            {ddSubtitle}
          </PageSectionSubtitle>
        )}
      </div>
    </PageSection>
  );
});
