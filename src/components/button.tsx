import { QRL, component$, useComputed$ } from "@builder.io/qwik";
import { v4 } from "uuid";

interface ButtonProps {
  id?: string;
  label: string;
  variant: "primary" | "secondary";
  onClick?: QRL<Callback<void>>;
}

export const Button = component$(
  ({ id, label, variant, onClick }: ButtonProps) => {
    const buttonId = useComputed$(() => id ?? v4());
    return (
      <div
        class={`${getButtonVariantClass(
          variant
        )} cursor-pointer p-4  rounded border-2 w-fit`}
      >
        <label for={buttonId.value}>{label}</label>
        <button id={buttonId.value} onClick$={() => onClick?.()} />
      </div>
    );
  }
);

function getButtonVariantClass(variant: ButtonProps["variant"]): string {
  switch (variant) {
    case "primary":
      return `text-white bg-sky-600 hover:bg-sky-400`;
    case "secondary":
      return `text-sky-600 bg-white border-sky-600 hover:border-sky-400 hover:text-sky-400`;
  }
}
