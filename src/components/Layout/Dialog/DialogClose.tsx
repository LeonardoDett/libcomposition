import { ComponentProps } from "react";
import { useDialogContext } from "./DialogContext";
import { Button } from "../../Forms/Button";

export function DialogClose({ children, ...rest }: ComponentProps<typeof Button>) {
    const { close } = useDialogContext();
    return (
        <Button onClick={close} {...rest}>
            {children}
        </Button>
    );
}