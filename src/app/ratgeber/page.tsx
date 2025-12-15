// src/app/ratgeber/page.tsx - Modern Tasarım ve Breadcrumb Schema Eklendi

import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpenIcon, ClockIcon } from '@heroicons/react/24/outline';

// ----------------------------------------------------------------------
// 1. Veri Kaynağı (Ratgeber Makaleleri)
// ----------------------------------------------------------------------

interface Article {
    slug: string;
    title: string;
    description: string; // Kısa açıklama (Teaser)
    readTime: string; // Okuma süresi
}

// Varsayım: Tüm makaleleri çeken fonksiyon
const getAllArticles = (): Article[] => {
    return [
        {
            slug: 'tuer-zugezogen-was-tun',
            title: 'Tür zugezogen: Was tun, wenn ich den Schlüssel vergessen habe?',
            description: 'Dringende Ratschläge für den Fall, dass die Tür zugezogen ist und der Schlüssel innen steckt. So vermeiden Sie unnötige Kosten.',
            readTime: '5 Min. Lesezeit',
        },
        {
            slug: 'autoschluessel-nachmachen',
            title: 'Autoschlüssel nachmachen: Kosten und Dauer des mobilen Service',
            description: 'Alle wichtigen Informationen zu unserem mobilen Autoschlüssel-Service, den Preisen und dem Ablauf.',
            readTime: '7 Min. Lesezeit',
        },
        {
            slug: 'einbruchschutz-tipps',
            title: 'Einbruchschutz: Die besten Tipps für Ihr Zuhause',
            description: 'Experten-Ratschläge zur effektiven Sicherung von Türen und Fenstern gegen Einbruch.',
            readTime: '10 Min. Lesezeit',
        },
        {
            slug: 'zylinder-wechseln-anleitung',
            title: 'Schließzylinder wechseln: Schritt-für-Schritt-Anleitung',
            description: 'Eine einfache Anleitung, wann und wie Sie Ihren Schließzylinder selbst tauschen können.',
            readTime: '4 Min. Lesezeit',
        },
    ];
};

// ----------------------------------------------------------------------
// 2. Metadata (SEO)
// ----------------------------------------------------------------------

export const metadata: Metadata = {
    title: 'Schlüsseldienst Ratgeber & Tipps | Schlüsselmann',
    description: 'Nützliche Anleitungen, Sicherheitstipps und häufig gestellte Fragen rund um Schlüssel, Schlösser und Einbruchschutz.',
};

// ----------------------------------------------------------------------
// 3. Breadcrumb Schema
// ----------------------------------------------------------------------
const BASE_URL = 'https://www.google.com/search?sca_esv=6df4517c094a5336&hl=tr-DE&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E0vGjurU4BbAg9jv938WXi1NUsKEBfTtG936C03WnA-Y6hjApTFFtSeSnUVRH7IFxXqRRyuyzgzw938No-CLWY6v57g8&q=KA+Service+Yorumlar&sa=X&ved=2ahUKEwijxrmppr-RAxXJSfEDHefWOGgQ0bkNegQIKhAE&biw=1366&bih=585&dpr=3'; // BURAYI KENDİ SİTE ADINIZLA DEĞİŞTİRİN

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Startseite",
            "item": BASE_URL
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Ratgeber",
            "item": `${BASE_URL}/ratgeber`
        }
    ]
};

// ----------------------------------------------------------------------
// 4. Ana Bileşen
// ----------------------------------------------------------------------

export default function RatgeberIndexPage() {
    const articles = getAllArticles();

    return (
        <main className="container mx-auto px-4 py-12">
            
            {/* ✅ Breadcrumb Schema Eklendi */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />

            {/* Başlık ve Açıklama */}
            <header className="text-center max-w-3xl mx-auto mb-16">
                <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    <BookOpenIcon className="h-4 w-4" />
                    Expertenwissen
                </div>
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                    Schlüsseldienst Ratgeber & Anleitungen
                </h1>
                <p className="text-lg text-gray-600">
                    Hier finden Sie hilfreiche Tipps und fundiertes Wissen von unseren Experten zu allen Themen rund um Ihre Sicherheit.
                </p>
            </header>

            {/* Makale Listesi (Modern Kart Tasarımı) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                    <Link 
                        key={article.slug} 
                        href={`/ratgeber/${article.slug}`} 
                        className="block bg-white p-6 border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                    >
                        {/* Meta Bilgileri */}
                        <div className="flex items-center text-sm font-medium text-blue-600 mb-3">
                            <ClockIcon className="h-4 w-4 mr-1" />
                            <span>{article.readTime}</span>
                        </div>

                        <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-700 transition">
                            {article.title}
                        </h2>
                        
                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            {article.description}
                        </p>
                        
                        <span className="text-sm font-semibold text-blue-600 group-hover:underline flex items-center">
                            Weiterlesen →
                        </span>
                    </Link>
                ))}
            </div>
            
            {/* CTA Bölümü */}
            <div className="mt-20 p-8 bg-blue-600 rounded-xl text-center shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-3">Haben Sie einen Notfall?</h3>
                <p className="text-blue-100 mb-6">Wir sind 24/7 für Sie erreichbar.</p>
                <a 
                    href={`tel:089111111`} // Telefon numaranızı güncelleyin
                    className="inline-flex items-center px-8 py-3 bg-white text-blue-600 font-bold rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300 text-lg"
                >
                    Sofort anrufen: 089-111111
                </a>
            </div>
            
        </main>
    );
}