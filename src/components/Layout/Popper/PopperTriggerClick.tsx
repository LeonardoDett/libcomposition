import { Children, isValidElement, ReactElement, Ref } from "react";
import { usePopperContext } from "./PopperContext";

interface PopperTriggerClickProps {
  children: ReactElement & { ref?: Ref<HTMLElement> };
}


export function PopperTriggerClick({
  children,
}: PopperTriggerClickProps) {

  const { events, refs } = usePopperContext();

  const child = Children.only(children);
  if (!isValidElement(child)) {
    return children;
  }

  return (
    <div ref={refs.setAnchor} onClick={events.handleToggle}>
      {children}
    </div>
  )

}