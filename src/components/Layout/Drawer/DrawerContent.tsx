import { ReactNode } from "react";
import { motion, Variants } from "motion/react";
import { useDrawerContext } from "./DrawerContext";
import { tv } from "tailwind-variants";

export interface DrawerContentProps {
    children: ReactNode;
    className?: string;
}

const drawer = tv({
    base: "fixed bg-white dark:bg-gray-800 shadow-xl z-50 p-4",
    variants: {
        orientation: {
            top: "top-0 left-0 right-0 w-full",
            bottom: "bottom-0 left-0 right-0 w-full",
            left: "top-0 left-0 bottom-0",
            right: "top-0 right-0 bottom-0",
        }
    }
});

const drawerVariants: Variants = {
    hidden: (orientation: 'top' | 'bottom' | 'left' | 'right') => {
        return {
            x: orientation === 'left' ? '-100%' : orientation === 'right' ? '100%' : 0,
            y: orientation === 'top' ? '-100%' : orientation === 'bottom' ? '100%' : 0,
        }
    },
    visible: {
        x: 0,
        y: 0,
    },
    exit: (orientation: 'top' | 'bottom' | 'left' | 'right') => {
        return {
            x: orientation === 'left' ? '-100%' : orientation === 'right' ? '100%' : 0,
            y: orientation === 'top' ? '-100%' : orientation === 'bottom' ? '100%' : 0,
        }
    }
};

export function DrawerContent({ children, className }: DrawerContentProps) {
    const { orientation } = useDrawerContext();

    return (
        <motion.div
            className={drawer({ orientation, className })}
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            custom={orientation}
            onClick={(e) => e.stopPropagation()}
        >
            {children}
        </motion.div>
    );
}
