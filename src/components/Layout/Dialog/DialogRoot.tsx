import { ReactNode, useState } from "react";
import { Backdrop } from "../Backdrop";
import { DialogContext, DialogContextProps } from "./DialogContext";

interface DialogRootProps {
    children: ReactNode;
    isOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
    onClose?: () => void;
    onOpen?: () => void;
}

export function DialogRoot({ children, isOpen: controlledIsOpen, onOpenChange, onClose, onOpen }: DialogRootProps) {
    const [internalIsOpen, setInternalIsOpen] = useState(false);
    const isOpen = controlledIsOpen ?? internalIsOpen;

    const handleOpenChange = (open: boolean) => {
        onOpenChange?.(open);
        setInternalIsOpen(open);
    };

    const contextValue: DialogContextProps = {
        isOpen,
        open: () => {
            handleOpenChange(true)
            onOpen?.()
        },
        close: () => {
            handleOpenChange(false)
            onClose?.()
        },
        toggle: () => handleOpenChange(!isOpen),
    };

    return (
        <DialogContext.Provider value={contextValue}>
            <Backdrop.Root isOpen={isOpen} onOpenChange={handleOpenChange}>
                {children}
            </Backdrop.Root>
        </DialogContext.Provider>
    );
}