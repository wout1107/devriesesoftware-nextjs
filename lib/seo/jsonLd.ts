type Faq = { question: string; answer: string }
type Breadcrumb = { name: string; url: string }

export const SITE_URL = 'https://devriesesoftware.be'

export const COMPANY = {
    name: 'Devriese Software',
    legalName: 'Devriese Software',
    url: SITE_URL,
    logo: `${SITE_URL}/DevrieseSoftwareRond.webp`,
    email: 'info@devriesesoftware.be',
    telephone: '+32498525482',
    vatID: 'BE 1017.993.323',
    address: {
        streetAddress: 'Vinktse Binnenweg 3',
        addressLocality: 'Kanegem',
        postalCode: '8700',
        addressRegion: 'West-Vlaanderen',
        addressCountry: 'BE',
    },
    geo: { lat: 50.997, lng: 3.323 },
}

export function localBusinessJsonLd(opts: {
    serviceName: string
    cityName: string
    cityRegion: string
    description: string
    url: string
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        '@id': `${opts.url}#localbusiness`,
        name: COMPANY.name,
        url: opts.url,
        logo: COMPANY.logo,
        image: COMPANY.logo,
        email: COMPANY.email,
        telephone: COMPANY.telephone,
        vatID: COMPANY.vatID,
        priceRange: '€€',
        description: opts.description,
        address: {
            '@type': 'PostalAddress',
            ...COMPANY.address,
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: COMPANY.geo.lat,
            longitude: COMPANY.geo.lng,
        },
        areaServed: {
            '@type': 'City',
            name: opts.cityName,
            containedInPlace: {
                '@type': 'AdministrativeArea',
                name: opts.cityRegion,
            },
        },
    }
}

export function serviceJsonLd(opts: {
    serviceName: string
    cityName: string
    description: string
    url: string
}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: opts.serviceName,
        name: `${opts.serviceName} ${opts.cityName}`,
        description: opts.description,
        provider: {
            '@type': 'ProfessionalService',
            name: COMPANY.name,
            url: SITE_URL,
            telephone: COMPANY.telephone,
        },
        areaServed: { '@type': 'City', name: opts.cityName },
        url: opts.url,
    }
}

export const SOCIAL_PROFILES = [
    'https://www.facebook.com/devriesesoftware',
    'https://github.com/Wout1107',
    'https://www.linkedin.com/in/wout-devriese-a0b460273/',
]

export function organizationJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: COMPANY.name,
        legalName: COMPANY.legalName,
        url: SITE_URL,
        logo: COMPANY.logo,
        image: COMPANY.logo,
        email: COMPANY.email,
        telephone: COMPANY.telephone,
        vatID: COMPANY.vatID,
        address: {
            '@type': 'PostalAddress',
            ...COMPANY.address,
        },
        founder: { '@type': 'Person', name: 'Wout Devriese' },
        sameAs: SOCIAL_PROFILES,
    }
}

export function websiteJsonLd() {
    return {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: COMPANY.name,
        inLanguage: 'nl-BE',
        publisher: { '@id': `${SITE_URL}/#organization` },
    }
}

export function faqJsonLd(faqs: Faq[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
        })),
    }
}

export function breadcrumbJsonLd(crumbs: Breadcrumb[]) {
    return {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: crumbs.map((c, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            name: c.name,
            item: c.url,
        })),
    }
}

export function jsonLdScript(data: unknown) {
    return {
        __html: JSON.stringify(data).replace(/</g, '\\u003c'),
    }
}
