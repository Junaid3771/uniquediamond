import {
  LayoutPanelTop,
  Ruler,
  Wind,
  Zap,
  Droplets,
  Cog,
  Hammer,
  Grid3x3,
  PaintRoller,
  Sparkles,
  type LucideIcon,
} from "lucide-react"

const map: Record<string, LucideIcon> = {
  "layout-panel-top": LayoutPanelTop,
  ruler: Ruler,
  wind: Wind,
  zap: Zap,
  droplets: Droplets,
  cog: Cog,
  hammer: Hammer,
  "grid-3x3": Grid3x3,
  "paint-roller": PaintRoller,
  sparkles: Sparkles,
}

export function ServiceIcon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const Icon = map[name] ?? Sparkles
  return <Icon className={className} />
}
