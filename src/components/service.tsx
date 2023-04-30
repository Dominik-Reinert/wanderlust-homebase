import { Slot, component$ } from "@builder.io/qwik";
import { Text } from "./text";


interface ServiceProps {
    description: string;
}

export const Service = component$(({description}: ServiceProps) => {
    return <div class="flex flex-col flex-wrap grow shrink align-center justify-center items-center basis-full md:basis-5/12 lg:basis-3/12">
        <Slot name="icon" />
        <Text size="small">{description}</Text>
    </div>
})