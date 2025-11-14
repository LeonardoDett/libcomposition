import { ReactNode } from "react";
import { tv } from "tailwind-variants";

const tabsListVariants = tv({
  base: "flex border-b border-gray-200 dark:border-gray-700",
});

export type TabsListProps = {
  children: ReactNode;
  className?: string;
};

export const TabsList = ({ children, className }: TabsListProps) => {
  return (
    <nav
      className={tabsListVariants({ className })}
      aria-label="Tabs"
      role="tablist"
    >
      {children}
    </nav>
  );
};
