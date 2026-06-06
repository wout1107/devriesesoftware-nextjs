import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import {
    ArrowRight,
    MapPin,
    CheckCircle2,
    Zap,
    Smartphone,
    Shield,
    Phone,
    Mail,
    Quote,
} from 'lucide-react'
import FadeUp from '@/components/animations/FadeUp'
import StaggerGroup from '@/components/animations/StaggerGroup'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import FaqAccordion from '@/components/seo/FaqAccordion'
import RelatedGrid from '@/components/seo/RelatedGrid'
import {
    SITE_URL,
    breadcrumbJsonLd,
    faqJsonLd,
    jsonLdScript,
    localBusinessJsonLd,
    serviceJsonLd,
} from '@/lib/seo/jsonLd'
import { getCityContent } from '@/scripts/data/cityContent'
import '@/styles/Seo.css'

interface PageProps {
    params: Promise<{ service: string; city: string }>
}

export const dynamicParams = false
export const revalidate = 86400

export async function generateStaticParams() {
    try {
        const payload = await getPayload({ config: configPromise })
        const pages = await payload.find({
            collection: 'local-pages',
            limit: 1000,
            depth: 2,
        })
        return pages.docs
            .map((p: any) => {
                const svc = typeof p.service === 'object' ? p.service?.slug : null
                const city = typeof p.city === 'object' ? p.city?.slug : null
                if (!svc || !city) return null
                return { service: svc, city }
            })
            .filter(Boolean) as { service: string; city: string }[]
    } catch (err) {
        console.warn('generateStaticParams skipped (DB not ready):', err)
        return []
    }
}

async function loadPage(serviceSlug: string, citySlug: string) {
    const payload = await getPayload({ config: configPromise })
    const slug = `${serviceSlug}--${citySlug}`
    const { docs } = await payload.find({
        collection: 'local-pages',
        where: { slug: { equals: slug } },
        depth: 2,
        limit: 1,
    })
    return docs[0] ?? null
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { service, city } = await params
    const page = await loadPage(service, city)
    if (!page) return { title: 'Pagina niet gevonden' }
    const url = `${SITE_URL}/${service}/${city}`
    const svc: any = page.service
    const cty: any = page.city
    const ogImage = `/api/og?service=${encodeURIComponent(
        svc?.shortLabel || 'Web development',
    )}&city=${encodeURIComponent(cty?.name || '')}`
    return {
        title: page.metaTitle,
        description: page.metaDescription,
        alternates: { canonical: url },
        openGraph: {
            title: page.metaTitle,
            description: page.metaDescription,
            url,
            type: 'website',
            locale: 'nl_BE',
            siteName: 'Devriese Software',
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: `${svc?.shortLabel || 'Web development'} in ${cty?.name || 'Vlaanderen'}`,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: page.metaTitle,
            description: page.metaDescription,
            images: [ogImage],
        },
    }
}

const PROVINCE_LABELS: Record<string, string> = {
    'west-vlaanderen': 'West-Vlaanderen',
    'oost-vlaanderen': 'Oost-Vlaanderen',
    'antwerpen': 'Antwerpen',
    'vlaams-brabant': 'Vlaams-Brabant',
    'limburg': 'Limburg',
}

export default async function ServiceCityPage({ params }: PageProps) {
    const { service, city } = await params
    const page = await loadPage(service, city)
    if (!page) return notFound()

    const svc: any = page.service
    const cty: any = page.city
    if (!svc || !cty) return notFound()

    const payload = await getPayload({ config: configPromise })

    const neighborSlugs: string[] = (cty.neighborSlugs || []).map((n: any) => n.slug)
    const relatedCityDocs = await payload.find({
        collection: 'local-pages',
        where: {
            and: [
                { service: { equals: svc.id } },
                { 'city.slug': { in: neighborSlugs.length ? neighborSlugs : [cty.slug] } },
            ],
        },
        depth: 1,
        limit: 5,
    })

    const otherServiceDocs = await payload.find({
        collection: 'local-pages',
        where: {
            and: [
                { city: { equals: cty.id } },
                { service: { not_equals: svc.id } },
            ],
        },
        depth: 1,
        limit: 4,
    })

    const url = `${SITE_URL}/${service}/${city}`
    const provinceLabel = PROVINCE_LABELS[cty.province as string] || cty.province
    const cityInfo = getCityContent(cty.slug)

    const localBusiness = localBusinessJsonLd({
        serviceName: svc.shortLabel,
        cityName: cty.name,
        cityRegion: provinceLabel,
        description: page.metaDescription,
        url,
    })
    const serviceLd = serviceJsonLd({
        serviceName: svc.shortLabel,
        cityName: cty.name,
        description: page.metaDescription,
        url,
    })
    const faqLd = faqJsonLd(page.faqs)
    const crumbsLd = breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL },
        { name: svc.shortLabel, url: `${SITE_URL}/${service}` },
        { name: cty.name, url },
    ])

    return (
        <div className="seo">
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(localBusiness)} />
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(serviceLd)} />
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(faqLd)} />
            <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(crumbsLd)} />

            {/* Hero */}
            <section className="seo__hero">
                <div className="seo__hero-bg" aria-hidden />
                <div className="seo__orbs" aria-hidden>
                    <span className="seo__orb seo__orb--green-tr" />
                    <span className="seo__orb seo__orb--orange-bl" />
                </div>
                <div className="seo__hero-content">
                    <Breadcrumbs
                        items={[
                            { name: svc.shortLabel, href: `/${service}` },
                            { name: cty.name },
                        ]}
                    />
                    <FadeUp>
                        <span className="seo__eyebrow">
                            <MapPin size={16} />
                            Lokaal in {cty.name} · {provinceLabel}
                        </span>
                    </FadeUp>
                    <FadeUp delay={0.1}>
                        <h1 className="seo__title">{page.h1}</h1>
                    </FadeUp>
                    <FadeUp delay={0.2}>
                        <p className="seo__lead">{page.intro}</p>
                    </FadeUp>
                    <FadeUp delay={0.3}>
                        <div className="seo__cta-row">
                            <Link href="/contact" className="seo-btn seo-btn--primary">
                                Vraag offerte aan
                                <ArrowRight size={18} />
                            </Link>
                            <Link href="/portfolio" className="seo-btn seo-btn--secondary">
                                Bekijk portfolio
                            </Link>
                        </div>
                    </FadeUp>
                </div>
            </section>

            {/* Expertise */}
            <section className="seo__section seo__section--white">
                <div className="seo__container">
                    <FadeUp>
                        <div className="seo__section-header">
                            <h2 className="seo__h2">
                                Onze aanpak voor {svc.shortLabel.toLowerCase()} in {cty.name}
                            </h2>
                        </div>
                    </FadeUp>
                    <FadeUp delay={0.1}>
                        <p className="seo__body seo__body--large">{page.expertiseSection}</p>
                    </FadeUp>
                    <div className="seo__divider-lg" />
                    <StaggerGroup className="seo__grid seo__grid--3">
                        <FeatureCard
                            icon={<Zap size={26} />}
                            title="Snelheid"
                            description="Lighthouse 95+ score. Core Web Vitals consequent groen."
                        />
                        <FeatureCard
                            icon={<Smartphone size={26} />}
                            title="Mobile First"
                            description="Perfect op smartphone, tablet en desktop — getest op echte toestellen."
                        />
                        <FeatureCard
                            icon={<Shield size={26} />}
                            title="Veiligheid"
                            description="HTTPS, hardening, automatische backups en monitoring."
                        />
                    </StaggerGroup>
                </div>
            </section>

            {/* Process */}
            <section className="seo__section seo__section--beige">
                <div className="seo__container">
                    <FadeUp>
                        <div className="seo__section-header">
                            <span className="seo__eyebrow">Werkwijze</span>
                            <h2 className="seo__h2">Zo verloopt uw project</h2>
                            <p className="seo__lead">
                                Heldere fases, transparante communicatie, geen verrassingen onderweg.
                            </p>
                        </div>
                    </FadeUp>
                    <StaggerGroup className="seo__grid seo__grid--4">
                        {page.processSteps.map((step: any, i: number) => (
                            <div key={i} className="seo__step">
                                <span className="seo__step-number">{i + 1}</span>
                                <h3 className="seo__step-title">{step.title}</h3>
                                <p className="seo__step-desc">{step.description}</p>
                            </div>
                        ))}
                    </StaggerGroup>
                </div>
            </section>

            {/* Local Advantage */}
            <section className="seo__section seo__section--white">
                <div className="seo__container seo__container--wide">
                    <div className="seo__two-col">
                        <FadeUp>
                            <div>
                                <span className="seo__eyebrow seo__eyebrow--inverse">
                                    <CheckCircle2 size={14} />
                                    Lokale expertise
                                </span>
                                <h2 className="seo__h2">
                                    Waarom een lokale partner uit West-Vlaanderen?
                                </h2>
                                <p className="seo__body seo__body--large">
                                    {page.localAdvantageSection}
                                </p>
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.15}>
                            <div className="seo__info-wrap">
                                <div className="seo__info-bg" aria-hidden />
                                <div className="seo__info-card">
                                    <h3 className="seo__info-card-title">Devriese Software</h3>
                                    <ul className="seo__info-list">
                                        <li className="seo__info-row">
                                            <span className="seo__info-icon">
                                                <MapPin size={20} />
                                            </span>
                                            <span className="seo__info-text">
                                                <strong>Vinktse Binnenweg 3</strong>
                                                <small>
                                                    8700 Kanegem (Tielt) · ~{cty.distanceFromKanegem} km van {cty.name}
                                                </small>
                                            </span>
                                        </li>
                                        <li className="seo__info-row">
                                            <span className="seo__info-icon">
                                                <Phone size={20} />
                                            </span>
                                            <a href="tel:+32498525482" className="seo__info-link">
                                                +32 498 52 54 82
                                            </a>
                                        </li>
                                        <li className="seo__info-row">
                                            <span className="seo__info-icon">
                                                <Mail size={20} />
                                            </span>
                                            <a
                                                href="mailto:info@devriesesoftware.be"
                                                className="seo__info-link"
                                            >
                                                info@devriesesoftware.be
                                            </a>
                                        </li>
                                        <li className="seo__info-row">
                                            <span className="seo__info-icon">
                                                <CheckCircle2 size={20} />
                                            </span>
                                            <span className="seo__info-text">
                                                <small>Persoonlijk contact, korte communicatielijnen</small>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </FadeUp>
                    </div>
                </div>
            </section>

            {/* Lokale context — uniek per stad */}
            {cityInfo && (
                <section className="seo__section seo__section--beige">
                    <div className="seo__container seo__container--narrow">
                        <FadeUp>
                            <div className="seo__section-header">
                                <span className="seo__eyebrow">
                                    <MapPin size={14} />
                                    Ondernemen in {cty.name}
                                </span>
                                <h2 className="seo__h2">
                                    {svc.shortLabel} voor bedrijven in {cty.name}
                                </h2>
                            </div>
                        </FadeUp>
                        <FadeUp delay={0.1}>
                            <p className="seo__body seo__body--large">{cityInfo.profile}</p>
                        </FadeUp>
                        <FadeUp delay={0.15}>
                            <p className="seo__body">
                                Het lokale ondernemersweefsel — {cityInfo.economy.toLowerCase()} — vraagt
                                om een website die snel laadt, vlot gevonden wordt in Google en
                                vertrouwen wekt bij wie in {cty.name} en omgeving zoekt. Daar bouwen
                                we als lokale partner ({cty.distanceFromKanegem} km van Kanegem)
                                jouw {svc.shortLabel.toLowerCase()} op af.
                            </p>
                        </FadeUp>
                        {cityInfo.knownFor.length > 0 && (
                            <FadeUp delay={0.2}>
                                <ul className="seo__chips" aria-label={`Kenmerken van ${cty.name}`}>
                                    {cityInfo.knownFor.map((k) => (
                                        <li key={k} className="seo__chip">
                                            {k}
                                        </li>
                                    ))}
                                </ul>
                            </FadeUp>
                        )}
                    </div>
                </section>
            )}

            {/* Testimonial */}
            {page.testimonialQuote && (
                <section className="seo__section seo__section--dark">
                    <div className="seo__orbs" aria-hidden>
                        <span className="seo__orb seo__orb--white-c" style={{ opacity: 0.04 }} />
                    </div>
                    <div className="seo__container seo__container--narrow">
                        <FadeUp>
                            <div className="seo__testimonial">
                                <Quote size={48} className="seo__testimonial-icon" />
                                <blockquote className="seo__testimonial-quote">
                                    &ldquo;{page.testimonialQuote}&rdquo;
                                </blockquote>
                                {page.testimonialAuthor && (
                                    <cite className="seo__testimonial-author">
                                        — {page.testimonialAuthor}
                                    </cite>
                                )}
                            </div>
                        </FadeUp>
                    </div>
                </section>
            )}

            {/* FAQ */}
            <section className="seo__section seo__section--beige">
                <div className="seo__container seo__container--narrow">
                    <FadeUp>
                        <div className="seo__section-header">
                            <span className="seo__eyebrow">FAQ</span>
                            <h2 className="seo__h2">Veelgestelde vragen</h2>
                            <p className="seo__lead">
                                {svc.shortLabel} in {cty.name} — antwoorden op de vragen die we het vaakst krijgen.
                            </p>
                        </div>
                    </FadeUp>
                    <FadeUp delay={0.1}>
                        <FaqAccordion faqs={page.faqs} />
                    </FadeUp>
                </div>
            </section>

            {/* Related */}
            <section className="seo__section seo__section--white">
                <div className="seo__container seo__container--wide seo__related-stack">
                    {otherServiceDocs.docs.length > 0 && (
                        <FadeUp>
                            <RelatedGrid
                                title={`Andere diensten in ${cty.name}`}
                                columns={4}
                                items={otherServiceDocs.docs.map((d: any) => ({
                                    title: d.service?.shortLabel || 'Dienst',
                                    subtitle: cty.name,
                                    href: `/${d.service?.slug}/${cty.slug}`,
                                }))}
                            />
                        </FadeUp>
                    )}
                    {relatedCityDocs.docs.length > 0 && (
                        <FadeUp>
                            <RelatedGrid
                                title={`${svc.shortLabel} in andere steden`}
                                columns={5}
                                items={relatedCityDocs.docs.map((d: any) => ({
                                    title: d.city?.name || 'Stad',
                                    subtitle: svc.shortLabel,
                                    href: `/${svc.slug}/${d.city?.slug}`,
                                }))}
                            />
                        </FadeUp>
                    )}
                    <FadeUp>
                        <div className="seo__bottom-link">
                            <Link href={`/regio/${cty.slug}`}>
                                Bekijk alle diensten in {cty.name}
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    </FadeUp>
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
                            {page.cta || `Klaar voor ${svc.shortLabel.toLowerCase()} in ${cty.name}?`}
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

function FeatureCard({
    icon,
    title,
    description,
}: {
    icon: React.ReactNode
    title: string
    description: string
}) {
    return (
        <div className="seo__card">
            <span className="seo__card-icon">{icon}</span>
            <h3 className="seo__card-title">{title}</h3>
            <p className="seo__card-desc">{description}</p>
        </div>
    )
}
