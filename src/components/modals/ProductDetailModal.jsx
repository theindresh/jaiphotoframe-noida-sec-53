import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Ruler, Layers, ArrowRight, Phone } from 'lucide-react'
import WhatsAppIcon from '../common/WhatsAppIcon'
import { getProductInquiryUrl } from '../../utils/whatsapp'
import { STUDIO_INFO } from '../../constants/studioData'
import DummyFrameVisual from '../common/DummyFrameVisual'

const DUMMY_MAP = {
  'sig-1': 'family-story',
  'sig-2': 'classic-wood',
  'sig-3': 'heart-collage',
  'sig-4': 'led-signature',
  'sig-5': 'royal-portrait',
  'best-1': 'collage-memories',
  'best-2': 'couple',
  'best-3': 'baby-milestone',
  'best-4': 'portrait',
  'best-5': 'gift',
}

export default function ProductDetailModal({ product, onClose }) {
  useEffect(() => {
    const fn = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', fn)
    return () => document.removeEventListener('keydown', fn)
  }, [onClose])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  if (!product) return null

  const dummyType = DUMMY_MAP[product.id] || (product.badge === 'Bestseller' ? 'collage-memories' : 'classic-wood')

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex items-end sm:items-center justify-center px-0 sm:px-4 bg-stone-950/75 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative w-full sm:max-w-[480px] bg-white rounded-t-3xl sm:rounded-3xl overflow-hidden max-h-[90vh] flex flex-col shadow-2xl"
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 40, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Mobile Drag Indicator */}
          <div className="flex justify-center pt-3 pb-0 sm:hidden">
            <div className="w-10 h-1 rounded-full bg-stone-200" />
          </div>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full flex items-center justify-center bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X size={16} />
          </button>

          <div className="overflow-y-auto max-h-[85vh]">
            {/* Frame Visual Display */}
            <div className="px-6 pt-5 pb-4 bg-gradient-to-b from-[#FDFBF8] to-[#F5ECE1] border-b border-[#E8D9C5]/80">
              <div className="max-w-[260px] mx-auto shadow-lg rounded-xl overflow-hidden">
                <DummyFrameVisual type={dummyType} name={product.name} />
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6">
              {product.badge && (
                <span className={`inline-flex items-center text-[10px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wider text-white shadow-xs ${
                  product.badge === 'Bestseller' ? 'bg-[#D32F2F]' : 'bg-[#8B5E34]'
                }`}>
                  {product.badge}
                </span>
              )}

              <h2 className="text-2xl font-bold font-serif text-[#171717] leading-snug mb-2">
                {product.name}
              </h2>

              <p className="text-sm text-stone-600 leading-relaxed mb-4">
                {product.desc || product.subtitle}
              </p>

              {/* Specs Chips */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700">
                  <Ruler size={13} className="text-[#8B5E34]" /> {product.defaultSize}
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full bg-stone-100 border border-stone-200 text-stone-700">
                  <Layers size={13} className="text-[#8B5E34]" /> {product.frameStyle}
                </span>
              </div>

              {product.highlight && (
                <div className="flex items-center gap-2 text-xs font-semibold mb-4 px-3.5 py-2.5 rounded-xl text-[#8B5E34] bg-[#FAF5EF] border border-[#EBDCCB]">
                  <span>✦</span>
                  <span>{product.highlight}</span>
                </div>
              )}

              <p className="text-xs text-stone-500 mb-5 leading-relaxed">
                📍 Handcrafted at our Noida Sector 53 studio (Near Shiv Mandir). Delivered ready in <strong>24–48 hours</strong>. Custom sizes available.
              </p>

              {/* Primary Actions */}
              <div className="flex flex-col gap-2.5">
                <a
                  href={getProductInquiryUrl(product.name)}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-white text-sm sm:text-base bg-[#25D366] hover:bg-[#1EBE5B] shadow-md transition-all active:scale-[0.98]"
                >
                  <WhatsAppIcon size={20} variant="badge" />
                  <span>Get Price on WhatsApp</span>
                  <ArrowRight size={16} />
                </a>

                <a
                  href={`tel:${STUDIO_INFO.phone1}`}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold text-stone-700 text-xs sm:text-sm bg-stone-100 hover:bg-stone-200 border border-stone-200 transition-colors"
                >
                  <Phone size={15} />
                  <span>Call Studio ({STUDIO_INFO.phone1})</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
