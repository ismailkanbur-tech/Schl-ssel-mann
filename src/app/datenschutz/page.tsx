// src/app/datenschutz/page.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Datenschutzerklärung | Schlüsselmann',
    description: 'Informationen zur Verarbeitung Ihrer personenbezogenen Daten (DSGVO) auf der Webseite des Schlüsselmanns.',
};

const DatenschutzPage: React.FC = () => {
    return (
        <main className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
            <header className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                    Datenschutzerklärung
                </h1>
                <p className="text-lg text-gray-600">Stand: Dezember 2025</p>
            </header>

            {/* 1. Einleitung */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">1. Einleitung und Überblick</h2>
                <p className="text-gray-700 mb-4">
                    Wir freuen uns über Ihr Interesse an unserer Webseite. Der Schutz Ihrer personenbezogenen Daten ist uns wichtig. In dieser Datenschutzerklärung informieren wir Sie über Art, Umfang und Zweck der Verarbeitung Ihrer Daten bei der Nutzung unserer Webseite.
                </p>
                <p className="text-gray-700">
                    Verantwortlich für die Datenverarbeitung auf dieser Webseite ist: [Adınız/Şirket Adınız - Impressum'dakiyle aynı].
                </p>
            </section>

            {/* 2. Grundsätzliches zur Datenverarbeitung */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">2. Allgemeine Hinweise zur Datenverarbeitung</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                    <li>**Zugriffsdaten (Server-Logfiles):** Beim Besuch unserer Website werden automatisch Informationen wie Browsertyp, Betriebssystem, IP-Adresse und Uhrzeit des Zugriffs erfasst. Dies dient der technischen Funktionsfähigkeit und Sicherheit.</li>
                    <li>**Kontaktformular und Telefon:** Wenn Sie uns per E-Mail oder über die Notrufnummer kontaktieren, werden Ihre übermittelten Daten (Name, Telefonnummer) zur Bearbeitung der Anfrage gespeichert.</li>
                    <li>**Rechtsgrundlage:** Die Verarbeitung Ihrer Daten erfolgt auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse) oder Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung oder vorvertragliche Maßnahmen).</li>
                </ul>
            </section>
            
            {/* 3. Ihre Rechte */}
            <section className="mb-10">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">3. Ihre Rechte als betroffene Person</h2>
                <p className="text-gray-700">
                    Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Widerspruch gegen die Verarbeitung (Art. 21 DSGVO) sowie das Recht auf Datenübertragbarkeit (Art. 20 DSGVO).
                </p>
            </section>

            <p className="text-center mt-12 text-sm text-red-500 italic">
                **WICHTIGER HINWEIS:** Dies ist ein vereinfachtes Muster. Für eine rechtssichere Datenschutzerklärung, die alle verwendeten Tools (z.B. Google Analytics, Hotjar, etc.) abdeckt, sollten Sie einen professionellen Datenschutzgenerator oder einen Rechtsbeistand konsultieren.
            </p>
        </main>
    );
}

export default DatenschutzPage;