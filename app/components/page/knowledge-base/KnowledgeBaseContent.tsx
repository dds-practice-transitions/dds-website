import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./knowledge-base.module.css";

export type KnowledgeBaseContentPropsNative = JSX.IntrinsicElements["div"];
export type KnowledgeBaseContentPropsCustom = Record<string, unknown>;
export type KnowledgeBaseContentProps = KnowledgeBaseContentPropsNative &
  KnowledgeBaseContentPropsCustom;

export const KnowledgeBaseContent = forwardRef<
  HTMLDivElement,
  KnowledgeBaseContentProps
>(function KnowledgeBaseContent({ children, className, ...restProps }, ref) {
  return (
    <div {...restProps} className={clsx(styles.content, className)} ref={ref}>
      {children}
    </div>
  );
});
