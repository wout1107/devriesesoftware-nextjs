import { loadEnvConfig } from '@next/env'
import { getPayload } from 'payload'
import { seoPages } from './seo-data'
import path from 'path'

// Laad envs
loadEnvConfig(process.cwd())

const seed = async () => {
    console.log('Starting seed...')
    try {
        // We importeren de config DYNAMISCH. Dit omzeilt de import-fouten bij het opstarten.
        // We gebruiken path.resolve om zeker te zijn van de locatie in de container (/app/payload.config)
        const configModule = await import('../payload.config')
        const config = configModule.default || configModule

        const payload = await getPayload({ config })

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