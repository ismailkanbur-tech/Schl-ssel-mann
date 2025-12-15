export interface Town {
  slug: string;
  name: string;
  notdienstTelefon: string;
  metaDescription: string;
}

export interface City {
  slug: string;
  name: string;
  metaDescription: string;
  colorClass: string;       // Tailwind Farbe (z.B. "text-red-600")
  defaultPrice: string;     // Stadtspezifischer Startpreis (z.B. "ab 49€")
  telefon: string;          // Stadtweite Telefonnummer
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
    telefon: '089-111111',
    towns: [
      {
        slug: 'muenchen-city',
        name: 'München Zentrum',
        notdienstTelefon: '089-111111',
        metaDescription:
          'Notfallservice für München Zentrum: Soforthilfe bei Auto- und Türschlüsseln.',
      },
      {
        slug: 'pasing',
        name: 'Pasing',
        notdienstTelefon: '089-111111',
        metaDescription:
          '24h Schlüsselnotdienst in München-Pasing. Mobile Schlüsselprogrammierung direkt vor Ort.',
      },
      {
        slug: 'sendling',
        name: 'Sendling',
        notdienstTelefon: '089-111111',
        metaDescription:
          'Schlüsseldienst für München-Sendling: Schnelle Türöffnung und Autoschlüssel-Service.',
      },
      {
        slug: 'schwabing',
        name: 'Schwabing',
        notdienstTelefon: '089-111111',
        metaDescription:
          'Ihr Schlüsselnotdienst in München-Schwabing. Wir sind in wenigen Minuten bei Ihnen.',
      },
      {
        slug: 'haidhausen',
        name: 'Haidhausen',
        notdienstTelefon: '089-111111',
        metaDescription:
          'Schlüsseldienst München-Haidhausen: Transparente Preise und schnelle Hilfe vor Ort.',
      },
      {
        slug: 'neuhausen',
        name: 'Neuhausen',
        notdienstTelefon: '089-111111',
        metaDescription:
          '24h Schlüsselnotdienst in München-Neuhausen. Soforthilfe bei Tür- und Autoschlüsseln.',
      },
      {
        slug: 'garching',
        name: 'Garching',
        notdienstTelefon: '089-111111',
        metaDescription:
          'Schlüsselnotdienst Garching: Schneller Service für Studenten, Forscher und Anwohner.',
      },
      {
        slug: 'unterfoehring',
        name: 'Unterföhring',
        notdienstTelefon: '089-111111',
        metaDescription:
          'Autoschlüssel verloren in Unterföhring? Wir helfen 24/7 – direkt vor Ort.',
      },
      {
        slug: 'frankfurt-strasse',
        name: 'Frankfurter Straße (München)',
        notdienstTelefon: '089-111111',
        metaDescription:
          'Schlüsseldienst im Münchner Osten – Frankfurter Straße und Umgebung.',
      },
      {
        slug: 'moosach',
        name: 'Moosach',
        notdienstTelefon: '089-111111',
        metaDescription:
          '24h Schlüsselhilfe in Moosach: Schnelle Türöffnung und mobile Schlüsselnachfertigung.',
      },
      {
        slug: 'ramersdorf',
        name: 'Ramersdorf',
        notdienstTelefon: '089-111111',
        metaDescription:
          'Schlüsselnotdienst Ramersdorf: Zuverlässig, fair und innerhalb weniger Minuten vor Ort.',
      },
      {
        slug: 'hasenbergl',
        name: 'Hasenbergl',
        notdienstTelefon: '089-111111',
        metaDescription:
          'Türöffnung & Autoschlüssel-Service in Hasenbergl – rund um die Uhr erreichbar.',
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
    telefon: '08131-222222',
    towns: [
      {
        slug: 'dachau-stadt',
        name: 'Dachau Stadt',
        notdienstTelefon: '08131-222222',
        metaDescription:
          'Schlüssel-Experte in Dachau Stadt: Transparente Festpreise und schnelle Hilfe.',
      },
      {
        slug: 'markt-indersdorf',
        name: 'Markt Indersdorf',
        notdienstTelefon: '08131-222222',
        metaDescription:
          '24h Notdienst in Markt Indersdorf. Auto- und Türschlüssel sofort nachgemacht.',
      },
      {
        slug: 'karlsfeld',
        name: 'Karlsfeld',
        notdienstTelefon: '08131-222222',
        metaDescription:
          'Ihr Schlüsselnotdienst in Karlsfeld. Wir sind in wenigen Minuten bei Ihnen.',
      },
      {
        slug: 'altomuenster',
        name: 'Altomünster',
        notdienstTelefon: '08131-222222',
        metaDescription:
          'Schlüsseldienst Altomünster: Schnelle Türöffnung und Autoschlüssel-Service im Landkreis Dachau.',
      },
      {
        slug: 'bernkirchen',
        name: 'Bergkirchen',
        notdienstTelefon: '08131-222222',
        metaDescription:
          'Schlüsselnotdienst Bergkirchen: Zuverlässiger Service im nördlichen Landkreis Dachau.',
      },
      {
        slug: 'schwabhausen',
        name: 'Schwabhausen',
        notdienstTelefon: '08131-222222',
        metaDescription:
          '24h Schlüsselhilfe in Schwabhausen – schnell, sicher und zu fairen Preisen.',
      },
      {
        slug: 'pauli-heim',
        name: 'Pauli-Heim',
        notdienstTelefon: '08131-222222',
        metaDescription:
          'Notdienst im Gewerbegebiet Pauli-Heim: Kompetenter Partner für Firmen und Privatkunden.',
      },
      {
        slug: 'puchheim',
        name: 'Puchheim',
        notdienstTelefon: '08131-222222',
        metaDescription:
          'Schlüsseldienst Puchheim: Schnelle Anfahrt aus Dachau – 24 Stunden erreichbar.',
      },
      {
        slug: 'olching',
        name: 'Olching',
        notdienstTelefon: '08131-222222',
        metaDescription:
          'Türöffnung & Autoschlüssel-Service in Olching – kompetent und preiswert.',
      },
      {
        slug: 'gruenwald',
        name: 'Gröbenzell',
        notdienstTelefon: '08131-222222',
        metaDescription:
          'Schlüsselnotdienst Gröbenzell: Ihr verlässlicher Partner im Landkreis Fürstenfeldbruck – nahe Dachau.',
      },
      {
        slug: 'hebertshausen',
        name: 'Hebertshausen',
        notdienstTelefon: '08131-222222',
        metaDescription:
          '24h Schlüsselhilfe in Hebertshausen – direkt aus Dachau-Stadt erreichbar.',
      },
      {
        slug: 'rohrbach',
        name: 'Rohrbach',
        notdienstTelefon: '08131-222222',
        metaDescription:
          'Schlüsseldienst Rohrbach: Kleine Gemeinde – großer Service. Immer für Sie da.',
      },
    ],
  },
  // ... (München ve Dachau blokları olduğu gibi kalacak)

{
  slug: 'freising',
  name: 'Freising',
  metaDescription:
    'Freising und Umgebung: Ihr mobiler Schlüsselnotdienst mit schneller Anfahrt und Festpreisgarantie.',
  colorClass: 'text-green-600',
  defaultPrice: 'ab 49€',
  telefon: '08161-999999',
  towns: [
    {
      slug: 'freising-stadt',
      name: 'Freising Stadt',
      notdienstTelefon: '08161-999999',
      metaDescription:
        '24h Schlüsselnotdienst in Freising Stadt: Schnelle Türöffnung und Autoschlüssel-Service direkt vor Ort.',
    },
    {
      slug: 'moosburg',
      name: 'Moosburg',
      notdienstTelefon: '08161-999999',
      metaDescription:
        'Schlüsseldienst Moosburg: Zuverlässige Hilfe im Landkreis Freising – 24 Stunden erreichbar.',
    },
    {
      slug: 'hallbergmoos',
      name: 'Hallbergmoos',
      notdienstTelefon: '08161-999999',
      metaDescription:
        'Ihr Schlüsselnotdienst in Hallbergmoos – ideal gelegen für schnelle Hilfe am Flughafen München.',
    },
    {
      slug: 'neufahrn',
      name: 'Neufahrn',
      notdienstTelefon: '08161-999999',
      metaDescription:
        'Schlüsselhilfe in Neufahrn: Schnell, sicher und zu fairen Preisen – rund um die Uhr.',
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