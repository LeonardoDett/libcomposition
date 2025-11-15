import { createContext, useContext } from "react";

interface MenuContextData {
  states: {
    fitAnchor: boolean
    orientation: 'top' | 'bottom' | 'left' | 'right';
    isOpen: boolean;
  }
  events: {
    handleOpen: () => void;
    handleClose: () => void;
    handleToggle: () => void;
  }
  refs: {
    setAnchor: (node: HTMLElement | null) => void;
    setContent: (node: HTMLElement | null) => void;
    anchor: HTMLElement | null;
    content: HTMLElement | null;
  }
  anchorData: {
    height: number | undefined;
    width: number | undefined;
  }
}

export const MenuContext = createContext({} as MenuContextData);

export const useMenuContext = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }

  return context;
}
