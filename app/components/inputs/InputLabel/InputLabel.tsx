import { ReactNode, forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./input-label.module.css";

export type InputLabelPropsNative = JSX.IntrinsicElements["label"];
export type InputLabelPropsCustom = {
  children?: ReactNode;
  ddFor: string;
};
export type InputLabelProps = InputLabelPropsNative & InputLabelPropsCustom;

export const InputLabel = forwardRef<HTMLLabelElement, InputLabelProps>(
  function InputLabel({ children, className, ddFor, ...restProps }, ref) {
    if (!children) return null;
    return (
      <label
        {...restProps}
        className={clsx(styles.root, className)}
        ref={ref}
        htmlFor={ddFor}
      >
        {children}
      </label>
    );
  },
);
