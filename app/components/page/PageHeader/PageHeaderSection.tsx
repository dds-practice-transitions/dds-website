import { forwardRef } from "react";
import { clsx } from "clsx";

export const PageHeaderColumn = forwardRef<
  HTMLDivElement,
  JSX.IntrinsicElements["div"]
>(function PageHeaderColumn({ children, className, ...restProps }, ref) {
  return (
    <div {...restProps} className={clsx(className)} ref={ref}>
      {children}
    </div>
  );
});
