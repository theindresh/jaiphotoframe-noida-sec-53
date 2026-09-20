import { Link } from 'react-router-dom'
import { Camera, Heart, Phone, MapPin } from 'lucide-react'
import { STUDIO_INFO } from '../../constants/studioData'

export default function Footer() {
  return (
    <footer className="bg-[#191817] text-stone-300 pt-8 sm:pt-12 pb-20 sm:pb-8 border-t border-[#A67C3A]/20">
      <div className="content-wrapper">
        
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 pb-8 sm:pb-10 border-b border-stone-800">
          
          {/* Col 1: Brand Info */}
          <div className="flex flex-col gap-3">
            <Link to="/" className="flex items-center gap-3 group" aria-label="Jai Photo Frame Home">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#A67C3A] to-[#8B5E34] p-0.5 shadow-md flex items-center justify-center border border-[#DFC493]">
                <div className="w-full h-full border border-dashed border-white/80 rounded-lg flex items-center justify-center">
                  <Camera size={16} className="text-[#FAF8F4]" strokeWidth={2.2} />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="hindi-font text-lg sm:text-xl font-bold text-[#FAF8F4] leading-tight">
                  {STUDIO_INFO.nameHindi}
                </span>
                <span className="text-[11px] sm:text-xs text-[#C49A53] font-semibold flex items-center gap-1">
                  {STUDIO_INFO.tagline} <span className="text-[#D32F2F]">❤️</span>
                </span>
              </div>
            </Link>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Premium photo framing studio in Noida Sector 53. Custom wood frames, collages, portraits &amp; personalized gifts.
            </p>

            {/* Social Icons (Compact on all screens) */}
            <div className="flex items-center gap-2 pt-1">
              <span className="text-xs text-stone-400 font-medium sm:hidden mr-1">Follow:</span>
              <a
                href={STUDIO_INFO.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-stone-800 hover:bg-[#A67C3A] text-stone-300 hover:text-white flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Instagram"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
              <a
                href={STUDIO_INFO.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-stone-800 hover:bg-[#A67C3A] text-stone-300 hover:text-white flex items-center justify-center transition-colors shadow-2xs"
                aria-label="Facebook"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              <a
                href={STUDIO_INFO.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-stone-800 hover:bg-[#A67C3A] text-stone-300 hover:text-white flex items-center justify-center transition-colors shadow-2xs"
                aria-label="YouTube"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/>
                  <polygon points="10 15 15 12 10 9 10 15"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 & 3 Combined in 2-column subgrid on mobile to save vertical height */}
          <div className="grid grid-cols-2 gap-4 sm:col-span-1 lg:col-span-2 lg:grid-cols-2">
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-serif font-bold text-sm sm:text-base mb-2.5 sm:mb-3">Quick Links</h4>
              <ul className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm text-stone-400">
                <li><Link to="/" className="hover:text-[#C49A53] transition-colors">Home</Link></li>
                <li><Link to="/collections" className="hover:text-[#C49A53] transition-colors">Collections</Link></li>
                <li><Link to="/custom-frame" className="hover:text-[#C49A53] transition-colors">Custom Frame</Link></li>
                <li><Link to="/gallery" className="hover:text-[#C49A53] transition-colors">Gallery</Link></li>
                <li><Link to="/about" className="hover:text-[#C49A53] transition-colors">About</Link></li>
                <li><Link to="/contact" className="hover:text-[#C49A53] transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Our Services */}
            <div>
              <h4 className="text-white font-serif font-bold text-sm sm:text-base mb-2.5 sm:mb-3">Our Services</h4>
              <ul className="flex flex-col gap-1.5 sm:gap-2 text-xs sm:text-sm text-stone-400">
                <li><Link to="/collections" className="hover:text-[#C49A53] transition-colors">Photo Frames</Link></li>
                <li><Link to="/custom-frame" className="hover:text-[#C49A53] transition-colors">Custom Frames</Link></li>
                <li><Link to="/collections" className="hover:text-[#C49A53] transition-colors">Collage Frames</Link></li>
                <li><Link to="/collections" className="hover:text-[#C49A53] transition-colors">Gift Frames</Link></li>
                <li><Link to="/collections" className="hover:text-[#C49A53] transition-colors">Portrait Frames</Link></li>
                <li><Link to="/collections" className="hover:text-[#C49A53] transition-colors">Mirror Frames</Link></li>
              </ul>
            </div>
          </div>

          {/* Col 4: Visit Us & Contact Info */}
          <div className="flex flex-col gap-2.5 bg-stone-900/60 p-3.5 sm:p-4 rounded-2xl border border-stone-800/80">
            <h4 className="text-white font-serif font-bold text-sm sm:text-base">Visit Us</h4>
            <p className="text-xs text-stone-400 flex items-start gap-1.5 leading-relaxed">
              <MapPin size={13} className="text-[#C49A53] shrink-0 mt-0.5" />
              <span>Noida Sector 53, Near Shiv Mandir, Noida, UP</span>
            </p>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-300 pt-1">
              <div className="flex items-center gap-1">
                <Phone size={12} className="text-[#C49A53]" />
                <a href={`tel:${STUDIO_INFO.phone1}`} className="text-[#C49A53] font-bold hover:underline">
                  {STUDIO_INFO.phone1}
                </a>
              </div>
              <span>/</span>
              <a href={`tel:${STUDIO_INFO.phone2}`} className="text-[#C49A53] font-bold hover:underline">
                {STUDIO_INFO.phone2}
              </a>
            </div>
            <span className="text-[11px] text-stone-500">
              Open 7 Days: {STUDIO_INFO.operatingHours}
            </span>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-4 sm:pt-6 text-[11px] sm:text-xs text-stone-500 text-center sm:text-left">
          <span>© 2026 {STUDIO_INFO.nameHindi}. All rights reserved.</span>
          <span className="flex items-center justify-center gap-1">
            Made with <Heart size={12} className="fill-[#D32F2F] text-[#D32F2F]" /> for your memories.
          </span>
        </div>

      </div>
    </footer>
  )
}
