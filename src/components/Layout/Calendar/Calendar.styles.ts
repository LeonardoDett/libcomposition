import { tv } from "tailwind-variants";

export const calendarStyles = tv({
  slots: {
    root: "bg-white rounded-lg p-4 w-full relative",
    header: "flex items-center justify-between mb-4 relative",
    title: "text-lg font-semibold first-letter:uppercase",
    navigationButton: "p-2 rounded-full hover:bg-gray-100 cursor-pointer relative",
    body: "grid grid-cols-7 gap-1 relative",
    weekDay: "w-8 h-8 flex items-center justify-center font-semibold text-sm relative",
    day: "w-8 h-8 flex place-items-center place-content-center rounded-full cursor-pointer hover:bg-gray-100 transition-colors relative",
  },
  variants: {
    isToday: {
      true: {
        day: "border border-primary",
      },
    },
    isSelected: {
      true: {
        day: "bg-primary text-white hover:bg-primary-600",
      },
    },
    isCurrentMonth: {
      true: "",
      false: ""
    },
    isDisabled: {
      true: {
        day: "text-gray-300 cursor-not-allowed",
      },
    },
    hasEvents: {
      true: {
        day: "", // Example styling for days with events
      },
    },
  },
  compoundVariants: [
    {
      isSelected: true,
      isToday: true,
      class: {
        day: "bg-primary text-white",
      },
    },
    {
      isSelected: true,
      isCurrentMonth: true,
      class: {
        day: "bg-primary text-white hover:bg-primary-600",
      },
    }, {
      isSelected: false,
      isCurrentMonth: false,
      class: {
        day: "text-gray-400",
      },
    },
    {
      isSelected: false,
      isCurrentMonth: true,
      class: {
        day: "text-black",
      },
    },
  ],
  defaultVariants: {
    isCurrentMonth: true,
  },
});
