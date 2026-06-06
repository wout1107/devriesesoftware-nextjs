import { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { services } from '@/scripts/data/services'
import { cities } from '@/scripts/data/cities'

const SITE_URL = 'https://devriesesoftware.be'

export const revalidate = 86400

async function getBlogEntries(now: Date): Promise<MetadataRoute.Sitemap> {
    try {
        const payload = await getPayload({ config: configPromise })
        const { docs } = await payload.find({
            collection: 'posts',
            where: { status: { equals: 'published' } },
            limit: 1000,
            depth: 0,
        })
        return docs.map((p: any) => ({
            url: `${SITE_URL}/blog/${p.slug}`,
            lastModified: p.updatedAt ? new Date(p.updatedAt) : now,
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        }))
    } catch {
        return []
    }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date()

    const staticEntries: MetadataRoute.Sitemap = [
        { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
        { url: `${SITE_URL}/over-ons`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
        { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${SITE_URL}/portfolio`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${SITE_URL}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
        { url: `${SITE_URL}/partner`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
        { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
        { url: `${SITE_URL}/cookies`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
        { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    ]

    const serviceHubs: MetadataRoute.Sitemap = services.map((s) => ({
        url: `${SITE_URL}/${s.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.85,
    }))

    const regionHubs: MetadataRoute.Sitemap = cities.map((c) => ({
        url: `${SITE_URL}/regio/${c.slug}`,
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.7,
    }))

    const localPages: MetadataRoute.Sitemap = []
    for (const s of services) {
        for (const c of cities) {
            localPages.push({
                url: `${SITE_URL}/${s.slug}/${c.slug}`,
                lastModified: now,
                changeFrequency: 'monthly',
                priority: 0.6,
            })
        }
    }

    const blogEntries = await getBlogEntries(now)

    return [
        ...staticEntries,
        ...serviceHubs,
        ...regionHubs,
        ...localPages,
        ...blogEntries,
    ]
}
