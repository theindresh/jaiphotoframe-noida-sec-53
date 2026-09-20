import { Phone } from 'lucide-react'
import { STUDIO_INFO } from '../../constants/studioData'
import { makeWhatsAppUrl } from '../../utils/whatsapp'
import WhatsAppIcon from '../common/WhatsAppIcon'

export default function ContactCtaBanner() {
  return (
    <section className="py-10 sm:py-14 bg-[#FAF8F4]">
      <div className="content-wrapper">
        <div className="bg-[#191817] text-white rounded-3xl p-6 sm:p-10 lg:p-12 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 border border-stone-800">
          
          {/* Left Text */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-white mb-2">
              Let's Frame Your Memories
            </h2>
            <p className="text-stone-300 text-sm sm:text-base max-w-xl">
              Call or WhatsApp us for enquiries, custom orders or visit our Noida Sector 53 studio.
            </p>
          </div>

          {/* Right 3 Action Pill Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-3 shrink-0">
            {/* Button 1: White Phone Pill */}
            <a
              href={`tel:${STUDIO_INFO.phone1}`}
              className="inline-flex items-center gap-2 bg-white hover:bg-stone-100 text-stone-900 font-bold px-5 py-3 rounded-full text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Phone size={15} className="text-stone-700" />
              <span>{STUDIO_INFO.phone1}</span>
            </a>

            {/* Button 2: Green WhatsApp Phone Pill */}
            <a
              href={`tel:${STUDIO_INFO.phone2}`}
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5B] text-white font-bold px-5 py-3 rounded-full text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Phone size={15} />
              <span>{STUDIO_INFO.phone2}</span>
            </a>

            {/* Button 3: Red WhatsApp Direct Chat Pill */}
            <a
              href={makeWhatsAppUrl("Namaste! I would like to order a photo frame.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#D32F2F] hover:bg-[#B71C1C] text-white font-bold px-5 py-3 rounded-full text-xs sm:text-sm shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <WhatsAppIcon size={16} variant="official" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}
