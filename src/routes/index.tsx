/* eslint-disable qwik/no-react-props */
import { component$ } from "@builder.io/qwik";
import { Button } from "~/components/button";
import { Gallery } from "~/components/gallery";
import {
  aboutUsId,
  packagesId,
  servicesId,
} from "~/components/home-section-ids";
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
  return (
    <div>
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
      <div class="bg-white mx-4">
        <div id={aboutUsId} class="flex flex-col gap-4 p-7 md:p-10">
          <Text size="large" uppercase bold>
            About us
          </Text>
          <Text size="medium">
            Willkommen im Wanderlust Homebase - Ihrem innovativen Coworking-Raum
            im Herzen von Merzig!
          </Text>
          <Text size="medium">
            Unser Zentrum bietet ausreichend Parkplätze für Autos und liegt in
            unmittelbarer Nähe zu den Bahnhöfen. Mit einer offenen
            Arbeitsfläche, Meeting-Boxen und einer voll ausgestatteten Küche
            schaffen wir eine inspirierende Umgebung für Kreativität und
            Zusammenarbeit. Hier treffen Sie auf eine lebendige Community, die
            sich bei gemeinsamen Events wie Mittagessen oder Billardspielen
            austauscht. Erleben Sie das pulsierende Stadtleben direkt vor
            unserer Tür!
          </Text>
          <Button variant="primary" size="medium" label="Know more" />
        </div>
        <div
          id={servicesId}
          class="flex gap-2 flex-wrap p-7 md:p-10 md:gap-4 lg:gap-8"
        >
          <div class="flex flex-col align-center text-center w-full mb-3">
            <Text size="small">Was wir bieten</Text>
            <Text size="large" bold>
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
          <div class="flex flex-col align-center text-center w-full mb-3">
            <Text size="large" bold>
              Cowork Pakete
            </Text>
          </div>
          <ResponsiveFlexItem>
            <Package
              title="Tagespass"
              price="15€"
              deskType="flexible"
              imageId={dayPassImageId}
            />
          </ResponsiveFlexItem>
          <ResponsiveFlexItem>
            <Package
              title="Wochenpass"
              price="70€"
              deskType="flexible"
              imageId={weekPassImageId}
            />
          </ResponsiveFlexItem>
          <ResponsiveFlexItem>
            <Package
              title="Monatspass"
              price="200€"
              deskType="fixed"
              imageId={fixedMonthPassImageId}
            />
          </ResponsiveFlexItem>
          <ResponsiveFlexItem>
            <Package
              title="Monatspass"
              price="150€"
              deskType="flexible"
              imageId={flexibleMonthPassImageId}
            />
          </ResponsiveFlexItem>
          <ResponsiveFlexItem>
            <Package
              title="Meeting room"
              price="10€ / h"
              deskType="flexible"
              imageId={meetingRoomImageId}
            />
          </ResponsiveFlexItem>
        </div>
      </div>
    </div>
  );
});
