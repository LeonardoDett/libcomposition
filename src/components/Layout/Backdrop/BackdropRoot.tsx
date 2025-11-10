import { useState, useCallback, useMemo, type ReactNode } from "react";
import { BackdropContext } from "./BackdropContext";

export interface BackdropRootProps {
    children: ReactNode;
    isOpen?: boolean;
    onOpenChange?: (isOpen: boolean) => void;
    onClose?: () => void;
}

export function BackdropRoot({
    children,
    isOpen: controlledIsOpen,
    onOpenChange,
    onClose
}: BackdropRootProps) {
    const [internalIsOpen, setInternalIsOpen] = useState(false);

    const isControlled = controlledIsOpen !== undefined;
    const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

    const handleOpenChange = useCallback((newIsOpen: boolean) => {
        if (isControlled) {
            onOpenChange?.(newIsOpen);
        } else {
            setInternalIsOpen(newIsOpen);
        }
    }, [isControlled, onOpenChange]);

    const contextValue = useMemo(() => ({
        isOpen,
        open: () => handleOpenChange(true),
        close: () => {
            handleOpenChange(false)
            onClose?.()
        },
        toggle: () => handleOpenChange(!isOpen),
    }), [isOpen, handleOpenChange, onClose]);

    return (
        <BackdropContext.Provider value={contextValue}>
            {children}
        </BackdropContext.Provider>
    );
}