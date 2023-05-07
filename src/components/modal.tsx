import { Slot, component$, useStore, useOnDocument, $ } from "@builder.io/qwik";

export const modalStore: { visible: null | string } = { visible: null };

export const Modal = component$(({ name }: { name: string }) => {
  const store = useStore(modalStore);
  useOnDocument(
    "scroll",
    $(() => {
      if (store.visible) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
    })
  );

  return store.visible === name ? (
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
