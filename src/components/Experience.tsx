import { experience } from '../data/content'

export default function Experience() {
  const job = experience[0]

  return (
    <section className="section-pad border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <div data-reveal="up">
          <p className="eyebrow">Experience</p>
          <h2 className="display mt-4 text-4xl text-ink sm:text-5xl">Where the work happens.</h2>
        </div>

        <div data-reveal="up">
          <p className="text-[11px] tracking-[0.2em] text-muted uppercase">{job.period}</p>
          <h3 className="mt-3 font-display text-3xl text-ink">{job.title}</h3>
          <p className="mt-2 text-sm text-muted">
            {job.company} · {job.location}
          </p>
          <ul className="mt-8 space-y-4">
            {job.achievements.map((item) => (
              <li key={item} className="border-t border-line pt-4 text-sm leading-relaxed text-muted">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
