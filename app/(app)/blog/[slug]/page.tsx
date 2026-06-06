import type { Metadata } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { ArrowLeft, ArrowRight, Calendar, User } from 'lucide-react'
import FadeUp from '@/components/animations/FadeUp'
import Breadcrumbs from '@/components/seo/Breadcrumbs'
import {
    SITE_URL,
    COMPANY,
    breadcrumbJsonLd,
    jsonLdScript,
} from '@/lib/seo/jsonLd'
import '@/styles/Blog.css'

interface PageProps {
    params: Promise<{ slug: string }>
}

export const revalidate = 300

export async function generateStaticParams() {
    try {
        const payload = await getPayload({ config: configPromise })
        const { docs } = await payload.find({
            collection: 'posts',
            where: { status: { equals: 'published' } },
            limit: 1000,
            depth: 0,
        })
        return docs.map((p: any) => ({ slug: p.slug }))
    } catch {
        return []
    }
}

async function loadPost(slug: string) {
    const payload = await getPayload({ config: configPromise })
    const { docs } = await payload.find({
        collection: 'posts',
        where: {
            and: [{ slug: { equals: slug } }, { status: { equals: 'published' } }],
        },
        depth: 1,
        limit: 1,
    })
    return docs[0] ?? null
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const post = await loadPost(slug)
    if (!post) return { title: 'Bericht niet gevonden' }
    const url = `${SITE_URL}/blog/${slug}`
    const cover =
        typeof post.coverImage === 'object' && post.coverImage
            ? (post.coverImage as { url?: string })
            : null
    return {
        title: `${post.title} | Devriese Software`,
        description: post.excerpt,
        alternates: { canonical: url },
        openGraph: {
            title: post.title,
            description: post.excerpt,
            url,
            type: 'article',
            locale: 'nl_BE',
            publishedTime: post.publishedDate,
            images: cover?.url ? [{ url: cover.url }] : undefined,
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: cover?.url ? [cover.url] : undefined,
        },
    }
}

export default async function BlogPost({ params }: PageProps) {
    const { slug } = await params
    const post = await loadPost(slug)
    if (!post) return notFound()

    const payload = await getPayload({ config: configPromise })
    const { docs: more } = await payload.find({
        collection: 'posts',
        where: {
            and: [
                { status: { equals: 'published' } },
                { slug: { not_equals: slug } },
            ],
        },
        sort: '-publishedDate',
        depth: 1,
        limit: 3,
    })

    const url = `${SITE_URL}/blog/${slug}`
    const cover =
        typeof post.coverImage === 'object' && post.coverImage
            ? (post.coverImage as { url?: string; alt?: string })
            : null

    const crumbsLd = breadcrumbJsonLd([
        { name: 'Home', url: SITE_URL },
        { name: 'Blog', url: `${SITE_URL}/blog` },
        { name: post.title, url },
    ])

    const articleLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.publishedDate,
        dateModified: post.updatedAt || post.publishedDate,
        image: cover?.url ? `${SITE_URL}${cover.url}` : COMPANY.logo,
        author: { '@type': 'Person', name: post.author || 'Wout Devriese' },
        publisher: { '@type': 'Organization', name: COMPANY.name, logo: COMPANY.logo },
        mainEntityOfPage: url,
    }

    return (
        <div className="blog blog--post">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={jsonLdScript(crumbsLd)}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={jsonLdScript(articleLd)}
            />

            <article className="blog__article">
                <div className="blog__article-head">
                    <Breadcrumbs items={[{ name: 'Blog', href: '/blog' }, { name: post.title }]} />
                    <FadeUp>
                        <span className="blog__card-cat blog__card-cat--inline">
                            {CATEGORY_LABELS[post.category] || post.category}
                        </span>
                    </FadeUp>
                    <FadeUp delay={0.05}>
                        <h1 className="blog__post-title">{post.title}</h1>
                    </FadeUp>
                    <FadeUp delay={0.1}>
                        <div className="blog__post-meta">
                            <span>
                                <Calendar size={15} />
                                {fmtDate(post.publishedDate)}
                            </span>
                            <span>
                                <User size={15} />
                                {post.author || 'Wout Devriese'}
                            </span>
                        </div>
                    </FadeUp>
                </div>

                {cover?.url && (
                    <FadeUp delay={0.1}>
                        <div className="blog__post-cover">
                            <Image
                                src={cover.url}
                                alt={cover.alt || post.title}
                                width={1200}
                                height={675}
                                className="blog__post-cover-img"
                                priority
                            />
                        </div>
                    </FadeUp>
                )}

                <div className="blog__post-body">
                    <RichText data={post.content} />
                </div>

                <div className="blog__post-cta">
                    <Link href="/contact" className="seo-btn seo-btn--primary">
                        Een project bespreken?
                        <ArrowRight size={18} />
                    </Link>
                    <Link href="/blog" className="blog__back">
                        <ArrowLeft size={16} />
                        Terug naar de blog
                    </Link>
                </div>
            </article>

            {more.length > 0 && (
                <section className="blog__list-section blog__more">
                    <div className="blog__container">
                        <h2 className="blog__more-title">Meer lezen</h2>
                        <div className="blog__grid">
                            {more.map((p: any) => (
                                <Link key={p.id} href={`/blog/${p.slug}`} className="blog__card">
                                    <div className="blog__card-body">
                                        <span className="blog__card-date">
                                            <Calendar size={14} />
                                            {fmtDate(p.publishedDate)}
                                        </span>
                                        <h3 className="blog__card-title">{p.title}</h3>
                                        <p className="blog__card-excerpt">{p.excerpt}</p>
                                        <span className="blog__card-link">
                                            Lees meer
                                            <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}
