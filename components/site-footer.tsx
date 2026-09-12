import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Logo } from "@/components/logo"
import { SocialLinks } from "@/components/social-links"
import { site, mailtoLink } from "@/lib/site"
import { services } from "@/lib/services"

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-card/40">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A new standard in technical services — precision fit-out, MEP and
              maintenance delivered with craft, speed and a spotless finish.
            </p>
            <SocialLinks className="mt-6" />
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
              Company
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Us" },
                { href: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
              Services
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {s.short}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
              Get in touch
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${site.phone}`} className="hover:text-primary">
                  {site.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={mailtoLink("Enquiry")} className="break-all hover:text-primary">
                  {site.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>
                  {site.addressShort}
                  <br />
                  {site.addressArea}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{site.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} {site.legalName}. All rights
            reserved.
          </p>
          <p>
            Licence No. {site.license.number} &nbsp;·&nbsp; Register No.{" "}
            {site.license.registerNo}
          </p>
        </div>
      </div>
    </footer>
  )
}
