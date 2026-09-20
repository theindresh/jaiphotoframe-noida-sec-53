import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, Sparkles } from 'lucide-react'
import { STUDIO_INFO } from '../../constants/studioData'

export default function LuxuryLoader({ onComplete }) {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(15)

  useEffect(() => {
    const timer1 = setTimeout(() => setProgress(60), 250)
    const timer2 = setTimeout(() => setProgress(100), 650)
    const timer3 = setTimeout(() => {
      setLoading(false)
      if (onComplete) onComplete()
    }, 950)

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
      clearTimeout(timer3)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="luxury-loader-screen fixed inset-0 z-[9999] bg-[#FAF8F4] flex flex-col items-center justify-center p-5"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
        >
          {/* Animated Gold Frame Box */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-[#3B2414] p-4 rounded-2xl border-2 border-[#5C381F] shadow-[0_20px_45px_rgba(59,36,20,0.25)] relative w-[280px] text-center"
          >
            {/* Museum matting inner */}
            <div className="bg-[#FCFAF6] rounded-lg px-5 py-6 border-[1.5px] border-[#E6DDD0] flex flex-col items-center gap-3">
              {/* Camera Logo Emblem */}
              <motion.div
                animate={{ rotate: [0, -4, 4, 0], scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
                className="w-[52px] h-[52px] rounded-[14px] bg-gradient-to-br from-[#A67C3A] to-[#8B5E34] flex items-center justify-center text-[#FAF8F4] shadow-[0_6px_16px_rgba(166,124,58,0.3)]"
              >
                <Camera size={26} strokeWidth={2.2} />
              </motion.div>

              <div>
                <h2 className="hindi-font text-2xl font-bold text-[#1F1F1F] m-0">
                  {STUDIO_INFO.nameHindi}
                </h2>
                <div className="text-[13px] text-[#8B5E34] font-semibold mt-1">
                  {STUDIO_INFO.tagline} <span className="text-red-600">❤️</span>
                </div>
              </div>

              {/* Progress bar */}
              <div className="w-full h-1 bg-[#EAE2D5] rounded-full overflow-hidden mt-2">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#A67C3A] to-[#8B5E34] rounded-full"
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                />
              </div>

              <div className="text-[11px] font-semibold text-stone-500 tracking-wider flex items-center gap-1">
                <Sparkles size={12} color="#A67C3A" />
                <span>Framing Memories in Noida Sector 53...</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
