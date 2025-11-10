import { X } from "lucide-react";
import { Button } from "../../Forms/Button";
import { useDialogContext } from "./DialogContext";

export function DialogCloseIcon({ ...rest }) {
    const { close } = useDialogContext();
    return (
        <Button variant="text" size="sm" onClick={close} {...rest}>
            <X size={20} />
        </Button>
    );
}