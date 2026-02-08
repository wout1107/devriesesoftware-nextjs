import { getPayload } from 'payload'
import configPromise from '@/payload.config'
import { seoPages } from '@/scripts/seo-data'
import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
    try {
        const payload = await getPayload({ config: configPromise })

        console.log('--- Start Seeding Process ---')

        for (const page of seoPages) {
            try {
                // We proberen eerst te zoeken. 
                // Als de tabel niet bestaat, vangen we de error hier op.
                const existing = await payload.find({
                    collection: 'landing-pages',
                    where: { slug: { equals: page.slug } },
                })

                if (existing.docs.length > 0) {
                    console.log(`Updating: ${page.slug}`)
                    await payload.update({
                        collection: 'landing-pages',
                        id: existing.docs[0].id,
                        data: page,
                    })
                } else {
                    console.log(`Creating: ${page.slug}`)
                    await payload.create({
                        collection: 'landing-pages',
                        data: page,
                    })
                }
            } catch (dbError: any) {
                // Als de tabel niet bestaat, stoppen we de loop en geven we instructies
                if (dbError.message.includes('no such table')) {
                    return NextResponse.json({
                        success: false,
                        error: "Tabel 'landing_pages' bestaat niet. Voer 'npx payload migrate' uit of reset de db.",
                        suggestion: "Verwijder de database op de server en herstart de container."
                    }, { status: 500 })
                }
                throw dbError
            }
        }

        return NextResponse.json({
            success: true,
            message: `${seoPages.length} SEO pagina's succesvol verwerkt.`
        })
    } catch (err: any) {
        return NextResponse.json({ success: false, error: err.message }, { status: 500 })
    }
}