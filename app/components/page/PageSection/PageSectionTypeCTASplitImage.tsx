import { forwardRef } from "react";
import { clsx } from "clsx";
import { type PageSectionTypeCTAPropsVariantSplitImage } from "./PageSectionTypeCTA";
import { PageSectionTitle } from "./PageSectionTitle";
import { PageSectionSubtitle } from "./PageSectionSubtitle";
import { PageSectionActions } from "./PageSectionActions";
import { Button } from "../../inputs/Button";
import { PageSection } from "./PageSection";

export type PageSectionTypeCTASplitImageProps = Omit<
  JSX.IntrinsicElements["section"],
  "children"
> &
  PageSectionTypeCTAPropsVariantSplitImage;
export const PageSectionTypeCTASplitImage = forwardRef<
  HTMLElement,
  PageSectionTypeCTASplitImageProps
>(function PageSectionTypeCTASplitImage(
  {
    className,
    ddTitle,
    ddSubtitle,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ddVariant,
    // ddActionHref,
    ddActionLabel,
    ddBackground = "primary",
    ddImgAlt,
    ddImgSrc,
    ...restProps
  },
  ref,
) {
  return (
    <PageSection
      {...restProps}
      ddType="cta"
      className={clsx(ddVariant, ddBackground, className)}
      ref={ref}
    >
      <div>
        <div>
          <PageSectionTitle>{ddTitle}</PageSectionTitle>
          {ddSubtitle && (
            <PageSectionSubtitle>{ddSubtitle}</PageSectionSubtitle>
          )}
          <PageSectionActions>
            <Button ddVariant="paper" ddSize="md">
              {ddActionLabel}
            </Button>
          </PageSectionActions>
        </div>
        <div>
          <img src={ddImgSrc} alt={ddImgAlt} />
        </div>
      </div>
    </PageSection>
  );
});
