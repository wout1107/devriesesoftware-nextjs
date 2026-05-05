export type ServiceData = {
    slug: string
    name: string
    shortLabel: string
    shortDescription: string
    longDescription: string
    icon: string
    features: { title: string; description: string; icon: string }[]
    order: number
}

export const services: ServiceData[] = [
    {
        slug: 'website-laten-maken',
        name: 'Website laten maken',
        shortLabel: 'Website laten maken',
        icon: 'Globe',
        order: 1,
        shortDescription:
            'Razendsnelle, op maat ontwikkelde websites die scoren in Google en bezoekers omzetten in klanten.',
        longDescription:
            'Wij bouwen websites met moderne technologie zoals Next.js en React. Geen templates, maar een unieke uitstraling met perfecte Lighthouse-scores en gebruiksvriendelijk CMS. Ideaal voor KMO\'s, zelfstandigen en bedrijven die online willen groeien.',
        features: [
            { title: 'Razendsnel', description: 'Lighthouse 95+ score gegarandeerd', icon: 'Zap' },
            { title: 'Mobile First', description: 'Perfect op elk scherm', icon: 'Smartphone' },
            { title: 'SEO-klaar', description: 'Geoptimaliseerd voor Google', icon: 'Search' },
            { title: 'CMS', description: 'Eenvoudig zelf beheren', icon: 'Edit' },
        ],
    },
    {
        slug: 'webshop-laten-maken',
        name: 'Webshop laten maken',
        shortLabel: 'Webshop',
        icon: 'ShoppingCart',
        order: 2,
        shortDescription:
            'E-commerce platforms met betaalintegratie, voorraadbeheer en optimale conversie.',
        longDescription:
            'Of u nu kiest voor Shopify, Medusa of een volledig op maat gecodeerde Next.js webshop: wij bouwen e-commerce omgevingen met Bancontact, Payconiq en automatische facturatie. Snelheid en check-out flow staan centraal.',
        features: [
            { title: 'Betaalmethodes', description: 'Bancontact, Payconiq, Mollie', icon: 'CreditCard' },
            { title: 'Voorraad', description: 'Realtime synchronisatie', icon: 'Package' },
            { title: 'Snelle check-out', description: 'Minder afhakers', icon: 'CheckCircle2' },
            { title: 'Mobile-first', description: 'Verkoop ook via smartphone', icon: 'Smartphone' },
        ],
    },
    {
        slug: 'webapplicatie-laten-maken',
        name: 'Webapplicatie laten maken',
        shortLabel: 'Webapplicatie',
        icon: 'LayoutDashboard',
        order: 3,
        shortDescription:
            'SaaS platforms en bedrijfsapplicaties op maat: dashboards, portalen, automatisering.',
        longDescription:
            'Custom webapplicaties die uw bedrijfsprocessen digitaliseren. Van klantportaal tot management dashboard, met user authentication, rolbeheer en API-integraties. Schaalbaar gebouwd met Node.js en moderne databases.',
        features: [
            { title: 'Op maat', description: 'Exact uw workflow', icon: 'Settings' },
            { title: 'Authentication', description: 'Veilige login & rolbeheer', icon: 'Lock' },
            { title: 'API-integratie', description: 'Koppel met bestaande systemen', icon: 'Plug' },
            { title: 'Schaalbaar', description: 'Groeit mee met uw bedrijf', icon: 'TrendingUp' },
        ],
    },
    {
        slug: 'app-ontwikkeling',
        name: 'App ontwikkeling',
        shortLabel: 'Mobile app',
        icon: 'Smartphone',
        order: 4,
        shortDescription:
            'Native en cross-platform mobile apps voor iOS en Android, gebouwd met React Native.',
        longDescription:
            'Mobile apps die werken op iPhone én Android dankzij React Native. Push notifications, offline modus, integratie met camera/GPS. Van idee tot publicatie in App Store en Play Store.',
        features: [
            { title: 'iOS + Android', description: 'Eén codebase, twee platforms', icon: 'Smartphone' },
            { title: 'Push notifications', description: 'Bereik gebruikers direct', icon: 'Bell' },
            { title: 'Offline first', description: 'Werkt zonder internet', icon: 'WifiOff' },
            { title: 'App stores', description: 'Publicatie inbegrepen', icon: 'Upload' },
        ],
    },
    {
        slug: 'seo-optimalisatie',
        name: 'SEO optimalisatie',
        shortLabel: 'SEO',
        icon: 'Search',
        order: 6,
        shortDescription:
            'Technische en lokale SEO zodat uw bedrijf bovenaan staat in Google voor relevante zoektermen.',
        longDescription:
            'SEO die werkt: technische audits, Core Web Vitals, schema.org markup, lokale optimalisatie en content strategie. Wij focussen op meetbaar resultaat in plaats van vage rapporten.',
        features: [
            { title: 'Technische SEO', description: 'Core Web Vitals & schema', icon: 'Code' },
            { title: 'Lokale SEO', description: 'Google My Business optimalisatie', icon: 'MapPin' },
            { title: 'Content', description: 'Zoekwoord-onderzoek + tekst', icon: 'FileText' },
            { title: 'Rapportage', description: 'Maandelijks meetbaar resultaat', icon: 'BarChart3' },
        ],
    },
    {
        slug: 'webdesign-bureau',
        name: 'Webdesign bureau',
        shortLabel: 'Webdesign',
        icon: 'Palette',
        order: 7,
        shortDescription:
            'UX/UI design dat conversie verhoogt en uw merkidentiteit versterkt.',
        longDescription:
            'Strak design dat verder gaat dan plaatjes kiezen. We bouwen de gebruikerservaring op vanaf wireframe tot pixel-perfect mockup, met focus op conversie en toegankelijkheid (WCAG).',
        features: [
            { title: 'UX research', description: 'Gebruiker centraal', icon: 'Users' },
            { title: 'Pixel-perfect', description: 'Tot in het detail', icon: 'Eye' },
            { title: 'Toegankelijk', description: 'WCAG-conform', icon: 'Accessibility' },
            { title: 'Brand identity', description: 'Versterkt uw merk', icon: 'Award' },
        ],
    },
    {
        slug: 'software-op-maat',
        name: 'Software op maat',
        shortLabel: 'Software op maat',
        icon: 'Code',
        order: 8,
        shortDescription:
            'Bespoke software-oplossingen voor unieke bedrijfsprocessen die geen standaard pakket aankan.',
        longDescription:
            'Wanneer Excel niet meer volstaat en SaaS te beperkend is. Wij bouwen op maat gecodeerde tools, automatiseringen en interne systemen exact afgestemd op hoe u werkt.',
        features: [
            { title: 'Bespoke', description: '100% op uw proces afgestemd', icon: 'Wrench' },
            { title: 'Automatisering', description: 'Bespaart uren per week', icon: 'Bot' },
            { title: 'Eigendom', description: 'Code is uw eigendom', icon: 'Key' },
            { title: 'Onderhoud', description: 'Lange-termijn support', icon: 'LifeBuoy' },
        ],
    },
    {
        slug: 'online-boeking-systeem',
        name: 'Online boekingssysteem',
        shortLabel: 'Boekingssysteem',
        icon: 'Calendar',
        order: 9,
        shortDescription:
            'Boekingsmodules op maat voor kappers, therapeuten, B&B\'s en consultants — 24/7 reserveren.',
        longDescription:
            'Klanten reserveren zelf hun afspraak, gesynchroniseerd met Google Calendar of Outlook. Automatische bevestigings- en herinnermails verminderen no-shows aanzienlijk.',
        features: [
            { title: 'Agenda-sync', description: 'Google + Outlook', icon: 'Calendar' },
            { title: 'Reminders', description: 'Minder no-shows', icon: 'Bell' },
            { title: 'Online betaling', description: 'Vooraf betalen optioneel', icon: 'CreditCard' },
            { title: 'Eigen branding', description: 'Past in uw website', icon: 'Palette' },
        ],
    },
    {
        slug: 'website-onderhoud',
        name: 'Website onderhoud',
        shortLabel: 'Onderhoud',
        icon: 'Wrench',
        order: 10,
        shortDescription:
            'Maandelijkse onderhoudscontracten: updates, beveiliging, backups en performance-monitoring.',
        longDescription:
            'Een website is nooit af. Met onze maandcontracten blijft uw site veilig, snel en up-to-date. Inclusief proactieve monitoring, automatische backups en SEO-checks.',
        features: [
            { title: 'Updates', description: 'Plugins & dependencies', icon: 'RefreshCw' },
            { title: 'Backups', description: 'Dagelijks automatisch', icon: 'Database' },
            { title: 'Beveiliging', description: 'Hardening & monitoring', icon: 'Shield' },
            { title: 'Support', description: 'Snel bereikbaar', icon: 'Headphones' },
        ],
    },
]
