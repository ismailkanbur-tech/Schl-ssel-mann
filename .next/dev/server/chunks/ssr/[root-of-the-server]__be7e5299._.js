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
"[project]/src/app/regionen/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/regionen/page.tsx - Modernleştirilmiş Ka Service Versiyonu
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)"); // 👈 Image bileşeni buraya eklendi
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$GlobeAltIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobeAltIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/GlobeAltIcon.js [app-rsc] (ecmascript) <export default as GlobeAltIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PhoneArrowUpRightIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneArrowUpRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/PhoneArrowUpRightIcon.js [app-rsc] (ecmascript) <export default as PhoneArrowUpRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ArrowRightIcon.js [app-rsc] (ecmascript) <export default as ArrowRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.server.ts [app-rsc] (ecmascript)"); // Şehir verilerini çekmek için
;
;
;
;
;
// Marka Sabiti
const COMPANY_NAME = 'Ka Service';
const NOTDIENST_TELEFON = '0177 3977646'; // CTA telefon numarası
const metadata = {
    title: `Alle Einsatzgebiete & Orte | ${COMPANY_NAME} - Lokaler Notdienst`,
    description: `${COMPANY_NAME} bietet 24/7 Notdienst und Auto Schlüssel Service in München, Dachau, Freising und dem gesamten Umland. Finden Sie Ihren Standort für schnelle Hilfe.`
};
const RegionenPage = ()=>{
    // Statik şehir verilerini çekiyoruz
    const cities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllCities"])();
    // Şehirleri alfabetik sıraya göre sıralayalım
    const sortedCities = cities.sort((a, b)=>a.name.localeCompare(b.name));
    // Ana şehirleri belirleyelim (slug yerine name kullanmak daha güvenli olabilir)
    const mainCities = sortedCities.filter((city)=>[
            'München',
            'Dachau',
            'Freising'
        ].includes(city.name));
    const otherCities = sortedCities.filter((city)=>!mainCities.some((mainCity)=>mainCity.name === city.name));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container mx-auto px-4 py-12 md:py-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "text-center mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl font-extrabold text-gray-900 mb-4",
                        children: [
                            "Unser ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-blue-600",
                                children: "Einsatzgebiet"
                            }, void 0, false, {
                                fileName: "[project]/src/app/regionen/page.tsx",
                                lineNumber: 39,
                                columnNumber: 27
                            }, ("TURBOPACK compile-time value", void 0)),
                            " & alle Orte"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/regionen/page.tsx",
                        lineNumber: 38,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-gray-600 max-w-3xl mx-auto",
                        children: [
                            "Als Ihr lokaler Schlüsseldienst **",
                            COMPANY_NAME,
                            "** garantieren wir schnelle Anfahrt und faire Preise. Finden Sie unten Ihren Standort für sofortige und faire Hilfe."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/regionen/page.tsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/regionen/page.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-20 max-w-5xl mx-auto text-center p-6 bg-blue-50/50 rounded-2xl shadow-inner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$GlobeAltIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__GlobeAltIcon$3e$__["GlobeAltIcon"], {
                        className: "h-10 w-10 text-blue-600 mx-auto mb-3"
                    }, void 0, false, {
                        fileName: "[project]/src/app/regionen/page.tsx",
                        lineNumber: 48,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-2xl font-bold text-gray-800 mb-6",
                        children: "Wir sind da, wo Sie uns brauchen – im Herzen Oberbayerns."
                    }, void 0, false, {
                        fileName: "[project]/src/app/regionen/page.tsx",
                        lineNumber: 49,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative w-full h-64 rounded-xl overflow-hidden shadow-lg border-2 border-white transform hover:scale-[1.005] transition duration-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            src: "/images/ka-service-region-map.png",
                            alt: `Ka Service Einsatzgebiet Region München, Dachau, Freising und Umgebung`,
                            fill: true,
                            sizes: "(max-width: 1024px) 100vw, 800px",
                            style: {
                                objectFit: 'cover'
                            },
                            className: "rounded-xl"
                        }, void 0, false, {
                            fileName: "[project]/src/app/regionen/page.tsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/app/regionen/page.tsx",
                        lineNumber: 54,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/regionen/page.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-extrabold text-gray-900 mb-8 border-l-4 border-red-600 pl-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-red-600",
                                    children: "Hauptstandorte"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/regionen/page.tsx",
                                    lineNumber: 74,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                " (Kerngebiet)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/regionen/page.tsx",
                            lineNumber: 73,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12",
                            children: mainCities.map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/${city.slug}`,
                                    className: "group p-6 bg-white border border-red-300 rounded-xl shadow-lg transition duration-300 hover:shadow-2xl hover:bg-red-50 flex items-center justify-between transform hover:scale-[1.02]",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl font-bold text-red-700",
                                            children: [
                                                COMPANY_NAME,
                                                " ",
                                                city.name
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/regionen/page.tsx",
                                            lineNumber: 84,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__["ArrowRightIcon"], {
                                            className: "h-6 w-6 text-red-600 transition-transform group-hover:translate-x-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/regionen/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 33
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, city.slug, true, {
                                    fileName: "[project]/src/app/regionen/page.tsx",
                                    lineNumber: 79,
                                    columnNumber: 30
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/app/regionen/page.tsx",
                            lineNumber: 77,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-extrabold text-gray-900 mb-8 border-l-4 border-blue-600 pl-4",
                            children: [
                                "Alle ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-blue-600",
                                    children: "weiteren Gebiete"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/regionen/page.tsx",
                                    lineNumber: 94,
                                    columnNumber: 30
                                }, ("TURBOPACK compile-time value", void 0)),
                                " im Umland"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/regionen/page.tsx",
                            lineNumber: 93,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-4 p-6 bg-gray-50 rounded-xl border border-gray-200",
                            children: [
                                otherCities.map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/${city.slug}`,
                                        className: "text-base text-gray-800 font-medium hover:text-blue-600 transition duration-150 relative group",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "group-hover:underline",
                                                children: [
                                                    "Schlüsseldienst ",
                                                    city.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/regionen/page.tsx",
                                                lineNumber: 104,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500 text-xs",
                                                children: "→"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/regionen/page.tsx",
                                                lineNumber: 105,
                                                columnNumber: 33
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, city.slug, true, {
                                        fileName: "[project]/src/app/regionen/page.tsx",
                                        lineNumber: 99,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-500 italic text-sm col-span-full mt-4",
                                    children: "Weitere Orte auf Anfrage. Rufen Sie uns einfach an!"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/regionen/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/regionen/page.tsx",
                            lineNumber: 97,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/regionen/page.tsx",
                    lineNumber: 70,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/regionen/page.tsx",
                lineNumber: 69,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mt-20 p-8 md:p-12 bg-gray-900 rounded-3xl shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-2xl font-light text-white opacity-90 mb-3",
                        children: "24/7 Notdienst"
                    }, void 0, false, {
                        fileName: "[project]/src/app/regionen/page.tsx",
                        lineNumber: 117,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-4xl md:text-5xl font-black text-yellow-400 mb-8",
                        children: "SOFORTHILFE FÜR IHREN STANDORT"
                    }, void 0, false, {
                        fileName: "[project]/src/app/regionen/page.tsx",
                        lineNumber: 118,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `tel:${NOTDIENST_TELEFON}`,
                        className: "inline-flex items-center px-10 py-4 text-2xl bg-red-600 text-white font-bold rounded-full shadow-2xl transition duration-300 hover:bg-red-700 hover:scale-105 transform animate-pulse-slow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PhoneArrowUpRightIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneArrowUpRightIcon$3e$__["PhoneArrowUpRightIcon"], {
                                className: "h-6 w-6 mr-3"
                            }, void 0, false, {
                                fileName: "[project]/src/app/regionen/page.tsx",
                                lineNumber: 125,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Jetzt Anrufen: ",
                            NOTDIENST_TELEFON
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/regionen/page.tsx",
                        lineNumber: 121,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400 mt-4",
                        children: [
                            "Kostenlose Preisauskunft vor Anfahrt durch ",
                            COMPANY_NAME,
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/regionen/page.tsx",
                        lineNumber: 127,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/regionen/page.tsx",
                lineNumber: 116,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/regionen/page.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = RegionenPage;
}),
"[project]/src/app/regionen/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/regionen/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__be7e5299._.js.map