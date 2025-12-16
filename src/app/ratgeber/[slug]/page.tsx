// src/app/ratgeber/[slug]/page.tsx - Makale Detay Sayfası

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRightIcon, BookOpenIcon, ClockIcon, PhoneIcon } from '@heroicons/react/24/outline';

// ✅ articles.ts dosyasından gerekli tüm veriler import ediliyor
import { getArticleContentBySlug, getAllArticleSlugs, ARTICLE_BASE_URL as BASE_URL } from '@/lib/articles'; 

// Next.js'i statik olarak önceden derlemeye zorlar
export const dynamic = 'force-static'; 
export const dynamicParams = false; 

// Parametreler için tip tanımı
interface ArticleParams { slug: string; }

// --------------------------------------------------------------------------------
// 1. STATİK PATH OLUŞTURMA (generateStaticParams)
// Next.js'in hangi slug'ları statik olarak derleyeceğini söyler
// --------------------------------------------------------------------------------
export async function generateStaticParams() {
    return getAllArticleSlugs();
}


// --------------------------------------------------------------------------------
// 2. DYNAMISCHE METADATA (Async Metadata)
// --------------------------------------------------------------------------------
export async function generateMetadata({ params }: { params: ArticleParams }): Promise<Metadata> {
    
    // params.slug doğrudan kullanılıyor (Promise hatasını önler)
    const article = getArticleContentBySlug(params.slug);

    if (!article) {
        // next.js bu durumda 404 döndürmez, sadece varsayılan başlığı kullanır
        return { title: 'Seite nicht gefunden' }; 
    }
    
    return {
        title: article.title,
        description: article.description,
        alternates: {
            canonical: `${BASE_URL}/ratgeber/${article.slug}`,
        }
    };
}


// --------------------------------------------------------------------------------
// 3. HAUPTKOMPONENTE (Server Component)
// --------------------------------------------------------------------------------
export default async function ArticlePage({ params }: { params: ArticleParams }) {
    
    // params.slug doğrudan kullanılıyor (Promise hatasını önler)
    const article = getArticleContentBySlug(params.slug);

    if (!article) {
        notFound(); // Bileşen içinde 404 döndürmek için
    }
    
    const contactNumber = '0177 3977646';
    
    // Schema Markup'lar... (Önceki haliyle aynı, hatasız)
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Startseite", "item": BASE_URL },
            { "@type": "ListItem", "position": 2, "name": "Ratgeber", "item": `${BASE_URL}/ratgeber` },
            { "@type": "ListItem", "position": 3, "name": article.title }
        ]
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": article.title,
        "description": article.description,
        "image": {
            "@type": "ImageObject",
            "url": article.imageUrl,
            "width": 1200, 
            "height": 675, 
        },
        "author": { "@type": "Organization", "name": "Schlüsselmann" },
        "publisher": {
            "@type": "Organization",
            "name": "Schlüsselmann",
            "logo": { "@type": "ImageObject", "url": `${BASE_URL}/logo.png`, "width": 600, "height": 60 }
        },
        "datePublished": article.datePublished,
        "dateModified": article.dateModified,
        "mainEntityOfPage": { "@type": "WebPage", "@id": `${BASE_URL}/ratgeber/${article.slug}` }
    };

    return (
        <main className="container mx-auto px-4 py-12 max-w-4xl">
            
            {/* Schema Markup'lar */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            {/* Breadcrumb Görseli */}
            <nav className="text-sm font-medium text-gray-500 mb-6" aria-label="Breadcrumb">
                <ol className="list-none p-0 inline-flex items-center space-x-2">
                    <li className="flex items-center">
                        <Link href="/" className="hover:text-gray-700">Startseite</Link>
                    </li>
                    <li className="flex items-center">
                        <ChevronRightIcon className="h-4 w-4 text-gray-400 mx-2" />
                        <Link href="/ratgeber" className="hover:text-gray-700">Ratgeber</Link>
                    </li>
                    <li className="flex items-center text-gray-900 truncate max-w-xs">
                        <ChevronRightIcon className="h-4 w-4 text-gray-400 mx-2" />
                        <span className="font-semibold">{article.title}</span>
                    </li>
                </ol>
            </nav>

            {/* Başlık ve Meta Bilgileri */}
            <header className="mb-8">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight border-b pb-3">{article.title}</h1>
                <div className="flex items-center text-sm text-gray-600 space-x-4">
                    <div className="flex items-center">
                        <BookOpenIcon className="h-5 w-5 mr-1 text-blue-600" />
                        <span>Experten-Wissen</span>
                    </div>
                    <div className="flex items-center">
                        <ClockIcon className="h-5 w-5 mr-1 text-blue-600" />
                        <span>{article.readTime}</span>
                    </div>
                </div>
            </header>
            
            {/* Güvenlik Notu ve Bilgi Kutusu */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8 text-sm text-yellow-800">
                <strong>Wichtig:</strong> Bei akuten Notfällen rufen Sie uns direkt unter {process.env.NEXT_PUBLIC_GLOBAL_TELEFON || '0177 3977646'} an. Dieser Artikel dient nur der Information.
            </div>

            {/* Makale içeriği */}
            <article 
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed" 
                dangerouslySetInnerHTML={{ __html: article.content }} 
            />

            {/* Acil Durum CTA */}
            <div className="mt-12 p-8 bg-blue-50 border-l-4 border-blue-500 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Im Notfall sofort Hilfe!</h3>
                <p className="text-gray-600 mb-4">Brauchen Sie jetzt einen Schlüsseldienst? Rufen Sie uns Tag und Nacht an.</p>
                <a 
                    href={`tel:${contactNumber.replace(/\s/g, '')}`} 
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
                >
                    <PhoneIcon className="h-5 w-5 mr-2" />
                    24/7 Notruf: {contactNumber}
                </a>
            </div>

            {/* Diğer linkler */}
            <div className="mt-12 text-center">
                <Link href="/ratgeber" className="text-blue-600 font-semibold hover:underline">
                    &larr; Zurück zur Ratgeber-Übersicht
                </Link>
            </div>
        </main>
    );
}