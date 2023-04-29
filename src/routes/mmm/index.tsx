import { component$ } from "@builder.io/qwik";
import { Gallery } from "~/components/gallery";

export default component$(() => {
  return (
    <Gallery
      items={[
        {
          imageUrl:
            "https://imagedelivery.net/gV_YLJoGO2jaxKnnl4mKxg/d2e6641a-7b95-4bfe-78e1-26ed549eb500/public",
          title: "hello",
          description: "this is some world description",
        },
        {
          imageUrl:
            "https://imagedelivery.net/gV_YLJoGO2jaxKnnl4mKxg/fcf44452-85d5-4626-488f-a062cfb92600/public",
          title: "world",
          description: "this is some hello description",
        },
      ]}
    />
  );
});
