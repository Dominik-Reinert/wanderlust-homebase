import { Slot, component$ } from "@builder.io/qwik";
import { Text } from "./text";

interface ServiceProps {
  description: string;
}

export const Service = component$(({ description }: ServiceProps) => {
  return (
    <div class="cursor-pointer w-full p-5  md:p-7 hover:bg-sky-50 hover:border hover:border-sky-200 hover:border-2 hover:p-4 ">
      <div class="text-3xl pb-3">
        <Slot name="icon" />
      </div>
      <Text size="small" center>
        {description}
      </Text>
    </div>
  );
});
