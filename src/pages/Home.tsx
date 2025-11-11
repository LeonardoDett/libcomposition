import { Calendar } from "../components/Layout/Calendar";
import { CalendarEvent } from "../components/Layout/Calendar/CalendarContext";
import { Grid } from "../components/Layout/Grid";
import { Aside } from "./Aside";
import { Navbar } from "./Navbar";

export function Home() {

    const events: CalendarEvent[] = [
        { date: new Date("2025-11-12"), color: "blue" },
        { date: new Date("2025-11-14"), color: "red" },
        { date: new Date("2025-11-14"), color: "green" },
        { date: new Date("2025-11-20"), color: "green" }
    ]

    return (
        <div className="bg-background-variant w-screen h-screen scroll-auto flex">
            <Aside />
            <div className="flex flex-col w-full flex-grow">
                <Navbar />
                <div className="p-4 h-full">
                    <Grid.Container className="h-full" gap={4}>
                        <Grid.Item lg={9} md={9} sm={12}>
                            <Grid.Container className="h-full" gap={4}>
                                <Grid.Item lg={12} md={12} sm={12}>
                                    <div className="bg-white h-full rounded-sm">

                                    </div>
                                </Grid.Item>
                                <Grid.Item lg={6} md={6} sm={12}>
                                    <div className="bg-white h-full rounded-sm">

                                    </div>
                                </Grid.Item>
                                <Grid.Item lg={6} md={6} sm={12}>
                                    <div className="bg-white h-full rounded-sm">

                                    </div>
                                </Grid.Item>
                                <Grid.Item lg={12} md={12} sm={12}>
                                    <div className="bg-white h-full rounded-sm">

                                    </div>
                                </Grid.Item>

                            </Grid.Container>
                        </Grid.Item>
                        <Grid.Item lg={3} md={3} sm={12}>
                            <div className="bg-white h-full rounded-sm p-2 flex justify-center">
                                <Calendar events={events} />
                            </div>
                        </Grid.Item>
                    </Grid.Container>

                </div>
            </div>
        </div>
    )
}