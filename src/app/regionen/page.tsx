// src/app/regionen/page.tsx
import { Metadata } from 'next';
import Link from 'next/link';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { getAllCities } from '@/lib/data.server'; // Şehir verilerini çekmek için

export const metadata: Metadata = {
    title: 'Alle Regionen & Orte | Schlüsselmann - Lokaler Notdienst',
    description: 'Schlüsselmann bietet 24/7 Notdienst und Auto Schlüssel Service in München, Dachau, Freising und dem gesamten Umland. Finden Sie Ihren Standort für schnelle Hilfe.',
};

const RegionenPage: React.FC = () => {
    // Statik şehir verilerini çekiyoruz
    const cities = getAllCities(); 
    
    // Şehirleri alfabetik sıraya göre sıralayalım
    const sortedCities = cities.sort((a, b) => a.name.localeCompare(b.name));

    return (
        <main className="container mx-auto px-4 py-12 md:py-20">
            <header className="text-center mb-16">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                    Unsere <span className="text-blue-600">Regionen</span> & Orte
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Wir sind Ihr lokaler Schlüsseldienst und Auto Schlüssel Service in der gesamten Region. Finden Sie unten Ihren Standort für sofortige und faire Hilfe.
                </p>
            </header>

            {/* Şehir Listeleme Alanı */}
            <section className="mb-16">
                <div className="max-w-4xl mx-auto">
                    
                    {/* Ana Şehirler (Büyük Vurgu) */}
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2 flex items-center">
                        <MapPinIcon className="h-6 w-6 mr-2 text-red-600" /> Hauptstandorte
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
                        {sortedCities.filter(city => ['muenchen', 'dachau', 'freising'].includes(city.slug)).map((city) => (
                             <Link 
                                key={city.slug} 
                                href={`/${city.slug}`}
                                className="p-4 bg-white border border-red-100 rounded-lg shadow-md hover:shadow-xl transition duration-300 hover:border-red-400 font-semibold text-red-700"
                            >
                                Schlüsseldienst {city.name} &rarr;
                            </Link>
                        ))}
                    </div>

                    {/* Tüm Hizmet Alanları (Alfabetik Liste) */}
                    <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-2 flex items-center">
                        <MapPinIcon className="h-6 w-6 mr-2 text-blue-600" /> Alle weiteren Gebiete (Umland)
                    </h2>
                    
                    {/* Alfabetik ve çok sütunlu liste yapısı */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3">
                        {sortedCities.map((city) => (
                            <Link 
                                key={city.slug} 
                                href={`/${city.slug}`}
                                className="text-gray-700 hover:text-blue-600 hover:underline transition duration-150"
                            >
                                {city.name}
                            </Link>
                        ))}
                        {/* Buraya hizmet verdiğiniz daha küçük kasabaları/semtleri de statik olarak ekleyebilirsiniz */}
                        <span className="text-gray-400 italic">Weitere Orte auf Anfrage...</span>
                    </div>
                </div>
            </section>
            
            {/* CTA (Acil Çağrı) */}
            <div className="text-center mt-12">
                <p className="text-xl text-gray-700 mb-4">Ihre Stadt oder Gemeinde ist nicht dabei? Rufen Sie uns trotzdem an!</p>
                <a 
                    href={`tel:089-111111`} 
                    className="inline-flex items-center px-8 py-3 text-xl bg-red-600 text-white font-bold rounded-full shadow-lg transition duration-300 hover:bg-red-700 hover:scale-105"
                >
                    <MapPinIcon className="h-5 w-5 mr-3" /> Jetzt Verfügbarkeit prüfen & Notruf
                </a>
            </div>
        </main>
    );
}

export default RegionenPage;