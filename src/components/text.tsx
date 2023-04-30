import { Slot, component$ } from "@builder.io/qwik";

interface TextProps {
  size: "small" | "medium" | "large";
  uppercase?: boolean;
  bold?: boolean;
}

export const Text = component$((props: TextProps) => {
  return (
    <div
      class={`${getSizeClasses(props.size)} 
      ${props.uppercase ? "uppercase" : ""}
      ${props.bold ? "bold" : ""}
      `}
    >
      <Slot />
    </div>
  );
});

function getSizeClasses(size: TextProps["size"]): string {
  switch (size) {
    case "small":
      return "text-sm md:text-base lg:text-lg";
    case "medium":
      return "text-base md:text-lg lg:text-xlg";
    case "large":
      return "text-lg md:text-xlg lg:text-2xlg";
  }
}
