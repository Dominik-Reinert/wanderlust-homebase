import { component$ } from "@builder.io/qwik";
import { Text } from "~/components/text";

export const Footer = component$(() => {
  return (
    <footer class="flex flex-col gap-5 p-3 pt-7 md:flex-row md:p-5 md:pt-10 lg:p-12 lg:pt-16">
      <div class="grow">
        <Text size="large">Kontakt</Text>
        <a href={`tel:0049 1234 56 789`}>
          <Text size="small">Telefon: 0049 1234 56 789</Text>
        </a>
        <a href={`mailto:dore250393@gmail.com`}>
          <Text size="small">Email: dore250393@gmail.com</Text>
        </a>
      </div>
      <div class="grow">
        <Text size="large">Location</Text>
        <Text size="small">66663 Merzig</Text>
      </div>
      <div class="grow cursor-pointer">
        <a href="/imprint">
          <Text size="large">Impressum</Text>
        </a>
      </div>
      <div class="pt-5">
        <Text size="small">© 2023. All rights reserved</Text>
      </div>
    </footer>
  );
});
