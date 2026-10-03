import { personalInfo } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-line">
      <div className="mx-auto max-w-6xl">
        <p className="eyebrow" data-reveal="up">
          Contact
        </p>
        <h2 className="display mt-4 text-5xl text-ink sm:text-6xl md:text-7xl" data-reveal="up">
          How to reach me.
        </h2>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted sm:text-base" data-reveal="up">
          Direct lines for recruiters and hiring teams — email, LinkedIn, GitHub and phone.
        </p>

        <ul className="mt-12 space-y-4 text-base text-ink sm:text-lg" data-reveal="up">
          <li>
            <a href={`mailto:${personalInfo.email}`} className="hover:text-muted">
              {personalInfo.email}
            </a>
          </li>
          <li>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-muted"
            >
              linkedin.com/in/sandeep-gannamani-5ab26a1ba
            </a>
          </li>
          <li>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="hover:text-muted">
              github.com/sandeep-automation
            </a>
          </li>
          <li>
            <a href={`tel:${personalInfo.phone}`} className="hover:text-muted">
              {personalInfo.phone}
            </a>
          </li>
        </ul>

        <div className="mt-10 flex flex-wrap gap-3" data-reveal="up">
          <a href={personalInfo.resumePath} download={personalInfo.resumeFileName} className="btn-primary">
            Download Resume
          </a>
          <a href={`mailto:${personalInfo.email}`} className="btn-secondary">
            Email
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
