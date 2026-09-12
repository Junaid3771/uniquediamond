"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "motion/react"
import { ArrowRight, Phone } from "lucide-react"
import { site, whatsappLink } from "@/lib/site"

const ease = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero-interior.png"
          alt="Luxury interior fit-out by Diamond Edge Technical Services"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/60" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30" />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl"
        animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative mx-auto flex min-h-[92vh] max-w-7xl flex-col justify-center px-5 pb-24 pt-36 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary backdrop-blur"
        >
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          A New Edge in Technical Services
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl lg:text-7xl"
        >
          Crafting spaces with a{" "}
          <span className="text-gradient-gold">diamond-sharp</span> finish.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease }}
          className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty"
        >
          From sculpted ceilings and precision MEP to flawless finishes and
          spotless handovers — {site.legalName} delivers premium fit-out and
          maintenance under one accountable roof.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:brightness-110"
          >
            Request a Free Quote
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-primary/50"
          >
            Explore Services
          </Link>
          <a
            href={`tel:${site.phone}`}
            className="inline-flex items-center gap-2 px-2 py-3.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="h-4 w-4 text-primary" />
            {site.phoneDisplay}
          </a>
        </motion.div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease }}
          className="mt-16 grid max-w-2xl grid-cols-2 gap-6 sm:grid-cols-4"
        >
          {[
            { k: "10+", v: "Specialist Services" },
            { k: "100%", v: "Licensed & Insured" },
            { k: "24/7", v: "Maintenance Support" },
            { k: "1", v: "Accountable Team" },
          ].map((s) => (
            <div key={s.v}>
              <dt className="font-display text-3xl font-bold text-gradient-gold">
                {s.k}
              </dt>
              <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                {s.v}
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      <a
        href={whatsappLink("Hello Diamond Edge, I'd like to enquire.")}
        className="sr-only"
      >
        Contact us on WhatsApp
      </a>
    </section>
  )
}
