"use client"

import { useState } from "react"
import { Send, CheckCircle2, ArrowRight } from "lucide-react"
import { WhatsAppIcon } from "@/components/brand-icons"
import { services } from "@/lib/services"
import { whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

type Errors = Partial<Record<"name" | "email" | "phone" | "message", string>>

const initial = {
  name: "",
  email: "",
  phone: "",
  service: services[0].title,
  message: "",
  company: "", // honeypot
}

export function EnquiryForm() {
  const [form, setForm] = useState(initial)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const update =
    (key: keyof typeof form) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setForm((f) => ({ ...f, [key]: e.target.value }))
      setErrors((prev) => ({ ...prev, [key]: undefined }))
    }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus("loading")
    setErrors({})
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      if (res.status === 422) {
        const data = await res.json()
        setErrors(data.errors ?? {})
        setStatus("idle")
        return
      }
      if (!res.ok) throw new Error("Request failed")
      setStatus("success")
    } catch {
      setStatus("idle")
      setErrors({ message: "Something went wrong. Please try WhatsApp instead." })
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center rounded-3xl border border-primary/30 bg-card p-10 text-center diamond-glow">
        <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/15 text-primary">
          <CheckCircle2 className="h-8 w-8" />
        </span>
        <h3 className="mt-6 font-display text-2xl font-bold">
          Enquiry received
        </h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
          Thank you, {form.name.split(" ")[0] || "there"}. Our team will be in
          touch shortly. For a faster response, message us directly on WhatsApp.
        </p>
        <a
          href={whatsappLink(
            `Hello Diamond Edge, I just submitted an enquiry about "${form.service}". My name is ${form.name}.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition-all hover:brightness-110"
        >
          <WhatsAppIcon className="h-5 w-5" />
          Continue on WhatsApp
        </a>
      </div>
    )
  }

  const fieldClass = (err?: string) =>
    cn(
      "w-full rounded-xl border bg-background/60 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20",
      err ? "border-destructive" : "border-border"
    )

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-border bg-card p-6 sm:p-8"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Full name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={update("name")}
            placeholder="Your name"
            className={fieldClass(errors.name)}
            autoComplete="name"
          />
          {errors.name && (
            <p className="mt-1.5 text-xs text-destructive">{errors.name}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={update("phone")}
            placeholder="+971 5X XXX XXXX"
            className={fieldClass(errors.phone)}
            autoComplete="tel"
            inputMode="tel"
          />
          {errors.phone && (
            <p className="mt-1.5 text-xs text-destructive">{errors.phone}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={update("email")}
            placeholder="you@example.com"
            className={fieldClass(errors.email)}
            autoComplete="email"
            inputMode="email"
          />
          {errors.email && (
            <p className="mt-1.5 text-xs text-destructive">{errors.email}</p>
          )}
        </div>

        <div>
          <label htmlFor="service" className="mb-2 block text-sm font-medium">
            Service of interest
          </label>
          <select
            id="service"
            name="service"
            value={form.service}
            onChange={update("service")}
            className={fieldClass()}
          >
            {services.map((s) => (
              <option key={s.slug} value={s.title}>
                {s.title}
              </option>
            ))}
            <option value="Multiple / Full fit-out">
              Multiple / Full fit-out
            </option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={update("message")}
          rows={5}
          placeholder="Tell us about your space, scope and timeline…"
          className={fieldClass(errors.message)}
        />
        {errors.message && (
          <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>
        )}
      </div>

      {/* Honeypot field — hidden from users */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          tabIndex={-1}
          autoComplete="off"
          value={form.company}
          onChange={update("company")}
        />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "loading"}
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:brightness-110 disabled:opacity-60"
        >
          {status === "loading" ? (
            "Sending…"
          ) : (
            <>
              Send Enquiry
              <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </>
          )}
        </button>
        <a
          href={whatsappLink("Hello Diamond Edge, I'd like to enquire about your services.")}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold transition-all hover:border-primary/50"
        >
          <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
          Or WhatsApp us
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </form>
  )
}
