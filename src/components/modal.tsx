import {
  Slot,
  component$,
  useStore,
  useVisibleTask$,
  $,
} from "@builder.io/qwik";
import { CancelIcon } from "~/integrations/react/iconoir";

export const modalStore: { visible: null | string } = { visible: null };

export const Modal = component$(({ name }: { name: string }) => {
  const store = useStore(modalStore);
  useVisibleTask$(({ track, cleanup }) => {
    track(() => store.visible);
    if (store.visible) {
      document.body.style.overflow = "hidden";
    }
    cleanup(() => (document.body.style.overflow = "unset"));
  });

  return store.visible === name ? (
    <div
      class="absolute z-50 inset-0 bg-black bg-opacity-25 w-full h-full text-black"
      style={{ top: `${window.scrollY}px` }}
    >
      <div
        id="modal-content"
        class="flex flex-col gap-5 m-5 p-5 bg-white relative  rounded-md top-1/4"
        onClick$={(event, currentElement) => {
          if (!currentElement.contains(event.target as Node)) {
            store.visible = null;
          }
        }}
      >
        <div
          class="absolute top-0 right-0 p-5"
          onClick$={() => (store.visible = null)}
        >
          <CancelIcon />
        </div>
        <Slot name="title" />
        <Slot />
      </div>
    </div>
  ) : null;
});
