import { Phone } from 'lucide-react'
import { STUDIO_INFO } from '../../constants/studioData'
import { makeWhatsAppUrl } from '../../utils/whatsapp'
import WhatsAppIcon from './WhatsAppIcon'

export default function MobileStickyBar() {
  return (
    <div className="mobile-sticky-bar">
      <a href={`tel:${STUDIO_INFO.phone1}`} className="mobile-action-btn-call">
        <Phone size={17} />
        <span>Call Studio</span>
      </a>
      <a
        href={makeWhatsAppUrl("Namaste! I would like to inquire about customized photo frames.")}
        target="_blank"
        rel="noreferrer"
        className="mobile-action-btn-wa"
      >
        <WhatsAppIcon size={22} variant="badge" />
        <span>WhatsApp Us</span>
      </a>
    </div>
  )
}
