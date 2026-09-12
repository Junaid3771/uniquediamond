import type { Metadata } from "next"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { EnquiryForm } from "@/components/enquiry-form"
import { SocialLinks } from "@/components/social-links"
import { WhatsAppIcon } from "@/components/brand-icons"
import { Reveal } from "@/components/reveal"
import { site, whatsappLink, mailtoLink } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact & Enquiries",
  description:
    "Get in touch with Diamond Edge Technical Services. Request a free quote via our enquiry form, WhatsApp, phone or email.",
}

const details = [
  {
    icon: Phone,
    label: "Call us",
    value: site.phoneDisplay,
    href: `tel:${site.phone}`,
  },
  {
    icon: Mail,
    label: "Email us",
    value: site.email,
    href: mailtoLink("Enquiry — Diamond Edge Technical Services"),
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: `${site.addressShort}, ${site.addressArea}`,
  },
  {
    icon: Clock,
    label: "Working hours",
    value: site.hours,
  },
]

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        crumb="Contact"
        eyebrow="Let's Talk"
        title="Request your free, no-obligation quote."
        subtitle="Fill in the enquiry form and our team will get back to you — usually within one business day. Prefer to talk now? We're a tap away on WhatsApp."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          <div>
            <Reveal>
              <h2 className="font-display text-2xl font-bold tracking-tight">
                Get in touch
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Whether it&apos;s a quick question or a full project brief,
                we&apos;d love to hear from you.
              </p>
            </Reveal>

            <div className="mt-8 space-y-4">
              {details.map((d, i) => {
                const inner = (
                  <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:border-primary/40">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <d.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">
                        {d.label}
                      </p>
                      <p className="mt-1 font-medium text-foreground break-words">
                        {d.value}
                      </p>
                    </div>
                  </div>
                )
                return (
                  <Reveal key={d.label} delay={i}>
                    {d.href ? (
                      <a href={d.href} className="block">
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </Reveal>
                )
              })}
            </div>

            <Reveal delay={2}>
              <a
                href={whatsappLink(
                  "Hello Diamond Edge, I'd like to enquire about your services."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-6 py-4 text-sm font-semibold text-white transition-all hover:brightness-110"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Message us on WhatsApp
              </a>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-8">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  Follow us
                </p>
                <SocialLinks className="mt-3" />
              </div>
            </Reveal>
          </div>

          <Reveal delay={1}>
            <div>
              <EnquiryForm />
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  )
}
