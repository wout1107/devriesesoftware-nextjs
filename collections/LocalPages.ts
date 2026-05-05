import type { CollectionConfig } from 'payload'

export const LocalPages: CollectionConfig = {
    slug: 'local-pages',
    admin: {
        useAsTitle: 'metaTitle',
        defaultColumns: ['metaTitle', 'service', 'city', 'generatedAt', 'updatedAt'],
        group: 'SEO',
    },
    fields: [
        {
            name: 'service',
            type: 'relationship',
            relationTo: 'services',
            required: true,
            index: true,
        },
        {
            name: 'city',
            type: 'relationship',
            relationTo: 'cities',
            required: true,
            index: true,
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            index: true,
            admin: { description: '"{service-slug}--{city-slug}" voor uniciteit' },
        },
        { name: 'metaTitle', type: 'text', required: true },
        { name: 'metaDescription', type: 'textarea', required: true },
        { name: 'h1', type: 'text', required: true },
        { name: 'intro', type: 'textarea', required: true, label: 'Intro (~80 woorden)' },
        { name: 'expertiseSection', type: 'textarea', required: true, label: 'Expertise (~250 woorden)' },
        { name: 'localAdvantageSection', type: 'textarea', required: true, label: 'Lokale troef (~200 woorden)' },
        {
            name: 'faqs',
            type: 'array',
            required: true,
            minRows: 5,
            fields: [
                { name: 'question', type: 'text', required: true },
                { name: 'answer', type: 'textarea', required: true },
            ],
        },
        {
            name: 'processSteps',
            type: 'array',
            required: true,
            minRows: 4,
            maxRows: 4,
            fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'text', required: true },
            ],
        },
        { name: 'testimonialQuote', type: 'textarea' },
        { name: 'testimonialAuthor', type: 'text' },
        { name: 'cta', type: 'text', required: true },
        { name: 'generatedAt', type: 'date' },
        { name: 'model', type: 'text', admin: { description: 'AI model gebruikt voor generatie' } },
    ],
}
