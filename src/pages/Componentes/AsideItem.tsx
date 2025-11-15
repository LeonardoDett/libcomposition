import { ElementType } from "react";
import { Button } from "../../components/Forms/Button";
import { Icon } from "../../components/Layout/Icon";

export function AsideItem({ icon, isSelected }: { icon: ElementType, isSelected: boolean }) {

    function getItem() {
        if (isSelected) {
            return (
                <div className="bg-background-variant rounded-xl">
                    <Button variant="text" size="icon">
                        <Icon className="h-full" component={icon} size={20} />
                    </Button>
                </div>
            )
        } else {
            return (
                <div className="">
                     <Button  size="icon">
                        <Icon className="h-full" component={icon} size={20} />
                    </Button>
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