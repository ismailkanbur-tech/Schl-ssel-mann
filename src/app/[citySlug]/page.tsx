// src/app/[citySlug]/page.tsx - Nihai, Hata Onarımlı ve Eksiksiz Versiyon

import { getAllCities, getCityData, City } from '@/lib/data.server'; 
import Link from 'next/link';
import { notFound } from 'next/navigation';
import FaqSection from '@/components/FaqSection';
import HomeOfferBanner from '@/components/HomeOfferBanner';
import { ArrowRightIcon, PhoneIcon, KeyIcon, MapPinIcon } from '@heroicons/react/24/outline'; 
import { Metadata } from 'next';

// KRİTİK AYARLAR: Dev modundaki hataları azaltmak için statik üretimi zorlar.
export const dynamic = 'force-static';
export const dynamicParams = false; 

// Params tipini tanımlıyoruz.
interface Params { citySlug: string; }

// Next.js Dev Mode'daki Promise sorununa karşı esnek tip tanımı
interface CityPageProps { 
    // params ya düz obje ya da Promise olabilir (Dev Mode sorunu)
    params: Params | Promise<Params>; 
} 

// --------------------------------------------------------------------------------
// 1. STATİK PATH OLUŞTURMA
// --------------------------------------------------------------------------------
export function generateStaticParams() {
    const cities = getAllCities();
    return cities.map((city) => ({
        citySlug: city.slug,
    }));
}

// --------------------------------------------------------------------------------
// 2. DYNAMISCHE METADATA (ASYNC VE AWAIT İLE)
// --------------------------------------------------------------------------------
export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
    
    // KRİTİK: params'ı await ile çözme (Promise ise bile güvenli erişim sağlar)
    const unwrappedParams = await (params instanceof Promise ? params : Promise.resolve(params));
    const citySlug = unwrappedParams.citySlug; 
    
    const cityData = getCityData(citySlug);
    
    if (!cityData) {
        return { title: 'Seite nicht gefunden - Schlüsselmann' };
    }
    
    const title = `Schlüsseldienst ${cityData.name} - 24/7 Notdienst & Auto Schlüssel Service`;
    const description = cityData.metaDescription;
    
    return { 
        title, 
        description,
        alternates: { canonical: `/${cityData.slug}` },
    };
}

// --------------------------------------------------------------------------------
// 3. HAUPTKOMPONENTE (CityPage) - ASYNC VE AWAIT İLE (Hata Çözümü)
// --------------------------------------------------------------------------------
export default async function CityPage({ params }: CityPageProps) { 
    
    // ✅ KRİTİK DÜZELTME: params'ı burada ASYNC olarak çözüyoruz.
    const unwrappedParams = await (params instanceof Promise ? params : Promise.resolve(params));
    const citySlug = unwrappedParams.citySlug;
    
    // Hata veren satır artık güvenli
    const cityData = getCityData(citySlug) as City | undefined;
    
    if (!cityData) {
        notFound();
    }
    
    // Veri türetme
    const defaultTelefon = cityData.towns[0]?.notdienstTelefon || cityData.telefon;
    const cityColorClass = cityData.colorClass; 
    const linkHoverBg = cityColorClass.replace('text-', 'hover:bg-').replace('-600', '-50');
    
    // FAQ Verileri
    const cityFaqs = [
        {
            question: `Wie lange dauert es, bis der Schlüsseldienst in ${cityData.name} eintrifft?`,
            answer: `Dank unserer lokalen Präsenz in ${cityData.name} und den umliegenden Ortschaften beträgt unsere durchschnittliche Ankunftszeit in Notfällen nur 15 bis 30 Minuten. Rufen Sie uns für eine genaue Zeitangabe an.`,
        },
        {
            question: "Gibt es bei Ihnen eine Festpreisgarantie für Türöffnungen?",
            answer: "Ja, absolute Transparenz ist uns wichtig. Wir nennen Ihnen den verbindlichen Festpreis, bevor wir mit der Arbeit beginnen, um Überraschungen zu vermeiden. Keine versteckten Kosten.",
        },
        {
            question: "Bieten Sie auch Auto Schlüssel Service in der Region an?",
            answer: `Absolut! Unser mobiler Schlüssel-Service kommt direkt zu Ihnen nach ${cityData.name} und programmiert oder fräst Ersatzschlüssel für die meisten gängigen Automarken vor Ort.`,
        },
        {
            question: "Kann ich den Service auch nachts oder am Wochenende nutzen?",
            answer: `Selbstverständlich. Unser Schlüsseldienst ist in ${cityData.name} rund um die Uhr (24/7) und an 365 Tagen im Jahr für Sie im Einsatz. Rufen Sie unsere Notfallnummer an.`,
        },
    ];

    return (
        <main className="container mx-auto px-4 py-12">
            
            {/* H1 BAŞLIK */}
            <header className="text-center mb-0">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                    Ihr <span className={cityColorClass}>Schlüsseldienst {cityData.name}</span>: 24/7 Notfallservice
                </h1>
                <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
                    {cityData.metaDescription} Unsere Experten sind schnell bei Ihnen vor Ort und garantieren Festpreise.
                </p>
            </header>

            {/* HomeOfferBanner Entegrasyonu */}
            {/* Bu bileşen, src/components/HomeOfferBanner.tsx dosyasında tanımlı olmalıdır */}
            <HomeOfferBanner
                defaultTelefon={defaultTelefon}
                cityColorClass={cityColorClass}
            />

            {/* 3 Önemli Hizmet Vurgusu */}
            <section className="mt-12 mb-16">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Unsere Kernleistungen in {cityData.name}</h2>
                <div className="grid md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 border rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <KeyIcon className={`h-12 w-12 mx-auto mb-4 ${cityColorClass}`} />
                        <h3 className="font-bold text-xl mb-2">Auto Schlüssel Service</h3>
                        <p className="text-gray-600 text-sm">Mobile Programmierung und Ersatzschlüssel direkt bei Ihnen im Landkreis {cityData.name}.</p>
                    </div>
                    <div className="p-6 border rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <ArrowRightIcon className={`h-12 w-12 mx-auto mb-4 ${cityColorClass}`} />
                        <h3 className="font-bold text-xl mb-2">Türöffnung ohne Schaden</h3>
                        <p className="text-gray-600 text-sm">Schnelle und beschädigungsfreie Türöffnung, wenn Sie sich ausgesperrt haben.</p>
                    </div>
                    <div className="p-6 border rounded-xl shadow-lg hover:shadow-xl transition duration-300">
                        <PhoneIcon className={`h-12 w-12 mx-auto mb-4 ${cityColorClass}`} />
                        <h3 className="font-bold text-xl mb-2">24 Stunden Notdienst</h3>
                        <p className="text-gray-600 text-sm">Rund um die Uhr, 7 Tage die Woche, auch an Feiertagen einsatzbereit.</p>
                    </div>
                </div>
            </section>

            {/* Kasaba Listesi (Ortschaften) */}
            <section className="mt-12 mb-16">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">
                    Alle Ortschaften in <span className={cityColorClass.replace('text', 'underline text')}>{cityData.name}</span> (Wählen Sie Ihren Standort)
                </h2>
                <p className="text-center text-gray-600 mb-8 max-w-4xl mx-auto">
                    Finden Sie den nächstgelegenen Schlüsselnotdienst! Wir garantieren Ihnen in jeder dieser Ortschaften schnelle Anfahrt und faire Preise.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {cityData.towns.map((town) => (
                        <Link 
                            key={town.slug} 
                            href={`/${cityData.slug}/${town.slug}`}
                            className={`flex items-start p-6 border-2 border-gray-100 rounded-xl shadow-lg transition duration-300 ${linkHoverBg} hover:shadow-2xl hover:border-transparent`}
                        >
                            <MapPinIcon className={`h-8 w-8 mr-4 mt-1 flex-shrink-0 ${cityColorClass}`} />
                            <div>
                                <h3 className={`text-xl font-bold mb-1 ${cityColorClass}`}>
                                    Schlüsseldienst {town.name}
                                </h3>
                                <p className="text-gray-700 text-sm">
                                    {town.metaDescription} 
                                    {town.metaDescription.length < 50 && ` Soforthilfe bei Auto- und Türöffnung in ${town.name}.`}
                                </p>
                                <span className="mt-2 inline-block text-sm font-semibold underline">
                                    Jetzt Service buchen &rarr;
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
            
            {/* FAQ Bölümünün Entegrasyonu */}
            {/* Bu bileşen, src/components/FaqSection.tsx dosyasında tanımlı olmalıdır */}
            <FaqSection 
                title={`Häufig gestellte Fragen zu Ihrem Schlüsseldienst in ${cityData.name}`}
                faqs={cityFaqs}
                cityColorClass={cityColorClass}
            />

        </main>
    );
}