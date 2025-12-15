// src/app/leistungen/page.tsx
import { Metadata } from 'next';
import { KeyIcon, TruckIcon, LockOpenIcon, BoltIcon, CurrencyEuroIcon, ShieldExclamationIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata: Metadata = {
    title: 'Unsere Leistungen | Schlüsseldienst und Auto Schlüssel Service',
    description: 'Umfassende Leistungen vom Schlüsselmann: Professionelle Türöffnung, Auto Schlüssel nachmachen, Einbruchschutz und 24/7 Notdienst mit Festpreisgarantie in Ihrer Region.',
};

const LeistungenPage: React.FC = () => {
    return (
        <main className="container mx-auto px-4 py-12 md:py-20">
            <header className="text-center mb-16">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
                    Umfassende <span className="text-blue-600">Leistungen</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Wir bieten schnelle und professionelle Lösungen für jeden Schlüsselnotfall – von der klassischen Türöffnung bis zum modernen Autoschlüssel-Service.
                </p>
            </header>

            {/* 1. Hauptleistungen (Ana Hizmetler) */}
            <section className="mb-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-8 border-b pb-3">
                    Unsere Kernkompetenzen
                </h2>
                <div className="space-y-12">
                    
                    {/* Hizmet 1: Türöffnung (Door Opening) */}
                    <div className="flex flex-col md:flex-row bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                        <LockOpenIcon className="h-12 w-12 text-blue-600 mr-6 flex-shrink-0 mb-4 md:mb-0" />
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2 flex items-center">
                                Klassische Türöffnung (Haustüren & Wohnungen)
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Sie haben sich ausgesperrt? Unser 24/7 Notdienst sorgt für eine **schnelle und schadenfreie Türöffnung**. Dank Spezialwerkzeug vermeiden wir unnötige Beschädigungen an Schloss und Zylinder. Wir sind in 15-30 Minuten bei Ihnen vor Ort.
                            </p>
                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                <li>Schadenfreie Öffnung zu 99%</li>
                                <li>Transparente Festpreise</li>
                                <li>Öffnung von zugefallenen oder verschlossenen Türen</li>
                            </ul>
                        </div>
                    </div>

                    {/* Hizmet 2: Auto Schlüssel Service (Car Key Service) */}
                    <div className="flex flex-col md:flex-row bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                        <KeyIcon className="h-12 w-12 text-red-600 mr-6 flex-shrink-0 mb-4 md:mb-0" />
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Auto Schlüssel nachmachen und Programmieren
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Wir sind Spezialisten für moderne Auto Schlüssel. Egal ob verloren, defekt oder benötigen Sie einen Ersatzschlüssel – wir fräsen und programmieren den Schlüssel direkt vor Ort für die meisten gängigen Marken (BMW, Mercedes, VW, Audi, etc.).
                            </p>
                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                <li>Sofortige Programmierung vor Ort</li>
                                <li>Bis zu 70% günstiger als Vertragshändler</li>
                                <li>Ersatzschlüssel und Reparatur defekter Schlüsselgehäuse</li>
                            </ul>
                        </div>
                    </div>

                    {/* Hizmet 3: Einbruchschutz (Security) */}
                    <div className="flex flex-col md:flex-row bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
                        <ShieldExclamationIcon className="h-12 w-12 text-green-600 mr-6 flex-shrink-0 mb-4 md:mb-0" />
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                                Einbruchschutz und Sicherheitsberatung
                            </h3>
                            <p className="text-gray-700 mb-4">
                                Nach einem Einbruchsversuch oder zur Prävention: Wir beraten Sie zu aktuellen Sicherheitsstandards, tauschen beschädigte Schlösser aus und installieren moderne Schließanlagen und Sicherheitstechnik (Zusatzschlösser, Panzerriegel).
                            </p>
                            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                                <li>Kostenlose Sicherheitsberatung</li>
                                <li>Installation von VdS-anerkannten Sicherheitssystemen</li>
                                <li>24/7 Notabsicherung nach Einbruch</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* 2. Preisversprechen ve Acil Durum CTA */}
            <section className="bg-blue-100 p-8 rounded-xl text-center mb-16 shadow-inner">
                <CurrencyEuroIcon className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-blue-800 mb-4">
                    Unser Festpreis-Versprechen
                </h2>
                <p className="text-lg text-blue-700 max-w-4xl mx-auto mb-6">
                    Bei uns gibt es keine bösen Überraschungen. Wir nennen Ihnen den **genauen Endpreis** telefonisch, bevor unser Techniker losfährt. Dies gilt für alle gängigen Türöffnungen und Auto Schlüssel Services.
                </p>
                <Link 
                    href={`tel:089-111111`} 
                    className="inline-flex items-center px-8 py-3 text-xl bg-red-600 text-white font-bold rounded-full shadow-lg transition duration-300 hover:bg-red-700 hover:scale-105"
                >
                    <BoltIcon className="h-5 w-5 mr-3" /> Jetzt Notruf tätigen: 089-111111
                </Link>
            </section>
        </main>
    );
}

export default LeistungenPage;