import { ComponentProps } from "react";
import { tv } from "tailwind-variants";


const footerVariantsStyles = tv({
    base:"p-4 border-t border-gray-200 dark:border-gray-700 flex justify-end gap-2"
});

export function DialogFooter({ children, ...rest }: ComponentProps<'div'>) {
    return <div {...rest} className={footerVariantsStyles()}>{children}</div>;
}
