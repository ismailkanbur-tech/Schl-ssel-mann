// src/app/[citySlug]/[townSlug]/page.tsx - EKSİKSİZ, HATASIZ VE GÜVENLİ VERSİYON
// Hem generateMetadata hem de DynamicTownPage ASYNC ve await params ile çalışır.

import { getAllCities, getCityData, City, Town } from '@/lib/data.server';
import Link from 'next/link';
import FaqSection from '@/components/FaqSection';
import { ClockIcon, MapPinIcon, WrenchScrewdriverIcon, CheckBadgeIcon, PhoneIcon, KeyIcon, ShieldCheckIcon, CalendarDaysIcon } from '@heroicons/react/24/outline';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

// KRİTİK AYARLAR: Statik üretimi zorlar ve hata olasılığını azaltır.
export const dynamic = 'force-static'; 
export const dynamicParams = false; 

// Params tipi tanımı
interface TownParams {
    citySlug: string;
    townSlug: string;
}
interface TownPageProps {
    // Dev Mode'daki Promise sorununa karşı esnek tip
    params: TownParams | Promise<TownParams>;
}

// YARDIMCI FONKSİYON: Veri Çekme Mantığı (Component'ten bağımsız ve senkron)
function getPageData(citySlug: string, townSlug: string): { cityData: City | undefined, townData: Town | undefined } {
    const cities = getAllCities();
    const cityData = cities.find(c => c.slug === citySlug);
    const townData = cityData?.towns.find(t => t.slug === townSlug);
    
    return { cityData, townData };
}

// --------------------------------------------------------------------------------
// 1. STATİK PATH OLUŞTURMA
// --------------------------------------------------------------------------------
export function generateStaticParams() {
    const cities = getAllCities();
    
    const paths = cities.flatMap(city => 
        city.towns.map(town => ({
            citySlug: city.slug,
            townSlug: town.slug,
        }))
    );
    return paths;
}

// --------------------------------------------------------------------------------
// 2. DYNAMISCHE METADATA (ASYNC VE AWAIT İLE)
// --------------------------------------------------------------------------------
export async function generateMetadata({ params }: TownPageProps): Promise<Metadata> {
    
    // KRİTİK DÜZELTME: params'ı Promise ise çözülmesini sağlar.
    const unwrappedParams = await (params instanceof Promise ? params : Promise.resolve(params));
    const { citySlug, townSlug } = unwrappedParams;
    
    const { townData } = getPageData(citySlug, townSlug);

    if (!townData) {
        return { title: 'Seite nicht gefunden - Schlüsselmann', description: 'Der angeforderte Servicebereich existiert nicht.' };
    }

    const title = `Schlüsseldienst ${townData.name}: 24h Notdienst, Festpreis | Auto- & Türöffnung`;
    const description = `${townData.metaDescription} Rufen Sie jetzt ${townData.notdienstTelefon} an und erhalten Sie sofortige Hilfe.`;
    return { title, description };
}


// 3. HAUPTKOMPONENTE (ASYNC VE AWAIT İLE)
export default async function DynamicTownPage({ params }: TownPageProps) { 
    
    // KRİTİK DÜZELTME: params'ı Promise ise çözülmesini sağlar.
    const unwrappedParams = await (params instanceof Promise ? params : Promise.resolve(params));
    const { citySlug, townSlug } = unwrappedParams;
    
    // Veri çekme
    const { cityData, townData } = getPageData(citySlug, townSlug);

    // Veri bulunamazsa 404
    if (!townData || !cityData) {
        notFound(); 
    }

    const bannerColor = citySlug === 'muenchen' ? 'bg-red-600' : 'bg-blue-600';
    const textColor = citySlug === 'muenchen' ? 'text-red-600' : 'text-blue-600';
    
    // FAQ Verilerinin Tanımlanması (Kasabaya özel)
    const townFaqs = [
        {
            question: `Wie lange dauert es, bis Sie in ${townData!.name} sind?`,
            answer: `Da unsere Techniker lokal in der Nähe von ${townData!.name} stationiert sind, beträgt die Anfahrtszeit in der Regel nur 15 bis 30 Minuten, je nach Verkehrslage.`,
        },
        {
            question: `Welche Kosten erwarten mich für eine Türöffnung in ${townData!.name}?`,
            answer: "Wir arbeiten mit einer transparenten Festpreis-Garantie. Rufen Sie uns kurz an, schildern Sie uns Ihr Problem, und wir nennen Ihnen den Preis verbindlich, bevor wir anfahren.",
        },
        {
            question: "Können Sie meine Tür beschädigungsfrei öffnen?",
            answer: "In über 90% aller Fälle, insbesondere bei zugezogenen Türen, öffnen wir die Tür komplett beschädigungsfrei. Bei einem verriegelten oder defekten Schloss minimieren wir den Schaden auf das notwendige Minimum.",
        },
        {
            question: "Bieten Sie neben Türöffnungen auch andere Dienstleistungen an?",
            answer: `Ja, wir sind Ihr Full-Service-Schlüsseldienst in ${townData!.name}. Dazu gehört die Reparatur von Einbruchschäden, die Installation von Sicherheitstechnik und unser mobiler Autoschlüsseldienst.`,
        },
    ];


    return (
        <main className="container mx-auto px-4 py-12">
            
            {/* Breadcrumbs */}
            <nav className="text-sm mb-6 text-gray-500">
                <Link href="/" className="hover:text-red-600">Startseite</Link> / 
                <Link href={`/${citySlug}`} className="hover:text-red-600"> {cityData!.name}</Link> / 
                <span className="font-semibold text-gray-700"> {townData!.name}</span>
            </nav>

            {/* H1 BAŞLIK ve Acil CTA */}
            <header className="text-center mb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                    Ihr lokaler <span className={textColor}>Schlüsseldienst {townData!.name}</span> – 24/7 Notfallservice
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
                    {townData!.metaDescription} Wir sind garantiert schnell in {townData!.name} und ohne versteckte Kosten für Sie da.
                </p>
            </header>
            
            {/* Güçlü Acil Çağrı Banner'ı */}
             <div className={`${bannerColor} text-white p-8 md:p-10 rounded-xl shadow-2xl mb-12 flex flex-col md:flex-row items-center justify-between`}>
                <div className="flex items-center mb-4 md:mb-0">
                    <ClockIcon className="h-10 w-10 mr-4 flex-shrink-0 animate-bounce" />
                    <span className="text-2xl md:text-3xl font-black">
                        Notruf {townData!.name}: Jetzt Anrufen!
                    </span>
                </div>
                <a 
                    href={`tel:${townData!.notdienstTelefon}`} 
                    className={`flex items-center px-8 py-4 bg-white ${textColor} font-extrabold text-2xl rounded-full shadow-lg hover:bg-gray-100 transition duration-300 transform hover:scale-105`}
                >
                    <PhoneIcon className="h-6 w-6 mr-2" />
                    {townData!.notdienstTelefon}
                </a>
            </div>
            
            {/* Vertrauensmerkmale (Güven Özellikleri) */}
            <section className="mb-12 grid md:grid-cols-3 gap-6 text-center">
                <div className="p-4 bg-green-50 rounded-xl border-b-4 border-green-600 shadow-md">
                    <ShieldCheckIcon className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <h3 className="font-bold text-lg text-gray-800">Festpreis-Garantie</h3>
                    <p className="text-sm text-gray-600">Volle Kostentransparenz vor Ort. Keine versteckten Gebühren.</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-xl border-b-4 border-yellow-600 shadow-md">
                    <MapPinIcon className="h-8 w-8 text-yellow-600 mx-auto mb-2" />
                    <h3 className="font-bold text-lg text-gray-800">Lokaler Dienst in {townData!.name}</h3>
                    <p className="text-sm text-gray-600">Kurze Anfahrtswege, schnelle Hilfe, da wir in Ihrer Nähe sind.</p>
                </div>
                <div className="p-4 bg-red-50 rounded-xl border-b-4 border-red-600 shadow-md">
                    <CalendarDaysIcon className="h-8 w-8 text-red-600 mx-auto mb-2" />
                    <h3 className="font-bold text-lg text-gray-800">24/7 Erreichbarkeit</h3>
                    <p className="text-sm text-gray-600">Jederzeit für Sie da, auch an Wochenenden und Feiertagen.</p>
                </div>
            </section>
            
            {/* Detaylı Hizmetler ve Yönlendirme Yan Bloğu */}
            <section className="mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2">Ihre Lösung für Auto- und Türschlüssel in {townData!.name}</h2>
                <div className="grid lg:grid-cols-3 gap-8">
                    
                    {/* Sol Kısım: Hizmet Detayları */}
                    <div className="space-y-8 lg:col-span-2">
                        
                        <article className="p-6 border rounded-lg shadow-sm">
                            <h3 className="text-2xl font-bold flex items-center mb-3"><WrenchScrewdriverIcon className={`h-6 w-6 mr-2 ${textColor}`}/> Mobile Autoschlüssel Programmierung</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Stehen Sie in {townData!.name} vor einem verschlossenen Auto? Wir bieten die mobile Programmierung und das Nachmachen von Autoschlüsseln für fast alle Marken direkt vor Ort an. Sparen Sie sich das kostspielige Abschleppen und die lange Wartezeit beim Vertragshändler. Rufen Sie uns für eine schnelle Lösung an!
                            </p>
                        </article>

                        <article className="p-6 border rounded-lg shadow-sm">
                            <h3 className="text-2xl font-bold flex items-center mb-3"><KeyIcon className={`h-6 w-6 mr-2 ${textColor}`}/> Haus- und Wohnungstüröffnung</h3>
                            <p className="text-gray-700 leading-relaxed">
                                Egal ob Schlüssel verloren, im Schloss abgebrochen oder einfach nur die Tür zugezogen – unser professionelles Team öffnet Ihre Haus- oder Wohnungstür in {townData!.name} in den meisten Fällen beschädigungsfrei. Vertrauen Sie auf unsere Expertise für eine saubere und schnelle Arbeit.
                            </p>
                        </article>
                    </div>
                    
                    {/* Sağ Kısım: Yönlendirme ve Son CTA */}
                    <div className="lg:col-span-1">
                        <div className={`p-8 rounded-xl shadow-2xl ${bannerColor} text-white sticky top-4`}>
                            <h3 className="text-2xl font-extrabold mb-3">Direkter Notruf in {townData!.name}</h3>
                            <p className="text-sm mb-6 opacity-90">
                                Verlieren Sie keine Zeit! Wählen Sie die Notrufnummer, um sofort einen Techniker in {townData!.name} zu Ihnen zu schicken.
                            </p>
                            <a 
                                href={`tel:${townData!.notdienstTelefon}`} 
                                className="flex items-center justify-center bg-white text-gray-800 py-4 rounded-lg hover:bg-gray-100 transition font-extrabold text-2xl"
                            >
                                <PhoneIcon className="h-6 w-6 mr-2" />
                                {townData!.notdienstTelefon}
                            </a>
                            <p className="mt-4 text-xs opacity-70 text-center">Wir sind 24 Stunden, 7 Tage die Woche erreichbar.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* FAQ Bölümünün Entegrasyonu */}
            <FaqSection 
                title={`Häufig gestellte Fragen (FAQ) zum Schlüsseldienst in ${townData!.name}`}
                faqs={townFaqs}
                cityColorClass={textColor}
            />
            
        </main>
    );
}