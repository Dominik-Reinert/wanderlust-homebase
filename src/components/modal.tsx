import { Slot, component$, useStore, useVisibleTask$ } from "@builder.io/qwik";
import { CancelIcon } from "~/integrations/react/iconoir";

export const modalStore: { visible: null | string } = { visible: null };

export const Modal = component$(
  ({ name, center }: { name: string; center?: boolean }) => {
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
        onClick$={() => (store.visible = null)}
      >
        <div
          id="modal-content"
          class={`flex flex-col gap-5 m-auto p-5 bg-white relative rounded-md top-[15%] max-h-[70%] overflow-y-scroll w-[90%]  md:w-2/3 lg:w-2/3 ${
            center ? "items-center" : ""
          }`}
          onClick$={(event) => event.stopPropagation()}
        >
          <div
            class="absolute top-0 right-0 p-5 cursor-pointer"
            onClick$={() => (store.visible = null)}
          >
            <CancelIcon />
          </div>
          <Slot name="title" />
          <Slot />
        </div>
      </div>
    ) : null;
  }
);
