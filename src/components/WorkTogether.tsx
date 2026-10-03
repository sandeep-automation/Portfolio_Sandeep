import { useState, type FormEvent, type ReactNode } from 'react'
import { personalInfo } from '../data/content'

export default function WorkTogether() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Project inquiry from ${formData.name}`)
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
    setSubmitted(true)
    window.setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="together" className="section-pad border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="eyebrow" data-reveal="up">
            Let&apos;s work together
          </p>
          <h2 className="display mt-4 text-5xl text-ink sm:text-6xl md:text-7xl" data-reveal="up">
            Have an idea? Let&apos;s build it.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted sm:text-base" data-reveal="up">
            Whether you need a durable automation framework, a quieter regression cycle, or a quality system that
            people trust — tell me what you want to ship.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6" data-reveal="up" autoComplete="off">
          <Field label="Name">
            <input
              id="name"
              name="visitor-name"
              required
              autoComplete="off"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="field"
              placeholder=""
            />
          </Field>
          <Field label="Email">
            <input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="field"
              placeholder="you@company.com"
            />
          </Field>
          <Field label="Message">
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="field resize-none"
              placeholder="What should we build?"
            />
          </Field>
          <button type="submit" className="btn-primary">
            {submitted ? 'Opening Email...' : "Let's Build"}
          </button>
        </form>
      </div>
    </section>
  )
}

function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-[11px] tracking-[0.2em] text-muted uppercase">{label}</span>
      {children}
    </label>
  )
}
