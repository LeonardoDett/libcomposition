import { TabsContent, TabsList, TabsRoot, TabsTrigger } from "../../components/Layout/Tabs";
import { CalendarEvent } from "../../components/Layout/Calendar/CalendarContext";
import { Stack } from "../../components/Layout/Stack";
import { CalendarItem } from "./CalendarItem";

export function CalendarList({ events }: { events: CalendarEvent[] }) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const todayEvents = events.filter(event => {
        const eventDate = new Date(event.date);
        eventDate.setHours(0, 0, 0, 0);
        return eventDate.getTime() === today.getTime();
    });

    const thisWeekEvents = events.filter(event => {
        const eventDate = event.date;
        const startOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());
        const endOfWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 6);

        startOfWeek.setHours(0, 0, 0, 0);
        endOfWeek.setHours(23, 59, 59, 999);

        return eventDate >= startOfWeek && eventDate <= endOfWeek;
    });

    const thisMonthEvents = events.filter(event => {
        const eventDate = event.date;
        return eventDate.getMonth() === today.getMonth() && eventDate.getFullYear() === today.getFullYear();
    });

    return (
        <TabsRoot className="h-full " defaultValue="hoje">
            <TabsList>
                <TabsTrigger value="hoje">Hoje</TabsTrigger>
                <TabsTrigger value="semana">Semana</TabsTrigger>
                <TabsTrigger value="mes">Mês</TabsTrigger>
            </TabsList>
            <div className="h-full max-h-105 overflow-scroll px-2" >
                <TabsContent value="hoje">
                    <Stack.Root direction="col" spacing="2" className="px-2 mt-4">
                        {
                            todayEvents.map((event, index) => {
                                return (
                                    <Stack.Item key={index}>
                                        <CalendarItem date={event.date} type={event.type} title={event.title} />
                                    </Stack.Item>
                                )
                            })
                        }
                    </Stack.Root>
                </TabsContent>
                <TabsContent value="semana">
                    <Stack.Root direction="col" spacing="2" className="px-2 mt-4">
                        {
                            thisWeekEvents.map((event, index) => {
                                return (
                                    <Stack.Item key={index}>
                                        <CalendarItem date={event.date} type={event.type} title={event.title} />
                                    </Stack.Item>
                                )
                            })
                        }
                    </Stack.Root>
                </TabsContent>
                <TabsContent value="mes" >
                    <Stack.Root direction="col" spacing="2" className="px-2">
                        {
                            thisMonthEvents.map((event, index) => {
                                return (
                                    <Stack.Item key={index}>
                                        <CalendarItem date={event.date} type={event.type} title={event.title} />
                                    </Stack.Item>
                                )
                            })
                        }
                    </Stack.Root>
                </TabsContent>
            </div>

        </TabsRoot>
    )
}