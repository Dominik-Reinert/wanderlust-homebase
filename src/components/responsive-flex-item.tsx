import { Slot, component$ } from "@builder.io/qwik";

export const ResponsiveFlexItem = component$(() => {
  return (
    <div class="flex flex-row flex-wrap grow shrink align-center justify-center items-center basis-full md:basis-5/12 lg:basis-3/12">
      <Slot />
    </div>
  );
});
