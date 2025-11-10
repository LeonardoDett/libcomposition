import { ReactNode } from "react";
import { useAccordion } from "./AccordionContext";
import { tv } from "tailwind-variants";

interface AccordionContentProps {
    children: ReactNode;
    className?: string;
}

const accordionContentStyles = tv({
    base: 'overflow-hidden text-sm transition-all',
    variants: {
        isOpen: {
            true: 'max-h-96',
            false: 'max-h-0',
        }
    }
})

export function AccordionContent({ children, className }: AccordionContentProps) {
    const { isOpen } = useAccordion();

    return (
        <div className={accordionContentStyles({ isOpen, className })}>
            {children}
        </div>
    );
}