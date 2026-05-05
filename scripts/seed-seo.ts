import { loadEnvConfig } from '@next/env'
import { getPayload } from 'payload'
// @ts-ignore
import configPromise from '../payload.config.ts'
import { services, type ServiceData } from './data/services'
import { cities, type CityData } from './data/cities'
import {
    serviceTemplates,
    localAdvantageTemplates,
    fallbackTestimonials,
    type ServiceTemplates,
    type Faq,
    type ProcessStep,
    type Testimonial,
} from './data/content-templates'

loadEnvConfig(process.cwd())

// Deterministic 32-bit hash (djb2)
function hash(str: string): number {
    let h = 5381
    for (let i = 0; i < str.length; i++) {
        h = ((h << 5) + h + str.charCodeAt(i)) | 0
    }
    return Math.abs(h)
}

const PROVINCE_LABELS: Record<string, string> = {
    'west-vlaanderen': 'West-Vlaanderen',
    'oost-vlaanderen': 'Oost-Vlaanderen',
    'antwerpen': 'Antwerpen',
    'vlaams-brabant': 'Vlaams-Brabant',
    'limburg': 'Limburg',
}

function neighborName(slug: string): string {
    return cities.find((c) => c.slug === slug)?.name || slug
}

function substitute(text: string, service: ServiceData, city: CityData): string {
    const province = PROVINCE_LABELS[city.province] || city.province
    const neighbors = city.neighborSlugs.map(neighborName)
    return text
        .replaceAll('{city}', city.name)
        .replaceAll('{province}', province)
        .replaceAll('{distance}', String(city.distanceFromKanegem))
        .replaceAll('{neighbor1}', neighbors[0] || 'omliggende gemeenten')
        .replaceAll('{neighbor2}', neighbors[1] || 'de regio')
        .replaceAll('{neighbor3}', neighbors[2] || 'aanpalende steden')
}

function pickFaqs(faqs: Faq[], seed: number, count: number): Faq[] {
    // Deterministic shuffle using seed
    const indexed = faqs.map((f, i) => ({ f, score: hash(`${seed}-${i}`) }))
    indexed.sort((a, b) => a.score - b.score)
    return indexed.slice(0, count).map((x) => x.f)
}

type GeneratedPage = {
    metaTitle: string
    metaDescription: string
    h1: string
    intro: string
    expertiseSection: string
    localAdvantageSection: string
    faqs: { question: string; answer: string }[]
    processSteps: { title: string; description: string }[]
    testimonialQuote: string
    testimonialAuthor: string
    cta: string
}

function generatePage(service: ServiceData, city: CityData): GeneratedPage {
    const tpl: ServiceTemplates =
        serviceTemplates[service.slug] || serviceTemplates['website-laten-maken']
    const seed = hash(`${service.slug}--${city.slug}`)

    const sub = (s: string) => substitute(s, service, city)

    const metaTitle = sub(tpl.metaTitles[seed % tpl.metaTitles.length])
    const metaDescription = sub(tpl.metaDescriptions[(seed >> 3) % tpl.metaDescriptions.length])
    const h1 = sub(tpl.h1s[(seed >> 5) % tpl.h1s.length])
    const intro = sub(tpl.intros[(seed >> 7) % tpl.intros.length])
    const expertiseSection = sub(tpl.expertise[(seed >> 11) % tpl.expertise.length])
    const localAdvantageSection = sub(
        localAdvantageTemplates[(seed >> 13) % localAdvantageTemplates.length],
    )
    const faqsPicked = pickFaqs(tpl.faqs, seed, 6).map((f) => ({
        question: sub(f.q),
        answer: sub(f.a),
    }))
    const processSteps: ProcessStep[] = tpl.processSteps.map((p) => ({
        title: sub(p.title),
        description: sub(p.description),
    }))
    const testimonialPool: Testimonial[] =
        tpl.testimonials.length > 0 ? tpl.testimonials : fallbackTestimonials
    const t = testimonialPool[(seed >> 17) % testimonialPool.length]
    const testimonialQuote = sub(t.quote)
    const testimonialAuthor = sub(t.author)
    const cta = sub(tpl.ctas[(seed >> 19) % tpl.ctas.length])

    return {
        metaTitle: metaTitle.length > 65 ? metaTitle.slice(0, 64) + '…' : metaTitle,
        metaDescription:
            metaDescription.length > 160 ? metaDescription.slice(0, 159) + '…' : metaDescription,
        h1,
        intro,
        expertiseSection,
        localAdvantageSection,
        faqs: faqsPicked,
        processSteps,
        testimonialQuote,
        testimonialAuthor,
        cta,
    }
}

async function upsertServices(payload: any) {
    const map = new Map<string, string>()
    for (const s of services) {
        const existing = await payload.find({
            collection: 'services',
            where: { slug: { equals: s.slug } },
            limit: 1,
        })
        if (existing.docs.length) {
            const updated = await payload.update({
                collection: 'services',
                id: existing.docs[0].id,
                data: s,
            })
            map.set(s.slug, updated.id)
        } else {
            const created = await payload.create({ collection: 'services', data: s })
            map.set(s.slug, created.id)
        }
        console.log(`  service ${s.slug} ✓`)
    }
    return map
}

async function upsertCities(payload: any) {
    const map = new Map<string, string>()
    for (const c of cities) {
        const data = {
            ...c,
            neighborSlugs: c.neighborSlugs.map((slug) => ({ slug })),
        }
        const existing = await payload.find({
            collection: 'cities',
            where: { slug: { equals: c.slug } },
            limit: 1,
        })
        if (existing.docs.length) {
            const updated = await payload.update({
                collection: 'cities',
                id: existing.docs[0].id,
                data,
            })
            map.set(c.slug, updated.id)
        } else {
            const created = await payload.create({ collection: 'cities', data })
            map.set(c.slug, created.id)
        }
        console.log(`  city ${c.slug} ✓`)
    }
    return map
}

async function upsertLocalPage(
    payload: any,
    serviceMap: Map<string, string>,
    cityMap: Map<string, string>,
    service: ServiceData,
    city: CityData,
) {
    const slug = `${service.slug}--${city.slug}`
    const generated = generatePage(service, city)
    const data = {
        slug,
        service: serviceMap.get(service.slug)!,
        city: cityMap.get(city.slug)!,
        ...generated,
        generatedAt: new Date().toISOString(),
        model: 'template-v1',
    }
    const existing = await payload.find({
        collection: 'local-pages',
        where: { slug: { equals: slug } },
        limit: 1,
    })
    if (existing.docs.length) {
        await payload.update({ collection: 'local-pages', id: existing.docs[0].id, data })
    } else {
        await payload.create({ collection: 'local-pages', data })
    }
}

async function main() {
    console.log('🌱 Start template seed...')
    const payload = await getPayload({ config: configPromise })

    console.log('\n[1/3] Services upserten...')
    const serviceMap = await upsertServices(payload)

    console.log('\n[2/3] Cities upserten...')
    const cityMap = await upsertCities(payload)

    console.log(`\n[3/3] Local pages genereren (${services.length} × ${cities.length} = ${services.length * cities.length})...`)
    let done = 0
    const total = services.length * cities.length
    for (const s of services) {
        for (const c of cities) {
            await upsertLocalPage(payload, serviceMap, cityMap, s, c)
            done++
            if (done % 25 === 0 || done === total) {
                console.log(`  voortgang: ${done}/${total}`)
            }
        }
    }

    console.log('\n✅ Seed compleet.')
    process.exit(0)
}

main().catch((err) => {
    console.error('Seed crashed:', err)
    process.exit(1)
})
