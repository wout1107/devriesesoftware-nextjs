import { getPayload } from 'payload'
import config from '@/payload.config'
import { seoPages } from '@/scripts/seo-data'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
    try {
        const payload = await getPayload({ config })

        console.log('--- DB PUSH START ---')
        // Dit forceert Drizzle/Payload om de tabellen aan te maken 
        // als ze nog niet bestaan in de huidige .db file
        // @ts-ignore
        await payload.db.push()
        console.log('--- DB PUSH KLAAR ---')

        for (const page of seoPages) {
            // We gebruiken upsert-logica: als hij bestaat, updaten we hem
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

        return NextResponse.json({
            success: true,
            message: `Database gesynchroniseerd en ${seoPages.length} pagina's verwerkt.`
        })
    } catch (err: any) {
        console.error('Seed Error:', err)
        return NextResponse.json({
            success: false,
            error: err.message,
            stack: err.stack
        }, { status: 500 })
    }
}