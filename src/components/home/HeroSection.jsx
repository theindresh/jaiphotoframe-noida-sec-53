import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Check, Sparkles } from 'lucide-react'
import { STUDIO_INFO } from '../../constants/studioData'
import { makeWhatsAppUrl } from '../../utils/whatsapp'
import FrameVisualDemo from '../common/FrameVisualDemo'
import WhatsAppIcon from '../common/WhatsAppIcon'

const DEMO_PRESETS = [
  {
    id: 'p-1',
    name: '12 × 18 in',
    styleName: 'Classic Teak Wood',
    label: 'Family Portrait Frame',
    aspectRatio: '4 / 3',
    caption: 'Good Memories Forever ❤️',
    moulding: 'Teak Wood',
    badge: 'Popular Size',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'p-2',
    name: '16 × 24 in',
    styleName: 'Ornate Gold Border',
    label: 'Royal Couple Keepsake',
    aspectRatio: '4 / 3',
    caption: 'Cherished Together Forever ❤️',
    moulding: 'Gold Ornate',
    badge: 'Luxury Finish',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'p-3',
    name: '20 × 30 in',
    styleName: 'Grand Teakwood Gallery',
    label: 'Grand Wedding Frame',
    aspectRatio: '4 / 3',
    caption: 'A Lifetime of Love ❤️',
    moulding: 'Teak Wood',
    badge: 'Grand Wall Art',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&auto=format&fit=crop&q=80',
  },
  {
    id: 'p-4',
    name: '8 × 12 in',
    styleName: 'Sleek Matte Black',
    label: 'Baby Milestone Frame',
    aspectRatio: '4 / 3',
    caption: 'Tiny Steps & Smiles ❤️',
    moulding: 'Matte Black',
    badge: 'Table / Desk',
    image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?w=600&auto=format&fit=crop&q=80',
  },
]

export default function HeroSection() {
  const [activePreset, setActivePreset] = useState(DEMO_PRESETS[0])

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-[#FAF8F4] overflow-hidden" id="home">
      <div className="content-wrapper grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
        
        {/* Left Copy Column */}
        <motion.div
          className="flex flex-col"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F7F1E5] text-[#8B5E34] border border-[#E8D9C5] px-3.5 py-1.5 rounded-full text-xs font-bold w-fit mb-5 shadow-2xs">
            <Sparkles size={14} className="text-[#A67C3A]" />
            <span>Noida's Premier Framing Studio</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold font-serif text-stone-900 leading-[1.12] mb-3">
            Your Memories
            <span className="block text-[#A67C3A] italic font-semibold">Our Frame</span>
          </h1>

          {/* Hindi Tagline */}
          <div className="hindi-font text-xl sm:text-2xl text-[#8B5E34] font-semibold mb-4 flex items-center gap-2">
            {STUDIO_INFO.tagline} <span className="text-[#D32F2F]">❤️</span>
          </div>

          {/* Description */}
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed max-w-xl mb-8">
            Premium Photo Frames, Custom Designs, Collages &amp; Personalised Gifts in Noida Sector 53. Handcrafted with museum-grade care for generations of love.
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-8">
            <Link
              to="/collections"
              className="inline-flex items-center gap-2.5 bg-[#A67C3A] hover:bg-[#8B5E34] text-white px-7 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <span>Explore Collections</span>
              <ArrowRight size={18} />
            </Link>

            <a
              href={makeWhatsAppUrl(`Hello Jai Photo Frame! I am looking for a ${activePreset.name} frame (${activePreset.styleName}). Please share quote.`)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 bg-white hover:bg-[#FAF8F4] border border-[#E8D9C5] hover:border-[#25D366] text-stone-800 hover:text-[#25D366] px-6 py-3.5 rounded-full font-bold text-sm sm:text-base shadow-xs transition-all active:scale-95 cursor-pointer"
            >
              <WhatsAppIcon size={20} variant="official" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          {/* 4 Trust Badges */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-6 pt-5 border-t border-[#E8D9C5]/80">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-700">
              <Check size={16} className="text-[#A67C3A] shrink-0" strokeWidth={2.8} />
              <span>Premium Quality</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-700">
              <Check size={16} className="text-[#A67C3A] shrink-0" strokeWidth={2.8} />
              <span>Custom Designs</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-700">
              <Check size={16} className="text-[#A67C3A] shrink-0" strokeWidth={2.8} />
              <span>For Every Occasion</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-stone-700">
              <Check size={16} className="text-[#A67C3A] shrink-0" strokeWidth={2.8} />
              <span>Local Studio in Noida</span>
            </div>
          </div>
        </motion.div>

        {/* Right Hero Frame Visual Showcase */}
        <div className="relative flex flex-col items-center">
          {/* Handwritten Annotation on Top-Right */}
          <div className="absolute -top-7 right-2 sm:right-6 z-20 text-stone-700 handwriting-font text-xl sm:text-2xl rotate-3 pointer-events-none flex flex-col items-center">
            <span>Frames that tell your story ♡</span>
            <svg className="w-9 h-6 text-[#8B5E34] -scale-x-100 rotate-12" viewBox="0 0 50 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 25 Q 35 28 42 8 M 32 6 L 44 8 L 41 18"/>
            </svg>
          </div>

          <div className="w-full max-w-[430px] flex flex-col gap-4">
            {/* Size Presets */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {DEMO_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => setActivePreset(preset)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap cursor-pointer transition-all duration-200 ${
                    activePreset.id === preset.id
                      ? 'border-[1.5px] border-[#8B5E34] bg-[#FAF5EF] text-[#8B5E34] shadow-xs'
                      : 'border border-[#E8D9C5] bg-white text-stone-700 hover:border-[#8B5E34]'
                  }`}
                >
                  {preset.name}
                </button>
              ))}
            </div>

            {/* Frame Showcase Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePreset.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3 }}
              >
                <FrameVisualDemo
                  size={activePreset.name}
                  styleName={activePreset.styleName}
                  aspectRatio={activePreset.aspectRatio}
                  label={activePreset.label}
                  sublabel="Precision Mitered Corners • Beveled Mat"
                  caption={activePreset.caption}
                  image={activePreset.image}
                />
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between px-2 text-xs text-stone-500">
              <span>Selected Moulding: <strong className="text-stone-800">{activePreset.styleName}</strong></span>
              <span className="text-[#8B5E34] font-semibold">{activePreset.badge}</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
