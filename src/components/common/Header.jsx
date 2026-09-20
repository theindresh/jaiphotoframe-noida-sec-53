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
      <header
        className={`sticky top-0 z-50 bg-[#FAF8F4]/95 backdrop-blur-md border-b border-[#E8D9C5] transition-shadow duration-300 ${
          scrolled ? 'shadow-md shadow-stone-900/5' : ''
        }`}
      >
        <div className="content-wrapper flex items-center justify-between h-20">
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-3.5 group" aria-label="Jai Photo Frame Home">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-[#A67C3A] to-[#8B5E34] p-0.5 shadow-md flex items-center justify-center border border-[#DFC493]">
              <div className="w-full h-full border border-dashed border-white/80 rounded-lg flex items-center justify-center">
                <Camera size={18} className="text-[#FAF8F4]" strokeWidth={2.2} />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="hindi-font text-xl sm:text-2xl font-bold text-stone-900 leading-tight group-hover:text-[#8B5E34] transition-colors">
                {STUDIO_INFO.nameHindi}
              </span>
              <span className="text-[11px] sm:text-xs text-[#8B5E34] font-semibold flex items-center gap-1">
                {STUDIO_INFO.tagline} <span className="text-[#D32F2F]">❤️</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `relative py-1 text-[15px] font-semibold transition-colors duration-200 ${
                    isActive
                      ? 'text-[#8B5E34] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#A67C3A] after:rounded-full'
                      : 'text-stone-700 hover:text-[#8B5E34] after:absolute after:bottom-0 after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-[#A67C3A] after:rounded-full after:transition-all after:duration-200'
                  }`
                }
                end={link.path === '/'}
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-3">
            <a
              href={makeWhatsAppUrl("Hello Jai Photo Frame! I would like to inquire about your custom frames and collections.")}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#A67C3A] hover:bg-[#8B5E34] text-white px-5 py-2.5 rounded-full font-bold text-sm shadow-md transition-all active:scale-95 cursor-pointer"
              aria-label="WhatsApp Us"
            >
              <WhatsAppIcon size={18} variant="official" />
              <span className="hidden sm:inline">WhatsApp Us</span>
            </a>

            <button
              type="button"
              className="lg:hidden p-2.5 rounded-xl bg-white border border-[#E8D9C5] text-stone-800 hover:bg-[#FAF5EF] transition-colors cursor-pointer"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 z-[998] bg-stone-950/60 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[999] w-[82%] max-w-[320px] bg-[#FAF8F4] border-l border-[#E8D9C5] p-6 shadow-2xl flex flex-col transition-transform duration-300 ease-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between pb-5 border-b border-[#E8D9C5]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#A67C3A] to-[#8B5E34] flex items-center justify-center text-white shadow-xs">
              <Camera size={16} />
            </div>
            <div>
              <span className="hindi-font text-lg font-bold text-stone-900 block leading-tight">
                {STUDIO_INFO.nameHindi}
              </span>
              <span className="text-[11px] text-[#8B5E34] font-medium">
                {STUDIO_INFO.tagline} ❤️
              </span>
            </div>
          </div>
          <button
            type="button"
            className="p-1.5 rounded-lg text-stone-600 hover:bg-stone-200 transition-colors"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <div className="flex flex-col gap-2 py-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `flex items-center justify-between py-3 px-3 rounded-xl font-semibold text-base transition-colors ${
                  isActive
                    ? 'bg-[#FAF0E6] text-[#8B5E34] font-bold'
                    : 'text-stone-800 hover:bg-white'
                }`
              }
              onClick={() => setMobileMenuOpen(false)}
              end={link.path === '/'}
            >
              <span>{link.name}</span>
              <ArrowRight size={16} className="text-stone-400" />
            </NavLink>
          ))}
        </div>

        <div className="mt-auto pt-6 border-t border-[#E8D9C5] flex flex-col gap-3">
          <a
            href={`tel:${STUDIO_INFO.phone1}`}
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white border border-[#E8D9C5] text-stone-800 font-bold text-sm shadow-xs hover:bg-stone-50"
          >
            <Phone size={16} className="text-[#8B5E34]" />
            <span>Call {STUDIO_INFO.phone1}</span>
          </a>
          <a
            href={makeWhatsAppUrl("Namaste! I would like to inquire about frames.")}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5B] text-white font-bold text-sm shadow-md"
          >
            <WhatsAppIcon size={18} variant="official" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  )
}
