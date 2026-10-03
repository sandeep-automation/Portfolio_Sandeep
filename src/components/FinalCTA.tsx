import { scrollToId } from '../hooks/useLenis'

export default function FinalCTA() {
  return (
    <section className="section-pad border-t border-line">
      <div className="mx-auto max-w-4xl text-center" data-reveal="up">
        <h2 className="display text-5xl text-ink sm:text-6xl md:text-7xl">
          Your next release could feel like this.
        </h2>
        <p className="mt-6 text-muted">Let&apos;s make it happen.</p>
        <a
          href="#together"
          className="btn-primary mt-10"
          onClick={(event) => {
            event.preventDefault()
            scrollToId('#together')
          }}
        >
          Start a Project →
        </a>
      </div>
    </section>
  )
}
