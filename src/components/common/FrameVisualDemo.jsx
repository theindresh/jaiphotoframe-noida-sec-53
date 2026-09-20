import { motion } from 'framer-motion'
import { Image as ImageIcon, Sparkles, Maximize } from 'lucide-react'

export default function FrameVisualDemo({
  size = '12 × 18 in',
  styleName = 'Classic Teak Wood',
  _aspectRatio = '4 / 3.2',
  label = 'Custom Photo Keepsake',
  sublabel = 'Museum Quality • Non-Reflective Glass',
  caption = 'Good Memories Forever ❤️',
  image = null,
  compact = false,
}) {
  const getMouldingClass = () => {
    const s = styleName.toLowerCase()
    if (s.includes('gold')) {
      return 'bg-gradient-to-br from-[#A8833E] via-[#6E491A] to-[#C49A53] border-[3px] border-[#E5C384] shadow-[0_16px_36px_rgba(139,94,52,0.28)]'
    }
    if (s.includes('black')) {
      return 'bg-gradient-to-br from-[#242220] to-[#151413] border-2 border-[#3E3B37] shadow-[0_16px_36px_rgba(0,0,0,0.35)]'
    }
    if (s.includes('led') || s.includes('illuminat')) {
      return 'bg-gradient-to-br from-[#26221E] to-[#181513] border-2 border-[#E2A64E] shadow-[0_0_28px_rgba(226,166,78,0.35),0_16px_36px_rgba(0,0,0,0.3)]'
    }
    // Default: Rich Natural Teak Wood
    return 'bg-gradient-to-br from-[#4A2E19] via-[#2E1B0E] to-[#5C381F] border-2 border-[#6E4427] shadow-[0_18px_40px_rgba(45,27,14,0.3)]'
  }

  return (
    <motion.div
      className={`frame-visual-mockup relative w-full max-w-full overflow-hidden box-border rounded-xl transition-all ${compact ? 'p-2.5' : 'p-4'} ${getMouldingClass()}`}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.28, ease: 'easeOut' }}
    >
      {/* Museum Matte Inner */}
      <div
        className={`bg-[#FCFAF6] rounded-md shadow-[inset_0_3px_10px_rgba(0,0,0,0.3)] border border-[#DFD6C7] flex flex-col items-center relative ${compact ? 'p-2.5' : 'p-4'}`}
      >
        {/* Canvas Area */}
        <div
          className="w-full aspect-[4/3] bg-gradient-to-br from-[#F6F2EA] to-[#ECE4D6] border-[1.5px] border-dashed border-[#CBBBA3] rounded relative overflow-hidden flex flex-col items-center justify-center p-4 text-center"
        >
          {/* Subtle Corner Ruler Marks */}
          <div className="absolute top-2 left-2 text-[10px] text-[#9E8E78] font-semibold select-none">┌</div>
          <div className="absolute top-2 right-2 text-[10px] text-[#9E8E78] font-semibold select-none">┐</div>
          <div className="absolute bottom-2 left-2 text-[10px] text-[#9E8E78] font-semibold select-none">└</div>
          <div className="absolute bottom-2 right-2 text-[10px] text-[#9E8E78] font-semibold select-none">┘</div>

          {image ? (
            <img
              src={image}
              alt={label}
              className="w-full h-full object-cover"
            />
          ) : (
            <>
              {/* Center Dimension Pill */}
              <motion.div
                whileHover={{ scale: 1.08 }}
                className="bg-white/95 border border-[#EBDCCB] px-3.5 py-1.5 rounded-full shadow-[0_4px_12px_rgba(45,38,30,0.08)] flex items-center gap-1.5 mb-2.5"
              >
                <Maximize size={13} className="text-[#8B5E34]" />
                <span className={`font-extrabold text-[#171717] tracking-wider ${compact ? 'text-[13px]' : 'text-[15px]'}`}>
                  {size}
                </span>
              </motion.div>

              {/* Title & Info */}
              <div className={`font-bold text-[#171717] mb-1 ${compact ? 'text-[13px]' : 'text-[15px]'}`}>
                {label}
              </div>

              {!compact && (
                <div className="text-xs text-[#8B5E34] font-semibold flex items-center gap-1">
                  <Sparkles size={12} />
                  <span>{styleName}</span>
                </div>
              )}

              <div className={`text-stone-500 mt-1.5 ${compact ? 'text-[10px]' : 'text-[11px]'}`}>
                {sublabel}
              </div>

              <div className="mt-2.5 text-[11px] font-semibold text-[#8B5E34] bg-[#8B5E34]/10 px-2.5 py-0.5 rounded inline-flex items-center gap-1">
                <ImageIcon size={12} />
                <span>Your Photo Here</span>
              </div>
            </>
          )}
        </div>

        {/* Bottom Mat Inscription */}
        {caption && (
          <div className={`font-semibold text-[#171717] tracking-wide ${compact ? 'mt-2 text-xs' : 'mt-3 text-[13px]'}`}>
            {caption}
          </div>
        )}
      </div>
    </motion.div>
  )
}
