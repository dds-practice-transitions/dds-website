import { forwardRef } from "react";
import { clsx } from "clsx";
import { type PageSectionTypeCTAPropsVariantDefault } from "./PageSectionTypeCTA";
import { PageSectionTitle } from "./PageSectionTitle";
import { PageSectionSubtitle } from "./PageSectionSubtitle";
import { PageSectionActions } from "./PageSectionActions";
import { PageSection } from "./PageSection";

export type PageSectionTypeCTAPropsNative = JSX.IntrinsicElements["section"];
export type PageSectionTypeCTADefaultPropsCustom =
  PageSectionTypeCTAPropsVariantDefault;
export type PageSectionTypeCTADefaultProps = PageSectionTypeCTAPropsNative &
  PageSectionTypeCTADefaultPropsCustom;
export const PageSectionTypeCTADefault = forwardRef<
  HTMLElement,
  PageSectionTypeCTADefaultProps
>(function PageSectionTypeCTADefault(
  {
    className,
    ddTitle,
    ddSubtitle,
    ddVariant,
    ddBackground = "primary",
    children,
    ...restProps
  },
  ref,
) {
  return (
    <PageSection
      {...restProps}
      ddType="cta"
      className={clsx(ddVariant, className, ddBackground)}
      ref={ref}
    >
      <div>
        <PageSectionTitle>{ddTitle}</PageSectionTitle>
        {ddSubtitle && <PageSectionSubtitle>{ddSubtitle}</PageSectionSubtitle>}
        <PageSectionActions>{children}</PageSectionActions>
      </div>
    </PageSection>
  );
});
