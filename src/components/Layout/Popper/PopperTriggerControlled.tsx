import { Children, isValidElement, ReactElement, Ref, useEffect } from "react";
import { usePopperContext } from "./PopperContext";

interface PopperTriggerControlledProps {
    children: ReactElement & { ref?: Ref<HTMLElement> };
    isOpen: boolean;
}


export function PopperTriggerControlled({
    children,
    isOpen,
}: PopperTriggerControlledProps) {

    const { events, refs } = usePopperContext();
    useEffect(() => {
        if (isOpen) {
            events.handleOpen();
        } else {
            events.handleClose();
        }
    }, [isOpen, events]);

    const child = Children.only(children);
    if (!isValidElement(child)) {
        return children;
    }


    return (
        <div ref={refs.setAnchor}>
            {children}
        </div>
    )

}