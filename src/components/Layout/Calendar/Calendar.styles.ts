import { tv } from "tailwind-variants";

export const calendarStyles = tv({
  slots: {
    root: "bg-white rounded-lg shadow-lg p-4 w-full ",
    header: "flex items-center justify-between mb-4",
    title: "text-lg font-semibold",
    navigationButton: "p-2 rounded-full hover:bg-gray-100 cursor-pointer",
    body: "grid grid-cols-7 gap-1",
    weekDay: "w-8 h-8 flex items-center justify-center font-semibold text-sm",
    day: "w-8 h-8 flex place-items-center place-content-center rounded-full cursor-pointer hover:bg-gray-100 transition-colors",
  },
  variants: {
    isToday: {
      true: {
        day: "border border-primary",
      },
    },
    isSelected: {
      true: {
        day: "bg-primary text-white hover:bg-blue-600",
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
        day: "bg-primary text-white hover:bg-blue-600",
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
