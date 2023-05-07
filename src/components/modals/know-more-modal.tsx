import { component$ } from "@builder.io/qwik";
import { Modal } from "../modal";
import { Text } from "../text";

export const KnowMoreModal = component$(() => {
  return (
    <Modal name="know-more">
      <div class="p-2 md:p-4 lg:p-7 flex flex-col gap-5 md:gap-8">
        <Text size="huge" bold mono q:slot="title">
          Interessiert?
        </Text>
        <div>
          <Text size="medium">
            Ich versuche gerade Solo herauszufinden, ob sich genügend
            Interessierte Coworker in Merzig finden lassen, so dass sich ein
            Coworking space lohnt.
          </Text>
        </div>
        <div>
          <Text size="medium">
            Meine Vision ist ein hipper Treffpunkt zum gemeinsamen arbeiten,
            networken und Spaß haben. Neben ordentlicher Ausstattung soll es
            auch Veranstaltungen und Ausflüge geben.
          </Text>
        </div>
        <div>
          <Text size="medium">
            Neben Brettspielabenden sind auch VR gaming, escape rooms, billard
            und natürlich auch gemeinsames Essen und Trinken denkbar.
          </Text>
        </div>
        <div>
          <Text size="medium">
            Wenn du ernsthaftes Interesse hast, und/oder gar mithelfen möchtest,
            diese Projekt gemeinsam mit mir auf die Beine zu stellen, so wäre
            ich hocherfreut von dir zu hören! Schreib mir einfach eine Email
            oder gleich bei WhatsApp. Meine Kontaktdaten findest du weiter unten
            auf der Seite
          </Text>
        </div>
      </div>
    </Modal>
  );
});
