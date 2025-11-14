import { ReactNode } from "react";
import { Menu } from "../../Layout/Menu";

interface DropdownRootProps {
    children: ReactNode;
}


export function DropdownRoot({ children }: DropdownRootProps) {
    return (
        <Menu.Root orientation="bottom" fitAnchor>
            {children}
        </Menu.Root>
    );
}