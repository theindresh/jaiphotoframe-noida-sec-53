import { Gem, Sparkles, CalendarHeart, MapPin, Users } from 'lucide-react'
import { STUDIO_INFO } from '../../constants/studioData'

export default function WhyChooseSection() {
  const reasons = [
    { title: 'High Quality Materials', icon: Gem },
    { title: 'Custom & Unique Designs', icon: Sparkles },
    { title: 'Perfect for All Occasions', icon: CalendarHeart },
    { title: 'Local Studio in Noida', icon: MapPin },
    { title: 'Trusted by 1000+ Customers', icon: Users },
  ]

  return (
    <section className="py-14 sm:py-18 bg-[#FAF8F4] border-b border-[#E8D9C5]/80" id="why-us">
      <div className="content-wrapper">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-900 leading-tight">
            Why Choose <span className="hindi-font text-[#8B5E34]">{STUDIO_INFO.nameHindi}?</span>
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2">
            More than just frames, we create lasting memories with precision and heart.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {reasons.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-white border border-[#E8D9C5] hover:border-[#A67C3A] hover:shadow-lg transition-all group"
              >
                <div className="w-14 h-14 rounded-full bg-[#FAF5EF] text-[#8B5E34] border border-[#E8D9C5] flex items-center justify-center mb-3 group-hover:bg-[#8B5E34] group-hover:text-white transition-colors shadow-2xs">
                  <Icon size={24} />
                </div>
                <h3 className="text-sm font-bold text-stone-800 leading-snug">
                  {item.title}
                </h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
