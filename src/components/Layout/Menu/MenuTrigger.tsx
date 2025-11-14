import { ReactElement, Ref } from "react";
import { Popper } from "../Popper";

interface MenuTriggerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactElement & { ref?: Ref<HTMLElement> };
  className?: string;
}

export function MenuTrigger({
  children,
  className,
  ...rest
}: MenuTriggerProps) {
  return (
    <Popper.TriggerClick className={className} {...rest}>
      {children}
    </Popper.TriggerClick>
  )
}
