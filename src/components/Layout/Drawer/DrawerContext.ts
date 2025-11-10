import { createContext, useContext } from "react";

export type DrawerOrientation = 'top' | 'bottom' | 'left' | 'right';

export interface DrawerContextProps {
    orientation: DrawerOrientation;
    close: () => void;
    isOpen: boolean;
}

export const DrawerContext = createContext<DrawerContextProps | null>(null);

export function useDrawerContext() {
    const context = useContext(DrawerContext);
    if (!context) {
        throw new Error("useDrawerContext deve ser usado dentro de <Drawer.Root />");
    }
    return context;
}
