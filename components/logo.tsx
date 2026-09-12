import Link from "next/link"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

export function Logo({
  className,
  compact = false,
}: {
  className?: string
  compact?: boolean
}) {
  return (
    <Link
      href="/"
      className={cn("group flex items-center gap-3", className)}
      aria-label={`${site.legalName} home`}
    >
      <span className="relative inline-flex h-10 w-10 items-center justify-center">
        <svg
          viewBox="0 0 48 48"
          className="h-10 w-10 transition-transform duration-500 group-hover:rotate-180"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="dg" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="oklch(0.92 0.09 88)" />
              <stop offset="55%" stopColor="oklch(0.82 0.12 84)" />
              <stop offset="100%" stopColor="oklch(0.66 0.09 66)" />
            </linearGradient>
          </defs>
          <path
            d="M24 3 L41 17 L24 45 L7 17 Z"
            fill="none"
            stroke="url(#dg)"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          <path
            d="M7 17 H41 M24 3 L17 17 L24 45 M24 3 L31 17 L24 45"
            fill="none"
            stroke="url(#dg)"
            strokeWidth="1.4"
            strokeLinejoin="round"
            opacity="0.8"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-tight text-foreground">
          DIAMOND <span className="text-gradient-gold">EDGE</span>
        </span>
        {!compact && (
          <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.32em] text-muted-foreground">
            {site.tagline}
          </span>
        )}
      </span>
    </Link>
  )
}
