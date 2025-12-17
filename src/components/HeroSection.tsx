// src/components/HeroSection.tsx
import React from 'react';
import Link from 'next/link';
import {
    PhoneIcon,
    ShieldCheckIcon,
    ClockIcon,
    StarIcon,
} from '@heroicons/react/24/outline';

interface HeroSectionProps {
    defaultTelefon: string;
    defaultPrice: string;
    AVERAGE_RATING: number;
    REVIEW_COUNT: number;
}

const HeroSection: React.FC<HeroSectionProps> = ({ 
    defaultTelefon, 
    defaultPrice, 
    AVERAGE_RATING, 
    REVIEW_COUNT 
}) => {

    const telefonLink = `tel:${defaultTelefon.replace(/-/g, '')}`;

    return (
        <header className="relative mb-16 overflow-hidden rounded-3xl p-6 md:p-16 lg:p-20 bg-gray-900 text-white shadow-2xl border border-gray-700"> 
            {/* Arkaplan Efekti */}
            <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-indigo-800 to-blue-900"></div>
            
            <div className="relative z-10 text-center max-w-4xl mx-auto">
                
                {/* HIZLI ANFAHRT + PUAN */}
                <div className="flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm font-medium mb-6 bg-yellow-400/90 backdrop-blur-sm rounded-full p-1 md:p-2 text-gray-900 max-w-full mx-auto"> 
                    <span className="bg-white px-3 py-1 rounded-full flex items-center gap-2 font-black flex-shrink-0">
                        <ClockIcon className="h-4 w-4 text-red-600" /> 24/7 Notdienst
                    </span>
                    <span className="flex items-center font-semibold text-xs md:text-sm flex-shrink-0 px-2">
                        <StarIcon className="h-4 w-4 fill-gray-900 mr-1" />
                        {AVERAGE_RATING.toFixed(1)} / 5.0 ({REVIEW_COUNT} Bewertungen) 
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
                    href={telefonLink}
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
    );
};

export default HeroSection;