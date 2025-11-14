import { createContext, useContext } from "react";

export type TabsContextProps = {
  activeTab: string;
  setActiveTab: (value: string) => void;
};

export const TabsContext = createContext<TabsContextProps | null>(null);

export const useTabs = () => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("useTabs must be used within a TabsProvider");
  }

  return context;
};
