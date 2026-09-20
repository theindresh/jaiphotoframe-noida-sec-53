import { Star } from 'lucide-react'

export default function TestimonialCard({ review }) {
  return (
    <div className="bg-white rounded-2xl border border-[#E8D9C5] p-6 shadow-xs flex flex-col justify-between h-full hover:shadow-md transition-shadow">
      <div>
        <div className="flex items-center gap-1 mb-3" aria-label={`${review.rating || 5} out of 5 stars`}>
          {[...Array(review.rating || 5)].map((_, i) => (
            <Star key={i} size={16} className="fill-[#F5A623] text-[#F5A623]" />
          ))}
        </div>
        <p className="text-stone-700 text-sm leading-relaxed italic mb-6">
          "{review.text}"
        </p>
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-[#E8D9C5]/60">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-11 h-11 rounded-full object-cover border border-[#E8D9C5]"
          loading="lazy"
        />
        <div>
          <div className="text-sm font-bold text-stone-900">{review.name}</div>
          <div className="text-xs text-stone-500">{review.location}</div>
        </div>
      </div>
    </div>
  )
}
