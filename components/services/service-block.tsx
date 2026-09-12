import Link from "next/link"
import Image from "next/image"
import { Check, ArrowRight } from "lucide-react"
import type { Service } from "@/lib/services"
import { ServiceIcon } from "@/components/service-icon"
import { WhatsAppIcon } from "@/components/brand-icons"
import { Reveal } from "@/components/reveal"
import { whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

export function ServiceBlock({
  service,
  index,
}: {
  service: Service
  index: number
}) {
  const reversed = index % 2 === 1
  return (
    <div
      id={service.slug}
      className="scroll-mt-28 border-b border-border py-16 last:border-0 sm:py-24"
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal className={cn(reversed && "lg:order-2")}>
          <div className="group relative overflow-hidden rounded-3xl border border-border diamond-glow">
            <Image
              src={service.image || "/placeholder.svg"}
              alt={service.title}
              width={720}
              height={540}
              className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <span className="absolute bottom-5 left-5 font-display text-6xl font-bold text-background/80 mix-blend-overlay">
              0{index + 1}
            </span>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <div>
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <ServiceIcon name={service.icon} className="h-7 w-7" />
            </div>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              {service.tagline}
            </p>
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-balance sm:text-3xl md:text-4xl">
              {service.title}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
              {service.description}
            </p>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110"
              >
                Enquire about this service
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={whatsappLink(
                  `Hello Diamond Edge, I'd like to enquire about ${service.title}.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-semibold transition-all hover:border-primary/50"
              >
                <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  )
}
