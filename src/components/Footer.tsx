import { GitHubIcon, LinkedInIcon } from './SocialIcons'
import { personalInfo } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8 sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 text-[11px] tracking-[0.18em] text-muted uppercase sm:flex-row">
        <a href="#home" className="text-ink">
          {personalInfo.logo}
        </a>
        <p>Built with curiosity + code</p>
        <div className="flex items-center gap-5">
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon size={14} />
          </a>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon size={14} />
          </a>
          <span>© 2026</span>
        </div>
      </div>
    </footer>
  )
}
