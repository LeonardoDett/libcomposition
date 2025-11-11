import { Divider } from "../Divider";
import { CalendarBody } from "./CalendarBody";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarRoot } from "./CalendarRoot";
import { CalendarEvent } from "./CalendarContext";

type CalendarProps = {
  initialDate?: Date;
  onDateSelect?: (date: Date, events: CalendarEvent[]) => void;
  selectedDate?: Date | null;
  events?: CalendarEvent[];
};

export const Calendar = ({ initialDate, onDateSelect, selectedDate, events }: CalendarProps) => {

  return (
    <CalendarRoot initialDate={initialDate} onDateSelect={onDateSelect} selectedDate={selectedDate} events={events}>
      <CalendarHeader />
      <Divider />
      <CalendarBody />
    </CalendarRoot>
  );
};
