import {
  WhatsAppIcon,
  InstagramIcon,
  LinkedinIcon,
  FacebookIcon,
} from "@/components/brand-icons"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

const links = [
  { label: "WhatsApp", href: site.social.whatsapp, Icon: WhatsAppIcon },
  { label: "Instagram", href: site.social.instagram, Icon: InstagramIcon },
  { label: "LinkedIn", href: site.social.linkedin, Icon: LinkedinIcon },
  { label: "Facebook", href: site.social.facebook, Icon: FacebookIcon },
]

export function SocialLinks({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2.5", className)}>
      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-secondary/40 text-muted-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary hover:text-primary-foreground"
        >
          <Icon className="h-[18px] w-[18px]" />
        </a>
      ))}
    </div>
  )
}
