import { useState } from 'react'
import { useFrame } from '../../context/useFrame'
import { Sparkles, ArrowUpRight } from 'lucide-react'

export default function OccasionCard({ occasion }) {
  const { openCustomModal } = useFrame()
  const [imgError, setImgError] = useState(false)

  return (
    <div
      className="group relative flex flex-col justify-between bg-white rounded-2xl border border-[#E8D9C5] hover:border-[#A67C3A] p-3 sm:p-4 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl shadow-xs cursor-pointer h-full select-none"
      onClick={() => openCustomModal(occasion.title)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          openCustomModal(occasion.title)
        }
      }}
      aria-label={`View ${occasion.title} frames`}
    >
      {/* Wooden Frame Moulding Outer Box */}
      <div className="w-full rounded-xl overflow-hidden mb-3 transition-transform duration-300 group-hover:scale-[1.02] bg-gradient-to-br from-amber-950 via-stone-900 to-amber-950 p-2 border-2 border-amber-900/60 shadow-md">
        {/* Museum Matting Inner */}
        <div className="w-full rounded-lg overflow-hidden bg-[#FCFAF6] p-1.5 sm:p-2 border border-stone-200 shadow-inner">
          {/* Framed Image Canvas */}
          <div className="w-full aspect-square rounded overflow-hidden relative bg-stone-100 flex items-center justify-center">
            {occasion.image && !imgError ? (
              <img
                src={occasion.image}
                alt={occasion.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-amber-50 to-stone-100 p-3 text-center">
                <Sparkles size={22} className="text-[#A67C3A] mb-1" />
                <span className="text-xs font-bold text-stone-800 font-serif">{occasion.title}</span>
                <span className="text-[10px] text-stone-500 mt-0.5">{occasion.frameStyle}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Occasion Label & Action Hint */}
      <div className="flex flex-col justify-between flex-1 mt-1 px-1">
        <div>
          <h3 className="text-sm sm:text-base font-bold text-stone-900 group-hover:text-[#8B5E34] transition-colors font-serif leading-snug line-clamp-1">
            {occasion.title}
          </h3>
          <p className="text-xs text-stone-500 mt-0.5 font-medium line-clamp-1">
            {occasion.subtitle}
          </p>
        </div>
        <div className="mt-2.5 inline-flex items-center justify-center gap-1 text-xs font-bold text-[#8B5E34] group-hover:text-[#6E4427] transition-colors">
          <span>Explore Frames</span>
          <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </div>
  )
}
