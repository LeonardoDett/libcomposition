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


    refs.setAnchor(virtualRef.current);

    return(
        <>
        </>
    )
}