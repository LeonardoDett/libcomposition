import { ReactNode } from "react";
import { Menu } from "../../Layout/Menu";

interface DropdownContentProps {
    children: ReactNode;
}


export function DropdownContent({ children }: DropdownContentProps) {
    return (
        <Menu.Content className="p-2">
            {children}
        </Menu.Content>
    );
}