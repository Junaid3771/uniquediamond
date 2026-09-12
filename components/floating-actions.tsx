"use client"

import { useEffect, useState } from "react"
import { Mail, ArrowUp } from "lucide-react"
import { WhatsAppIcon } from "@/components/brand-icons"
import { site, whatsappLink, mailtoLink } from "@/lib/site"
import { cn } from "@/lib/utils"

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="fixed right-4 bottom-5 z-50 flex flex-col items-end gap-3 sm:right-6">
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className={cn(
          "inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/80 text-foreground backdrop-blur transition-all duration-300 hover:border-primary/60 hover:text-primary",
          showTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        )}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <a
        href={mailtoLink(
          "Enquiry — Diamond Edge Technical Services",
          "Hello Diamond Edge team,\n\nI'd like to enquire about your services.\n\n"
        )}
        aria-label="Email us"
        className="group relative inline-flex items-center"
      >
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-card px-3 py-1.5 text-xs font-medium text-foreground opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
          Email us
        </span>
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-foreground shadow-xl ring-1 ring-border transition-all duration-300 hover:-translate-y-1 hover:bg-primary hover:text-primary-foreground">
          <Mail className="h-6 w-6" />
        </span>
      </a>

      <a
        href={whatsappLink(
          "Hello Diamond Edge, I'd like to enquire about your services."
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative inline-flex items-center"
      >
        <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-card px-3 py-1.5 text-xs font-medium text-foreground opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">
          Chat with us
        </span>
        <span className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-all duration-300 hover:-translate-y-1">
          <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" />
          <WhatsAppIcon className="relative h-7 w-7" />
        </span>
      </a>

      <span className="sr-only">Contact {site.legalName}</span>
    </div>
  )
}
