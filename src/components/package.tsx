import { component$ } from "@builder.io/qwik";
import { Text } from "./text";
import { getImageUrl } from "../utils/image-ids";

interface PackageProps {
  title: string;
  price: string;
  deskType: `${"flexible" | "fixed"} desk`;
  imageId: Parameters<typeof getImageUrl>[0];
}

export const Package = component$(
  ({ title, price, deskType, imageId }: PackageProps) => {
    return (
      <div class="flex flex-col flex-wrap grow shrink align-center p-4 justify-center items-center basis-full md:basis-5/12 lg:basis-3/12 mb-5">
        <div
          class="bg-center bg-no-repeat bg-cover w-full min-h-40vh"
          style={{ backgroundImage: `url(${getImageUrl(imageId)})` }}
        />
        <div class="border-b-2 border-gray-200 flex flex-col gap-2 my-2 pb-2">
          <div>
            <Text size="large" center>
              {title}
            </Text>
          </div>
          <div>
            <Text size="huge" center>
              <sup class="text-sm md:text-base mr-1">€ </sup>
              {price}
            </Text>
          </div>
        </div>
        <Text size="small" center>
          {deskType}
        </Text>
      </div>
    );
  }
);
