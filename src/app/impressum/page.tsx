// src/app/impressum/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Impressum | Gesetzliche Anbieterkennzeichnung',
  description:
    'Offizielles Impressum der Ka Service Dachau Webseite. Angaben gemäß § 5 TMG und § 2 DL-InfoV.',
};

const ImpressumPage: React.FC = () => {
  return (
    <main className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Impressum
        </h1>
        <p className="text-lg text-gray-600">
          Angaben gemäß § 5 Telemediengesetz (TMG)
        </p>
      </header>

      {/* 1. Anbieterdetails */}
      <section className="mb-10 p-6 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Anbieter</h2>
        <p className="text-gray-700">
          <strong>Ka Service Dachau (Einzelunternehmer)</strong> <br />
          Schlüsseldienst und Schlosserei <br />
          Kopernikusstraße 2 <br />
          85221 Dachau
        </p>
      </section>

      {/* 2. Kontakt */}
      <section className="mb-10 p-6 bg-white rounded-lg border">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Kontakt</h2>
        <p className="text-gray-700">
          Telefon:{' '}
          <a
            href="tel:01773977646"
            className="text-blue-600 hover:underline"
          >
            0177 3977646
          </a>{' '}
          (Notrufnummer) <br />
          E-Mail:{' '}
          <a
            href="mailto:ka-service-dachau@gmx.de"
            className="text-blue-600 hover:underline"
          >
            ka-service-dachau@gmx.de
          </a>{' '}
          <br />
          Website:{' '}
          <a
            href="https://xn--autoschlsselmann-qzb.de/"
            className="text-blue-600 hover:underline"
          >
            autoschlüsselmann.de
          </a>
        </p>
        <p className="mt-3 text-sm text-gray-500 italic">
          Bitte beachten Sie: Diese E-Mail-Adresse dient der allgemeinen
          Kommunikation. Bei dringenden Schlüsselnotfällen nutzen Sie bitte
          unsere Telefonnummer.
        </p>
      </section>

      {/* 3. Handelsregister & Umsatzsteuer-ID */}
      <section className="mb-10 p-6 bg-gray-50 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Registereintrag & Steuernummer
        </h2>
        <p className="text-gray-700">
          Handelsregister: HRB [Nummer, falls vorhanden] <br />
          Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG: DE [Nummer, falls
          vorhanden] <br />
          Zuständige Kammer: [Handwerkskammer oder IHK, falls vorhanden]
        </p>
      </section>

      {/* Rechtliche Hinweise */}
      <section className="mb-10 p-6 bg-white rounded-lg border">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">
          Rechtliche Hinweise
        </h2>
        <h3 className="text-xl font-semibold mb-2">Haftung für Inhalte</h3>
        <p className="text-gray-700 mb-4">
          Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
          auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
          §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
          übermittelte oder gespeicherte fremde Informationen zu überwachen oder
          nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
          hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung
          von Informationen nach den allgemeinen Gesetzen bleiben hiervon
          unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
          der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
          Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese
          Inhalte umgehend entfernen.
        </p>

        <h3 className="text-xl font-semibold mb-2">Haftung für Links</h3>
        <p className="text-gray-700 mb-4">
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
          Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
          Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
          verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
          waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
          inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
          Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
          von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
        </p>

        <h3 className="text-xl font-semibold mb-2">Urheberrecht</h3>
        <p className="text-gray-700">
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
          wir derartige Inhalte umgehend entfernen.
        </p>
      </section>
    </main>
  );
};

export default ImpressumPage;
