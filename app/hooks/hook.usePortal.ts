import {
  ReactNode,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useDynamicNode } from ".";
import { createPortal } from "react-dom";

export const usePortal = () => {
  const { getDynamicNode, destroyNode } = useDynamicNode();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    return () => {
      destroyNode();
    };
  }, [destroyNode]);

  useEffect(() => {
    if (!isOpen) destroyNode();
  }, [destroyNode, isOpen]);

  const togglePortal = () => {
    setIsOpen((prevState) => !prevState);
  };

  const closePortal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openPortal = useCallback(() => {
    setIsOpen(true);
  }, []);

  const Portal = memo(function Portal({
    children,
    disabled = false,
  }: {
    children: ReactNode;
    disabled?: boolean;
  }) {
    if (!isOpen) return null;
    if (disabled) return children; // doesn't render a portal if the portal is disabled
    const portalRoot = getDynamicNode();
    return createPortal(children, portalRoot);
  });

  return useMemo(
    () => ({ togglePortal, closePortal, openPortal, Portal }),
    [Portal, closePortal, openPortal],
  );
};
