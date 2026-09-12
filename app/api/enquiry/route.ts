import { NextResponse } from "next/server"

type Payload = {
  name?: string
  email?: string
  phone?: string
  service?: string
  message?: string
  company?: string
}

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)

export async function POST(request: Request) {
  let body: Payload
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 })
  }

  const name = (body.name ?? "").trim()
  const email = (body.email ?? "").trim()
  const phone = (body.phone ?? "").trim()
  const service = (body.service ?? "").trim()
  const message = (body.message ?? "").trim()

  // Honeypot — bots fill this hidden field.
  if ((body.company ?? "").trim().length > 0) {
    return NextResponse.json({ ok: true })
  }

  const errors: Record<string, string> = {}
  if (name.length < 2) errors.name = "Please enter your name."
  if (!isEmail(email)) errors.email = "Please enter a valid email."
  if (phone.length < 6) errors.phone = "Please enter a valid phone number."
  if (message.length < 10)
    errors.message = "Please add a little more detail (min. 10 characters)."

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 })
  }

  // Enquiry captured. Hook this into email (Resend) or a database when ready.
  console.log("[v0] New enquiry:", {
    name,
    email,
    phone,
    service,
    message,
    at: new Date().toISOString(),
  })

  return NextResponse.json({ ok: true })
}
