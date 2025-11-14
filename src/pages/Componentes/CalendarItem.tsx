import { tv } from "tailwind-variants";
import { Typography } from "../../components/Forms/Typography";
import { format } from "date-fns";
import { Divider } from "../../components/Layout/Divider";


const calendarItemStyles = tv({
    slots: {
        container: "grid grid-cols-[auto_auto_1fr] gap-2 border-1 border-neutral-300 rounded-md p-2",
        day: "px-2 py-1 flex justify-center items-center rounded-md",
        body: "flex flex-col justify-center"
    },
    variants:{
        type: {
            CREDIT: {
                day: "bg-success-200 text-success-700"
            },
            DEBIT: {
                day: "bg-red-200 text-red-700"
            }
        }
    }
})

interface CalendarItemProps {
    date: Date;
    title: string;
    type: "DEBIT" | "CREDIT";
}

export function CalendarItem({ date, title, type }: CalendarItemProps) {
    const { container, day, body } = calendarItemStyles({type});

    const correctedDate = new Date(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate());

    return (
        <div className={container()}>
            <div className={day()}>
                <Typography size="xl" color="inherit">
                    {format(correctedDate, 'dd')}
                </Typography>
            </div>
            <Divider orientation="vertical" />
            <div className={body()}>
                <Typography size="lg">
                    {title}
                </Typography>
            </div>
        </div>
    )
}