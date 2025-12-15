'use client';

import Link from 'next/link';
import {
  PhoneIcon,
  ClockIcon,
  ShieldCheckIcon,
  UserIcon,
  MapPinIcon,
  ListBulletIcon,
  Bars3Icon,
  XMarkIcon,
  ListBulletIcon as GuideIcon, // Rehber için farklı bir ikon kullanalım
} from '@heroicons/react/24/solid';
import { useState, useEffect } from 'react';

const GLOBAL_TELEFON = '089-111111';
const PRIMARY_COLOR = 'text-blue-600';
const SECONDARY_COLOR = 'bg-blue-600';

const Header: React.FC = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 100px aşağı kaydırıldığında sticky yap
      setIsSticky(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="shadow-lg">
      {/* Top Bar */}
      <div className={`py-2 text-sm text-white ${SECONDARY_COLOR} hidden md:block`}>
        <div className="container mx-auto px-4 flex justify-center space-x-8">
          <span className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-1 text-yellow-300" />
            24/7 Notdienst (auch Feiertage)
          </span>
          <span className="flex items-center">
            <ShieldCheckIcon className="h-4 w-4 mr-1 text-yellow-300" />
            Festpreis-Garantie
          </span>
          <span className="flex items-center">
            <MapPinIcon className="h-4 w-4 mr-1 text-yellow-300" />
            Lokale Soforthilfe in Ihrer Region
          </span>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`w-full bg-white transition-all duration-300 ${
          isSticky ? 'fixed top-0 z-50 shadow-2xl' : ''
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center text-2xl font-black tracking-wide">
            <span className={PRIMARY_COLOR}>Schlüssel</span>mann
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex space-x-6 text-gray-700 font-medium">
            <Link href="/ueber-uns" className="flex items-center hover:text-blue-600 transition">
              <UserIcon className="h-4 w-4 mr-1" /> Über uns
            </Link>
            <Link href="/leistungen" className="flex items-center hover:text-blue-600 transition">
              <ListBulletIcon className="h-4 w-4 mr-1" /> Unsere Leistungen
            </Link>
            <Link href="/regionen" className="flex items-center hover:text-blue-600 transition">
              <MapPinIcon className="h-4 w-4 mr-1" /> Regionen
            </Link>
            {/* ✅ YENİ EKLENEN LİNK */}
            <Link href="/ratgeber" className="flex items-center hover:text-blue-600 transition">
              <GuideIcon className="h-4 w-4 mr-1" /> Ratgeber
            </Link>
          </div>

          {/* CTA */}
          <a
            href={`tel:${GLOBAL_TELEFON}`}
            className={`hidden md:inline-flex items-center px-4 py-2 ${SECONDARY_COLOR} text-white font-bold rounded-full shadow-md transition duration-300 hover:bg-blue-700 hover:scale-105`}
          >
            <PhoneIcon className="h-5 w-5 mr-2" />
            {isSticky ? 'JETZT ANRUFEN' : GLOBAL_TELEFON}
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-gray-50 border-t border-gray-200 px-4 py-4 space-y-4">
            <Link href="/ueber-uns" className="block text-gray-700 font-medium hover:text-blue-600">
              Über uns
            </Link>
            <Link href="/leistungen" className="block text-gray-700 font-medium hover:text-blue-600">
              Unsere Leistungen
            </Link>
            <Link href="/regionen" className="block text-gray-700 font-medium hover:text-blue-600">
              Regionen
            </Link>
            {/* ✅ YENİ EKLENEN LİNK */}
            <Link href="/ratgeber" className="block text-gray-700 font-medium hover:text-blue-600">
              Ratgeber
            </Link>
            <a
              href={`tel:${GLOBAL_TELEFON}`}
              className="block w-full text-center px-4 py-2 bg-blue-600 text-white font-bold rounded-md shadow-md hover:bg-blue-700"
            >
              Jetzt anrufen
            </a>
          </div>
        )}
      </nav>

      {/* Sticky Header'ın altında kayan içeriğin görünmemesi için boşluk bırakma (sadece yapışıkken) */}
      {isSticky && <div className="h-[72px] md:h-[72px]" />}
    </header>
  );
};

export default Header;