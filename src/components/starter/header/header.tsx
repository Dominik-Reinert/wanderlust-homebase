import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import { Text } from "~/components/text";

export default component$(() => {
  return (
    <header class={styles.header}>
      <Text size="large">Merzig mingle matrix</Text>
    </header>
  );
});
