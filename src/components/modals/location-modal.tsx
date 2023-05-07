import { component$ } from "@builder.io/qwik";
import { Modal } from "../modal";
import { Text } from "../text";

export const LocationModal = component$(() => {
  return (
    <Modal name="location" center>
      <Text size="huge" bold mono q:slot="title">
        Location
      </Text>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83000.87850973247!2d6.532098371829031!3d49.45092308037029!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47950b8cbc2d0861%3A0xbadbd24ae906c771!2s66663%20Merzig%2C%20Germany!5e0!3m2!1sen!2spt!4v1683483610848!5m2!1sen!2spt"
        width="400"
        height="300"
        style="border:0;"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </Modal>
  );
});
