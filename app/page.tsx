import { Hero } from "@/components/home/hero"
import { Marquee } from "@/components/home/marquee"
import { ServicesPreview } from "@/components/home/services-preview"
import { WhyUs } from "@/components/home/why-us"
import { Process } from "@/components/home/process"
import { Testimonials } from "@/components/home/testimonials"
import { CTA } from "@/components/home/cta"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Marquee />
      <ServicesPreview />
      <WhyUs />
      <Process />
      <Testimonials />
      <CTA />
    </main>
  )
}
