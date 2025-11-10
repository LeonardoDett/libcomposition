import { createContext, useContext } from "react";

interface AccordionContextType {
    isOpen: boolean;
    toggleOpen: () => void;
}

export const AccordionContext = createContext<AccordionContextType | undefined>(undefined);

export const useAccordion = () => {
    const context = useContext(AccordionContext);
    if (!context) {
        throw new Error("useAccordion must be used within an Accordion.Root");
    }
    return context;
};