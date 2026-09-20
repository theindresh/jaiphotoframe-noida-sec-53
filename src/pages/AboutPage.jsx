import { Sparkles, Award, Scissors } from 'lucide-react'
import WhyChooseSection from '../components/home/WhyChooseSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import ContactCtaBanner from '../components/home/ContactCtaBanner'
import { STUDIO_INFO } from '../constants/studioData'
import FrameVisualDemo from '../components/common/FrameVisualDemo'

export default function AboutPage() {
  return (
    <div className="about-page-wrapper">
      {/* Header Banner */}
      <div className="bg-[#FAF8F4] py-14 px-0 border-b border-[#EBDCCB]">
        <div className="content-wrapper text-center max-w-[780px]">
          <div className="hero-pill-badge mx-auto mb-4">
            <Sparkles size={14} color="var(--gold-dark)" />
            <span>Our Story &amp; Heritage</span>
          </div>
          <h1 className="serif-font text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
            About {STUDIO_INFO.nameHindi}
          </h1>
          <p className="hindi-font text-xl text-[#8B5E34] font-semibold mb-2.5">
            {STUDIO_INFO.taglineWithHeart}
          </p>
          <p className="text-base text-stone-600 leading-relaxed">
            Located in Noida Sector 53 near Shiv Mandir, we have been helping families, couples, and businesses preserve their most cherished memories for years.
          </p>
        </div>
      </div>

      {/* Story & Craftsmanship Details */}
      <section className="py-16">
        <div className="content-wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="serif-font text-2xl sm:text-3xl font-bold text-stone-900 mb-4">
                Framing is Not Just Wood &amp; Glass — It is an Emotion
              </h2>
              <p className="text-base text-stone-600 leading-relaxed mb-4">
                Every milestone in life deserves to be celebrated. Whether it’s your wedding day vows, your baby’s first steps, or a nostalgic three-generation family gathering, our studio provides handcrafted frames built to last decades.
              </p>
              <p className="text-base text-stone-600 leading-relaxed mb-6">
                We use high-definition pigment prints, acid-free museum mats, and precision mitre joints so every frame that leaves our studio in Noida is an heirloom piece.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
                  <Award size={24} color="var(--gold-primary)" className="mb-2" />
                  <h4 className="text-base font-bold text-stone-900">Artisan Quality</h4>
                  <p className="text-xs text-stone-500">Solid teak wood &amp; synthetic mouldings</p>
                </div>
                <div className="bg-white p-4 rounded-xl border border-stone-200 shadow-xs">
                  <Scissors size={24} color="var(--gold-primary)" className="mb-2" />
                  <h4 className="text-base font-bold text-stone-900">Custom Tailored</h4>
                  <p className="text-xs text-stone-500">Exact dimensions to fit your wall</p>
                </div>
              </div>
            </div>

            {/* Story Showcase */}
            <div className="mx-auto max-w-[420px] w-full">
              <FrameVisualDemo
                size="20 × 30 in"
                styleName="Handmade Teak Wood"
                aspectRatio="4 / 3.4"
                label="Master Artistry Keepsake"
                sublabel="Heirloom Grade • Acid-free Museum Mat"
                caption="Preserving Real Moments ❤️"
              />
            </div>
          </div>
        </div>
      </section>

      <WhyChooseSection />
      <TestimonialsSection />
      <ContactCtaBanner />
    </div>
  )
}
