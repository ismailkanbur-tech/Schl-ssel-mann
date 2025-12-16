module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/lib/data.server.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/data/cities.ts - Tüm Şehir ve Alt Bölge Verileri
// --------------------------------------------------------------------------------
// INTERFACES (Tipler)
// --------------------------------------------------------------------------------
/**
 * Bir ana şehrin altındaki küçük bölge (kasaba, semt) verilerini temsil eder.
 */ __turbopack_context__.s([
    "getAllCities",
    ()=>getAllCities,
    "getCityData",
    ()=>getCityData,
    "getTownData",
    ()=>getTownData
]);
// --------------------------------------------------------------------------------
// VERİ KAYNAĞI
// --------------------------------------------------------------------------------
const citiesData = [
    // 1. MÜNCHEN (Ana Şehir)
    {
        slug: 'muenchen',
        name: 'München',
        metaDescription: 'München und Umgebung: Ihr 24/7 Autoschlüsseldienst. Schnelle Anfahrt, faire Preise.',
        colorClass: 'text-red-600',
        defaultPrice: 'ab 59€',
        telefon: '0177 3977646',
        towns: [
            {
                slug: 'muenchen-city',
                name: 'München Zentrum',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Notfallservice für München Zentrum: Soforthilfe bei Auto- und Türschlüsseln.',
                uniqueSellingPoint: 'Ihr schnellster Service in München Zentrum.'
            },
            {
                slug: 'pasing',
                name: 'Pasing',
                notdienstTelefon: '0177 3977646',
                metaDescription: '24h Schlüsselnotdienst in München-Pasing. Mobile Schlüsselprogrammierung direkt vor Ort.',
                uniqueSellingPoint: 'Mobile Schlüsselprogrammierung in Pasing.'
            },
            {
                slug: 'sendling',
                name: 'Sendling',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Schlüsseldienst für München-Sendling: Schnelle Türöffnung und Autoschlüssel-Service.',
                uniqueSellingPoint: 'Soforthilfe in München-Sendling.'
            },
            {
                slug: 'schwabing',
                name: 'Schwabing',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Ihr Schlüsselnotdienst in München-Schwabing. Wir sind in wenigen Minuten bei Ihnen.',
                uniqueSellingPoint: 'In wenigen Minuten in Schwabing vor Ort.'
            },
            {
                slug: 'haidhausen',
                name: 'Haidhausen',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Schlüsseldienst München-Haidhausen: Transparente Preise und schnelle Hilfe vor Ort.',
                uniqueSellingPoint: 'Faire Festpreise für Haidhausen.'
            },
            {
                slug: 'neuhausen',
                name: 'Neuhausen',
                notdienstTelefon: '0177 3977646',
                metaDescription: '24h Schlüsselnotdienst in München-Neuhausen. Soforthilfe bei Tür- und Autoschlüsseln.',
                uniqueSellingPoint: '24/7 Service in München-Neuhausen.'
            },
            {
                slug: 'garching',
                name: 'Garching',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Schlüsselnotdienst Garching: Schneller Service für Studenten, Forscher und Anwohner.',
                uniqueSellingPoint: 'Studentenfreundlicher Service in Garching.'
            },
            {
                slug: 'unterfoehring',
                name: 'Unterföhring',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Autoschlüssel verloren in Unterföhring? Wir helfen 24/7 – direkt vor Ort.',
                uniqueSellingPoint: 'Mobile Autoschlüssel in Unterföhring.'
            },
            {
                slug: 'frankfurt-strasse',
                name: 'Frankfurter Straße (München)',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Schlüsseldienst im Münchner Osten – Frankfurter Straße und Umgebung.',
                uniqueSellingPoint: 'Ihr lokaler Notdienst in Frankfurter Straße.'
            },
            {
                slug: 'moosach',
                name: 'Moosach',
                notdienstTelefon: '0177 3977646',
                metaDescription: '24h Schlüsselhilfe in Moosach: Schnelle Türöffnung und mobile Schlüsselnachfertigung.',
                uniqueSellingPoint: 'Schlüsselnachfertigung in Moosach.'
            },
            {
                slug: 'ramersdorf',
                name: 'Ramersdorf',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Schlüsselnotdienst Ramersdorf: Zuverlässig, fair und innerhalb weniger Minuten vor Ort.',
                uniqueSellingPoint: 'Ramersdorf: Schnell und zuverlässig.'
            },
            {
                slug: 'hasenbergl',
                name: 'Hasenbergl',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Türöffnung & Autoschlüssel-Service in Hasenbergl – rund um die Uhr erreichbar.',
                uniqueSellingPoint: '24h Hilfe im Hasenbergl.'
            }
        ]
    },
    // 2. DACHAU (Ana Şehir)
    {
        slug: 'dachau',
        name: 'Dachau',
        metaDescription: 'Dachau und Umgebung: Ihr mobiler Autoschlüsseldienst. Kurze Anfahrt, professionelle Hilfe.',
        colorClass: 'text-blue-600',
        defaultPrice: 'ab 49€',
        telefon: '0177 3977646',
        towns: [
            {
                slug: 'dachau-stadt',
                name: 'Dachau Stadt',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Schlüssel-Experte in Dachau Stadt: Transparente Festpreise und schnelle Hilfe.',
                uniqueSellingPoint: 'Festpreis-Experten in Dachau Stadt.'
            },
            {
                slug: 'markt-indersdorf',
                name: 'Markt Indersdorf',
                notdienstTelefon: '0177 3977646',
                metaDescription: '24h Notdienst in Markt Indersdorf. Auto- und Türschlüssel sofort nachgemacht.',
                uniqueSellingPoint: 'Auto- & Türschlüssel sofort in Markt Indersdorf.'
            },
            {
                slug: 'karlsfeld',
                name: 'Karlsfeld',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Ihr Schlüsselnotdienst in Karlsfeld. Wir sind in wenigen Minuten bei Ihnen.',
                uniqueSellingPoint: 'In wenigen Minuten in Karlsfeld vor Ort.'
            },
            {
                slug: 'altomuenster',
                name: 'Altomünster',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Schlüsseldienst Altomünster: Schnelle Türöffnung und Autoschlüssel-Service im Landkreis Dachau.',
                uniqueSellingPoint: 'Umfassender Service in Altomünster.'
            },
            {
                slug: 'bergkirchen',
                name: 'Bergkirchen',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Schlüsselnotdienst Bergkirchen: Zuverlässiger Service im nördlichen Landkreis Dachau.',
                uniqueSellingPoint: 'Zuverlässig in Bergkirchen und Umgebung.'
            },
            {
                slug: 'schwabhausen',
                name: 'Schwabhausen',
                notdienstTelefon: '0177 3977646',
                metaDescription: '24h Schlüsselhilfe in Schwabhausen – schnell, sicher und zu fairen Preisen.',
                uniqueSellingPoint: '24h Schlüsselhilfe in Schwabhausen.'
            },
            {
                slug: 'pauli-heim',
                name: 'Pauli-Heim',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Notdienst im Gewerbegebiet Pauli-Heim: Kompetenter Partner für Firmen und Privatkunden.',
                uniqueSellingPoint: 'Partner für Gewerbe in Pauli-Heim.'
            },
            {
                slug: 'puchheim',
                name: 'Puchheim',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Schlüsseldienst Puchheim: Schnelle Anfahrt aus Dachau – 24 Stunden erreichbar.',
                uniqueSellingPoint: 'Schnelle Anfahrt nach Puchheim.'
            },
            {
                slug: 'olching',
                name: 'Olching',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Türöffnung & Autoschlüssel-Service in Olching – kompetent und preiswert.',
                uniqueSellingPoint: 'Preiswert in Olching.'
            },
            {
                slug: 'groebenzell',
                name: 'Gröbenzell',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Schlüsselnotdienst Gröbenzell: Ihr verlässlicher Partner im Landkreis Fürstenfeldbruck – nahe Dachau.',
                uniqueSellingPoint: 'Verlässlicher Partner in Gröbenzell.'
            },
            {
                slug: 'hebertshausen',
                name: 'Hebertshausen',
                notdienstTelefon: '0177 3977646',
                metaDescription: '24h Schlüsselhilfe in Hebertshausen – direkt aus Dachau-Stadt erreichbar.',
                uniqueSellingPoint: '24h Hilfe in Hebertshausen.'
            },
            {
                slug: 'rohrbach',
                name: 'Rohrbach',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Schlüsseldienst Rohrbach: Kleine Gemeinde – großer Service. Immer für Sie da.',
                uniqueSellingPoint: 'Großer Service in Rohrbach.'
            },
            {
                slug: 'weichs',
                name: 'Weichs',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Schlüsseldienst Weichs: Schnelle Hilfe bei Schlüsselverlust und Türproblemen.',
                uniqueSellingPoint: 'Direkt erreichbar in Weichs.'
            },
            {
                slug: 'vierkirchen',
                name: 'Vierkirchen',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Schlüsseldienst Vierkirchen: Zuverlässiger Partner für Türöffnungen und Autoschlüssel.',
                uniqueSellingPoint: 'Kompetenter Service in Vierkirchen.'
            }
        ]
    },
    // 3. FREISING (Ana Şehir)
    {
        slug: 'freising',
        name: 'Freising',
        metaDescription: 'Freising und Umgebung: Ihr mobiler Schlüsselnotdienst mit schneller Anfahrt, transparenten Festpreisen und 24/7 Service.',
        colorClass: 'text-gray-900',
        defaultPrice: 'ab 49€',
        telefon: '0177 3977646',
        towns: [
            {
                slug: 'freising-stadt',
                name: 'Freising Stadt',
                notdienstTelefon: '0177 3977646',
                metaDescription: '24h Schlüsselnotdienst in Freising Stadt: Schnelle Türöffnung und Autoschlüssel-Service direkt vor Ort. Ihr lokaler Experte für den Stadtkern.',
                uniqueSellingPoint: 'Nur 15 Min. Anfahrt im Stadtgebiet!'
            },
            {
                slug: 'moosburg',
                name: 'Moosburg',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Schlüsseldienst Moosburg: Zuverlässige Hilfe im Landkreis Freising – 24 Stunden erreichbar. Spezialist für alte und neue Schließanlagen.',
                uniqueSellingPoint: 'Ihr Spezialist für Moosburg und Umgebung.'
            },
            {
                slug: 'hallbergmoos',
                name: 'Hallbergmoos',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Ihr Schlüsselnotdienst in Hallbergmoos – ideal gelegen für schnelle Hilfe am Flughafen München und im Gewerbegebiet.',
                uniqueSellingPoint: 'Schnellster Service nahe dem Flughafen München.'
            },
            {
                slug: 'neufahrn',
                name: 'Neufahrn',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Schlüsselhilfe in Neufahrn bei Freising: Schnell, sicher und zu fairen Preisen – rund um die Uhr. Keine versteckten Kosten.',
                uniqueSellingPoint: 'Festpreisgarantie für alle Neufahrner Ortsteile.'
            }
        ]
    },
    // 4. FÜRSTENFELDBRUCK (Ana Şehir)
    {
        slug: 'fuerstenfeldbruck',
        name: 'Fürstenfeldbruck',
        metaDescription: 'Schlüsseldienst Fürstenfeldbruck und Umgebung: 24/7 Soforthilfe mit transparenter Festpreis-Garantie und schneller Anfahrt.',
        colorClass: 'text-blue-600',
        defaultPrice: 'ab 49€',
        telefon: '0177 3977646',
        towns: [
            {
                slug: 'fuerstenfeldbruck-stadt',
                name: 'Fürstenfeldbruck Stadt',
                notdienstTelefon: '0177 3977646',
                metaDescription: '24h Schlüsselnotdienst in Fürstenfeldbruck Stadt: Schnelle Türöffnung und Autoschlüssel-Service direkt vor Ort.',
                uniqueSellingPoint: 'Soforthilfe im Zentrum von Fürstenfeldbruck – Tag und Nacht erreichbar.'
            },
            {
                slug: 'olching',
                name: 'Olching',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Türöffnung & Autoschlüssel-Service in Olching – kompetent, preiswert und zuverlässig.',
                uniqueSellingPoint: 'Preiswerte Türöffnungen und mobile Schlüsselhilfe in Olching.'
            },
            {
                slug: 'groebenzell',
                name: 'Gröbenzell',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Schlüsselnotdienst Gröbenzell: Ihr verlässlicher Partner im Landkreis Fürstenfeldbruck – schnelle Hilfe vor Ort.',
                uniqueSellingPoint: 'Verlässlicher 24h Service für Gröbenzell und Umgebung.'
            },
            {
                slug: 'maisach',
                name: 'Maisach',
                notdienstTelefon: '0177 3977646',
                metaDescription: 'Schlüsseldienst Maisach: Schnelle Hilfe bei Tür- und Autoschlüsselproblemen im Landkreis Fürstenfeldbruck.',
                uniqueSellingPoint: 'Direkt vor Ort in Maisach – schnelle Türöffnung ohne Schäden.'
            }
        ]
    }
];
function getAllCities() {
    return citiesData;
}
function getCityData(citySlug) {
    return citiesData.find((city)=>city.slug === citySlug);
}
function getTownData(citySlug, townSlug) {
    const city = getCityData(citySlug);
    if (!city) return undefined;
    return city.towns.find((town)=>town.slug === townSlug);
}
}),
"[project]/src/components/ReviewSection.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ReviewSection.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ReviewSection.tsx <module evaluation>", "default");
}),
"[project]/src/components/ReviewSection.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ReviewSection.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ReviewSection.tsx", "default");
}),
"[project]/src/components/ReviewSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReviewSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ReviewSection.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReviewSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ReviewSection.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReviewSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/PriceTeaserSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/PriceTeaserSection.tsx - Metin Taşkınlarını ve Dengesiz Kart Boyutlarını Düzelten Revizyon
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$LinkIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LinkIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/LinkIcon.js [app-rsc] (ecmascript) <export default as LinkIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$KeyIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/KeyIcon.js [app-rsc] (ecmascript) <export default as KeyIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$LockClosedIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LockClosedIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/LockClosedIcon.js [app-rsc] (ecmascript) <export default as LockClosedIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TruckIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__TruckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/TruckIcon.js [app-rsc] (ecmascript) <export default as TruckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
;
// Renk Sabitleri
const PRIMARY_TEXT_COLOR = 'text-blue-600';
const CTA_BG_COLOR = 'bg-gray-900';
const CTA_HOVER_COLOR = 'hover:bg-blue-600';
// Ana Hizmetler ve Başlangıç Fiyatları (Renkler korundu)
const services = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$LockClosedIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LockClosedIcon$3e$__["LockClosedIcon"],
        title: "Türöffnung (zugezogen)",
        price: "ab 49,90 €",
        // Açıklama metni uzatıldı
        desc: "Ihre Tür ist zugefallen, der Schlüssel steckt innen oder Sie haben ihn vergessen? Wir bieten schnelle, schadenfreie und kostengünstige Notöffnung mit unserer garantierten Festpreisstrategie.",
        link: "/leistungen#tuer",
        iconClass: "text-blue-600"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$KeyIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyIcon$3e$__["KeyIcon"],
        title: "Schlüssel nachmachen ",
        price: "ab 19,90 €",
        // Açıklama metni uzatıldı
        desc: "Präzises Kopieren von Standard-Zylinder-, Haus- und Briefkastenschlüsseln. Auch Auto-Transponder Schlüssel duplizieren wir schnell vor Ort.",
        link: "/leistungen#schluessel",
        iconClass: "text-teal-600"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$TruckIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__TruckIcon$3e$__["TruckIcon"],
        title: "Auto Schlüssel Duplikat",
        price: "ab 49,90 €",
        // Açıklama metni uzatıldı
        desc: "Duplizierung und Reparatur von Autoschlüsseln (Transponder & Wegfahrsperre) für fast alle Marken, direkt bei Ihnen vor Ort ohne lange Wartezeiten.",
        link: "/leistungen#auto",
        iconClass: "text-amber-600"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$LinkIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__LinkIcon$3e$__["LinkIcon"],
        title: "Schließanlagen ",
        price: "auf Anfrage",
        // Açıklama metni uzatıldı
        desc: "Wir beraten, planen und montieren moderne Schließanlagen, Sicherheitszylinder und Einbruchschutzmaßnahmen für maximale Sicherheit in Ihrem Zuhause.",
        link: "/leistungen#sicherheit",
        iconClass: "text-red-600"
    }
];
const PriceTeaserSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "mt-16 mb-20",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: PRIMARY_TEXT_COLOR,
                            children: "Transparente Festpreise"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PriceTeaserSection.tsx",
                            lineNumber: 57,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        " für unsere Top-Leistungen"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PriceTeaserSection.tsx",
                    lineNumber: 56,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-600 text-center max-w-3xl mx-auto mb-12",
                    children: "Wir bieten schnelle Soforthilfe in München, Dachau & Freising mit klaren Startpreisen."
                }, void 0, false, {
                    fileName: "[project]/src/components/PriceTeaserSection.tsx",
                    lineNumber: 59,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
                    children: services.map((service, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: service.link,
                            className: "group block p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100 shadow-lg transition duration-300 transform hover:scale-[1.02] hover:shadow-2xl hover:border-blue-600 flex flex-col min-h-[320px]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start space-x-4 mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(service.icon, {
                                            className: `h-8 w-8 ${service.iconClass} flex-shrink-0`
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PriceTeaserSection.tsx",
                                            lineNumber: 73,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-xl font-extrabold text-gray-900 leading-snug",
                                            children: service.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/PriceTeaserSection.tsx",
                                            lineNumber: 74,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/PriceTeaserSection.tsx",
                                    lineNumber: 72,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `text-4xl font-black ${PRIMARY_TEXT_COLOR} mb-4 leading-none`,
                                    children: service.price
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PriceTeaserSection.tsx",
                                    lineNumber: 80,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base text-gray-700 leading-relaxed mb-4 flex-grow",
                                    children: service.desc
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PriceTeaserSection.tsx",
                                    lineNumber: 85,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `text-sm font-bold ${PRIMARY_TEXT_COLOR} hover:underline flex items-center mt-auto transition duration-200`,
                                    children: "Alle Details zur Leistung →"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/PriceTeaserSection.tsx",
                                    lineNumber: 90,
                                    columnNumber: 29
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/PriceTeaserSection.tsx",
                            lineNumber: 66,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/src/components/PriceTeaserSection.tsx",
                    lineNumber: 64,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-14",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg text-gray-700 font-medium mb-4",
                            children: "Brauchen Sie sofort Hilfe oder haben Sie Fragen zu den Preisen? Rufen Sie uns direkt an!"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PriceTeaserSection.tsx",
                            lineNumber: 99,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/leistungen",
                            className: `inline-flex items-center px-10 py-4 ${CTA_BG_COLOR} text-white font-bold rounded-full shadow-lg ${CTA_HOVER_COLOR} transition-colors duration-300 uppercase tracking-wider text-lg`,
                            children: "Alle Schlüssel-Services im Detail ansehen"
                        }, void 0, false, {
                            fileName: "[project]/src/components/PriceTeaserSection.tsx",
                            lineNumber: 102,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/PriceTeaserSection.tsx",
                    lineNumber: 98,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/PriceTeaserSection.tsx",
            lineNumber: 54,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/PriceTeaserSection.tsx",
        lineNumber: 53,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = PriceTeaserSection;
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/page.tsx - SVG Yok, Hata Yapmayacak Tailwind Sınıfları Kullanıldı
__turbopack_context__.s([
    "default",
    ()=>HomePage,
    "dynamic",
    ()=>dynamic,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingOffice2Icon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingOffice2Icon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/BuildingOffice2Icon.js [app-rsc] (ecmascript) <export default as BuildingOffice2Icon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PhoneIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/PhoneIcon.js [app-rsc] (ecmascript) <export default as PhoneIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShieldCheckIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ShieldCheckIcon.js [app-rsc] (ecmascript) <export default as ShieldCheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ClockIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ClockIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ClockIcon.js [app-rsc] (ecmascript) <export default as ClockIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ChatBubbleLeftRightIcon.js [app-rsc] (ecmascript) <export default as ChatBubbleLeftRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$StarIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__StarIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/StarIcon.js [app-rsc] (ecmascript) <export default as StarIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MapPinIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/MapPinIcon.js [app-rsc] (ecmascript) <export default as MapPinIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowLongRightIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLongRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ArrowLongRightIcon.js [app-rsc] (ecmascript) <export default as ArrowLongRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReviewSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ReviewSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PriceTeaserSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/PriceTeaserSection.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
// Sabitler (Korunmuştur)
const BASE_URL = 'https://ihre-schluesseldienst-seite.de';
const COMPANY_NAME = 'Schlüsselmann';
const COMPANY_LOGO_URL = `${BASE_URL}/images/logo.png`;
const AVERAGE_RATING = 5.0;
const REVIEW_COUNT = 110;
const dynamic = 'force-static';
// ---
// Güvenli USP Veri Yapısı (Dinamik Renkler Statik Sınıf Adlarına Çevrildi)
const USPs = [
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShieldCheckIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheckIcon$3e$__["ShieldCheckIcon"],
        title: "Festpreis-Garantie",
        desc: "Volle Kostentransparenz ohne versteckte Gebühren. Was wir sagen, gilt.",
        iconClass: "text-blue-600",
        textClass: "text-blue-800",
        bgClass: "bg-blue-50"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ClockIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ClockIcon$3e$__["ClockIcon"],
        title: "Schnelle Anfahrt",
        desc: "In 15–30 Minuten bei Ihnen vor Ort dank lokaler Techniker.",
        iconClass: "text-emerald-600",
        textClass: "text-emerald-800",
        bgClass: "bg-emerald-50"
    },
    {
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MapPinIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinIcon$3e$__["MapPinIcon"],
        title: "24/7 Erreichbar",
        desc: "Tag und Nacht, an 365 Tagen im Jahr, auch an Feiertagen.",
        iconClass: "text-violet-600",
        textClass: "text-violet-800",
        bgClass: "bg-violet-50"
    }
];
const metadata = {
    title: 'Schlüsseldienst: 24/7 Notdienst in München, Dachau & Freising',
    description: 'Ihr lokaler Schlüsseldienst für München, Dachau und Freising. Schnelle Türöffnung, Auto Schlüssel Service, Festpreisgarantie – 24/7 erreichbar.'
};
function HomePage() {
    const cities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllCities"])();
    // Sabitler (Korunmuştur)
    const defaultPrice = 'ab 49€';
    const defaultTelefon = '0177 3977646';
    // ----------------------------------------------------------------------
    // ✅ Schema Markup (Korunmuştur)
    // ----------------------------------------------------------------------
    const localBusinessSchema = {
        // ... (Schema içeriği korunmuştur)
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": COMPANY_NAME,
        "image": COMPANY_LOGO_URL,
        "url": BASE_URL,
        "telephone": defaultTelefon,
        "priceRange": "€",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Kopernikusstraße 6",
            "addressLocality": "Dachau",
            "postalCode": "85221",
            "addressCountry": "DE"
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
            }
        ],
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": AVERAGE_RATING,
            "reviewCount": REVIEW_COUNT
        },
        "parentOrganization": {
            "@type": "Organization",
            "name": COMPANY_NAME,
            "logo": COMPANY_LOGO_URL,
            "url": BASE_URL
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container mx-auto px-4 py-8 md:py-16",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(localBusinessSchema)
                }
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 116,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "relative mb-16 overflow-hidden rounded-3xl p-6 md:p-16 lg:p-20 bg-gray-900 text-white shadow-2xl border border-gray-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-10 bg-gradient-to-br from-indigo-800 to-blue-900"
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 130,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 text-center max-w-4xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-center gap-2 text-xs md:text-sm font-medium mb-6 bg-yellow-400/90 backdrop-blur-sm rounded-full p-1 md:p-2 text-gray-900 max-w-full mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-white px-3 py-1 rounded-full flex items-center gap-2 font-black flex-shrink-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ClockIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ClockIcon$3e$__["ClockIcon"], {
                                                className: "h-4 w-4 text-red-600"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 137,
                                                columnNumber: 33
                                            }, this),
                                            " 24/7 Notdienst"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center font-semibold text-xs md:text-sm flex-shrink-0 px-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$StarIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__StarIcon$3e$__["StarIcon"], {
                                                className: "h-4 w-4 fill-gray-900 mr-1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 141,
                                                columnNumber: 33
                                            }, this),
                                            AVERAGE_RATING,
                                            " / 5.0 (",
                                            REVIEW_COUNT,
                                            " Bewertungen)"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 140,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 135,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl sm:text-4xl md:text-6xl font-black mb-6 leading-snug tracking-tight",
                                children: [
                                    "Ihr",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-yellow-400 break-words",
                                        children: [
                                            " ",
                                            "Schlüsseldienst"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: "hidden md:inline"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 153,
                                        columnNumber: 29
                                    }, this),
                                    "in München, Dachau & Freising"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 148,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-base md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        className: "font-semibold text-white",
                                        children: "„15–30 Min. Schlüsselhilfe sofort!“"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 159,
                                        columnNumber: 29
                                    }, this),
                                    " Tür & Auto!"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 158,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `tel:${defaultTelefon.replace(/-/g, '')}`,
                                className: "inline-flex flex-col sm:flex-row items-center justify-center px-6 py-3 sm:px-10 sm:py-4 text-lg md:text-xl bg-red-600 text-white font-black rounded-full shadow-2xl transition duration-300 hover:bg-red-700 hover:scale-[1.03] transform",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center mb-1 sm:mb-0",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PhoneIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneIcon$3e$__["PhoneIcon"], {
                                                className: "h-6 w-6 mr-2"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 168,
                                                columnNumber: 33
                                            }, this),
                                            " Jetzt Sofort Anrufen:"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 167,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xl sm:ml-2 tracking-wider",
                                        children: defaultTelefon
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 170,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 163,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap justify-center gap-4 mt-8",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-yellow-400 font-bold text-base border-b-2 border-red-600",
                                        children: [
                                            defaultPrice,
                                            " Türöffnung Festpreis"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 177,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-gray-400 text-base flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ShieldCheckIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheckIcon$3e$__["ShieldCheckIcon"], {
                                                className: "h-5 w-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 181,
                                                columnNumber: 33
                                            }, this),
                                            " 100% Transparent"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 180,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 176,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 132,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 127,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-16 rounded-2xl bg-blue-50 border border-blue-100 p-6 md:p-8 shadow-sm hover:shadow-lg transition-shadow duration-300",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col md:flex-row items-center justify-between gap-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 text-center md:text-left",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-gray-900 mb-2",
                                    children: "Brauchen Sie jetzt Hilfe?"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 191,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600",
                                    children: "Rufen Sie uns direkt an oder schreiben Sie uns per WhatsApp."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 192,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xl font-extrabold text-blue-700 mt-2",
                                    children: [
                                        defaultPrice,
                                        " Türöffnung"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 193,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 190,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `tel:${defaultTelefon.replace(/-/g, '')}`,
                                    className: "px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 min-w-[180px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PhoneIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneIcon$3e$__["PhoneIcon"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 201,
                                            columnNumber: 29
                                        }, this),
                                        defaultTelefon
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://wa.me/491234567890",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "px-6 py-3 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 transition-colors duration-200 flex items-center justify-center gap-2 min-w-[180px]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChatBubbleLeftRightIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChatBubbleLeftRightIcon$3e$__["ChatBubbleLeftRightIcon"], {
                                            className: "h-5 w-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 211,
                                            columnNumber: 29
                                        }, this),
                                        "Chat starten"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 205,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 196,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 189,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 188,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "my-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                    children: USPs.map((usp, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            // Dinamik Gradient yerine düz bgClass kullanıldı
                            className: `group p-8 rounded-2xl shadow-xl border border-gray-100 bg-white hover:shadow-2xl transition-all duration-300 transform hover:translate-y-[-4px] ${usp.bgClass}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "inline-flex items-center justify-center p-3 rounded-xl bg-white shadow-inner mb-4 group-hover:scale-110 transition-transform duration-300",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(usp.icon, {
                                        className: `h-8 w-8 ${usp.iconClass}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 230,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 228,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: `font-extrabold text-xl mb-3 ${usp.textClass}`,
                                    children: usp.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 233,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-700 text-base leading-relaxed",
                                    children: usp.desc
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 237,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, idx, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 223,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 221,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 220,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$PriceTeaserSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 245,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-20 mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-extrabold text-gray-900 text-center mb-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MapPinIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinIcon$3e$__["MapPinIcon"], {
                                className: "h-8 w-8 inline mr-2 text-blue-600"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 250,
                                columnNumber: 21
                            }, this),
                            " Wählen Sie Ihren ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-blue-600",
                                children: "Standort"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 250,
                                columnNumber: 99
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 249,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
                        children: cities.map((city)=>{
                            const isMuenchen = city.slug === 'muenchen';
                            // Tam statik stringler (Hata önleyici)
                            const cityColorClass = isMuenchen ? 'text-red-700' : city.slug === 'dachau' ? 'text-blue-700' : 'text-emerald-700';
                            const linkHoverBg = isMuenchen ? 'hover:bg-red-50' : city.slug === 'dachau' ? 'hover:bg-blue-50' : 'hover:bg-emerald-50';
                            const arrowHoverClass = isMuenchen ? 'text-red-700' : city.slug === 'dachau' ? 'text-blue-700' : 'text-emerald-700';
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/${city.slug}`,
                                className: `group flex items-center p-5 border-2 border-gray-200 rounded-xl shadow-md transition duration-300 ${linkHoverBg} hover:shadow-xl transform hover:scale-[1.01]`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BuildingOffice2Icon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BuildingOffice2Icon$3e$__["BuildingOffice2Icon"], {
                                        className: `h-7 w-7 mr-4 flex-shrink-0 ${cityColorClass}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 274,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: `text-xl font-bold mb-0.5 ${cityColorClass}`,
                                                children: [
                                                    "Schlüsseldienst ",
                                                    city.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 278,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 text-sm",
                                                children: [
                                                    "Soforthilfe in ",
                                                    city.name,
                                                    " und Umgebung."
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 281,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 277,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowLongRightIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLongRightIcon$3e$__["ArrowLongRightIcon"], {
                                        className: `h-6 w-6 ml-4 text-gray-400 group-hover:${arrowHoverClass} transition-transform group-hover:translate-x-1`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 285,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, city.slug, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 269,
                                columnNumber: 29
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 253,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mt-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/regionen",
                            className: "inline-flex items-center text-lg font-semibold text-blue-600 hover:text-blue-800 transition duration-200",
                            children: "Alle weiteren Einsatzgebiete ansehen →"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 293,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 292,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 248,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ReviewSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 303,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-20 text-center pb-12 pt-8 border-t border-gray-100",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-base text-gray-700 max-w-4xl mx-auto leading-relaxed",
                    children: [
                        "Wir sind Ihr zuverlässiger Partner in ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold",
                            children: "München, Dachau und Freising"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 308,
                            columnNumber: 59
                        }, this),
                        ". Mit lokalem Know-how, schneller Anfahrt und transparenten Preisen stehen wir Ihnen 24/7 zur Seite. Ihre Sicherheit – unser Versprechen."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 307,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 306,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 113,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__75092aac._.js.map