import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import ProductCard from '../cards/ProductCard'
import { SIGNATURE_FRAMES, BESTSELLER_FRAMES } from '../../constants/studioData'

export default function FeaturedSection() {
  const [sigIndex, setSigIndex] = useState(0)
  const [bestIndex, setBestIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(4)

  const sigTouchStartX = useRef(0)
  const sigTouchEndX = useRef(0)
  const bestTouchStartX = useRef(0)
  const bestTouchEndX = useRef(0)

  // Update items per view based on viewport width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1.2)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2.5)
      } else {
        setItemsPerView(4)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const totalSig = SIGNATURE_FRAMES.length
  const maxSigIndex = Math.max(0, Math.ceil(totalSig - itemsPerView))

  const totalBest = BESTSELLER_FRAMES.length
  const maxBestIndex = Math.max(0, Math.ceil(totalBest - itemsPerView))

  // 1. Signature Frame Controls
  const handleSigPrev = () => {
    setSigIndex((prev) => (prev <= 0 ? maxSigIndex : prev - 1))
  }
  const handleSigNext = () => {
    setSigIndex((prev) => (prev >= maxSigIndex ? 0 : prev + 1))
  }

  // 2. Bestseller Frame Controls
  const handleBestPrev = () => {
    setBestIndex((prev) => (prev <= 0 ? maxBestIndex : prev - 1))
  }
  const handleBestNext = () => {
    setBestIndex((prev) => (prev >= maxBestIndex ? 0 : prev + 1))
  }

  // Touch Handlers for Signature Carousel
  const handleSigTouchStart = (e) => {
    sigTouchStartX.current = e.targetTouches[0].clientX
  }
  const handleSigTouchMove = (e) => {
    sigTouchEndX.current = e.targetTouches[0].clientX
  }
  const handleSigTouchEnd = () => {
    const diff = sigTouchStartX.current - sigTouchEndX.current
    if (diff > 40) handleSigNext()
    else if (diff < -40) handleSigPrev()
  }

  // Touch Handlers for Bestseller Carousel
  const handleBestTouchStart = (e) => {
    bestTouchStartX.current = e.targetTouches[0].clientX
  }
  const handleBestTouchMove = (e) => {
    bestTouchEndX.current = e.targetTouches[0].clientX
  }
  const handleBestTouchEnd = () => {
    const diff = bestTouchStartX.current - bestTouchEndX.current
    if (diff > 40) handleBestNext()
    else if (diff < -40) handleBestPrev()
  }

  const sigShiftPercent = (sigIndex * 100) / totalSig
  const bestShiftPercent = (bestIndex * 100) / totalBest

  return (
    <div className="flex flex-col" id="featured-frames">

      {/* ══════════════════════════════════════════════════════════════════════
          1. FEATURED FRAMES SECTION (Exact Reference Header & Smooth Slider)
          ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-14 sm:py-18 lg:py-20 bg-[#FAF8F4] border-b border-[#E8D9C5]/80 overflow-hidden"
        onTouchStart={handleSigTouchStart}
        onTouchMove={handleSigTouchMove}
        onTouchEnd={handleSigTouchEnd}
      >
        <div className="content-wrapper">

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 text-center sm:text-left">
            <div className="mx-auto sm:mx-0">
              <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-900 leading-tight">
                Featured Frames
              </h2>
              <p className="text-sm sm:text-base text-stone-600 mt-1 max-w-xl">
                Handpicked designs loved by our customers.
              </p>
            </div>

            {/* Right Side Nav Controls & View All Link */}
            <div className="flex items-center justify-center sm:justify-end gap-3 shrink-0">
              <div className="flex items-center gap-2 mr-2">
                <button
                  type="button"
                  onClick={handleSigPrev}
                  className="w-10 h-10 rounded-full bg-white border border-[#E8D9C5] hover:border-[#8B5E34] hover:bg-[#FAF5EF] text-stone-800 flex items-center justify-center shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-90"
                  aria-label="Previous featured frames"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={handleSigNext}
                  className="w-10 h-10 rounded-full bg-white border border-[#E8D9C5] hover:border-[#8B5E34] hover:bg-[#FAF5EF] text-stone-800 flex items-center justify-center shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-90"
                  aria-label="Next featured frames"
                >
                  <ChevronRight size={20} />
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

          {/* Animated Product Carousel Track */}
          <div className="py-2 overflow-hidden -mx-2 sm:-mx-2.5 lg:-mx-3 px-2 sm:px-2.5 lg:px-3">
            <motion.div
              className="flex items-stretch"
              style={{ width: `${(totalSig / itemsPerView) * 100}%` }}
              animate={{
                x: `-${sigShiftPercent}%`,
              }}
              transition={{
                duration: 0.5,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              {SIGNATURE_FRAMES.map((item) => (
                <div
                  key={item.id}
                  style={{ width: `${100 / totalSig}%` }}
                  className="shrink-0 px-2 sm:px-2.5 lg:px-3 box-border"
                >
                  <ProductCard product={item} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {Array.from({ length: maxSigIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSigIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  sigIndex === idx ? 'w-7 bg-[#8B5E34]' : 'w-2 bg-stone-300 hover:bg-stone-400'
                }`}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          2. BESTSELLER FRAMES SECTION (Warm Cream Background & Smooth Slider)
          ══════════════════════════════════════════════════════════════════════ */}
      <section
        className="py-14 sm:py-18 lg:py-20 bg-[#F4ECE4] border-b border-[#E8D9C5]/80 overflow-hidden"
        onTouchStart={handleBestTouchStart}
        onTouchMove={handleBestTouchMove}
        onTouchEnd={handleBestTouchEnd}
      >
        <div className="content-wrapper">

          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 text-center sm:text-left">
            <div className="mx-auto sm:mx-0">
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
            <div className="flex items-center justify-center sm:justify-end gap-3 shrink-0">
              <div className="flex items-center gap-2 mr-2">
                <button
                  type="button"
                  onClick={handleBestPrev}
                  className="w-10 h-10 rounded-full bg-white border border-[#E8D9C5] hover:border-[#8B5E34] hover:bg-[#FAF5EF] text-stone-800 flex items-center justify-center shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-90"
                  aria-label="Previous bestseller frames"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  onClick={handleBestNext}
                  className="w-10 h-10 rounded-full bg-white border border-[#E8D9C5] hover:border-[#8B5E34] hover:bg-[#FAF5EF] text-stone-800 flex items-center justify-center shadow-xs hover:shadow-md transition-all cursor-pointer active:scale-90"
                  aria-label="Next bestseller frames"
                >
                  <ChevronRight size={20} />
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

          {/* Animated Product Carousel Track */}
          <div className="py-2 overflow-hidden -mx-2 sm:-mx-2.5 lg:-mx-3 px-2 sm:px-2.5 lg:px-3">
            <motion.div
              className="flex items-stretch"
              style={{ width: `${(totalBest / itemsPerView) * 100}%` }}
              animate={{
                x: `-${bestShiftPercent}%`,
              }}
              transition={{
                duration: 0.5,
                ease: [0.25, 1, 0.5, 1],
              }}
            >
              {BESTSELLER_FRAMES.map((item) => (
                <div
                  key={item.id}
                  style={{ width: `${100 / totalBest}%` }}
                  className="shrink-0 px-2 sm:px-2.5 lg:px-3 box-border"
                >
                  <ProductCard product={item} />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {Array.from({ length: maxBestIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setBestIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  bestIndex === idx ? 'w-7 bg-[#8B5E34]' : 'w-2 bg-stone-300 hover:bg-stone-400'
                }`}
              />
            ))}
          </div>

        </div>
      </section>

    </div>
  )
}
