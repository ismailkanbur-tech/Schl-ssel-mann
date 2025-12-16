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
"[project]/src/lib/articles.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/lib/articles.ts - TÜM Makalelerin İçerik ve Verileri
__turbopack_context__.s([
    "ARTICLE_BASE_URL",
    ()=>ARTICLE_BASE_URL,
    "getAllArticleSlugs",
    ()=>getAllArticleSlugs,
    "getAllArticlesContent",
    ()=>getAllArticlesContent,
    "getArticleContentBySlug",
    ()=>getArticleContentBySlug
]);
const ARTICLE_BASE_URL = 'https://ihresite.de'; // Gerçek domaininizle güncelleyin!
// Toplam 10 makale için örnek veri
const articlesData = [
    {
        slug: 'tuer-zugezogen-was-tun',
        title: 'Tür zugezogen: Was tun, wenn ich den Schlüssel vergessen habe?',
        description: 'Dringende Ratschläge für den Fall, dass die Tür zugezogen ist und der Schlüssel innen steckt.',
        readTime: '5 Min. Lesezeit',
        datePublished: '2024-12-10T09:00:00+01:00',
        dateModified: '2024-12-15T10:30:00+01:00',
        imageUrl: `${ARTICLE_BASE_URL}/images/tuer-zugezogen-hero.jpg`,
        content: `
            <p>Wenn die Tür nur zugezogen ist (nicht abgeschlossen), ist die Türöffnung meist einfach und kann beschädigungsfrei in wenigen Sekunden durchgeführt werden.</p>
            <h2>1. Ruhe bewahren und den Profi rufen</h2>
            <p>Der wichtigste Schritt ist, ruhig zu bleiben. Rufen Sie sofort unsere 24/7 Notfallnummer an.</p>
        `
    },
    {
        slug: 'autoschluessel-nachmachen',
        title: 'Autoschlüssel nachmachen: Kosten und Dauer des mobilen Service',
        description: 'Alle wichtigen Informationen zu unserem mobilen Autoschlüssel-Service, den Preisen und dem Ablauf.',
        readTime: '7 Min. Lesezeit',
        datePublished: '2024-12-05T14:00:00+01:00',
        dateModified: '2024-12-15T10:30:00+01:00',
        imageUrl: `${ARTICLE_BASE_URL}/images/autoschluessel-nachmachen-hero.jpg`,
        content: `
            <p>Einen Autoschlüssel beim Händler nachmachen zu lassen, kann teuer und zeitaufwändig sein. Unser mobiler Service kommt direkt zu Ihnen.</p>
            <h2>Wie lange dauert der Prozess?</h2>
            <p>In den meisten Fällen können wir einen neuen Schlüssel inkl. Programmierung in weniger als 60 Minuten anfertigen.</p>
        `
    },
    {
        slug: 'einbruchschutz-tipps',
        title: 'Die besten Tipps zum Einbruchschutz für Ihr Zuhause',
        description: 'Einfache aber effektive Maßnahmen, um Ihr Heim vor Einbrüchen zu schützen.',
        readTime: '6 Min. Lesezeit',
        datePublished: '2024-11-20T10:00:00+01:00',
        dateModified: '2024-12-01T10:00:00+01:00',
        imageUrl: `${ARTICLE_BASE_URL}/images/einbruchschutz-hero.jpg`,
        content: `
            <p>Gute Sicherheit beginnt bei den Fenstern und Türen. Achten Sie auf geprüfte Sicherheitsschlösser.</p>
        `
    },
    {
        slug: 'sicherheitsschloss-wechseln',
        title: 'Sicherheitsschloss wechseln: Wann ist es nötig und was kostet es?',
        description: 'Alles Wissenswerte über den Austausch von Zylinderschlössern und Sicherheitsriegeln.',
        readTime: '8 Min. Lesezeit',
        datePublished: '2024-11-15T12:00:00+01:00',
        dateModified: '2024-11-15T12:00:00+01:00',
        imageUrl: `${ARTICLE_BASE_URL}/images/sicherheitsschloss-hero.jpg`,
        content: `
            <p>Der Wechsel eines Sicherheitsschlosses kann aus verschiedenen Gründen notwendig sein, z.B. bei Schlüsselverlust.</p>
        `
    },
    {
        slug: 'schliessanlage-planen',
        title: 'Schließanlage planen: Der komplette Leitfaden für Mehrfamilienhäuser',
        description: 'Wie Sie die perfekte Schließanlage für Ihre Immobilie planen und installieren lassen.',
        readTime: '10 Min. Lesezeit',
        datePublished: '2024-11-10T08:00:00+01:00',
        dateModified: '2024-11-10T08:00:00+01:00',
        imageUrl: `${ARTICLE_BASE_URL}/images/schliessanlage-hero.jpg`,
        content: `
            <p>Eine gute Schließanlage bietet Komfort und Sicherheit. Wir helfen Ihnen bei der Auswahl der Komponenten.</p>
        `
    },
    {
        slug: 'briefkasten-oeffnen',
        title: 'Briefkasten öffnen: Was tun bei Schlüsselverlust oder Defekt?',
        description: 'Anleitungen und Tipps, wenn Sie Ihren Briefkastenschlüssel verloren haben oder das Schloss klemmt.',
        readTime: '4 Min. Lesezeit',
        datePublished: '2024-10-25T13:00:00+01:00',
        dateModified: '2024-10-25T13:00:00+01:00',
        imageUrl: `${ARTICLE_BASE_URL}/images/briefkasten-hero.jpg`,
        content: `
            <p>Der Verlust eines Briefkastenschlüssels ist ärgerlich, aber meist schnell behoben.</p>
        `
    },
    {
        slug: 'tresor-oeffnen',
        title: 'Tresor öffnen: Wenn der Code vergessen ist oder das Schloss streikt',
        description: 'Professionelle Tresoröffnung ohne Beschädigung des Inhalts.',
        readTime: '7 Min. Lesezeit',
        datePublished: '2024-10-15T11:00:00+01:00',
        dateModified: '2024-10-15T11:00:00+01:00',
        imageUrl: `${ARTICLE_BASE_URL}/images/tresor-hero.jpg`,
        content: `
            <p>Wir bieten diskrete und professionelle Tresoröffnungen für alle gängigen Modelle.</p>
        `
    },
    {
        slug: 'motorradschloss-defekt',
        title: 'Motorradschloss defekt: Hilfe bei Zünd- und Lenkradschloss-Problemen',
        description: 'Schnelle und mobile Lösungen für Motorradschlossdefekte.',
        readTime: '5 Min. Lesezeit',
        datePublished: '2024-10-01T15:00:00+01:00',
        dateModified: '2024-10-01T15:00:00+01:00',
        imageUrl: `${ARTICLE_BASE_URL}/images/motorradschloss-hero.jpg`,
        content: `
            <p>Ein defektes Motorradschloss kann die Fahrt schnell beenden. Rufen Sie unseren mobilen Service.</p>
        `
    },
    {
        slug: 'garagentor-oeffnen',
        title: 'Garagentor öffnen: Notdienst bei Schlüsselverlust oder Elektronikdefekt',
        description: 'Ratschläge und Notdienstleistungen für alle Arten von Garagentoren.',
        readTime: '6 Min. Lesezeit',
        datePublished: '2024-09-25T09:00:00+01:00',
        dateModified: '2024-09-25T09:00:00+01:00',
        imageUrl: `${ARTICLE_BASE_URL}/images/garagentor-hero.jpg`,
        content: `
            <p>Ob manuell oder elektrisch, Garagentore bazen takılabilir. Wir sind schnell vor Ort.</p>
        `
    },
    {
        slug: 'batteriewechsel-autoschluessel',
        title: 'Batteriewechsel beim Autoschlüssel: So gehts richtig',
        description: 'Eine einfache Anleitung, um die Batterie Ihres Autoschlüssels selbst zu wechseln.',
        readTime: '3 Min. Lesezeit',
        datePublished: '2024-09-15T11:00:00+01:00',
        dateModified: '2024-09-15T11:00:00+01:00',
        imageUrl: `${ARTICLE_BASE_URL}/images/batteriewechsel-hero.jpg`,
        content: `
            <p>Die meisten modernen Autoschlüssel eine CR2032 Batterie. Hier ist die Schritt-für-Schritt-Anleitung.</p>
        `
    }
];
function getArticleContentBySlug(slug) {
    return articlesData.find((article)=>article.slug === slug);
}
function getAllArticleSlugs() {
    return articlesData.map((article)=>({
            slug: article.slug
        }));
}
function getAllArticlesContent() {
    // Liste sayfasında kullanmak için makaleleri yayın tarihine göre sıralayabiliriz
    return articlesData.sort((a, b)=>new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime());
}
}),
"[project]/src/app/ratgeber/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/app/ratgeber/page.tsx - Makale Liste Sayfası
__turbopack_context__.s([
    "default",
    ()=>RatgeberPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$articles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/articles.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BookOpenIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/BookOpenIcon.js [app-rsc] (ecmascript) <export default as BookOpenIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ClockIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ClockIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/@heroicons/react/24/outline/esm/ClockIcon.js [app-rsc] (ecmascript) <export default as ClockIcon>");
;
;
;
;
const metadata = {
    title: 'Ratgeber: Tipps vom Schlüsseldienst Experten | [Firmenname]',
    description: 'Umfassende Anleitungen und Expertentipps zu Türöffnungen, Einbruchschutz, Autoschlüsseln und Sicherheitstechnik.',
    alternates: {
        canonical: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$articles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ARTICLE_BASE_URL"]}/ratgeber`
    }
};
async function RatgeberPage() {
    // Veri çekme (Sıralı olarak gelir)
    const articles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$articles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllArticlesContent"])();
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Startseite",
                "item": __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$articles$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ARTICLE_BASE_URL"]
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Ratgeber"
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "container mx-auto px-4 py-12 max-w-6xl",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("script", {
                type: "application/ld+json",
                dangerouslySetInnerHTML: {
                    __html: JSON.stringify(breadcrumbSchema)
                }
            }, void 0, false, {
                fileName: "[project]/src/app/ratgeber/page.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "text-center mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl font-extrabold text-gray-900 mb-4",
                        children: "Ihr Ratgeber für Sicherheit und Schlösser"
                    }, void 0, false, {
                        fileName: "[project]/src/app/ratgeber/page.tsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-gray-600 max-w-3xl mx-auto",
                        children: "Expertentipps zu Schlüsselverlust, Einbruchschutz, Tresoren und unserem mobilen Schlüsselnotdienst."
                    }, void 0, false, {
                        fileName: "[project]/src/app/ratgeber/page.tsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/ratgeber/page.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                children: articles.map((article)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: `/ratgeber/${article.slug}`,
                        className: "block group",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-lg shadow-lg overflow-hidden h-full transform transition duration-300 group-hover:shadow-xl group-hover:scale-[1.02]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-blue-200 h-48 w-full flex items-center justify-center text-blue-800 text-lg font-bold",
                                    children: [
                                        "[Bild: ",
                                        article.slug,
                                        "]"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/ratgeber/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors",
                                            children: article.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ratgeber/page.tsx",
                                            lineNumber: 61,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 mb-4 text-sm line-clamp-3",
                                            children: article.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/ratgeber/page.tsx",
                                            lineNumber: 64,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex justify-between items-center text-xs text-gray-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$ClockIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ClockIcon$3e$__["ClockIcon"], {
                                                            className: "h-4 w-4 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ratgeber/page.tsx",
                                                            lineNumber: 70,
                                                            columnNumber: 41
                                                        }, this),
                                                        article.readTime
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/ratgeber/page.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$heroicons$2f$react$2f$24$2f$outline$2f$esm$2f$BookOpenIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpenIcon$3e$__["BookOpenIcon"], {
                                                            className: "h-4 w-4 mr-1"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/ratgeber/page.tsx",
                                                            lineNumber: 74,
                                                            columnNumber: 41
                                                        }, this),
                                                        "Zum Artikel"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/ratgeber/page.tsx",
                                                    lineNumber: 73,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/ratgeber/page.tsx",
                                            lineNumber: 68,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/ratgeber/page.tsx",
                                    lineNumber: 60,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/ratgeber/page.tsx",
                            lineNumber: 53,
                            columnNumber: 25
                        }, this)
                    }, article.slug, false, {
                        fileName: "[project]/src/app/ratgeber/page.tsx",
                        lineNumber: 52,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/ratgeber/page.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-12 text-center border-t pt-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-700",
                    children: [
                        "Im Notfall? Rufen Sie uns direkt an: ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                            children: "0177 3977646"
                        }, void 0, false, {
                            fileName: "[project]/src/app/ratgeber/page.tsx",
                            lineNumber: 85,
                            columnNumber: 91
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/ratgeber/page.tsx",
                    lineNumber: 85,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/ratgeber/page.tsx",
                lineNumber: 84,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/ratgeber/page.tsx",
        lineNumber: 36,
        columnNumber: 9
    }, this);
}
}),
"[project]/src/app/ratgeber/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/ratgeber/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__2026c254._.js.map