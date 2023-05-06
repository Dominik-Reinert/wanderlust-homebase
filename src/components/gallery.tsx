/* eslint-disable qwik/no-react-props */
import type { QwikMouseEvent } from "@builder.io/qwik";
import { component$, useSignal, $ } from "@builder.io/qwik";
import { Text } from "./text";
import type {
  aboutUsId,
  contactId,
  packagesId,
  servicesId,
} from "./home-section-ids";
import {
  NavArrowLeftIcon,
  NavArrowRightIcon,
} from "~/integrations/react/iconoir";
import { exhaustiveCheck } from "~/utils/exhaustive-check";
import { Button } from "./button";

interface GalleryProps {
  items: ItemProps[];
}

export const Gallery = component$((props: GalleryProps) => {
  const currentImage = useSignal(0);
  return (
    <div class="relative">
      <div
        class="p-2"
        onClick$={$(() => {
          if (currentImage.value >= props.items.length - 1) {
            currentImage.value--;
          }
        })}
      >
        <NavArrowLeftIcon className="absolute top-1/2 left-0 text-white" />
      </div>
      <div
        class="p-2"
        onClick$={$(() => {
          if (currentImage.value < props.items.length) {
            currentImage.value++;
          }
        })}
      >
        <NavArrowRightIcon className="absolute top-1/2 right-0 text-white" />
      </div>
      <Item {...props.items[currentImage.value]} />
    </div>
  );
});

interface ItemProps {
  imageUrl: string;
  title: string;
  description: string;
  sectionId:
    | typeof aboutUsId
    | typeof servicesId
    | typeof packagesId
    | typeof contactId;
}

const Item = component$(
  ({ imageUrl, title, description, sectionId }: ItemProps) => {
    return (
      <div
        key={title}
        class={`w-full min-h-40vh bg-cover bg-center text-white flex flex-col p-5 md:p-7 bg-cover bg-no-repeat`}
        style={{
          background: `url(${imageUrl})`,
        }}
      >
        <Text size="large">{title}</Text>
        <Text size="small">{description}</Text>
        <ItemGoToSectionButton sectionId={sectionId} />
      </div>
    );
  }
);

const ItemGoToSectionButton = component$(
  ({ sectionId }: Pick<ItemProps, "sectionId">) => {
    return (
      <Button
        variant="tertiary"
        label={getItemButtonLabel(sectionId)}
        onClick={$(() => {
          const target = document.querySelector(`#${sectionId}`);
          if (target) {
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        })}
      />
    );
  }
);

function getItemButtonLabel(sectionId: ItemProps["sectionId"]): string {
  switch (sectionId) {
    case "about-us":
      return "About us";
    case "contact":
      return "Contact";
    case "packages":
      return "Cowork Pakete";
    case "services":
      return "Services";
    default:
      exhaustiveCheck(sectionId);
      return "";
  }
}
