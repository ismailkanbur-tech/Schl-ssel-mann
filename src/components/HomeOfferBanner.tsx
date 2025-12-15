// src/components/HomeOfferBanner.tsx
import { BoltIcon, ShieldCheckIcon, ClockIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

interface HomeOfferBannerProps {
    defaultTelefon: string;
    cityColorClass: string; // 'text-red-600' veya 'text-blue-600' gibi
}

const HomeOfferBanner: React.FC<HomeOfferBannerProps> = ({ defaultTelefon, cityColorClass }) => {
    
    // Banner rengi arka plan rengine dönüştürülür
    const bannerBgClass = cityColorClass.replace('text-', 'bg-');
    
    // Tailwind'de pulse animasyonu ile hafif aciliyet yaratma
    const animationClass = "animate-pulse-slow"; 
    
    return (
        <section className="my-10">
            <div className={`max-w-6xl mx-auto p-6 md:p-8 rounded-2xl shadow-2xl ${bannerBgClass} text-white`}>
                <div className="flex flex-col md:flex-row items-center justify-between">
                    
                    {/* Sol Kısım: Başlık ve Animasyonlu İkon */}
                    <div className="flex items-center mb-4 md:mb-0">
                        <BoltIcon className={`h-12 w-12 mr-4 flex-shrink-0 ${animationClass}`} />
                        <div className="text-left">
                            <p className="text-xl font-light opacity-90">Ihre lokale Notfalllösung</p>
                            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
                                🔑 24/7 SCHLÜSSELDIENST SOFORTHILFE!
                            </h2>
                        </div>
                    </div>

                    {/* Sağ Kısım: CTA ve Vurgu */}
                    <div className="text-center md:text-right flex flex-col items-center md:items-end">
                        <p className="text-lg font-semibold mb-2 flex items-center">
                            <ShieldCheckIcon className="h-5 w-5 mr-2 text-yellow-300" />
                            Festpreis-Garantie
                        </p>
                        <a 
                            href={`tel:${defaultTelefon}`} 
                            className={`inline-flex items-center px-8 py-3 bg-white ${cityColorClass} font-black text-2xl rounded-full shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl`}
                        >
                            <ClockIcon className="h-6 w-6 mr-3" />
                            Jetzt Anrufen: {defaultTelefon}
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Animasyon için Tailwind ayarı gerekirse buraya not düşülür */}
            {/* Not: Eğer 'animate-pulse-slow' Tailwind'de tanımlı değilse, sadece 'animate-pulse' kullanılabilir. */}

        </section>
    );
};

export default HomeOfferBanner;