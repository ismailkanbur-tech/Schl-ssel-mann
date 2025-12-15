// src/app/ueber-uns/page.tsx
import { Metadata } from 'next';
import { ShieldCheckIcon, ClockIcon, MapPinIcon, HomeModernIcon } from '@heroicons/react/24/solid';

export const metadata: Metadata = {
    title: 'Über Uns | Schlüsseldienst Schlüsselmann - Ihr Lokaler Experte',
    description: 'Erfahren Sie mehr über den Schlüsselmann. Wir bieten 24/7 Notdienst, transparente Festpreise und schnelle, schadenfreie Türöffnung in der Region München, Dachau, Freising.',
};

const UeberUnsPage: React.FC = () => {
    return (
        <main className="container mx-auto px-4 py-12 md:py-20">
            <header className="text-center mb-16">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                    Über <span className="text-blue-600">Schlüsselmann</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Ihre Sicherheit ist unser Versprechen. Lernen Sie das Team kennen, das auf lokale Hilfe und faire Preise setzt.
                </p>
            </header>

            {/* 1. Şirket Felsefesi */}
            <section className="bg-gray-50 p-8 md:p-12 rounded-xl shadow-lg mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
                    Unsere Philosophie: Lokal, Transparent, Schnell
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    
                    <div className="p-4">
                        <ShieldCheckIcon className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Festpreis & Transparenz</h3>
                        <p className="text-gray-600 text-sm">
                            Keine versteckten Kosten. Wir garantieren Ihnen einen Festpreis, bevor wir mit der Arbeit beginnen. Volle Kostensicherheit.
                        </p>
                    </div>

                    <div className="p-4">
                        <ClockIcon className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                        <h3 className="text-xl font-semibold mb-2">24/7 Erreichbarkeit</h3>
                        <p className="text-gray-600 text-sm">
                            Schlüsselnotfälle passieren rund um die Uhr. Deshalb sind wir an 365 Tagen im Jahr, 24 Stunden am Tag für Sie da.
                        </p>
                    </div>

                    <div className="p-4">
                        <MapPinIcon className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                        <h3 className="text-xl font-semibold mb-2">Lokale Expertise</h3>
                        <p className="text-gray-600 text-sm">
                            Wir kennen die Region München, Dachau und Freising. Kurze Anfahrtswege bedeuten schnelle Hilfe vor Ort.
                        </p>
                    </div>
                </div>
            </section>
            
            {/* 2. Hikayemiz / Detaylı Metin */}
            <section className="max-w-4xl mx-auto mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                    Wer wir sind und was uns antreibt
                </h2>
                <div className="space-y-6 text-lg text-gray-700">
                    <p>
                        Der Schlüsselmann wurde mit der klaren Vision gegründet, den Schlüsseldienst-Markt fairer und kundenfreundlicher zu gestalten. Wir wissen, dass eine Türöffnung oft in Stresssituationen (Aussperrung, Einbruch) notwendig wird. Genau deshalb legen wir Wert auf **maximale Transparenz und lokale Präsenz**.
                    </p>
                    <p>
                        Unser Team besteht aus zertifizierten und hochqualifizierten Technikern, die auf modernste, schadenfreie Öffnungsmethoden spezialisiert sind. Ob Haustür, Wohnungstür oder Auto – wir sorgen dafür, dass Sie schnell und ohne unnötige Beschädigungen wieder Zugang erhalten.
                    </p>
                    <p className="font-semibold text-blue-600">
                        Wir sind stolz darauf, nicht nur Dienstleister, sondern Ihr lokaler Nachbar in der Not zu sein. Rufen Sie uns jederzeit an!
                    </p>
                </div>
            </section>

            {/* 3. CTA (Call to Action) */}
            <div className="text-center pt-10">
                <a 
                    href={`tel:089-111111`} 
                    className="inline-flex items-center px-10 py-4 text-xl bg-red-600 text-white font-bold rounded-full shadow-lg transition duration-300 hover:bg-red-700 hover:scale-105"
                >
                    <HomeModernIcon className="h-6 w-6 mr-3" /> Jetzt den Notdienst anrufen
                </a>
            </div>
        </main>
    );
}

export default UeberUnsPage;