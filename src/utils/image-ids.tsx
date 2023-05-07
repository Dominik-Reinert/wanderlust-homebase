export const coworkImageId = "d81d09df-558a-4366-f7fc-ed8373854f00";
export const ergonomicImageId = "a20991d9-1567-43dc-6c4f-b347c585f000";
export const packagesImageId = "baa0c053-60dc-499c-815c-911090f62d00";

export function getImageUrl(
  imageId:
    | typeof coworkImageId
    | typeof ergonomicImageId
    | typeof packagesImageId
): string {
  return `https://imagedelivery.net/HF6NvIpF7AsKS0VxyldIkA/${imageId}/public`;
}
