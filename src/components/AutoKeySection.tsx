// src/components/AutoKeySection.tsx
import React from 'react';
import { 
    KeyIcon, 
    ClockIcon, 
    CurrencyEuroIcon, 
    PhoneIcon, 
} from '@heroicons/react/24/outline'; 

interface AutoKeySectionProps {
    defaultTelefon: string;
}

const AutoKeySection: React.FC<AutoKeySectionProps> = ({ defaultTelefon }) => {

    // Popüler Alman markaları için placeholder görsel bileşeni (SVG'leri taklit eder)
    const CarLogoPlaceholder = ({ logoText, iconClasses }: { logoText: string, iconClasses: string }) => (
        <div className={`flex items-center justify-center h-10 w-10 md:h-12 md:w-12 bg-gray-100 rounded-full border-2 border-gray-300 ${iconClasses} text-xs md:text-sm font-black`}>
            {logoText}
        </div>
    );

    return (
        // Arka plan açık gri ve metin siyah
        <section className="py-16 md:py-20 bg-gray-50 text-gray-900 border-t border-b border-gray-200" id="autoschluessel-service">
            <div className="container mx-auto px-4">
                
                {/* Hauptüberschrift (SEO Başlık) */}
                <div className="text-center mb-10">
                    {/* H2 Boyutu Küçültüldü */}
                    <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
                        Ihr Spezialist für <span className="text-red-600">Auto Schlüssel nachmachen</span> & Programmieren
                    </h2>
                    {/* P Boyutu Küçültüldü */}
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Verloren, defekt oder benötigen Sie einen Ersatz? Wir fräsen, reparieren und programmieren Ihren Fahrzeugschlüssel **vor Ort** – schnell und bis zu 70% günstiger als beim Vertragshändler.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    
                    {/* LINKER BEREICH (Vorteile und Details) */}
                    <div className="p-4">
                        <h3 className="text-2xl font-bold mb-6 flex items-center">
                            <KeyIcon className="h-7 w-7 text-red-600 mr-3" />
                            Warum uns wählen? Ihre Vorteile:
                        </h3>
                        
                        <ul className="space-y-5 text-base"> {/* Metin boyutu küçültüldü */}
                            <li className="flex items-start">
                                <ClockIcon className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" /> 
                                <div>
                                    <strong className="font-semibold text-gray-900">Schnelle Soforthilfe (Vor-Ort-Service):</strong>
                                    <p className="text-gray-600">Wir programmieren Transponder und fräsen Schlüsselrohlinge direkt bei Ihnen. Kein Abschleppen, keine langen Wartezeiten.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <CurrencyEuroIcon className="h-5 w-5 text-green-600 mr-3 mt-1 flex-shrink-0" /> 
                                <div>
                                    <strong className="font-semibold text-gray-900">Bis zu 70% Kostenersparnis:</strong>
                                    <p className="text-gray-600">Deutlich günstiger und schneller als die Werkstatt. Transparentes Angebot ohne versteckte Kosten.</p>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-2xl font-black text-red-600 mr-3 mt-1 flex-shrink-0">✓</span>
                                <div>
                                    <strong className="font-semibold text-gray-900">Modellunabhängige Expertise:</strong>
                                    <p className="text-gray-600">Spezialisiert auf gängige Marken wie BMW, Mercedes, VW, Audi und viele weitere.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    
                    {/* RECHTER BEREICH (CTA ve Image/Grafik) */}
                    <div className="relative p-6 md:p-8 bg-white rounded-2xl shadow-xl border-2 border-red-600/20">
                        <div className="text-center">
                            
                            {/* === YENİ MARKA İKONLARI === */}
                            <div className="flex justify-center space-x-4 mb-6">
                                {/* NOT: Gerçek projede bu div'e SVG'lerinizin bulunduğu <img /> etiketlerini eklemelisiniz. */}
                                <CarLogoPlaceholder logoText="BMW" iconClasses="text-blue-700 border-blue-200" />
                                <CarLogoPlaceholder logoText="MB" iconClasses="text-gray-700 border-gray-400" />
                                <CarLogoPlaceholder logoText="VW" iconClasses="text-blue-500 border-blue-200" />
                                <CarLogoPlaceholder logoText="AUDI" iconClasses="text-red-700 border-red-200" />
                            </div>
                            
                            {/* Başlık Boyutu Küçültüldü */}
                            <h3 className="text-2xl font-black text-red-600 mb-3">
                                Ihr Autoschlüssel Problem? Jetzt lösen!
                            </h3>
                            
                            {/* P Boyutu Küçültüldü */}
                            <p className="text-base text-gray-700 mb-6">
                                Rufen Sie uns sofort an und erhalten Sie in wenigen Minuten einen Kostenvoranschlag.
                            </p>
                            
                            <a
                                href={`tel:${defaultTelefon.replace(/-/g, '')}`}
                                className="inline-flex items-center px-8 py-3 text-lg bg-red-600 text-white font-black rounded-full shadow-lg transition duration-300 hover:bg-red-700 transform hover:scale-[1.03] uppercase tracking-wider animate-pulse-slow"
                            >
                                <PhoneIcon className="h-5 w-5 mr-3" /> 
                                Sofort anrufen: {defaultTelefon}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AutoKeySection;