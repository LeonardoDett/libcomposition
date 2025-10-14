import { createContext, useContext } from "react";

interface PopperContextType {
    states:{
      fitAnchor: boolean
      orientation: 'top' | 'bottom' | 'left' | 'right';
    }
    events: {
        isOpen: boolean;
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


export const PopperContext = createContext<PopperContextType | null>(null);

export function usePopperContext(): PopperContextType {
    const context = useContext(PopperContext);

    if (!context) {
        throw new Error("usePopperContext must be used within a PopperRoot");
    }

    return context;
}