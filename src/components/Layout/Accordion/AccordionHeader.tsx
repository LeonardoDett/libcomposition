import { ReactNode } from "react";
import { useAccordion } from "./AccordionContext";
import { tv } from "tailwind-variants";
import { Icon } from "../Icon";
import { ChevronDown } from "lucide-react";

interface AccordionHeaderProps {
    children: ReactNode;
    className?: string;
}

const accordionHeaderStyles = tv({
    base: 'cursor-pointer flex flex-1 items-center justify-between py-4 transition-all',
})


export function AccordionHeader({ children, className }: AccordionHeaderProps) {
    const { isOpen, toggleOpen } = useAccordion();

    return (
        <div
            aria-expanded={isOpen}
            onClick={toggleOpen}
            className={accordionHeaderStyles({className})}
        >
            {children}
            <Icon component={ChevronDown} className={`${isOpen ? 'rotate-180' : ''}`} />
        </div>
    );
}