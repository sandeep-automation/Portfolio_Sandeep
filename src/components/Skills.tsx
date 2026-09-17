import { skillGroups } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-line">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow" data-reveal="up">
          Tech Stack
        </p>
        <h2 className="display mt-4 text-5xl text-ink sm:text-6xl md:text-7xl" data-reveal="up">
          Technologies I work with.
        </h2>

        <div className="mt-16 space-y-12">
          {skillGroups.map((group) => (
            <div key={group.label} data-reveal="up">
              <p className="text-[11px] tracking-[0.24em] text-muted uppercase">{group.label}</p>
              <ul className="mt-5 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="border border-line px-4 py-2 text-[11px] tracking-[0.16em] text-ink/80 uppercase transition-colors duration-300 hover:border-line-strong hover:text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
