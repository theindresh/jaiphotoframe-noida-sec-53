import { Phone, Clock, Sparkles } from 'lucide-react'
import StudioLocationSection from '../components/home/StudioLocationSection'
import ContactCtaBanner from '../components/home/ContactCtaBanner'
import { STUDIO_INFO } from '../constants/studioData'
import { makeWhatsAppUrl } from '../utils/whatsapp'
import WhatsAppIcon from '../components/common/WhatsAppIcon'

export default function ContactPage() {
  return (
    <div className="bg-[#FAF8F4] min-h-screen">
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-[#F3ECE2] to-[#FAF8F4] py-14 border-b border-[#E8D9C5]">
        <div className="content-wrapper text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-[#FAF0E6] text-[#8B5E34] border border-[#E8D9C5] px-3.5 py-1.5 rounded-full text-xs font-bold mb-4 shadow-2xs">
            <Sparkles size={14} className="text-[#A67C3A]" />
            <span>Connect &amp; Visit • Noida Sector 53</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-stone-900 mb-3">
            Contact &amp; Visit Our Studio
          </h1>
          <p className="text-base text-stone-600 leading-relaxed max-w-xl mx-auto">
            Located in Noida Sector 53, Near Shiv Mandir. Walk in anytime to view physical frame samples, or contact us directly on WhatsApp for instant inquiries.
          </p>
        </div>
      </div>

      {/* Quick Contact Cards */}
      <div className="content-wrapper mt-12 mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-2xl border border-[#E8D9C5] text-center shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#FAF5EF] text-[#8B5E34] border border-[#E8D9C5] flex items-center justify-center mx-auto mb-3.5">
              <Phone size={20} />
            </div>
            <h4 className="text-base font-bold mb-1 text-stone-900">Direct Phone</h4>
            <p className="text-xs text-stone-500 mb-3">Speak with our framing specialists</p>
            <a href={`tel:${STUDIO_INFO.phone1}`} className="font-bold text-[#8B5E34] hover:underline text-sm">
              {STUDIO_INFO.phone1}
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-2xl border border-[#E8D9C5] text-center shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#FAF5EF] text-[#8B5E34] border border-[#E8D9C5] flex items-center justify-center mx-auto mb-3.5">
              <Phone size={20} />
            </div>
            <h4 className="text-base font-bold mb-1 text-stone-900">Alternate Call</h4>
            <p className="text-xs text-stone-500 mb-3">Customer service &amp; pickup status</p>
            <a href={`tel:${STUDIO_INFO.phone2}`} className="font-bold text-[#8B5E34] hover:underline text-sm">
              {STUDIO_INFO.phone2}
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-6 rounded-2xl border border-[#E8D9C5] text-center shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#FAF5EF] text-[#25D366] border border-[#E8D9C5] flex items-center justify-center mx-auto mb-3.5">
              <WhatsAppIcon size={22} variant="official" />
            </div>
            <h4 className="text-base font-bold mb-1 text-stone-900">WhatsApp Chat</h4>
            <p className="text-xs text-stone-500 mb-3">Send photos for quotation</p>
            <a
              href={makeWhatsAppUrl("Namaste! I would like to inquire about frames.")}
              target="_blank"
              rel="noreferrer"
              className="font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1.5 text-sm"
            >
              <WhatsAppIcon size={16} variant="official" />
              <span>Chat on WhatsApp →</span>
            </a>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-6 rounded-2xl border border-[#E8D9C5] text-center shadow-xs hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-full bg-[#FAF5EF] text-[#8B5E34] border border-[#E8D9C5] flex items-center justify-center mx-auto mb-3.5">
              <Clock size={20} />
            </div>
            <h4 className="text-base font-bold mb-1 text-stone-900">Studio Timings</h4>
            <p className="text-xs text-stone-500 mb-2">All 7 days open</p>
            <span className="font-bold text-xs text-stone-900">{STUDIO_INFO.operatingHours}</span>
          </div>
        </div>
      </div>

      <StudioLocationSection />
      <ContactCtaBanner />
    </div>
  )
}
