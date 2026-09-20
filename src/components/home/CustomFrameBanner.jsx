import { Image, Square, Maximize2, MessageSquare, ArrowRight } from 'lucide-react'
import { useFrame } from '../../context/useFrame'

export default function CustomFrameBanner() {
  const { openCustomModal } = useFrame()

  return (
    <section className="py-12 sm:py-16 bg-[#FAF8F4]" id="custom-frame">
      <div className="content-wrapper">
        <div className="bg-[#1F1E1D] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl border border-stone-800 grid grid-cols-1 lg:grid-cols-[240px_1fr_auto] gap-8 lg:gap-10 items-center relative overflow-hidden">
          
          {/* Left Sample Tilted Visual Frame */}
          <div className="hidden lg:flex justify-center">
            <div className="w-[210px] bg-[#3B2414] p-3.5 rounded-xl border-2 border-[#5C381F] shadow-xl rotate-[-2deg] transition-transform hover:rotate-0">
              <div className="bg-[#FCFAF6] p-3 rounded-lg border border-[#DFD7C7] flex flex-col items-center">
                <div className="w-full aspect-[4/3.2] rounded overflow-hidden shadow-inner border border-stone-300">
                  <img
                    src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=500&auto=format&fit=crop&q=80"
                    alt="Custom Frame Sample"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-2 text-center">
                  <span className="handwriting-font text-base text-stone-800 font-bold block">
                    Collect Beautiful Moments
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Center Copy */}
          <div className="flex flex-col items-start text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-white mb-2.5 leading-tight">
              Create Your Own Custom Frame
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-xl mb-6">
              Turn your favorite photos into a unique frame. Choose design, size, and add your special message. Handcrafted in our Noida studio.
            </p>
            <button
              type="button"
              className="inline-flex items-center gap-2 bg-[#A67C3A] hover:bg-[#8B5E34] text-white font-bold px-7 py-3.5 rounded-full text-sm sm:text-base shadow-lg transition-all active:scale-95 cursor-pointer"
              onClick={() => openCustomModal('Family')}
            >
              <span>Start Custom Order</span>
              <ArrowRight size={17} />
            </button>
          </div>

          {/* Right Steps Flow Card (White Box with 4 Steps & Arrows) */}
          <div className="bg-white text-stone-900 rounded-2xl p-4 sm:p-5 shadow-xl flex items-center justify-between gap-2 sm:gap-4 overflow-x-auto w-full lg:w-auto">
            {/* Step 1 */}
            <div className="flex flex-col items-center text-center min-w-[64px]">
              <div className="w-10 h-10 rounded-xl bg-[#FAF5EF] text-[#8B5E34] border border-[#EBDCCB] flex items-center justify-center mb-1.5 shadow-2xs">
                <Image size={18} />
              </div>
              <span className="text-[10px] font-bold text-stone-400">1</span>
              <span className="text-xs font-bold text-stone-800 whitespace-nowrap">Upload Photo</span>
            </div>

            <span className="text-stone-300 font-bold text-base pb-3">›</span>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center min-w-[64px]">
              <div className="w-10 h-10 rounded-xl bg-[#FAF5EF] text-[#8B5E34] border border-[#EBDCCB] flex items-center justify-center mb-1.5 shadow-2xs">
                <Square size={18} />
              </div>
              <span className="text-[10px] font-bold text-stone-400">2</span>
              <span className="text-xs font-bold text-stone-800 whitespace-nowrap">Choose Frame</span>
            </div>

            <span className="text-stone-300 font-bold text-base pb-3">›</span>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center min-w-[64px]">
              <div className="w-10 h-10 rounded-xl bg-[#FAF5EF] text-[#8B5E34] border border-[#EBDCCB] flex items-center justify-center mb-1.5 shadow-2xs">
                <Maximize2 size={18} />
              </div>
              <span className="text-[10px] font-bold text-stone-400">3</span>
              <span className="text-xs font-bold text-stone-800 whitespace-nowrap">Select Size</span>
            </div>

            <span className="text-stone-300 font-bold text-base pb-3">›</span>

            {/* Step 4 */}
            <div className="flex flex-col items-center text-center min-w-[64px]">
              <div className="w-10 h-10 rounded-xl bg-[#FAF5EF] text-[#8B5E34] border border-[#EBDCCB] flex items-center justify-center mb-1.5 shadow-2xs">
                <MessageSquare size={18} />
              </div>
              <span className="text-[10px] font-bold text-stone-400">4</span>
              <span className="text-xs font-bold text-stone-800 whitespace-nowrap">Add Message</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
