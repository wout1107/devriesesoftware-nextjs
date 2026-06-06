import { loadEnvConfig } from '@next/env'
import { getPayload } from 'payload'
// @ts-ignore
import configPromise from '../payload.config.ts'

loadEnvConfig(process.cwd())

// ── Lexical helpers ─────────────────────────────────────────────
type Block =
    | { type: 'h2'; text: string }
    | { type: 'p'; text: string }
    | { type: 'ul'; items: string[] }

function textNode(text: string) {
    return {
        type: 'text',
        text,
        version: 1,
        detail: 0,
        format: 0,
        mode: 'normal',
        style: '',
    }
}

function buildContent(blocks: Block[]) {
    const children = blocks.map((b) => {
        if (b.type === 'h2') {
            return {
                type: 'heading',
                tag: 'h2',
                version: 1,
                direction: 'ltr',
                format: '',
                indent: 0,
                children: [textNode(b.text)],
            }
        }
        if (b.type === 'ul') {
            return {
                type: 'list',
                listType: 'bullet',
                tag: 'ul',
                start: 1,
                version: 1,
                direction: 'ltr',
                format: '',
                indent: 0,
                children: b.items.map((it, i) => ({
                    type: 'listitem',
                    value: i + 1,
                    version: 1,
                    direction: 'ltr',
                    format: '',
                    indent: 0,
                    children: [textNode(it)],
                })),
            }
        }
        return {
            type: 'paragraph',
            version: 1,
            direction: 'ltr',
            format: '',
            indent: 0,
            children: [textNode(b.text)],
        }
    })

    return {
        root: {
            type: 'root',
            version: 1,
            direction: 'ltr',
            format: '',
            indent: 0,
            children,
        },
    }
}

// ── Starterberichten ────────────────────────────────────────────
const posts = [
    {
        slug: 'launch-plantoparty',
        title: 'PlanToParty is live: ons ticketing-platform de wereld in',
        category: 'project',
        publishedDate: '2026-05-20',
        excerpt:
            'Na maanden bouwen is PlanToParty officieel gelanceerd — een eigen ticketing- en eventplatform voor organisatoren. Een blik achter de schermen.',
        blocks: [
            {
                type: 'p',
                text: 'Het is zover: PlanToParty staat live. Wat begon als een idee om het ticketverkoop voor evenementen eenvoudiger te maken, is uitgegroeid tot een volwaardig platform waarmee organisatoren hun events, tickets en bezoekers volledig zelf beheren.',
            },
            { type: 'h2', text: 'Wat PlanToParty doet' },
            {
                type: 'p',
                text: 'Organisatoren maken in enkele minuten een event aan, stellen ticketsoorten in en verkopen meteen online. Bezoekers krijgen hun ticket digitaal, met een QR-code die aan de ingang gescand wordt via de scan-app.',
            },
            {
                type: 'ul',
                items: [
                    'Tickets verkopen met een eigen verkooppagina per event',
                    'Realtime dashboard met verkoopcijfers',
                    'Scan-app om tickets aan de deur te valideren',
                    'Veilige betalingen en automatische bevestigingsmails',
                ],
            },
            { type: 'h2', text: 'Onder de motorkap' },
            {
                type: 'p',
                text: 'Het platform is gebouwd met dezelfde technologie waarmee ik klantenprojecten bouw: een razendsnelle Next.js-frontend, een robuuste backend en een betaalkoppeling. Schaalbaar opgezet, zodat een uitverkocht event evengoed vlot blijft draaien als een klein feestje.',
            },
            {
                type: 'p',
                text: 'Benieuwd of zoiets ook voor jouw organisatie of bedrijf kan? Neem gerust contact op — ik denk graag mee.',
            },
        ] as Block[],
    },
    {
        slug: 'programmatic-seo-met-nextjs',
        title: 'Programmatic SEO: honderden pagina’s die écht scoren in Google',
        category: 'techniek',
        publishedDate: '2026-05-28',
        excerpt:
            'Ik leerde hoe je met Next.js efficiënt honderden unieke landingspagina’s genereert die je lokale vindbaarheid fors verbeteren. Zo werkt het.',
        blocks: [
            {
                type: 'p',
                text: 'De voorbije weken verdiepte ik me in programmatic SEO: het systematisch genereren van honderden unieke, geoptimaliseerde pagina’s in plaats van ze één voor één met de hand te maken. De resultaten in Google Search Console liegen er niet om.',
            },
            { type: 'h2', text: 'Het idee' },
            {
                type: 'p',
                text: 'Veel zoekopdrachten zijn een combinatie van een dienst en een plaats, denk aan "website laten maken in Brugge". Door per combinatie een aparte, inhoudelijk sterke pagina te bouwen, verschijn je in veel meer zoekresultaten dan met één algemene pagina.',
            },
            { type: 'h2', text: 'Hoe ik het aanpak met Next.js' },
            {
                type: 'ul',
                items: [
                    'Dynamische routes die per dienst en stad een statische pagina pre-renderen',
                    'Per pagina unieke titels, meta-beschrijvingen en lokale content',
                    'Structured data (JSON-LD) voor rijkere weergave in Google',
                    'Een automatisch gegenereerde sitemap met alle pagina’s',
                ],
            },
            {
                type: 'p',
                text: 'Belangrijk: kwaliteit boven kwantiteit. Dunne, identieke pagina’s straft Google af. Daarom krijgt elke pagina echte lokale context. Dat is exact wat ik nu ook voor klanten inzet om hun lokale vindbaarheid te boosten.',
            },
        ] as Block[],
    },
    {
        slug: 'ai-in-webdevelopment-2026',
        title: 'AI in webdevelopment: hype of echte meerwaarde?',
        category: 'sector',
        publishedDate: '2026-06-03',
        excerpt:
            'AI verandert hoe we software bouwen. Mijn kijk op waar het vandaag écht helpt — en waar menselijke expertise onmisbaar blijft.',
        blocks: [
            {
                type: 'p',
                text: 'Geen week zonder nieuws over AI in de informaticawereld. Als developer gebruik ik die tools dagelijks, maar de vraag blijft: waar voegt AI echt waarde toe in webdevelopment, en waar niet?',
            },
            { type: 'h2', text: 'Waar AI vandaag al sterk in is' },
            {
                type: 'ul',
                items: [
                    'Sneller boilerplate-code schrijven en refactoren',
                    'Bugs opsporen en code uitleggen',
                    'Teksten en eerste content-voorstellen genereren',
                    'Repetitief werk automatiseren',
                ],
            },
            { type: 'h2', text: 'Waar de mens onmisbaar blijft' },
            {
                type: 'p',
                text: 'AI versnelt het werk, maar architectuur, ux-keuzes, performance en de vertaalslag van een bedrijfsdoel naar een werkende oplossing blijven mensenwerk. Een tool stelt geen kritische vragen over jouw bedrijf — ik wel.',
            },
            {
                type: 'p',
                text: 'Mijn aanpak: AI inzetten waar het tijd wint, zodat ik meer aandacht kan besteden aan wat echt telt — een doordachte, snelle en betrouwbare website voor jouw bedrijf.',
            },
        ] as Block[],
    },
]

async function upsertPost(payload: any, p: (typeof posts)[number]) {
    const data = {
        title: p.title,
        slug: p.slug,
        excerpt: p.excerpt,
        category: p.category,
        publishedDate: new Date(p.publishedDate).toISOString(),
        author: 'Wout Devriese',
        content: buildContent(p.blocks),
        status: 'published',
        featured: p.slug === 'launch-plantoparty',
    }

    const existing = await payload.find({
        collection: 'posts',
        where: { slug: { equals: p.slug } },
        limit: 1,
    })

    if (existing.docs.length) {
        await payload.update({ collection: 'posts', id: existing.docs[0].id, data })
        console.log(`✏️  Bijgewerkt: ${p.slug}`)
    } else {
        await payload.create({ collection: 'posts', data })
        console.log(`✅ Aangemaakt: ${p.slug}`)
    }
}

async function main() {
    const payload = await getPayload({ config: configPromise })
    for (const p of posts) {
        await upsertPost(payload, p)
    }
    console.log('Klaar — blogberichten geseed.')
    process.exit(0)
}

main().catch((err) => {
    console.error(err)
    process.exit(1)
})
