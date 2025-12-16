// src/components/PriceTeaserSection.tsx - Metin Taşkınlarını ve Dengesiz Kart Boyutlarını Düzelten Revizyon

import { LinkIcon, KeyIcon, LockClosedIcon, TruckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// Renk Sabitleri
const PRIMARY_TEXT_COLOR = 'text-blue-600';
const CTA_BG_COLOR = 'bg-gray-900';
const CTA_HOVER_COLOR = 'hover:bg-blue-600';

// Ana Hizmetler ve Başlangıç Fiyatları (Renkler korundu)
const services = [
    {
        icon: LockClosedIcon,
        title: "Türöffnung (zugezogen)",
        price: "ab 49,90 €",
        // Açıklama metni uzatıldı
        desc: "Ihre Tür ist zugefallen, der Schlüssel steckt innen oder Sie haben ihn vergessen? Wir bieten schnelle, schadenfreie und kostengünstige Notöffnung mit unserer garantierten Festpreisstrategie.",
        link: "/leistungen#tuer",
        iconClass: "text-blue-600",
    },
    {
        icon: KeyIcon,
        title: "Schlüssel nachmachen ", // Başlık uzatıldı
        price: "ab 19,90 €",
        // Açıklama metni uzatıldı
        desc: "Präzises Kopieren von Standard-Zylinder-, Haus- und Briefkastenschlüsseln. Auch Auto-Transponder Schlüssel duplizieren wir schnell vor Ort.",
        link: "/leistungen#schluessel",
        iconClass: "text-teal-600",
    },
    {
        icon: TruckIcon,
        title: "Auto Schlüssel Duplikat",
        price: "ab 49,90 €",
        // Açıklama metni uzatıldı
        desc: "Duplizierung und Reparatur von Autoschlüsseln (Transponder & Wegfahrsperre) für fast alle Marken, direkt bei Ihnen vor Ort ohne lange Wartezeiten.",
        link: "/leistungen#auto",
        iconClass: "text-amber-600",
    },
    {
        icon: LinkIcon,
        title: "Schließanlagen ",
        price: "auf Anfrage",
        // Açıklama metni uzatıldı
        desc: "Wir beraten, planen und montieren moderne Schließanlagen, Sicherheitszylinder und Einbruchschutzmaßnahmen für maximale Sicherheit in Ihrem Zuhause.",
        link: "/leistungen#sicherheit",
        iconClass: "text-red-600",
    },
];

const PriceTeaserSection: React.FC = () => {
    return (
        <section className="mt-16 mb-20">
            <div className="container mx-auto px-4">
                {/* Başlık ve Alt Başlık */}
                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-4">
                    <span className={PRIMARY_TEXT_COLOR}>Transparente Festpreise</span> für unsere Top-Leistungen
                </h2>
                <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12">
                    Wir bieten schnelle Soforthilfe in München, Dachau & Freising mit klaren Startpreisen.
                </p>
                
                {/* Kartlar - Eşit Yükseklik ve İçerik Dengeleme */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Link 
                            key={index} 
                            href={service.link}
                            className="group block p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 shadow-lg transition duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:border-blue-600 flex flex-col min-h-[320px]" // ✅ min-h artırıldı
                        >
                            {/* Üst Kısım: İkon ve Başlık */}
                            <div className="flex items-start space-x-4 mb-4">
                                <service.icon className={`h-8 w-8 ${service.iconClass} flex-shrink-0`} />
                                <h3 className="text-xl font-extrabold text-gray-900 leading-snug">
                                    {service.title}
                                </h3>
                            </div>
                            
                            {/* Fiyat Vurgusu */}
                            <div className={`text-4xl font-black ${PRIMARY_TEXT_COLOR} mb-4 leading-none`}>
                                {service.price}
                            </div>
                            
                            {/* Açıklama - flex-grow: Metin ne kadar uzun olursa olsun kalan boşluğu doldurur. */}
                            <p className="text-base text-gray-700 leading-relaxed mb-4 flex-grow"> 
                                {service.desc}
                            </p>
                            
                            {/* CTA Linki - mt-auto: Alt kısma sabitler, böylece tüm kartlar eşit görünür */}
                            <span className={`text-sm font-bold ${PRIMARY_TEXT_COLOR} hover:underline flex items-center mt-auto transition duration-200`}> 
                                Alle Details zur Leistung →
                            </span>
                        </Link>
                    ))}
                </div>
                
                {/* Genel CTA */}
                <div className="text-center mt-14">
                    <p className="text-lg text-gray-700 font-medium mb-4">
                        Brauchen Sie sofort Hilfe oder haben Sie Fragen zu den Preisen? Rufen Sie uns direkt an!
                    </p>
                    <Link 
                        href="/leistungen" 
                        className={`inline-flex items-center px-10 py-4 ${CTA_BG_COLOR} text-white font-bold rounded-full shadow-lg ${CTA_HOVER_COLOR} transition-colors duration-300 uppercase tracking-wider text-lg`}
                    >
                        Alle Schlüssel-Services im Detail ansehen
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default PriceTeaserSection;