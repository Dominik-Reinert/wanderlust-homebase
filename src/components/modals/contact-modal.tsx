import { component$ } from "@builder.io/qwik";
import { Modal } from "../modal";
import { Text } from "../text";

export const ContactModal = component$(() => {
  return (
    <Modal name="contact">
      <Text size="huge" bold mono q:slot="title">
        Kontakt
      </Text>
      <a href={`tel:0049 160 722 84 11`}>
        <Text size="large" bold>
          Telefon:
        </Text>
        <Text size="large">0049 160 722 84 11</Text>
      </a>
      <a href={`mailto:dore250393@gmail.com`}>
        <Text size="large" bold>
          Email:
        </Text>
        <Text size="large">dore250393@gmail.com</Text>
      </a>
    </Modal>
  );
});
