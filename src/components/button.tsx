import type { QRL } from "@builder.io/qwik";
import { component$, useComputed$ } from "@builder.io/qwik";
import { v4 } from "uuid";

interface ButtonProps {
  id?: string;
  label: string;
  variant: "primary" | "secondary" | "tertiary";
  size: "small" | "medium";
  onClick?: QRL<Callback<void>>;
}

export const Button = component$(
  ({ id, label, variant, size, onClick }: ButtonProps) => {
    const buttonId = useComputed$(() => id ?? v4());
    return (
      <div
        class={`
        ${getButtonVariantClass(variant)}
        ${getButtonSizeClass(size)}
          cursor-pointer rounded border-2 w-fit`}
        onClick$={() => onClick?.()}
      >
        <label for={buttonId.value}>{label}</label>
        <button id={buttonId.value} aria-label={label} />
      </div>
    );
  }
);

function getButtonVariantClass(variant: ButtonProps["variant"]): string {
  switch (variant) {
    case "primary":
      return `text-white bg-sky-700 hover:bg-sky-500 font-bold`;
    case "secondary":
      return `text-sky-700 bg-white border-sky-700 hover:border-sky-500 hover:text-sky-500`;
    case "tertiary":
      return `text-white bg-transparent border-white`;
  }
}

function getButtonSizeClass(size: ButtonProps["size"]): string {
  switch (size) {
    case "small":
      return `p-2`;
    case "medium":
      return `p-4`;
  }
}
