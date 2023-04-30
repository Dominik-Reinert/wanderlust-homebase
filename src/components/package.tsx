import { component$ } from "@builder.io/qwik";
import { Text } from "./text";

interface PackageProps {
  title: string;
  price: string;
  deskType: "flexible" | "fixed";
}

export const Package = component$(
  ({ title, price, deskType }: PackageProps) => {
    return (
      <div class="flex flex-col flex-wrap grow shrink align-center justify-center items-center basis-full md:basis-5/12 lg:basis-3/12">
        <div>background image</div>
        <div class="border-b-2 border-gray-200">
          <div>
            <Text size="large" center bold>
              {title}
            </Text>
          </div>
          <div>
            <Text size="large" center bold>
              {price}
            </Text>
          </div>
        </div>
        <Text size="medium" center bold>
          {deskType}
        </Text>
      </div>
    );
  }
);
