import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./input-radio.module.css";

export type InputRadioPropsNative = JSX.IntrinsicElements["input"];
export type InputRadioPropsCustom = {
  name: string;
  ddVariant?: "default" | "button";
  ddLabel: string;
};
export type InputRadioProps = InputRadioPropsNative & InputRadioPropsCustom;
export const InputRadio = forwardRef<HTMLInputElement, InputRadioProps>(
  function InputRadio(
    { className, id, ddVariant = "default", ddLabel, ...restProps },
    ref,
  ) {
    return (
      <label className={clsx(styles.root, styles[ddVariant])}>
        <input
          {...restProps}
          id={id}
          type="radio"
          className={clsx(className)}
          ref={ref}
        />
        <div>{ddLabel}</div>
      </label>
    );
  },
);
