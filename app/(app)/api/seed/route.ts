import { getPayload } from 'payload'
import config from '@/payload.config'
import { seoPages } from '@/scripts/seo-data' // pas pad aan indien nodig
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        const payload = await getPayload({ config })
        console.log('API Seed gestart...')

        for (const page of seoPages) {
            const existing = await payload.find({
                collection: 'landing-pages',
                where: { slug: { equals: page.slug } },
            })

            if (existing.docs.length > 0) {
                await payload.update({
                    collection: 'landing-pages',
                    id: existing.docs[0].id,
                    data: page,
                })
            } else {
                await payload.create({
                    collection: 'landing-pages',
                    data: page,
                })
            }
        }

        return NextResponse.json({ message: 'Seed succesvol!' })
    } catch (err: any) {
        return NextResponse.json({ error: err.message }, { status: 500 })
    }
}