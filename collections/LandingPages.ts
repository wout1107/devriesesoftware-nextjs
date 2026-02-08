import type { CollectionConfig } from 'payload'

export const LandingPages: CollectionConfig = {
    slug: 'landing-pages',
    admin: {
        useAsTitle: 'searchTerm',
        defaultColumns: ['searchTerm', 'slug', 'updatedAt'],
    },
    fields: [
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            index: true,
            admin: {
                description: 'URL slug (e.g. webshop-laten-maken-tielt)',
            },
        },
        {
            name: 'searchTerm',
            type: 'text',
            required: true,
            label: 'Zoekterm',
        },
        {
            name: 'title',
            type: 'text',
            required: true,
            label: 'Titel (H1)',
        },
        {
            name: 'intro',
            type: 'textarea',
            required: true,
            label: 'Introductie',
        },
        {
            name: 'expertise',
            type: 'textarea',
            required: true,
            label: 'Expertise',
        },
        {
            name: 'localAdvantage',
            type: 'textarea',
            required: true,
            label: 'Lokale Troef',
        },
        {
            name: 'cta',
            type: 'text',
            required: true,
            label: 'Call to Action',
        },
    ],
}
