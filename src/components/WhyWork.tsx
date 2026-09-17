import { whyWork } from '../data/content'

export default function WhyWork() {
  return (
    <section className="section-pad border-t border-line">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow" data-reveal="up">
          Why work with me
        </p>
        <div data-reveal="stagger" className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {whyWork.map((item) => (
            <article key={item.title} data-stagger-item className="bg-void p-8">
              <h3 className="display text-2xl text-ink sm:text-3xl">{item.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
