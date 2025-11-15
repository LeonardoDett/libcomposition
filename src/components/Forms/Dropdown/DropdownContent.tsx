import { ReactNode } from "react";
import { Menu } from "../../Layout/Menu";
import { tv } from "tailwind-variants";

interface DropdownContentProps {
    children: ReactNode;
    className?: string;
}

const menuContentVariants = tv({
    base: "p-2",
})



export function DropdownContent({ children, className }: DropdownContentProps) {
    return (
        <Menu.Content className={menuContentVariants({ class: className })}>
            {children}
        </Menu.Content>
    );
}