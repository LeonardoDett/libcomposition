import { Children, isValidElement, ReactElement, Ref } from "react";
import { usePopperContext } from "./PopperContext";

interface PopperTriggerClickProps extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactElement & { ref?: Ref<HTMLElement> };
  className?: string;

}


export function PopperTriggerClick({
  children,
  className,
  ...rest
}: PopperTriggerClickProps) {

  const { events, refs } = usePopperContext();

  const child = Children.only(children);
  if (!isValidElement(child)) {
    return children;
  }

  return (
    <div ref={refs.setAnchor} onClick={events.handleToggle} className={`cursor-pointer relative ${className}`} {...rest}>
      {children}
    </div>
  )

}