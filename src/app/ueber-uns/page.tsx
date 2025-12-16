// src/app/ueber-uns/page.tsx - Ka Service ve Görsel Bütünlük Güncellemesi

import { Metadata } from 'next';
import { 
    ShieldCheckIcon, 
    ClockIcon, 
    MapPinIcon, 
    PhoneIcon, // CTA için daha uygun
    UserGroupIcon, // Takım için yeni ikon
} from '@heroicons/react/24/solid';

// Renk Sabitleri
const PRIMARY_TEXT_COLOR = 'text-blue-600';
const CTA_BG_COLOR = 'bg-red-600';
const CTA_HOVER_COLOR = 'hover:bg-red-700';
const COMPANY_NAME = 'Ka Service';
const DEFAULT_PHONE = '0177 3977646'; // Global telefon numarasını kullanıyoruz

export const metadata: Metadata = {
    title: `Über Uns | ${COMPANY_NAME} - Ihr Lokaler Experte für Schlüsselnotdienst`,
    description: `Erfahren Sie mehr über ${COMPANY_NAME}. Wir bieten 24/7 Notdienst, transparente Festpreise und schnelle, schadenfreie Türöffnung in der Region München, Dachau, Freising. Vertrauen Sie auf lokale Expertise.`,
};

const UeberUnsPage: React.FC = () => {
    return (
        <main className="container mx-auto px-4 py-12 md:py-20">
            <header className="text-center mb-16">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                    Die Geschichte hinter <span className={PRIMARY_TEXT_COLOR}>{COMPANY_NAME}</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Ihre Sicherheit ist unser Versprechen. Lernen Sie das lokale Team kennen, das auf **faire Preise und schnelle Hilfe** setzt.
                </p>
            </header>

            {/* 1. Şirket Felsefesi - Modern Kart Düzeni */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
                    Unsere Kernwerte
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Festpreis & Transparenz */}
                    <div className="p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.01] bg-white">
                        <ShieldCheckIcon className={`h-10 w-10 ${PRIMARY_TEXT_COLOR} mx-auto mb-4`} />
                        <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Festpreisgarantie</h3>
                        <p className="text-gray-600 text-base text-center">
                            Keine versteckten Kosten, keine bösen Überraschungen. Wir nennen Ihnen den Preis, bevor wir mit der schadenfreien Türöffnung beginnen.
                        </p>
                    </div>

                    {/* 24/7 Erreichbarkeit */}
                    <div className="p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.01] bg-white">
                        <ClockIcon className={`h-10 w-10 ${PRIMARY_TEXT_COLOR} mx-auto mb-4`} />
                        <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">24/7 Notdienst</h3>
                        <p className="text-gray-600 text-base text-center">
                            Schlüsselnotfälle halten sich nicht an Geschäftszeiten. Deshalb sind wir an 365 Tagen im Jahr, rund um die Uhr für Sie im Einsatz.
                        </p>
                    </div>

                    {/* Lokale Expertise */}
                    <div className="p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.01] bg-white">
                        <MapPinIcon className={`h-10 w-10 ${PRIMARY_TEXT_COLOR} mx-auto mb-4`} />
                        <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Lokale Expertise</h3>
                        <p className="text-gray-600 text-base text-center">
                            Wir sind fest in der Region **München, Dachau und Freising** verwurzelt. Das garantiert Ihnen schnelle Ankunftszeiten und Ortskenntnis.
                        </p>
                    </div>
                </div>
            </section>
            
            {/* 2. Hikayemiz / Detaylı Metin (Daha Okunaklı Blok) */}
            <section className="max-w-4xl mx-auto mb-16 bg-gray-50 p-8 rounded-xl shadow-inner">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                    <UserGroupIcon className={`h-8 w-8 mr-3 ${PRIMARY_TEXT_COLOR}`} />
                    Über Ka Service: Wer wir sind
                </h2>
                <div className="space-y-6 text-lg text-gray-700">
                    <p>
                        **{COMPANY_NAME}** wurde mit der klaren Vision gegründet, den traditionellen Schlüsseldienst-Markt fairer, transparenter und kundenfreundlicher zu gestalten. Wir wissen, dass ein Schlüsselnotfall immer eine stressige Situation darstellt. Unsere Mission ist es, in diesen Momenten Ruhe, Sicherheit und vor allem schnelle, kompetente Hilfe zu bieten.
                    </p>
                    <p>
                        Unser Team besteht ausschließlich aus **zertifizierten Fachkräften** in der Region München, Dachau und Freising. Wir setzen auf modernste Werkzeuge und Techniken, um Beschädigungen an Ihrer Tür oder Ihrem Schloss auf ein Minimum zu reduzieren.
                    </p>
                    <p>
                        Wir sind stolz darauf, Ihr **lokaler Nachbar** in der Not zu sein. Wir verwenden keine teuren Call-Center oder überregionale Vermittler. Wenn Sie uns anrufen, sprechen Sie direkt mit einem Techniker, der in wenigen Minuten bei Ihnen ist.
                    </p>
                    <p className={`font-extrabold ${PRIMARY_TEXT_COLOR} text-xl border-l-4 border-blue-400 pl-4 py-1`}>
                        Unsere Verpflichtung: Schnelle Anfahrt, garantierte Festpreise und höchste Diskretion.
                    </p>
                </div>
            </section>

            {/* 3. CTA (Call to Action) - Kırmızı Acil Durum Vurgusu */}
            <div className="text-center pt-10 pb-4">
                <a 
                    href={`tel:${DEFAULT_PHONE.replace(/-/g, '')}`} 
                    className={`inline-flex items-center px-10 py-4 text-2xl ${CTA_BG_COLOR} text-white font-black rounded-full shadow-2xl transition duration-300 ${CTA_HOVER_COLOR} hover:scale-[1.03] uppercase tracking-wider`}
                >
                    <PhoneIcon className="h-7 w-7 mr-3 animate-pulse" /> Soforthilfe: {DEFAULT_PHONE}
                </a>
            </div>
        </main>
    );
}

export default UeberUnsPage;