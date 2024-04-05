import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./hero-pane.module.css";
import { HeroLayoutProps } from "./Hero";

export type HeroPaneProps = JSX.IntrinsicElements["div"] & HeroLayoutProps;
export const HeroPane = forwardRef<HTMLDivElement, HeroPaneProps>(
  function HeroPane(props, ref) {
    switch (props.ddLayout) {
      case "full-screen":
        return null;

      case "dual-pane":
        return (
          <div
            className={clsx(
              styles.root,
              styles[props.ddLayout],
              props.className,
            )}
            ref={ref}
          >
            <div>
              <img src={props.ddPaneImage} alt={props.ddPaneImageAlt} />
            </div>
          </div>
        );

      case "img-grid":
        return (
          <div
            className={clsx(styles.root, styles["img-grid"], props.className)}
            ref={ref}
          >
            {props.ddImages.map((img, i) => (
              <div
                style={{
                  gridArea: `box-${i + 1}`,
                }}
                key={i}
              >
                <img src={img.src} alt={img.alt} />
              </div>
            ))}
          </div>
        );

      default:
        break;
    }
  },
);
