// src/components/AutoKeySection.tsx
import React from 'react';
import { 
    KeyIcon, 
    CheckBadgeIcon, 
    WrenchScrewdriverIcon, 
    TruckIcon,
    PhoneIcon
} from '@heroicons/react/24/solid'; 

interface AutoKeySectionProps {
    defaultTelefon: string;
}

const AutoKeySection: React.FC<AutoKeySectionProps> = ({ defaultTelefon }) => {
    const telLink = `tel:${defaultTelefon.replace(/\s+/g, '')}`;

    // SEO için Kritik Hizmet Listesi
    const services = [
        { title: "Ersatzschlüssel", desc: "Programmierung & Codierung" },
        { title: "Gehäusetausch", desc: "Reparatur defekter Tasten" },
        { title: "Notöffnung", desc: "Zerstörungsfreie Kfz-Öffnung" },
        { title: "Smart-Keys", desc: "Keyless-Go Spezialisten" }
    ];

    return (
        <section className="py-12 bg-white" id="autoschluessel">
            <div className="container mx-auto px-4">
                
                {/* --- SEO HEADER --- */}
                <div className="max-w-3xl mb-10">
                    <h2 className="text-2xl md:text-4xl font-black text-gray-900 leading-tight mb-4">
                        Profi <span className="text-red-600">Auto-Schlüsseldienst</span> & Vor-Ort-Service
                    </h2>
                    <p className="text-gray-600 text-base md:text-lg border-l-4 border-red-600 pl-4">
                        Schlüssel verloren oder Funkfernbedienung defekt? Wir bieten mobile Soforthilfe für alle Marken in München & Umgebung – <strong>bis zu 70% günstiger</strong> als in der Vertragswerkstatt.
                    </p>
                </div>

                {/* --- MAIN CONTENT GRID --- */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    
                    {/* 1. KISIM: HİZMET ODAKLI (SEO LİSTESİ) */}
                    <div className="md:col-span-2 grid grid-cols-2 gap-4">
                        {services.map((s, i) => (
                            <div key={i} className="p-4 bg-gray-50 rounded-xl border border-gray-100 flex items-start gap-3 hover:bg-gray-100 transition-colors">
                                <CheckBadgeIcon className="h-6 w-6 text-green-600 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-gray-900 text-sm md:text-base">{s.title}</h3>
                                    <p className="text-xs text-gray-500">{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 2. KISIM: CTA KARTI (KASMAYAN TEMİZ TASARIM) */}
                    <div className="bg-red-600 rounded-2xl p-6 text-white shadow-xl flex flex-col justify-center items-center text-center">
                        <TruckIcon className="h-10 w-10 mb-3 opacity-80" />
                        <h3 className="text-xl font-bold mb-2 text-white">Mobiler Service</h3>
                        <p className="text-sm mb-6 opacity-90">Kein Abschleppen nötig. Wir kommen zu Ihnen!</p>
                        
                        <a href={telLink} className="w-full bg-white text-red-600 font-black py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-transform active:scale-95">
                            <PhoneIcon className="h-5 w-5" />
                            {defaultTelefon}
                        </a>
                    </div>

                </div>

                {/* --- MARKA LOGOLARI (SEO İÇİN TEXT TABANLI) --- */}
                {/* --- MARKA LOGOLARI (MODERN CHIP TASARIMI) --- */}
<div className="mt-12 pt-8 border-t border-gray-100">
    <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="flex-shrink-0">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100">
                Marken Expertise
            </p>
        </div>
        
        {/* Modern Marka Rozetleri */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3">
            {[
                { name: "BMW", color: "hover:border-blue-500 hover:text-blue-600" },
                { name: "Mercedes", color: "hover:border-gray-800 hover:text-gray-900" },
                { name: "Audi", color: "hover:border-red-600 hover:text-red-700" },
                { name: "VW", color: "hover:border-blue-700 hover:text-blue-800" },
                { name: "Ford", color: "hover:border-blue-400 hover:text-blue-500" },
                { name: "Opel", color: "hover:border-yellow-500 hover:text-yellow-600" },
                { name: "Renault", color: "hover:border-yellow-600 hover:text-yellow-700" },
                { name: "Fiat", color: "hover:border-red-500 hover:text-red-600" },
                { name: "Hyundai", color: "hover:border-blue-900 hover:text-blue-950" },
                { name: "Toyota", color: "hover:border-red-800 hover:text-red-900" }
            ].map((brand) => (
                <span 
                    key={brand.name}
                    className={`px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-bold text-gray-400 transition-all duration-300 cursor-default shadow-sm ${brand.color} hover:shadow-md hover:-translate-y-1`}
                >
                    {brand.name}
                </span>
            ))}
            <span className="px-4 py-2 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-sm font-medium text-gray-400">
                & viele mehr...
            </span>
        </div>
    </div>
</div>

            </div>
        </section>
    );
};

export default AutoKeySection;