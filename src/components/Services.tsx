import { services } from '../data/content'

export default function Services() {
  return (
    <section id="services" className="section-pad border-t border-line">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow" data-reveal="up">
          Services
        </p>
        <h2 className="display mt-4 max-w-3xl text-5xl text-ink sm:text-6xl md:text-7xl" data-reveal="up">
          Let&apos;s build something worth remembering.
        </h2>

        <ul className="mt-16 divide-y divide-line border-y border-line">
          {services.map((service, index) => (
            <li
              key={service.title}
              data-reveal="up"
              className="group grid gap-4 py-8 transition-colors duration-500 md:grid-cols-[4rem_1.2fr_1.4fr_0.8fr] md:items-baseline"
            >
              <span className="text-[11px] tracking-[0.2em] text-muted">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="display text-3xl text-ink transition-transform duration-500 group-hover:translate-x-2 sm:text-4xl">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{service.description}</p>
              <p className="text-[11px] tracking-[0.16em] text-muted uppercase">{service.tech}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
