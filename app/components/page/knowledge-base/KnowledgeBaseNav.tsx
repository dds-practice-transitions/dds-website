import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./knowledge-base.module.css";

export type KnowledgeBaseNavPropsNative = JSX.IntrinsicElements["article"];
export type KnowledgeBaseNavPropsCustom = Record<string, unknown>;
export type KnowledgeBaseNavProps = KnowledgeBaseNavPropsNative &
  KnowledgeBaseNavPropsCustom;

export const KnowledgeBaseNav = forwardRef<HTMLElement, KnowledgeBaseNavProps>(
  function KnowledgeBaseNav({ children, className, ...restProps }, ref) {
    return (
      <article {...restProps} className={clsx(styles.nav, className)} ref={ref}>
        <div>
          {/* <div>search</div> */}
          <ul>{children}</ul>
        </div>
      </article>
    );
  },
);
