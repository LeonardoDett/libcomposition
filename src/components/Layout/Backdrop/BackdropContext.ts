import { createContext, useContext } from "react";

export interface BackdropContextProps {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
}

export const BackdropContext = createContext<BackdropContextProps | null>(null);

export function useBackdropContext() {
    const context = useContext(BackdropContext);
    if (!context) {
        throw new Error("useBackdropContext deve ser usado dentro de <Backdrop.Root />");
    }
    return context;
}