import type { CollectionConfig } from 'payload'

export const Projects: CollectionConfig = {
    slug: 'projects',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'category', 'featured', 'updatedAt'],
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            label: 'Project Naam',
        },
        {
            name: 'category',
            type: 'text',
            required: true,
            label: 'Categorie',
            admin: {
                description: 'Bijv: Ticketing Platform, Vakantieverhuur Website',
            },
        },
        {
            name: 'description',
            type: 'textarea',
            required: true,
            label: 'Beschrijving',
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'media',
            required: true,
            label: 'Afbeelding',
        },
        {
            name: 'features',
            type: 'array',
            label: 'Kenmerken',
            labels: {
                singular: 'Kenmerk',
                plural: 'Kenmerken',
            },
            fields: [
                {
                    name: 'feature',
                    type: 'text',
                    required: true,
                },
            ],
        },
        {
            name: 'technologies',
            type: 'array',
            label: 'Technologieën',
            labels: {
                singular: 'Technologie',
                plural: 'Technologieën',
            },
            fields: [
                {
                    name: 'name',
                    type: 'text',
                    required: true,
                    label: 'Naam',
                },
                {
                    name: 'type',
                    type: 'select',
                    label: 'Type',
                    options: [
                        { label: 'Framework', value: 'framework' },
                        { label: 'API', value: 'api' },
                        { label: 'Feature', value: 'feature' },
                        { label: 'Other', value: 'other' },
                    ],
                    defaultValue: 'framework',
                },
            ],
        },
        {
            name: 'websiteUrl',
            type: 'text',
            label: 'Website URL',
            admin: {
                description: 'Link naar de live website (optioneel)',
            },
        },
        {
            name: 'featured',
            type: 'checkbox',
            label: 'Uitgelicht',
            defaultValue: false,
            admin: {
                description: 'Toon dit project prominent op de homepage',
            },
        },
        {
            name: 'order',
            type: 'number',
            label: 'Volgorde',
            defaultValue: 0,
            admin: {
                description: 'Lagere nummers worden eerst getoond',
            },
        },
        {
            name: 'color',
            type: 'text',
            label: 'Accent Kleur',
            defaultValue: '#424633',
            admin: {
                description: 'Hex kleur code voor de project card (bijv. #FF6B00)',
            },
        },
    ],
}
