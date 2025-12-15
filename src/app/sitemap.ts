// src/app/sitemap.ts

import { MetadataRoute } from 'next';

// ⚠️ Lütfen burayı kendi gerçek domaininizle değiştirin
const BASE_URL = 'https://www.ihredomain.de';

// Makale verilerini simüle eden (ratgeber/page.tsx dosyasından aldığımız)
// bir fonksiyonun taklidi. Gerçek uygulamada burayı DB veya CMS'ten çekmelisiniz.
const getDynamicRatgeberSlugs = () => {
    return [
        { slug: 'tuer-zugezogen-was-tun', lastModified: '2024-12-15T10:30:00+01:00' },
        { slug: 'autoschluessel-nachmachen', lastModified: '2024-12-15T10:30:00+01:00' },
        { slug: 'einbruchschutz-tipps', lastModified: '2024-12-15T10:30:00+01:00' },
        { slug: 'zylinder-wechseln-anleitung', lastModified: '2024-12-15T10:30:00+01:00' },
    ];
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const today = new Date().toISOString().split('T')[0];

    // Dinamik makale yollarını al
    const ratgeberPaths = getDynamicRatgeberSlugs();

    const dynamicUrls = ratgeberPaths.map(article => ({
        url: `${BASE_URL}/ratgeber/${article.slug}`,
        lastModified: article.lastModified,
        changeFrequency: 'weekly' as const,
        priority: 0.8, // Makaleler ana sayfalardan biraz daha düşük öncelikli
    }));

    return [
        // 1. Statik Ana Sayfalar
        {
            url: BASE_URL,
            lastModified: today,
            changeFrequency: 'daily',
            priority: 1.0, // Ana Sayfa en yüksek öncelikli
        },
        {
            url: `${BASE_URL}/leistungen`,
            lastModified: today,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${BASE_URL}/kontakt`,
            lastModified: today,
            changeFrequency: 'yearly',
            priority: 0.7,
        },
        {
            url: `${BASE_URL}/ratgeber`,
            lastModified: today,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        
        // 2. Dinamik Makale Sayfaları
        ...dynamicUrls,
    ];
}