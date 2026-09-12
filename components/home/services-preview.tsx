import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { services } from "@/lib/services"
import { SectionHeading } from "@/components/section-heading"
import { ServiceIcon } from "@/components/service-icon"
import { Reveal } from "@/components/reveal"

export function ServicesPreview() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="What we do"
          title="One team. Every technical trade."
          subtitle="A complete spectrum of fit-out, MEP and maintenance services — coordinated by a single accountable team so nothing falls between the gaps."
        />
        <Reveal delay={2}>
          <Link
            href="/services"
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary"
          >
            View all services
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.slice(0, 6).map((s, i) => (
          <Reveal key={s.slug} delay={i % 3}>
            <Link
              href={`/services#${s.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40 hover:diamond-glow"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={s.image || "/placeholder.svg"}
                  alt={s.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <div className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-background/70 text-primary backdrop-blur">
                  <ServiceIcon name={s.icon} className="h-5 w-5" />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.tagline}
                </p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-all duration-300 group-hover:opacity-100">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
