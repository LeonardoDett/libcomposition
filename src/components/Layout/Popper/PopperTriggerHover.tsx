import { Children, isValidElement, ReactElement, Ref, useEffect, useState } from "react";
import { usePopperContext } from "./PopperContext";

interface PopperTriggerHoverProps {
    children: ReactElement & { ref?: Ref<HTMLElement> };
}


export function PopperTriggerHover({
    children,
}: PopperTriggerHoverProps) {
    const { events, refs } = usePopperContext();
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {

        if (isHovered) {
            events.handleOpen();
        } else {
            events.handleClose();
        }

    }, [isHovered, events]);

    const child = Children.only(children);
    if (!isValidElement(child)) {
        return children;
    }

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            ref={refs.setAnchor}
        >
            {children}
        </div>
    )

}