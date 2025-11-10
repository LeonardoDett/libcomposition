import { ComponentProps } from "react";
import { tv } from "tailwind-variants";


const dialogBodyStyles = tv({
    base: 'p-4'
});

export function DialogBody({ children, ...rest }: ComponentProps<'div'>) {
    return <div {...rest} className={dialogBodyStyles()}>{children}</div>;
}