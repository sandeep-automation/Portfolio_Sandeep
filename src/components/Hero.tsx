import { hero, personalInfo } from '../data/content'
import { scrollToId } from '../hooks/useLenis'

export default function Hero() {
  return (
    <section id="home" className="relative h-screen overflow-hidden bg-void">
      <h1 className="sr-only">
        {personalInfo.name} — {personalInfo.role}
      </h1>

      <div className="absolute top-[32%] left-5 z-20 max-w-xl sm:left-10 lg:left-16">
        <p className="text-[11px] tracking-[0.28em] text-muted uppercase">{hero.kicker}</p>
        <p className="display mt-4 text-5xl leading-[0.88] text-ink sm:text-7xl md:text-8xl lg:text-9xl">
          <span className="block">{hero.title[0]}</span>
          <span className="block">{hero.title[1]}</span>
        </p>
      </div>

      <div className="absolute top-[36%] right-5 z-20 hidden max-w-[16rem] lg:right-16 lg:block">
        <p className="text-[10px] tracking-[0.22em] text-muted uppercase">{hero.supportEyebrow}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{hero.support}</p>
      </div>

      <p className="pointer-events-none absolute bottom-8 left-5 z-20 text-[10px] tracking-[0.32em] text-muted uppercase sm:left-10 lg:left-16">
        Scroll to explore
      </p>

      <div className="absolute right-5 bottom-8 z-20 flex gap-2 sm:right-10 lg:right-16">
        <a
          href="#work"
          className="border border-line px-4 py-2 text-[10px] tracking-[0.18em] text-ink uppercase transition-colors hover:border-line-strong"
          onClick={(event) => {
            event.preventDefault()
            scrollToId('#work')
          }}
        >
          View My Work
        </a>
        <a
          href="#contact"
          className="border border-line bg-ink px-4 py-2 text-[10px] tracking-[0.18em] text-void uppercase transition-colors hover:bg-white"
          onClick={(event) => {
            event.preventDefault()
            scrollToId('#contact')
          }}
        >
          Contact Me
        </a>
      </div>
    </section>
  )
}
