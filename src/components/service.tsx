import { Slot, component$ } from "@builder.io/qwik";
import { Text } from "./text";


interface ServiceProps {
    description: string;
}

export const Service = component$(({description}: ServiceProps) => {
    return <div class="flex flex-col">
        <Slot name="icon" />
        <Text size="small">{description}</Text>
    </div>
})