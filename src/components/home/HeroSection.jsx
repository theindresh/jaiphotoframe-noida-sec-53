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
  {
    id: 'p-5',
    name: 'LED 12 × 18 in',
    styleName: 'LED Illuminated Box',
    label: 'Backlit Photo Frame',
    aspectRatio: '4 / 3',
    caption: 'Light Up Your Memories ✨',
    moulding: 'LED Box',
    badge: 'Illuminated',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&auto=format&fit=crop&q=80',
  },
]

export default function HeroSection() {
  const [activePreset, setActivePreset] = useState(DEMO_PRESETS[0])

  return (
    <section className="hero-section" id="home">
      <div className="content-wrapper hero-grid">
        {/* Left Copy Column */}
        <motion.div
          className="hero-copy-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="hero-pill-badge">
            <Sparkles size={14} color="var(--gold-dark)" />
            <span>Noida's Premier Framing Studio</span>
          </div>

          <h1 className="hero-heading">
            Your Memories
            <span className="gold-serif">Our Frame</span>
          </h1>

          <div className="hero-hindi-subtitle hindi-font">
            {STUDIO_INFO.tagline} <span className="heart">❤️</span>
          </div>

          <p className="hero-description">
            Premium Photo Frames, Custom Designs, Collages &amp; Personalised Gifts in Noida Sector 53. Handcrafted with museum-grade care for generations of love.
          </p>

          <div className="hero-cta-group">
            <Link to="/collections" className="btn-primary-hero">
              <span>Explore Collections</span>
              <ArrowRight size={18} />
            </Link>

            <a
              href={makeWhatsAppUrl(`Hello Jai Photo Frame! I am looking for a ${activePreset.name} frame (${activePreset.styleName}). Please share quote.`)}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp-hero"
            >
              <WhatsAppIcon size={22} variant="official" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-2.5 sm:gap-4 mt-6">
            <div className="trust-badge-item">
              <Check size={16} strokeWidth={2.8} />
              <span>Premium Quality</span>
            </div>
            <div className="trust-badge-item">
              <Check size={16} strokeWidth={2.8} />
              <span>Custom Designs</span>
            </div>
            <div className="trust-badge-item">
              <Check size={16} strokeWidth={2.8} />
              <span>For Every Occasion</span>
            </div>
            <div className="trust-badge-item">
              <Check size={16} strokeWidth={2.8} />
              <span>Local Noida Studio</span>
            </div>
          </div>
        </motion.div>

        {/* Right Hero Demo Frame Showcase */}
        <div className="hero-visual-wrapper">
          <div className="handwritten-annotation handwriting-font">
            <span>Frames that tell your story ♡</span>
            <svg className="curve-arrow" viewBox="0 0 50 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M5 25 Q 35 28 42 8 M 32 6 L 44 8 L 41 18"/>
            </svg>
          </div>

          <div className="w-full max-w-[440px] flex flex-col gap-4">
            {/* Interactive Frame Presets Switcher */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
              {DEMO_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => setActivePreset(preset)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap cursor-pointer transition-all duration-200 ${
                    activePreset.id === preset.id
                      ? 'border-[1.5px] border-[#8B5E34] bg-[#FAF5EF] text-[#8B5E34] shadow-[0_2px_8px_rgba(139,94,52,0.2)]'
                      : 'border border-[#EBDCCB] bg-white text-stone-800 hover:border-[#8B5E34]/50'
                  }`}
                >
                  {preset.name}
                </button>
              ))}
            </div>

            {/* Animated Frame Demo */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activePreset.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
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
