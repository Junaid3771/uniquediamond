import type { Metadata } from "next"
import Link from "next/link"
import { services } from "@/lib/services"
import { PageHeader } from "@/components/page-header"
import { ServiceBlock } from "@/components/services/service-block"
import { ServiceIcon } from "@/components/service-icon"
import { CTA } from "@/components/home/cta"

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Explore Diamond Edge Technical Services — false ceilings, plaster, HVAC, electrical, plumbing, electromechanical, carpentry, tiling, wallpaper and building cleaning.",
}

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        crumb="Services"
        eyebrow="Our Capabilities"
        title="Every trade you need, mastered in one place."
        subtitle="Ten specialist services delivered by one coordinated team — from structural finishes to the final polish. Explore what we do below."
      />

      <section className="border-b border-border bg-card/30">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-border sm:grid-cols-3 lg:grid-cols-5">
          {services.map((s) => (
            <Link
              key={s.slug}
              href={`#${s.slug}`}
              className="group flex flex-col items-center gap-3 bg-background px-4 py-8 text-center transition-colors hover:bg-card"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <ServiceIcon name={s.icon} className="h-6 w-6" />
              </span>
              <span className="text-xs font-medium leading-tight text-muted-foreground group-hover:text-foreground">
                {s.short}
              </span>
            </Link>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {services.map((s, i) => (
          <ServiceBlock key={s.slug} service={s} index={i} />
        ))}
      </div>

      <CTA />
    </main>
  )
}
