import { useCalendar } from "./CalendarContext";
import { calendarStyles } from "./Calendar.styles";
import { format } from "date-fns";

export const CalendarBody = () => {
  const { weeks, weekDays, handleDateSelect } = useCalendar();

  const { body, weekDay, day } = calendarStyles();

  return (
    <div className={body()}>
      {weekDays.map((dayName) => (
        <div key={dayName} className={weekDay()}>
          {dayName}
        </div>
      ))}
      {weeks.map((week) =>
        week.map((dayInfo) => (
          <div
            key={dayInfo.date.toString()}
            className={day({
              isSelected: dayInfo.isSelected,
              isToday: dayInfo.isToday,
              isCurrentMonth: dayInfo.isCurrentMonth,
            })}
            onClick={() => handleDateSelect(dayInfo.date)}
          >
              {format(dayInfo.date, "d")}
          </div>
        ))
      )}
    </div>
  );
};
