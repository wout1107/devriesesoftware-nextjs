import { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

const SITE_URL = 'https://devriesesoftware.be'

export const revalidate = 86400

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const now = new Date()

    const staticEntries: MetadataRoute.Sitemap = [
        { url: SITE_URL, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
        { url: `${SITE_URL}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
        { url: `${SITE_URL}/portfolio`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
        { url: `${SITE_URL}/pricing`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
        { url: `${SITE_URL}/partner`, lastModified: now, changeFrequency: 'monthly', priority: 0.6 },
        { url: `${SITE_URL}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
        { url: `${SITE_URL}/cookies`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
        { url: `${SITE_URL}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    ]

    let dynamic: MetadataRoute.Sitemap = []
    try {
        const payload = await getPayload({ config: configPromise })
        const [services, cities, localPages] = await Promise.all([
            payload.find({ collection: 'services', limit: 100 }),
            payload.find({ collection: 'cities', limit: 200 }),
            payload.find({ collection: 'local-pages', depth: 2, limit: 1000 }),
        ])

        for (const s of services.docs as any[]) {
            dynamic.push({
                url: `${SITE_URL}/${s.slug}`,
                lastModified: new Date(s.updatedAt || now),
                changeFrequency: 'monthly',
                priority: 0.85,
            })
        }
        for (const c of cities.docs as any[]) {
            dynamic.push({
                url: `${SITE_URL}/regio/${c.slug}`,
                lastModified: new Date(c.updatedAt || now),
                changeFrequency: 'monthly',
                priority: 0.7,
            })
        }
        for (const p of localPages.docs as any[]) {
            const svc = typeof p.service === 'object' ? p.service?.slug : null
            const city = typeof p.city === 'object' ? p.city?.slug : null
            if (!svc || !city) continue
            dynamic.push({
                url: `${SITE_URL}/${svc}/${city}`,
                lastModified: new Date(p.updatedAt || now),
                changeFrequency: 'monthly',
                priority: 0.6,
            })
        }
    } catch (err) {
        console.warn('sitemap: Payload unavailable, returning static only', err)
    }

    return [...staticEntries, ...dynamic]
}
