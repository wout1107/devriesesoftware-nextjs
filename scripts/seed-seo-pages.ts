import { getPayload } from 'payload'
import { seoPages } from './seo-data'
// GEEN import van payload.config!

const seed = async () => {
    console.log('Starting seed via Payload CLI...')
    try {
        // Payload haalt de config zelf op uit de omgeving/build
        const payload = await getPayload({ config: (global as any).payloadConfig })

        for (const page of seoPages) {
            const existing = await payload.find({
                collection: 'landing-pages',
                where: {
                    slug: {
                        equals: page.slug,
                    },
                },
            })

            if (existing.docs.length > 0) {
                console.log(`Updating ${page.slug}...`)
                await payload.update({
                    collection: 'landing-pages',
                    id: existing.docs[0].id,
                    data: page,
                })
            } else {
                console.log(`Creating ${page.slug}...`)
                await payload.create({
                    collection: 'landing-pages',
                    data: page,
                })
            }
        }

        console.log('Seed completed successfully!')
        process.exit(0)
    } catch (error) {
        console.error('Seed failed:', error)
        process.exit(1)
    }
}

seed()