import { Bell, MessageCircleQuestion } from "lucide-react";
import { Typography } from "../components/Forms/Typography";
import { IconButton } from "../components/Layout/IconButton";
import { Stack } from "../components/Layout/Stack";
import { Dropdown } from "../components/Forms/Dropdown";
import { Avatar } from "../components/Layout/Avatar";

export function Navbar() {

    return (
        <nav className="w-full ">
            <div className="bg-white flex justify-between p-2 m-3 rounded-md items-center">
                <div className="px-2">
                    <Typography size="2xl" color="primary" weight="semibold" >
                        Dashboard
                    </Typography>
                </div>
                <div className="">
                    <Stack.Root direction="row" spacing="2">
                        <Stack.Item className="items-center content-center bg-background-variant rounded-md">
                            <IconButton className="h-full" iconSize={"20"} size="md" icon={MessageCircleQuestion} />
                        </Stack.Item>
                        <Stack.Item className="items-center content-center bg-background-variant rounded-md">
                            <IconButton className="h-full" iconSize={"20"} size="md" icon={Bell} />
                        </Stack.Item>
                        <Stack.Item className="items-center content-center bg-background-variant rounded-md">
                            <Dropdown.Root>
                                <Dropdown.Trigger>
                                    <Stack.Root direction="row" spacing="2" className="px-3" >
                                        <Stack.Item className="items-center content-center">
                                            <Typography size="md" color="primary" weight="semibold">
                                                Leonardo Dettmann
                                            </Typography>
                                        </Stack.Item>
                                        <Stack.Item>
                                            <Avatar src="https://i.pravatar.cc/150?img=4" size="sm" alt="Person" variant="circular" />
                                        </Stack.Item>
                                    </Stack.Root>
                                </Dropdown.Trigger>
                                <Dropdown.Content>
                                    <Dropdown.Item>
                                        teste
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        teste
                                    </Dropdown.Item>
                                    <Dropdown.Item>
                                        teste
                                    </Dropdown.Item>
                                </Dropdown.Content>
                            </Dropdown.Root>
                        </Stack.Item>

                    </Stack.Root>
                </div>
            </div>

        </nav>
    )
}