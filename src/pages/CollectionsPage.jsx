import { useState } from 'react'
import { Sparkles, ArrowRight, ShieldCheck, Clock, Award } from 'lucide-react'
import OccasionCard from '../components/cards/OccasionCard'
import ProductCard from '../components/cards/ProductCard'
import { OCCASIONS, FEATURED_FRAMES } from '../constants/studioData'
import { useFrame } from '../context/useFrame'

export default function CollectionsPage() {
  const [selectedFilter, setSelectedFilter] = useState('All')
  const { openCustomModal } = useFrame()

  const filterOptions = ['All', 'Collage', 'Portrait', 'Couple', 'Custom', 'Baby']

  const filteredProducts = selectedFilter === 'All'
    ? FEATURED_FRAMES
    : FEATURED_FRAMES.filter(f => f.category.toLowerCase() === selectedFilter.toLowerCase())

  return (
    <div className="pb-24 bg-[#FAF8F4] min-h-screen">

      {/* ── Page Header Banner ── */}
      <div className="bg-gradient-to-b from-[#F3ECE2] to-[#FAF8F4] border-b border-[#E8D9C5] py-14 sm:py-18">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8B5E34] bg-white border border-[#E8D9C5] px-4 py-1.5 rounded-full mb-4 shadow-xs">
            <Sparkles size={14} className="text-[#A67C3A]" />
            <span>Curated Artisan Catalog • Noida Sector 53</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-[#171717] mb-4">
            Collections &amp; Frame Categories
          </h1>

          <p className="text-base sm:text-lg text-[#4A4643] max-w-2xl mx-auto leading-relaxed">
            Every memory deserves an artisan frame. Explore our handmade teak wood frames, royal collages, wedding heirlooms, and personalised gifts crafted with museum-grade care.
          </p>

          {/* Quick Studio Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-8 text-xs sm:text-sm font-semibold text-[#4A4643]">
            <div className="flex items-center gap-2">
              <Award size={16} className="text-[#8B5E34]" />
              <span>Solid Natural Teakwood</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-[#8B5E34]" />
              <span>24–48h Turnaround</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-[#8B5E34]" />
              <span>Crystal Clear &amp; Anti-Glare Glass</span>
            </div>
          </div>
        </div>
      </div>

      <div className="content-wrapper">

        {/* ── 1. Shop by Occasion ── */}
        <section className="py-14 sm:py-18 lg:py-22 border-b border-[#E8D9C5]/80" id="occasions">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#8B5E34] bg-[#F7F1E5] px-3 py-1 rounded-full mb-2.5">
                <span>Browse by Memory</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-[#171717]">
                Shop by Occasion
              </h2>
              <p className="text-sm sm:text-base text-[#4A4643] mt-1 max-w-xl">
                Select an occasion below to customize the perfect frame design with our studio artisans.
              </p>
            </div>
          </div>

          {/* 4-column balanced grid on desktop, 2 on tablet/mobile */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {OCCASIONS.map((occ) => (
              <div key={occ.id} className="h-full">
                <OccasionCard occasion={occ} />
              </div>
            ))}
          </div>
        </section>

        {/* ── 2. Signature & Bestseller Frames ── */}
        <section className="py-14 sm:py-18 lg:py-22" id="bestsellers">
          {/* Section Header with Premium Materials Teaser Card */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-10 pb-6 border-b border-[#E8D9C5]/80">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wider uppercase text-[#8B5E34] bg-[#F7F1E5] px-3 py-1 rounded-full mb-2.5">
                <span>Handmade in Studio</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif text-[#171717]">
                Signature &amp; Bestseller Frames
              </h2>
              <p className="text-sm sm:text-base text-[#4A4643] mt-1 max-w-xl">
                Explore handcrafted frames with solid wood profiles, precision bevel matting, and crystal glass.
              </p>
            </div>

            {/* Premium Materials Teaser Card */}
            <div className="bg-white/95 border border-[#E8D9C5] rounded-2xl p-4 sm:p-4.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs shrink-0 max-w-xl">
              <div>
                <span className="text-[11px] font-bold tracking-wider uppercase text-[#8B5E34] block">
                  Premium Materials
                </span>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-stone-700 font-medium">
                  <span>• Solid teak wood</span>
                  <span>• Museum-quality bevel mats</span>
                  <span>• Crystal-clear glass</span>
                </div>
              </div>
              <button
                type="button"
                onClick={() => openCustomModal('Signature Frame')}
                className="inline-flex items-center gap-1.5 bg-white hover:bg-[#FAF5EF] text-[#8B5E34] border border-[#E8D9C5] hover:border-[#8B5E34] text-xs font-bold px-3.5 py-2 rounded-xl transition-all shadow-xs shrink-0 cursor-pointer active:scale-95"
              >
                <span>View Frame Details</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-8 sm:mb-10 scrollbar-none">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                type="button"
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold whitespace-nowrap transition-all cursor-pointer ${
                  selectedFilter === opt
                    ? 'bg-[#8B5E34] text-white shadow-xs'
                    : 'bg-white border border-[#E8D9C5] text-[#383431] hover:border-[#A67C3A] hover:bg-[#F7F1E5]/50'
                }`}
                onClick={() => setSelectedFilter(opt)}
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Product Grid — 4 responsive columns on xl/desktop, 3 on lg, 2 on sm, 1 on mobile */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
            {filteredProducts.map((item) => (
              <div key={item.id} className="h-full">
                <ProductCard product={item} />
              </div>
            ))}
          </div>

          {/* Bespoke Custom Frame Banner */}
          <div className="mt-16 sm:mt-20 rounded-3xl p-8 sm:p-12 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 shadow-2xl relative overflow-hidden bg-gradient-to-br from-stone-900 via-stone-950 to-stone-900 border border-amber-500/30">
            <div className="relative z-10 max-w-xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#E5C384] bg-[#8B5E34]/30 border border-[#A67C3A]/50 px-3.5 py-1 rounded-full mb-3.5">
                <Sparkles size={13} />
                <span>Bespoke Framing Service</span>
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-serif mb-3">
                Need a specific size or custom profile?
              </h3>
              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                Made-to-order frames in any custom size from 4×6 inches up to 40×60 inches. Hand-assembled with precision mitered joints in Noida Sector 53.
              </p>
            </div>

            <button
              type="button"
              className="relative z-10 inline-flex items-center gap-2.5 font-bold px-7 py-4 rounded-xl shadow-lg transition-all active:scale-95 cursor-pointer shrink-0 text-sm sm:text-base bg-gradient-to-r from-[#A67C3A] to-[#8B5E34] text-[#FAF8F4] hover:opacity-90"
              onClick={() => openCustomModal()}
            >
              <span>Build Custom Frame</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </section>

      </div>
    </div>
  )
}
