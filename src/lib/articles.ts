// src/lib/articles.ts - TÜM Makalelerin İçerik ve Verileri

export const ARTICLE_BASE_URL = 'https://ihresite.de'; // Gerçek domaininizle güncelleyin!

export interface ArticleContent {
    slug: string;
    title: string;
    description: string;
    readTime: string;
    content: string; // HTML içeriği
    datePublished: string; 
    dateModified: string;  
    imageUrl: string;      
}

// Toplam 10 makale için örnek veri
const articlesData: ArticleContent[] = [
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
        `,
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
        `,
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
        `,
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
        `,
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
        `,
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
        `,
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
        `,
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
        `,
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
        `,
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
        `,
    },
];

// Dışa aktarılan veri çekme fonksiyonları
export function getArticleContentBySlug(slug: string): ArticleContent | undefined {
    return articlesData.find(article => article.slug === slug);
}

export function getAllArticleSlugs(): { slug: string }[] {
    return articlesData.map(article => ({ slug: article.slug }));
}

export function getAllArticlesContent(): ArticleContent[] {
    // Liste sayfasında kullanmak için makaleleri yayın tarihine göre sıralayabiliriz
    return articlesData.sort((a, b) => new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime());
}