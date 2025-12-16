// src/app/ratgeber/page.tsx - Makale Liste Sayfası

import { Metadata } from 'next';
import Link from 'next/link';
import { getAllArticlesContent, ARTICLE_BASE_URL as BASE_URL } from '@/lib/articles';
import { BookOpenIcon, ClockIcon } from '@heroicons/react/24/outline';

// --------------------------------------------------------------------------------
// METADATA
// --------------------------------------------------------------------------------
export const metadata: Metadata = {
    title: 'Ratgeber: Tipps vom Schlüsseldienst Experten | [Firmenname]',
    description: 'Umfassende Anleitungen und Expertentipps zu Türöffnungen, Einbruchschutz, Autoschlüsseln und Sicherheitstechnik.',
    alternates: {
        canonical: `${BASE_URL}/ratgeber`,
    },
};

// --------------------------------------------------------------------------------
// HAUPTKOMPONENTE
// --------------------------------------------------------------------------------
export default async function RatgeberPage() {
    // Veri çekme (Sıralı olarak gelir)
    const articles = getAllArticlesContent();

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Startseite", "item": BASE_URL },
            { "@type": "ListItem", "position": 2, "name": "Ratgeber" }
        ]
    };

    return (
        <main className="container mx-auto px-4 py-12 max-w-6xl">
            
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
            />

            <header className="text-center mb-12">
                <h1 className="text-5xl font-extrabold text-gray-900 mb-4">Ihr Ratgeber für Sicherheit und Schlösser</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    Expertentipps zu Schlüsselverlust, Einbruchschutz, Tresoren und unserem mobilen Schlüsselnotdienst.
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                    <Link key={article.slug} href={`/ratgeber/${article.slug}`} className="block group">
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full transform transition duration-300 group-hover:shadow-xl group-hover:scale-[1.02]">
                            
                            {/* Makale görseli (örnek placeholder) */}
                            <div className="bg-blue-200 h-48 w-full flex items-center justify-center text-blue-800 text-lg font-bold">
                                [Bild: {article.slug}]
                            </div>
                            
                            <div className="p-6">
                                <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {article.title}
                                </h2>
                                <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                                    {article.description}
                                </p>
                                
                                <div className="flex justify-between items-center text-xs text-gray-500">
                                    <span className="flex items-center">
                                        <ClockIcon className="h-4 w-4 mr-1" />
                                        {article.readTime}
                                    </span>
                                    <span className="flex items-center">
                                        <BookOpenIcon className="h-4 w-4 mr-1" />
                                        Zum Artikel
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>

            <div className="mt-12 text-center border-t pt-8">
                <p className="text-lg text-gray-700">Im Notfall? Rufen Sie uns direkt an: <strong>0177 3977646</strong></p>
            </div>
        </main>
    );
}