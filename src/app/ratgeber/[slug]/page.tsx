// src/app/ratgeber/[slug]/page.tsx - Breadcrumb ve Schema Eklendi

import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronRightIcon } from '@heroicons/react/24/outline'; // Breadcrumb için ikon

// KRİTİK AYARLAR: Statik üretimi zorlar ve Dev mode hatasını azaltır.
export const dynamic = 'force-static'; 
export const dynamicParams = false; 

// Varsayım: Makaleleriniz bu fonksiyondan çekiliyor
interface Article {
    slug: string;
    title: string;
    content: string; // HTML içeriği veya Markdown
    metaDescription: string;
    datePublished: string; 
    dateModified: string;  
    imageUrl: string;      
}

// Params tipi tanımı
interface ArticleParams { slug: string; }
interface ArticlePageProps {
    // Next.js Dev Mode'daki Promise sorununa karşı esnek tip
    params: ArticleParams | Promise<ArticleParams>;
}


// Örnek statik veri (Sizin bunu gerçek bir veri kaynağından çekmeniz gerekecek!)
const getArticleBySlug = (slug: string): Article | undefined => {
    const articles: Article[] = [
        {
            slug: 'tuer-zugezogen-was-tun',
            title: 'Tür zugezogen: Was tun, wenn ich den Schlüssel vergessen habe?',
            metaDescription: 'Dringende Ratschläge für den Fall, dass die Tür zugezogen ist und der Schlüssel innen steckt.',
            datePublished: '2024-12-10T09:00:00+01:00',
            dateModified: '2024-12-15T10:30:00+01:00',
            imageUrl: 'https://ihresite.de/images/tuer-zugezogen-hero.jpg', // GERÇEK URL İLE DEĞİŞTİRİN
            content: `
                <p>Wenn die Tür nur zugezogen ist (nicht abgeschlossen), ist die Türöffnung meist einfach und kann beschädigungsfrei in wenigen Sekunden durchgeführt werden. Versuchen Sie niemals, die Tür mit Gewalt oder ungeeigneten Werkzeugen zu öffnen, da dies hohe Schäden am Schloss verursachen kann.</p>
                <h2>1. Ruhe bewahren und den Profi rufen</h2>
                <p>Der wichtigste Schritt ist, ruhig zu bleiben. Rufen Sie sofort unsere 24/7 Notfallnummer an. Wir benötigen nur wenige Angaben (zugezogen oder abgeschlossen?) um Ihnen sofort einen Festpreis nennen zu können.</p>
                <h2 class="text-xl font-bold mt-6">2. Kosten und Festpreis</h2>
                <p>Als lokaler Schlüsseldienst garantieren wir einen Festpreis für Türöffnungen in unserer Region. Fragen Sie immer nach dem Gesamtpreis, bevor der Techniker mit der Arbeit beginnt.</p>
            `,
        },
        {
            slug: 'autoschluessel-nachmachen',
            title: 'Autoschlüssel nachmachen: Kosten und Dauer des mobilen Service',
            metaDescription: 'Alle wichtigen Informationen zu unserem mobilen Autoschlüssel-Service, den Preisen und dem Ablauf.',
            datePublished: '2024-12-05T14:00:00+01:00',
            dateModified: '2024-12-15T10:30:00+01:00',
            imageUrl: 'https://ihresite.de/images/autoschluessel-nachmachen-hero.jpg', // GERÇEK URL İLE DEĞİŞTİRİN
            content: `
                <p>Einen Autoschlüssel beim Händler nachmachen zu lassen, kann teuer und zeitaufwändig sein. Unser mobiler Service kommt direkt zu Ihnen nach Hause oder zum Arbeitsplatz und spart Ihnen Zeit und Geld.</p>
                <h2>Wie lange dauert der Prozess?</h2>
                <p>In den meisten Fällen können wir einen neuen Schlüssel inkl. Programmierung in weniger als 60 Minuten anfertigen. Dank unserer mobilen Werkstatt sind wir flexibel und schnell.</p>
            `,
        },
    ];
    return articles.find(a => a.slug === slug);
};


// --------------------------------------------------------------------------------
// 1. STATİK PATH OLUŞTURMA
// --------------------------------------------------------------------------------
export function generateStaticParams() {
    return [
        { slug: 'tuer-zugezogen-was-tun' },
        { slug: 'autoschluessel-nachmachen' },
    ];
}


// --------------------------------------------------------------------------------
// 2. DYNAMISCHE METADATA (ASYNC VE AWAIT İLE)
// --------------------------------------------------------------------------------
const BASE_URL = 'https://ihresite.de'; 

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
    
    // KRİTİK DÜZELTME: params'ı await ile çözme
    const unwrappedParams = await (params instanceof Promise ? params : Promise.resolve(params));
    const articleSlug = unwrappedParams.slug; 

    const article = getArticleBySlug(articleSlug);
    
    if (!article) {
        return { title: 'Seite nicht gefunden' };
    }
    
    return {
        title: article.title,
        description: article.metaDescription,
        alternates: {
            canonical: `${BASE_URL}/ratgeber/${article.slug}`,
        }
    };
}


// --------------------------------------------------------------------------------
// 3. HAUPTKOMPONENTE (ASYNC VE AWAIT İLE)
// --------------------------------------------------------------------------------
export default async function ArticlePage({ params }: ArticlePageProps) {
    
    // KRİTİK DÜZELTME: params'ı await ile çözme
    const unwrappedParams = await (params instanceof Promise ? params : Promise.resolve(params));
    const articleSlug = unwrappedParams.slug; 

    const article = getArticleBySlug(articleSlug);

    if (!article) {
        notFound();
    }
    
    // Breadcrumb Schema Markup'ı oluştur
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
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": article.title,
            }
        ]
    };

    // Article Schema Markup'ı oluştur
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": article.title,
        "description": article.metaDescription,
        "image": {
            "@type": "ImageObject",
            "url": article.imageUrl,
            "width": 1200, 
            "height": 675, 
        },
        "author": {
            "@type": "Organization",
            "name": "Schlüsselmann", 
        },
        "publisher": {
            "@type": "Organization",
            "name": "Schlüsselmann",
            "logo": {
                "@type": "ImageObject",
                "url": `${BASE_URL}/logo.png`, 
                "width": 600,
                "height": 60,
            }
        },
        "datePublished": article.datePublished,
        "dateModified": article.dateModified,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${BASE_URL}/ratgeber/${article.slug}`
        }
    };

    return (
        <main className="container mx-auto px-4 py-12 max-w-4xl">
            
            {/* Hata önleyici: BASE_URL'yi mutlaka güncelleyin! */}
            {BASE_URL === 'https://ihresite.de' && (
                <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8" role="alert">
                    <strong>ACHTUNG:</strong> Bitte die Konstante <code>BASE_URL</code> (und <code>imageUrl</code>/<code>logo.png</code>) mit Ihrer tatsächlichen Domain aktualisieren!
                </div>
            )}
            
            {/* ✅ Breadcrumb Görseli Eklendi */}
            <nav className="text-sm font-medium text-gray-500 mb-6" aria-label="Breadcrumb">
                <ol className="list-none p-0 inline-flex">
                    <li className="flex items-center">
                        <Link href="/" className="hover:text-gray-700">Startseite</Link>
                        <ChevronRightIcon className="h-4 w-4 mx-2" />
                    </li>
                    <li className="flex items-center">
                        <Link href="/ratgeber" className="hover:text-gray-700">Ratgeber</Link>
                        <ChevronRightIcon className="h-4 w-4 mx-2" />
                    </li>
                    <li className="text-gray-900 truncate max-w-xs">{article.title}</li>
                </ol>
            </nav>

            <h1 className="text-4xl font-extrabold text-gray-900 mb-6 border-b pb-3">{article.title}</h1>
            
            {/* Güvenlik Notu ve Bilgi Kutusu */}
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8 text-sm text-yellow-800">
                <strong>Wichtig:</strong> Bei akuten Notfällen rufen Sie uns direkt unter {process.env.NEXT_PUBLIC_GLOBAL_TELEFON || '089-111111'} an. Dieser Artikel dient nur der Information.
            </div>

            {/* Makale içeriği (Güvenli bir şekilde HTML render edilir) */}
            <article 
                className="prose prose-blue max-w-none text-gray-700 leading-relaxed" 
                dangerouslySetInnerHTML={{ __html: article.content }} 
            />

            {/* ✅ Article Schema Markup Eklendi */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(articleSchema),
                }}
            />

            {/* ✅ BreadcrumbList Schema Markup Eklendi */}
             <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />


            {/* Diğer linkler veya CTA */}
            <div className="mt-12 text-center">
                <Link href="/ratgeber" className="text-blue-600 font-semibold hover:underline">
                    &larr; Zurück zur Ratgeber-Übersicht
                </Link>
            </div>
        </main>
    );
}