import { AboutPageContent } from '@/components/AboutPageContent'

export const metadata = {
  description:
    'Growth marketer with 12+ years’ experience. I help startups grow revenue using AI—free resources and a growth audit to map where your workflows are leaving growth on the table.',
}

export default function Home() {
  return <AboutPageContent showAuditCta />
}
