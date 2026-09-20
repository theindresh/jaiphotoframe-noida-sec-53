import { Phone } from 'lucide-react'
import { STUDIO_INFO } from '../../constants/studioData'
import { makeWhatsAppUrl } from '../../utils/whatsapp'
import WhatsAppIcon from './WhatsAppIcon'

export default function MobileStickyBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E8D9C5] p-2.5 flex items-center gap-2.5 sm:hidden shadow-lg">
      <a
        href={`tel:${STUDIO_INFO.phone1}`}
        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-bold text-xs border border-stone-200 transition-colors"
      >
        <Phone size={15} className="text-[#8B5E34]" />
        <span>Call Studio</span>
      </a>

      <a
        href={makeWhatsAppUrl("Namaste! I would like to inquire about customized photo frames.")}
        target="_blank"
        rel="noreferrer"
        className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5B] text-white font-bold text-xs shadow-md transition-colors"
      >
        <WhatsAppIcon size={16} variant="badge" />
        <span>WhatsApp Us</span>
      </a>
    </div>
  )
}
