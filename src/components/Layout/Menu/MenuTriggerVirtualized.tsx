import { useEffect } from "react";
import { useMenuContext } from "./MenuContext";

interface MenuTriggerVirtualizedProps {
    isOpen?: boolean;
    virtualRef: React.RefObject<HTMLElement | null>;
}


export function MenuTriggerVirtualized({
    isOpen,
    virtualRef
}: MenuTriggerVirtualizedProps) {

    const { events, refs } = useMenuContext();
    useEffect(() => {
        if (isOpen) {
            events.handleOpen();
        } else {
            events.handleClose();
        }
    }, [isOpen, events]);

    useEffect(() => {
        refs.setAnchor(virtualRef.current);
    }, [virtualRef, refs, isOpen]);

    return(
        <></>
    )
}