import { aboutPills, aboutSummary, personalInfo, stats } from '../data/content'
import AnimatedCounter from './AnimatedCounter'

export default function About() {
  return (
    <section id="about" className="section-pad border-t border-line">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow" data-reveal="up">
          // System profile
        </p>
        <h2 className="display mt-4 text-5xl text-ink sm:text-6xl md:text-7xl" data-reveal="up">
          Hello, I&apos;m
          <br />
          {personalInfo.name}
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
      </div>

      <div data-reveal="stagger" className="mx-auto mt-20 grid max-w-6xl grid-cols-2 gap-px bg-line md:grid-cols-4">
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
