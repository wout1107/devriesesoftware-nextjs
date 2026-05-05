import type { CollectionConfig } from 'payload'

export const Services: CollectionConfig = {
    slug: 'services',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'slug', 'updatedAt'],
        group: 'SEO',
    },
    fields: [
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            index: true,
            admin: { description: 'URL slug, bv. website-laten-maken' },
        },
        { name: 'name', type: 'text', required: true, label: 'Naam (mens-leesbaar)' },
        { name: 'shortLabel', type: 'text', required: true, label: 'Korte label (bv. "Website laten maken")' },
        { name: 'shortDescription', type: 'textarea', required: true, label: 'Korte omschrijving (1-2 zinnen)' },
        { name: 'longDescription', type: 'textarea', required: true, label: 'Lange omschrijving (hub-pagina)' },
        { name: 'icon', type: 'text', label: 'Lucide-react icon naam (bv. Globe)' },
        {
            name: 'features',
            type: 'array',
            label: 'Features (USP\'s)',
            fields: [
                { name: 'title', type: 'text', required: true },
                { name: 'description', type: 'text', required: true },
                { name: 'icon', type: 'text' },
            ],
        },
        { name: 'order', type: 'number', defaultValue: 0, admin: { description: 'Sortering op hubs' } },
    ],
}
