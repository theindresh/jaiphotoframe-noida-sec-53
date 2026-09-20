import SectionHeader from '../common/SectionHeader'
import TestimonialCard from '../cards/TestimonialCard'
import { TESTIMONIALS } from '../../constants/studioData'

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="content-wrapper">
        <SectionHeader
          title="What Our Customers Say"
          subtitle="Real experiences from families and couples who trusted us with their memories."
        />

        <div className="testimonials-grid">
          {TESTIMONIALS.map((review) => (
            <TestimonialCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
