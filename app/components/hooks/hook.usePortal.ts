import { FC, ReactNode, useEffect, useState } from "react";
import { useDynamicNode } from ".";
import { createPortal } from "react-dom";

export const usePortal = () => {
  const { getDynamicNode, destroyNode } = useDynamicNode();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    return () => {
      destroyNode();
    };
  }, []);

  useEffect(() => {
    if (!isOpen) destroyNode();
  }, [isOpen]);

  const togglePortal = () => {
    setIsOpen((prevState) => !prevState);
  };

  const Portal: FC<{ children: ReactNode }> = ({ children }) => {
    if (!isOpen) return null;
    const portalRoot = getDynamicNode();
    return createPortal(children, portalRoot);
  };

  return { togglePortal, Portal };
};
