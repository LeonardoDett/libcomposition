import { ReactNode } from "react";
import { tv } from "tailwind-variants";
import { useTabs } from "./TabsContext";

const tabsTriggerVariants = tv({
  base: [
    "py-3 px-4 inline-flex items-center justify-center gap-x-2",
    "text-sm font-medium text-center",
    "text-gray-500 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-500 cursor-pointer",
    "focus:outline-none focus:z-10",
    "disabled:opacity-50 disabled:pointer-events-none",
    "border-b-2 border-transparent",
    "transition-colors duration-200 ease-in-out",
    "uppercase",
    "-mb-px",
  ],
  variants: {
    isActive: {
      true: "text-primary-600 border-primary-600 dark:text-primary-500 dark:border-primary-500",
      false: "hover:border-gray-300 dark:hover:border-gray-500",
    },
  },
});


export type TabsTriggerProps = {
  children: ReactNode;
  value: string;
  className?: string;
  disabled?: boolean;
};

export const TabsTrigger = ({
  children,
  value,
  className,
  disabled,
}: TabsTriggerProps) => {
  const { activeTab, setActiveTab } = useTabs();
  const isActive = activeTab === value;

  const handleClick = () => {
    if (!disabled) {
      setActiveTab(value);
    }
  };

  return (
    <button
      type="button"
      className={tabsTriggerVariants({ isActive, className })}
      onClick={handleClick}
      role="tab"
      aria-selected={isActive}
      aria-controls={`tabs-panel-${value}`}
      id={`tabs-item-${value}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
