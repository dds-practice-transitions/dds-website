import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./input-group.module.css";

export type InputGroupPropsNative = JSX.IntrinsicElements["div"];
export type InputGroupPropsCustom = {
  ddVariant: "checkbox" | "radio";
};
export type InputGroupProps = InputGroupPropsNative & InputGroupPropsCustom;

export const InputGroup = forwardRef<HTMLDivElement, InputGroupProps>(
  function InputGroup({ children, className, ddVariant, ...restProps }, ref) {
    return (
      <div
        {...restProps}
        className={clsx(styles.root, className, styles[ddVariant])}
        ref={ref}
      >
        {children}
      </div>
    );
  },
);
