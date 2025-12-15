// src/app/page.tsx - Güncellenmiş Versiyon (Fiyat Çekirdeği ve Schema Markup Eklendi)

import { getAllCities } from '@/lib/data.server';
import Link from 'next/link';
import {
    BuildingOffice2Icon,
    PhoneIcon,
    ShieldCheckIcon,
    ClockIcon,
    ChatBubbleLeftRightIcon,
    StarIcon, // ⭐ Puan için
} from '@heroicons/react/24/outline';
import HomeOfferBanner from '@/components/HomeOfferBanner';
import ReviewSection from '@/components/ReviewSection';
import PriceTeaserSection from '@/components/PriceTeaserSection'; // <-- YENİ
// ... diğer import'lar
import { Metadata } from 'next';

// ✅ SEO Metadata
export const metadata: Metadata = {
    title: 'Schlüsseldienst: 24/7 Notdienst in München, Dachau & Freising',
    description:
        'Ihr lokaler Schlüsseldienst für München, Dachau und Freising. Schnelle Türöffnung, Auto Schlüssel Service, Festpreisgarantie – 24/7 erreichbar.',
};

export const dynamic = 'force-static';

// Global Site URL ve Diğer Sabitler (Schema için gerekli)
const BASE_URL = 'https://ihre-schluesseldienst-seite.de';
const COMPANY_NAME = 'Schlüsselmann';
const COMPANY_LOGO_URL = `${BASE_URL}/images/logo.png`;
const AVERAGE_RATING = 4.9;
const REVIEW_COUNT = 780;

export default function HomePage() {
    const cities = getAllCities(); 
    
    // NOT: citiesData içindeki en düşük fiyatı bulmak daha doğru olur.
    // Şimdilik en düşük varsayılan fiyatı kullanalım.
    const defaultPrice = 'ab 49€'; 
    const defaultTelefon = '089-111111';
    const defaultColorClass = 'text-blue-600';

    // ----------------------------------------------------------------------
    // ✅ 2. Schema Markup (LocalBusiness ve Organization)
    // ----------------------------------------------------------------------
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": COMPANY_NAME,
        "image": COMPANY_LOGO_URL,
        "url": BASE_URL,
        "telephone": defaultTelefon,
        "priceRange": "$$", // Orta fiyat aralığı
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Musterstraße 1", // Gerçek adresi girin
            "addressLocality": "München", 
            "postalCode": "80331",
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
        // Müşteri güveni için Rating ekleme
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": AVERAGE_RATING,
            "reviewCount": REVIEW_COUNT
        },
        // Organization bilgisi ile birleştirme
        "parentOrganization": {
            "@type": "Organization",
            "name": COMPANY_NAME,
            "logo": COMPANY_LOGO_URL,
            "url": BASE_URL,
        }
    };


    return (
        <main className="container mx-auto px-4 py-8 md:py-12">
            
            {/* ✅ Schema Markup'ı Head'e ekleme */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
                }}
            />

            {/* Yeni Hero Section */}
            <header className="relative mb-16 overflow-hidden rounded-3xl p-8 md:p-12 bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200">
                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
                
                <div className="relative z-10 text-center max-w-3xl mx-auto">
                    {/* HIZLI ANFAHRT + PUAN */}
                    <div className="inline-flex items-center gap-4 text-sm font-medium mb-6">
                        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full flex items-center gap-2">
                             <span className="h-2 w-2 bg-blue-600 rounded-full"></span> Lokal • Schnell • Transparent
                        </span>
                        {/* ✅ YILDIZ PUANI EKLENDİ */}
                        <span className="flex items-center text-amber-600">
                            <StarIcon className="h-4 w-4 fill-amber-500 mr-1" />
                            {AVERAGE_RATING} / 5.0 ({REVIEW_COUNT} Bewertungen)
                        </span>
                    </div>
                    
                    <h1 className="text-4xl md:text-6xl font-black text-gray-900 mb-6 leading-tight">
                        Ihr <span className={`${defaultColorClass} relative`}>
                            Schlüsseldienst
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-current opacity-20 -z-10"></span>
                        </span><br />
                        <span className="text-gray-700 mt-2 block text-2xl md:text-4xl font-bold">
                            in der Region
                        </span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Professionelle Soforthilfe in <strong className="font-semibold">München, Dachau und Freising</strong> – 
                        mit Festpreisgarantie und 24/7-Verfügbarkeit.
                    </p>
                    
                    {/* Zusätzliche visuelle Elemente */}
                    <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                            <span className="h-1.5 w-1.5 bg-green-500 rounded-full"></span>
                            <span>Keine Anfahrtskosten</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="h-1.5 w-1.5 bg-amber-500 rounded-full"></span>
                            <span>15–30 Min. Anfahrt</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <span className="h-1.5 w-1.5 bg-blue-500 rounded-full"></span>
                            <span> MwSt. inklusive</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Neuer Call-to-Action Banner */}
            <div className="mb-16 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex-1 text-center md:text-left">
                        <h2 className="text-2xl font-bold text-gray-900 mb-2">Soforthilfe benötigt?</h2>
                        <p className="text-gray-600">Rufen Sie uns direkt an – wir helfen Ihnen sofort.</p>
                        {/* ✅ FİYAT ÇEKİRDEĞİ (Price Anchor) EKLENDİ */}
                        <p className="text-xl font-extrabold text-blue-700 mt-2">{defaultPrice} Türöffnung</p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a
                            href={`tel:${defaultTelefon.replace(/-/g, '')}`}
                            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-sm hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 min-w-[180px]"
                        >
                            <PhoneIcon className="h-5 w-5" />
                            {defaultTelefon}
                        </a>

                        <a
                            href="https://wa.me/491234567890" // Hier Ihre tatsächliche Nummer eintragen
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg shadow-sm hover:bg-green-600 transition-colors duration-200 flex items-center justify-center gap-2 min-w-[180px]"
                        >
                            <ChatBubbleLeftRightIcon className="h-5 w-5" />
                            Chat starten
                        </a>
                    </div>
                </div>
            </div>

            {/* Yeni USP Section (Aynı kalır, renkler ve gradientler güncellenir) */}
            <section className="mt-16 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: ShieldCheckIcon,
                            title: "Festpreis-Garantie",
                            desc: "Volle Kostentransparenz ohne versteckte Gebühren. Was wir sagen, gilt.",
                            color: "blue",
                            gradient: "from-blue-500 to-cyan-500",
                            bg: "bg-blue-50"
                        },
                        {
                            icon: ClockIcon,
                            title: "Schnelle Anfahrt",
                            desc: "In 15–30 Minuten bei Ihnen vor Ort dank lokaler Techniker.",
                            color: "emerald", 
                            gradient: "from-emerald-500 to-teal-500",
                            bg: "bg-emerald-50"
                        },
                        {
                            icon: PhoneIcon,
                            title: "24/7 Erreichbar",
                            desc: "Tag und Nacht, an 365 Tagen im Jahr, auch an Feiertagen.",
                            color: "violet",
                            gradient: "from-violet-500 to-purple-500", 
                            bg: "bg-violet-50"
                        }
                    ].map((usp, idx) => (
                        <div 
                            key={idx}
                            className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${usp.bg}`}
                        >
                            {/* Hintergrund-Verlauf mit Rotation */}
                            <div className={`absolute -rotate-12 w-full h-16 bg-gradient-to-r ${usp.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                            
                            {/* Hauptinhalt */}
                            <div className="relative z-10 p-8">
                                <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-white shadow-inner mb-6 group-hover:scale-110 transition-transform duration-300">
                                    <usp.icon className={`h-10 w-10 text-${usp.color}-600`} />
                                </div>
                                
                                <h3 className={`font-black text-2xl mb-4 text-${usp.color}-800`}>
                                    {usp.title}
                                </h3>
                                
                                <p className="text-gray-700 text-base leading-relaxed">
                                    {usp.desc}
                                </p>
                            </div>
                            
                            {/* Hover-Verlauf am unteren Rand */}
                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${usp.gradient} transform translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out`}></div>
                        </div>
                    ))}
                </div>
            </section>
            <PriceTeaserSection />

            {/* Städte Auswahl – Sadece gerçek 3 şehir */}
            <section className="mt-16 mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
                    Wählen Sie Ihren Standort für Soforthilfe
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {cities.map((city) => {
                        const isMuenchen = city.slug === 'muenchen';
                        const cityColor = city.colorClass; 
                        const linkHoverBg = isMuenchen ? 'hover:bg-red-50' : 
                                             city.slug === 'dachau' ? 'hover:bg-blue-50' : 'hover:bg-green-50';

                        return (
                            <Link
                                key={city.slug}
                                href={`/${city.slug}`}
                                className={`flex items-start p-4 md:p-6 border-2 border-gray-100 rounded-xl shadow-lg transition duration-300 ${linkHoverBg} hover:shadow-2xl hover:border-transparent focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none`}
                            >
                                <BuildingOffice2Icon
                                    className={`h-6 w-6 md:h-8 md:w-8 mr-3 md:mr-4 flex-shrink-0 ${cityColor}`}
                                />
                                <div>
                                    <h3 className={`text-lg md:text-xl font-bold mb-1 ${cityColor}`}>
                                        Schlüsseldienst {city.name}
                                    </h3>
                                    <p className="text-gray-700 text-sm">
                                        Soforthilfe in {city.name} und Umgebung.
                                    </p>
                                    <span className="mt-2 inline-block text-xs font-semibold underline">
                                        Standort wählen →
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </section>

            {/* Kundenbewertungen */}
           <ReviewSection />

            {/* SEO Footer Text */}
            <div className="mt-16 text-center pb-12">
                <p className="text-base text-gray-700 max-w-4xl mx-auto leading-relaxed">
                    Wir sind Ihr zuverlässiger Partner in <span className="font-semibold">München, Dachau und Freising</span>. 
                    Mit lokalem Know-how, schneller Anfahrt und transparenten Preisen stehen wir Ihnen 24/7 zur Seite. 
                    Ihre Sicherheit – unser Versprechen.
                </p>
            </div>
        </main>
    );
}