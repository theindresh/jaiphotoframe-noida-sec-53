import { makeWhatsAppUrl } from '../../utils/whatsapp'
import WhatsAppIcon from './WhatsAppIcon'

export default function FloatingWhatsApp() {
  return (
    <a
      href={makeWhatsAppUrl("Hello! I want to chat about photo framing options in Noida.")}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-20 sm:bottom-6 right-5 z-40 flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5B] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 group"
      aria-label="Chat on WhatsApp"
      title="Chat with Jai Photo Frame on WhatsApp"
    >
      <WhatsAppIcon size={26} variant="badge" />
      <span className="hidden sm:inline font-bold text-sm tracking-wide">WhatsApp</span>
    </a>
  )
}
