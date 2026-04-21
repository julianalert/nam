import { ProjectsGrid, featuredProjects } from '@/components/ProjectsGrid'
import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Resources',
  description:
    'Free tools and frameworks: GEO visibility audit, the SCO Method for better AI output, and a strategy call.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Resources"
      intro="Free tools and frameworks I use with clients—audit your AI visibility, learn the SCO prompt method, or book a short call."
    >
      <ProjectsGrid items={featuredProjects} />
    </SimpleLayout>
  )
}
