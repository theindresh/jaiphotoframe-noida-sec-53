import { Link } from 'react-router-dom'
import { Camera, Heart, Phone, MapPin } from 'lucide-react'
import { STUDIO_INFO } from '../../constants/studioData'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="content-wrapper">
        <div className="footer-top-grid">
          {/* Brand Col */}
          <div className="footer-brand-col">
            <Link to="/" className="brand-logo-wrap" aria-label="Jai Photo Frame Home">
              <div className="logo-frame-icon w-10 h-10">
                <div className="logo-frame-inner w-[26px] h-[26px]">
                  <Camera size={15} color="#FAF8F4" strokeWidth={2.2} />
                </div>
              </div>
              <div className="logo-text-block">
                <span className="brand-hindi-title hindi-font text-[#FAF8F4] text-[20px]">
                  {STUDIO_INFO.nameHindi}
                </span>
                <span className="brand-tagline text-amber-200">
                  {STUDIO_INFO.tagline} <span className="heart">❤️</span>
                </span>
              </div>
            </Link>
            <p>
              Premium photo framing studio located in Noida Sector 53. Specializing in bespoke collage frames, wedding portrait framing, shadowboxes &amp; personalized anniversary gifts.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links-list">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/collections">Collections</Link></li>
              <li><Link to="/custom-frame">Custom Frame</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="footer-col-title">Our Services</h4>
            <ul className="footer-links-list">
              <li><Link to="/collections">Photo Frames</Link></li>
              <li><Link to="/custom-frame">Custom Frames</Link></li>
              <li><Link to="/collections">Collage Frames</Link></li>
              <li><Link to="/collections">Gift Frames</Link></li>
              <li><Link to="/collections">Portrait Frames</Link></li>
              <li><Link to="/collections">Camera Photography</Link></li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="footer-col-title">Follow Us</h4>
            <div className="footer-social-row">
              <a
                href={STUDIO_INFO.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="footer-social-pill"
                aria-label="Instagram"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href={STUDIO_INFO.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="footer-social-pill"
                aria-label="Facebook"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href={STUDIO_INFO.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="footer-social-pill"
                aria-label="YouTube"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <polygon points="10 15 15 12 10 9 10 15"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="footer-col-title">Visit Us</h4>
            <ul className="footer-links-list text-[#9C958C]">
              <li className="flex items-start gap-1.5">
                <MapPin size={16} color="var(--gold-light)" className="shrink-0 mt-0.5" />
                <span>Noida Sector 53, Near Shiv Mandir, Noida, UP</span>
              </li>
              <li className="text-amber-200 font-semibold flex items-center gap-1.5">
                <Phone size={14} />
                <a href={`tel:${STUDIO_INFO.phone1}`} className="text-amber-200 hover:underline">{STUDIO_INFO.phone1}</a>
              </li>
              <li className="text-amber-200 font-semibold flex items-center gap-1.5">
                <Phone size={14} />
                <a href={`tel:${STUDIO_INFO.phone2}`} className="text-amber-200 hover:underline">{STUDIO_INFO.phone2}</a>
              </li>
              <li className="text-xs mt-1">
                {STUDIO_INFO.operatingHours}
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <span>© 2026 {STUDIO_INFO.nameHindi}. All rights reserved.</span>
          <span className="inline-flex items-center gap-1">
            Made with <Heart size={14} fill="var(--danger-red)" color="var(--danger-red)" /> for your memories.
          </span>
        </div>
      </div>
    </footer>
  )
}
