import { Calendar } from "../components/Layout/Calendar";
import { CalendarEvent } from "../components/Layout/Calendar/CalendarContext";
import { Grid } from "../components/Layout/Grid";
import { TabsContent, TabsList, TabsRoot, TabsTrigger } from "../components/Layout/Tabs";
import { Aside } from "./Aside";
import { CalendarList } from "./Componentes/CalendarList";
import { Navbar } from "./Navbar";

export function Home() {

    const events: CalendarEvent[] = [
        { date: new Date("2025-11-12"), color: "red", title: "teste", type: "DEBIT" },
        { date: new Date("2025-11-14"), color: "red", title: "teste", type: "DEBIT" },
        { date: new Date("2025-11-14"), color: "green", title: "teste", type: "CREDIT" },
        { date: new Date("2025-11-20"), color: "green", title: "teste", type: "CREDIT" },
        { date: new Date("2025-11-20"), color: "green", title: "teste", type: "CREDIT" },
        { date: new Date("2025-11-20"), color: "red", title: "teste", type: "DEBIT" },
        { date: new Date("2025-11-20"), color: "green", title: "teste", type: "CREDIT" },
        { date: new Date("2025-11-20"), color: "red", title: "teste", type: "DEBIT" },
        { date: new Date("2025-11-20"), color: "green", title: "teste", type: "CREDIT" },
        { date: new Date("2025-11-20"), color: "green", title: "teste", type: "CREDIT" }
    ]

    return (
        <div className="bg-background-variant w-screen h-full overflow-auto flex">
            <Aside />
            <div className="flex flex-col w-full flex-grow max-h-screen overflow-auto">
                <Navbar />
                <div className="p-4 flex-grow">
                    <Grid.Container className="h-full" gap={4}>
                        <Grid.Item lg={9} md={8} sm={12}>
                            <Grid.Container className="h-full" gap={4}>
                                <Grid.Item lg={12} md={12} sm={12}>
                                    <div className="bg-white h-full rounded-sm p-4">
                                        <TabsRoot defaultValue="tab1">
                                            <TabsList>
                                                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                                                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                                                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                                            </TabsList>
                                            <TabsContent value="tab1">
                                                <p>This is the content for Tab 1.</p>
                                            </TabsContent>
                                            <TabsContent value="tab2">
                                                <p>This is the content for Tab 2.</p>
                                            </TabsContent>
                                            <TabsContent value="tab3">
                                                <p>This is the content for Tab 3.</p>
                                            </TabsContent>
                                        </TabsRoot>
                                    </div>
                                </Grid.Item>
                                <Grid.Item lg={6} md={6} sm={12}>
                                    <div className="bg-white h-full rounded-sm">
a
                                    </div>
                                </Grid.Item>
                                <Grid.Item lg={6} md={6} sm={12}>
                                    <div className="bg-white h-full rounded-sm">
a
                                    </div>
                                </Grid.Item>
                                <Grid.Item lg={12} md={12} sm={12}>
                                    <div className="bg-white h-full rounded-sm">
a
                                    </div>
                                </Grid.Item>

                            </Grid.Container>
                        </Grid.Item>
                        <Grid.Item lg={3} md={4} sm={12}>
                            <div className="bg-white h-full flex-col p-2 rounded-sm flex align-start items-center">
                                <div className="max-w-sm w-full flex justify-center align-center min-h-85 max-h-85">
                                    <Calendar events={events} />
                                </div>
                                <div className="w-full flex-grow min-h-0">
                                    <CalendarList events={events} />
                                </div>
                            </div>
                        </Grid.Item>
                    </Grid.Container>

                </div>
            </div>
        </div>
    )
}