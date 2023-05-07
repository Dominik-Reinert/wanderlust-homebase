import { component$, Slot } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { Footer } from "~/components/footer/footer";
import { Header } from "~/components/header/header";
import { ContactModal } from "~/components/modals/contact-modal";

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  };
});

export default component$(() => {
  return (
    <>
      <Header />
      <main class="">
        <ContactModal />
        <Slot />
      </main>
      <Footer />
    </>
  );
});
