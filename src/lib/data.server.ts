// src/data/cities.ts (Önerilen) - Tüm Veriler Tek Bir Yapıda Birleştirildi ve Hata Giderildi

export interface Town {
    slug: string;
    name: string;
    notdienstTelefon: string;
    metaDescription: string;
    // ✅ YENİ: Sayfa Başlığında kullanılacak benzersiz vurgu (SEO ve Pazarlama için önemli)
    uniqueSellingPoint: string; 
}

export interface City {
    slug: string;
    name: string;
    metaDescription: string;
    colorClass: string; // Tailwind Farbe (z.B. "text-red-600")
    defaultPrice: string; // Stadtspezifischer Startpreis (z.B. "ab 49€")
    telefon: string; // Stadtweite Telefonnummer
    towns: Town[];
}

const citiesData: City[] = [
    {
        slug: 'muenchen',
        name: 'München',
        metaDescription:
            'München und Umgebung: Ihr 24/7 Autoschlüsseldienst. Schnelle Anfahrt, faire Preise.',
        colorClass: 'text-red-600',
        defaultPrice: 'ab 59€',
        telefon: '0177 3977646',
        towns: [
            {
                slug: 'muenchen-city',
                name: 'München Zentrum',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Notfallservice für München Zentrum: Soforthilfe bei Auto- und Türschlüsseln.',
                uniqueSellingPoint: 'Ihr schnellster Service in München Zentrum.', // ✅ Eklendi
            },
            {
                slug: 'pasing',
                name: 'Pasing',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    '24h Schlüsselnotdienst in München-Pasing. Mobile Schlüsselprogrammierung direkt vor Ort.',
                uniqueSellingPoint: 'Mobile Schlüsselprogrammierung in Pasing.', // ✅ Eklendi
            },
            {
                slug: 'sendling',
                name: 'Sendling',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Schlüsseldienst für München-Sendling: Schnelle Türöffnung und Autoschlüssel-Service.',
                uniqueSellingPoint: 'Soforthilfe in München-Sendling.', // ✅ Eklendi
            },
            {
                slug: 'schwabing',
                name: 'Schwabing',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Ihr Schlüsselnotdienst in München-Schwabing. Wir sind in wenigen Minuten bei Ihnen.',
                uniqueSellingPoint: 'In wenigen Minuten in Schwabing vor Ort.', // ✅ Eklendi
            },
            {
                slug: 'haidhausen',
                name: 'Haidhausen',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Schlüsseldienst München-Haidhausen: Transparente Preise und schnelle Hilfe vor Ort.',
                uniqueSellingPoint: 'Faire Festpreise für Haidhausen.', // ✅ Eklendi
            },
            {
                slug: 'neuhausen',
                name: 'Neuhausen',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    '24h Schlüsselnotdienst in München-Neuhausen. Soforthilfe bei Tür- und Autoschlüsseln.',
                uniqueSellingPoint: '24/7 Service in München-Neuhausen.', // ✅ Eklendi
            },
            {
                slug: 'garching',
                name: 'Garching',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Schlüsselnotdienst Garching: Schneller Service für Studenten, Forscher und Anwohner.',
                uniqueSellingPoint: 'Studentenfreundlicher Service in Garching.', // ✅ Eklendi
            },
            {
                slug: 'unterfoehring',
                name: 'Unterföhring',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Autoschlüssel verloren in Unterföhring? Wir helfen 24/7 – direkt vor Ort.',
                uniqueSellingPoint: 'Mobile Autoschlüssel in Unterföhring.', // ✅ Eklendi
            },
            {
                slug: 'frankfurt-strasse',
                name: 'Frankfurter Straße (München)',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Schlüsseldienst im Münchner Osten – Frankfurter Straße und Umgebung.',
                uniqueSellingPoint: 'Ihr lokaler Notdienst in Frankfurter Straße.', // ✅ Eklendi
            },
            {
                slug: 'moosach',
                name: 'Moosach',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    '24h Schlüsselhilfe in Moosach: Schnelle Türöffnung und mobile Schlüsselnachfertigung.',
                uniqueSellingPoint: 'Schlüsselnachfertigung in Moosach.', // ✅ Eklendi
            },
            {
                slug: 'ramersdorf',
                name: 'Ramersdorf',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Schlüsselnotdienst Ramersdorf: Zuverlässig, fair und innerhalb weniger Minuten vor Ort.',
                uniqueSellingPoint: 'Ramersdorf: Schnell und zuverlässig.', // ✅ Eklendi
            },
            {
                slug: 'hasenbergl',
                name: 'Hasenbergl',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Türöffnung & Autoschlüssel-Service in Hasenbergl – rund um die Uhr erreichbar.',
                uniqueSellingPoint: '24h Hilfe im Hasenbergl.', // ✅ Eklendi
            },
        ],
    },
    {
        slug: 'dachau',
        name: 'Dachau',
        metaDescription:
            'Dachau und Umgebung: Ihr mobiler Autoschlüsseldienst. Kurze Anfahrt, professionelle Hilfe.',
        colorClass: 'text-blue-600',
        defaultPrice: 'ab 49€',
        telefon: '0177 3977646',
        towns: [
            {
                slug: 'dachau-stadt',
                name: 'Dachau Stadt',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Schlüssel-Experte in Dachau Stadt: Transparente Festpreise und schnelle Hilfe.',
                uniqueSellingPoint: 'Festpreis-Experten in Dachau Stadt.', // ✅ Eklendi
            },
            {
                slug: 'markt-indersdorf',
                name: 'Markt Indersdorf',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    '24h Notdienst in Markt Indersdorf. Auto- und Türschlüssel sofort nachgemacht.',
                uniqueSellingPoint: 'Auto- & Türschlüssel sofort in Markt Indersdorf.', // ✅ Eklendi
            },
            {
                slug: 'karlsfeld',
                name: 'Karlsfeld',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Ihr Schlüsselnotdienst in Karlsfeld. Wir sind in wenigen Minuten bei Ihnen.',
                uniqueSellingPoint: 'In wenigen Minuten in Karlsfeld vor Ort.', // ✅ Eklendi
            },
            {
                slug: 'altomuenster',
                name: 'Altomünster',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Schlüsseldienst Altomünster: Schnelle Türöffnung und Autoschlüssel-Service im Landkreis Dachau.',
                uniqueSellingPoint: 'Umfassender Service in Altomünster.', // ✅ Eklendi
            },
            {
                slug: 'bergkirchen', // Slug'ı düzelttim: 'bernkirchen' yerine 'bergkirchen'
                name: 'Bergkirchen',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Schlüsselnotdienst Bergkirchen: Zuverlässiger Service im nördlichen Landkreis Dachau.',
                uniqueSellingPoint: 'Zuverlässig in Bergkirchen und Umgebung.', // ✅ Eklendi
            },
            {
                slug: 'schwabhausen',
                name: 'Schwabhausen',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    '24h Schlüsselhilfe in Schwabhausen – schnell, sicher und zu fairen Preisen.',
                uniqueSellingPoint: '24h Schlüsselhilfe in Schwabhausen.', // ✅ Eklendi
            },
            {
                slug: 'pauli-heim',
                name: 'Pauli-Heim',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Notdienst im Gewerbegebiet Pauli-Heim: Kompetenter Partner für Firmen und Privatkunden.',
                uniqueSellingPoint: 'Partner für Gewerbe in Pauli-Heim.', // ✅ Eklendi
            },
            {
                slug: 'puchheim',
                name: 'Puchheim',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Schlüsseldienst Puchheim: Schnelle Anfahrt aus Dachau – 24 Stunden erreichbar.',
                uniqueSellingPoint: 'Schnelle Anfahrt nach Puchheim.', // ✅ Eklendi
            },
            {
                slug: 'olching',
                name: 'Olching',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Türöffnung & Autoschlüssel-Service in Olching – kompetent und preiswert.',
                uniqueSellingPoint: 'Preiswert in Olching.', // ✅ Eklendi
            },
            {
                slug: 'groebenzell', // Slug'ı düzelttim: 'gruenwald' yerine 'groebenzell'
                name: 'Gröbenzell',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Schlüsselnotdienst Gröbenzell: Ihr verlässlicher Partner im Landkreis Fürstenfeldbruck – nahe Dachau.',
                uniqueSellingPoint: 'Verlässlicher Partner in Gröbenzell.', // ✅ Eklendi
            },
            {
                slug: 'hebertshausen',
                name: 'Hebertshausen',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    '24h Schlüsselhilfe in Hebertshausen – direkt aus Dachau-Stadt erreichbar.',
                uniqueSellingPoint: '24h Hilfe in Hebertshausen.', // ✅ Eklendi
            },
            {
                slug: 'rohrbach',
                name: 'Rohrbach',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Schlüsseldienst Rohrbach: Kleine Gemeinde – großer Service. Immer für Sie da.',
                uniqueSellingPoint: 'Großer Service in Rohrbach.', // ✅ Eklendi
            },
        ],
    },
    // Freising bloğu, Towns Interface'iyle uyumlu hale getirildi
    {
        slug: 'freising',
        name: 'Freising',
        metaDescription:
            'Freising und Umgebung: Ihr mobiler Schlüsselnotdienst mit schneller Anfahrt, transparenten Festpreisen und 24/7 Service.',
        colorClass: 'text-gray-900',
        defaultPrice: 'ab 49€',
        telefon: '0177 3977646',
        towns: [
            {
                slug: 'freising-stadt',
                name: 'Freising Stadt',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    '24h Schlüsselnotdienst in Freising Stadt: Schnelle Türöffnung und Autoschlüssel-Service direkt vor Ort. Ihr lokaler Experte für den Stadtkern.',
                uniqueSellingPoint: 'Nur 15 Min. Anfahrt im Stadtgebiet!',
            },
            {
                slug: 'moosburg',
                name: 'Moosburg',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Schlüsseldienst Moosburg: Zuverlässige Hilfe im Landkreis Freising – 24 Stunden erreichbar. Spezialist für alte und neue Schließanlagen.',
                uniqueSellingPoint: 'Ihr Spezialist für Moosburg und Umgebung.',
            },
            {
                slug: 'hallbergmoos',
                name: 'Hallbergmoos',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Ihr Schlüsselnotdienst in Hallbergmoos – ideal gelegen für schnelle Hilfe am Flughafen München und im Gewerbegebiet.',
                uniqueSellingPoint: 'Schnellster Service nahe dem Flughafen München.',
            },
            {
                slug: 'neufahrn',
                name: 'Neufahrn',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Schlüsselhilfe in Neufahrn bei Freising: Schnell, sicher und zu fairen Preisen – rund um die Uhr. Keine versteckten Kosten.',
                uniqueSellingPoint: 'Festpreisgarantie für alle Neufahrner Ortsteile.',
            },
        ],
    },
];

/**
 * Tüm ana şehir verilerini (alt kasabalar dahil) döndürür.
 */
export function getAllCities(): City[] {
    return citiesData;
}

/**
 * Belirli bir citySlug'a ait City verilerini döndürür.
 */
export function getCityData(citySlug: string): City | undefined {
    return citiesData.find(city => city.slug === citySlug);
}

/**
 * Belirli bir citySlug içindeki townSlug'a ait Town verilerini döndürür.
 */
export function getTownData(citySlug: string, townSlug: string): Town | undefined {
    const city = getCityData(citySlug);
    if (!city) return undefined;
    return city.towns.find(town => town.slug === townSlug);
}