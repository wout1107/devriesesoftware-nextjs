import { getPayload } from 'payload'
import configPromise from '@payload-config'
import PortfolioClient from './PortfolioClient'

export const metadata = {
  title: 'Portfolio | Devriese Software',
  description: 'Ontdek de websites en applicaties die we met passie hebben ontwikkeld. Van ticketing platforms tot portfolio websites.',
}

// Revalidate every 60 seconds for fresh content
export const revalidate = 60

export default async function PortfolioPage() {
  // Use Payload Local API - works both locally and in production!
  const payload = await getPayload({ config: configPromise })

  const { docs: projects } = await payload.find({
    collection: 'projects',
    sort: 'order', // Sort by order field (ascending)
    depth: 2, // Include related media
    limit: 100,
  })

  // Transform Payload data to match component interface
  const formattedProjects = projects.map((project) => ({
    id: project.id,
    name: project.name as string,
    category: project.category as string,
    description: project.description as string,
    image: {
      url: typeof project.image === 'object' && project.image !== null
        ? (project.image as { url?: string }).url || '/assets/placeholder.webp'
        : '/assets/placeholder.webp',
      alt: typeof project.image === 'object' && project.image !== null
        ? (project.image as { alt?: string }).alt
        : project.name as string,
    },
    features: (project.features as { feature: string }[] | null) || [],
    technologies: (project.technologies as { name: string; type: string }[] | null) || [],
    websiteUrl: project.websiteUrl as string | undefined,
    color: (project.color as string) || '#424633',
  }))

  return <PortfolioClient projects={formattedProjects} />
}
