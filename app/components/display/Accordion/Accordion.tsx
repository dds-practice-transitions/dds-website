import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./accordion.module.css";
import { Icon } from "../Icon";
import { Plus } from "@icon-park/react";

export type AccordionProps = JSX.IntrinsicElements["details"] & {
  ddTitle: string;
};
export const Accordion = forwardRef<HTMLDetailsElement, AccordionProps>(
  function Accordion({ children, className, ddTitle, ...restProps }, ref) {
    return (
      <details
        {...restProps}
        className={clsx(styles.root, className)}
        ref={ref}
      >
        <summary>
          <div>{ddTitle}</div>
          <Icon DDIcon={Plus} ddSize={16} />
        </summary>
        <p>{children}</p>
      </details>
    );
  },
);
