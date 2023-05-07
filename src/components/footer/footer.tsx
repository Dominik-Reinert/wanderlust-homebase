import { $, component$, useStore } from "@builder.io/qwik";
import { Text } from "~/components/text";
import { Modal, modalStore } from "../modal";

export const Footer = component$(() => {
  const mStore = useStore(modalStore);
  return (
    <footer class="flex flex-col gap-5  p-3 md:p-5 md:flex-row bg-black text-white md:text-center">
      <Modal>
        <Text size="huge" bold mono q:slot="title">
          hello
        </Text>
        <div>world</div>
      </Modal>
      <div class="grow" onClick$={$(() => (mStore.visible = true))}>
        <Text size="medium">Kontakt</Text>
      </div>
      <div class="grow cursor-pointer">
        <Text size="medium">Location</Text>
      </div>
      <div class="grow cursor-pointer">
        <a href="/imprint">
          <Text size="medium">Impressum</Text>
        </a>
      </div>
      <div>
        <Text size="small">© 2023. All rights reserved</Text>
      </div>
    </footer>
  );
});
