import React from "react";

export interface StackSeparatorProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const StackSeparator = React.forwardRef<
  HTMLDivElement,
  StackSeparatorProps
>(({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  );
});

StackSeparator.displayName = "Stack.Separator";
