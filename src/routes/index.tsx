/* eslint-disable qwik/no-react-props */
import { $, component$, useStore } from "@builder.io/qwik";
import { DocumentHead } from "@builder.io/qwik-city";
import { Button } from "~/components/button";
import { Gallery } from "~/components/gallery";
import {
  aboutUsId,
  packagesId,
  servicesId,
} from "~/components/home-section-ids";
import { modalStore } from "~/components/modal";
import { Package } from "~/components/package";
import { ResponsiveFlexItem } from "~/components/responsive-flex-item";
import { Service } from "~/components/service";
import { Text } from "~/components/text";
import {
  ArcheryIcon,
  BookStackIcon,
  ChatBubbleEmptyIcon,
  CutSolidWithCurveIcon,
  HouseRoomsIcon,
  WifiIcon,
} from "~/integrations/react/iconoir";
import {
  coworkImageId,
  dayPassImageId,
  ergonomicImageId,
  fixedMonthPassImageId,
  flexibleMonthPassImageId,
  getImageUrl,
  meetingRoomImageId,
  packagesImageId,
  weekPassImageId,
} from "~/utils/image-ids";

export default component$(() => {
  const mStore = useStore(modalStore);
  return (
    <div class="flex flex-col">
      <Gallery
        items={[
          {
            imageUrl: getImageUrl(coworkImageId),
            title: "Willkommen im Wanderlust Homebase",
            description: "Deine Nomad Coworking base in Merzig",
            sectionId: "about-us",
          },
          {
            imageUrl: getImageUrl(ergonomicImageId),
            title: "Du hast die Kontrolle!",
            description:
              "Schnelles Internet, ergonomische Arbeitsplätze, coole Events und flexible Bezahlung - du bestimmst, was du willst",
            sectionId: "services",
          },
          {
            imageUrl: getImageUrl(packagesImageId),
            title: "So individuell wie du",
            description:
              "Ein fester Arbeitsplatz? Das wöchentliche Treffen mit Freunden? Oder doch nur zu Besuch?",
            sectionId: "packages",
          },
        ]}
      />
      <div class="bg-white mx-4  gap-5 md:gap-7 lg:gap-10">
        <div id={aboutUsId} class="flex flex-col gap-4 p-7 md:p-10">
          <Text size="huge" bold mono>
            About us
          </Text>
          <Text size="medium">
            Willkommen im Wanderlust Homebase - Ihrem innovativen Coworking-Raum
            im Herzen von Merzig!
          </Text>
          <Text size="medium">
            Unser Zentrum bietet zahlreiche Parkmöglichkeiten und ist nah an
            Bahnhöfen gelegen. Genieße offene Arbeitsbereiche, Meeting-Boxen und
            eine voll ausgestattete Küche in einer inspirierenden Umgebung.
            Tausche dich mit unserer lebendigen Community bei gemeinsamen Events
            aus und erlebe das pulsierende Stadtleben direkt vor der Tür!
          </Text>
          <Button
            variant="primary"
            size="medium"
            label="Know more"
            onClick={$(() => {
              mStore.visible = "know-more";
            })}
          />
        </div>
        <div
          id={servicesId}
          class="flex gap-2 flex-wrap p-7 md:p-10 md:gap-4 lg:gap-8"
        >
          <div class="flex flex-col align-center w-full mb-3">
            <Text size="huge" bold mono>
              Services
            </Text>
          </div>
          <ResponsiveFlexItem>
            <Service description="Kostenloses Wifi">
              <WifiIcon q:slot="icon" className="m-auto" />
            </Service>
          </ResponsiveFlexItem>
          <ResponsiveFlexItem>
            <Service description="Ergonomische Ausstattung">
              <CutSolidWithCurveIcon q:slot="icon" className="m-auto" />
            </Service>
          </ResponsiveFlexItem>
          <ResponsiveFlexItem>
            <Service description="Meeting rooms">
              <ChatBubbleEmptyIcon q:slot="icon" className="m-auto" />
            </Service>
          </ResponsiveFlexItem>
          <ResponsiveFlexItem>
            <Service description="Community events">
              <ArcheryIcon q:slot="icon" className="m-auto" />
            </Service>
          </ResponsiveFlexItem>
          <ResponsiveFlexItem>
            <Service description="Workshops & Learning area">
              <BookStackIcon q:slot="icon" className="m-auto" />
            </Service>
          </ResponsiveFlexItem>
          <ResponsiveFlexItem>
            <Service description="Küche & Snacks">
              <HouseRoomsIcon q:slot="icon" className="m-auto" />
            </Service>
          </ResponsiveFlexItem>
        </div>

        <div
          id={packagesId}
          class="flex gap-2 flex-wrap p-7 md:p-10 md:gap-4 lg:gap-8"
        >
          <div class="flex flex-col align-center w-full mb-3">
            <Text size="huge" bold mono>
              Cowork Pakete
            </Text>
          </div>
          <ResponsiveFlexItem>
            <Package
              title="Tagespass"
              price="15"
              deskType="flexible desk"
              imageId={dayPassImageId}
            />
          </ResponsiveFlexItem>
          <ResponsiveFlexItem>
            <Package
              title="Wochenpass"
              price="70"
              deskType="flexible desk"
              imageId={weekPassImageId}
            />
          </ResponsiveFlexItem>
          <ResponsiveFlexItem>
            <Package
              title="Monatspass"
              price="200"
              deskType="fixed desk"
              imageId={fixedMonthPassImageId}
            />
          </ResponsiveFlexItem>
          <ResponsiveFlexItem>
            <Package
              title="Monatspass"
              price="150"
              deskType="flexible desk"
              imageId={flexibleMonthPassImageId}
            />
          </ResponsiveFlexItem>
          <ResponsiveFlexItem>
            <Package
              title="Meeting room"
              price="10 / h"
              deskType="flexible desk"
              imageId={meetingRoomImageId}
            />
          </ResponsiveFlexItem>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Wanderlust homebase",
  meta: [
    {
      name: "charSet",
      content: "utf-8",
    },
    {
      name: "author",
      content: "Dominik Reinert",
    },
    {
      name: "keywords",
      content:
        "cowork, merzig, saar, office, shared, digital, nomad, coworking",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0",
    },
    {
      name: "description",
      content:
        "Homepage des Wanderlust homebase coworking in Merzig, Saarland, Deutschland.",
    },
    {
      name: "og:title",
      content: "Wanderlust homebase",
    },
    {
      name: "og:description",
      content: "Wanderlust homebase ist dein Coworking in Merzig.",
    },
    {
      name: "og:url",
      content: "wanderlust-homebase.netlify.com",
    },
    {
      name: "og:url",
      content: "website",
    },
  ],
};
