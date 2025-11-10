import { useCalendar } from "./CalendarContext";
import { calendarStyles } from "./Calendar.styles";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const CalendarHeader = () => {
  const { monthName, handlePrevMonth, handleNextMonth } = useCalendar();

  const { header, title, navigationButton } = calendarStyles();

  return (
    <div className={header()}>
      <button className={navigationButton()} onClick={handlePrevMonth}>
        <ChevronLeft size={20} />
      </button>
      <h2 className={title()}>{monthName}</h2>
      <button className={navigationButton()} onClick={handleNextMonth}>
        <ChevronRight size={20} />
      </button>
    </div>
  );
};
