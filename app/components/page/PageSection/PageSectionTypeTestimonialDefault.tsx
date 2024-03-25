import { forwardRef } from "react";
import { clsx } from "clsx";
import { PageSectionTitle } from "./PageSectionTitle";
import { PageSectionSubtitle } from "./PageSectionSubtitle";
import { PageSection } from "./PageSection";

import { PageSectionTypeTestimonialPropsVariantDefault } from "./PageSectionTypeTestimonial";

export type PageSectionTypeTestimonialDefaultProps = Omit<
  JSX.IntrinsicElements["section"],
  "children"
> &
  PageSectionTypeTestimonialPropsVariantDefault;

export const PageSectionTypeTestimonialDefault = forwardRef<
  HTMLElement,
  PageSectionTypeTestimonialDefaultProps
>(function PageSectionTypeTestimonialDefault(
  {
    className,
    ddTitle,
    ddSubtitle,
    ddTestimonials = [],
    ddVariant,
    ...restProps
  },
  ref,
) {
  return (
    <PageSection
      {...restProps}
      ddType="team"
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
        <div></div>
      </div>
    </PageSection>
  );
});
