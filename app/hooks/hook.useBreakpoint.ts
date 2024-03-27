import { useState, useEffect, useMemo } from "react";

/**
 * Represents different predefined breakpoints for responsive design.
 */
type Breakpoint = "mobile" | "tablet" | "desktop" | "retina";

/**
 * Represents the map of breakpoints to their corresponding viewport widths.
 */
export const breakpointMap: { [key in Breakpoint]: number } = {
  mobile: 480,
  tablet: 768,
  desktop: 1024,
  retina: 1200,
};
export type BreakpointFromTo = { from?: Breakpoint; to?: Breakpoint };
type UseBreakpointParams = Breakpoint | BreakpointFromTo;

const calculateSize = (breakpoint: UseBreakpointParams) => {
  if (typeof window === "undefined") return false;
  if (typeof breakpoint === "string") {
    return window.innerWidth > breakpointMap[breakpoint];
  }

  const fromDevice = breakpoint.from;
  const toDevice = breakpoint.to;

  const from = fromDevice ? breakpointMap[fromDevice] : 0;
  if (!toDevice) return window.innerWidth >= from;
  const to = breakpointMap[toDevice] - 1;
  return window.innerWidth >= from && window.innerWidth <= to;
};

/**
 * A custom React hook that listens to the size of the viewport and determines whether it passes a certain predefined breakpoint.
 */
export function useBreakpoint(params: UseBreakpointParams) {
  const initShouldRender = useMemo(() => calculateSize(params), [params]);
  const [shouldRender, setShouldRender] = useState(() => initShouldRender);

  useEffect(() => {
    function handleResize() {
      setShouldRender(calculateSize(params));
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [params]);

  return shouldRender;
}
