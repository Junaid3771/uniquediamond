import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { WhatsAppIcon } from "@/components/brand-icons"
import { Reveal } from "@/components/reveal"
import { whatsappLink } from "@/lib/site"

export function CTA() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border">
          <Image
            src="/cta-interior.png"
            alt="Premium finished interior"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
          <div className="relative flex flex-col gap-8 px-6 py-16 sm:px-14 sm:py-20 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
                Let&apos;s give your space the{" "}
                <span className="text-gradient-gold">edge</span> it deserves.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
                Tell us about your project and we&apos;ll come back with a clear,
                honest quote — usually within one business day.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:brightness-110"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={whatsappLink("Hello Diamond Edge, I'd like a quote.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/60 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all hover:border-primary/50"
              >
                <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
