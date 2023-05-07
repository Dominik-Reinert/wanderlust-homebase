import { component$, useStore, useVisibleTask$ } from "@builder.io/qwik";

export const modalStore = { open: false };

export const Modal = component$(() => {
  const store = useStore(modalStore);
  useVisibleTask$(() => {
    if (store.open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  });

  return store.open ? (
    <div class="absolute z-50 inset-0 bg-black bg-opacity-25 w-full h-full">
      hello modal
    </div>
  ) : null;
});
