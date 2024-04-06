import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./knowledge-base.module.css";

export type KnowledgeBasePropsNative = JSX.IntrinsicElements["section"];
export type KnowledgeBasePropsCustom = Record<string, unknown>;
export type KnowledgeBaseProps = KnowledgeBasePropsNative &
  KnowledgeBasePropsCustom;

export const KnowledgeBase = forwardRef<HTMLElement, KnowledgeBaseProps>(
  function KnowledgeBase({ children, className, ...restProps }, ref) {
    return (
      <section
        {...restProps}
        className={clsx(styles.main, className)}
        ref={ref}
      >
        {children}
      </section>
    );
  },
);
