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
"[project]/src/app/ratgeber/[slug]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/ratgeber/[slug]/page.tsx - Breadcrumb ve Schema Eklendi
__turbopack_context__.s([
    "default",
    ()=>ArticlePage,
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ChevronRightIcon.js [app-rsc] (ecmascript) <export default as ChevronRightIcon>"); // Breadcrumb için ikon
;
;
;
;
const dynamic = 'force-static';
const dynamicParams = false;
// Örnek statik veri (Sizin bunu gerçek bir veri kaynağından çekmeniz gerekecek!)
const getArticleBySlug = (slug)=>{
    const articles = [
        {
            slug: 'tuer-zugezogen-was-tun',
            title: 'Tür zugezogen: Was tun, wenn ich den Schlüssel vergessen habe?',
            metaDescription: 'Dringende Ratschläge für den Fall, dass die Tür zugezogen ist und der Schlüssel innen steckt.',
            datePublished: '2024-12-10T09:00:00+01:00',
            dateModified: '2024-12-15T10:30:00+01:00',
            imageUrl: 'https://ihresite.de/images/tuer-zugezogen-hero.jpg',
            content: `
                <p>Wenn die Tür nur zugezogen ist (nicht abgeschlossen), ist die Türöffnung meist einfach und kann beschädigungsfrei in wenigen Sekunden durchgeführt werden. Versuchen Sie niemals, die Tür mit Gewalt oder ungeeigneten Werkzeugen zu öffnen, da dies hohe Schäden am Schloss verursachen kann.</p>
                <h2>1. Ruhe bewahren und den Profi rufen</h2>
                <p>Der wichtigste Schritt ist, ruhig zu bleiben. Rufen Sie sofort unsere 24/7 Notfallnummer an. Wir benötigen nur wenige Angaben (zugezogen oder abgeschlossen?) um Ihnen sofort einen Festpreis nennen zu können.</p>
                <h2 class="text-xl font-bold mt-6">2. Kosten und Festpreis</h2>
                <p>Als lokaler Schlüsseldienst garantieren wir einen Festpreis für Türöffnungen in unserer Region. Fragen Sie immer nach dem Gesamtpreis, bevor der Techniker mit der Arbeit beginnt.</p>
            `
        },
        {
            slug: 'autoschluessel-nachmachen',
            title: 'Autoschlüssel nachmachen: Kosten und Dauer des mobilen Service',
            metaDescription: 'Alle wichtigen Informationen zu unserem mobilen Autoschlüssel-Service, den Preisen und dem Ablauf.',
            datePublished: '2024-12-05T14:00:00+01:00',
            dateModified: '2024-12-15T10:30:00+01:00',
            imageUrl: 'https://ihresite.de/images/autoschluessel-nachmachen-hero.jpg',
            content: `
                <p>Einen Autoschlüssel beim Händler nachmachen zu lassen, kann teuer und zeitaufwändig sein. Unser mobiler Service kommt direkt zu Ihnen nach Hause oder zum Arbeitsplatz und spart Ihnen Zeit und Geld.</p>
                <h2>Wie lange dauert der Prozess?</h2>
                <p>In den meisten Fällen können wir einen neuen Schlüssel inkl. Programmierung in weniger als 60 Minuten anfertigen. Dank unserer mobilen Werkstatt sind wir flexibel und schnell.</p>
            `
        }
    ];
    return articles.find((a)=>a.slug === slug);
};
function generateStaticParams() {
    return [
        {
            slug: 'tuer-zugezogen-was-tun'
        },
        {
            slug: 'autoschluessel-nachmachen'
        }
    ];
}
// --------------------------------------------------------------------------------
// 2. DYNAMISCHE METADATA (ASYNC VE AWAIT İLE)
// --------------------------------------------------------------------------------
const BASE_URL = 'https://ihresite.de';
async function generateMetadata({ params }) {
    // KRİTİK DÜZELTME: params'ı await ile çözme
    const unwrappedParams = await (params instanceof Promise ? params : Promise.resolve(params));
    const articleSlug = unwrappedParams.slug;
    const article = getArticleBySlug(articleSlug);
    if (!article) {
        return {
            title: 'Seite nicht gefunden'
        };
    }
    return {
        title: article.title,
        description: article.metaDescription,
        alternates: {
            canonical: `${BASE_URL}/ratgeber/${article.slug}`
        }
    };
}
async function ArticlePage({ params }) {
    // KRİTİK DÜZELTME: params'ı await ile çözme
    const unwrappedParams = await (params instanceof Promise ? params : Promise.resolve(params));
    const articleSlug = unwrappedParams.slug;
    const article = getArticleBySlug(articleSlug);
    if (!article) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    // Breadcrumb Schema Markup'ı oluştur
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Startseite",
                "item": BASE_URL
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Ratgeber",
                "item": `${BASE_URL}/ratgeber`
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": article.title
            }
        ]
    };
    // Article Schema Markup'ı oluştur
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": article.title,
        "description": article.metaDescription,
        "image": {
            "@type": "ImageObject",
            "url": article.imageUrl,
            "width": 1200,
            "height": 675
        },
        "author": {
            "@type": "Organization",
            "name": "Schlüsselmann"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Schlüsselmann",
            "logo": {
                "@type": "ImageObject",
                "url": `${BASE_URL}/logo.png`,
                "width": 600,
                "height": 60
            }
        },
        "datePublished": article.datePublished,
        "dateModified": article.dateModified,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${BASE_URL}/ratgeber/${article.slug}`
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container mx-auto px-4 py-12 max-w-4xl",
        children: [
            BASE_URL === 'https://ihresite.de' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8",
                role: "alert",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "ACHTUNG:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ratgeber/[slug]/page.tsx",
                        lineNumber: 185,
                        columnNumber: 21
                    }, this),
                    " Bitte die Konstante ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        children: "BASE_URL"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ratgeber/[slug]/page.tsx",
                        lineNumber: 185,
                        columnNumber: 67
                    }, this),
                    " (und ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        children: "imageUrl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ratgeber/[slug]/page.tsx",
                        lineNumber: 185,
                        columnNumber: 94
                    }, this),
                    "/",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                        children: "logo.png"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ratgeber/[slug]/page.tsx",
                        lineNumber: 185,
                        columnNumber: 116
                    }, this),
                    ") mit Ihrer tatsächlichen Domain aktualisieren!"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ratgeber/[slug]/page.tsx",
                lineNumber: 184,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "text-sm font-medium text-gray-500 mb-6",
                "aria-label": "Breadcrumb",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                    className: "list-none p-0 inline-flex",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/",
                                    className: "hover:text-gray-700",
                                    children: "Startseite"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ratgeber/[slug]/page.tsx",
                                    lineNumber: 193,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                                    className: "h-4 w-4 mx-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ratgeber/[slug]/page.tsx",
                                    lineNumber: 194,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ratgeber/[slug]/page.tsx",
                            lineNumber: 192,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex items-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/ratgeber",
                                    className: "hover:text-gray-700",
                                    children: "Ratgeber"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ratgeber/[slug]/page.tsx",
                                    lineNumber: 197,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ChevronRightIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                                    className: "h-4 w-4 mx-2"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/ratgeber/[slug]/page.tsx",
                                    lineNumber: 198,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ratgeber/[slug]/page.tsx",
                            lineNumber: 196,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "text-gray-900 truncate max-w-xs",
                            children: article.title
                        }, void 0, false, {
                            fileName: "[project]/src/app/ratgeber/[slug]/page.tsx",
                            lineNumber: 200,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ratgeber/[slug]/page.tsx",
                    lineNumber: 191,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/ratgeber/[slug]/page.tsx",
                lineNumber: 190,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-extrabold text-gray-900 mb-6 border-b pb-3",
                children: article.title
            }, void 0, false, {
                fileName: "[project]/src/app/ratgeber/[slug]/page.tsx",
                lineNumber: 204,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-8 text-sm text-yellow-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Wichtig:"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ratgeber/[slug]/page.tsx",
                        lineNumber: 208,
                        columnNumber: 17
                    }, this),
                    " Bei akuten Notfällen rufen Sie uns direkt unter ",
                    process.env.NEXT_PUBLIC_GLOBAL_TELEFON || '089-111111',
                    " an. Dieser Artikel dient nur der Information."
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ratgeber/[slug]/page.tsx",
                lineNumber: 207,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                className: "prose prose-blue max-w-none text-gray-700 leading-relaxed",
                dangerouslySetInnerHTML: {
                    __html: article.content
                }
            }, void 0, false, {
                fileName: "[project]/src/app/ratgeber/[slug]/page.tsx",
                lineNumber: 212,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(articleSchema)
                }
            }, void 0, false, {
                fileName: "[project]/src/app/ratgeber/[slug]/page.tsx",
                lineNumber: 218,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(breadcrumbSchema)
                }
            }, void 0, false, {
                fileName: "[project]/src/app/ratgeber/[slug]/page.tsx",
                lineNumber: 226,
                columnNumber: 14
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: "/ratgeber",
                    className: "text-blue-600 font-semibold hover:underline",
                    children: "← Zurück zur Ratgeber-Übersicht"
                }, void 0, false, {
                    fileName: "[project]/src/app/ratgeber/[slug]/page.tsx",
                    lineNumber: 236,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/ratgeber/[slug]/page.tsx",
                lineNumber: 235,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/ratgeber/[slug]/page.tsx",
        lineNumber: 180,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/ratgeber/[slug]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/ratgeber/[slug]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__03bca534._.js.map