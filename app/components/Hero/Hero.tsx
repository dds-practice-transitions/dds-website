import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./hero.module.css";

export type HeroProps = JSX.IntrinsicElements["div"] & {
  ddHeight: number;
  ddBackground: string;
  ddBackgroundAlt: string;
  ddTitle: string;
  ddSubtitle: string;
  ddLayout: "full-screen";
  ddPaneImage: string;
  ddPaneImageAlt: string;
};
export const Hero = forwardRef<HTMLDivElement, HeroProps>(function Hero(
  {
    className,
    ddBackground,
    ddLayout = "full-screen",
    ddTitle,
    ddSubtitle,
    ddBackgroundAlt,
    ddHeight = 400,
    ddPaneImage,
    ddPaneImageAlt,
    children,
    ...restProps
  },
  ref
) {
  return (
    <div
      {...restProps}
      className={clsx(styles.root, className)}
      style={{
        height: ddHeight,
      }}
      ref={ref}
    >
      <div className={clsx(styles["container"], styles[`layout-${ddLayout}`])}>
        <div className={clsx("pane", styles["pane-primary"])}>
          <h1>{ddTitle}</h1>
          <p>{ddSubtitle}</p>
        </div>
        <div className={clsx("pane", styles["pane-alt"])}>
          <img src={ddPaneImage} alt={ddPaneImageAlt} />
        </div>
        {children}
      </div>
      <div className={styles.bg}>
        <img src={ddBackground} alt={ddBackgroundAlt} />
      </div>
    </div>
  );
});
