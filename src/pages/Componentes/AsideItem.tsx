import { ElementType } from "react";
import { IconButton } from "../../components/Layout/IconButton";

export function AsideItem({ icon, isSelected }: { icon: ElementType, isSelected: boolean }) {

    function getItem() {
        if (isSelected) {
            return (
                <div className="bg-background-variant rounded-xl">
                    <IconButton color="primary" icon={icon} />
                </div>
            )
        } else {
            return (
                <div className="">
                    <IconButton variant="fill" color="primary" icon={icon} />
                </div>
            )
        }
    }

    return (
        <>
            {getItem()}
        </>
    )
}