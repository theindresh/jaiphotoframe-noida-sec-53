import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gem, Sparkles, CalendarHeart, MapPin, Users, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { STUDIO_INFO, TESTIMONIALS } from '../../constants/studioData'

export default function WhyChooseAndReviewsSection() {
  const [activeReviewIdx, setActiveReviewIdx] = useState(0)

  const handlePrev = () => {
    setActiveReviewIdx((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveReviewIdx((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))
  }

  const currentReview = TESTIMONIALS[activeReviewIdx] || TESTIMONIALS[0]

  const features = [
    { title: 'High Quality Materials', icon: Gem },
    { title: 'Custom & Unique Designs', icon: Sparkles },
    { title: 'Perfect for All Occasions', icon: CalendarHeart },
    { title: 'Local Studio in Noida', icon: MapPin },
    { title: 'Trusted by Hundreds of Customers', icon: Users },
  ]

  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-[#FAF8F4] border-b border-[#E8D9C5]/80" id="why-us">
      <div className="content-wrapper">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_0.95fr] gap-10 lg:gap-12 items-start">
          
          {/* ══════════════════════════════════════════════════════════════════
              LEFT SIDE: Why Choose जय फोटो फ्रेम? (5 Features in a Row)
              ══════════════════════════════════════════════════════════════════ */}
          <div className="flex flex-col">
            <div className="mb-6 text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-stone-900 leading-tight">
                Why Choose <span className="hindi-font font-bold text-[#8B5E34]">{STUDIO_INFO.nameHindi}?</span>
              </h2>
              <p className="text-sm sm:text-base text-stone-600 mt-1">
                More than just frames, we create lasting memories.
              </p>
            </div>

            {/* 5 Feature Icons in a Row / Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-2 pt-2">
              {features.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="flex flex-col items-center text-center p-3 rounded-2xl bg-white border border-[#E8D9C5] hover:border-[#A67C3A] hover:shadow-md transition-all group"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#FAF5EF] text-[#8B5E34] border border-[#E8D9C5] flex items-center justify-center mb-2.5 group-hover:bg-[#8B5E34] group-hover:text-white transition-colors shadow-2xs">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-xs font-bold text-stone-800 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                )
              })}
            </div>
          </div>

          {/* ══════════════════════════════════════════════════════════════════
              RIGHT SIDE: What Our Customers Say (Review Card with Animated Controls)
              ══════════════════════════════════════════════════════════════════ */}
          <div className="flex flex-col">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-stone-900 leading-tight">
                What Our Customers Say
              </h2>
            </div>

            {/* Testimonial Card */}
            <div className="bg-white rounded-2xl border border-[#E8D9C5] p-6 shadow-sm flex flex-col justify-between relative min-h-[220px]">
              {/* Reviewer Header & Stars */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3">
                  <img
                    src={currentReview.avatar}
                    alt={currentReview.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#E8D9C5] shadow-xs"
                    loading="lazy"
                  />
                  <div>
                    {/* 5 Gold Stars */}
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(currentReview.rating || 5)].map((_, i) => (
                        <Star key={i} size={15} className="fill-[#F5A623] text-[#F5A623]" />
                      ))}
                    </div>
                    <div className="text-xs font-bold text-stone-900">{currentReview.name}</div>
                    <div className="text-[11px] text-stone-500">{currentReview.location}</div>
                  </div>
                </div>

                {/* Left/Right Arrow Controls */}
                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="w-9 h-9 rounded-full border border-[#E8D9C5] bg-[#FAF8F4] hover:bg-[#FAF5EF] hover:border-[#8B5E34] text-stone-800 flex items-center justify-center transition-all shadow-2xs hover:shadow-xs cursor-pointer active:scale-90"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="w-9 h-9 rounded-full border border-[#E8D9C5] bg-[#FAF8F4] hover:bg-[#FAF5EF] hover:border-[#8B5E34] text-stone-800 flex items-center justify-center transition-all shadow-2xs hover:shadow-xs cursor-pointer active:scale-90"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>

              {/* Animated Quote */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={currentReview.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                  className="text-sm text-stone-700 leading-relaxed italic mb-4 min-h-[44px]"
                >
                  "{currentReview.text}"
                </motion.p>
              </AnimatePresence>

              {/* Bottom Dots */}
              <div className="flex items-center justify-center gap-1.5 pt-2 border-t border-[#E8D9C5]/50">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveReviewIdx(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activeReviewIdx === idx ? 'w-5 bg-[#8B5E34]' : 'w-1.5 bg-stone-300 hover:bg-stone-400'
                    }`}
                    aria-label={`Go to review ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
