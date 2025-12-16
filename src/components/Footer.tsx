// src/components/Footer.tsx - Modern, Mobil Uyumlu ve Güncel Linkli Footer

import Link from 'next/link';
import { TruckIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

const centralPhone = " 0177 3977646";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const primaryColor = 'text-blue-500'; // Modern Mavi Rengi

    return (
        // Tasarım Değişikliği: Koyu gri/siyah yerine, daha yumuşak koyu mavi/gri tonları
        <footer className="bg-gray-800 text-gray-300 border-t border-blue-700/50 mt-16">
            <div className="container mx-auto px-4 py-14">
                
                {/* Ana Bölümler */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-10 lg:gap-12">
                    
                    {/* 1. Logo & Kontakt (Daha Fazla Görünürlük) */}
                    <div className="col-span-2 md:col-span-2">
                        <Link href="/" className={`flex items-center space-x-2 text-3xl font-black text-white mb-4 tracking-tight`}>
                            <TruckIcon className={`h-8 w-8 ${primaryColor}`} />
                            <span className={primaryColor}>Ka</span>Service
                        </Link>
                        <p className="text-sm leading-relaxed text-gray-400">
                            Ihr Notdienst für Auto- und Türöffnung in Bayern. 
                            Schnelle Hilfe, transparente Festpreise – 24/7.
                        </p>
                        <div className="mt-6 space-y-2 text-sm font-medium">
                            <a 
                                href={`tel:${centralPhone}`} 
                                className="flex items-center text-white hover:text-blue-400 transition"
                            >
                                <PhoneIcon className="h-5 w-5 mr-3" /> 
                                <span className="text-lg">{centralPhone}</span> (24h Notruf)
                            </a>
                            <a 
                                href="mailto:info@schluesselmann.de" 
                                className="flex items-center text-gray-400 hover:text-white transition"
                            >
                                <EnvelopeIcon className="h-4 w-4 mr-3" /> info@schluesselmann.de
                            </a>
                        </div>
                    </div>
                    
                    {/* 2. Servicegebiete */}
                    <div>
                        <h3 className="text-md font-bold text-white uppercase mb-4 tracking-wider">Servicegebiete</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/muenchen" className={`hover:${primaryColor} transition`}>München</Link></li>
                            <li><Link href="/muenchen/pasing" className={`hover:${primaryColor} transition`}>München Pasing</Link></li>
                            <li><Link href="/dachau" className={`hover:${primaryColor} transition`}>Dachau</Link></li>
                            <li><Link href="/dachau/markt-indersdorf" className={`hover:${primaryColor} transition`}>Markt Indersdorf</Link></li>
                            {/* Augsburg Çıkarıldı */}
                        </ul>
                    </div>

                    {/* 3. Site Haritası & Rechtliches */}
                    <div>
                        <h3 className="text-md font-bold text-white uppercase mb-4 tracking-wider">Informationen</h3>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/ueber-uns" className={`hover:${primaryColor} transition`}>Über uns</Link></li>
                            <li><Link href="/leistungen" className={`hover:${primaryColor} transition`}>Leistungen</Link></li>
                            <li><Link href="/regionen" className={`hover:${primaryColor} transition`}>Regionen</Link></li>
                            {/* ✅ Ratgeber Eklendi */}
                            <li><Link href="/ratgeber" className={`hover:${primaryColor} transition`}>Ratgeber & Tipps</Link></li> 
                            <li><Link href="/impressum" className={`hover:${primaryColor} transition`}>Impressum</Link></li>
                            <li><Link href="/datenschutz" className={`hover:${primaryColor} transition`}>Datenschutz</Link></li>
                            <li><Link href="/agb" className={`hover:${primaryColor} transition`}>AGB</Link></li>
                        </ul>
                    </div>
                    
                    {/* 4. Vorteile (Daha net bir liste) */}
                    <div className="hidden md:block">
                        <h3 className="text-md font-bold text-white uppercase mb-4 tracking-wider">Ihre Vorteile</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex items-start"><span className={`text-green-400 mr-2 font-black text-lg`}>✔</span> Festpreisgarantie</li>
                            <li className="flex items-start"><span className={`text-green-400 mr-2 font-black text-lg`}>✔</span> 24/7 Notdienst</li>
                            <li className="flex items-start"><span className={`text-green-400 mr-2 font-black text-lg`}>✔</span> Mobile Schlüsselprogrammierung</li>
                            <li className="flex items-start"><span className={`text-green-400 mr-2 font-black text-lg`}>✔</span> Schnelle Anfahrt (15-30 Min.)</li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-gray-700/50 text-center text-xs text-gray-500">
                    &copy; {currentYear} KA Service . Alle Rechte vorbehalten. | <Link href="/impressum" className="hover:underline">Impressum</Link> | <Link href="/datenschutz" className="hover:underline">Datenschutz</Link>
                </div>
            </div>
        </footer>
    );
}