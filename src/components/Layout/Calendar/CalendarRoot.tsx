import { CalendarContext, CalendarEvent } from "./CalendarContext";
import { calendarStyles } from "./Calendar.styles";
import { useCalendarGrid } from "./useCalendarGrid";

type CalendarRootProps = {
  children: React.ReactNode;
  initialDate?: Date;
  onDateSelect?: (date: Date, events: CalendarEvent[]) => void;
  selectedDate?: Date | null;
  events?: CalendarEvent[];
};

export const CalendarRoot = ({
  children,
  initialDate = new Date(),
  onDateSelect,
  selectedDate,
  events,
}: CalendarRootProps) => {
  const calendar = useCalendarGrid({
    currentDate: initialDate,
    onDateSelect,
    selectedDate,
    events,
  });

  const { root } = calendarStyles();

  return (
    <CalendarContext.Provider value={calendar}>
      <div className={root()}>{children}</div>
    </CalendarContext.Provider>
  );
};
