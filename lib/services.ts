export type Service = {
  slug: string
  title: string
  short: string
  tagline: string
  description: string
  features: string[]
  icon: string
  image: string
}

export const services: Service[] = [
  {
    slug: "false-ceiling-partitions",
    title: "False Ceilings & Light Partitions",
    short: "Ceilings & Partitions",
    tagline: "Sculpted ceilings and space-defining partitions",
    description:
      "Precision-engineered suspended ceilings, gypsum bulkheads and lightweight partition systems that transform the geometry of a space. We integrate concealed lighting, acoustic control and clean service access into every layout, delivering interiors that feel considered from the first glance upward.",
    features: [
      "Gypsum & acoustic suspended ceilings",
      "Cove, coffered & feature bulkheads",
      "Glass & drywall partition systems",
      "Integrated lighting and AC diffuser cut-outs",
    ],
    icon: "layout-panel-top",
    image: "/services/false-ceiling.png",
  },
  {
    slug: "plaster-works",
    title: "Plaster Works",
    short: "Plaster Works",
    tagline: "Flawless surfaces, engineered to last",
    description:
      "A wall is only as good as the surface beneath the finish. Our plastering teams deliver dead-flat, crack-resistant substrates using premium mixes and disciplined curing, giving paint, wallpaper and cladding the perfect canvas for a truly premium result.",
    features: [
      "Internal & external plastering",
      "Skim coating & fine finishing",
      "Decorative & moulded plaster details",
      "Waterproof render systems",
    ],
    icon: "ruler",
    image: "/services/plaster.png",
  },
  {
    slug: "hvac-systems",
    title: "Air-Conditioning & Ventilation",
    short: "HVAC & Ventilation",
    tagline: "Climate control, quiet and efficient",
    description:
      "Complete HVAC solutions covering installation, ductwork, air filtration and lifetime maintenance. We balance airflow, minimise energy loss and keep interiors comfortable year-round with systems engineered for the demands of a high-heat climate.",
    features: [
      "AC installation & commissioning",
      "Duct fabrication & balancing",
      "Air filtration & IAQ upgrades",
      "Preventive maintenance contracts",
    ],
    icon: "wind",
    image: "/services/hvac.png",
  },
  {
    slug: "electrical-fittings",
    title: "Electrical Fittings & Fixtures",
    short: "Electrical",
    tagline: "Power and light, safely delivered",
    description:
      "Certified electrical works from first-fix wiring to the final fixture. We design and install lighting circuits, distribution boards and smart controls to the highest safety standards, so every switch, socket and luminaire performs exactly as intended.",
    features: [
      "Wiring, DBs & circuit protection",
      "Lighting design & installation",
      "Fault finding & rewiring",
      "Smart switching & controls",
    ],
    icon: "zap",
    image: "/services/electrical.png",
  },
  {
    slug: "sanitary-plumbing",
    title: "Sanitary & Pipe Works",
    short: "Plumbing",
    tagline: "Water systems that simply work",
    description:
      "Reliable plumbing and sanitary installations engineered for pressure, longevity and hygiene. From concealed pipework to premium bathroom fit-outs, we deliver leak-free systems and rapid repairs that protect your property and your peace of mind.",
    features: [
      "Sanitary ware installation",
      "Hot & cold water pipe systems",
      "Drainage & leak repairs",
      "Bathroom & wet-area fit-out",
    ],
    icon: "droplets",
    image: "/services/plumbing.png",
  },
  {
    slug: "electromechanical",
    title: "Electromechanical Works",
    short: "Electromechanical",
    tagline: "The engineering behind seamless spaces",
    description:
      "Integrated electromechanical installation and maintenance that ties electrical, mechanical and plumbing systems into one coordinated whole. Our engineers plan, install and service the systems that keep buildings running quietly in the background.",
    features: [
      "MEP installation & coordination",
      "Equipment commissioning",
      "Scheduled preventive maintenance",
      "Breakdown response & servicing",
    ],
    icon: "cog",
    image: "/services/electromechanical.png",
  },
  {
    slug: "carpentry-wood-flooring",
    title: "Carpentry & Wood Flooring",
    short: "Carpentry",
    tagline: "Warmth and craft in every grain",
    description:
      "Bespoke joinery and wood flooring crafted by skilled carpenters. From engineered timber floors to custom cabinetry and wardrobes, we bring tactile warmth and precise detailing to residential and commercial interiors alike.",
    features: [
      "Engineered & laminate wood flooring",
      "Custom wardrobes & cabinetry",
      "Doors, skirting & trims",
      "Bespoke joinery & millwork",
    ],
    icon: "hammer",
    image: "/services/carpentry.png",
  },
  {
    slug: "floor-wall-tiling",
    title: "Floor & Wall Tiling",
    short: "Tiling",
    tagline: "Precision laid, perfectly aligned",
    description:
      "Tiling that reads as one continuous, faultless surface. Our specialists handle large-format porcelain, natural stone and mosaic with laser-guided setting out, tight grout lines and immaculate edges across floors, walls and feature areas.",
    features: [
      "Large-format porcelain & stone",
      "Feature walls & mosaics",
      "Levelling & waterproofing prep",
      "Precision grouting & sealing",
    ],
    icon: "grid-3x3",
    image: "/services/tiling.png",
  },
  {
    slug: "wallpaper-fixing",
    title: "Wallpaper Fixing",
    short: "Wallpaper",
    tagline: "Statement walls, seamlessly finished",
    description:
      "Expert wallpaper installation for feature walls and full rooms. We handle everything from delicate textured papers to bold murals with pattern-matched precision, bubble-free application and crisp, invisible seams.",
    features: [
      "Pattern-matched installation",
      "Textured, vinyl & mural papers",
      "Surface preparation & priming",
      "Feature-wall styling advice",
    ],
    icon: "paint-roller",
    image: "/services/wallpaper.png",
  },
  {
    slug: "building-cleaning",
    title: "Building Cleaning Services",
    short: "Cleaning",
    tagline: "A spotless handover, every time",
    description:
      "Professional building and residential cleaning that leaves spaces move-in ready. From post-construction deep cleans to recurring maintenance programmes, our teams work to a meticulous checklist so every surface gleams.",
    features: [
      "Post-construction deep cleaning",
      "Residential & villa cleaning",
      "Commercial & office cleaning",
      "Recurring maintenance programmes",
    ],
    icon: "sparkles",
    image: "/services/cleaning.png",
  },
]

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug)
