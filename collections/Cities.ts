import type { CollectionConfig } from 'payload'

export const Cities: CollectionConfig = {
    slug: 'cities',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'province', 'slug', 'updatedAt'],
        group: 'SEO',
    },
    fields: [
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            index: true,
            admin: { description: 'URL slug, bv. tielt' },
        },
        { name: 'name', type: 'text', required: true, label: 'Stad / gemeente' },
        {
            name: 'province',
            type: 'select',
            required: true,
            options: [
                { label: 'West-Vlaanderen', value: 'west-vlaanderen' },
                { label: 'Oost-Vlaanderen', value: 'oost-vlaanderen' },
                { label: 'Antwerpen', value: 'antwerpen' },
                { label: 'Vlaams-Brabant', value: 'vlaams-brabant' },
                { label: 'Limburg', value: 'limburg' },
            ],
        },
        { name: 'population', type: 'number', label: 'Inwoners' },
        { name: 'lat', type: 'number' },
        { name: 'lng', type: 'number' },
        {
            name: 'neighborSlugs',
            type: 'array',
            label: 'Buurgemeenten (slugs)',
            fields: [{ name: 'slug', type: 'text', required: true }],
        },
        { name: 'distanceFromKanegem', type: 'number', label: 'Afstand vanaf Kanegem (km)' },
    ],
}
