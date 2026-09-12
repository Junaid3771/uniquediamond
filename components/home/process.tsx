import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

const steps = [
  {
    step: "01",
    title: "Consult & survey",
    body: "We visit, listen and measure — understanding your space, timeline and vision before a single quote is drawn.",
  },
  {
    step: "02",
    title: "Design & quote",
    body: "A clear, itemised proposal with material options and a realistic schedule. No surprises, no hidden extras.",
  },
  {
    step: "03",
    title: "Execute with care",
    body: "Skilled trades, tidy sites and proactive updates. We protect your property and keep the work moving.",
  },
  {
    step: "04",
    title: "Handover & support",
    body: "A spotless finish, a walkthrough on your terms, and ongoing maintenance whenever you need us.",
  },
]

export function Process() {
  return (
    <section className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="How we work"
        title="A calm, considered process"
        subtitle="Four clear stages that keep you informed and in control from first call to final handover."
      />
      <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <Reveal key={s.step} delay={i}>
            <div className="group relative h-full bg-card p-8 transition-colors duration-500 hover:bg-card/60">
              <span className="font-display text-5xl font-bold text-primary/25 transition-colors duration-500 group-hover:text-primary/60">
                {s.step}
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.body}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
