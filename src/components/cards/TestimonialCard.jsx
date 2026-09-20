import { Star } from 'lucide-react'

export default function TestimonialCard({ review }) {
  return (
    <div className="testimonial-card">
      <div className="stars-rating-row" aria-label={`${review.rating || 5} out of 5 stars`}>
        {[...Array(review.rating || 5)].map((_, i) => (
          <Star key={i} size={17} fill="#F5A623" color="#F5A623" />
        ))}
      </div>
      <p className="testimonial-quote-text">“{review.text}”</p>
      <div className="testimonial-author-block">
        <img src={review.avatar} alt={review.name} className="author-avatar-img" loading="lazy" />
        <div>
          <div className="author-name">{review.name}</div>
          <div className="author-location">{review.location}</div>
        </div>
      </div>
    </div>
  )
}
