// src/components/HomeOfferBanner.tsx - SEO Destekli ve Görsel Olarak Geliştirilmiş
import { BoltIcon, ShieldCheckIcon, ClockIcon, PhoneIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

interface HomeOfferBannerProps {
    defaultTelefon: string;
    cityColorClass: string; // Örn: 'text-red-600'
    cityName?: string; // Opsiyonel: Şehir adını buraya ekleyerek bölgesel SEO'yu güçlendiririz
}

const HomeOfferBanner: React.FC<HomeOfferBannerProps> = ({ defaultTelefon, cityColorClass, cityName }) => {
    
    // Banner rengi arka plan rengine dönüştürülür (örn: text-red-600 -> bg-red-600)
    const bannerBgClass = cityColorClass.replace('text-', 'bg-');
    // CTA butonu için zıt renk (bu bir banner olduğu için beyaz kullanalım)
    const ctaTextClass = cityColorClass; 
    
    // Tailwind'de pulse animasyonu ile hafif aciliyet yaratma (Varsayılan pulse kullanılır)
    const animationClass = "animate-pulse"; 
    
    const locationText = cityName ? ` in ${cityName} und Umgebung` : '';

    return (
        <section className="my-10" aria-label="24/7 Notdienst Banner">
            <div className={`max-w-6xl mx-auto p-6 md:p-8 rounded-2xl shadow-2xl ${bannerBgClass} text-white`}>
                <div className="flex flex-col md:flex-row items-center justify-between">
                    
                    {/* Sol Kısım: Başlık, SEO ve Animasyonlu İkon */}
                    <div className="flex items-center mb-4 md:mb-0">
                        <BoltIcon className={`h-12 w-12 mr-4 flex-shrink-0 text-yellow-300 ${animationClass}`} />
                        <div className="text-left">
                            
                            {/* Anahtar kelime yoğunluğunu artırır */}
                            <strong className="text-xl font-bold block text-yellow-300">
                                24/7 Soforthilfe für Auto- & Türöffnung
                            </strong>
                            
                            {/* Ana başlık yerine vurgu metni (SEO açısından h1/h2 çatışmasını önler) */}
                            <span className="text-3xl md:text-4xl font-extrabold leading-tight">
                                SCHLÜSSELDIENST{locationText}
                            </span>
                        </div>
                    </div>

                    {/* Sağ Kısım: CTA ve Güven Vurgusu */}
                    <div className="text-center md:text-right flex flex-col items-center md:items-end mt-4 md:mt-0">
                        
                        {/* Güven ve Şeffaflık Vurgusu */}
                        <p className="text-lg font-bold mb-2 flex items-center justify-center md:justify-end">
                            <ShieldCheckIcon className="h-5 w-5 mr-2 text-yellow-300" />
                            Festpreis-Garantie & 15 Min. Anfahrt
                        </p>
                        
                        {/* CTA Düğmesi - Kontrastı artırıldı */}
                        <a 
                            href={`tel:${defaultTelefon}`} 
                            className={`inline-flex items-center px-8 py-3 bg-white ${ctaTextClass} font-black text-2xl rounded-full shadow-2xl transition duration-300 hover:scale-[1.03] hover:shadow-xl uppercase tracking-wider`}
                        >
                            <PhoneIcon className="h-6 w-6 mr-3" />
                            JETZT ANRUFEN: {defaultTelefon}
                        </a>
                    </div>
                </div>
            </div>
            
            {/* Not: 'animate-pulse-slow' kullanmak için tailwind.config.js dosyanızda özel bir animasyon tanımlamanız gerekebilir. */}
        </section>
    );
};

export default HomeOfferBanner;