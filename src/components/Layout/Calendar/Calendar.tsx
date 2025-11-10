import { CalendarBody } from "./CalendarBody";
import { CalendarHeader } from "./CalendarHeader";
import { CalendarRoot } from "./CalendarRoot";

type CalendarProps = {
  initialDate?: Date;
  onDateSelect?: (date: Date) => void;
  selectedDate?: Date | null;
};

export const Calendar = ({ initialDate, onDateSelect, selectedDate }: CalendarProps) => {
 
  return (
    <CalendarRoot initialDate={initialDate} onDateSelect={onDateSelect} selectedDate={selectedDate}>
      <CalendarHeader />
      <CalendarBody />
    </CalendarRoot>
  );
};
