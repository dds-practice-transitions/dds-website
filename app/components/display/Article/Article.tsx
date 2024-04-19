import { forwardRef } from "react";
import { clsx } from "clsx";
import styles from "./article.module.css";

export type ArticlePropsNative = JSX.IntrinsicElements["div"];
export type ArticlePropsCustom = {
  ddOverline?: string[];
  ddTitle: string;
};
export type ArticleProps = ArticlePropsNative & ArticlePropsCustom;

export const Article = forwardRef<HTMLDivElement, ArticleProps>(
  function Article(
    { children, className, ddTitle, ddOverline, ...restProps },
    ref,
  ) {
    return (
      <article
        {...restProps}
        className={clsx(styles.article, className)}
        ref={ref}
      >
        {ddOverline && <div>{ddOverline}</div>}
        <h1>{ddTitle}</h1>
        {children}
      </article>
    );
  },
);
