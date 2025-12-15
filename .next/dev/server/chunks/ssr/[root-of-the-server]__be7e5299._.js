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

// src/lib/data.server.ts - EKSİKSİZ VE UYUMLU VERSİYON
__turbopack_context__.s([
    "getAllCities",
    ()=>getAllCities,
    "getCityData",
    ()=>getCityData,
    "getTownData",
    ()=>getTownData
]);
const citiesData = [
    {
        slug: 'muenchen',
        name: 'München',
        metaDescription: 'München und Umgebung: Ihr 24/7 Autoschlüsseldienst. Schnelle Anfahrt, faire Preise.',
        colorClass: 'text-red-600',
        defaultPrice: 'ab 59€',
        // ✅ EKLENDİ: City level telefon numarası
        telefon: '089-111111',
        towns: [
            {
                slug: 'muenchen-city',
                name: 'München Zentrum',
                notdienstTelefon: '089-111111',
                metaDescription: 'Notfallservice für München Zentrum: Soforthilfe bei Auto- und Türschlüsseln.'
            },
            {
                slug: 'pasing',
                name: 'Pasing',
                notdienstTelefon: '089-111111',
                metaDescription: '24h Schlüsselnotdienst in München-Pasing. Mobile Schlüsselprogrammierung direkt vor Ort.'
            },
            {
                slug: 'sendling',
                name: 'Sendling',
                notdienstTelefon: '089-111111',
                metaDescription: 'Schlüsseldienst für München-Sendling: Schnelle Türöffnung und Autoschlüssel-Service.'
            },
            {
                slug: 'schwabing',
                name: 'Schwabing',
                notdienstTelefon: '089-111111',
                metaDescription: 'Ihr Schlüsselnotdienst in München-Schwabing. Wir sind in wenigen Minuten bei Ihnen.'
            },
            {
                slug: 'haidhausen',
                name: 'Haidhausen',
                notdienstTelefon: '089-111111',
                metaDescription: 'Schlüsseldienst München-Haidhausen: Transparente Preise und schnelle Hilfe vor Ort.'
            },
            {
                slug: 'neuhausen',
                name: 'Neuhausen',
                notdienstTelefon: '089-111111',
                metaDescription: '24h Schlüsselnotdienst in München-Neuhausen. Soforthilfe bei Tür- und Autoschlüsseln.'
            }
        ]
    },
    {
        slug: 'dachau',
        name: 'Dachau',
        metaDescription: 'Dachau und Umgebung: Ihr mobiler Autoschlüsseldienst. Kurze Anfahrt, professionelle Hilfe.',
        colorClass: 'text-blue-600',
        defaultPrice: 'ab 49€',
        // ✅ EKLENDİ: City level telefon numarası
        telefon: '08131-222222',
        towns: [
            {
                slug: 'dachau-stadt',
                name: 'Dachau Stadt',
                notdienstTelefon: '08131-222222',
                metaDescription: 'Schlüssel-Experte in Dachau Stadt: Transparente Festpreise und schnelle Hilfe.'
            },
            {
                slug: 'markt-indersdorf',
                name: 'Markt Indersdorf',
                notdienstTelefon: '08131-222222',
                metaDescription: '24h Notdienst in Markt Indersdorf. Auto- und Türschlüssel sofort nachgemacht.'
            },
            {
                slug: 'karlsfeld',
                name: 'Karlsfeld',
                notdienstTelefon: '08131-222222',
                metaDescription: 'Ihr Schlüsselnotdienst in Karlsfeld. Wir sind in wenigen Minuten bei Ihnen.'
            },
            {
                slug: 'altomuenster',
                name: 'Altomünster',
                notdienstTelefon: '08131-222222',
                metaDescription: 'Schlüsseldienst Altomünster: Schnelle Türöffnung und Autoschlüssel-Service im Landkreis Dachau.'
            }
        ]
    },
    {
        slug: 'augsburg',
        name: 'Augsburg',
        metaDescription: 'Augsburg und Umgebung: Ihr zuverlässiger Schlüsselnotdienst. Faire Preise, schnelle Anfahrt.',
        colorClass: 'text-green-600',
        defaultPrice: 'ab 55€',
        // ✅ EKLENDİ: City level telefon numarası
        telefon: '0821-333333',
        towns: [
            {
                slug: 'augsburg-city',
                name: 'Augsburg Zentrum',
                notdienstTelefon: '0821-333333',
                metaDescription: 'Schlüsseldienst Augsburg Zentrum: 24h Notdienst für Tür- und Autoschlüssel.'
            },
            {
                slug: 'lechausen',
                name: 'Lechausen',
                notdienstTelefon: '0821-333333',
                metaDescription: 'Schlüsselnotdienst Augsburg-Lechausen. Mobile Schlüsselprogrammierung direkt vor Ort.'
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

// src/app/regionen/page.tsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MapPinIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/MapPinIcon.js [app-rsc] (ecmascript) <export default as MapPinIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.server.ts [app-rsc] (ecmascript)"); // Şehir verilerini çekmek için
;
;
;
;
const metadata = {
    title: 'Alle Regionen & Orte | Schlüsselmann - Lokaler Notdienst',
    description: 'Schlüsselmann bietet 24/7 Notdienst und Auto Schlüssel Service in München, Dachau, Freising und dem gesamten Umland. Finden Sie Ihren Standort für schnelle Hilfe.'
};
const RegionenPage = ()=>{
    // Statik şehir verilerini çekiyoruz
    const cities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllCities"])();
    // Şehirleri alfabetik sıraya göre sıralayalım
    const sortedCities = cities.sort((a, b)=>a.name.localeCompare(b.name));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container mx-auto px-4 py-12 md:py-20",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "text-center mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl font-extrabold text-gray-900 mb-4",
                        children: [
                            "Unsere ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-blue-600",
                                children: "Regionen"
                            }, void 0, false, {
                                fileName: "[project]/src/app/regionen/page.tsx",
                                lineNumber: 23,
                                columnNumber: 28
                            }, ("TURBOPACK compile-time value", void 0)),
                            " & Orte"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/regionen/page.tsx",
                        lineNumber: 22,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-gray-600 max-w-3xl mx-auto",
                        children: "Wir sind Ihr lokaler Schlüsseldienst und Auto Schlüssel Service in der gesamten Region. Finden Sie unten Ihren Standort für sofortige und faire Hilfe."
                    }, void 0, false, {
                        fileName: "[project]/src/app/regionen/page.tsx",
                        lineNumber: 25,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/regionen/page.tsx",
                lineNumber: 21,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mb-16",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-gray-800 mb-6 border-b pb-2 flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MapPinIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinIcon$3e$__["MapPinIcon"], {
                                    className: "h-6 w-6 mr-2 text-red-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/regionen/page.tsx",
                                    lineNumber: 36,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                " Hauptstandorte"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/regionen/page.tsx",
                            lineNumber: 35,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10",
                            children: sortedCities.filter((city)=>[
                                    'muenchen',
                                    'dachau',
                                    'freising'
                                ].includes(city.slug)).map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: `/${city.slug}`,
                                    className: "p-4 bg-white border border-red-100 rounded-lg shadow-md hover:shadow-xl transition duration-300 hover:border-red-400 font-semibold text-red-700",
                                    children: [
                                        "Schlüsseldienst ",
                                        city.name,
                                        " →"
                                    ]
                                }, city.slug, true, {
                                    fileName: "[project]/src/app/regionen/page.tsx",
                                    lineNumber: 40,
                                    columnNumber: 30
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/app/regionen/page.tsx",
                            lineNumber: 38,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-3xl font-bold text-gray-800 mb-6 border-b pb-2 flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MapPinIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinIcon$3e$__["MapPinIcon"], {
                                    className: "h-6 w-6 mr-2 text-blue-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/regionen/page.tsx",
                                    lineNumber: 52,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                " Alle weiteren Gebiete (Umland)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/regionen/page.tsx",
                            lineNumber: 51,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-3",
                            children: [
                                sortedCities.map((city)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: `/${city.slug}`,
                                        className: "text-gray-700 hover:text-blue-600 hover:underline transition duration-150",
                                        children: city.name
                                    }, city.slug, false, {
                                        fileName: "[project]/src/app/regionen/page.tsx",
                                        lineNumber: 58,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-gray-400 italic",
                                    children: "Weitere Orte auf Anfrage..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/regionen/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/regionen/page.tsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/regionen/page.tsx",
                    lineNumber: 32,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/regionen/page.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mt-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-gray-700 mb-4",
                        children: "Ihre Stadt oder Gemeinde ist nicht dabei? Rufen Sie uns trotzdem an!"
                    }, void 0, false, {
                        fileName: "[project]/src/app/regionen/page.tsx",
                        lineNumber: 74,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `tel:089-111111`,
                        className: "inline-flex items-center px-8 py-3 text-xl bg-red-600 text-white font-bold rounded-full shadow-lg transition duration-300 hover:bg-red-700 hover:scale-105",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MapPinIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinIcon$3e$__["MapPinIcon"], {
                                className: "h-5 w-5 mr-3"
                            }, void 0, false, {
                                fileName: "[project]/src/app/regionen/page.tsx",
                                lineNumber: 79,
                                columnNumber: 21
                            }, ("TURBOPACK compile-time value", void 0)),
                            " Jetzt Verfügbarkeit prüfen & Notruf"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/regionen/page.tsx",
                        lineNumber: 75,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/regionen/page.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/regionen/page.tsx",
        lineNumber: 20,
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