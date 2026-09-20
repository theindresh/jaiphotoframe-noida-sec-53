import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import GalleryCard from '../cards/GalleryCard'
import { GALLERY_ITEMS } from '../../constants/studioData'

export default function GallerySection({ isFullPage = false }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const categories = ['All', 'Family', 'Couple', 'Wedding', 'Baby', 'Collage', 'Custom']

  const filteredItems = activeFilter === 'All'
    ? (isFullPage ? GALLERY_ITEMS : GALLERY_ITEMS.slice(0, 8))
    : GALLERY_ITEMS.filter(item => item.category.toLowerCase() === activeFilter.toLowerCase())

  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-[#FAF8F4] border-b border-[#E8D9C5]/80" id="gallery">
      <div className="content-wrapper">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-900 leading-tight">
              Our Gallery
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-1 max-w-xl">
              A glimpse of our work and happy customers.
            </p>
          </div>

          {/* Filter Pill Buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((pill) => (
              <button
                key={pill}
                type="button"
                className={`px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeFilter === pill
                    ? 'bg-[#A67C3A] text-white shadow-xs'
                    : 'bg-white border border-[#E8D9C5] text-stone-700 hover:border-[#A67C3A] hover:bg-[#FAF5EF]'
                }`}
                onClick={() => setActiveFilter(pill)}
              >
                {pill}
              </button>
            ))}
          </div>
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>

        {/* View Full Gallery Link (when on HomePage) */}
        {!isFullPage && (
          <div className="flex justify-center mt-10">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 bg-white hover:bg-[#FAF5EF] border border-[#E8D9C5] hover:border-[#8B5E34] text-stone-800 font-bold px-7 py-3 rounded-full text-sm shadow-xs transition-all active:scale-95"
            >
              <span>View Full Gallery ({GALLERY_ITEMS.length}+ Creations)</span>
              <ArrowRight size={16} className="text-[#8B5E34]" />
            </Link>
          </div>
        )}

      </div>
    </section>
  )
}
