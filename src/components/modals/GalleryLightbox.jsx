import { X } from 'lucide-react'
import { useFrame } from '../../context/useFrame'
import { getGalleryInquiryUrl } from '../../utils/whatsapp'
import FrameVisualDemo from '../common/FrameVisualDemo'
import WhatsAppIcon from '../common/WhatsAppIcon'

export default function GalleryLightbox() {
  const { lightboxItem, closeLightbox } = useFrame()

  if (!lightboxItem) return null

  return (
    <div
      className="fixed inset-0 z-[200] bg-stone-950/85 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={closeLightbox}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-[#191817] text-white rounded-3xl p-6 sm:p-8 max-w-[540px] w-full shadow-2xl border border-stone-800 relative flex flex-col items-center text-center"
        onClick={e => e.stopPropagation()}
      >
        <button
          type="button"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 flex items-center justify-center transition-colors cursor-pointer"
          onClick={closeLightbox}
          aria-label="Close lightbox"
        >
          <X size={18} />
        </button>

        <div className="w-full max-w-[400px] mb-5">
          <FrameVisualDemo
            size={lightboxItem.dimensions || '16 × 24 in'}
            styleName={lightboxItem.frameType || 'Artisan Moulding'}
            aspectRatio="4 / 3.2"
            label={lightboxItem.title}
            sublabel={`Handcrafted in Noida Sector 53 • ${lightboxItem.category} Frame`}
            caption="Good Memories Forever ❤️"
            image={lightboxItem.image || null}
          />
        </div>

        <h3 className="font-serif text-xl sm:text-2xl font-bold mb-1 text-white">
          {lightboxItem.title}
        </h3>
        <p className="text-amber-200 text-xs sm:text-sm mb-6">
          Dimensions: {lightboxItem.dimensions || 'Custom Size'} • {lightboxItem.category} Frame
        </p>

        <a
          href={getGalleryInquiryUrl(lightboxItem.title, lightboxItem.category)}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5B] text-white font-bold px-7 py-3 rounded-full text-sm shadow-lg transition-all active:scale-95 cursor-pointer"
        >
          <WhatsAppIcon size={18} variant="badge" />
          <span>Inquire on WhatsApp</span>
        </a>
      </div>
    </div>
  )
}
