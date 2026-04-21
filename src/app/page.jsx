import { AboutPageContent } from '@/components/AboutPageContent'
import { ProjectsSection } from '@/components/ProjectsGrid'

export const metadata = {
  description:
    'Growth marketer for 12+ years. Co-founder & CMO who scaled a fintech from $10k to $2M ARR as sole marketer—sharing the AI systems behind it. Free resources; one call maps where your workflows leave growth on the table.',
}

export default function Home() {
  return (
    <>
      <AboutPageContent showAuditCta />
      <ProjectsSection showHeader={false} />
    </>
  )
}
