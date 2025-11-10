import { useEffect } from "react";
import { usePopperContext } from "./PopperContext";

interface PopperTriggerVirtualizedProps {
    isOpen: boolean;
    virtualRef: React.RefObject<HTMLElement | null>;
}


export function PopperTriggerVirtualized({
    isOpen,
    virtualRef
}: PopperTriggerVirtualizedProps) {

    const { events, refs } = usePopperContext();
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