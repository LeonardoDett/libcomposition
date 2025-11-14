import { ReactNode } from "react";
import { useTabs } from "./TabsContext";
import { cn } from "../../../utils/cn";

export type TabsContentProps = {
  children: ReactNode;
  value: string;
  className?: string;
};

export const TabsContent = ({
  children,
  value,
  className,
}: TabsContentProps) => {
  const { activeTab } = useTabs();
  const isActive = activeTab === value;

  if (!isActive) {
    return null;
  }

  return (
    <div
      id={`tabs-panel-${value}`}
      className={cn("py-4", className)}
      role="tabpanel"
      aria-labelledby={`tabs-item-${value}`}
    >
      {children}
    </div>
  );
};
