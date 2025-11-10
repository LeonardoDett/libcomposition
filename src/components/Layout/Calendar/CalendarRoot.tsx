import { CalendarContext } from "./CalendarContext";
import { calendarStyles } from "./Calendar.styles";
import { useCalendarGrid } from "./useCalendarGrid";

type CalendarRootProps = {
  children: React.ReactNode;
  initialDate?: Date;
  onDateSelect?: (date: Date) => void;
  selectedDate?: Date | null;
};

export const CalendarRoot = ({
  children,
  initialDate = new Date(),
  onDateSelect,
  selectedDate,
}: CalendarRootProps) => {
  const calendar = useCalendarGrid({
    currentDate: initialDate,
    onDateSelect,
    selectedDate,
  });

  const { root } = calendarStyles();

  return (
    <CalendarContext.Provider value={calendar}>
      <div className={root()}>{children}</div>
    </CalendarContext.Provider>
  );
};
