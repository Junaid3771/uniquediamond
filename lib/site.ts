export const site = {
  name: "Diamond Edge",
  legalName: "Diamond Edge Technical Services",
  tagline: "Technical Services",
  descriptor: "Fit-Out, MEP & Maintenance Specialists",
  phoneDisplay: "+971 55 845 2329",
  phone: "+971558452329",
  whatsapp: "971558452329",
  email: "diamonduniquets@gmail.com",
  addressShort: "Office 1B-04, Al Ghurair Real Estate",
  addressArea: "Al Mateena, Deira",
  hours: "Sat – Thu, 08:00 – 20:00",
  license: {
    number: "1651818",
    registerNo: "2924145",
    legalType: "Sole Establishment",
    activities: 10,
    issued: "10 / 09 / 2026",
    expiry: "09 / 09 / 2027",
    owner: "Nasir Saeed Bin Aghlaita",
  },
  social: {
    whatsapp: "https://wa.me/971558452329",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
    facebook: "https://facebook.com/",
  },
} as const

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsapp}${
    message ? `?text=${encodeURIComponent(message)}` : ""
  }`

export const mailtoLink = (subject?: string, body?: string) => {
  const params = new URLSearchParams()
  if (subject) params.set("subject", subject)
  if (body) params.set("body", body)
  const qs = params.toString()
  return `mailto:${site.email}${qs ? `?${qs}` : ""}`
}
