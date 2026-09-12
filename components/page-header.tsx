import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Reveal } from "@/components/reveal"

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  crumb,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  crumb: string
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-40">
        <Reveal>
          <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">{crumb}</span>
          </nav>
        </Reveal>
        {eyebrow && (
          <Reveal delay={1}>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              {eyebrow}
            </span>
          </Reveal>
        )}
        <Reveal delay={2}>
          <h1 className="mt-5 max-w-3xl font-display text-4xl font-bold tracking-tight text-balance sm:text-5xl md:text-6xl">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={3}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
