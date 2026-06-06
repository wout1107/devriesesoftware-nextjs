import type { CollectionConfig } from 'payload'

const slugify = (str: string) =>
    str
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')

export const Posts: CollectionConfig = {
    slug: 'posts',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'category', 'status', 'publishedDate'],
        description: 'Blog- en nieuwsberichten (launches, opleveringen, technieken, actualiteit).',
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true,
            label: 'Titel',
        },
        {
            name: 'slug',
            type: 'text',
            required: true,
            unique: true,
            index: true,
            label: 'Slug (URL)',
            admin: {
                description: 'Automatisch uit de titel als je dit leeg laat. Bv: launch-plantoparty',
            },
            hooks: {
                beforeValidate: [
                    ({ value, data }) => {
                        if (value) return slugify(value)
                        if (data?.title) return slugify(data.title)
                        return value
                    },
                ],
            },
        },
        {
            name: 'excerpt',
            type: 'textarea',
            required: true,
            label: 'Samenvatting',
            admin: {
                description: 'Korte intro (±150 tekens). Gebruikt op de bloglijst en als meta-beschrijving.',
            },
        },
        {
            name: 'coverImage',
            type: 'upload',
            relationTo: 'media',
            label: 'Coverafbeelding',
        },
        {
            name: 'category',
            type: 'select',
            required: true,
            defaultValue: 'nieuws',
            label: 'Categorie',
            options: [
                { label: 'Nieuws', value: 'nieuws' },
                { label: 'Projectoplevering', value: 'project' },
                { label: 'Techniek & tools', value: 'techniek' },
                { label: 'Sector & actualiteit', value: 'sector' },
            ],
        },
        {
            name: 'publishedDate',
            type: 'date',
            required: true,
            label: 'Publicatiedatum',
            admin: {
                date: { pickerAppearance: 'dayOnly', displayFormat: 'd MMM yyyy' },
            },
        },
        {
            name: 'author',
            type: 'text',
            defaultValue: 'Wout Devriese',
            label: 'Auteur',
        },
        {
            name: 'content',
            type: 'richText',
            required: true,
            label: 'Inhoud',
        },
        {
            name: 'featured',
            type: 'checkbox',
            defaultValue: false,
            label: 'Uitgelicht',
            admin: { description: 'Toon dit bericht prominent bovenaan de blog.' },
        },
        {
            name: 'status',
            type: 'select',
            required: true,
            defaultValue: 'published',
            label: 'Status',
            options: [
                { label: 'Gepubliceerd', value: 'published' },
                { label: 'Concept', value: 'draft' },
            ],
        },
    ],
}
