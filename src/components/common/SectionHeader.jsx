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
    <div className={`section-header-wrap ${hasControls || hasLink ? 'with-controls' : ''} ${className}`}>
      <div className="section-header-text">
        <h2 className={`section-title ${isHindi ? 'hindi-font' : ''}`}>{title}</h2>
        {subtitle && <p className="section-subtitle">{subtitle}</p>}
      </div>

      {hasControls && (
        <div className="carousel-nav-buttons">
          <button
            type="button"
            className="carousel-btn"
            onClick={onPrev}
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            className="carousel-btn"
            onClick={onNext}
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}

      {hasLink && (
        <Link
          to={linkTo}
          className="text-[15px] font-bold text-[#8B5E34] hover:text-[#6E491A] inline-flex items-center gap-1.5 transition-colors"
        >
          <span>{linkText}</span>
          <ArrowRight size={16} />
        </Link>
      )}
    </div>
  )
}
