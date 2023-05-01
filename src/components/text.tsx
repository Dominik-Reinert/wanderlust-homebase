import { Slot, component$ } from "@builder.io/qwik";

interface TextProps {
  size: "small" | "medium" | "large";
  uppercase?: boolean;
  bold?: boolean;
  center?: boolean;
}

export const Text = component$((props: TextProps) => {
  return (
    <div
      class={`${getSizeClasses(props.size)} 
      ${props.uppercase ? "uppercase" : ""}
      ${props.bold ? "font-bold" : ""}
      ${props.center ? "text-center" : ""}
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
      return "text-base md:text-lg lg:text-xl";
    case "large":
      return "text-xl md:text-2xl lg:text-3xl";
  }
}
