import { component$ } from "@builder.io/qwik";
import { Text } from "./text";


interface ServiceProps {
    svg: string;
    alt: string;
    description: string;
}

export const Service = component$(({svg, alt, description}: ServiceProps) => {
    

    return <div class="flex flex-col">
        <img />
        <Text size="small">{description}</Text>
    </div>
})