import { useState } from 'react'
import { FrameContext } from './frameContextDef'

export function FrameProvider({ children }) {
  // Wishlist state
  const [wishlist, setWishlist] = useState({})
  
  // Customizer Modal State
  const [customModalOpen, setCustomModalOpen] = useState(false)
  const [customOccasion, setCustomOccasion] = useState('Family')
  const [customFrameType, setCustomFrameType] = useState('Classic Teak Wood')
  const [customSize, setCustomSize] = useState('12 x 18 inch')
  const [customMatte, setCustomMatte] = useState('Warm Off-White')
  const [customNote, setCustomNote] = useState('Good Memories Forever ❤️')

  // Lightbox Modal State
  const [lightboxItem, setLightboxItem] = useState(null)

  const toggleWishlist = (id) => {
    setWishlist(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const openCustomModal = (initialOccasion = 'Family') => {
    setCustomOccasion(initialOccasion)
    setCustomModalOpen(true)
  }

  const closeCustomModal = () => {
    setCustomModalOpen(false)
  }

  const openLightbox = (item) => {
    setLightboxItem(item)
  }

  const closeLightbox = () => {
    setLightboxItem(null)
  }

  const value = {
    wishlist,
    toggleWishlist,
    customModalOpen,
    openCustomModal,
    closeCustomModal,
    customOccasion,
    setCustomOccasion,
    customFrameType,
    setCustomFrameType,
    customSize,
    setCustomSize,
    customMatte,
    setCustomMatte,
    customNote,
    setCustomNote,
    lightboxItem,
    openLightbox,
    closeLightbox,
  }

  return (
    <FrameContext.Provider value={value}>
      {children}
    </FrameContext.Provider>
  )
}
