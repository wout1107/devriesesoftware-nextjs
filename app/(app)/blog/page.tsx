import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Calendar, Newspaper } from 'lucide-react'
import FadeUp from '@/components/animations/FadeUp'
import StaggerGroup from '@/components/animations/StaggerGroup'
import SplitTextReveal from '@/components/animations/SplitTextReveal'
import { SITE_URL } from '@/lib/seo/jsonLd'
import '@/styles/Blog.css'

export const revalidate = 300

export const metadata: Metadata = {
    title: 'Blog & nieuws | Devriese Software',
    description:
        'Nieuws, projectopleveringen en inzichten van Devriese Software. App-launches, nieuwe technieken en wat er speelt in de informaticawereld.',
    alternates: { canonical: `${SITE_URL}/blog` },
    openGraph: {
        title: 'Blog & nieuws | Devriese Software',
        description:
            'Nieuws, projectopleveringen en inzichten van Devriese Software.',
        url: `${SITE_URL}/blog`,
        type: 'website',
        locale: 'nl_BE',
    },
}

const CATEGORY_LABELS: Record<string, string> = {
    nieuws: 'Nieuws',
    project: 'Projectoplevering',
    techniek: 'Techniek & tools',
    sector: 'Sector & actualiteit',
}

const fmtDate = (d: string) =>
    new Date(d).toLocaleDateString('nl-BE', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

async function loadPosts() {
    try {
        const payload = await getPayload({ config: configPromise })
        const { docs } = await payload.find({
            collection: 'posts',
            where: { status: { equals: 'published' } },
            sort: '-publishedDate',
            depth: 1,
            limit: 100,
        })
        return docs
    } catch {
        return []
    }
}

export default async function BlogIndex() {
    const posts = await loadPosts()

    return (
        <div className="blog">
            <section className="blog__hero">
                <div className="blog__hero-bg" aria-hidden />
                <div className="blog__hero-content">
                    <FadeUp>
                        <span className="blog__eyebrow">
                            <Newspaper size={16} />
                            Blog &amp; nieuws
                        </span>
                    </FadeUp>
                    <SplitTextReveal as="h1" type="words" stagger={0.05} className="blog__title">
                        Wat er speelt bij Devriese Software
                    </SplitTextReveal>
                    <FadeUp delay={0.2}>
                        <p className="blog__lead">
                            App-launches, opgeleverde projecten, nieuwe technieken en
                            wat er beweegt in de informaticawereld.
                        </p>
                    </FadeUp>
                </div>
            </section>

            <section className="blog__list-section">
                <div className="blog__container">
                    {posts.length === 0 ? (
                        <FadeUp>
                            <div className="blog__empty">
                                <Newspaper size={40} />
                                <h2>Binnenkort meer nieuws</h2>
                                <p>
                                    De eerste berichten zijn onderweg. Kom binnenkort terug of{' '}
                                    <Link href="/contact">neem contact op</Link>.
                                </p>
                            </div>
                        </FadeUp>
                    ) : (
                        <StaggerGroup className="blog__grid" stagger={0.08} y={28}>
                            {posts.map((post: any) => {
                                const cover =
                                    typeof post.coverImage === 'object' && post.coverImage
                                        ? (post.coverImage as { url?: string; alt?: string })
                                        : null
                                return (
                                    <Link
                                        key={post.id}
                                        href={`/blog/${post.slug}`}
                                        className={`blog__card ${post.featured ? 'blog__card--featured' : ''}`}
                                    >
                                        <div className="blog__card-media">
                                            {cover?.url ? (
                                                <Image
                                                    src={cover.url}
                                                    alt={cover.alt || post.title}
                                                    width={640}
                                                    height={400}
                                                    className="blog__card-img"
                                                />
                                            ) : (
                                                <div className="blog__card-placeholder" aria-hidden>
                                                    <span>DS</span>
                                                </div>
                                            )}
                                            <span className="blog__card-cat">
                                                {CATEGORY_LABELS[post.category] || post.category}
                                            </span>
                                        </div>
                                        <div className="blog__card-body">
                                            <span className="blog__card-date">
                                                <Calendar size={14} />
                                                {fmtDate(post.publishedDate)}
                                            </span>
                                            <h2 className="blog__card-title">{post.title}</h2>
                                            <p className="blog__card-excerpt">{post.excerpt}</p>
                                            <span className="blog__card-link">
                                                Lees meer
                                                <ArrowRight size={16} />
                                            </span>
                                        </div>
                                    </Link>
                                )
                            })}
                        </StaggerGroup>
                    )}
                </div>
            </section>
        </div>
    )
}
