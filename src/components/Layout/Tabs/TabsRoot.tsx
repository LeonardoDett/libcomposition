import { ReactNode, useState } from "react";
import { TabsContext } from "./TabsContext";
import { cn } from "../../../utils/cn";

export type TabsRootProps = {
  children: ReactNode;
  defaultValue: string;
  className?: string;
};

export const TabsRoot = ({
  children,
  defaultValue,
  className,
}: TabsRootProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue);
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn(className)}>{children}</div>
    </TabsContext.Provider>
  );
};
