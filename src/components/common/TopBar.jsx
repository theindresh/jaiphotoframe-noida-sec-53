import { MapPin, Phone } from 'lucide-react'
import { STUDIO_INFO } from '../../constants/studioData'

export default function TopBar() {
  return (
    <div className="top-info-bar">
      <div className="content-wrapper top-info-content">
        <div className="top-info-left">
          <MapPin size={15} color="var(--gold-light)" />
          <span>{STUDIO_INFO.addressFull}</span>
        </div>

        <div className="top-info-right">
          <div className="phone-links">
            <Phone size={13} color="var(--gold-light)" />
            <span>Call:</span>
            <a href={`tel:${STUDIO_INFO.phone1}`}>{STUDIO_INFO.phone1}</a>
            <span>/</span>
            <a href={`tel:${STUDIO_INFO.phone2}`}>{STUDIO_INFO.phone2}</a>
          </div>
          <div className="social-icons-mini">
            <a
              href={STUDIO_INFO.socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              aria-label="Instagram"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a
              href={STUDIO_INFO.socialLinks.facebook}
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              aria-label="Facebook"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a
              href={STUDIO_INFO.socialLinks.youtube}
              target="_blank"
              rel="noreferrer"
              className="social-icon-btn"
              aria-label="YouTube"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                <polygon points="10 15 15 12 10 9 10 15"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
