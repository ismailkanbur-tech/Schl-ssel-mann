// src/components/UspSection.tsx
import React from 'react';
import {
    ShieldCheckIcon,
    ClockIcon,
    MapPinIcon,
    Bars3Icon as DefaultIcon, // USP tanımında eksik olması durumunda yedek ikon
} from '@heroicons/react/24/outline';

// USP Veri Yapısı (page.tsx'den taşındı)
interface UspItem {
    icon: React.ElementType; // Heroicon bileşen tipini tutar
    title: string;
    desc: string;
    iconClass: string;
    textClass: string;
    bgClass: string;
}

interface UspSectionProps {
    usps: UspItem[];
}

// NOT: USP verileri artık HomePage'den prop olarak gelmelidir.
// Ancak kolaylık sağlamak için burada varsayılan USPs'i tanımlayalım.
const DEFAULT_USPS: UspItem[] = [
    {
        icon: ShieldCheckIcon,
        title: "Festpreis-Garantie",
        desc: "Volle Kostentransparenz ohne versteckte Gebühren. Was wir sagen, gilt.",
        iconClass: "text-blue-600",
        textClass: "text-blue-800",
        bgClass: "bg-blue-50",
    },
    {
        icon: ClockIcon,
        title: "Schnelle Anfahrt",
        desc: "In 15–30 Minuten bei Ihnen vor Ort dank lokaler Techniker.",
        iconClass: "text-emerald-600",
        textClass: "text-emerald-800",
        bgClass: "bg-emerald-50",
    },
    {
        icon: MapPinIcon,
        title: "24/7 Erreichbar",
        desc: "Tag und Nacht, an 365 Tagen im Jahr, auch an Feiertagen.",
        iconClass: "text-violet-600",
        textClass: "text-violet-800",
        bgClass: "bg-violet-50",
    }
];


const UspSection: React.FC<UspSectionProps> = ({ usps = DEFAULT_USPS }) => {
    return (
        <section className="my-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {usps.map((usp, idx) => {
                    const IconComponent = usp.icon || DefaultIcon; // Varsayılan ikon ataması
                    return (
                        <div 
                            key={idx}
                            className={`group p-8 rounded-2xl shadow-xl border border-gray-100 bg-white hover:shadow-2xl transition-all duration-300 transform hover:translate-y-[-4px] ${usp.bgClass}`}
                        >
                            <div className="inline-flex items-center justify-center p-3 rounded-xl bg-white shadow-inner mb-4 group-hover:scale-110 transition-transform duration-300">
                                <IconComponent className={`h-8 w-8 ${usp.iconClass}`} />
                            </div>
                            
                            <h3 className={`font-extrabold text-xl mb-3 ${usp.textClass}`}>
                                {usp.title}
                            </h3>
                            
                            <p className="text-gray-700 text-base leading-relaxed">
                                {usp.desc}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default UspSection;