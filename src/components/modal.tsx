import { Slot, component$, useStore, useVisibleTask$ } from "@builder.io/qwik";

export const modalStore: { visible: boolean } = { visible: false };

export const Modal = component$(() => {
  const store = useStore(modalStore);
  useVisibleTask$(() => {
    if (store.visible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  });

  return store.visible ? (
    <div
      class="absolute z-50 inset-0 bg-black bg-opacity-25 w-full h-full text-black"
      style={{ top: `${window.scrollY}px` }}
    >
      <div class="flex flex-col gap-5 m-5 p-5 bg-white">
        <Slot name="title" />
        <Slot />
      </div>
    </div>
  ) : null;
});
