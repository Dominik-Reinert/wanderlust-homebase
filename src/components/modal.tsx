import {
  JSXChildren,
  component$,
  useStore,
  useVisibleTask$,
} from "@builder.io/qwik";
import { Text } from "./text";

export const modalStore: {
  open: boolean;
} = { open: false };

export const modalContentStore: {
  title: string;
  content: JSXChildren;
} = {
  title: "",
  content: (
    <>
      <div>hello</div>
    </>
  ),
};

export const Modal = component$(() => {
  const store = useStore(modalStore);
  const contentStore = useStore(modalContentStore);
  useVisibleTask$(() => {
    if (store.open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  });

  return store.open ? (
    <div
      class="absolute z-50 inset-0 bg-black bg-opacity-25 w-full h-full"
      style={{ top: `${window.scrollY}px` }}
    >
      <div class="flex flex-col gap-5 m-5 p-5 bg-white">
        <Text size="huge" bold mono>
          {contentStore.title}
        </Text>
        <div>{contentStore.content}</div>
      </div>
    </div>
  ) : null;
});
