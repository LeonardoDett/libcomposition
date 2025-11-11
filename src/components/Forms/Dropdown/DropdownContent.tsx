import { ReactNode } from "react";
import { Popper } from "../../Layout/Popper";

interface DropdownContentProps {
    children: ReactNode;
}


export function DropdownContent({ children }: DropdownContentProps) {
    return (
        <Popper.Content className="p-2">
            {children}
        </Popper.Content>
    );
}