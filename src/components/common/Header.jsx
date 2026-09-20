import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Camera, Menu, X, Phone, ArrowRight } from 'lucide-react'
import { STUDIO_INFO } from '../../constants/studioData'
import { makeWhatsAppUrl } from '../../utils/whatsapp'
import WhatsAppIcon from './WhatsAppIcon'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on Esc key or body scroll lock
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [mobileMenuOpen])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collections', path: '/collections' },
    { name: 'Custom Frame', path: '/custom-frame' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="content-wrapper header-nav-container">
          <Link to="/" className="brand-logo-wrap" aria-label="Jai Photo Frame Home">
            <div className="logo-frame-icon">
              <div className="logo-frame-inner">
                <Camera size={18} color="#FAF8F4" strokeWidth={2.2} />
              </div>
            </div>
            <div className="logo-text-block">
              <span className="brand-hindi-title hindi-font">{STUDIO_INFO.nameHindi}</span>
              <span className="brand-tagline">
                {STUDIO_INFO.tagline} <span className="heart">❤️</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) => `nav-item-link ${isActive ? 'active' : ''}`}
                end={link.path === '/'}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Header Action Buttons with unmistakable WhatsApp Green button */}
          <div className="header-actions">
            <a
              href={makeWhatsAppUrl("Hello Jai Photo Frame! I would like to inquire about your custom frames and collections.")}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp-header"
              aria-label="Chat on WhatsApp"
            >
              <WhatsAppIcon size={22} variant="badge" />
              <span className="whatsapp-header-text">WhatsApp Us</span>
            </a>

            <button
              type="button"
              className="hamburger-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="drawer-header">
          <div className="brand-logo-wrap">
            <div className="logo-frame-icon w-[38px] h-[38px]">
              <div className="logo-frame-inner w-[24px] h-[24px]">
                <Camera size={14} color="#FAF8F4" strokeWidth={2.2} />
              </div>
            </div>
            <div className="logo-text-block">
              <span className="brand-hindi-title hindi-font text-[18px]">
                {STUDIO_INFO.nameHindi}
              </span>
              <span className="brand-tagline text-[11px]">
                {STUDIO_INFO.tagline} <span className="heart">❤️</span>
              </span>
            </div>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <div className="drawer-nav-links">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="drawer-link"
              onClick={() => setMobileMenuOpen(false)}
              end={link.path === '/'}
            >
              <span>{link.name}</span>
              <ArrowRight size={16} />
            </NavLink>
          ))}
        </div>

        <div className="drawer-footer">
          <a
            href={`tel:${STUDIO_INFO.phone1}`}
            className="btn-call-studio justify-center"
          >
            <Phone size={16} />
            Call {STUDIO_INFO.phone1}
          </a>
          <a
            href={makeWhatsAppUrl("Namaste! I would like to inquire about frames.")}
            className="btn-whatsapp-header justify-center w-full rounded-md"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon size={22} variant="badge" />
            <span className="inline">Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  )
}
