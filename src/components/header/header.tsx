import { component$, QRL } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import { Text } from "~/components/text";
import { ArrowLeftIcon } from "~/integrations/react/iconoir";

export const Header = component$(() => {
  const loc = useLocation();
  const needsBack = loc.url.pathname !== "/";
  return (
    <header class={`min-h-10vh p-2 relative mx-4 mt-4 bg-white`}>
      <div class="hidden p-10 font-saver text-sm text-base text-lg text-xl text-2xl bg-white rounded border-2 text-white"></div>
      {needsBack ? (
        <a
          class="absolute flex items-center top-1/4 h-1/2 cursor-pointer"
          href="/"
        >
          <ArrowLeftIcon />
        </a>
      ) : null}
      <div class="p-2 pl-8 align-center flex h-full">
        <Text size="large">Wanderlust Homebase</Text>
      </div>
    </header>
  );
});
