import { component$ } from "@builder.io/qwik";
import { Text } from "~/components/text";

export default component$(() => {
  return <div><h1>Kontakt</h1>
    <a href={`tel:0049 1234 56 789`}>
      <Text size="small">Telefon: 0049 160 722 84 11</Text>
    </a>
    <a href={`mailto:dore250393@gmail.com`}>
      <Text size="small">Email: dore250393@gmail.com</Text>
    </a>
  </div>
})
