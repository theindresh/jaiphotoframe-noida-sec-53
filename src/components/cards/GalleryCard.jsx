import { ZoomIn } from 'lucide-react'
import { useFrame } from '../../context/useFrame'
import FrameVisualDemo from '../common/FrameVisualDemo'

export default function GalleryCard({ item }) {
  const { openLightbox } = useFrame()

  return (
    <div
      className="group relative bg-white rounded-2xl border border-[#E8D9C5] hover:border-[#A67C3A] p-2.5 sm:p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer shadow-xs select-none"
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
      <div className="relative overflow-hidden rounded-xl">
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
        <div className="absolute inset-0 bg-stone-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-3 text-center backdrop-blur-2xs rounded-xl">
          <ZoomIn size={26} className="text-white mb-2" />
          <span className="font-bold font-serif text-sm leading-snug">{item.title}</span>
          <span className="text-xs text-amber-200 mt-1">{item.dimensions} • {item.category} Frame</span>
        </div>
      </div>
    </div>
  )
}
