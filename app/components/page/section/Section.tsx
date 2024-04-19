import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./section.module.css";

export type SectionPropsCustom = {
  ddBackgroundSrc?: string;
  ddBackgroundAlt?: string;
  ddBackgroundColor?: string;
};
export type SectionPropsNative = JSX.IntrinsicElements["section"];
export type SectionProps = SectionPropsNative & SectionPropsCustom;
export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  {
    children,
    ddBackgroundAlt,
    ddBackgroundSrc,
    ddBackgroundColor,
    className,
    ...restProps
  },
  ref,
) {
  return (
    <section
      {...restProps}
      className={clsx(
        styles.section,
        className,
        ddBackgroundColor && {
          [styles[ddBackgroundColor]]: !!ddBackgroundColor,
        },
      )}
      ref={ref}
    >
      {children}
      {ddBackgroundAlt && ddBackgroundSrc && (
        <img src={ddBackgroundSrc} alt={ddBackgroundAlt} />
      )}
    </section>
  );
});
