import { forwardRef } from "react";

export type SectionVariantCardColumnPropsNative =
  JSX.IntrinsicElements["figure"];
export type SectionVariantCardColumnPropsCustom = {
  ddTitle: string;
  ddSubtitle: string;
  ddImageSrc: string;
  ddImageAlt: string;
  ddNumOfCols?: number;
};
export type SectionVariantCardColumnProps =
  SectionVariantCardColumnPropsNative & SectionVariantCardColumnPropsCustom;

export const SectionVariantCardColumn = forwardRef<
  HTMLElement,
  SectionVariantCardColumnProps
>(function SectionVariantCardColumn(
  {
    className,
    ddImageAlt,
    ddImageSrc,
    ddSubtitle,
    ddTitle,
    children,
    ddNumOfCols = 0,
    ...restProps
  },
  ref,
) {
  return (
    <figure className={className} {...restProps} ref={ref}>
      <img src={ddImageSrc} alt={ddImageAlt} />
      <figcaption>
        <h2>{ddTitle}</h2>
        <p>{ddSubtitle}</p>
        {ddNumOfCols <= 2 && <div className="col-action">{children}</div>}
      </figcaption>
    </figure>
  );
});
