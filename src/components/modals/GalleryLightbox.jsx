import { X } from 'lucide-react'
import { useFrame } from '../../context/useFrame'
import { getGalleryInquiryUrl } from '../../utils/whatsapp'
import FrameVisualDemo from '../common/FrameVisualDemo'
import WhatsAppIcon from '../common/WhatsAppIcon'

export default function GalleryLightbox() {
  const { lightboxItem, closeLightbox } = useFrame()

  if (!lightboxItem) return null

  return (
    <div className="modal-overlay" onClick={closeLightbox} role="dialog" aria-modal="true">
      <div className="lightbox-content max-w-[560px]" onClick={e => e.stopPropagation()}>
        <button
          type="button"
          className="modal-close-btn text-white absolute top-2.5 right-3.5 z-10"
          onClick={closeLightbox}
          aria-label="Close lightbox"
        >
          <X size={24} />
        </button>

        <div className="mb-4">
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

        <h3 className="serif-font text-xl mb-1">
          {lightboxItem.title}
        </h3>
        <p className="text-amber-200 text-sm mb-4">
          Dimensions: {lightboxItem.dimensions || 'Custom Size'} • {lightboxItem.category} Frame
        </p>
        <a
          href={getGalleryInquiryUrl(lightboxItem.title, lightboxItem.category)}
          target="_blank"
          rel="noreferrer"
          className="btn-whatsapp-header inline-flex py-2.5 px-6 gap-2"
        >
          <WhatsAppIcon size={18} variant="badge" />
          Inquire on WhatsApp
        </a>
      </div>
    </div>
  )
}
