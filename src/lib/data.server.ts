// src/data/cities.ts - Tüm Şehir ve Alt Bölge Verileri

// --------------------------------------------------------------------------------
// INTERFACES (Tipler)
// --------------------------------------------------------------------------------

/**
 * Bir ana şehrin altındaki küçük bölge (kasaba, semt) verilerini temsil eder.
 */
export interface Town {
    slug: string;
    name: string;
    notdienstTelefon: string;
    metaDescription: string;
    /** Sayfa Başlığında kullanılacak benzersiz vurgu (SEO/Pazarlama) */
    uniqueSellingPoint: string; 
}

/**
 * Ana şehir verilerini temsil eder (München, Dachau, Freising).
 */
export interface City {
    slug: string;
    name: string;
    metaDescription: string;
    colorClass: string; // Tailwind rengi (z.B. "text-red-600")
    defaultPrice: string; // Şehre özgü başlangıç fiyatı (z.B. "ab 49€")
    telefon: string; // Şehir çapında kullanılan telefon numarası
    towns: Town[];
}

// --------------------------------------------------------------------------------
// VERİ KAYNAĞI
// --------------------------------------------------------------------------------

const citiesData: City[] = [
    // 1. MÜNCHEN (Ana Şehir)
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
                uniqueSellingPoint: 'Ihr schnellster Service in München Zentrum.', 
            },
            {
                slug: 'pasing',
                name: 'Pasing',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    '24h Schlüsselnotdienst in München-Pasing. Mobile Schlüsselprogrammierung direkt vor Ort.',
                uniqueSellingPoint: 'Mobile Schlüsselprogrammierung in Pasing.', 
            },
            {
                slug: 'sendling',
                name: 'Sendling',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Schlüsseldienst für München-Sendling: Schnelle Türöffnung und Autoschlüssel-Service.',
                uniqueSellingPoint: 'Soforthilfe in München-Sendling.', 
            },
            {
                slug: 'schwabing',
                name: 'Schwabing',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Ihr Schlüsselnotdienst in München-Schwabing. Wir sind in wenigen Minuten bei Ihnen.',
                uniqueSellingPoint: 'In wenigen Minuten in Schwabing vor Ort.', 
            },
            {
                slug: 'haidhausen',
                name: 'Haidhausen',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Schlüsseldienst München-Haidhausen: Transparente Preise und schnelle Hilfe vor Ort.',
                uniqueSellingPoint: 'Faire Festpreise für Haidhausen.', 
            },
            {
                slug: 'neuhausen',
                name: 'Neuhausen',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    '24h Schlüsselnotdienst in München-Neuhausen. Soforthilfe bei Tür- und Autoschlüsseln.',
                uniqueSellingPoint: '24/7 Service in München-Neuhausen.', 
            },
            {
                slug: 'garching',
                name: 'Garching',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Schlüsselnotdienst Garching: Schneller Service für Studenten, Forscher und Anwohner.',
                uniqueSellingPoint: 'Studentenfreundlicher Service in Garching.', 
            },
            {
                slug: 'unterfoehring',
                name: 'Unterföhring',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Autoschlüssel verloren in Unterföhring? Wir helfen 24/7 – direkt vor Ort.',
                uniqueSellingPoint: 'Mobile Autoschlüssel in Unterföhring.', 
            },
            {
                slug: 'frankfurt-strasse',
                name: 'Frankfurter Straße (München)',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Schlüsseldienst im Münchner Osten – Frankfurter Straße und Umgebung.',
                uniqueSellingPoint: 'Ihr lokaler Notdienst in Frankfurter Straße.', 
            },
            {
                slug: 'moosach',
                name: 'Moosach',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    '24h Schlüsselhilfe in Moosach: Schnelle Türöffnung und mobile Schlüsselnachfertigung.',
                uniqueSellingPoint: 'Schlüsselnachfertigung in Moosach.', 
            },
            {
                slug: 'ramersdorf',
                name: 'Ramersdorf',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Schlüsselnotdienst Ramersdorf: Zuverlässig, fair und innerhalb weniger Minuten vor Ort.',
                uniqueSellingPoint: 'Ramersdorf: Schnell und zuverlässig.', 
            },
            {
                slug: 'hasenbergl',
                name: 'Hasenbergl',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Türöffnung & Autoschlüssel-Service in Hasenbergl – rund um die Uhr erreichbar.',
                uniqueSellingPoint: '24h Hilfe im Hasenbergl.', 
            },
        ],
    },
    
    // 2. DACHAU (Ana Şehir)
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
                uniqueSellingPoint: 'Festpreis-Experten in Dachau Stadt.', 
            },
            {
                slug: 'markt-indersdorf',
                name: 'Markt Indersdorf',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    '24h Notdienst in Markt Indersdorf. Auto- und Türschlüssel sofort nachgemacht.',
                uniqueSellingPoint: 'Auto- & Türschlüssel sofort in Markt Indersdorf.', 
            },
            {
                slug: 'karlsfeld',
                name: 'Karlsfeld',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Ihr Schlüsselnotdienst in Karlsfeld. Wir sind in wenigen Minuten bei Ihnen.',
                uniqueSellingPoint: 'In wenigen Minuten in Karlsfeld vor Ort.', 
            },
            {
                slug: 'altomuenster',
                name: 'Altomünster',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Schlüsseldienst Altomünster: Schnelle Türöffnung und Autoschlüssel-Service im Landkreis Dachau.',
                uniqueSellingPoint: 'Umfassender Service in Altomünster.', 
            },
            {
                slug: 'bergkirchen',
                name: 'Bergkirchen',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Schlüsselnotdienst Bergkirchen: Zuverlässiger Service im nördlichen Landkreis Dachau.',
                uniqueSellingPoint: 'Zuverlässig in Bergkirchen und Umgebung.', 
            },
            {
                slug: 'schwabhausen',
                name: 'Schwabhausen',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    '24h Schlüsselhilfe in Schwabhausen – schnell, sicher und zu fairen Preisen.',
                uniqueSellingPoint: '24h Schlüsselhilfe in Schwabhausen.', 
            },
            {
                slug: 'pauli-heim',
                name: 'Pauli-Heim',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Notdienst im Gewerbegebiet Pauli-Heim: Kompetenter Partner für Firmen und Privatkunden.',
                uniqueSellingPoint: 'Partner für Gewerbe in Pauli-Heim.', 
            },
            {
                slug: 'puchheim',
                name: 'Puchheim',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Schlüsseldienst Puchheim: Schnelle Anfahrt aus Dachau – 24 Stunden erreichbar.',
                uniqueSellingPoint: 'Schnelle Anfahrt nach Puchheim.', 
            },
            {
                slug: 'olching',
                name: 'Olching',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Türöffnung & Autoschlüssel-Service in Olching – kompetent und preiswert.',
                uniqueSellingPoint: 'Preiswert in Olching.', 
            },
            {
                slug: 'groebenzell',
                name: 'Gröbenzell',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Schlüsselnotdienst Gröbenzell: Ihr verlässlicher Partner im Landkreis Fürstenfeldbruck – nahe Dachau.',
                uniqueSellingPoint: 'Verlässlicher Partner in Gröbenzell.', 
            },
            {
                slug: 'hebertshausen',
                name: 'Hebertshausen',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    '24h Schlüsselhilfe in Hebertshausen – direkt aus Dachau-Stadt erreichbar.',
                uniqueSellingPoint: '24h Hilfe in Hebertshausen.', 
            },
            {
                slug: 'rohrbach',
                name: 'Rohrbach',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Schlüsseldienst Rohrbach: Kleine Gemeinde – großer Service. Immer für Sie da.',
                uniqueSellingPoint: 'Großer Service in Rohrbach.', 
            },
            {
                slug: 'weichs',
                name: 'Weichs',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Schlüsseldienst Weichs: Schnelle Hilfe bei Schlüsselverlust und Türproblemen.',
                uniqueSellingPoint: 'Direkt erreichbar in Weichs.',
            },
            {
                slug: 'vierkirchen',
                name: 'Vierkirchen',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Schlüsseldienst Vierkirchen: Zuverlässiger Partner für Türöffnungen und Autoschlüssel.',
                uniqueSellingPoint: 'Kompetenter Service in Vierkirchen.',
            },
        ],
    },
    
    // 3. FREISING (Ana Şehir)
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
    
    // 4. FÜRSTENFELDBRUCK (Ana Şehir)
    {
        slug: 'fuerstenfeldbruck',
        name: 'Fürstenfeldbruck',
        metaDescription:
            'Schlüsseldienst Fürstenfeldbruck und Umgebung: 24/7 Soforthilfe mit transparenter Festpreis-Garantie und schneller Anfahrt.',
        colorClass: 'text-blue-600', 
        defaultPrice: 'ab 49€',
        telefon: '0177 3977646',
        towns: [
            {
                slug: 'fuerstenfeldbruck-stadt',
                name: 'Fürstenfeldbruck Stadt',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    '24h Schlüsselnotdienst in Fürstenfeldbruck Stadt: Schnelle Türöffnung und Autoschlüssel-Service direkt vor Ort.',
                uniqueSellingPoint: 'Soforthilfe im Zentrum von Fürstenfeldbruck – Tag und Nacht erreichbar.',
            },
            {
                slug: 'olching',
                name: 'Olching',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Türöffnung & Autoschlüssel-Service in Olching – kompetent, preiswert und zuverlässig.',
                uniqueSellingPoint: 'Preiswerte Türöffnungen und mobile Schlüsselhilfe in Olching.',
            },
            {
                slug: 'groebenzell',
                name: 'Gröbenzell',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Schlüsselnotdienst Gröbenzell: Ihr verlässlicher Partner im Landkreis Fürstenfeldbruck – schnelle Hilfe vor Ort.',
                uniqueSellingPoint: 'Verlässlicher 24h Service für Gröbenzell und Umgebung.',
            },
            {
                slug: 'maisach',
                name: 'Maisach',
                notdienstTelefon: '0177 3977646',
                metaDescription:
                    'Schlüsseldienst Maisach: Schnelle Hilfe bei Tür- und Autoschlüsselproblemen im Landkreis Fürstenfeldbruck.',
                uniqueSellingPoint: 'Direkt vor Ort in Maisach – schnelle Türöffnung ohne Schäden.',
            },
        ],
    },
];

// --------------------------------------------------------------------------------
// FONKSİYONLAR (Veri Çekme Metotları)
// --------------------------------------------------------------------------------

/**
 * Tüm ana şehir verilerini (alt kasabalar dahil) döndürür.
 */
export function getAllCities(): City[] {
    return citiesData;
}

/**
 * Belirli bir citySlug'a ait City verilerini döndürür.
 * @param citySlug - Ana şehrin slug'ı (örnek: 'muenchen')
 */
export function getCityData(citySlug: string): City | undefined {
    return citiesData.find(city => city.slug === citySlug);
}

/**
 * Belirli bir citySlug içindeki townSlug'a ait Town verilerini döndürür.
 * @param citySlug - Ana şehrin slug'ı (örnek: 'dachau')
 * @param townSlug - Alt bölgenin slug'ı (örnek: 'karlsfeld')
 */
export function getTownData(citySlug: string, townSlug: string): Town | undefined {
    const city = getCityData(citySlug);
    if (!city) return undefined;
    return city.towns.find(town => town.slug === townSlug);
}