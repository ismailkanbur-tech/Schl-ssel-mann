// src/components/PriceTeaserSection.tsx - Dikey Hizalama ve Eşit Yükseklik Düzeltildi

import { LinkIcon, KeyIcon, LockClosedIcon, TruckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

// Ana Hizmetler ve Başlangıç Fiyatları
const services = [
    {
        icon: LockClosedIcon,
        title: "Türöffnung (zugezogen)",
        price: "ab 49,90 €",
        desc: "Schnelle und beschädigungsfreie Notöffnung. Nur zugezogene Türen.",
        link: "/leistungen#tuer",
        color: "text-blue-500",
    },
    {
        icon: KeyIcon,
        title: "Schlüssel nachmachen",
        price: "ab 19,90 €",
        desc: "Kopieren von Standard-Zylinder- und Haustürschlüsseln.",
        link: "/leistungen#schluessel",
        color: "text-teal-500",
    },
    {
        icon: TruckIcon,
        title: "Auto Schlüssel kopieren",
        price: "ab 49,90 €",
        desc: "Duplizierung von Autoschlüsseln (Transponder/Wegfahrsperre) vor Ort.",
        link: "/leistungen#auto",
        color: "text-amber-500",
    },
    {
        icon: LinkIcon,
        title: "Auto Schlüssel programmieren",
        price: "ab 79,90 €",
        desc: "Programmierung von Funkfernbedienungen und neuen Schlüsseln.",
        link: "/leistungen#auto",
        color: "text-purple-500",
    },
];

const PriceTeaserSection: React.FC = () => {
    return (
        <section className="mt-16 mb-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
                    Unsere Top-Leistungen im Überblick
                </h2>
                
                {/* min-h-[...]: Kartların eşit yüksekliğe sahip olmasını sağlar */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Link 
                            key={index} 
                            href={service.link}
                            // Kartın kendisi flex container oldu
                            className="block p-6 rounded-xl bg-white border-2 border-gray-100 shadow-xl transition duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:border-blue-400 flex flex-col min-h-[280px]" // ✅ min-h ve flex-col eklendi
                        >
                            {/* Üst Kısım */}
                            <div className="flex items-center space-x-4 mb-3">
                                <service.icon className={`h-8 w-8 ${service.color}`} />
                                <h3 className="text-xl font-extrabold text-gray-900 leading-tight">{service.title}</h3>
                            </div>
                            
                            {/* Fiyat */}
                            <div className="text-4xl font-black text-blue-600 mb-3 leading-none">
                                {service.price}
                            </div>
                            
                            {/* Açıklama (Büyüyen alan) */}
                            <p className="text-sm text-gray-600 leading-relaxed mb-4 flex-grow"> 
                                {service.desc}
                            </p>
                            
                            {/* CTA Linki (Her zaman en altta kalır) */}
                            <span className="text-sm font-semibold text-blue-600 hover:underline flex items-center mt-auto"> 
                                Mehr Details erfahren →
                            </span>
                        </Link>
                    ))}
                </div>
                
                {/* Genel CTA */}
                <div className="text-center mt-12">
                    <p className="text-lg text-gray-700 font-medium mb-4">
                        Sie benötigen eine andere Leistung? Alle unsere Services finden Sie hier.
                    </p>
                    <Link 
                        href="/leistungen" 
                        className="inline-flex items-center px-8 py-3 bg-gray-900 text-white font-bold rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
                    >
                        Alle Leistungen anzeigen
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default PriceTeaserSection;