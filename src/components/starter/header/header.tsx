import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import { Text } from "~/components/text";

export default component$(() => {
  return (
    <header class={styles.header}>
      <div class="hidden p-10 font-saver text-sm text-base text-lg text-xl text-2xl"></div>
      <Text size="large">Merzig mingle matrix</Text>
    </header>
  );
});
