import { forwardRef } from "react";

export const NativeAnchor = forwardRef<
  HTMLAnchorElement,
  JSX.IntrinsicElements["a"]
>(function NativeAnchor({ children, ...restProps }, ref) {
  return (
    <a {...restProps} ref={ref}>
      {children}
    </a>
  );
});
