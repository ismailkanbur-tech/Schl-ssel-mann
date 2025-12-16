// src/app/page.tsx - SVG Yok, Hata Yapmayacak Tailwind Sınıfları Kullanıldı

import { getAllCities } from '@/lib/data.server';
import Link from 'next/link';
import {
    BuildingOffice2Icon,
    PhoneIcon,
    ShieldCheckIcon,
    ClockIcon,
    ChatBubbleLeftRightIcon,
    StarIcon,
    MapPinIcon, // Yeni ikon
    ArrowLongRightIcon, // Yeni ikon
} from '@heroicons/react/24/outline';
import HomeOfferBanner from '@/components/HomeOfferBanner';
import ReviewSection from '@/components/ReviewSection';
import PriceTeaserSection from '@/components/PriceTeaserSection'; 
import { Metadata } from 'next';

// Sabitler (Korunmuştur)
const BASE_URL = 'https://ihre-schluesseldienst-seite.de';
const COMPANY_NAME = 'Schlüsselmann';
const COMPANY_LOGO_URL = `${BASE_URL}/images/logo.png`;
const AVERAGE_RATING = 5.0;
const REVIEW_COUNT = 110;
export const dynamic = 'force-static';
// ---

// Güvenli USP Veri Yapısı (Dinamik Renkler Statik Sınıf Adlarına Çevrildi)
const USPs = [
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
        icon: MapPinIcon, // Yeni ikon kullanıldı
        title: "24/7 Erreichbar",
        desc: "Tag und Nacht, an 365 Tagen im Jahr, auch an Feiertagen.",
        iconClass: "text-violet-600",
        textClass: "text-violet-800",
        bgClass: "bg-violet-50",
    }
];

// ✅ SEO Metadata (Korunmuştur)
export const metadata: Metadata = {
    title: 'Schlüsseldienst: 24/7 Notdienst in München, Dachau & Freising',
    description:
        'Ihr lokaler Schlüsseldienst für München, Dachau und Freising. Schnelle Türöffnung, Auto Schlüssel Service, Festpreisgarantie – 24/7 erreichbar.',
};

export default function HomePage() {
    const cities = getAllCities(); 
    
    // Sabitler (Korunmuştur)
    const defaultPrice = 'ab 49€'; 
    const defaultTelefon = '0177 3977646';

    // ----------------------------------------------------------------------
    // ✅ Schema Markup (Korunmuştur)
    // ----------------------------------------------------------------------
    const localBusinessSchema = {
        // ... (Schema içeriği korunmuştur)
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": COMPANY_NAME,
        "image": COMPANY_LOGO_URL,
        "url": BASE_URL,
        "telephone": defaultTelefon,
        "priceRange": "€",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kopernikusstraße 6", 
            "addressLocality": "Dachau", 
            "postalCode": "85221",
            "addressCountry": "DE"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
            }
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": AVERAGE_RATING,
            "reviewCount": REVIEW_COUNT
        },
        "parentOrganization": {
            "@type": "Organization",
            "name": COMPANY_NAME,
            "logo": COMPANY_LOGO_URL,
            "url": BASE_URL,
        }
    };


    return (
        <main className="container mx-auto px-4 py-8 md:py-16">
            
            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
                }}
            />

        


                {/* Yeni Hero Section: Güçlü Kontrast ve Aciliyet Hissi */}
                <header className="relative mb-16 overflow-hidden rounded-3xl p-6 md:p-16 lg:p-20 bg-gray-900 text-white shadow-2xl border border-gray-700"> 
                    
                    {/* SVG yok, basit bir gradient veya pattern kullanıldı */}
                    <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-indigo-800 to-blue-900"></div>
                    
                    <div className="relative z-10 text-center max-w-4xl mx-auto">
                        
                        {/* HIZLI ANFAHRT + PUAN - Stabilize Edilmiş */}
                        <div className="flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm font-medium mb-6 bg-yellow-400/90 backdrop-blur-sm rounded-full p-1 md:p-2 text-gray-900 max-w-full mx-auto"> 
                            <span className="bg-white px-3 py-1 rounded-full flex items-center gap-2 font-black flex-shrink-0">
                                <ClockIcon className="h-4 w-4 text-red-600" /> 24/7 Notdienst
                            </span>
                            {/* YILDIZ PUANI */}
                            <span className="flex items-center font-semibold text-xs md:text-sm flex-shrink-0 px-2">
                                <StarIcon className="h-4 w-4 fill-gray-900 mr-1" />
                                {/* Değişkenlerinizin doğru olduğundan emin olun */}
                                {AVERAGE_RATING} / 5.0 ({REVIEW_COUNT} Bewertungen) 
                            </span>
                        </div>
                        
                        {/* Hauptüberschrift - Schlüsseldienst Taşmasını Engelleyen break-words Eklendi */}
                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-snug tracking-tight">
                            Ihr 
                            <span className="text-yellow-400 break-words"> {/* ✅ Taşan kelimeye break-words eklendi */}
                                Schlüsseldienst 
                            </span> 
                            <br className="hidden md:inline" /> 
                            in München, Dachau & Freising
                        </h1>
                        
                        {/* Alt Metin */}
                        <p className="text-base md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light"> 
                            <strong className="font-semibold text-white">„15–30 Min. Schlüsselhilfe sofort!“</strong> Tür & Auto!
                        </p>
                        
                        {/* Ana CTA (Kırmızı ve Acil) - Mobilde dikey hizalama ile metin taşması önlendi */}
                        <a
                            href={`tel:${defaultTelefon.replace(/-/g, '')}`}
                            className="inline-flex flex-col sm:flex-row items-center justify-center px-6 py-3 sm:px-10 sm:py-4 text-lg md:text-xl bg-red-600 text-white font-black rounded-full shadow-2xl transition duration-300 hover:bg-red-700 hover:scale-[1.03] transform"
                        >
                            <span className="flex items-center mb-1 sm:mb-0">
                                <PhoneIcon className="h-6 w-6 mr-2" /> Jetzt Sofort Anrufen:
                            </span>
                            <span className="text-xl sm:ml-2 tracking-wider">
                                {defaultTelefon} 
                            </span>
                        </a>

                        {/* Fiyat ve Hızlı Bilgi - Stabilize Edilmiş */}
                        <div className="flex flex-wrap justify-center gap-4 mt-8"> 
                            <span className="text-yellow-400 font-bold text-base border-b-2 border-red-600"> 
                                {defaultPrice} Türöffnung Festpreis
                            </span>
                            <span className="text-gray-400 text-base flex items-center gap-2"> 
                                <ShieldCheckIcon className="h-5 w-5" /> 100% Transparent
                            </span>
                        </div>
                    </div>
                </header>

            {/* CTA Banner (Korunmuş ve Hafifçe Modernleştirilmiş) */}
            <div className="mb-16 rounded-2xl bg-blue-50 border border-blue-100 p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Brauchen Sie jetzt Hilfe?</h2>
                        <p className="text-gray-600">Rufen Sie uns direkt an oder schreiben Sie uns per WhatsApp.</p>
                        <p className="text-xl font-extrabold text-blue-700 mt-2">{defaultPrice} Türöffnung</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href={`tel:${defaultTelefon.replace(/-/g, '')}`}
                            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 min-w-[180px]"
                        >
                            <PhoneIcon className="h-5 w-5" />
                            {defaultTelefon}
                        </a>

                        <a
                            href="https://wa.me/491234567890" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 transition-colors duration-200 flex items-center justify-center gap-2 min-w-[180px]"
                        >
                            <ChatBubbleLeftRightIcon className="h-5 w-5" />
                            Chat starten
                        </a>
                    </div>
                </div>
            </div>


            {/* USP Section (Hata Düzeltmeleri Yapıldı) */}
            <section className="my-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {USPs.map((usp, idx) => (
                        <div 
                            key={idx}
                            // Dinamik Gradient yerine düz bgClass kullanıldı
                            className={`group p-8 rounded-2xl shadow-xl border border-gray-100 bg-white hover:shadow-2xl transition-all duration-300 transform hover:translate-y-[-4px] ${usp.bgClass}`}
                        >
                            <div className="inline-flex items-center justify-center p-3 rounded-xl bg-white shadow-inner mb-4 group-hover:scale-110 transition-transform duration-300">
                                {/* Statik sınıflar kullanıldı */}
                                <usp.icon className={`h-8 w-8 ${usp.iconClass}`} />
                            </div>
                            
                            <h3 className={`font-extrabold text-xl mb-3 ${usp.textClass}`}>
                                {usp.title}
                            </h3>
                            
                            <p className="text-gray-700 text-base leading-relaxed">
                                {usp.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            
            <PriceTeaserSection />

            {/* Städte Auswahl – Modern Liste (Link Yapısı Korunmuştur) */}
            <section className="mt-20 mb-16">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
                    <MapPinIcon className="h-8 w-8 inline mr-2 text-blue-600" /> Wählen Sie Ihren <span className="text-blue-600">Standort</span>
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cities.map((city) => {
                        const isMuenchen = city.slug === 'muenchen';
                        
                        // Tam statik stringler (Hata önleyici)
                        const cityColorClass = isMuenchen ? 'text-red-700' : 
                                                 city.slug === 'dachau' ? 'text-blue-700' : 'text-emerald-700';

                        const linkHoverBg = isMuenchen ? 'hover:bg-red-50' : 
                                             city.slug === 'dachau' ? 'hover:bg-blue-50' : 'hover:bg-emerald-50';
                                             
                        const arrowHoverClass = isMuenchen ? 'text-red-700' :
                                                city.slug === 'dachau' ? 'text-blue-700' : 'text-emerald-700';


                        return (
                            <Link
                                key={city.slug}
                                href={`/${city.slug}`} // Link yapısı korunmuştur!
                                className={`group flex items-center p-5 border-2 border-gray-200 rounded-xl shadow-md transition duration-300 ${linkHoverBg} hover:shadow-xl transform hover:scale-[1.01]`}
                            >
                                <BuildingOffice2Icon
                                    className={`h-7 w-7 mr-4 flex-shrink-0 ${cityColorClass}`}
                                />
                                <div className="flex-1">
                                    <h3 className={`text-xl font-bold mb-0.5 ${cityColorClass}`}>
                                        Schlüsseldienst {city.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Soforthilfe in {city.name} und Umgebung.
                                    </p>
                                </div>
                                <ArrowLongRightIcon className={`h-6 w-6 ml-4 text-gray-400 group-hover:${arrowHoverClass} transition-transform group-hover:translate-x-1`} />
                            </Link>
                        );
                    })}
                </div>
                
                {/* Tüm Bölgeler Linki */}
                <div className="text-center mt-10">
                    <Link
                        href="/regionen" 
                        className="inline-flex items-center text-lg font-semibold text-blue-600 hover:text-blue-800 transition duration-200"
                    >
                        Alle weiteren Einsatzgebiete ansehen →
                    </Link>
                </div>
            </section>

            {/* Kundenbewertungen */}
            <ReviewSection />

            {/* SEO Footer Text */}
            <div className="mt-20 text-center pb-12 pt-8 border-t border-gray-100">
                <p className="text-base text-gray-700 max-w-4xl mx-auto leading-relaxed">
                    Wir sind Ihr zuverlässiger Partner in <span className="font-semibold">München, Dachau und Freising</span>. 
                    Mit lokalem Know-how, schneller Anfahrt und transparenten Preisen stehen wir Ihnen 24/7 zur Seite. 
                    Ihre Sicherheit – unser Versprechen.
                </p>
            </div>
        </main>
    );
}