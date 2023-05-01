import { component$ } from "@builder.io/qwik";
import { Text } from "~/components/text";

export default component$(() => {
  return (
    <div class="flex flex-col gap-5 p-3 md:p-5">
      <Text size="large" bold>Impressum</Text>
      <Text size="small">Angaben gemäß § 5 TMG</Text>

      <div>
        <Text size="medium">Dominik Reinert</Text>
        <Text size="medium">Am Jungenwäldchen 8</Text>
        <Text size="medium">66663 Merzig</Text>
      </div>

      <div>
        <Text size="medium" bold>
          Vertreten durch
        </Text>
        <Text size="medium">Dominik Reinert</Text>
      </div>

      <Text size="medium" bold>
        Datenschutz
      </Text>

      <Text size="medium">
        Die Nutzung unserer Webseite ist in der Regel ohne Angabe
        personenbezogener Daten möglich. Soweit auf unseren Seiten
        personenbezogene Daten (beispielsweise Name, Anschrift oder
        eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets auf
        freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
        Zustimmung nicht an Dritte weitergegeben. Wir weisen darauf hin, dass
        die Datenübertragung im Internet (z.B. bei der Kommunikation per E-Mail)
        Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor
        dem Zugriff durch Dritte ist nicht möglich. Der Nutzung von im Rahmen
        der Impressumspflicht veröffentlichten Kontaktdaten durch Dritte zur
        Übersendung von nicht ausdrücklich angeforderter Werbung und
        Informationsmaterialien wird hiermit ausdrücklich widersprochen. Die
        Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
        Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
        Spam-Mails, vor.
      </Text>
    </div>
  );
});
