// src/app/impressum/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Impressum | Gesetzliche Anbieterkennzeichnung',
    description: 'Offizielles Impressum der Schlüsselmann Webseite. Angaben gemäß § 5 TMG und § 2 DL-InfoV.',
};

const ImpressumPage: React.FC = () => {
    return (
        <main className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
            <header className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                    Impressum
                </h1>
                <p className="text-lg text-gray-600">Angaben gemäß § 5 Telemediengesetz (TMG)</p>
            </header>

            {/* 1. Anbieterdetails */}
            <section className="mb-10 p-6 bg-gray-50 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">Anbieter</h2>
                <p className="text-gray-700">
                    **Schlüsselmann Mustermann (Einzelunternehmer)** <br />
                    [Firma Adınız veya Şahsınızın Adı Soyadı] <br />
                    [Adresiniz - Örnek: Musterstraße 1] <br />
                    [Posta Kodu Şehir - Örnek: 80331 München]
                </p>
            </section>

            {/* 2. Kontakt */}
            <section className="mb-10 p-6 bg-white rounded-lg border">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">Kontakt</h2>
                <p className="text-gray-700">
                    Telefon: <a href="tel:089-111111" className="text-blue-600 hover:underline">089-111111</a> (Notrufnummer) <br />
                    E-Mail: <a href="mailto:info@schluesselmann.de" className="text-blue-600 hover:underline">info@schluesselmann.de</a> <br />
                    Website: www.schluesselmann.de
                </p>
                <p className="mt-3 text-sm text-gray-500 italic">
                    Bitte beachten Sie: Diese E-Mail-Adresse dient der allgemeinen Kommunikation. Bei dringenden Schlüsselnotfällen nutzen Sie bitte unsere Telefonnummer.
                </p>
            </section>

            {/* 3. Handelsregister & Umsatzsteuer-ID (Gerekliyse) */}
            <section className="mb-10 p-6 bg-gray-50 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">Registereintrag & Steuernummer</h2>
                <p className="text-gray-700">
                    **Handelsregister:** [HRB Numaranız, Gerekliyse] <br />
                    **Umsatzsteuer-Identifikationsnummer** gemäß § 27 a Umsatzsteuergesetz: [DE Numaranız, Gerekliyse] <br />
                    **Zuständige Kammer:** [Zanaat Odası veya Ticaret Odası Adı, Gerekliyse]
                </p>
            </section>
            
            <p className="text-center mt-12 text-sm text-gray-500">
                *Hinweis: Dies ist ein Muster-Impressum. Bitte ersetzen Sie die Platzhalter durch Ihre korrekten, vollständigen und aktuellen Unternehmensdaten. Holen Sie bei Bedarf rechtlichen Rat ein.*
            </p>
        </main>
    );
}

export default ImpressumPage;