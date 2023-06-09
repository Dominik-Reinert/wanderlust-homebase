/* eslint-disable qwik/no-react-props */
import { Fragment, QRL, useStore, useVisibleTask$ } from "@builder.io/qwik";
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
  items: Omit<ItemProps, "hidden" | "onSwipe$">[];
}

export const Gallery = component$((props: GalleryProps) => {
  const currentImage = useSignal(0);
  const goLeft$ = $(() => {
    console.info("go left");
    if (currentImage.value > 0) {
      currentImage.value--;
    } else {
      currentImage.value = props.items.length - 1;
    }
  });
  const goRight$ = $(() => {
    console.info("go right");
    if (currentImage.value < props.items.length - 1) {
      currentImage.value++;
    } else {
      currentImage.value = 0;
    }
  });
  return (
    <div class="relative">
      <div
        class="absolute flex align-center w-1/3 h-full left-0 invisible md:visible z-10"
        onClick$={goLeft$}
      >
        <div class="my-auto mx-0">
          <NavArrowLeftIcon className="text-white text-2xl lg:text-4xl cursor-pointer" />
        </div>
      </div>
      <div
        class="absolute flex justify-end align-center w-1/3 h-full right-0 invisible md:visible z-10"
        onClick$={goRight$}
      >
        <div class=" my-auto mx-0">
          <NavArrowRightIcon className="text-white text-2xl lg:text-4xl cursor-pointer" />
        </div>
      </div>
      <div class="absolute w-1/3 left-1/3 bottom-0 flex gap-1 pb-2 md:gap-3">
        <div class="grow" />
        {props.items.map((_, index) => (
          <RoundDot
            key={index}
            selected={index === currentImage.value}
            onClick$={$(() => {
              currentImage.value = index;
            })}
          />
        ))}
        <div class="grow" />
      </div>
      {props.items.map((item, index) => (
        <Fragment key={index}>
          <PreloadItem imageUrl={item.imageUrl} />
          <Item
            {...item}
            hidden={index !== currentImage.value}
            onSwipe$={$((swiped: "left" | "right") => {
              if (swiped === "right") {
                goRight$();
              } else {
                goLeft$();
              }
            })}
          />
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
  onSwipe$: QRL<(swiped: "left" | "right") => void>;
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
  ({
    imageUrl,
    title,
    description,
    sectionId,
    hidden,
    onSwipe$,
  }: ItemProps) => {
    const swipeStore: { x: null | number; y: null | number } = useStore({
      x: null,
      y: null,
    });
    return (
      <div
        key={title}
        class={`${
          hidden ? "hidden" : ""
        } flex flex-col w-full min-h-50vh md:min-h-70vh bg-cover bg-center text-white bg-cover bg-no-repeat bg-center `}
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
        onTouchStart$={(event) => {
          swipeStore.x = event.touches[0].clientX;
          swipeStore.y = event.touches[0].clientY;
        }}
        onTouchEnd$={(event) => {
          if (swipeStore.x !== null && swipeStore.y !== null) {
            const endTouch = event.changedTouches[0];
            const diffX = endTouch.clientX - swipeStore.x;
            const diffY = endTouch.clientY - swipeStore.y;

            if (Math.abs(diffX) > Math.abs(diffY)) {
              if (diffX > 0) {
                onSwipe$("left");
              } else {
                onSwipe$("right");
              }
            }
          }
        }}
      >
        <div class="grow flex flex-col justify-between w-full h-full p-10 md:p-20 grow before:z-0 before:absolute before:pointer-events-none before:inset-0 before:opacity-25 before:bg-black before:w-full before:h-full before:block">
          <div class="relative z-10">
            <Text size="small">{title}</Text>
            <Text size="large">{description}</Text>
          </div>
          <div class="relative z-10">
            <ItemGoToSectionButton sectionId={sectionId} />
          </div>
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

const RoundDot = component$(
  ({
    selected,
    onClick$,
  }: {
    selected: boolean;
    onClick$?: QRL<Callback<void>>;
  }) => {
    const dotStyle = selected ? "bg-white" : "bg-transparent";
    return (
      <div
        class={`cursor-pointer z-10 w-2 md:w-4 h2 md:h-4 p-2 rounded-full border-2 border-white ${dotStyle}`}
        onClick$={() => onClick$?.()}
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
