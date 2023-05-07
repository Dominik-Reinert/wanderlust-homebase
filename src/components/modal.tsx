import { component$, useStore } from "@builder.io/qwik";

export const modalStore = { open: false };

export const Modal = component$(() => {
  const store = useStore(modalStore);
  return store.open ? <div class="absolute inset-0 bg-black bg-opacity-25 w-full h-full">hello modal</div> : null;
});
