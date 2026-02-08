import { loadEnvConfig } from '@next/env'
loadEnvConfig(process.cwd())

import { getPayload } from 'payload'
// We gebruiken het directe pad naar de config file
// .js extensie omdat je aangaf dat dit nodig is voor je compiler
import config from '../payload.config.js'
import { seoPages } from './seo-data'

const seed = async () => {
    console.log('Starting seed...')
    try {
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