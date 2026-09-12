import { Star, Quote } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { Reveal } from "@/components/reveal"

const testimonials = [
  {
    quote:
      "They handled our full office fit-out — ceilings, electrical, flooring and a final deep clean. One point of contact, zero drama, and the finish is genuinely impressive.",
    name: "Layla A.",
    role: "Operations Director, Boutique Agency",
  },
  {
    quote:
      "The tiling and joinery work in our villa is flawless. The team was punctual, tidy and clearly took pride in every detail. Highly recommended.",
    name: "Omar H.",
    role: "Private Villa Owner",
  },
  {
    quote:
      "Reliable AC and MEP maintenance that we can actually count on. Fast response and a properly professional crew every single time.",
    name: "Priya S.",
    role: "Facilities Manager, Retail Group",
  },
]

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-card/30 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          align="center"
          eyebrow="Client voices"
          title="Trusted for the work that shows"
        />
        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i}>
              <figure className="relative flex h-full flex-col rounded-2xl border border-border bg-background/60 p-8">
                <Quote className="h-8 w-8 text-primary/40" />
                <div className="mt-4 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className="h-4 w-4 fill-primary text-primary"
                    />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <p className="font-display font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
