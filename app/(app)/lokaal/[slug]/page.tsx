import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowRight, CheckCircle2, MapPin, Zap, Shield, Smartphone } from 'lucide-react'

interface PageProps {
    params: Promise<{
        slug: string
    }>
}

export async function generateStaticParams() {
    try {
        const payload = await getPayload({ config: configPromise })
        const pages = await payload.find({
            collection: 'landing-pages',
            limit: 100,
        })

        return pages.docs.map((page) => ({
            slug: page.slug,
        }))
    } catch (error) {
        console.warn('Database not ready during build, skipping static param generation:', error)
        return []
    }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const payload = await getPayload({ config: configPromise })
    const { docs } = await payload.find({
        collection: 'landing-pages',
        where: {
            slug: {
                equals: slug,
            },
        },
    })

    if (!docs.length) {
        return {
            title: 'Pagina niet gevonden',
        }
    }

    const page = docs[0]

    return {
        title: `${page.title} | Devriese Software`,
        description: page.intro ? page.intro.substring(0, 160) : undefined,
    }
}

export default async function LandingPage({ params }: PageProps) {
    const { slug } = await params
    const payload = await getPayload({ config: configPromise })
    const { docs } = await payload.find({
        collection: 'landing-pages',
        where: {
            slug: {
                equals: slug,
            },
        },
    })

    if (!docs.length) {
        return notFound()
    }

    const page = docs[0]

    return (
        <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-white dark:bg-neutral-950 pt-32 pb-20 lg:pt-40 lg:pb-28">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent dark:from-blue-900/10" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6">
                            <MapPin size={14} />
                            <span>Lokaal & Vertrouwd</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white mb-6 leading-tight">
                            {page.title}
                        </h1>
                        <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
                            {page.intro}
                        </p>
                        <div className="mt-10 flex flex-wrap gap-4 justify-center">
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-lg font-semibold transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30"
                            >
                                Start je project
                                <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="/portfolio"
                                className="inline-flex items-center gap-2 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700 px-8 py-3.5 rounded-lg font-medium transition-all"
                            >
                                Bekijk portfolio
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="py-20 bg-neutral-50 dark:bg-neutral-900">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">
                            Onze Aanpak
                        </h2>
                        <div className="prose prose-lg dark:prose-invert max-w-none text-neutral-600 dark:text-neutral-300">
                            <p className="whitespace-pre-wrap">{page.expertise}</p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-6 mt-12">
                            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-sm">
                                <Zap className="text-blue-500 mb-4" size={24} />
                                <h3 className="font-semibold text-lg mb-2 dark:text-white">Snelheid</h3>
                                <p className="text-neutral-500 dark:text-neutral-400 text-sm">Geoptimaliseerde code voor bliksemsnelle laadtijden.</p>
                            </div>
                            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-sm">
                                <Smartphone className="text-blue-500 mb-4" size={24} />
                                <h3 className="font-semibold text-lg mb-2 dark:text-white">Mobile First</h3>
                                <p className="text-neutral-500 dark:text-neutral-400 text-sm">Perfecte weergave op elk apparaat, van smartphone tot desktop.</p>
                            </div>
                            <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl border border-neutral-100 dark:border-neutral-700 shadow-sm">
                                <Shield className="text-blue-500 mb-4" size={24} />
                                <h3 className="font-semibold text-lg mb-2 dark:text-white">Veiligheid</h3>
                                <p className="text-neutral-500 dark:text-neutral-400 text-sm">Moderne beveiliging en automatische updates.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Local Advantage Section */}
            <section className="py-20 bg-white dark:bg-neutral-950">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 text-sm font-medium mb-6">
                                <CheckCircle2 size={14} />
                                <span>Lokale Expertise</span>
                            </div>
                            <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-6">
                                Waarom kiezen voor een lokale partner?
                            </h2>
                            <div className="prose prose-lg dark:prose-invert text-neutral-600 dark:text-neutral-300">
                                <p className="whitespace-pre-wrap">{page.localAdvantage}</p>
                            </div>
                            <div className="mt-8 flex gap-4">
                                <Link
                                    href="/contact"
                                    className="font-medium text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1"
                                >
                                    Maak een afspraak <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-600 rounded-2xl rotate-3 opacity-10"></div>
                            <div className="bg-neutral-100 dark:bg-neutral-900 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800 relative shadow-xl">
                                <h3 className="font-bold text-xl mb-4 dark:text-white">Devriese Software</h3>
                                <ul className="space-y-4">
                                    <li className="flex items-start gap-3">
                                        <MapPin className="text-blue-600 shrink-0 mt-1" size={18} />
                                        <span className="text-neutral-600 dark:text-neutral-300">Gevestigd in Kanegem (Tielt)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={18} />
                                        <span className="text-neutral-600 dark:text-neutral-300">Persoonlijk contact en korte lijnen</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle2 className="text-blue-600 shrink-0 mt-1" size={18} />
                                        <span className="text-neutral-600 dark:text-neutral-300">Kennis van de lokale markt in West-Vlaanderen</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent opacity-50" />
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        {page.cta || "Klaar om samen te werken?"}
                    </h2>
                    <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-10">
                        Neem vandaag nog contact op voor een vrijblijvend gesprek over uw project.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-neutral-100 transition-colors shadow-xl"
                    >
                        Vraag een offerte aan
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </div>
    )
}
