import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./input-checkbox.module.css";

export type InputCheckboxPropsNative = JSX.IntrinsicElements["input"];
export type InputCheckboxPropsCustom = {
  name: string;
  ddVariant?: "default" | "pill";
  ddLabel: string;
};
export type InputCheckboxProps = InputCheckboxPropsNative &
  InputCheckboxPropsCustom;
export const InputCheckbox = forwardRef<HTMLInputElement, InputCheckboxProps>(
  function InputCheckbox(
    { className, id, ddVariant = "default", ddLabel, ...restProps },
    ref,
  ) {
    return (
      <label className={clsx(styles.root, styles[ddVariant])}>
        <input
          {...restProps}
          id={id}
          type="checkbox"
          className={clsx(className)}
          ref={ref}
        />
        <div>{ddLabel}</div>
      </label>
    );
  },
);
