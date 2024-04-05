import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./input-checkbox.module.css";

export type InputCheckboxPropsNative = JSX.IntrinsicElements["input"];
export type InputCheckboxPropsCustom = {
  id: string;
  name: string;
  ddVariant: "default" | "pill";
};
export type InputCheckboxProps = InputCheckboxPropsNative &
  InputCheckboxPropsCustom;
export const InputCheckbox = forwardRef<HTMLInputElement, InputCheckboxProps>(
  function InputCheckbox(
    { children, className, id, ddVariant, ...restProps },
    ref,
  ) {
    return (
      <label htmlFor={id} className={styles[ddVariant]}>
        <input
          {...restProps}
          id={id}
          type="checkbox"
          className={clsx(styles.root, className)}
          ref={ref}
        >
          <span>{children}</span>
        </input>
      </label>
    );
  },
);
