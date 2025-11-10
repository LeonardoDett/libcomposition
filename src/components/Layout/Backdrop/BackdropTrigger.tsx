import type { ReactNode } from "react";
import { useBackdropContext } from "./BackdropContext";

export interface BackdropTriggerProps {
    children: ReactNode;
}

export function BackdropTrigger({ children }: BackdropTriggerProps) {
    const { toggle } = useBackdropContext();

    return (
        <div onClick={toggle} className="inline-block cursor-pointer">
            {children}
        </div>
    );
}