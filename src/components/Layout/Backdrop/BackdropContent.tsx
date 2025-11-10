import type { ReactNode } from "react";
import { useBackdropContext } from "./BackdropContext";
import { AnimatePresence, motion } from "motion/react";

export interface BackdropContentProps {
    children: ReactNode;
    dimmer?: boolean;
    closeOnClickBackdrop?: boolean;
}

export function BackdropContent({ children, dimmer = true, closeOnClickBackdrop = true }: BackdropContentProps) {
    const { isOpen, close } = useBackdropContext();

    const handleBackdropClick = () => {
        if (closeOnClickBackdrop) {
            close();
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleBackdropClick}
                    className={`fixed inset-0 z-50 flex items-center justify-center ${dimmer ? 'bg-black/50' : ''}`}
                >
                    <motion.div
                        onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar no conteúdo
                        className="relative"
                    >
                        {children}
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}