import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./page-section.module.css";

export type PageSectionPropsCustom = {
  ddBackgroundSrc?: string;
  ddBackgroundAlt?: string;
};
export type PageSectionPropsNative = JSX.IntrinsicElements["section"];
export type PageSectionProps = PageSectionPropsNative &
  PageSectionPropsCustom & { ddType: string };
export const PageSection = forwardRef<HTMLElement, PageSectionProps>(
  function PageSection(
    {
      children,
      ddType,
      ddBackgroundAlt,
      ddBackgroundSrc,
      className,
      ...restProps
    },
    ref,
  ) {
    return (
      <section
        {...restProps}
        className={clsx(
          styles["page-section"],
          styles[`page-section-${ddType}`],
          className,
        )}
        ref={ref}
      >
        {ddBackgroundAlt && ddBackgroundSrc && (
          <img src={ddBackgroundSrc} alt={ddBackgroundAlt} />
        )}
        {children}
      </section>
    );
  },
);
