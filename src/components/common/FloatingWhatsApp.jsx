import { makeWhatsAppUrl } from '../../utils/whatsapp'
import WhatsAppIcon from './WhatsAppIcon'

export default function FloatingWhatsApp() {
  return (
    <a
      href={makeWhatsAppUrl("Hello! I want to chat about photo framing options in Noida.")}
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp-widget"
      aria-label="Chat on WhatsApp"
      title="Chat with Jai Photo Frame on WhatsApp"
    >
      <div className="floating-whatsapp-icon-wrap">
        <WhatsAppIcon size={28} variant="badge" />
      </div>
      <span className="floating-whatsapp-text">WhatsApp</span>
    </a>
  )
}
