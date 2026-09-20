import { ZoomIn } from 'lucide-react'
import { useFrame } from '../../context/useFrame'
import FrameVisualDemo from '../common/FrameVisualDemo'

export default function GalleryCard({ item }) {
  const { openLightbox } = useFrame()

  return (
    <div
      className="gallery-card-item p-2"
      onClick={() => openLightbox(item)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          openLightbox(item)
        }
      }}
      aria-label={`Enlarge ${item.title}`}
    >
      <div className="relative">
        <FrameVisualDemo
          size={item.dimensions || '16 × 24 in'}
          styleName={item.frameType || 'Artisan Wood'}
          aspectRatio="4 / 3.4"
          label={item.title}
          sublabel={`${item.category} Frame • Custom Finished`}
          caption={null}
          compact={true}
          image={item.image || null}
        />
        <div className="gallery-hover-overlay rounded-lg">
          <ZoomIn size={28} />
          <span className="gallery-item-title">{item.title}</span>
          <span className="gallery-item-category">{item.dimensions} • {item.category} Frame</span>
        </div>
      </div>
    </div>
  )
}
