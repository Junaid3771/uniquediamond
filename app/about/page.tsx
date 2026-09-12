import type { Metadata } from "next"
import Image from "next/image"
import { Target, Gem, Handshake, Leaf } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { SectionHeading } from "@/components/section-heading"
import { LicenseCard } from "@/components/license-card"
import { Reveal } from "@/components/reveal"
import { CTA } from "@/components/home/cta"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Diamond Edge Technical Services is a new-generation technical services company delivering premium fit-out, MEP and maintenance under one accountable roof.",
}

const values = [
  {
    icon: Gem,
    title: "Craft first",
    body: "We treat every surface, joint and finish as if it were our own home. Excellence is the baseline, not the upsell.",
  },
  {
    icon: Handshake,
    title: "Straight talk",
    body: "Honest quotes, realistic timelines and no hidden extras. You always know exactly where your project stands.",
  },
  {
    icon: Target,
    title: "Accountability",
    body: "One team owns the whole result — from first survey to final handover — so quality never slips between trades.",
  },
  {
    icon: Leaf,
    title: "Care & cleanliness",
    body: "Tidy sites, protected surfaces and a spotless finish. We leave your space better than we found it, every time.",
  },
]

const team = [
  { name: "Nasir Bin Aghlaita", role: "Founder & Managing Director", img: "/team/member-1.png" },
  { name: "Rahul Menon", role: "Head of Operations", img: "/team/member-2.png" },
  { name: "Sara Khalifa", role: "Project Manager", img: "/team/member-3.png" },
  { name: "Imran Qureshi", role: "Lead Site Engineer", img: "/team/member-4.png" },
]

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        crumb="About"
        eyebrow="Who We Are"
        title="A sharper standard for technical services."
        subtitle="Diamond Edge is a new-generation technical services company built on a simple belief: exceptional spaces come from craft, coordination and genuine accountability."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-border diamond-glow">
              <Image
                src="/about-company.png"
                alt="The Diamond Edge team on site"
                width={720}
                height={560}
                className="w-full object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div>
              <SectionHeading
                eyebrow="Our Story"
                title="One roof for every trade"
              />
              <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  Too many projects lose their shine in the handoffs — between
                  the ceiling crew and the electricians, the tilers and the
                  cleaners. We built Diamond Edge to close those gaps.
                </p>
                <p>
                  Bringing ten specialist services together under one
                  accountable team, we deliver fit-out and maintenance that
                  feels seamless from the first survey to the final polish.
                  Whether it&apos;s a single feature wall or a full commercial
                  fit-out, the same standard of craft applies.
                </p>
                <p>
                  The result is simpler for our clients and better for the
                  work: fewer contractors to chase, one number to call, and a
                  finish that speaks for itself.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative overflow-hidden bg-card/30 py-20 sm:py-28">
        <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />
        <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            align="center"
            eyebrow="What we stand for"
            title="Values that show up on site"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i}>
                <div className="group h-full rounded-2xl border border-border bg-background/60 p-7 transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40">
                  <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                    <v.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">
                    {v.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {v.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <SectionHeading
          align="center"
          eyebrow="The People"
          title="Meet the team behind the finish"
          subtitle="Experienced professionals who take pride in the details and treat your project like their own."
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i}>
              <div className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={m.img || "/placeholder.svg"}
                    alt={m.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-sm text-primary">{m.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="grid items-center gap-12 rounded-3xl border border-border bg-card/30 p-8 sm:p-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="Fully Licensed"
              title="Registered, approved and ready to build"
              subtitle="We operate as a fully licensed establishment with formal approval for every service we offer — so you can engage us with complete confidence."
            />
          </div>
          <Reveal delay={1}>
            <LicenseCard />
          </Reveal>
        </div>
      </section>

      <CTA />
    </main>
  )
}
