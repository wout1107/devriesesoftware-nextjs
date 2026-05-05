export type LegacyRedirect = { from: string; to: string }

export const legacyRedirects: LegacyRedirect[] = [
    // Direct stad+dienst matches
    { from: '/webshop-laten-maken-tielt', to: '/webshop-laten-maken/tielt' },
    { from: '/webshop-bouwen-roeselare', to: '/webshop-laten-maken/roeselare' },
    { from: '/wordpress-specialist-waregem', to: '/website-laten-maken/waregem' },
    { from: '/seo-optimalisatie-lokale-bedrijven-tielt', to: '/seo-optimalisatie/tielt' },
    { from: '/online-boeking-systeem-laten-maken-tielt', to: '/online-boeking-systeem/tielt' },
    { from: '/website-onderhoud-beveiliging-regio-tielt', to: '/website-onderhoud/tielt' },
    { from: '/webdesigner-inhuren-deinze', to: '/webdesign-bureau/deinze' },
    { from: '/kmo-website-laten-bouwen-izegem', to: '/website-laten-maken/izegem' },
    { from: '/lokaal-webdesign-bureau-kanegem', to: '/webdesign-bureau/tielt' },
    { from: '/software-developer-op-maat-tielt', to: '/software-op-maat/tielt' },
    { from: '/freelance-web-developer-regio-tielt', to: '/software-op-maat/tielt' },
    { from: '/freelance-frontend-developer-tielt', to: '/software-op-maat/tielt' },

    // Cities not in our 30 → nearest
    { from: '/professionele-website-laten-maken-aalter', to: '/website-laten-maken/deinze' },
    { from: '/website-laten-maken-meulebeke', to: '/website-laten-maken/tielt' },
    { from: '/betaalbare-website-developer-wingene', to: '/website-laten-maken/tielt' },
    { from: '/website-voor-zelfstandigen-pittem', to: '/website-laten-maken/tielt' },
    { from: '/e-commerce-expert-oostrozebeke', to: '/webshop-laten-maken/roeselare' },

    // Generic regio → service hub
    { from: '/website-bouwen-west-vlaanderen', to: '/website-laten-maken' },
    { from: '/nieuwe-website-prijs-opvragen-west-vlaanderen', to: '/pricing' },

    // Service variant → closest dienst
    { from: '/google-ads-expert-tielt-deinze', to: '/seo-optimalisatie/tielt' },

    // Oude /lokaal/[slug] route — mirror de bestemmingen
    { from: '/lokaal/webshop-laten-maken-tielt', to: '/webshop-laten-maken/tielt' },
    { from: '/lokaal/webshop-bouwen-roeselare', to: '/webshop-laten-maken/roeselare' },
    { from: '/lokaal/wordpress-specialist-waregem', to: '/website-laten-maken/waregem' },
    { from: '/lokaal/seo-optimalisatie-lokale-bedrijven-tielt', to: '/seo-optimalisatie/tielt' },
    { from: '/lokaal/online-boeking-systeem-laten-maken-tielt', to: '/online-boeking-systeem/tielt' },
    { from: '/lokaal/website-onderhoud-beveiliging-regio-tielt', to: '/website-onderhoud/tielt' },
    { from: '/lokaal/webdesigner-inhuren-deinze', to: '/webdesign-bureau/deinze' },
    { from: '/lokaal/kmo-website-laten-bouwen-izegem', to: '/website-laten-maken/izegem' },
    { from: '/lokaal/lokaal-webdesign-bureau-kanegem', to: '/webdesign-bureau/tielt' },
    { from: '/lokaal/software-developer-op-maat-tielt', to: '/software-op-maat/tielt' },
    { from: '/lokaal/freelance-web-developer-regio-tielt', to: '/software-op-maat/tielt' },
    { from: '/lokaal/freelance-frontend-developer-tielt', to: '/software-op-maat/tielt' },
    { from: '/lokaal/professionele-website-laten-maken-aalter', to: '/website-laten-maken/deinze' },
    { from: '/lokaal/website-laten-maken-meulebeke', to: '/website-laten-maken/tielt' },
    { from: '/lokaal/betaalbare-website-developer-wingene', to: '/website-laten-maken/tielt' },
    { from: '/lokaal/website-voor-zelfstandigen-pittem', to: '/website-laten-maken/tielt' },
    { from: '/lokaal/e-commerce-expert-oostrozebeke', to: '/webshop-laten-maken/roeselare' },
    { from: '/lokaal/website-bouwen-west-vlaanderen', to: '/website-laten-maken' },
    { from: '/lokaal/nieuwe-website-prijs-opvragen-west-vlaanderen', to: '/pricing' },
    { from: '/lokaal/google-ads-expert-tielt-deinze', to: '/seo-optimalisatie/tielt' },
]
