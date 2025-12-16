'use client';

import Link from 'next/link';
import {
    PhoneIcon,
    ClockIcon,
    ShieldCheckIcon,
    MapPinIcon,
    Bars3Icon,
    XMarkIcon,
    UserIcon,
    WrenchScrewdriverIcon, 
    BookOpenIcon, 
    GlobeAltIcon, 
} from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

// ✅ YENİ RENK PALETİ (Hero Section ile senkronize)
const GLOBAL_TELEFON = '0177 3977646';
const PRIMARY_COLOR_TEXT = 'text-blue-600'; // Ana site rengi
const PRIMARY_COLOR_BG = 'bg-gray-800'; // Üst bar ve mobil menü butonu
const ACCENT_COLOR_CTA = 'bg-red-600'; // GÜÇLÜ CTA: Aciliyet için kırmızı
const ACCENT_COLOR_HOVER = 'hover:bg-red-700'; // CTA hover rengi

const Header: React.FC = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { href: '/ueber-uns', label: 'Über uns', icon: UserIcon },
        { href: '/leistungen', label: 'Leistungen', icon: WrenchScrewdriverIcon },
        { href: '/regionen', label: 'Regionen', icon: GlobeAltIcon },
        { href: '/ratgeber', label: 'Ratgeber', icon: BookOpenIcon },
    ];

    const closeMobileMenu = () => setMobileOpen(false);

    return (
        <header>
            {/* 1. Top Bar - Koyu Tema ve Beyaz Metin */}
            <div className={`py-2 text-xs md:text-sm text-white ${PRIMARY_COLOR_BG}`}>
                <div className="container mx-auto px-4 flex justify-center space-x-4 md:space-x-8">
                    <span className="flex items-center">
                        <ClockIcon className="h-4 w-4 mr-1 text-yellow-400 animate-pulse" />
                        24/7 Notdienst
                    </span>
                    <span className="flex items-center">
                        <ShieldCheckIcon className="h-4 w-4 mr-1 text-yellow-400" />
                        Festpreis-Garantie
                    </span>
                    <span className="hidden sm:flex items-center">
                        <MapPinIcon className="h-4 w-4 mr-1 text-yellow-400" />
                        Lokale Soforthilfe
                    </span>
                </div>
            </div>

            {/* 2. Main Nav - Yapışkan ve Güçlü Vurgu */}
            <nav
                className={`w-full bg-white transition-all duration-300 ${
                    isSticky ? 'fixed top-0 z-[100] shadow-2xl border-b-4 border-red-600' : 'border-b border-gray-100' // Yapışıkken KIRMIZI border
                }`}
            >
                <div className="container mx-auto px-4 py-3 flex justify-between items-center h-full">
                    
                    {/* Logo */}
                    <Link href="/" className="flex items-center text-3xl font-black tracking-tighter transition-transform duration-300 hover:scale-[1.02]">
                        <span className={`${PRIMARY_COLOR_TEXT} mr-1`}>Ka</span>
                        <span className="text-gray-900">Service</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex space-x-8 text-gray-700 font-semibold">
                        {navItems.map((item) => (
                            <Link 
                                key={item.href} 
                                href={item.href} 
                                className={`flex items-center text-lg transition duration-200 border-b-2 border-transparent hover:border-blue-600 hover:${PRIMARY_COLOR_TEXT}`}
                            >
                                <item.icon className={`h-5 w-5 mr-1 text-gray-400 group-hover:${PRIMARY_COLOR_TEXT}`} /> 
                                {item.label}
                            </Link>
                        ))}
                    </div>

                    {/* CTA - Kırmızı Acil Düğme */}
                    <a
                        href={`tel:${GLOBAL_TELEFON}`}
                        className={`hidden md:inline-flex items-center px-6 py-3 ${ACCENT_COLOR_CTA} text-white font-extrabold rounded-full shadow-xl transition duration-300 ${ACCENT_COLOR_HOVER} hover:scale-[1.05] text-lg uppercase tracking-wide`}
                    >
                        <PhoneIcon className="h-6 w-6 mr-2 animate-wiggle" />
                        {isSticky ? 'SOFORT ANRUFEN' : GLOBAL_TELEFON}
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={`p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition lg:hidden shadow-md`} // Mavi renk kullanıldı
                        onClick={() => setMobileOpen(!mobileOpen)}
                    >
                        {mobileOpen ? <XMarkIcon className="h-7 w-7" /> : <Bars3Icon className="h-7 w-7" />}
                    </button>
                </div>

                {/* 3. Mobile Nav - Tam Ekran ve Animasyonlu */}
                <div 
                    className={`fixed inset-0 lg:hidden z-50 transform transition-opacity duration-300 ${
                        mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                >
                    {/* Arkaplan Karartma (Overlay) */}
                    <div 
                        className={`absolute inset-0 bg-gray-900/80 transition-opacity duration-300 ${
                            mobileOpen ? 'opacity-100' : 'opacity-0'
                        }`}
                        onClick={closeMobileMenu}
                    />

                    {/* Menü Paneli - Sağdan İçeri Kayma */}
                    <div 
                        className={`absolute top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl p-6 transform transition-transform duration-500 ease-in-out ${
                            mobileOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                    >
                        <div className="flex justify-end mb-8">
                            {/* Kapat Butonu */}
                            <button
                                className="p-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition"
                                onClick={closeMobileMenu}
                            >
                                <XMarkIcon className="h-8 w-8" />
                            </button>
                        </div>

                        {/* Navigasyon Linkleri */}
                        <nav className="flex flex-col space-y-3">
                            {navItems.map((item) => (
                                <Link 
                                    key={item.href} 
                                    href={item.href} 
                                    onClick={closeMobileMenu}
                                    className={`flex items-center text-xl font-semibold text-gray-800 p-4 rounded-xl transition duration-200 hover:bg-blue-50 hover:${PRIMARY_COLOR_TEXT} border-l-4 border-transparent hover:border-blue-600`}
                                >
                                    <item.icon className="h-6 w-6 mr-4 text-gray-500" /> 
                                    {item.label}
                                </Link>
                            ))}
                        </nav>

                        {/* Mobil CTA - Alt kısma sabitleme */}
                        <div className="mt-12 pt-6 border-t border-gray-200">
                             <a
                                href={`tel:${GLOBAL_TELEFON}`}
                                onClick={closeMobileMenu}
                                className={`w-full text-center flex items-center justify-center px-6 py-4 ${ACCENT_COLOR_CTA} text-white font-extrabold rounded-xl shadow-2xl transition duration-300 ${ACCENT_COLOR_HOVER} text-xl uppercase tracking-wider`}
                            >
                                <PhoneIcon className="h-6 w-6 mr-3" />
                                JETZT 24/7 ANRUFEN
                            </a>
                            <p className="text-center text-xs text-gray-500 mt-2">15-30 Min. Anfahrt • Festpreis-Garantie</p>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;