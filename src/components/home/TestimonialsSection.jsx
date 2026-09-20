import TestimonialCard from '../cards/TestimonialCard'
import { TESTIMONIALS } from '../../constants/studioData'

export default function TestimonialsSection() {
  return (
    <section className="py-14 sm:py-18 bg-[#FAF8F4] border-b border-[#E8D9C5]/80">
      <div className="content-wrapper">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold font-serif text-stone-900 leading-tight">
            What Our Customers Say
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2">
            Real experiences from families and couples who trusted us with their memories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((review) => (
            <TestimonialCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  )
}
