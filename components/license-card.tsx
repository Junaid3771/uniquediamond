import { BadgeCheck } from "lucide-react"
import { Logo } from "@/components/logo"
import { site } from "@/lib/site"

export function LicenseCard() {
  const rows = [
    { label: "Licence No.", value: site.license.number },
    { label: "Register No.", value: site.license.registerNo },
    { label: "Legal Type", value: site.license.legalType },
    { label: "Listed Activities", value: `${site.license.activities} Services` },
    { label: "Issued", value: site.license.issued },
    { label: "Valid Until", value: site.license.expiry },
  ]
  return (
    <div className="relative overflow-hidden rounded-3xl border border-primary/25 bg-card diamond-glow">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl"
      />
      <div className="relative flex items-center justify-between gap-4 border-b border-border px-7 py-6">
        <Logo compact />
        <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
          <BadgeCheck className="h-4 w-4" />
          Verified & Active
        </span>
      </div>
      <div className="relative px-7 py-7">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Trade Licence
        </p>
        <h3 className="mt-2 font-display text-xl font-bold tracking-tight">
          {site.legalName}
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Owner &middot; {site.license.owner}
        </p>

        <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
          {rows.map((r) => (
            <div key={r.label}>
              <dt className="text-[11px] uppercase tracking-wider text-muted-foreground">
                {r.label}
              </dt>
              <dd className="mt-1 font-display text-base font-semibold text-foreground">
                {r.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-7 flex items-center justify-between border-t border-border pt-5">
          <span className="text-xs text-muted-foreground">
            {site.addressShort}, {site.addressArea}
          </span>
          <svg
            viewBox="0 0 48 48"
            className="h-9 w-9 opacity-60"
            aria-hidden="true"
          >
            <path
              d="M24 4 L40 17 L24 44 L8 17 Z"
              fill="none"
              stroke="var(--primary)"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}
