export const coworkImageId = "d81d09df-558a-4366-f7fc-ed8373854f00";
export const ergonomicImageId = "a20991d9-1567-43dc-6c4f-b347c585f000";
export const packagesImageId = "baa0c053-60dc-499c-815c-911090f62d00";
export const meetingRoomImageId = "73a1132c-a372-4a75-0c0a-49d756020e00";
export const dayPassImageId = "a8cf8e7e-515a-4a3a-ea92-81fdca442c00";
export const weekPassImageId = "64263c21-f45c-4bf2-c0d0-76308d8ff800";
export const fixedMonthPassImageId = "f71f2f12-ca22-494f-8d8b-cb1a5fb69500";
export const flexibleMonthPassImageId = "ae25ee82-ebbc-4ce3-ec30-544b80337700";

export function getImageUrl(
  imageId:
    | typeof coworkImageId
    | typeof ergonomicImageId
    | typeof packagesImageId
    | typeof meetingRoomImageId
    | typeof dayPassImageId
    | typeof weekPassImageId
    | typeof fixedMonthPassImageId
    | typeof flexibleMonthPassImageId
): string {
  return `https://imagedelivery.net/HF6NvIpF7AsKS0VxyldIkA/${imageId}/public`;
}
