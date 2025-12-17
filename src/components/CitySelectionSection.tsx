// src/components/CitySelectionSection.tsx
import React from 'react';
import Link from 'next/link';
import {
    MapPinIcon,
    BuildingOffice2Icon,
    ArrowLongRightIcon,
} from '@heroicons/react/24/outline';

// Şehir Veri Tipi (page.tsx'den alınmıştır)
interface City {
    name: string;
    slug: string;
    // Diğer şehir özellikleri buraya eklenebilir
}

interface CitySelectionSectionProps {
    cities: City[];
}

const CitySelectionSection: React.FC<CitySelectionSectionProps> = ({ cities }) => {

    // Stil sabitleri
    const primaryColorClass = 'text-blue-600';
    const linkHoverBg = 'hover:bg-blue-50';
    const arrowHoverClass = 'text-blue-700';

    return (
        <section className="mt-20 mb-16">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
                <MapPinIcon className="h-8 w-8 inline mr-2 text-blue-600" /> 
                Wählen Sie Ihren <span className="text-blue-600">Standort</span>
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cities.map((city) => (
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
                ))}
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
    );
};

export default CitySelectionSection;