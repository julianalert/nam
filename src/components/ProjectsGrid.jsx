import { Container } from '@/components/Container'
import Link from 'next/link'

function PulseBlueDot() {
  return (
    <span className="relative flex h-7 w-7 items-center justify-center">
      <span
        className="absolute inline-flex h-3.5 w-3.5 animate-ping rounded-full bg-sky-400 opacity-60"
        aria-hidden
      />
      <span
        className="relative inline-flex h-3 w-3 rounded-full bg-sky-500 shadow-sm ring-2 ring-sky-200 dark:ring-sky-800"
        aria-hidden
      />
    </span>
  )
}

function ScoMark() {
  return (
    <span
      className="flex h-7 w-7 items-center justify-center rounded-lg bg-zinc-900 font-mono text-[10px] font-bold tracking-tighter text-amber-400 dark:bg-zinc-700"
      aria-hidden
    >
      SCO
    </span>
  )
}

function StrategyMark() {
  return (
    <span className="relative flex h-7 w-7 items-center justify-center" aria-hidden>
      <span className="absolute inline-flex h-3.5 w-3.5 animate-ping rounded-full bg-teal-400/50 opacity-70" />
      <span className="relative inline-flex h-3 w-3 rounded-full bg-teal-500 shadow-sm ring-2 ring-teal-200 dark:ring-teal-800" />
    </span>
  )
}

const linkTabProps = {
  target: '_blank',
  rel: 'noopener noreferrer',
}

const projectStyles = {
  geo: {
    accent: 'bg-sky-500',
    iconBg: 'bg-sky-50 dark:bg-sky-900/30',
    iconRing: 'ring-sky-200 dark:ring-sky-800/50',
    linkHover: 'group-hover:text-sky-500 dark:group-hover:text-sky-400',
    arrowHover: 'group-hover:translate-x-0.5',
  },
  sco: {
    accent: 'bg-amber-400',
    iconBg: 'bg-amber-50 dark:bg-amber-900/20',
    iconRing: 'ring-amber-200 dark:ring-amber-700/40',
    linkHover: 'group-hover:text-amber-500 dark:group-hover:text-amber-400',
    arrowHover: 'group-hover:translate-x-0.5',
  },
  strategy: {
    accent: 'bg-teal-500',
    iconBg: 'bg-teal-50 dark:bg-teal-900/30',
    iconRing: 'ring-teal-200 dark:ring-teal-800/50',
    linkHover: 'group-hover:text-teal-500 dark:group-hover:text-teal-400',
    arrowHover: 'group-hover:translate-x-0.5',
  },
}

export const featuredProjects = [
  {
    id: 'geo',
    name: 'GEO Audit Tool',
    description:
      'Find out if AI models know your brand, describe you accurately, and recommend you when buyers ask. Get a tailored action plan to improve your visibility across AI search.',
    link: {
      href: 'https://geoaudit101.com/',
      label: 'geoaudit101.com',
    },
    logo: 'geo',
  },
  {
    id: 'sco',
    name: 'The SCO Method',
    description:
      'The only framework you need to get consistently great results from AI.',
    link: {
      href: '/sco-method',
      label: 'notanothermarketer.com/sco-method',
    },
    logo: 'sco',
  },
  {
    id: 'strategy',
    name: 'Free strategy call',
    description:
      'One call to see where your pipeline breaks and what to build first—no pitch deck, just clarity.',
    link: {
      href: 'https://calendly.com/not-another-marketer/free-ai-growth-audit-call',
      label: 'calendly.com',
    },
    logo: 'strategy',
  },
]

function ProjectLogo({ type }) {
  switch (type) {
    case 'geo':
      return <PulseBlueDot />
    case 'sco':
      return <ScoMark />
    case 'strategy':
      return <StrategyMark />
    default:
      return null
  }
}

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ProjectsGrid({
  projectTitleTag: ProjectTitleTag = 'h2',
  items = featuredProjects,
}) {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
    >
      {items.map((project) => {
        const styles = projectStyles[project.logo] ?? projectStyles.geo
        const isExternal = project.link.href.startsWith('http')
        const LinkComponent = isExternal ? 'a' : Link
        const extraLinkProps = isExternal ? linkTabProps : {}

        return (
          <li
            key={project.id}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md dark:border-zinc-700/50 dark:bg-zinc-900/60 dark:shadow-zinc-900/30 dark:hover:border-zinc-600/60 dark:hover:shadow-zinc-900/50"
          >
            <div className={`h-1 w-full ${styles.accent}`} />
            <div className="flex flex-1 flex-col p-6">
              <div
                className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ring-1 ${styles.iconBg} ${styles.iconRing}`}
              >
                <ProjectLogo type={project.logo} />
              </div>
              <ProjectTitleTag className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                <LinkComponent
                  href={project.link.href}
                  {...extraLinkProps}
                  className="before:absolute before:inset-0 before:z-10"
                >
                  {project.name}
                </LinkComponent>
              </ProjectTitleTag>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                {project.description}
              </p>
              <p
                className={`relative z-10 mt-6 flex items-center gap-1.5 text-xs font-medium text-zinc-400 transition-colors duration-200 dark:text-zinc-500 ${styles.linkHover}`}
              >
                <span className="truncate">{project.link.label}</span>
                <ArrowIcon
                  className={`h-3.5 w-3.5 flex-none transition-transform duration-200 ${styles.arrowHover}`}
                />
              </p>
            </div>
          </li>
        )
      })}
    </ul>
  )
}

const defaultTitle = 'Things I’ve made trying to put my dent in the universe.'
const defaultIntro =
  'I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.'

export function ProjectsSection({
  title = defaultTitle,
  intro = defaultIntro,
  showHeader = true,
}) {
  return (
    <Container className="mt-24 sm:mt-32">
      {showHeader ? (
        <>
          <header className="max-w-2xl">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
              {title}
            </h2>
            <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
              {intro}
            </p>
          </header>
          <div className="mt-16 sm:mt-20">
            <ProjectsGrid projectTitleTag="h3" />
          </div>
        </>
      ) : (
        <ProjectsGrid projectTitleTag="h3" />
      )}
    </Container>
  )
}
