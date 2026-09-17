import { achievements } from '../data/content'

export default function Achievements() {
  return (
    <section className="section-pad border-t border-line">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow" data-reveal="up">
          Achievements
        </p>
        <h2 className="display mt-4 text-5xl text-ink sm:text-6xl" data-reveal="up">
          Proof, not noise.
        </h2>
        <ul className="mt-14 divide-y divide-line border-y border-line">
          {achievements.map((item) => (
            <li key={item.title} data-reveal="up" className="grid gap-2 py-6 md:grid-cols-[1.2fr_1fr] md:items-baseline">
              <h3 className="text-lg text-ink sm:text-xl">{item.title}</h3>
              <p className="text-sm text-muted">{item.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
