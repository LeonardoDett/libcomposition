import { ReactNode } from "react";
import { Popper } from "../../Layout/Popper";

interface DropdownRootProps {
    children: ReactNode;
}


export function DropdownRoot({ children }: DropdownRootProps) {
    return (
        <Popper.Root orientation="bottom" fitAnchor>
            {children}
        </Popper.Root>
    );
}