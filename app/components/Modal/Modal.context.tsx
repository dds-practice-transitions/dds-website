import React, { FC, ReactNode, useContext, useMemo } from "react";

type ModalContextType = {
  Modal: string;
};
const ModalContext = React.createContext<ModalContextType | null>(null);
export type ModalProviderProps = {
  children: ReactNode;
};
export const ModalProvider: FC<ModalProviderProps> = ({ children }) => {
  const value = useMemo(
    () => ({
      Modal: "Modal",
    }),
    []
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};

export const useModalContext = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error(
      "'useModalContext()' must be used within a <ModalProvider /> component"
    );
  }
  return context;
};
