// src/app/leistungen/page.tsx
import { Metadata } from 'next';
import { 
    KeyIcon, 
    LockOpenIcon, 
    ShieldExclamationIcon, 
    CurrencyEuroIcon, 
    BoltIcon,
    PhoneIcon, 
} from '@heroicons/react/24/outline'; 
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Unsere Leistungen | Schlüsseldienst und Auto Schlüssel Service',
    description: 'Umfassende Leistungen vom Schlüsselmann: Professionelle Türöffnung, Auto Schlüssel nachmachen, Einbruchschutz und 24/7 Notdienst mit Festpreisgarantie in Ihrer Region.',
};

// Hizmet Verileri (Aynı kalıyor)
const services = [
    {
        icon: LockOpenIcon,
        title: 'Klassische Türöffnung (Haustüren & Wohnungen)',
        color: 'text-sky-600',
        description: 'Sie haben sich ausgesperrt? Unser 24/7 Notdienst sorgt für eine **schnelle und schadenfreie Türöffnung**. Dank Spezialwerkzeug vermeiden wir unnötige Beschädigungen an Schloss und Zylinder. Wir sind in 15-30 Minuten bei Ihnen vor Ort.',
        features: [
            'Schadenfreie Öffnung zu 99%', 
            'Transparente Festpreise', 
            'Öffnung von zugefallenen oder verschlossenen Türen'
        ],
    },
    {
        icon: KeyIcon,
        title: 'Auto Schlüssel nachmachen und Programmieren',
        color: 'text-orange-600',
        description: 'Wir sind Spezialisten für moderne Auto Schlüssel. Egal ob verloren, defekt oder benötigen Sie einen Ersatzschlüssel – wir fräsen und programmieren den Schlüssel direkt vor Ort für die meisten gängigen Marken (BMW, Mercedes, VW, Audi, etc.).',
        features: [
            'Sofortige Programmierung vor Ort', 
            'Bis zu 70% günstiger als Vertragshändler', 
            'Ersatzschlüssel und Reparatur defekter Schlüsselgehäuse'
        ],
    },
    {
        icon: ShieldExclamationIcon,
        title: 'Einbruchschutz und Sicherheitsberatung',
        color: 'text-green-600',
        description: 'Nach einem Einbruchsversuch oder zur Prävention: Wir beraten Sie zu aktuellen Sicherheitsstandards, tauschen beschädigte Schlösser aus und installieren moderne Schließanlagen und Sicherheitstechnik (Zusatzschlösser, Panzerriegel).',
        features: [
            'Kostenlose Sicherheitsberatung', 
            'Installation von VdS-anerkannten Sicherheitssystemen', 
            '24/7 Notabsicherung nach Einbruch'
        ],
    },
];

const LeistungenPage: React.FC = () => {
    const NOTDIENST_TELEFON = '0177 3977646'; 

    return (
        <main className="container mx-auto px-4 py-12 md:py-20">
            <header className="text-center mb-16">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                    Umfassende <span className="text-sky-600">Leistungen</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Wir bieten schnelle und professionelle Lösungen für jeden Schlüsselnotfall – von der klassischen Türöffnung bis zum modernen Autoschlüssel-Service.
                </p>
            </header>

            {/* 1. Hauptleistungen (Ana Hizmetler) - Izgara Düzeni */}
            <section className="mb-20">
                <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
                    Unsere Kernkompetenzen im Überblick
                </h2>
                
                {/* Modern 3-sütunlu ızgara */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index} 
                            // Flexbox Sınıfları Eklendi: Kartı dikey flex container yapar
                            className="bg-white p-8 rounded-2xl shadow-xl border-t-4 border-transparent hover:border-sky-500 transform hover:scale-[1.02] transition duration-500 ease-in-out flex flex-col h-full"
                        >
                            <service.icon className={`h-16 w-16 ${service.color} mb-6`} />
                            
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                {service.title}
                            </h3>
                            
                            {/* Flex-grow sınıfı, bu paragrafın boşluğu doldurarak kartın yüksekliğini eşitlemesini sağlar */}
                            <p className="text-gray-700 mb-6 flex-grow">
                                {service.description}
                            </p>
                            
                            <ul className="space-y-2 mb-6">
                                {service.features.map((feature, i) => (
                                    <li key={i} className="flex items-start text-gray-600">
                                        {/* İkonu ilgili hizmet rengiyle değiştirdim. */}
                                        <LockOpenIcon className={`h-4 w-4 mr-2 mt-1 ${service.color} flex-shrink-0`} /> 
                                        <span className="text-sm">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA'nın hep en altta kalması garanti edilir */}
                            <Link 
                                href={`tel:${NOTDIENST_TELEFON}`} 
                                className={`text-md font-semibold flex items-center ${service.color} hover:text-sky-700 transition mt-auto`} // mt-auto eklenerek en alta itilir
                            >
                                <PhoneIcon className="h-5 w-5 mr-2" />
                                Jetzt Soforthilfe anfordern
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
            
            {/* 2. Preisversprechen ve Acil Durum CTA - Daha Dinamik Tasarım */}
            <section className="bg-gradient-to-r from-sky-600 to-blue-700 p-10 rounded-2xl text-white text-center shadow-2xl relative overflow-hidden">
                {/* Arka plan deseni / süsleme */}
                <div className="absolute inset-0 opacity-10">
                    <BoltIcon className="h-full w-full" />
                </div>
                
                <CurrencyEuroIcon className="h-16 w-16 text-yellow-300 mx-auto mb-4 relative z-10" />
                <h2 className="text-4xl font-extrabold mb-3 relative z-10">
                    Ihr Vorteil: Das <span className="text-yellow-300">Festpreis-Versprechen</span>
                </h2>
                <p className="text-lg font-light max-w-4xl mx-auto mb-8 relative z-10">
                    Keine versteckten Kosten, keine bösen Überraschungen. Wir nennen Ihnen den **genauen Endpreis** telefonisch, bevor unser Techniker losfährt. 100% transparent.
                </p>
                
                <Link 
                    href={`tel:${NOTDIENST_TELEFON}`} 
                    className="inline-flex items-center px-10 py-4 text-2xl bg-orange-500 text-white font-black rounded-full shadow-2xl transition duration-300 transform hover:bg-orange-600 hover:scale-105 uppercase tracking-wider relative z-10 animate-bounce-slow"
                >
                    <PhoneIcon className="h-6 w-6 mr-3" /> 
                    Jetzt 24/7 Notruf: {NOTDIENST_TELEFON}
                </Link>
            </section>
        </main>
    );
}

export default LeistungenPage;