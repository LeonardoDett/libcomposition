import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const stackRootVariants = tv({
  base: "flex",
  variants: {
    direction: {
      row: "flex-row",
      col: "flex-col",
    },
    spacing: {
      "0": "gap-0",
      "1": "gap-1",
      "2": "gap-2",
      "3": "gap-3",
      "4": "gap-4",
      "5": "gap-5",
      "6": "gap-6",
      "8": "gap-8",
      "10": "gap-10",
      "12": "gap-12",
      "16": "gap-16",
      "20": "gap-20",
      "24": "gap-24",
      "32": "gap-32",
      "40": "gap-40",
      "48": "gap-48",
      "56": "gap-56",
      "64": "gap-64",
    },
    alignItems: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    justifyContent: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    wrap: {
      true: "flex-wrap",
      false: "flex-nowrap",
    },
  },
  defaultVariants: {
    direction: "col",
    spacing: "0",
    alignItems: "stretch",
    justifyContent: "start",
    wrap: false,
  },
});

export interface StackRootProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof stackRootVariants> {
  separator?: React.ReactNode;
}

export const StackRoot = React.forwardRef<HTMLDivElement, StackRootProps>(
  (
    {
      className,
      direction,
      spacing,
      alignItems,
      justifyContent,
      wrap,
      children,
      separator,
      ...props
    },
    ref
  ) => {
    const childrenArray = React.Children.toArray(children).filter(Boolean);
    const finalChildren: React.ReactNode[] = [];

    childrenArray.forEach((child, index) => {
      finalChildren.push(child);
      if (index < childrenArray.length - 1 && separator) {
        finalChildren.push(
          React.cloneElement(separator as React.ReactElement, { key: `separator-${index}` })
        );
      }
    });

    return (
      <div
        ref={ref}
        className={stackRootVariants({
          direction,
          spacing,
          alignItems,
          justifyContent,
          wrap,
          className,
        })}
        {...props}
      >
        {finalChildren}
      </div>
    );
  }
);

StackRoot.displayName = "Stack.Root";
