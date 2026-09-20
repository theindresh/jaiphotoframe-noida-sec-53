import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from '../cards/ProductCard'
import { SIGNATURE_FRAMES, BESTSELLER_FRAMES } from '../../constants/studioData'

export default function FeaturedSection() {
  const featScrollRef = useRef(null)
  const bestScrollRef = useRef(null)

  const handleScroll = (ref, direction) => {
    if (!ref.current) return
    const scrollAmount = ref.current.clientWidth * 0.75
    ref.current.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <div className="flex flex-col" id="featured-frames">

      {/* ══════════════════════════════════════════════════════════════════════
          1. FEATURED FRAMES SECTION (Exact Reference Header & Layout)
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-18 lg:py-20 bg-[#FAF8F4] border-b border-[#E8D9C5]/80">
        <div className="content-wrapper">

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-900 leading-tight">
                Featured Frames
              </h2>
              <p className="text-sm sm:text-base text-stone-600 mt-1 max-w-xl">
                Handpicked designs loved by our customers.
              </p>
            </div>

            {/* Right Side Nav Controls & View All Link */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-1.5 mr-2">
                <button
                  type="button"
                  onClick={() => handleScroll(featScrollRef, 'prev')}
                  className="w-10 h-10 rounded-full bg-white border border-[#E8D9C5] hover:border-[#8B5E34] hover:bg-[#FAF5EF] text-stone-800 flex items-center justify-center shadow-xs transition-colors cursor-pointer active:scale-95"
                  aria-label="Previous featured frames"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => handleScroll(featScrollRef, 'next')}
                  className="w-10 h-10 rounded-full bg-white border border-[#E8D9C5] hover:border-[#8B5E34] hover:bg-[#FAF5EF] text-stone-800 flex items-center justify-center shadow-xs transition-colors cursor-pointer active:scale-95"
                  aria-label="Next featured frames"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              <Link
                to="/collections"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#8B5E34] hover:text-[#6E4427] transition-colors"
              >
                <span>View All Frames</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Horizontal Product Carousel: 5 cards */}
          <div
            ref={featScrollRef}
            className="flex items-stretch gap-4 sm:gap-5 lg:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-2 px-1"
          >
            {SIGNATURE_FRAMES.map((item) => (
              <div
                key={item.id}
                className="shrink-0 snap-start w-[78vw] sm:w-[calc(33.333%-14px)] lg:w-[calc(20%-19px)] h-full"
              >
                <ProductCard product={item} />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          2. BESTSELLER FRAMES SECTION (Warm Cream Background)
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-14 sm:py-18 lg:py-20 bg-[#F4ECE4] border-b border-[#E8D9C5]/80">
        <div className="content-wrapper">

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#8B5E34] block mb-1">
                Customer Favorites
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-900 leading-tight">
                <span className="text-[#8B5E34]">Bestseller</span>{' '}
                <span className="font-normal italic">Frames</span>
              </h2>
              <p className="text-sm sm:text-base text-stone-600 mt-1 max-w-xl">
                Most loved by our customers, ready to frame your happiness.
              </p>
            </div>

            {/* Right Side Nav Controls & View All Link */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-1.5 mr-2">
                <button
                  type="button"
                  onClick={() => handleScroll(bestScrollRef, 'prev')}
                  className="w-10 h-10 rounded-full bg-white border border-[#E8D9C5] hover:border-[#8B5E34] hover:bg-[#FAF5EF] text-stone-800 flex items-center justify-center shadow-xs transition-colors cursor-pointer active:scale-95"
                  aria-label="Previous bestseller frames"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  type="button"
                  onClick={() => handleScroll(bestScrollRef, 'next')}
                  className="w-10 h-10 rounded-full bg-white border border-[#E8D9C5] hover:border-[#8B5E34] hover:bg-[#FAF5EF] text-stone-800 flex items-center justify-center shadow-xs transition-colors cursor-pointer active:scale-95"
                  aria-label="Next bestseller frames"
                >
                  <ChevronRight size={18} />
                </button>
              </div>

              <Link
                to="/collections"
                className="inline-flex items-center gap-1.5 text-sm font-bold text-[#8B5E34] hover:text-[#6E4427] transition-colors"
              >
                <span>View All Bestsellers</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>

          {/* Horizontal Product Carousel: 5 cards */}
          <div
            ref={bestScrollRef}
            className="flex items-stretch gap-4 sm:gap-5 lg:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-2 px-1"
          >
            {BESTSELLER_FRAMES.map((item) => (
              <div
                key={item.id}
                className="shrink-0 snap-start w-[78vw] sm:w-[calc(33.333%-14px)] lg:w-[calc(20%-19px)] h-full"
              >
                <ProductCard product={item} />
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}
