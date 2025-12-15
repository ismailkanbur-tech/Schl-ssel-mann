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
"[project]/src/app/[citySlug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/[citySlug]/page.tsx - ASYNC/AWAIT ZORUNLU VERSİYON
__turbopack_context__.s([
    "default",
    ()=>CityPage,
    "dynamic",
    ()=>dynamic,
    "dynamicParams",
    ()=>dynamicParams,
    "generateMetadata",
    ()=>generateMetadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.server.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MapPinIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/MapPinIcon.js [app-rsc] (ecmascript) <export default as MapPinIcon>");
;
;
;
;
;
const dynamic = 'force-static';
const dynamicParams = false;
async function generateMetadata({ params }) {
    // params'ı await ile çözme (KRİTİK)
    const unwrappedParams = await (params instanceof Promise ? params : Promise.resolve(params));
    const citySlug = unwrappedParams.citySlug;
    // ... (Kalan metadata mantığı aynı)
    const cityData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCityData"])(citySlug);
    // ... (return)
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
    // Hata veren satır artık güvenli:
    const cityData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$server$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCityData"])(citySlug);
    if (!cityData) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    // ... (Kalan component mantığı ve JSX içeriği tamamen aynı kalır)
    const defaultTelefon = cityData.towns[0]?.notdienstTelefon || cityData.telefon;
    const cityColorClass = cityData.colorClass;
    const linkHoverBg = cityColorClass.replace('text-', 'hover:bg-').replace('-600', '-50');
    // ... (FAQ verileri ve return JSX bloğu aynı kalır)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container mx-auto px-4 py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "mt-12 mb-16",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                children: cityData.towns.map((town)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: `/${cityData.slug}/${town.slug}`,
                        className: `flex items-start p-6 border-2 border-gray-100 rounded-xl shadow-lg transition duration-300 ${linkHoverBg} hover:shadow-2xl hover:border-transparent`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$MapPinIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPinIcon$3e$__["MapPinIcon"], {
                                className: `h-8 w-8 mr-4 mt-1 flex-shrink-0 ${cityColorClass}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/[citySlug]/page.tsx",
                                lineNumber: 91,
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
                                        lineNumber: 93,
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
                                        lineNumber: 96,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "mt-2 inline-block text-sm font-semibold underline",
                                        children: "Jetzt Service buchen →"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/[citySlug]/page.tsx",
                                        lineNumber: 100,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/[citySlug]/page.tsx",
                                lineNumber: 92,
                                columnNumber: 29
                            }, this)
                        ]
                    }, town.slug, true, {
                        fileName: "[project]/src/app/[citySlug]/page.tsx",
                        lineNumber: 86,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/[citySlug]/page.tsx",
                lineNumber: 84,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/[citySlug]/page.tsx",
            lineNumber: 82,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/[citySlug]/page.tsx",
        lineNumber: 77,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/[citySlug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/[citySlug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__eb897819._.js.map