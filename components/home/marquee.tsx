import { services } from "@/lib/services"

export function Marquee() {
  const items = [...services, ...services]
  return (
    <div className="relative flex overflow-hidden border-y border-border bg-card/40 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="flex min-w-max animate-marquee items-center gap-10">
        {items.map((s, i) => (
          <div key={`${s.slug}-${i}`} className="flex items-center gap-10">
            <span className="font-display text-lg font-semibold tracking-tight text-muted-foreground">
              {s.short}
            </span>
            <span className="h-2 w-2 rotate-45 bg-primary" aria-hidden="true" />
          </div>
        ))}
      </div>
    </div>
  )
}
