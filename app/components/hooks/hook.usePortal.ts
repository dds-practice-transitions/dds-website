import { useEffect, useState } from "react";
import { useDynamicNode } from ".";

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

  return { isOpen, togglePortal, portalRoot: getDynamicNode() };
};
