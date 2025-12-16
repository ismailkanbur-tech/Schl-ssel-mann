// src/app/regionen/page.tsx - Modernleştirilmiş Ka Service Versiyonu
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image'; // 👈 Image bileşeni buraya eklendi
import { 
    MapPinIcon, 
    GlobeAltIcon, 
    PhoneArrowUpRightIcon, // CTA için
    ArrowRightIcon // Linkler için
} from '@heroicons/react/24/outline';
import { getAllCities } from '@/lib/data.server'; // Şehir verilerini çekmek için

// Marka Sabiti
const COMPANY_NAME = 'Ka Service';
const NOTDIENST_TELEFON = '0177 3977646'; // CTA telefon numarası

// ✅ Metadata Ka Service olarak güncellendi
export const metadata: Metadata = {
    title: `Alle Einsatzgebiete & Orte | ${COMPANY_NAME} - Lokaler Notdienst`,
    description: `${COMPANY_NAME} bietet 24/7 Notdienst und Auto Schlüssel Service in München, Dachau, Freising und dem gesamten Umland. Finden Sie Ihren Standort für schnelle Hilfe.`,
};

const RegionenPage: React.FC = () => {
    // Statik şehir verilerini çekiyoruz
    const cities = getAllCities(); 
    
    // Şehirleri alfabetik sıraya göre sıralayalım
    const sortedCities = cities.sort((a, b) => a.name.localeCompare(b.name));

    // Ana şehirleri belirleyelim (slug yerine name kullanmak daha güvenli olabilir)
    const mainCities = sortedCities.filter(city => ['München', 'Dachau', 'Freising'].includes(city.name));
    const otherCities = sortedCities.filter(city => !mainCities.some(mainCity => mainCity.name === city.name));


    return (
        <main className="container mx-auto px-4 py-12 md:py-20">
            <header className="text-center mb-16">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                    Unser <span className="text-blue-600">Einsatzgebiet</span> & alle Orte
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Als Ihr lokaler Schlüsseldienst **{COMPANY_NAME}** garantieren wir schnelle Anfahrt und faire Preise. Finden Sie unten Ihren Standort für sofortige und faire Hilfe.
                </p>
            </header>
            
            {/* Görsel Harita Vurgusu (Modern Stil) */}
            <section className="mb-20 max-w-5xl mx-auto text-center p-6 bg-blue-50/50 rounded-2xl shadow-inner">
                <GlobeAltIcon className="h-10 w-10 text-blue-600 mx-auto mb-3" />
                <p className="text-2xl font-bold text-gray-800 mb-6">
                    Wir sind da, wo Sie uns brauchen – im Herzen Oberbayerns.
                </p>
                
                {/* 🔽 Burası Statik Görsel ile Değiştirilen Kısım 🔽 */}
                <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg border-2 border-white transform hover:scale-[1.005] transition duration-300">
                    {/* Bu görselin /public/images/ka-service-region-map.png yolunda bulunduğunu varsayıyoruz */}
                    <Image 
                        src="/images/ka-service-region-map.png"
                        alt={`Ka Service Einsatzgebiet Region München, Dachau, Freising und Umgebung`}
                        fill 
                        sizes="(max-width: 1024px) 100vw, 800px"
                        style={{ objectFit: 'cover' }}
                        className="rounded-xl"
                    />
                </div>
                {/* 🔼 Burası Statik Görsel ile Değiştirilen Kısım 🔼 */}
            </section>

            {/* Şehir Listeleme Alanı */}
            <section className="mb-16">
                <div className="max-w-5xl mx-auto">
                    
                    {/* Ana Şehirler (Büyük Vurgu - Modern Kartlar) */}
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-l-4 border-red-600 pl-4">
                        <span className="text-red-600">Hauptstandorte</span> (Kerngebiet)
                    </h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                        {mainCities.map((city) => (
                             <Link 
                                key={city.slug} 
                                href={`/${city.slug}`} // Mevcut bağlantı yapısı korunuyor
                                className="group p-6 bg-white border border-red-300 rounded-xl shadow-lg transition duration-300 hover:shadow-2xl hover:bg-red-50 flex items-center justify-between transform hover:scale-[1.02]"
                            >
                                <span className="text-xl font-bold text-red-700">
                                    {COMPANY_NAME} {city.name}
                                </span>
                                <ArrowRightIcon className="h-6 w-6 text-red-600 transition-transform group-hover:translate-x-1" />
                            </Link>
                        ))}
                    </div>

                    {/* Tüm Hizmet Alanları (Alfabetik Liste - Okunabilir Sütunlar) */}
                    <h2 className="text-3xl font-extrabold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4">
                        Alle <span className="text-blue-600">weiteren Gebiete</span> im Umland
                    </h2>
                    
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-4 p-6 bg-gray-50 rounded-xl border border-gray-200">
                        {otherCities.map((city) => (
                            <Link 
                                key={city.slug} 
                                href={`/${city.slug}`} // Mevcut bağlantı yapısı korunuyor
                                className="text-base text-gray-800 font-medium hover:text-blue-600 transition duration-150 relative group"
                            >
                                <span className="group-hover:underline">Schlüsseldienst {city.name}</span>
                                <span className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500 text-xs">→</span>
                            </Link>
                        ))}
                        <span className="text-gray-500 italic text-sm col-span-full mt-4">
                            Weitere Orte auf Anfrage. Rufen Sie uns einfach an!
                        </span>
                    </div>
                </div>
            </section>
            
            {/* CTA (Acil Çağrı) - Güçlü ve Odaklanmış */}
            <div className="text-center mt-20 p-8 md:p-12 bg-gray-900 rounded-3xl shadow-2xl">
                <p className="text-2xl font-light text-white opacity-90 mb-3">24/7 Notdienst</p>
                <h3 className="text-4xl md:text-5xl font-black text-yellow-400 mb-8">
                    SOFORTHILFE FÜR IHREN STANDORT
                </h3>
                <a 
                    href={`tel:${NOTDIENST_TELEFON}`} 
                    className="inline-flex items-center px-10 py-4 text-2xl bg-red-600 text-white font-bold rounded-full shadow-2xl transition duration-300 hover:bg-red-700 hover:scale-105 transform animate-pulse-slow"
                >
                    <PhoneArrowUpRightIcon className="h-6 w-6 mr-3" /> Jetzt Anrufen: {NOTDIENST_TELEFON}
                </a>
                <p className="text-sm text-gray-400 mt-4">
                    Kostenlose Preisauskunft vor Anfahrt durch {COMPANY_NAME}.
                </p>
            </div>
        </main>
    );
}

export default RegionenPage;