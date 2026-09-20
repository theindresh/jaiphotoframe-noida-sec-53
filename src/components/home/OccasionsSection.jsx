import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import OccasionCard from '../cards/OccasionCard'
import { OCCASIONS } from '../../constants/studioData'

export default function OccasionsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [itemsPerView, setItemsPerView] = useState(4)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Update items per view based on viewport width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(2)
      } else if (window.innerWidth < 1024) {
        setItemsPerView(3)
      } else {
        setItemsPerView(4)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, OCCASIONS.length - itemsPerView)

  // Clamp currentIndex when itemsPerView changes
  useEffect(() => {
    setCurrentIndex((prev) => Math.min(prev, maxIndex))
  }, [maxIndex])

  // Automatic slide interval
  useEffect(() => {
    if (isPaused) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
    }, 3500)

    return () => clearInterval(interval)
  }, [isPaused, maxIndex])

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX
    setIsPaused(true)
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (diff > 40) {
      handleNext()
    } else if (diff < -40) {
      handlePrev()
    }
    setIsPaused(false)
  }

  return (
    <section
      className="py-14 sm:py-18 lg:py-20 bg-[#FAF8F4] border-b border-[#E8D9C5]/80 relative overflow-hidden"
      id="occasions"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="content-wrapper">
        {/* Section Header with Carousel Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10 text-center sm:text-left">
          <div className="mx-auto sm:mx-0">
            <h2 className="text-3xl sm:text-4xl font-bold text-stone-900 font-serif">
              Shop by Occasion
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-1 max-w-xl">
              Every memory has a story, find the perfect frame for yours.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center sm:justify-end gap-2 shrink-0">
            <button
              type="button"
              className="w-10 h-10 rounded-full border border-[#E8D9C5] bg-white hover:bg-[#FAF5EF] hover:border-[#8B5E34] text-stone-700 flex items-center justify-center transition-colors shadow-xs cursor-pointer active:scale-95"
              onClick={handlePrev}
              aria-label="Previous frame occasion"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              type="button"
              className="w-10 h-10 rounded-full border border-[#E8D9C5] bg-white hover:bg-[#FAF5EF] hover:border-[#8B5E34] text-stone-700 flex items-center justify-center transition-colors shadow-xs cursor-pointer active:scale-95"
              onClick={handleNext}
              aria-label="Next frame occasion"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Slider Track Container */}
        <div className="py-2 overflow-hidden -mx-2 sm:-mx-2.5 lg:-mx-3 px-2 sm:px-2.5 lg:px-3">
          <motion.div
            className="flex items-stretch"
            animate={{
              x: `-${currentIndex * (100 / itemsPerView)}%`,
            }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {OCCASIONS.map((occ) => (
              <div
                key={occ.id}
                className="w-1/2 sm:w-1/3 lg:w-1/4 shrink-0 px-2 sm:px-2.5 lg:px-3 box-border"
              >
                <OccasionCard occasion={occ} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Dot Pagination Indicators */}
        <div className="flex items-center justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === idx
                  ? 'w-7 bg-[#8B5E34]'
                  : 'w-2 bg-stone-300 hover:bg-stone-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
