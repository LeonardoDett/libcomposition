import { useCalendar } from "./CalendarContext";
import { calendarStyles } from "./Calendar.styles";
import { format } from "date-fns";

export const CalendarBody = () => {
  const { weeks, weekDays, handleDateSelect } = useCalendar();

  const { body, weekDay, day } = calendarStyles();

  function getCalendarEventsIcon(dayInfo) {
    let counter = 0;

    const ev = dayInfo?.events?.map(day => {
      counter++;

      if (counter > 3) {
        return;
      }

      let color = 'bg-sky-600'
      switch (day.color) {
        case "red":
          color = 'bg-red-600'
          break;
        case "green":
          color = 'bg-lime-600'
          break;
      }

      return (
        <span className="relative flex size-2">
          <span className={`absolute inline-flex h-full w-full rounded-full ${color} opacity-75 `}></span>
          <span className={`relative inline-flex size-2 rounded-full ${color} `}></span>
        </span>
      )
    });
    return ev;
  }

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
              hasEvents: dayInfo.events.length > 0,
            })}
            onClick={() => handleDateSelect(dayInfo.date)}
          >
            {format(dayInfo.date, "d")}
            {dayInfo.events.length > 0 && (
              <div className="absolute -bottom-10 z-2 flex gap-px">
                {getCalendarEventsIcon(dayInfo)}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};
