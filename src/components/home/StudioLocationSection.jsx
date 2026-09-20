import { MapPin, Navigation, Phone, Camera } from 'lucide-react'
import { STUDIO_INFO } from '../../constants/studioData'

export default function StudioLocationSection() {
  return (
    <section className="py-14 sm:py-18 bg-[#FAF8F4] border-b border-[#E8D9C5]/80" id="contact">
      <div className="content-wrapper">
        <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-900 leading-tight mb-8 text-center sm:text-left">
          Visit Our Studio
        </h2>

        {/* 3-Column Split Card */}
        <div className="bg-white rounded-3xl border border-[#E8D9C5] p-6 sm:p-8 shadow-sm grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.1fr_1.4fr_0.9fr] gap-6 sm:gap-8 items-center">
          
          {/* Col 1: Studio Details */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 text-xs font-bold text-[#8B5E34] uppercase tracking-wider mb-2">
              <MapPin size={15} />
              <span>Direct Studio Walk-in</span>
            </div>

            <h3 className="hindi-font text-2xl sm:text-3xl font-bold text-stone-900 mb-2">
              {STUDIO_INFO.nameHindi}
            </h3>

            <div className="text-stone-600 text-sm sm:text-base leading-relaxed mb-6 flex flex-col gap-1">
              <strong className="text-stone-900 font-semibold">Noida Sector 53</strong>
              <span>Near Shiv Mandir</span>
              <span>Noida, Uttar Pradesh 201301</span>
              <span className="text-xs text-stone-500 mt-1">Open All 7 Days: {STUDIO_INFO.operatingHours}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#A67C3A] hover:bg-[#8B5E34] text-white font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-xs transition-all active:scale-95 cursor-pointer"
              >
                <Navigation size={14} />
                <span>Get Directions</span>
              </a>

              <a
                href={`tel:${STUDIO_INFO.phone1}`}
                className="inline-flex items-center gap-2 bg-white hover:bg-[#FAF5EF] border border-[#E8D9C5] text-stone-800 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-2xs transition-all active:scale-95 cursor-pointer"
              >
                <Phone size={14} className="text-[#8B5E34]" />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Col 2: Map Embed */}
          <div className="w-full h-56 sm:h-64 rounded-2xl overflow-hidden border border-[#E8D9C5] shadow-inner relative">
            <iframe
              title="Jai Photo Frame Sector 53 Noida Location"
              src={STUDIO_INFO.embedMapUrl}
              className="w-full h-full border-0"
              loading="lazy"
              aria-label="Google Map of Noida Sector 53 near Shiv Mandir"
            />
            <div className="absolute top-2 left-2 z-10">
              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="text-[11px] font-bold bg-white/95 text-blue-600 px-2.5 py-1 rounded-md shadow-xs border border-stone-200 hover:underline"
              >
                View larger map
              </a>
            </div>
          </div>

          {/* Col 3: Sentiment Camera Card */}
          <div className="bg-[#FAF5EF] rounded-2xl border border-[#EBDCCB] p-6 flex flex-col items-center justify-center text-center h-full">
            <div className="w-14 h-14 rounded-full bg-white text-[#8B5E34] border border-[#EBDCCB] flex items-center justify-center mb-3 shadow-xs">
              <Camera size={26} />
            </div>
            <div className="font-serif font-bold text-stone-900 text-base leading-snug mb-1">
              Capture • Frame • Cherish
            </div>
            <div className="text-xs text-[#8B5E34] font-semibold flex items-center gap-1 mb-2">
              Forever <span className="text-[#D32F2F]">❤️</span>
            </div>
            <p className="text-xs text-stone-500 leading-relaxed max-w-[200px]">
              Visit our Noida Sector 53 studio to select custom frame moulding samples.
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}
