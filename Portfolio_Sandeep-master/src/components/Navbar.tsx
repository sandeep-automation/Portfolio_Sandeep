import { useEffect, useState, type MouseEvent } from 'react'
import { navLinks, personalInfo } from '../data/content'
import { scrollToId } from '../hooks/useLenis'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const goTo = (href: string) => (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setOpen(false)
    scrollToId(href)
  }

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          scrolled ? 'border-b border-line bg-void/70 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <nav
          className="flex items-center justify-between px-5 py-5 sm:px-8 md:px-12 lg:px-16"
          aria-label="Main navigation"
        >
          <a
            href="#home"
            onClick={goTo('#home')}
            className="text-[12px] font-medium tracking-[0.28em] text-ink uppercase"
          >
            {personalInfo.logo}
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={goTo(link.href)}
                  className="text-[11px] tracking-[0.2em] text-muted uppercase transition-colors duration-300 hover:text-ink"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <a href="#contact" onClick={goTo('#contact')} className="btn-secondary !px-5 !py-2">
              Let&apos;s Work Together
            </a>
          </div>

          <button
            type="button"
            className="text-[11px] tracking-[0.22em] text-ink uppercase lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            Menu
          </button>
        </nav>
      </header>

      {open && (
        <div className="fixed inset-0 z-[80] flex flex-col bg-void px-8 py-8 lg:hidden">
          <div className="flex items-center justify-between">
            <span className="text-[12px] tracking-[0.28em] uppercase">{personalInfo.logo}</span>
            <button
              type="button"
              className="text-[11px] tracking-[0.22em] uppercase"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              Close
            </button>
          </div>
          <ul className="flex flex-1 flex-col justify-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="display text-5xl text-ink" onClick={goTo(link.href)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-primary w-fit" onClick={goTo('#contact')}>
            Let&apos;s Work Together
          </a>
        </div>
      )}
    </>
  )
}
