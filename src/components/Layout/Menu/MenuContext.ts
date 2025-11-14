import { createContext, useContext } from "react";

interface MenuContextData {
  states: {
    isOpen: boolean;
  };
  events: {
    handleClose: () => void;
  };
}

export const MenuContext = createContext({} as MenuContextData);

export const useMenuContext = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }

  return context;
}
