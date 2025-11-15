import { ChevronDown, ChevronUp } from "lucide-react";
import { Icon } from "../../Layout/Icon";
import { usePopperContext } from "../../Layout/Popper/PopperContext";
import { ReactNode } from "react";
import { Menu } from "../../Layout/Menu";

interface DropdownTriggerProps {
    children: ReactNode;
}


export function DropdownTrigger({ children }: DropdownTriggerProps) {
    const { states: { isOpen} } = usePopperContext();

    return (
        <Menu.Trigger className="h-full">
            <div className="p-1 flex gap-1 items-center content-center h-full">
                {children}
                <Icon component={isOpen ? ChevronUp : ChevronDown} />
            </div>
        </Menu.Trigger>

    );
}