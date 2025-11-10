import { ComponentProps } from "react";
import { tv } from "tailwind-variants";



const dialogHeaderStyles = tv({
   base: "p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center"
});


export function DialogHeader({ children, ...rest }: ComponentProps<'div'>) {
    return <div {...rest} className={dialogHeaderStyles()}>{children}</div>;
}
