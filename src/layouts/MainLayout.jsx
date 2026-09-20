import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import TopBar from '../components/common/TopBar'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import FloatingWhatsApp from '../components/common/FloatingWhatsApp'
import MobileStickyBar from '../components/common/MobileStickyBar'
import CustomizerModal from '../components/modals/CustomizerModal'
import GalleryLightbox from '../components/modals/GalleryLightbox'
import LuxuryLoader from '../components/common/LuxuryLoader'

export default function MainLayout() {
  const { pathname } = useLocation()
  const [initialLoading, setInitialLoading] = useState(true)

  // Scroll to top when route changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="w-full min-h-screen bg-[#FAF8F4] text-stone-900 overflow-x-hidden flex flex-col">
      {/* Luxury Loading Animation */}
      {initialLoading && <LuxuryLoader onComplete={() => setInitialLoading(false)} />}

      <TopBar />
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyBar />
      
      {/* Global Interactive Modals */}
      <CustomizerModal />
      <GalleryLightbox />
    </div>
  )
}
