import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    default: 'Not Another Marketer',
    template: '%s · Not Another Marketer',
  },
  description:
    'Growth marketer for 12+ years. Co-founder & CMO who scaled a fintech from $10k to $2M ARR as sole marketer—sharing the AI systems behind it. Free resources; one call maps where your workflows leave growth on the table.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
