import { ReactNode, useState } from "react";
import { AccordionContext } from "./AccordionContext";
import { tv } from "tailwind-variants";

const accordionRootStyles = tv({
    base: '',
    variants: {
        variant: {
            block: "shadow-sm px-2 rounded-xs",
            unstiled: ""
        }
    }
})


interface AccordionRootProps {
    children: ReactNode;
    defaultOpen?: boolean;
    className?: string;
    variant?: keyof typeof accordionRootStyles.variants.variant;
}


export function AccordionRoot({ children, defaultOpen = false, className, variant = "block" }: AccordionRootProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    const toggleOpen = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <AccordionContext.Provider value={{ isOpen, toggleOpen }}>
            <div className={accordionRootStyles({ className, variant })}>
                {children}
            </div>
        </AccordionContext.Provider>
    );
}