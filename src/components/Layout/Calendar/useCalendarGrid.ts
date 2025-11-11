
import { useMemo, useState } from "react";
import {
  addMonths,
  subMonths,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isToday,
  format,
  eachWeekOfInterval,
  Locale,
} from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarEvent } from "./CalendarContext";

export type UseCalendarGridProps = {
  currentDate?: Date;
  selectedDate?: Date | null;
  onDateSelect?: (date: Date, events: CalendarEvent[]) => void;
  locale?: Locale;
  events?: CalendarEvent[];
};

const getWeeks = (
  date: Date,
  locale: Locale,
  selectedDate?: Date | null,
  events: CalendarEvent[] = []
) => {
  const start = startOfWeek(startOfMonth(date), { locale });
  const end = endOfWeek(endOfMonth(date), { locale });

  return eachWeekOfInterval(
    {
      start,
      end,
    },
    { locale }
  ).map((week) => {
    return eachDayOfInterval({
      start: week,
      end: endOfWeek(week, { locale }),
    }).map((day) => ({
      date: day,
      isCurrentMonth: isSameMonth(date, day),
      isToday: isToday(day),
      isSelected: selectedDate ? isSameDay(selectedDate, day) : false,
      events: events.filter((event) => isSameDay(event.date, day)),
    }));
  });
};

export const useCalendarGrid = ({
  currentDate: initialDate = new Date(),
  selectedDate: initialSelected,
  onDateSelect,
  locale = ptBR,
  events = [],
}: UseCalendarGridProps) => {
  const [currentDate, setCurrentDate] = useState(initialSelected ?? initialDate);
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    initialSelected ?? null
  );

  const monthName = useMemo(
    () => format(currentDate, "MMMM yyyy", { locale }),
    [currentDate, locale]
  );

  const weeks = useMemo(
    () => getWeeks(currentDate, locale, selectedDate, events),
    [currentDate, locale, selectedDate, events]
  );

  const weekDays = useMemo(() => {
    const start = startOfWeek(currentDate, { locale });
    const end = endOfWeek(currentDate, { locale });
    return eachDayOfInterval({ start, end }).map((day) =>
      format(day, "EEEEEE", { locale })
    );
  }, [currentDate, locale]);

  const handleDateSelect = (date: Date) => {
    setSelectedDate(date);
    if (onDateSelect) {
      const dayEvents = events.filter((event: CalendarEvent) => isSameDay(event.date, date));
      onDateSelect(date, dayEvents);
    }
  };

  const handleNextMonth = () => {
    setCurrentDate((prev) => addMonths(prev, 1));
  };

  const handlePrevMonth = () => {
    setCurrentDate((prev) => subMonths(prev, 1));
  };

  return {
    weeks,
    weekDays,
    monthName,
    handleNextMonth,
    handlePrevMonth,
    handleDateSelect,
    selectedDate,
    currentDate,
    setDate: setCurrentDate,
    events,
  };
};


