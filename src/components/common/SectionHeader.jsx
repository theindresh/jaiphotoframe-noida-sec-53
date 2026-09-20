import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react'

export default function SectionHeader({
  title,
  subtitle,
  linkText,
  linkTo,
  onPrev,
  onNext,
  isHindi = false,
  className = '',
}) {
  const hasControls = Boolean(onPrev || onNext)
  const hasLink = Boolean(linkText && linkTo)

  return (
    <div className={`flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 ${className}`}>
      <div className="max-w-2xl">
        <h2 className={`text-3xl sm:text-4xl font-bold font-serif text-stone-900 leading-tight ${isHindi ? 'hindi-font' : ''}`}>
          {title}
        </h2>
        {subtitle && <p className="text-sm sm:text-base text-stone-600 mt-1">{subtitle}</p>}
      </div>

      {hasControls && (
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            className="w-10 h-10 rounded-full border border-[#E8D9C5] bg-white hover:bg-[#FAF5EF] hover:border-[#8B5E34] text-stone-700 flex items-center justify-center transition-colors shadow-2xs cursor-pointer active:scale-95"
            onClick={onPrev}
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            className="w-10 h-10 rounded-full border border-[#E8D9C5] bg-white hover:bg-[#FAF5EF] hover:border-[#8B5E34] text-stone-700 flex items-center justify-center transition-colors shadow-2xs cursor-pointer active:scale-95"
            onClick={onNext}
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}

      {hasLink && (
        <Link
          to={linkTo}
          className="text-sm font-bold text-[#8B5E34] hover:text-[#6E4427] inline-flex items-center gap-1.5 transition-colors shrink-0"
        >
          <span>{linkText}</span>
          <ArrowRight size={15} />
        </Link>
      )}
    </div>
  )
}
