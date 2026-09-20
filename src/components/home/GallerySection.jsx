import { useState } from 'react'
import SectionHeader from '../common/SectionHeader'
import GalleryCard from '../cards/GalleryCard'
import { GALLERY_ITEMS } from '../../constants/studioData'

export default function GallerySection({ isFullPage = false }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const categories = ['All', 'Family', 'Couple', 'Wedding', 'Baby', 'Collage', 'Custom']

  const filteredItems = activeFilter === 'All'
    ? (isFullPage ? GALLERY_ITEMS : GALLERY_ITEMS.slice(0, 8))
    : GALLERY_ITEMS.filter(item => item.category.toLowerCase() === activeFilter.toLowerCase())

  return (
    <section className="gallery-section" id="gallery">
      <div className="content-wrapper">
        <SectionHeader
          title="Our Gallery"
          subtitle="A glimpse of our handcrafted work and happy customers across Delhi-NCR."
          linkText={!isFullPage ? "View Full Gallery" : undefined}
          linkTo={!isFullPage ? "/gallery" : undefined}
        />

        {/* Filter Pills */}
        <div className="gallery-filters-row">
          {categories.map((pill) => (
            <button
              key={pill}
              type="button"
              className={`gallery-filter-pill ${activeFilter === pill ? 'active' : ''}`}
              onClick={() => setActiveFilter(pill)}
            >
              {pill}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-masonry-grid">
          {filteredItems.map((item) => (
            <GalleryCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
