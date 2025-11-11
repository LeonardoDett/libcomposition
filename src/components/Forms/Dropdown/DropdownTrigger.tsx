import { ChevronDown, ChevronUp } from "lucide-react";
import { Icon } from "../../Layout/Icon";
import { Popper } from "../../Layout/Popper";
import { usePopperContext } from "../../Layout/Popper/PopperContext";
import { ReactNode } from "react";

interface DropdownTriggerProps {
    children: ReactNode;
}


export function DropdownTrigger({ children }: DropdownTriggerProps) {
    const { states: { isOpen } } = usePopperContext();

    return (
        <Popper.TriggerClick className="h-full">
            <div className="p-1 flex gap-1 items-center content-center h-full">
                {children}
                <Icon component={isOpen ? ChevronUp : ChevronDown} />
            </div>
        </Popper.TriggerClick>

    );
}