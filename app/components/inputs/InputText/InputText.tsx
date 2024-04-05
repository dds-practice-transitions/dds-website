import { HTMLInputTypeAttribute, forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./input-text.module.css";
import { InputLabel } from "../InputLabel";
import { InputContainer } from "../InputContainer";

export type InputTextPropsNative = Omit<JSX.IntrinsicElements["input"], "type">;
export type InputTextPropsCustom = {
  id: string;
  name: string;
  ddLabel?: string;
  ddSize?: "sm" | "md" | "lg";
  ddType: Extract<
    HTMLInputTypeAttribute,
    "text" | "email" | "number" | "tel" | "url" | "password"
  >;
};
export type InputTextProps = InputTextPropsNative & InputTextPropsCustom;
export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  function InputText(
    { className, id, ddLabel, ddSize = "md", ddType = "text", ...restProps },
    ref,
  ) {
    return (
      <InputContainer>
        <InputLabel ddFor={id}>{ddLabel}</InputLabel>
        <input
          {...restProps}
          id={id}
          type={ddType}
          className={clsx(styles.root, className, styles[ddSize])}
          ref={ref}
        />
      </InputContainer>
    );
  },
);
