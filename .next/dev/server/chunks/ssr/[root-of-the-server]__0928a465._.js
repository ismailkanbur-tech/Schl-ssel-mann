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
            },
            {
                slug: 'garching',
                name: 'Garching',
                notdienstTelefon: '089-111111',
                metaDescription: 'Schlüsselnotdienst Garching: Schneller Service für Studenten, Forscher und Anwohner.'
            },
            {
                slug: 'unterfoehring',
                name: 'Unterföhring',
                notdienstTelefon: '089-111111',
                metaDescription: 'Autoschlüssel verloren in Unterföhring? Wir helfen 24/7 – direkt vor Ort.'
            },
            {
                slug: 'frankfurt-strasse',
                name: 'Frankfurter Straße (München)',
                notdienstTelefon: '089-111111',
                metaDescription: 'Schlüsseldienst im Münchner Osten – Frankfurter Straße und Umgebung.'
            },
            {
                slug: 'moosach',
                name: 'Moosach',
                notdienstTelefon: '089-111111',
                metaDescription: '24h Schlüsselhilfe in Moosach: Schnelle Türöffnung und mobile Schlüsselnachfertigung.'
            },
            {
                slug: 'ramersdorf',
                name: 'Ramersdorf',
                notdienstTelefon: '089-111111',
                metaDescription: 'Schlüsselnotdienst Ramersdorf: Zuverlässig, fair und innerhalb weniger Minuten vor Ort.'
            },
            {
                slug: 'hasenbergl',
                name: 'Hasenbergl',
                notdienstTelefon: '089-111111',
                metaDescription: 'Türöffnung & Autoschlüssel-Service in Hasenbergl – rund um die Uhr erreichbar.'
            }
        ]
    },
    {
        slug: 'dachau',
        name: 'Dachau',
        metaDescription: 'Dachau und Umgebung: Ihr mobiler Autoschlüsseldienst. Kurze Anfahrt, professionelle Hilfe.',
        colorClass: 'text-blue-600',
        defaultPrice: 'ab 49€',
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
            },
            {
                slug: 'bernkirchen',
                name: 'Bergkirchen',
                notdienstTelefon: '08131-222222',
                metaDescription: 'Schlüsselnotdienst Bergkirchen: Zuverlässiger Service im nördlichen Landkreis Dachau.'
            },
            {
                slug: 'schwabhausen',
                name: 'Schwabhausen',
                notdienstTelefon: '08131-222222',
                metaDescription: '24h Schlüsselhilfe in Schwabhausen – schnell, sicher und zu fairen Preisen.'
            },
            {
                slug: 'pauli-heim',
                name: 'Pauli-Heim',
                notdienstTelefon: '08131-222222',
                metaDescription: 'Notdienst im Gewerbegebiet Pauli-Heim: Kompetenter Partner für Firmen und Privatkunden.'
            },
            {
                slug: 'puchheim',
                name: 'Puchheim',
                notdienstTelefon: '08131-222222',
                metaDescription: 'Schlüsseldienst Puchheim: Schnelle Anfahrt aus Dachau – 24 Stunden erreichbar.'
            },
            {
                slug: 'olching',
                name: 'Olching',
                notdienstTelefon: '08131-222222',
                metaDescription: 'Türöffnung & Autoschlüssel-Service in Olching – kompetent und preiswert.'
            },
            {
                slug: 'gruenwald',
                name: 'Gröbenzell',
                notdienstTelefon: '08131-222222',
                metaDescription: 'Schlüsselnotdienst Gröbenzell: Ihr verlässlicher Partner im Landkreis Fürstenfeldbruck – nahe Dachau.'
            },
            {
                slug: 'hebertshausen',
                name: 'Hebertshausen',
                notdienstTelefon: '08131-222222',
                metaDescription: '24h Schlüsselhilfe in Hebertshausen – direkt aus Dachau-Stadt erreichbar.'
            },
            {
                slug: 'rohrbach',
                name: 'Rohrbach',
                notdienstTelefon: '08131-222222',
                metaDescription: 'Schlüsseldienst Rohrbach: Kleine Gemeinde – großer Service. Immer für Sie da.'
            }
        ]
    },
    // ... (München ve Dachau blokları olduğu gibi kalacak)
    {
        slug: 'freising',
        name: 'Freising',
        metaDescription: 'Freising und Umgebung: Ihr mobiler Schlüsselnotdienst mit schneller Anfahrt und Festpreisgarantie.',
        colorClass: 'text-green-600',
        defaultPrice: 'ab 49€',
        telefon: '08161-999999',
        towns: [
            {
                slug: 'freising-stadt',
                name: 'Freising Stadt',
                notdienstTelefon: '08161-999999',
                metaDescription: '24h Schlüsselnotdienst in Freising Stadt: Schnelle Türöffnung und Autoschlüssel-Service direkt vor Ort.'
            },
            {
                slug: 'moosburg',
                name: 'Moosburg',
                notdienstTelefon: '08161-999999',
                metaDescription: 'Schlüsseldienst Moosburg: Zuverlässige Hilfe im Landkreis Freising – 24 Stunden erreichbar.'
            },
            {
                slug: 'hallbergmoos',
                name: 'Hallbergmoos',
                notdienstTelefon: '08161-999999',
                metaDescription: 'Ihr Schlüsselnotdienst in Hallbergmoos – ideal gelegen für schnelle Hilfe am Flughafen München.'
            },
            {
                slug: 'neufahrn',
                name: 'Neufahrn',
                notdienstTelefon: '08161-999999',
                metaDescription: 'Schlüsselhilfe in Neufahrn: Schnell, sicher und zu fairen Preisen – rund um die Uhr.'
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
"[project]/src/components/FaqSection.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/FaqSection.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/FaqSection.tsx <module evaluation>", "default");
}),
"[project]/src/components/FaqSection.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/FaqSection.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/FaqSection.tsx", "default");
}),
"[project]/src/components/FaqSection.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FaqSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/FaqSection.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FaqSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/FaqSection.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FaqSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/HomeOfferBanner.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/components/HomeOfferBanner.tsx
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$BoltIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BoltIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/solid/esm/BoltIcon.js [app-rsc] (ecmascript) <export default as BoltIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$ShieldCheckIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/solid/esm/ShieldCheckIcon.js [app-rsc] (ecmascript) <export default as ShieldCheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$ClockIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ClockIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/solid/esm/ClockIcon.js [app-rsc] (ecmascript) <export default as ClockIcon>");
;
;
const HomeOfferBanner = ({ defaultTelefon, cityColorClass })=>{
    // Banner rengi arka plan rengine dönüştürülür
    const bannerBgClass = cityColorClass.replace('text-', 'bg-');
    // Tailwind'de pulse animasyonu ile hafif aciliyet yaratma
    const animationClass = "animate-pulse-slow";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "my-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `max-w-6xl mx-auto p-6 md:p-8 rounded-2xl shadow-2xl ${bannerBgClass} text-white`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col md:flex-row items-center justify-between",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center mb-4 md:mb-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$BoltIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BoltIcon$3e$__["BoltIcon"], {
                                className: `h-12 w-12 mr-4 flex-shrink-0 ${animationClass}`
                            }, void 0, false, {
                                fileName: "[project]/src/components/HomeOfferBanner.tsx",
                                lineNumber: 25,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-left",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xl font-light opacity-90",
                                        children: "Ihre lokale Notfalllösung"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomeOfferBanner.tsx",
                                        lineNumber: 27,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-3xl md:text-4xl font-extrabold leading-tight",
                                        children: "🔑 24/7 SCHLÜSSELDIENST SOFORTHILFE!"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomeOfferBanner.tsx",
                                        lineNumber: 28,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HomeOfferBanner.tsx",
                                lineNumber: 26,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HomeOfferBanner.tsx",
                        lineNumber: 24,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center md:text-right flex flex-col items-center md:items-end",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg font-semibold mb-2 flex items-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$ShieldCheckIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldCheckIcon$3e$__["ShieldCheckIcon"], {
                                        className: "h-5 w-5 mr-2 text-yellow-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomeOfferBanner.tsx",
                                        lineNumber: 37,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Festpreis-Garantie"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HomeOfferBanner.tsx",
                                lineNumber: 36,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `tel:${defaultTelefon}`,
                                className: `inline-flex items-center px-8 py-3 bg-white ${cityColorClass} font-black text-2xl rounded-full shadow-lg transition duration-300 hover:scale-105 hover:shadow-xl`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$solid$2f$esm$2f$ClockIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ClockIcon$3e$__["ClockIcon"], {
                                        className: "h-6 w-6 mr-3"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/HomeOfferBanner.tsx",
                                        lineNumber: 44,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    "Jetzt Anrufen: ",
                                    defaultTelefon
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/HomeOfferBanner.tsx",
                                lineNumber: 40,
                                columnNumber: 25
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/HomeOfferBanner.tsx",
                        lineNumber: 35,
                        columnNumber: 21
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/HomeOfferBanner.tsx",
                lineNumber: 21,
                columnNumber: 17
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/HomeOfferBanner.tsx",
            lineNumber: 20,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/components/HomeOfferBanner.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = HomeOfferBanner;
}),
"[project]/src/app/[citySlug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/[citySlug]/page.tsx - Nihai, Hata Onarımlı ve Eksiksiz Versiyon
__turbopack_context__.s([
    "default",
    ()=>CityPage,
    "dynamic",
    ()=>dynamic,
    "dynamicParams",
    ()=>dynamicParams,
    "generateMetadata",
    ()=>generateMetadata,
    "generateStaticParams",
    ()=>generateStaticParams
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FaqSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/FaqSection.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HomeOfferBanner$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/HomeOfferBanner.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ArrowRightIcon.js [app-rsc] (ecmascript) <export default as ArrowRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PhoneIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/PhoneIcon.js [app-rsc] (ecmascript) <export default as PhoneIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$KeyIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/KeyIcon.js [app-rsc] (ecmascript) <export default as KeyIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MapPinIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/MapPinIcon.js [app-rsc] (ecmascript) <export default as MapPinIcon>");
;
;
;
;
;
;
;
const dynamic = 'force-static';
const dynamicParams = false;
function generateStaticParams() {
    const cities = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllCities"])();
    return cities.map((city)=>({
            citySlug: city.slug
        }));
}
async function generateMetadata({ params }) {
    // KRİTİK: params'ı await ile çözme (Promise ise bile güvenli erişim sağlar)
    const unwrappedParams = await (params instanceof Promise ? params : Promise.resolve(params));
    const citySlug = unwrappedParams.citySlug;
    const cityData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCityData"])(citySlug);
    if (!cityData) {
        return {
            title: 'Seite nicht gefunden - Schlüsselmann'
        };
    }
    const title = `Schlüsseldienst ${cityData.name} - 24/7 Notdienst & Auto Schlüssel Service`;
    const description = cityData.metaDescription;
    return {
        title,
        description,
        alternates: {
            canonical: `/${cityData.slug}`
        }
    };
}
async function CityPage({ params }) {
    // ✅ KRİTİK DÜZELTME: params'ı burada ASYNC olarak çözüyoruz.
    const unwrappedParams = await (params instanceof Promise ? params : Promise.resolve(params));
    const citySlug = unwrappedParams.citySlug;
    // Hata veren satır artık güvenli
    const cityData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCityData"])(citySlug);
    if (!cityData) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    // Veri türetme
    const defaultTelefon = cityData.towns[0]?.notdienstTelefon || cityData.telefon;
    const cityColorClass = cityData.colorClass;
    const linkHoverBg = cityColorClass.replace('text-', 'hover:bg-').replace('-600', '-50');
    // FAQ Verileri
    const cityFaqs = [
        {
            question: `Wie lange dauert es, bis der Schlüsseldienst in ${cityData.name} eintrifft?`,
            answer: `Dank unserer lokalen Präsenz in ${cityData.name} und den umliegenden Ortschaften beträgt unsere durchschnittliche Ankunftszeit in Notfällen nur 15 bis 30 Minuten. Rufen Sie uns für eine genaue Zeitangabe an.`
        },
        {
            question: "Gibt es bei Ihnen eine Festpreisgarantie für Türöffnungen?",
            answer: "Ja, absolute Transparenz ist uns wichtig. Wir nennen Ihnen den verbindlichen Festpreis, bevor wir mit der Arbeit beginnen, um Überraschungen zu vermeiden. Keine versteckten Kosten."
        },
        {
            question: "Bieten Sie auch Auto Schlüssel Service in der Region an?",
            answer: `Absolut! Unser mobiler Schlüssel-Service kommt direkt zu Ihnen nach ${cityData.name} und programmiert oder fräst Ersatzschlüssel für die meisten gängigen Automarken vor Ort.`
        },
        {
            question: "Kann ich den Service auch nachts oder am Wochenende nutzen?",
            answer: `Selbstverständlich. Unser Schlüsseldienst ist in ${cityData.name} rund um die Uhr (24/7) und an 365 Tagen im Jahr für Sie im Einsatz. Rufen Sie unsere Notfallnummer an.`
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container mx-auto px-4 py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "text-center mb-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl md:text-5xl font-extrabold text-gray-900 mb-4",
                        children: [
                            "Ihr ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: cityColorClass,
                                children: [
                                    "Schlüsseldienst ",
                                    cityData.name
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[citySlug]/page.tsx",
                                lineNumber: 106,
                                columnNumber: 25
                            }, this),
                            ": 24/7 Notfallservice"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[citySlug]/page.tsx",
                        lineNumber: 105,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-gray-600 mb-6 max-w-3xl mx-auto",
                        children: [
                            cityData.metaDescription,
                            " Unsere Experten sind schnell bei Ihnen vor Ort und garantieren Festpreise."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[citySlug]/page.tsx",
                        lineNumber: 108,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[citySlug]/page.tsx",
                lineNumber: 104,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$HomeOfferBanner$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                defaultTelefon: defaultTelefon,
                cityColorClass: cityColorClass
            }, void 0, false, {
                fileName: "[project]/src/app/[citySlug]/page.tsx",
                lineNumber: 115,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-12 mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold text-gray-800 text-center mb-8",
                        children: [
                            "Unsere Kernleistungen in ",
                            cityData.name
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[citySlug]/page.tsx",
                        lineNumber: 122,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-3 gap-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 border rounded-xl shadow-lg hover:shadow-xl transition duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$KeyIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__KeyIcon$3e$__["KeyIcon"], {
                                        className: `h-12 w-12 mx-auto mb-4 ${cityColorClass}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[citySlug]/page.tsx",
                                        lineNumber: 125,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-xl mb-2",
                                        children: "Auto Schlüssel Service"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[citySlug]/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 text-sm",
                                        children: [
                                            "Mobile Programmierung und Ersatzschlüssel direkt bei Ihnen im Landkreis ",
                                            cityData.name,
                                            "."
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/[citySlug]/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[citySlug]/page.tsx",
                                lineNumber: 124,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 border rounded-xl shadow-lg hover:shadow-xl transition duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ArrowRightIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRightIcon$3e$__["ArrowRightIcon"], {
                                        className: `h-12 w-12 mx-auto mb-4 ${cityColorClass}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[citySlug]/page.tsx",
                                        lineNumber: 130,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-xl mb-2",
                                        children: "Türöffnung ohne Schaden"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[citySlug]/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 text-sm",
                                        children: "Schnelle und beschädigungsfreie Türöffnung, wenn Sie sich ausgesperrt haben."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[citySlug]/page.tsx",
                                        lineNumber: 132,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[citySlug]/page.tsx",
                                lineNumber: 129,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-6 border rounded-xl shadow-lg hover:shadow-xl transition duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$PhoneIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__PhoneIcon$3e$__["PhoneIcon"], {
                                        className: `h-12 w-12 mx-auto mb-4 ${cityColorClass}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[citySlug]/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-bold text-xl mb-2",
                                        children: "24 Stunden Notdienst"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[citySlug]/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 text-sm",
                                        children: "Rund um die Uhr, 7 Tage die Woche, auch an Feiertagen einsatzbereit."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[citySlug]/page.tsx",
                                        lineNumber: 137,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[citySlug]/page.tsx",
                                lineNumber: 134,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[citySlug]/page.tsx",
                        lineNumber: 123,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[citySlug]/page.tsx",
                lineNumber: 121,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "mt-12 mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl font-bold text-gray-800 text-center mb-4",
                        children: [
                            "Alle Ortschaften in ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: cityColorClass.replace('text', 'underline text'),
                                children: cityData.name
                            }, void 0, false, {
                                fileName: "[project]/src/app/[citySlug]/page.tsx",
                                lineNumber: 145,
                                columnNumber: 41
                            }, this),
                            " (Wählen Sie Ihren Standort)"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/[citySlug]/page.tsx",
                        lineNumber: 144,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-center text-gray-600 mb-8 max-w-4xl mx-auto",
                        children: "Finden Sie den nächstgelegenen Schlüsselnotdienst! Wir garantieren Ihnen in jeder dieser Ortschaften schnelle Anfahrt und faire Preise."
                    }, void 0, false, {
                        fileName: "[project]/src/app/[citySlug]/page.tsx",
                        lineNumber: 147,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                        children: cityData.towns.map((town)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/${cityData.slug}/${town.slug}`,
                                className: `flex items-start p-6 border-2 border-gray-100 rounded-xl shadow-lg transition duration-300 ${linkHoverBg} hover:shadow-2xl hover:border-transparent`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MapPinIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinIcon$3e$__["MapPinIcon"], {
                                        className: `h-8 w-8 mr-4 mt-1 flex-shrink-0 ${cityColorClass}`
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[citySlug]/page.tsx",
                                        lineNumber: 158,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: `text-xl font-bold mb-1 ${cityColorClass}`,
                                                children: [
                                                    "Schlüsseldienst ",
                                                    town.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/[citySlug]/page.tsx",
                                                lineNumber: 160,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 text-sm",
                                                children: [
                                                    town.metaDescription,
                                                    town.metaDescription.length < 50 && ` Soforthilfe bei Auto- und Türöffnung in ${town.name}.`
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/[citySlug]/page.tsx",
                                                lineNumber: 163,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "mt-2 inline-block text-sm font-semibold underline",
                                                children: "Jetzt Service buchen →"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/[citySlug]/page.tsx",
                                                lineNumber: 167,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/[citySlug]/page.tsx",
                                        lineNumber: 159,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, town.slug, true, {
                                fileName: "[project]/src/app/[citySlug]/page.tsx",
                                lineNumber: 153,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/[citySlug]/page.tsx",
                        lineNumber: 151,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/[citySlug]/page.tsx",
                lineNumber: 143,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$FaqSection$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                title: `Häufig gestellte Fragen zu Ihrem Schlüsseldienst in ${cityData.name}`,
                faqs: cityFaqs,
                cityColorClass: cityColorClass
            }, void 0, false, {
                fileName: "[project]/src/app/[citySlug]/page.tsx",
                lineNumber: 178,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/[citySlug]/page.tsx",
        lineNumber: 101,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/[citySlug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[citySlug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__0928a465._.js.map