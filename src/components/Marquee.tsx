import { marqueeItems } from '../data/content'

export default function Marquee() {
  const loop = [...marqueeItems, ...marqueeItems]

  return (
    <div className="overflow-hidden border-y border-line py-5" aria-hidden="true">
      <div className="marquee-track gap-10 px-5">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-10 text-[11px] tracking-[0.32em] text-muted uppercase">
            {item}
            <span className="h-px w-8 bg-line-strong" />
          </span>
        ))}
      </div>
    </div>
  )
}
