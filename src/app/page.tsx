// src/app/page.tsx 

import { getAllCities } from '@/lib/data.server';
import React from 'react';
import { Metadata } from 'next';
import {
    ShieldCheckIcon,
    ClockIcon,
    MapPinIcon,
    Bars3Icon as DefaultIcon,
} from '@heroicons/react/24/outline'; // Sadece USP Section'da kullanılan ikonlar kaldı

// --- Harici Bileşen Importları ---
import HomeOfferBanner from '@/components/HomeOfferBanner'; // Eğer bu bileşen kullanılacaksa kalsın, aksi takdirde kaldırılabilir.
import ReviewSection from '@/components/ReviewSection';
import PriceTeaserSection from '@/components/PriceTeaserSection'; 
import AutoKeySection from '../components/AutoKeySection'; 

// ✅ YENİ TAŞINAN BİLEŞENLER
import HeroSection from '@/components/HeroSection';
import CtaBanner from '@/components/CtaBanner';
import UspSection from '@/components/UspSection';
import CitySelectionSection from '@/components/CitySelectionSection';
import FaqSection from '@/components/FaqSection';
import SeoFooterText from '@/components/SeoFooterText';


// Sabitler (Korunmuştur)
const BASE_URL = 'https://ihre-schluesseldienst-seite.de';
const COMPANY_NAME = 'Schlüsselmann';
const COMPANY_LOGO_URL = `${BASE_URL}/images/logo.png`;
const AVERAGE_RATING = 5.0;
const REVIEW_COUNT = 110;
export const dynamic = 'force-static';
// ---

// ✅ HATA ÇÖZÜMÜ: FAQ_DATA TANIMI BURADA KALMALI (FaqSection'a prop olarak gönderiliyor)
const FAQ_DATA = [
    // --- GENEL HİZMET VE GÜVENLİK ---
    {
        question: "Wie schnell sind Sie vor Ort und in welchen Gebieten arbeiten Sie?",
        answer: "Wir garantieren eine extrem schnelle Anfahrtszeit von **15 bis 30 Minuten** in München, Dachau, Freising und den umliegenden Landkreisen. Unsere Techniker sind lokal stationiert, um Ihnen sofortige Hilfe zu leisten.",
    },
    {
        question: "Bieten Sie eine Festpreis-Garantie, oder gibt es versteckte Kosten?",
        answer: "Ja, wir bieten eine **transparente Festpreis-Garantie**. Der Preis, den wir Ihnen am Telefon für die Türöffnung nennen, ist der Endpreis (inkl. Anfahrt, zzgl. Material, falls notwendig). Wir arbeiten absolut kostentransparent ohne versteckte Gebühren oder unnötige Zusatzleistungen.",
    },
    {
        question: "Was kostet eine Türöffnung außerhalb der regulären Geschäftszeiten (Nacht/Wochenende)?",
        answer: "Der Grundpreis für eine Türöffnung beginnt **ab 49€**. Außerhalb der regulären Geschäftszeiten, am Wochenende und an Feiertagen fallen gesetzlich geregelte **Notdienstzuschläge** an. Wir informieren Sie über alle Kosten, inklusive Zuschläge, bevor wir losfahren.",
    },
    
    // --- OTO ANAHTAR (NEU!) ---
    {
        question: "Mein Autoschlüssel ist verloren gegangen. Können Sie einen Ersatzschlüssel erstellen?",
        answer: "Absolut. Wir können für die meisten gängigen Marken (VW, Audi, BMW, Mercedes, Ford, etc.) **neue Autoschlüssel erstellen**, selbst wenn Sie keinen funktionierenden Schlüssel mehr besitzen. Wir programmieren den neuen Schlüssel direkt an Ihrem Standort auf die Wegfahrsperre Ihres Fahrzeugs.",
    },
    {
        question: "Wie viel kostet ein neuer Autoschlüssel bei Ihnen im Vergleich zum Vertragshändler?",
        answer: "Unsere Preise für das Nachmachen und Codieren von Autoschlüsseln sind in der Regel **bis zu 70% günstiger** als bei der Markenwerkstatt. Da die Kosten je nach Fahrzeugmodell und Baujahr variieren, rufen Sie uns bitte kurz an, um ein **kostenloses und unverbindliches Festpreisangebot** zu erhalten.",
    },
    {
        question: "Können Sie auch defekte Schlüssel oder Schlüsselgehäuse reparieren?",
        answer: "Ja, das ist oft möglich und günstiger als ein kompletter Neukauf. Wir tauschen defekte Tasten, Batterien, verschlissene Schlüsselbärte oder zerbrochene Gehäuse aus. Bei elektronischen Defekten überprüfen wir den Transponder und die Fernbedienung, um die Funktionsfähigkeit wiederherzustellen.",
    },
    
    // --- GÜVENLİK VE ÖDEME ---
    {
        question: "Wie wird die Tür geöffnet? Entsteht Schaden am Schloss?",
        answer: "In über 95% der Fälle öffnen unsere erfahrenen Monteure zugezogene Türen (nicht abgeschlossen) **vollkommen zerstörungsfrei**. Nur in seltenen Fällen (z.B. bei Schlüsselabbruch oder defektem Zylinder) muss der Zylinder aufgebohrt werden. Wir wählen stets die schonendste Methode.",
    },
    {
        question: "Wie kann ich bezahlen? Akzeptieren Sie Kartenzahlung?",
        answer: "Bei uns können Sie bequem und flexibel bezahlen. Wir akzeptieren **Bargeld**, sowie alle gängigen **Debit- und Kreditkarten** (EC/Maestro, Visa, Mastercard) über unsere mobilen EC-Geräte. Auf Wunsch ist in Ausnahmefällen auch die Zahlung per Rechnung möglich.",
    },
    {
        question: "Sind Ihre Monteure qualifiziert und versichert?",
        answer: "Selbstverständlich. Unsere Monteure sind **IHK-geprüfte Fachkräfte** mit langjähriger Erfahrung im Bereich Sicherheitstechnik. Unser Unternehmen ist umfassend haftpflichtversichert, sodass Sie bei unserer Arbeit vollständig abgesichert sind.",
    },
];
// ✅ USP Veri Yapısı (UspSection'a prop olarak gönderiliyor)
const USPs = [
    {
        icon: ShieldCheckIcon,
        title: "Festpreis-Garantie",
        desc: "Volle Kostentransparenz ohne versteckte Gebühren. Was wir sagen, gilt.",
        iconClass: "text-blue-600",
        textClass: "text-blue-800",
        bgClass: "bg-blue-50",
    },
    {
        icon: ClockIcon,
        title: "Schnelle Anfahrt",
        desc: "In 15–30 Minuten bei Ihnen vor Ort dank lokaler Techniker.",
        iconClass: "text-emerald-600",
        textClass: "text-emerald-800",
        bgClass: "bg-emerald-50",
    },
    {
        icon: MapPinIcon,
        title: "24/7 Erreichbar",
        desc: "Tag und Nacht, an 365 Tagen im Jahr, auch an Feiertagen.",
        iconClass: "text-violet-600",
        textClass: "text-violet-800",
        bgClass: "bg-violet-50",
    }
];


// ✅ SEO Metadata (Korunmuştur)
export const metadata: Metadata = {
    title: 'Schlüsseldienst: 24/7 Notdienst in München, Dachau & Freising',
    description:
        'Ihr lokaler Schlüsseldienst für München, Dachau und Freising. Schnelle Türöffnung, Auto Schlüssel Service, Festpreisgarantie – 24/7 erreichbar.',
};

export default function HomePage() {
    const cities = getAllCities(); 
    
    // Sabitler (Korunmuştur)
    const defaultPrice = 'ab 49€'; 
    const defaultTelefon = '0177 3977646';

    // ----------------------------------------------------------------------
    // ✅ Schema Markup (Korunmuştur)
    // ----------------------------------------------------------------------
    const localBusinessSchema = {
        // ... Schema içeriği (çok uzun olduğu için kısaltıldı)
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": COMPANY_NAME,
        "telephone": defaultTelefon,
        // ... diğer alanlar
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": AVERAGE_RATING,
            "reviewCount": REVIEW_COUNT
        },
    };


    return (
        <main className="container mx-auto px-4 py-8 md:py-16">
            
            {/* Schema Markup */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(localBusinessSchema),
                }}
            />
            
            {/* 1. HERO SECTION (Yeni Bileşen) */}
            <HeroSection 
                defaultTelefon={defaultTelefon}
                defaultPrice={defaultPrice}
                AVERAGE_RATING={AVERAGE_RATING}
                REVIEW_COUNT={REVIEW_COUNT}
            />

            {/* 2. CTA BANNER (Yeni Bileşen) */}
            <CtaBanner 
                defaultTelefon={defaultTelefon}
                defaultPrice={defaultPrice}
            />

            {/* 3. USP SECTION (Yeni Bileşen) */}
            <UspSection 
                usps={USPs}
            />
            
            {/* PriceTeaserSection (Mevcut Bileşen) */}
            <PriceTeaserSection />
            
            {/* AutoKeySection (Mevcut Bileşen) */}
            <div className="mt-20">
                <AutoKeySection defaultTelefon={defaultTelefon} /> 
            </div>
            
            {/* 4. KONUM SEÇİM BÖLÜMÜ (Yeni Bileşen) */}
            <CitySelectionSection 
                cities={cities} // getAllCities() ile gelen veriyi kullanıyor
            />
            
            {/* ReviewSection (Mevcut Bileşen) */}
            <ReviewSection />
            
            {/* FaqSection (Mevcut Bileşen) */}
            <FaqSection
                title="Häufig gestellte Fragen"
                faqs={FAQ_DATA} 
                cityColorClass="text-red-600"
            />
            
            {/* 5. SEO FOOTER TEXT (Yeni Bileşen) */}
            <SeoFooterText />

        </main>
    );
}