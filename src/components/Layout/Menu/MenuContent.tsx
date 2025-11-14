import { ReactNode } from "react";
import { Popper } from "../Popper";

interface MenuContentProps {
  children: ReactNode;
  width?: string;
  maxHeight?: string;
  className?: string;
}

export function MenuContent({
  children,
  width,
  maxHeight,
  className
}: MenuContentProps) {
  return (
    <Popper.Content
      width={width}
      maxHeight={maxHeight}
      className={className}
    >
      {children}
    </Popper.Content>
  )
}
