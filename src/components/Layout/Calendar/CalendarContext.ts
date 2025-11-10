import { createContext, useContext } from "react";
import { useCalendarGrid } from "./useCalendarGrid";

export type CalendarContextProps = ReturnType<typeof useCalendarGrid>;

export const CalendarContext = createContext<CalendarContextProps | undefined>(
  undefined
);

export const useCalendar = () => {
  const context = useContext(CalendarContext);
  if (!context) {
    throw new Error("useCalendar must be used within a CalendarProvider");
  }
  return context;
};
