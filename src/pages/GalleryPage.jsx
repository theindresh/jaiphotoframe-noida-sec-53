import GallerySection from '../components/home/GallerySection'
import { Sparkles } from 'lucide-react'

export default function GalleryPage() {
  return (
    <div className="bg-[#FAF8F4] min-h-screen pb-16">
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-[#F3ECE2] to-[#FAF8F4] py-14 border-b border-[#E8D9C5]">
        <div className="content-wrapper text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-[#FAF0E6] text-[#8B5E34] border border-[#E8D9C5] px-3.5 py-1.5 rounded-full text-xs font-bold mb-4 shadow-2xs">
            <Sparkles size={14} className="text-[#A67C3A]" />
            <span>Masterpieces &amp; Client Projects • Noida Sector 53</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-stone-900 mb-3">
            Our Framing Gallery
          </h1>
          <p className="text-base text-stone-600 leading-relaxed max-w-xl mx-auto">
            Browse through real photographs framed at our Noida Sector 53 studio. Click on any frame to enlarge details and inquire directly on WhatsApp.
          </p>
        </div>
      </div>

      <GallerySection isFullPage={true} />
    </div>
  )
}
