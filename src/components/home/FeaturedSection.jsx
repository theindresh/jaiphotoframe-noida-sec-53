import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Gem, Palette, Heart, ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from '../cards/ProductCard'
import { SIGNATURE_FRAMES, BESTSELLER_FRAMES } from '../../constants/studioData'

export default function FeaturedSection() {
  const sigScrollRef = useRef(null)
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
    <div className="flex flex-col" id="signature-bestsellers">

      {/* ══════════════════════════════════════════════════════════════════════
          1. SIGNATURE FRAMES SECTION
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#FAF8F4] border-b border-[#E8D9C5]/70">
        <div className="content-wrapper">

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10 pb-6 border-b border-[#E8D9C5]/70">
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#8B5E34] block mb-1.5">
                Our Exclusive Collection
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#171717] leading-tight">
                <span className="font-bold">Signature</span>{' '}
                <span className="text-[#8B5E34] font-normal italic">Frames</span>
              </h2>
              <p className="text-sm sm:text-base text-stone-600 mt-1 max-w-xl">
                Premium designs for your most special moments.
              </p>

              {/* 3 Benefit Badges */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-7 mt-5 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#FAF0E6] flex items-center justify-center text-[#8B5E34] shrink-0">
                    <Gem size={14} />
                  </div>
                  <div>
                    <strong className="block text-[#171717] font-semibold">Exclusive Designs</strong>
                    <span className="text-stone-500 text-[11px]">Unique &amp; artistic styles</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#FAF0E6] flex items-center justify-center text-[#8B5E34] shrink-0">
                    <Palette size={14} />
                  </div>
                  <div>
                    <strong className="block text-[#171717] font-semibold">Premium Finishing</strong>
                    <span className="text-stone-500 text-[11px]">Long-lasting quality</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#FAF0E6] flex items-center justify-center text-[#8B5E34] shrink-0">
                    <Heart size={14} />
                  </div>
                  <div>
                    <strong className="block text-[#171717] font-semibold">Made with Love</strong>
                    <span className="text-stone-500 text-[11px]">For your special memories</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side Annotation, Nav Controls & View All Button */}
            <div className="flex flex-col items-start lg:items-end gap-3.5 shrink-0">
              <div className="text-sm sm:text-base text-[#8B5E34] italic font-serif hidden sm:block">
                Some memories deserve something extra special ❤️
              </div>

              <div className="flex items-center gap-2.5">
                {/* Arrow Navigation Controls */}
                <div className="flex items-center gap-1.5 mr-1">
                  <button
                    type="button"
                    onClick={() => handleScroll(sigScrollRef, 'prev')}
                    className="w-9 h-9 rounded-full bg-white border border-[#E8D9C5] hover:border-[#8B5E34] hover:bg-[#FAF5EF] text-[#171717] flex items-center justify-center shadow-xs transition-colors cursor-pointer active:scale-95"
                    aria-label="Previous signature frames"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleScroll(sigScrollRef, 'next')}
                    className="w-9 h-9 rounded-full bg-white border border-[#E8D9C5] hover:border-[#8B5E34] hover:bg-[#FAF5EF] text-[#171717] flex items-center justify-center shadow-xs transition-colors cursor-pointer active:scale-95"
                    aria-label="Next signature frames"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                <Link
                  to="/collections"
                  className="inline-flex items-center gap-2 bg-[#8B5E34] hover:bg-[#724823] text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-xl shadow-xs transition-colors active:scale-95"
                >
                  <span>View All Signature Frames</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>

          {/* Responsive Horizontal Carousel: Mobile ~1.2 cards (78vw), Tablet 3 cards, Desktop 5 cards */}
          <div
            ref={sigScrollRef}
            className="flex items-stretch gap-4 sm:gap-5 lg:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-3 px-1"
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
          2. BESTSELLER FRAMES SECTION (Warmer Cream Background)
          ══════════════════════════════════════════════════════════════════════ */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#F4ECE4]">
        <div className="content-wrapper">

          {/* Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10 pb-6 border-b border-[#E8D9C5]/80">
            <div>
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#8B5E34] block mb-1.5">
                Customer Favorites
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#171717] leading-tight">
                <span className="text-[#8B5E34] font-bold">Bestseller</span>{' '}
                <span className="font-normal italic">Frames</span>
              </h2>
              <p className="text-sm sm:text-base text-stone-600 mt-1 max-w-xl">
                Most loved by our customers, ready to frame your happiness.
              </p>
            </div>

            {/* Right Side Annotation, Nav Controls & View All Button */}
            <div className="flex flex-col items-start lg:items-end gap-3.5 shrink-0">
              <div className="text-sm sm:text-base text-[#8B5E34] italic font-serif hidden sm:block">
                Popular choices for beautiful people ❤️
              </div>

              <div className="flex items-center gap-2.5">
                {/* Arrow Navigation Controls */}
                <div className="flex items-center gap-1.5 mr-1">
                  <button
                    type="button"
                    onClick={() => handleScroll(bestScrollRef, 'prev')}
                    className="w-9 h-9 rounded-full bg-white border border-[#E8D9C5] hover:border-[#8B5E34] hover:bg-[#FAF5EF] text-[#171717] flex items-center justify-center shadow-xs transition-colors cursor-pointer active:scale-95"
                    aria-label="Previous bestseller frames"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={() => handleScroll(bestScrollRef, 'next')}
                    className="w-9 h-9 rounded-full bg-white border border-[#E8D9C5] hover:border-[#8B5E34] hover:bg-[#FAF5EF] text-[#171717] flex items-center justify-center shadow-xs transition-colors cursor-pointer active:scale-95"
                    aria-label="Next bestseller frames"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>

                <Link
                  to="/collections"
                  className="inline-flex items-center gap-2 bg-[#8B5E34] hover:bg-[#724823] text-white text-xs sm:text-sm font-bold px-4 sm:px-5 py-2.5 rounded-xl shadow-xs transition-colors active:scale-95"
                >
                  <span>View All Bestsellers</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>

          {/* Responsive Horizontal Carousel: Mobile ~1.2 cards (78vw), Tablet 3 cards, Desktop 5 cards */}
          <div
            ref={bestScrollRef}
            className="flex items-stretch gap-4 sm:gap-5 lg:gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory py-3 px-1"
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
