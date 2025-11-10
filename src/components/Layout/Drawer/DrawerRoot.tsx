import { ReactNode } from "react";
import { Backdrop } from "../Backdrop";
import { DrawerContext, DrawerOrientation } from "./DrawerContext";

export interface DrawerRootProps {
    children: ReactNode;
    isOpen: boolean;
    onOpenChange?: (isOpen: boolean) => void;
    onClose: () => void;
    orientation?: DrawerOrientation;
}

export function DrawerRoot({ children, isOpen, onOpenChange, orientation = 'left', onClose }: DrawerRootProps) {
    return (
        <DrawerContext.Provider value={{ orientation, isOpen, close:onClose }}>
            <Backdrop.Root isOpen={isOpen} onOpenChange={onOpenChange} onClose={onClose}>
                <Backdrop.Content dimmer>
                    {isOpen && (children)}
                </Backdrop.Content>
            </Backdrop.Root>
        </DrawerContext.Provider>
    );
}
