import { useState } from 'react'
import { Heart, ArrowRight, Sparkles } from 'lucide-react'
import { useFrame } from '../../context/useFrame'
import { makeWhatsAppUrl } from '../../utils/whatsapp'
import WhatsAppIcon from '../common/WhatsAppIcon'
import ProductDetailModal from '../modals/ProductDetailModal'

export default function ProductCard({ product }) {
  const { wishlist, toggleWishlist } = useFrame()
  const [showDetail, setShowDetail] = useState(false)
  const [imgError, setImgError] = useState(false)
  const isLiked = !!wishlist[product.id]

  const isBestseller = product.badge === 'Bestseller'
  const badgeBg = isBestseller ? 'bg-[#D32F2F]' : 'bg-[#8B5E34]'

  const whatsappInquiryUrl = makeWhatsAppUrl(
    `Hello Jai Photo Frame! I am interested in "${product.name}" (${product.defaultSize || 'Custom Size'}). Please share price and options.`
  )

  const isLedFrame = product.id === 'sig-4'
  const isHeartFrame = product.id === 'sig-3'
  const isGoldFrame = product.id === 'sig-5'

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

          {/* Realistic Framed Photo Display */}
          <div
            className={`w-full aspect-[4/3.2] rounded-xl overflow-hidden mb-3 p-2 transition-transform duration-500 group-hover:scale-[1.02] shadow-md flex items-center justify-center ${
              isGoldFrame
                ? 'bg-gradient-to-br from-amber-400 via-amber-700 to-amber-500 border-2 border-amber-300'
                : isLedFrame
                ? 'bg-stone-950 border border-amber-500/60 shadow-[0_0_16px_rgba(245,178,74,0.3)]'
                : 'bg-gradient-to-br from-amber-950 via-stone-900 to-amber-950 border-2 border-amber-900/60'
            }`}
          >
            {/* Museum Matting Inner */}
            <div
              className={`w-full h-full rounded-lg p-1.5 flex flex-col items-center justify-center border shadow-inner overflow-hidden relative ${
                isLedFrame
                  ? 'bg-stone-900/90 border-amber-500/40'
                  : 'bg-[#FCFAF6] border-stone-200'
              }`}
            >
              {/* Photo Canvas */}
              <div className="w-full h-full rounded overflow-hidden relative bg-stone-100 flex items-center justify-center">
                {product.image && !imgError ? (
                  <>
                    <img
                      src={product.image}
                      alt={product.name}
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-108 ${
                        isHeartFrame ? 'scale-105' : ''
                      }`}
                      loading="lazy"
                      onError={() => setImgError(true)}
                    />

                    {/* LED Ambient Glow effect for LED frame */}
                    {isLedFrame && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 flex flex-col justify-between p-2 pointer-events-none">
                        <span className="text-[10px] font-bold text-amber-300 tracking-wider font-serif drop-shadow-[0_0_8px_rgba(245,178,74,0.8)]">
                          ✨ LED Illuminated
                        </span>
                        <span className="text-[11px] font-bold text-amber-200 text-center drop-shadow-[0_0_8px_rgba(245,178,74,0.9)]">
                          Light Up Your Memories ♡
                        </span>
                      </div>
                    )}

                    {/* Heart Cutout Accent for Heart frame */}
                    {isHeartFrame && (
                      <div className="absolute bottom-1.5 right-1.5 bg-black/60 backdrop-blur-xs text-red-400 px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1">
                        <Heart size={10} className="fill-red-500 text-red-500" />
                        <span>Heart Cutout</span>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-stone-100 p-2 text-center">
                    <Sparkles size={18} className="text-amber-800 mb-1" />
                    <span className="text-xs font-bold text-stone-900 font-serif line-clamp-1">{product.name}</span>
                    <span className="text-[10px] text-stone-500 mt-0.5">{product.defaultSize}</span>
                  </div>
                )}
              </div>
            </div>
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

        {/* Premium WhatsApp Button: Fresh, High-Contrast & Beautifully Balanced */}
        <div className="mt-auto pt-3.5">
          <a
            href={whatsappInquiryUrl}
            target="_blank"
            rel="noreferrer"
            className="group/btn w-full py-2.5 px-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5B] text-white text-xs sm:text-[13px] font-bold flex items-center justify-center gap-2 shadow-xs hover:shadow-md transition-all duration-200 active:scale-[0.98]"
            onClick={(e) => e.stopPropagation()}
          >
            <WhatsAppIcon size={16} variant="badge" className="shrink-0" />
            <span className="whitespace-nowrap tracking-wide">Get Price on WhatsApp</span>
            <ArrowRight size={14} className="group-hover/btn:translate-x-0.5 transition-transform shrink-0" />
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
