import React from "react";
import { tv } from "tailwind-variants";
import { cn } from "../../../utils/cn";

interface DividerProps {
    orientation?: "horizontal" | "vertical"; // default: horizontal
    color?: string; // ex: "bg-gray-300"
    className?: string;
}



export const Divider: React.FC<DividerProps> = ({
    orientation = "horizontal",
    color,
    className
}) => {
    const dividerVariants = tv({
        base: "flex-shrink-0 bg-gray-300",
        variants: {
            orientation: {
                horizontal: `w-full h-px`,
                vertical: `h-full w-px`,
            },
        },
        defaultVariants: {
            orientation: "horizontal",
        },
    });


    const classes = cn(
        dividerVariants({ orientation }),
        color,
        className
    );

    return <div className={classes} />;
};