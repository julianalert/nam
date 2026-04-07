import { AboutPageContent } from '@/components/AboutPageContent'

export const metadata = {
  description:
    'I’m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function Home() {
  return <AboutPageContent showAuditCta />
}
