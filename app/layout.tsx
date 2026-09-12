import { Analytics } from "@vercel/analytics/next"
import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import "./globals.css"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { FloatingActions } from "@/components/floating-actions"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Diamond Edge Technical Services — Fit-Out, MEP & Maintenance",
    template: "%s | Diamond Edge Technical Services",
  },
  description:
    "Diamond Edge Technical Services delivers premium interior fit-out, MEP, and maintenance — from false ceilings and HVAC to electrical, plumbing, tiling, carpentry and building cleaning.",
  keywords: [
    "technical services",
    "interior fit-out",
    "false ceiling",
    "HVAC installation",
    "electrical services",
    "plumbing",
    "tiling",
    "building cleaning",
    "MEP contractor",
  ],
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#1a1c22",
  colorScheme: "dark",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`dark bg-background ${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="min-h-screen bg-background font-sans antialiased">
        <SiteHeader />
        {children}
        <SiteFooter />
        <FloatingActions />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
