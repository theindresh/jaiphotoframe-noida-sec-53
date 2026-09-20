import { MapPin, Phone } from 'lucide-react'
import { STUDIO_INFO } from '../../constants/studioData'

export default function TopBar() {
  return (
    <div className="bg-[#191817] text-[#D1C9BE] text-xs py-2 border-b border-[#A67C3A]/20">
      <div className="content-wrapper flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-2 text-[#E6E1DC] font-medium">
          <MapPin size={14} className="text-[#C49A53] shrink-0" />
          <span>{STUDIO_INFO.locationBrief}</span>
        </div>

        <div className="flex items-center gap-4 text-[#D1C9BE]">
          <div className="flex items-center gap-2">
            <Phone size={12} className="text-[#C49A53] shrink-0" />
            <span className="text-stone-400">Call:</span>
            <a href={`tel:${STUDIO_INFO.phone1}`} className="text-[#FAF8F4] font-semibold hover:text-[#C49A53] transition-colors">
              {STUDIO_INFO.phone1}
            </a>
            <span className="text-stone-600">|</span>
            <a href={`tel:${STUDIO_INFO.phone2}`} className="text-[#FAF8F4] font-semibold hover:text-[#C49A53] transition-colors">
              {STUDIO_INFO.phone2}
            </a>
          </div>

          <div className="hidden sm:flex items-center gap-3 border-l border-white/20 pl-4">
            <a
              href={STUDIO_INFO.socialLinks.instagram}
              target="_blank"
              rel="noreferrer"
              className="text-[#D1C9BE] hover:text-[#C49A53] transition-colors"
              aria-label="Instagram"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a
              href={STUDIO_INFO.socialLinks.facebook}
              target="_blank"
              rel="noreferrer"
              className="text-[#D1C9BE] hover:text-[#C49A53] transition-colors"
              aria-label="Facebook"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
            <a
              href={STUDIO_INFO.socialLinks.youtube}
              target="_blank"
              rel="noreferrer"
              className="text-[#D1C9BE] hover:text-[#C49A53] transition-colors"
              aria-label="YouTube"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
