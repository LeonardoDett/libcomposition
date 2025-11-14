import { ReactNode } from "react";
import { usePopperContext } from "../../Layout/Popper/PopperContext";
import { Menu } from "../../Layout/Menu";

interface DropdownItemProps {
    children: ReactNode;
    closeOnClick?: boolean;
    onClick?: () => void;
}


export function DropdownItem({ children, closeOnClick, onClick }: DropdownItemProps) {
    const { events: { handleClose } } = usePopperContext();

    function handleClick() {
        if (closeOnClick) {
            handleClose()
        }
        onClick?.();
    }

    return (
        <Menu.Item onClick={handleClick}>
            {children}
        </Menu.Item>
    );
}