import { forwardRef } from "react";

export const NativeButton = forwardRef<
  HTMLButtonElement,
  JSX.IntrinsicElements["button"]
>(function NativeButton({ children, ...restProps }, ref) {
  return (
    <button {...restProps} ref={ref}>
      {children}
    </button>
  );
});
