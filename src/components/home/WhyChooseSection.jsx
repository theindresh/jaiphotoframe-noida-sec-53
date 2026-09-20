import { Gem, Sparkles, CalendarHeart, MapPin, Users } from 'lucide-react'
import SectionHeader from '../common/SectionHeader'
import { STUDIO_INFO } from '../../constants/studioData'

export default function WhyChooseSection() {
  const reasons = [
    {
      title: 'High Quality Materials',
      icon: Gem,
    },
    {
      title: 'Custom & Unique Designs',
      icon: Sparkles,
    },
    {
      title: 'Perfect for All Occasions',
      icon: CalendarHeart,
    },
    {
      title: 'Local Studio in Noida',
      icon: MapPin,
    },
    {
      title: 'Trusted by 1000+ Customers',
      icon: Users,
    },
  ]

  return (
    <section className="why-choose-section" id="why-us">
      <div className="content-wrapper">
        <SectionHeader
          title={`Why Choose ${STUDIO_INFO.nameHindi}?`}
          subtitle="More than just frames, we create lasting memories with precision and heart."
          isHindi={true}
        />

        <div className="why-choose-grid">
          {reasons.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.title} className="why-feature-box">
                <div className="why-icon-circle">
                  <Icon size={24} />
                </div>
                <h3 className="why-feature-title">{item.title}</h3>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
