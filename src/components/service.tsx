import { Slot, component$ } from "@builder.io/qwik";
import { Text } from "./text";

interface ServiceProps {
  description: string;
}

export const Service = component$(({ description }: ServiceProps) => {
  return (
    <div class="cursor-pointer w-full p-5  md:p-7 transition ease-in-out hover:-translate-y-1 hover:scale-105 duration-100 md:duration-200 md:duration-300">
      <div class="text-3xl pb-3">
        <Slot name="icon" />
      </div>
      <Text size="small" center>
        {description}
      </Text>
    </div>
  );
});
