import { ReactNode } from "react";
import { usePopperContext } from "../../Layout/Popper/PopperContext";
import { tv } from "tailwind-variants";

interface DropdownItemProps {
    children: ReactNode;
    closeOnClick?: boolean;
    onClick?: () => void;
}

const dropdownStyles = tv({
    base: [
        "w-full flex items-center gap-x-3 py-2 px-2.5 rounded-md text-sm text-gray-800 cursor-pointer",
        "hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none focus:outline-hidden focus:bg-gray-100"
    ]
})


export function DropdownItem({ children, closeOnClick, onClick }: DropdownItemProps) {
    const { events: { handleClose } } = usePopperContext();

    function handleClick() {
        if (closeOnClick) {
            handleClose()
        }
        onClick?.();
    }

    return (
        <div onClick={handleClick} className={dropdownStyles()}>
            {children}
        </div>
    );
}