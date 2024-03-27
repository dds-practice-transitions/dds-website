import { forwardRef } from "react";
import { clsx } from "clsx";
import { type PageSectionTypeCTAPropsVariantDefault } from "./PageSectionTypeCTA";
import { PageSectionTitle } from "./PageSectionTitle";
import { PageSectionSubtitle } from "./PageSectionSubtitle";
import { PageSectionActions } from "./PageSectionActions";
import { Button } from "../../inputs/Button";
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
    ddActionLabel,
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
        <PageSectionActions>
          <Button ddVariant="paper">{ddActionLabel}</Button>
        </PageSectionActions>
      </div>
    </PageSection>
  );
});
