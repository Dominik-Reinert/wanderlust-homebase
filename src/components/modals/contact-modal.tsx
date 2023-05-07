import { component$ } from "@builder.io/qwik";
import { Modal } from "../modal";
import { Text } from "../text";

export const ContactModal = component$(() => {
  return (
    <Modal name="contact">
      <Text size="huge" bold mono q:slot="title">
        contact
      </Text>
      <div>world</div>
    </Modal>
  );
});
