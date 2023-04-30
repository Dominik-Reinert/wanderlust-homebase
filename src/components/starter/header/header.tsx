import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import { Text } from "~/components/text";

export default component$(() => {
  return (
    <header class={`${styles.header} min-h-10vh p-3`}>
      <div class="hidden p-10 font-saver text-sm text-base text-lg text-xl text-2xl text-sky-400 text-sky-600 bg-white border-sky-400 border-sky-600 rounded border-2 text-white bg-sky-600"></div>
      <Text size="large">Merzig mingle matrix</Text>
    </header>
  );
});
