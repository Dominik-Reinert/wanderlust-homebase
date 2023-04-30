import { Slot, component$ } from "@builder.io/qwik";
import { Text } from "./text";

interface ServiceProps {
  description: string;
}

export const Service = component$(({ description }: ServiceProps) => {
  return (
    <div class="flex flex-col flex-wrap grow shrink align-center justify-center items-center basis-full md:basis-5/12 lg:basis-3/12">
      <div class="cursor-pointer w-full p-5  md:p-7 hover:bg-sky-50 hover:border hover:border-sky-200 hover:border-2 hover:p-4 ">
        <Slot name="icon" />
        <Text size="small" center>
          {description}
        </Text>
      </div>
    </div>
  );
});
