import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./hero.module.css";
import { HeroPane } from "./HeroPane";
import { Button, ButtonProps } from "../../inputs/Button/Button";

export type HeroLayoutProps =
  | { ddLayout: "full-screen" }
  | { ddLayout: "dual-pane"; ddPaneImage: string; ddPaneImageAlt: string }
  | { ddLayout: "img-grid"; ddImages: { src: string; alt: string }[] };
export type HeroBaseProps = {
  ddHeight: string | number;
  ddBackground: string;
  ddBackgroundAlt: string;
  ddTitle: string;
  ddSubtitle: string;
  ddCtaLabel: string;
  ddCtaVariant: ButtonProps["ddVariant"];
  ddCtaPage: "contact-us";
};
export type HeroProps = JSX.IntrinsicElements["div"] &
  HeroBaseProps &
  HeroLayoutProps;
export const Hero = forwardRef<HTMLDivElement, HeroProps>(function Hero(
  {
    className,
    ddHeight = 400,
    ddBackground,
    ddBackgroundAlt,
    ddTitle,
    ddSubtitle,
    ddCtaVariant = "primary",
    ddCtaLabel,
    ddCtaPage,
    children,
    ...restProps
  },
  ref
) {
  return (
    <div
      className={clsx(styles.root, className)}
      style={{
        height: ddHeight,
      }}
      ref={ref}
    >
      <div
        className={clsx(
          styles["container"],
          styles[`layout-${restProps.ddLayout}`]
        )}
      >
        <div className={clsx("pane", styles["pane-primary"])}>
          <h1>{ddTitle}</h1>
          <p>{ddSubtitle}</p>
          <div className={styles.cta}>
            <Button ddVariant={ddCtaVariant}>{ddCtaLabel}</Button>
          </div>
        </div>
        <HeroPane {...restProps} />
      </div>
      <div className={styles.bg}>
        <img src={ddBackground} alt={ddBackgroundAlt} />
      </div>
    </div>
  );
});
