import { ComponentProps } from "react";
import { tv } from "tailwind-variants";


const dialogTitleVariantsStyles = tv({
    base: "text-lg font-semibold text-gray-900 dark:text-white"
});

export function DialogTitle({ children, ...rest }: ComponentProps<'h2'>) {
    return <h2 {...rest} className={dialogTitleVariantsStyles()}>{children}</h2>;
}