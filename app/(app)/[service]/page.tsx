import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, MapPin, CheckCircle2, Phone } from 'lucide-react'
import FadeUp from '@/components/animations/FadeUp'
import StaggerGroup from '@/components/animations/StaggerGroup'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import { SITE_URL, breadcrumbJsonLd, jsonLdScript } from '@/lib/seo/jsonLd'
import '@/styles/Seo.css'

interface PageProps {
    params: Promise<{ service: string }>
}

export const dynamicParams = false
export const revalidate = 86400

export async function generateStaticParams() {
    try {
        const payload = await getPayload({ config: configPromise })
        const { docs } = await payload.find({ collection: 'services', limit: 100 })
        return docs.map((s: any) => ({ service: s.slug }))
    } catch {
        return []
    }
}

async function loadService(slug: string) {
    const payload = await getPayload({ config: configPromise })
    const { docs } = await payload.find({
        collection: 'services',
        where: { slug: { equals: slug } },
        limit: 1,
    })
    return docs[0] ?? null
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { service } = await params
    const svc = await loadService(service)
    if (!svc) return { title: 'Pagina niet gevonden' }
    const url = `${SITE_URL}/${service}`
    const title = `${svc.name} in heel Vlaanderen | Devriese Software`
    return {
        title,
        description: svc.shortDescription,
        alternates: { canonical: url },
        openGraph: { title, description: svc.shortDescription, url, type: 'website', locale: 'nl_BE' },
    }
}

const PROVINCE_LABELS: Record<string, string> = {
    'west-vlaanderen': 'West-Vlaanderen',
    'oost-vlaanderen': 'Oost-Vlaanderen',
    'antwerpen': 'Antwerpen',
    'vlaams-brabant': 'Vlaams-Brabant',
    'limburg': 'Limburg',
}

export default async function ServiceHub({ params }: PageProps) {
    const { service } = await params
    const svc = await loadService(service)
    if (!svc) return notFound()

    const payload = await getPayload({ config: configPromise })
    const { docs: pages } = await payload.find({
        collection: 'local-pages',
        where: { service: { equals: svc.id } },
        depth: 1,
        limit: 100,
    })

    const byProvince = new Map<string, any[]>()
    for (const p of pages) {
        const cty = p.city as any
        if (!cty) continue
        const prov = cty.province
        if (!byProvince.has(prov)) byProvince.set(prov, [])
        byProvince.get(prov)!.push(p)
    }

    const url = `${SITE_URL}/${service}`
    const crumbsLd = breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL },
        { name: svc.shortLabel, url },
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
                    <Breadcrumbs items={[{ name: svc.shortLabel }]} />
                    <FadeUp>
                        <h1 className="seo__title">
                            {svc.name} <span className="seo__title-accent">in heel Vlaanderen</span>
                        </h1>
                    </FadeUp>
                    <FadeUp delay={0.1}>
                        <p className="seo__lead">{svc.longDescription}</p>
                    </FadeUp>
                    <FadeUp delay={0.2}>
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

            {/* Features */}
            {svc.features && svc.features.length > 0 && (
                <section className="seo__section seo__section--white">
                    <div className="seo__container seo__container--wide">
                        <FadeUp>
                            <div className="seo__section-header seo__section-header--centered">
                                <h2 className="seo__h2 seo__h2--centered">
                                    Waarom {svc.shortLabel.toLowerCase()} bij Devriese Software?
                                </h2>
                                <p className="seo__lead seo__lead--centered">
                                    Wat ons werk anders maakt — en waarom KMO&apos;s en zelfstandigen voor ons kiezen.
                                </p>
                            </div>
                        </FadeUp>
                        <StaggerGroup className="seo__grid seo__grid--4">
                            {svc.features.map((f: any, i: number) => (
                                <div key={i} className="seo__card seo__card--beige">
                                    <span className="seo__card-icon">
                                        <CheckCircle2 size={26} />
                                    </span>
                                    <h3 className="seo__card-title">{f.title}</h3>
                                    <p className="seo__card-desc">{f.description}</p>
                                </div>
                            ))}
                        </StaggerGroup>
                    </div>
                </section>
            )}

            {/* Cities by province */}
            <section className="seo__section seo__section--beige">
                <div className="seo__container seo__container--wide">
                    <FadeUp>
                        <div className="seo__section-header">
                            <span className="seo__eyebrow">
                                <MapPin size={14} />
                                Lokale aanwezigheid
                            </span>
                            <h2 className="seo__h2">{svc.shortLabel} per regio</h2>
                            <p className="seo__lead">
                                Kies uw stad voor specifieke informatie en lokale referenties.
                            </p>
                        </div>
                    </FadeUp>

                    <div>
                        {[...byProvince.entries()]
                            .sort((a, b) => a[0].localeCompare(b[0]))
                            .map(([prov, items]) => (
                                <FadeUp key={prov}>
                                    <div className="seo__province-group">
                                        <h3 className="seo__province-title">
                                            {PROVINCE_LABELS[prov] || prov}
                                        </h3>
                                        <div className="seo__city-grid">
                                            {items
                                                .sort((a: any, b: any) =>
                                                    a.city.name.localeCompare(b.city.name),
                                                )
                                                .map((p: any) => (
                                                    <Link
                                                        key={p.id}
                                                        href={`/${service}/${p.city.slug}`}
                                                        className="seo__city-link"
                                                    >
                                                        <span>{p.city.name}</span>
                                                        <ArrowRight size={16} />
                                                    </Link>
                                                ))}
                                        </div>
                                    </div>
                                </FadeUp>
                            ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="seo__section seo__section--dark">
                <div className="seo__orbs" aria-hidden>
                    <span className="seo__orb seo__orb--orange-bl" style={{ opacity: 0.12 }} />
                </div>
                <div className="seo__container seo__cta-band seo__cta-band--dark">
                    <FadeUp>
                        <h2 className="seo__cta-band-title" style={{ color: 'var(--color-beige)' }}>
                            Niet uw stad gezien?
                        </h2>
                        <p className="seo__cta-band-text">
                            Wij werken voor klanten in heel Vlaanderen. Vraag een vrijblijvende offerte aan en we komen graag tot bij u.
                        </p>
                        <div className="seo__cta-row seo__cta-row--centered">
                            <Link href="/contact" className="seo-btn seo-btn--primary">
                                Vraag een offerte
                                <ArrowRight size={20} />
                            </Link>
                            <a href="tel:+32498525482" className="seo-btn seo-btn--white">
                                <Phone size={20} />
                                +32 498 52 54 82
                            </a>
                        </div>
                    </FadeUp>
                </div>
            </section>
        </div>
    )
}
