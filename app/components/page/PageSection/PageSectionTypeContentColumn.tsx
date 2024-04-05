import { forwardRef } from "react";

export type PageSectionTypeContentColumnPropsNative =
  JSX.IntrinsicElements["figure"];
export type PageSectionTypeContentColumnPropsCustom = {
  ddTitle: string;
  ddSubtitle: string;
  ddImageSrc: string;
  ddImageAlt: string;
  ddNumOfCols?: number;
};
export type PageSectionTypeContentColumnProps =
  PageSectionTypeContentColumnPropsNative &
    PageSectionTypeContentColumnPropsCustom;

export const PageSectionTypeContentColumn = forwardRef<
  HTMLElement,
  PageSectionTypeContentColumnProps
>(function PageSectionTypeContentColumn(
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
