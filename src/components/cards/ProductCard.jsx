import { useState } from 'react'
import { Heart, ArrowRight } from 'lucide-react'
import { useFrame } from '../../context/useFrame'
import { makeWhatsAppUrl } from '../../utils/whatsapp'
import WhatsAppIcon from '../common/WhatsAppIcon'
import ProductDetailModal from '../modals/ProductDetailModal'
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

export default function ProductCard({ product }) {
  const { wishlist, toggleWishlist } = useFrame()
  const [showDetail, setShowDetail] = useState(false)
  const isLiked = !!wishlist[product.id]

  const isBestseller = product.badge === 'Bestseller'
  const badgeBg = isBestseller ? 'bg-[#D32F2F]' : 'bg-[#8B5E34]'
  const dummyType = DUMMY_MAP[product.id] || (isBestseller ? 'collage-memories' : 'classic-wood')

  const whatsappInquiryUrl = makeWhatsAppUrl(
    `Hello Jai Photo Frame! I am interested in "${product.name}" (${product.defaultSize || 'Custom Size'}). Please share price and options.`
  )

  return (
    <>
      <div
        className="group relative flex flex-col justify-between bg-white rounded-2xl border border-[#E8D9C5] hover:border-[#A67C3A] p-3 sm:p-3.5 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl cursor-pointer h-full select-none shadow-xs"
        onClick={() => setShowDetail(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setShowDetail(true) }}
        aria-label={`View ${product.name} details`}
      >
        <div className="flex flex-col">
          {/* Top Bar: Badge & Wishlist Heart */}
          <div className="absolute top-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none">
            <span className={`text-[10px] sm:text-[11px] font-bold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full text-white shadow-xs pointer-events-auto tracking-wide ${badgeBg}`}>
              {product.badge || 'Featured'}
            </span>

            <button
              type="button"
              className="w-7 h-7 rounded-full bg-white/95 backdrop-blur-xs border border-stone-200 flex items-center justify-center text-stone-500 hover:text-red-500 hover:scale-110 transition-all shadow-xs pointer-events-auto cursor-pointer"
              onClick={(e) => { e.stopPropagation(); toggleWishlist(product.id) }}
              aria-label={isLiked ? 'Remove from wishlist' : 'Save to wishlist'}
            >
              <Heart size={13} className={isLiked ? 'fill-[#D32F2F] text-[#D32F2F]' : 'text-stone-600'} />
            </button>
          </div>

          {/* Dummy Frame Visual Showcase */}
          <div className="w-full mb-3 overflow-hidden rounded-xl transition-transform duration-500 group-hover:scale-[1.02]">
            <DummyFrameVisual type={dummyType} name={product.name} />
          </div>

          {/* Title & Subtitle */}
          <div className="px-0.5">
            <h3 className="text-sm sm:text-base font-bold text-stone-900 group-hover:text-[#8B5E34] transition-colors font-serif leading-snug line-clamp-1">
              {product.name}
            </h3>
            <p className="text-xs text-stone-500 mt-1 line-clamp-1 leading-normal font-medium">
              {product.subtitle || product.highlight || product.frameStyle}
            </p>
          </div>
        </div>

        {/* Compact, Elegant "Get Price on WhatsApp" CTA Button */}
        <div className="mt-auto pt-3">
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noreferrer"
            className="group/btn w-full h-9 flex items-center justify-center gap-1.5 px-3 rounded-xl bg-[#FAF5EF] hover:bg-[#F2E8DC] border border-[#EBDCCB] hover:border-[#A67C3A]/60 text-[#171717] text-xs sm:text-[13px] font-semibold transition-all shadow-xs active:scale-[0.98]"
            onClick={(e) => e.stopPropagation()}
          >
            <WhatsAppIcon size={15} variant="badge" />
            <span>Get Price on WhatsApp</span>
            <ArrowRight size={13} className="text-stone-400 group-hover/btn:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Detail Popup Modal */}
      {showDetail && (
        <ProductDetailModal
          product={product}
          onClose={() => setShowDetail(false)}
        />
      )}
    </>
  )
}
