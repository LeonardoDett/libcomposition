import { createContext, useContext } from "react";

export interface DialogContextProps {
    isOpen: boolean;
    open: () => void;
    close: () => void;
    toggle: () => void;
}

export const DialogContext = createContext<DialogContextProps | null>(null);

export function useDialogContext() {
    const context = useContext(DialogContext);
    if (!context) {
        throw new Error("useDialogContext deve ser usado dentro de <Dialog.Root />");
    }
    return context;
}
