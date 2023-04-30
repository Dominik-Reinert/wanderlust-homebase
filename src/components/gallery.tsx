import { component$, useSignal } from "@builder.io/qwik";
import { Text } from "./text";
import navArrowLeft from "iconoir/icons/nav-arrow-left.svg";
import navArrowRight from "iconoir/icons/nav-arrow-right.svg";

interface GalleryProps {
  items: ItemProps[];
}

export const Gallery = component$((props: GalleryProps) => {
  const currentImage = useSignal(0);
  return (
    <div class="relative">
      <img
        class="absolute top-1/2 left-0"
        src={navArrowLeft}
        alt="nav arrow left"
        onClick$={() => {
          if (currentImage.value >= props.items.length - 1) {
            currentImage.value--;
          }
        }}
      />
      <img
        class="absolute top-1/2 right-0"
        src={navArrowRight}
        alt="nav arrow right"
        onClick$={() => {
          if (currentImage.value < props.items.length) {
            currentImage.value++;
          }
        }}
      />
      <Item {...props.items[currentImage.value]} />
    </div>
  );
});

interface ItemProps {
  imageUrl: string;
  title: string;
  description: string;
}

const Item = component$(({ imageUrl, title, description }: ItemProps) => {
  return (
    <div
      key={title}
      class={`w-full min-h-30vh bg-cover bg-center flex flex-col p-5 md:p-7 md:min-h-30vh bg-cover bg-no-repeat`}
      style={{
        background: `url(${imageUrl})`,
      }}
    >
      <Text size="large">{title}</Text>
      <Text size="small">{description}</Text>
    </div>
  );
});
