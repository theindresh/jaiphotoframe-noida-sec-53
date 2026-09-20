import { Phone } from 'lucide-react'
import { STUDIO_INFO } from '../../constants/studioData'
import { makeWhatsAppUrl } from '../../utils/whatsapp'
import WhatsAppIcon from '../common/WhatsAppIcon'

export default function ContactCtaBanner() {
  return (
    <section className="contact-cta-banner">
      <div className="content-wrapper contact-cta-content">
        <div className="contact-cta-left">
          <h2>Let's Frame Your Memories</h2>
          <p>Call or WhatsApp us for enquiries, custom orders or visit our Noida Sector 53 studio.</p>
        </div>

        <div className="contact-cta-buttons">
          <a href={`tel:${STUDIO_INFO.phone1}`} className="btn-cta-phone">
            <Phone size={15} />
            <span>{STUDIO_INFO.phone1}</span>
          </a>

          <a href={`tel:${STUDIO_INFO.phone2}`} className="btn-cta-phone-alt">
            <Phone size={15} />
            <span>{STUDIO_INFO.phone2}</span>
          </a>

          <a
            href={makeWhatsAppUrl("Namaste! I would like to order a photo frame.")}
            target="_blank"
            rel="noreferrer"
            className="btn-cta-whatsapp-red"
          >
            <WhatsAppIcon size={18} variant="badge" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
