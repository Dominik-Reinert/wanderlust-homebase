import { component$ } from "@builder.io/qwik";
import { Text } from "./text";

interface GalleryProps {
  items: ItemProps[];
}

export const Gallery = component$((props: GalleryProps) => {
  return (
    <div>
      {props.items.map((item) => (
        <Item key={item.title} {...item} />
      ))}
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
      class={` w-full min-h-40vh bg-cover bg-center flex items-center justify-center md:min-h-30vh`}
      style={{
        background: `url(${imageUrl})`,
      }}
    >
      <Text size="large">{title}</Text>
      <Text size="small">{description}</Text>
    </div>
  );
});
