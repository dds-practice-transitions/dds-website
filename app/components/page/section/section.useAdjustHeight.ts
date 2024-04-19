import { useRef, useCallback, RefCallback } from "react";
import { useBreakpoint } from "../../../hooks";

export const useAdjustHeight = () => {
  const isDesktop = useBreakpoint({ from: "tablet" });
  const imgRef = useRef<HTMLImageElement | null>(null);
  const cardRef = useCallback<RefCallback<HTMLDivElement>>(
    (node) => {
      if (!node || !imgRef.current || isDesktop) return;
      imgRef.current.style.height = node.clientHeight.toString().concat("px");
    },
    [isDesktop],
  );

  return { cardRef, imgRef };
};
