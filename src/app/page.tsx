// src/app/page.tsx 


import { getAllCities } from '@/lib/data.server';
import Link from 'next/link';
import {
    BuildingOffice2Icon,
    PhoneIcon,
    ShieldCheckIcon,
    ClockIcon,
    ChatBubbleLeftRightIcon,
    StarIcon,
    MapPinIcon,
    ArrowLongRightIcon,
} from '@heroicons/react/24/outline';
// --- Bileşen Importları ---
import HomeOfferBanner from '@/components/HomeOfferBanner';
import ReviewSection from '@/components/ReviewSection';
import PriceTeaserSection from '@/components/PriceTeaserSection'; 
import AutoKeySection from '../components/AutoKeySection'; 
import FaqSection from '@/components/FaqSection';
import { Metadata } from 'next';

// Sabitler (Korunmuştur)
const BASE_URL = 'https://ihre-schluesseldienst-seite.de';
const COMPANY_NAME = 'Schlüsselmann';
const COMPANY_LOGO_URL = `${BASE_URL}/images/logo.png`;
const AVERAGE_RATING = 5.0;
const REVIEW_COUNT = 110;
export const dynamic = 'force-static';
// ---

// Güvenli USP Veri Yapısı (Korunmuştur)
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
        icon: MapPinIcon,
        title: "24/7 Erreichbar",
        desc: "Tag und Nacht, an 365 Tagen im Jahr, auch an Feiertagen.",
        iconClass: "text-violet-600",
        textClass: "text-violet-800",
        bgClass: "bg-violet-50",
    }
];

// ✅ HATA ÇÖZÜMÜ: FAQ_DATA TANIMI BURAYA EKLENDİ
// FaqSection bileşenine gönderilecek veriler
const FAQ_DATA = [
    {
        question: "Wie schnell sind Sie vor Ort?",
        answer: "Dank unserer lokalen Techniker in München und Umgebung garantieren wir eine schnelle Anfahrtszeit von 15 bis 30 Minuten.",
    },
    {
        question: "Bieten Sie eine Festpreis-Garantie?",
        answer: "Ja, wir nennen Ihnen den Endpreis für die Dienstleistung bereits am Telefon. Keine versteckten Kosten.",
    },
    {
        question: "Was kostet das Nachmachen eines Autoschlüssels?",
        answer: "Unsere Preise sind bis zu 70% günstiger als beim Vertragshändler und hängen vom Fahrzeugmodell ab. Rufen Sie uns für ein unverbindliches Angebot an.",
    },
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
    const defaultTelefon = '0177 3977646'; // ✅ HATA ÇÖZÜMÜ: NOTDIENST_TELEFON yerine defaultTelefon kullanıldı

    // ----------------------------------------------------------------------
    // ✅ Schema Markup (Korunmuştur)
    // ----------------------------------------------------------------------
    const localBusinessSchema = {
        // ... Schema içeriği
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
            
            {/* Hero Section (Korunmuştur) */}
            <header className="relative mb-16 overflow-hidden rounded-3xl p-6 md:p-16 lg:p-20 bg-gray-900 text-white shadow-2xl border border-gray-700"> 
                {/* ... Hero Section İçeriği (Korunmuştur) ... */}
                <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-indigo-800 to-blue-900"></div>
                <div className="relative z-10 text-center max-w-4xl mx-auto">
                    
                    {/* HIZLI ANFAHRT + PUAN - Stabilize Edilmiş */}
                    <div className="flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm font-medium mb-6 bg-yellow-400/90 backdrop-blur-sm rounded-full p-1 md:p-2 text-gray-900 max-w-full mx-auto"> 
                        <span className="bg-white px-3 py-1 rounded-full flex items-center gap-2 font-black flex-shrink-0">
                            <ClockIcon className="h-4 w-4 text-red-600" /> 24/7 Notdienst
                        </span>
                        <span className="flex items-center font-semibold text-xs md:text-sm flex-shrink-0 px-2">
                            <StarIcon className="h-4 w-4 fill-gray-900 mr-1" />
                            {AVERAGE_RATING} / 5.0 ({REVIEW_COUNT} Bewertungen) 
                        </span>
                    </div>
                    
                    {/* Hauptüberschrift */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-snug tracking-tight">
                        Ihr 
                        <span className="text-yellow-400 break-words"> 
                            Schlüsseldienst 
                        </span> 
                        <br className="hidden md:inline" /> 
                        in München, Dachau & Freising
                    </h1>
                    
                    {/* Alt Metin */}
                    <p className="text-base md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light"> 
                        <strong className="font-semibold text-white">„15–30 Min. Schlüsselhilfe sofort!“</strong> Tür & Auto!
                    </p>
                    
                    {/* Ana CTA */}
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

                    {/* Fiyat ve Hızlı Bilgi */}
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

            {/* CTA Banner (Korunmuştur) */}
            <div className="mb-16 rounded-3xl bg-blue-50 border-4 border-red-600/50 p-6 md:p-10 shadow-2xl transition-shadow duration-300">
                {/* ... CTA Banner İçeriği (Korunmuştur) ... */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
                            Ihr lokaler <span className="text-red-600">Schlüssel-Notdienst</span> jetzt erreichbar
                        </h2>
                        <p className="text-gray-600 text-lg">
                            Soforthilfe in **15–30 Minuten** vor Ort. Transparente Festpreise garantiert!
                        </p>
                        <p className="text-2xl font-black text-red-600 mt-3 flex items-center justify-center md:justify-start gap-2">
                            <ShieldCheckIcon className="h-6 w-6 text-blue-600" /> 
                            {defaultPrice} Türöffnung Festpreis
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
                        {/* 1. Haupt-CTA (Telefon) */}
                        <a
                            href={`tel:${defaultTelefon.replace(/-/g, '')}`}
                            className="px-8 py-3 bg-red-600 text-white font-black rounded-xl shadow-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 min-w-[200px] uppercase tracking-wide text-lg"
                        >
                            <PhoneIcon className="h-6 w-6 animate-pulse" />
                            {defaultTelefon}
                        </a>

                        {/* 2. Sekundär-CTA (WhatsApp) */}
                        <a
                            href={`https://wa.me/${defaultTelefon.replace(/[\s-]/g, '')}`} 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-md hover:bg-green-700 transition-colors duration-200 flex items-center justify-center gap-2 min-w-[200px] text-lg"
                        >
                            <ChatBubbleLeftRightIcon className="h-6 w-6" />
                            WhatsApp Chat starten
                        </a>
                    </div>
                </div>
            </div> 


            {/* USP Section (Korunmuştur) */}
            <section className="my-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {USPs.map((usp, idx) => (
                        <div 
                            key={idx}
                            className={`group p-8 rounded-2xl shadow-xl border border-gray-100 bg-white hover:shadow-2xl transition-all duration-300 transform hover:translate-y-[-4px] ${usp.bgClass}`}
                        >
                            <div className="inline-flex items-center justify-center p-3 rounded-xl bg-white shadow-inner mb-4 group-hover:scale-110 transition-transform duration-300">
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
            
            {/* === YENİ VE SEO ODAKLI BÖLÜM (AutoKeySection) === */}
            <div className="mt-20">
                <AutoKeySection defaultTelefon={defaultTelefon} /> {/* ✅ Bileşen doğru prop ile çağrıldı */}
            </div>
            
            {/* Konum Seçim Bölümü (Korunmuştur) */}
            <section className="mt-20 mb-16">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
                    <MapPinIcon className="h-8 w-8 inline mr-2 text-blue-600" /> 
                    Wählen Sie Ihren <span className="text-blue-600">Standort</span>
                </h2>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cities.map((city) => {
                        const primaryColorClass = 'text-blue-600';
                        const linkHoverBg = 'hover:bg-blue-50';
                        const arrowHoverClass = 'text-blue-700';

                        return (
                            <Link
                                key={city.slug}
                                href={`/${city.slug}`} 
                                className={`group flex items-center p-5 border-2 border-gray-200 rounded-xl shadow-md transition duration-300 ${linkHoverBg} hover:shadow-xl transform hover:scale-[1.01]`}
                            >
                                <BuildingOffice2Icon
                                    className={`h-7 w-7 mr-4 flex-shrink-0 ${primaryColorClass}`}
                                />
                                <div className="flex-1 min-w-0">
                                    <h3 className={`text-xl font-bold mb-0.5 ${primaryColorClass} break-words`}>
                                        Schlüsseldienst {city.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm">
                                        Soforthilfe in {city.name} und Umgebung.
                                    </p>
                                </div>
                                <ArrowLongRightIcon 
                                    className={`h-6 w-6 ml-4 text-gray-400 group-hover:${arrowHoverClass} transition-transform group-hover:translate-x-1 flex-shrink-0`} 
                                />
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
            
            <ReviewSection />
            
            {/* === ADIM 2: FaqSection (HATA ÇÖZÜMÜ İLE) === */}
            <FaqSection
                title="Häufig gestellte Fragen"
                faqs={FAQ_DATA} // ✅ Artık tanımlı olduğu için hata çözüldü
                cityColorClass="text-red-600"
            />

            
            {/* SEO Footer Text (Korunmuştur) */}
            <div className="mt-20 text-center pb-12 pt-8 border-t border-gray-100">
                <p className="text-base text-gray-700 max-w-4xl mx-auto leading-relaxed">
                    Wir sind Ihr zuverlässiger Partner in <span className="font-semibold">München, Dachau, Fürstenfeldbruck und Freising</span>. 
                    Mit lokalem Know-how, schneller Anfahrt und transparenten Preisen stehen wir Ihnen 24/7 zur Seite. 
                    Ihre Sicherheit – unser Versprechen.
                </p>
            </div>
        </main>
    );
}