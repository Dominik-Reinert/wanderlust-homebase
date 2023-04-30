import { component$, useComputed$ } from "@builder.io/qwik";
import { v4 } from "uuid";

interface ButtonProps {
  id?: string;
  label: string;
  variant: "primary" | "secondary";
  onClick?: Callback<void>;
}

export const Button = component$(
  ({ id, label, variant, onClick }: ButtonProps) => {
    const buttonId = useComputed$(() => id ?? v4());
    return (
      <div class={`${getButtonVariantClass(variant)} cursor-pointer p-4 `}>
        <label for={buttonId.value}>{label}</label>
        <button id={buttonId.value} onClick$={() => onClick?.()} />
      </div>
    );
  }
);

function getButtonVariantClass(variant: ButtonProps["variant"]): string {
  switch (variant) {
    case "primary":
      return `text-white bg-sky-600`;
    case "secondary":
      return `text-sky-600 bg-white border-sky-600 rounded border-2`;
  }
}
