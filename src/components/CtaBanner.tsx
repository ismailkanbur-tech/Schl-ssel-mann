// src/components/CtaBanner.tsx
import React from 'react';
import { PhoneIcon, ShieldCheckIcon, ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline';

interface CtaBannerProps {
    defaultTelefon: string;
    defaultPrice: string;
}

const CtaBanner: React.FC<CtaBannerProps> = ({ defaultTelefon, defaultPrice }) => {
    
    const telefonLink = `tel:${defaultTelefon.replace(/-/g, '')}`;
    const whatsappLink = `https://wa.me/${defaultTelefon.replace(/[\s-]/g, '')}`;

    return (
        <div className="mb-16 rounded-3xl bg-blue-50 border-4 border-red-600/50 p-6 md:p-10 shadow-2xl transition-shadow duration-300">
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
                        href={telefonLink}
                        className="px-8 py-3 bg-red-600 text-white font-black rounded-xl shadow-xl hover:bg-red-700 transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-2 min-w-[200px] uppercase tracking-wide text-lg"
                    >
                        <PhoneIcon className="h-6 w-6 animate-pulse" />
                        {defaultTelefon}
                    </a>

                    {/* 2. Sekundär-CTA (WhatsApp) */}
                    <a
                        href={whatsappLink} 
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
    );
};

export default CtaBanner; // <<<--- BU SATIR KESİNLİKLE OLMALI