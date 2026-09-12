import { ShieldCheck, Clock4, Star, Building2 } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

const points = [
  {
    icon: ShieldCheck,
    title: "Licensed & accountable",
    body: "A fully registered establishment with the trade approvals to back every job. One contract, one team, total ownership of the result.",
  },
  {
    icon: Star,
    title: "Finish-obsessed craft",
    body: "We are judged on the last five percent — the tight grout line, the flush skirting, the flawless skim. Details are the whole point.",
  },
  {
    icon: Clock4,
    title: "On time, on brief",
    body: "Clear schedules, proactive updates and disciplined site management mean handovers land when we say they will.",
  },
  {
    icon: Building2,
    title: "End-to-end capability",
    body: "Ceilings, MEP, joinery, tiling and cleaning under one roof — no chasing multiple contractors, no finger-pointing.",
  },
]

export function WhyUs() {
  return (
    <section className="relative overflow-hidden bg-card/30 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Why Diamond Edge"
          title="Built to be the partner you don't have to manage"
          subtitle="We combine the reliability of a large contractor with the care of a boutique studio."
        />
        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <Reveal key={p.title} delay={i}>
              <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-background/60 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                  <p.icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
                <div className="absolute -right-6 -top-6 h-16 w-16 rotate-45 bg-primary/5 transition-colors duration-500 group-hover:bg-primary/10" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
