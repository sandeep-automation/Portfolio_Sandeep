import { about, aboutPills, aboutSummary, impactHighlights, stats } from '../data/content'
import AnimatedCounter from './AnimatedCounter'

export default function About() {
  return (
    <section id="about" className="section-pad border-t border-line">
      <div className="mx-auto max-w-6xl">
        <h2 className="display text-5xl text-ink sm:text-6xl md:text-7xl" data-reveal="up">
          {about.title[0]}
          <br />
          {about.title[1]}
        </h2>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg" data-reveal="up">
          {aboutSummary}
        </p>

        <div className="mt-8 flex flex-wrap gap-3" data-reveal="up">
          {aboutPills.map((pill) => (
            <div key={pill.title} className="rounded-2xl border border-line px-4 py-3">
              <p className="text-sm text-ink">{pill.title}</p>
              <p className="mt-1 text-[10px] tracking-[0.16em] text-muted uppercase">{pill.detail}</p>
            </div>
          ))}
        </div>

        <ul className="mt-14 grid gap-px bg-line sm:grid-cols-2" data-reveal="stagger">
          {impactHighlights.map((item) => (
            <li key={item.kicker} data-stagger-item className="bg-void px-5 py-6 sm:px-8">
              <p className="display text-3xl text-ink sm:text-4xl">{item.kicker}</p>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>

      <div data-reveal="stagger" className="mx-auto mt-20 grid max-w-6xl grid-cols-2 gap-px bg-line md:grid-cols-3">
        {stats.map((stat, index) => (
          <div key={stat.label} data-stagger-item className="bg-void px-4 py-8 sm:px-6">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} delay={index * 0.08} />
            <p className="mt-3 text-[11px] tracking-[0.16em] text-muted uppercase">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
