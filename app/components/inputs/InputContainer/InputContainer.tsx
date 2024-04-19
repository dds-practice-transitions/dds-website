import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./input-container.module.css";

export type InputContainerPropsNative = JSX.IntrinsicElements["div"];
export type InputContainerPropsCustom = Record<string, unknown>;
export type InputContainerProps = InputContainerPropsNative &
  InputContainerPropsCustom;

export const InputContainer = forwardRef<HTMLDivElement, InputContainerProps>(
  function InputContainer({ children, className, ...restProps }, ref) {
    return (
      <div {...restProps} className={clsx(styles.root, className)} ref={ref}>
        {children}
      </div>
    );
  },
);
