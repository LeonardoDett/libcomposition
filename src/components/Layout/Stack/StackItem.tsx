import React from "react";

export interface StackItemProps extends React.HTMLAttributes<HTMLDivElement> {}

export const StackItem = React.forwardRef<HTMLDivElement, StackItemProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    );
  }
);

StackItem.displayName = "Stack.Item";
