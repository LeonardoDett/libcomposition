import { ArrowLeftRight, Calendar, LayoutDashboard } from "lucide-react";
import { Stack } from "../components/Layout/Stack";
import { AsideItem } from "./Componentes/AsideItem";

export function Aside() {
    
    return (
        <div>
            <div className="h-screen w-20 bg-primary flex justify-center pt-2">
                <Stack.Root spacing="2" >
                    <Stack.Item>
                        <AsideItem icon={LayoutDashboard} isSelected={true} />
                    </Stack.Item>
                    <Stack.Item>
                        <AsideItem icon={ArrowLeftRight} isSelected={false} />
                    </Stack.Item>
                    <Stack.Item>
                        <AsideItem icon={Calendar} isSelected={false} />
                    </Stack.Item>
                </Stack.Root>

            </div>
        </div>
    )
}