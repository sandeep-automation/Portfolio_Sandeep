import { useEffect, useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import { projects } from '../data/content'

type Project = (typeof projects)[number]

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null)

  useEffect(() => {
    if (!active) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActive(null)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  return (
    <section id="work" className="section-pad border-t border-line">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow" data-reveal="up">
          Selected Work
        </p>
        <h2 className="display mt-4 text-5xl text-ink sm:text-6xl md:text-7xl" data-reveal="up">
          Work that had to hold.
        </h2>
      </div>

      <div className="mx-auto mt-16 max-w-6xl space-y-24 md:space-y-32">
        {projects.map((project, index) => (
          <article key={project.id} className="group" data-reveal="up">
            <button
              type="button"
              data-cursor="explore"
              className="block w-full overflow-hidden text-left"
              onClick={() => setActive(project)}
              aria-haspopup="dialog"
              aria-expanded={active?.id === project.id}
              aria-label={`Open live walkthrough for ${project.title}`}
            >
              <img
                src={project.image}
                alt={`${project.title} — open live walkthrough`}
                className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </button>
            <div className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-[11px] tracking-[0.22em] text-muted uppercase">
                  {String(index + 1).padStart(2, '0')} / {project.category}
                </p>
                <h3 className="display mt-3 text-3xl text-ink sm:text-5xl">{project.title}</h3>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted">{project.description}</p>
                <p className="mt-4 text-[11px] tracking-[0.16em] text-muted uppercase">
                  {project.technologies.join(' · ')}
                </p>
              </div>
              <button
                type="button"
                data-cursor="view"
                onClick={() => setActive(project)}
                className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] text-ink uppercase"
              >
                How it works
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </div>
          </article>
        ))}
      </div>

      {active && <ProjectWalkthrough project={active} onClose={() => setActive(null)} />}
    </section>
  )
}

function ProjectWalkthrough({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[200] overflow-y-auto bg-[#050505]"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${project.id}-walkthrough`}
      onClick={onClose}
    >
      <div
        className="mx-auto min-h-full max-w-5xl px-5 py-8 sm:px-8 lg:px-0 lg:py-12"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-6">
          <p className="eyebrow">{project.period}</p>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 text-[11px] tracking-[0.22em] text-muted uppercase hover:text-ink"
            aria-label="Close project walkthrough"
          >
            Close
            <X size={14} />
          </button>
        </div>

        <img src={project.image} alt="" className="mt-8 aspect-[16/9] w-full object-cover" />

        <h3 id={`${project.id}-walkthrough`} className="display mt-10 text-4xl text-ink sm:text-6xl">
          {project.title}
        </h3>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">{project.realtimeIntro}</p>

        <h4 className="mt-14 text-[11px] tracking-[0.28em] text-muted uppercase">{project.realtimeTitle}</h4>
        <ol className="mt-6 divide-y divide-line border-y border-line">
          {project.realtime.map((step, index) => (
            <li key={step.title} className="grid gap-3 py-7 md:grid-cols-[4rem_1fr_1.4fr] md:items-start">
              <span className="text-[11px] tracking-[0.2em] text-muted">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h5 className="display text-2xl text-ink sm:text-3xl">{step.title}</h5>
              <p className="text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>

        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-[11px] tracking-[0.18em] text-ink uppercase">
          {project.outcomes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p className="mt-8 text-[11px] tracking-[0.16em] text-muted uppercase">
          {project.technologies.join(' · ')}
        </p>
      </div>
    </div>
  )
}
