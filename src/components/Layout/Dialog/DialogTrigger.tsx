import { cloneElement, ComponentProps, isValidElement, ReactNode } from "react";
import { useDialogContext } from "./DialogContext";

interface DialogTriggerProps {
    children: ReactNode;
}

export function DialogTrigger({ children }: DialogTriggerProps) {
    const { open } = useDialogContext();
    if (isValidElement(children)) {
        return cloneElement(children, {
            onClick: () => open(),
        } as ComponentProps<any>);
    }
    return <div onClick={open}>{children}</div>;
}

