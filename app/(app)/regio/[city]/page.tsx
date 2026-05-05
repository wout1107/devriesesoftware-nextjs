import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, MapPin, Phone } from 'lucide-react'
import FadeUp from '@/components/animations/FadeUp'
import StaggerGroup from '@/components/animations/StaggerGroup'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { SITE_URL, breadcrumbJsonLd, jsonLdScript } from '@/lib/seo/jsonLd'
import '@/styles/Seo.css'

interface PageProps {
    params: Promise<{ city: string }>
}

export const dynamicParams = false
export const revalidate = 86400

export async function generateStaticParams() {
    try {
        const payload = await getPayload({ config: configPromise })
        const { docs } = await payload.find({ collection: 'cities', limit: 100 })
        return docs.map((c: any) => ({ city: c.slug }))
    } catch {
        return []
    }
}

async function loadCity(slug: string) {
    const payload = await getPayload({ config: configPromise })
    const { docs } = await payload.find({
        collection: 'cities',
        where: { slug: { equals: slug } },
        limit: 1,
    })
    return docs[0] ?? null
}

const PROVINCE_LABELS: Record<string, string> = {
    'west-vlaanderen': 'West-Vlaanderen',
    'oost-vlaanderen': 'Oost-Vlaanderen',
    'antwerpen': 'Antwerpen',
    'vlaams-brabant': 'Vlaams-Brabant',
    'limburg': 'Limburg',
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { city } = await params
    const cty = await loadCity(city)
    if (!cty) return { title: 'Pagina niet gevonden' }
    const url = `${SITE_URL}/regio/${city}`
    const title = `Webdevelopment in ${cty.name} | Devriese Software`
    const description = `Lokale web developer voor ${cty.name}. Websites, webshops, apps en software op maat. Persoonlijk contact, ${cty.distanceFromKanegem} km van Kanegem.`
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: { title, description, url, type: 'website', locale: 'nl_BE' },
    }
}

export default async function RegionHub({ params }: PageProps) {
    const { city } = await params
    const cty = await loadCity(city)
    if (!cty) return notFound()

    const payload = await getPayload({ config: configPromise })
    const { docs: pages } = await payload.find({
        collection: 'local-pages',
        where: { city: { equals: cty.id } },
        depth: 2,
        limit: 50,
    })
    pages.sort(
        (a: any, b: any) => (a.service?.order ?? 99) - (b.service?.order ?? 99),
    )

    const url = `${SITE_URL}/regio/${city}`
    const crumbsLd = breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL },
        { name: 'Regio', url: `${SITE_URL}/regio` },
        { name: cty.name, url },
    ])

    return (
        <div className="seo">
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(crumbsLd)} />

            {/* Hero */}
            <section className="seo__hero">
                <div className="seo__hero-bg" aria-hidden />
                <div className="seo__orbs" aria-hidden>
                    <span className="seo__orb seo__orb--green-tr" />
                    <span className="seo__orb seo__orb--orange-bl" />
                </div>
                <div className="seo__hero-content">
                    <Breadcrumbs items={[{ name: 'Regio' }, { name: cty.name }]} />
                    <FadeUp>
                        <span className="seo__eyebrow">
                            <MapPin size={16} />
                            {PROVINCE_LABELS[cty.province] || cty.province}
                        </span>
                    </FadeUp>
                    <FadeUp delay={0.1}>
                        <h1 className="seo__title">
                            Web developer voor{' '}
                            <span className="seo__title-accent">{cty.name}</span>
                        </h1>
                    </FadeUp>
                    <FadeUp delay={0.2}>
                        <p className="seo__lead">
                            Devriese Software bouwt websites, webshops en apps voor ondernemers in {cty.name} en omgeving.
                            Vanuit Kanegem ({cty.distanceFromKanegem} km) bedienen we klanten in heel{' '}
                            {PROVINCE_LABELS[cty.province] || cty.province}.
                        </p>
                    </FadeUp>
                    <FadeUp delay={0.3}>
                        <div className="seo__cta-row">
                            <Link href="/contact" className="seo-btn seo-btn--primary">
                                Vraag offerte aan
                                <ArrowRight size={18} />
                            </Link>
                            <a href="tel:+32498525482" className="seo-btn seo-btn--secondary">
                                <Phone size={18} />
                                +32 498 52 54 82
                            </a>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* Services */}
            <section className="seo__section seo__section--white">
                <div className="seo__container seo__container--wide">
                    <FadeUp>
                        <div className="seo__section-header seo__section-header--centered">
                            <h2 className="seo__h2 seo__h2--centered">
                                Onze diensten in {cty.name}
                            </h2>
                            <p className="seo__lead seo__lead--centered">
                                Van eenvoudige one-pager tot complex SaaS-platform — wij dekken alle web-development noden af.
                            </p>
                        </div>
                    </FadeUp>
                    <StaggerGroup className="seo__grid seo__grid--3">
                        {pages.map((p: any) => (
                            <Link
                                key={p.id}
                                href={`/${p.service.slug}/${cty.slug}`}
                                className="seo__service-tile"
                            >
                                <div className="seo__service-tile-head">
                                    <h3 className="seo__service-tile-title">
                                        {p.service.name}
                                    </h3>
                                    <ArrowRight size={22} className="seo__service-tile-arrow" />
                                </div>
                                <p className="seo__service-tile-desc">
                                    {p.service.shortDescription}
                                </p>
                            </Link>
                        ))}
                    </StaggerGroup>
                </div>
            </section>

            {/* CTA */}
            <section className="seo__section seo__section--accent">
                <div className="seo__orbs" aria-hidden>
                    <span className="seo__orb seo__orb--white-c" style={{ opacity: 0.12 }} />
                </div>
                <div className="seo__container seo__cta-band seo__cta-band--accent">
                    <FadeUp>
                        <h2 className="seo__cta-band-title" style={{ color: '#fff' }}>
                            Project in {cty.name}?
                        </h2>
                        <p className="seo__cta-band-text">
                            Vrijblijvend gesprek? Bel direct of stuur een mail. We reageren meestal dezelfde werkdag.
                        </p>
                        <div className="seo__cta-row seo__cta-row--centered">
                            <a href="tel:+32498525482" className="seo-btn seo-btn--white">
                                <Phone size={20} />
                                +32 498 52 54 82
                            </a>
                            <Link href="/contact" className="seo-btn seo-btn--dark">
                                Contactformulier
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </div>
    )
}
