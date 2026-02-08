import { loadEnvConfig } from '@next/env'
loadEnvConfig(process.cwd())

import { getPayload } from 'payload'
import configPromise from '../payload.config'
import { seoPages } from './seo-data'

const seed = async () => {
    console.log('Starting seed...')
    try {
        const payload = await getPayload({ config: configPromise })

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
                console.log(`Updating ${page.slug}`)
                await payload.update({
                    collection: 'landing-pages',
                    id: existing.docs[0].id,
                    data: page,
                })
            } else {
                console.log(`Creating ${page.slug}`)
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
