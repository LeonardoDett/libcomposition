import { tv } from "tailwind-variants";
import { Backdrop } from "../Backdrop";
import { ComponentProps } from "react";


const dialogContentStyles = tv({
    base: 'bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-lg m-4'
});

export function DialogContent({ children, ...rest }: ComponentProps<'div'>) {
    return (
        <Backdrop.Content >
            <div {...rest} className={dialogContentStyles()}>
                {children}
            </div>
        </Backdrop.Content>
    );
}