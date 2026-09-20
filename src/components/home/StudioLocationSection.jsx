import { MapPin, Navigation, Phone, Camera } from 'lucide-react'
import { STUDIO_INFO } from '../../constants/studioData'

export default function StudioLocationSection() {
  return (
    <section className="visit-section" id="contact">
      <div className="content-wrapper">
        <div className="visit-studio-card">
          {/* Studio Info Col */}
          <div className="studio-info-col">
            <div className="hero-pill-badge mb-3">
              <MapPin size={14} color="var(--gold-dark)" />
              <span>Walk-in Experience</span>
            </div>
            <h2 className="studio-hindi-name hindi-font">{STUDIO_INFO.nameHindi}</h2>
            <div className="studio-address-lines">
              <div className="pin-highlight">
                <MapPin size={18} strokeWidth={2.5} />
                <span>Noida Sector 53</span>
              </div>
              <div>Near Shiv Mandir</div>
              <div>Noida, Uttar Pradesh 201301</div>
              <div className="mt-2 text-stone-500">
                Open Every Day: {STUDIO_INFO.operatingHours}
              </div>
            </div>

            <div className="studio-action-btns">
              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-get-directions"
              >
                <Navigation size={16} />
                <span>Get Directions</span>
              </a>
              <a href={`tel:${STUDIO_INFO.phone1}`} className="btn-call-studio">
                <Phone size={16} />
                <span>Call Now</span>
              </a>
            </div>
          </div>

          {/* Map Embed Col */}
          <div className="studio-map-col">
            <iframe
              title="Jai Photo Frame Sector 53 Noida Location"
              src={STUDIO_INFO.embedMapUrl}
              loading="lazy"
              aria-label="Google Map of Noida Sector 53 near Shiv Mandir"
            />
          </div>

          {/* Sentiment Col */}
          <div className="studio-sentiment-col">
            <div className="sentiment-camera-icon">
              <Camera size={28} />
            </div>
            <div className="sentiment-text">
              Capture • Frame • Cherish Forever <span className="text-red-600">❤️</span>
            </div>
            <p className="text-[13px] text-stone-500 max-w-[180px]">
              Visit our studio to feel physical wood textures, bevel cuts, and LED samples.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
