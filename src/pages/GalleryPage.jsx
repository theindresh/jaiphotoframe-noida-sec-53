import GallerySection from '../components/home/GallerySection'
import { Sparkles } from 'lucide-react'

export default function GalleryPage() {
  return (
    <div className="gallery-page-wrapper pb-16">
      {/* Header Banner */}
      <div className="bg-[#FAF8F4] py-14 px-0 border-b border-[#EBDCCB]">
        <div className="content-wrapper text-center max-w-[780px]">
          <div className="hero-pill-badge mx-auto mb-4">
            <Sparkles size={14} color="var(--gold-dark)" />
            <span>Masterpieces &amp; Client Projects</span>
          </div>
          <h1 className="serif-font text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
            Our Framing Gallery
          </h1>
          <p className="text-base text-stone-600 leading-relaxed">
            Browse through real photographs framed at our Noida Sector 53 studio. Click on any frame to enlarge details and inquire directly on WhatsApp.
          </p>
        </div>
      </div>

      <GallerySection isFullPage={true} />
    </div>
  )
}
