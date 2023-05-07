import { component$ } from "@builder.io/qwik";
import { Text } from "~/components/text";

export const Footer = component$(() => {
  return (
    <footer class="flex flex-col gap-5  p-3 md:p-5 md:flex-row bg-black text-white text-center">
      <div class="grow">
        <a href="/contact">
          <Text size="medium">Kontakt</Text>
        </a>
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
