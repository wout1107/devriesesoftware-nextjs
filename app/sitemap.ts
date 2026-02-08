import { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const payload = await getPayload({ config: configPromise })

    const baseUrl = 'https://devriesesoftware.be'

    // Get all landing pages
    const landingPages = await payload.find({
        collection: 'landing-pages',
        limit: 100,
    })

    // Get all projects
    const projects = await payload.find({
        collection: 'projects',
        limit: 100,
    })

    const landingPagesUrls = landingPages.docs.map((page) => ({
        url: `${baseUrl}/lokaal/${page.slug}`,
        lastModified: new Date(page.updatedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }))

    const projectsUrls = projects.docs.map((project) => ({
        // Projects rely on the portfolio page currently, or do you have individual project pages?
        // Assuming portfolio for now or if you implement individual project pages later.
        // For now, let's just stick to the main pages and landing pages.
        url: `${baseUrl}/portfolio#${project.id}`, // Anchor link as example, or remove if not needed
        lastModified: new Date(project.updatedAt),
        changeFrequency: 'weekly' as const,
        priority: 0.6,
    }))

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/services`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        ...landingPagesUrls,
    ]
}
