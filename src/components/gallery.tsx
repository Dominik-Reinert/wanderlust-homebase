/* eslint-disable qwik/no-react-props */
import { Fragment } from "@builder.io/qwik";
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
  items: Omit<ItemProps, "hidden">[];
}

export const Gallery = component$((props: GalleryProps) => {
  const currentImage = useSignal(0);
  return (
    <div class="relative">
      <div
        class="absolute flex align-center w-1/3 h-full left-0 invisible md:visible"
        onClick$={$(() => {
          if (currentImage.value > 0) {
            currentImage.value--;
          }
        })}
      >
        <div class="my-auto mx-0">
          <NavArrowLeftIcon className="text-white text-2xl" />
        </div>
      </div>
      <div
        class="absolute flex justify-end align-center w-1/3 h-full right-0 invisible md:visible"
        onClick$={$(() => {
          if (currentImage.value < props.items.length - 1) {
            currentImage.value++;
          }
        })}
      >
        <div class=" my-auto mx-0">
          <NavArrowRightIcon className="text-white text-2xl" />
        </div>
      </div>
      <div class="absolute w-1/3 left-1/3 bottom-0 flex gap-1 pb-2">
        <div class="grow" />
        {props.items.map((_, index) => (
          <RoundDot key={index} selected={index === currentImage.value} />
        ))}
        <div class="grow" />
      </div>
      {props.items.map((item, index) => (
        <Fragment key={index}>
          <PreloadItem imageUrl={item.imageUrl} />
          <Item {...item} hidden={index !== currentImage.value} />
        </Fragment>
      ))}
    </div>
  );
});

interface ItemProps {
  imageUrl: string;
  title: string;
  description: string;
  hidden: boolean;
  sectionId:
    | typeof aboutUsId
    | typeof servicesId
    | typeof packagesId
    | typeof contactId;
}

const PreloadItem = component$(({ imageUrl }: Pick<ItemProps, "imageUrl">) => {
  return (
    <div
      class={`h-0 w-0`}
      style={{
        background: `url(${imageUrl})`,
      }}
    ></div>
  );
});

const Item = component$(
  ({ imageUrl, title, description, sectionId, hidden }: ItemProps) => {
    return (
      <div
        key={title}
        class={`${
          hidden ? "hidden" : ""
        } w-full min-h-40vh md:min-h-60vh bg-cover bg-center text-white flex flex-col p-10 md:p-20 bg-cover bg-no-repeat justify-between`}
        style={{
          background: `url(${imageUrl})`,
        }}
      >
        <div>
          <Text size="small">{title}</Text>
          <Text size="large">{description}</Text>
        </div>
        <div>
          <ItemGoToSectionButton sectionId={sectionId} />
        </div>
      </div>
    );
  }
);

const ItemGoToSectionButton = component$(
  ({ sectionId }: Pick<ItemProps, "sectionId">) => {
    return (
      <Button
        variant="tertiary"
        size="small"
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

const RoundDot = component$(({ selected }: { selected: boolean }) => {
  const dotStyle = selected ? "bg-white" : "bg-transparent";
  return (
    <div class={`w-2 md:w-4 h2 md:h-4 p-2 rounded-full border-2 border-white ${dotStyle}`} />
  );
});

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
