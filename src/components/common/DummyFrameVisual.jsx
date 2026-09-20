import { Heart, Sparkles, Gift } from 'lucide-react'

export default function DummyFrameVisual({ type = 'classic-wood', name = 'Photo Frame' }) {
  // 1. Family Story Frame
  if (type === 'family-story') {
    return (
      <div className="w-full aspect-[4/3] bg-stone-900 p-2.5 sm:p-3 rounded-xl shadow-md flex items-center justify-center border-2 border-stone-800">
        <div className="w-full h-full bg-[#FAF7F2] p-2 rounded-lg shadow-inner flex flex-col justify-between border border-stone-200">
          <div className="grid grid-cols-3 gap-1.5 flex-1">
            <div className="bg-stone-200/70 rounded flex items-center justify-center border border-stone-300/60">
              <span className="text-[9px] text-stone-500 font-medium">Memory 1</span>
            </div>
            <div className="bg-stone-200/70 rounded flex items-center justify-center border border-stone-300/60">
              <span className="text-[9px] text-stone-500 font-medium">Memory 2</span>
            </div>
            <div className="bg-stone-200/70 rounded flex items-center justify-center border border-stone-300/60">
              <span className="text-[9px] text-stone-500 font-medium">Memory 3</span>
            </div>
          </div>
          <div className="py-1 text-center">
            <span className="text-xs font-serif font-bold text-stone-900 tracking-wider">Family ❤️</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 flex-1">
            <div className="bg-stone-200/70 rounded flex items-center justify-center border border-stone-300/60">
              <span className="text-[9px] text-stone-500 font-medium">Memory 4</span>
            </div>
            <div className="bg-stone-200/70 rounded flex items-center justify-center border border-stone-300/60">
              <span className="text-[9px] text-stone-500 font-medium">Memory 5</span>
            </div>
            <div className="bg-stone-200/70 rounded flex items-center justify-center border border-stone-300/60">
              <span className="text-[9px] text-stone-500 font-medium">Memory 6</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // 2. Classic Wooden Frame
  if (type === 'classic-wood') {
    return (
      <div className="w-full aspect-[4/3] bg-gradient-to-br from-amber-950 via-stone-900 to-amber-950 p-3 rounded-xl shadow-md flex items-center justify-center border-2 border-amber-900/60">
        <div className="w-full h-full bg-[#FCFAF6] p-2.5 rounded-lg shadow-inner flex items-center justify-center border border-stone-200">
          <div className="w-full h-full rounded bg-gradient-to-br from-amber-50/80 to-stone-100 border border-amber-200/80 flex flex-col items-center justify-center p-2 text-center">
            <Sparkles size={18} className="text-amber-800 mb-1" />
            <span className="text-xs font-serif font-bold text-stone-900">Classic Portrait</span>
            <span className="text-[10px] text-stone-500 mt-0.5">Solid Teak Wood</span>
          </div>
        </div>
      </div>
    )
  }

  // 3. Heart Collage Frame
  if (type === 'heart-collage') {
    return (
      <div className="w-full aspect-[4/3] bg-stone-900 p-3 rounded-xl shadow-md flex items-center justify-center border border-stone-800">
        <div className="w-full h-full bg-[#FAF7F2] p-2 rounded-lg shadow-inner flex flex-col items-center justify-center border border-stone-200">
          <div className="relative w-24 h-18 flex items-center justify-center">
            <svg viewBox="0 0 100 90" className="w-full h-full fill-stone-900">
              <path d="M50 85 C15 55 0 35 0 20 C0 8 10 0 22 0 C32 0 43 7 50 16 C57 7 68 0 78 0 C90 0 100 8 100 20 C100 35 85 55 50 85 Z" />
            </svg>
            <span className="absolute text-[10px] font-bold text-amber-200 uppercase tracking-widest font-serif">
              Love
            </span>
          </div>
          <span className="text-[11px] font-medium text-stone-600 mt-1">Multi-Photo Cutout</span>
        </div>
      </div>
    )
  }

  // 4. LED Signature Frame
  if (type === 'led-signature') {
    return (
      <div className="w-full aspect-[4/3] bg-stone-950 p-2.5 sm:p-3 rounded-xl shadow-lg flex items-center justify-center border border-amber-600/40">
        <div className="w-full h-full rounded-lg p-2 flex flex-col justify-between items-center text-center bg-gradient-to-br from-stone-900 to-stone-950 border border-amber-400/80 shadow-[0_0_20px_rgba(245,178,74,0.35)]">
          <div className="flex-1 w-full bg-stone-900/90 rounded flex items-center justify-center border border-amber-500/30">
            <span className="text-xs text-amber-200 font-medium">Illuminated Keepsake</span>
          </div>
          <div className="pt-2">
            <span className="text-xs font-serif font-bold text-amber-300 tracking-wide drop-shadow-[0_0_8px_rgba(245,178,74,0.7)]">
              Together Always ♡
            </span>
          </div>
        </div>
      </div>
    )
  }

  // 5. Royal Portrait Frame
  if (type === 'royal-portrait') {
    return (
      <div className="w-full aspect-[4/3] p-2.5 sm:p-3 rounded-xl shadow-md flex items-center justify-center bg-gradient-to-br from-amber-400 via-amber-700 to-amber-500 border-2 border-amber-300">
        <div className="w-full h-full bg-[#FAF6EE] p-2 rounded-lg shadow-inner flex items-center justify-center border border-amber-200">
          <div className="w-full h-full rounded bg-gradient-to-br from-amber-50 to-stone-100 border-2 border-dashed border-amber-500/40 flex flex-col items-center justify-center p-2 text-center">
            <Sparkles size={18} className="text-amber-800 mb-1" />
            <span className="text-xs font-serif font-bold text-stone-900">Antique Gold Ornate</span>
            <span className="text-[10px] text-amber-800 mt-0.5">Museum Glass</span>
          </div>
        </div>
      </div>
    )
  }

  // 6. Collage Photo Frame (Bestseller Memories)
  if (type === 'collage-memories') {
    return (
      <div className="w-full aspect-[4/3] bg-stone-950 p-2.5 sm:p-3 rounded-xl shadow-md flex items-center justify-center border border-stone-800">
        <div className="w-full h-full bg-stone-900 p-2 rounded-lg shadow-inner flex flex-col justify-between border border-stone-700">
          <div className="grid grid-cols-3 gap-1.5 flex-1">
            <div className="bg-stone-800 rounded flex items-center justify-center">
              <span className="text-[8px] text-stone-400">Photo 1</span>
            </div>
            <div className="bg-stone-800 rounded flex items-center justify-center">
              <span className="text-[8px] text-stone-400">Photo 2</span>
            </div>
            <div className="bg-stone-800 rounded flex items-center justify-center">
              <span className="text-[8px] text-stone-400">Photo 3</span>
            </div>
          </div>
          <div className="py-1 text-center">
            <span className="text-xs font-serif font-bold text-stone-200 tracking-wider">Memories ♡</span>
          </div>
          <div className="grid grid-cols-3 gap-1.5 flex-1">
            <div className="bg-stone-800 rounded flex items-center justify-center">
              <span className="text-[8px] text-stone-400">Photo 4</span>
            </div>
            <div className="bg-stone-800 rounded flex items-center justify-center">
              <span className="text-[8px] text-stone-400">Photo 5</span>
            </div>
            <div className="bg-stone-800 rounded flex items-center justify-center">
              <span className="text-[8px] text-stone-400">Photo 6</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // 7. Couple Frame
  if (type === 'couple') {
    return (
      <div className="w-full aspect-[4/3] bg-gradient-to-br from-stone-900 via-amber-950 to-stone-900 p-3 rounded-xl shadow-md flex items-center justify-center border-2 border-amber-900/70">
        <div className="w-full h-full bg-[#FCFAF7] p-2 rounded-lg shadow-inner flex items-center justify-center border border-stone-200">
          <div className="w-full h-full rounded bg-gradient-to-br from-amber-50 to-stone-100 border border-amber-200 flex flex-col items-center justify-center p-2 text-center">
            <Heart size={18} className="text-amber-800 mb-1" />
            <span className="text-xs font-serif font-bold text-stone-900">Couple Keepsake</span>
            <span className="text-[10px] text-stone-500 mt-0.5">A Bond for Lifetime</span>
          </div>
        </div>
      </div>
    )
  }

  // 8. Baby Milestone Frame
  if (type === 'baby-milestone') {
    return (
      <div className="w-full aspect-[4/3] bg-[#EFE8DD] p-2.5 rounded-xl shadow-md flex items-center justify-center border-2 border-stone-300">
        <div className="w-full h-full bg-white p-2 rounded-lg shadow-inner flex flex-col justify-between border border-stone-200">
          <div className="text-center pb-0.5 border-b border-stone-100">
            <span className="text-[11px] font-serif font-bold text-stone-800 tracking-wide">My First Year</span>
          </div>
          <div className="grid grid-cols-4 gap-1 flex-1 py-1">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-amber-50/70 rounded flex items-center justify-center border border-amber-100">
                <span className="text-[8px] text-stone-500">M{i + 1}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <span className="text-[9px] text-stone-400">12 Months Grid</span>
          </div>
        </div>
      </div>
    )
  }

  // 9. Portrait Frame
  if (type === 'portrait') {
    return (
      <div className="w-full aspect-[4/3] bg-stone-950 p-2.5 sm:p-3 rounded-xl shadow-md flex items-center justify-center border border-stone-800">
        <div className="w-full h-full bg-[#FAF8F5] p-2.5 rounded-lg shadow-inner flex items-center justify-center border border-stone-200">
          <div className="w-full h-full rounded bg-stone-100/80 border border-stone-200 flex flex-col items-center justify-center p-2 text-center">
            <span className="text-xs font-serif font-bold text-stone-900">Studio Portrait</span>
            <span className="text-[10px] text-stone-500 mt-0.5">Charcoal &amp; Art Finish</span>
          </div>
        </div>
      </div>
    )
  }

  // 10. Gift Frame (with Luxury Satin Ribbon)
  if (type === 'gift') {
    return (
      <div className="w-full aspect-[4/3] bg-stone-900 p-2.5 sm:p-3 rounded-xl shadow-md flex items-center justify-center border border-stone-800 relative overflow-hidden">
        {/* Red Ribbon Badge */}
        <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden pointer-events-none z-10">
          <div className="bg-[#D32F2F] text-white text-[8px] font-bold py-0.5 w-20 text-center transform rotate-45 translate-y-2.5 -translate-x-2.5 shadow-md uppercase">
            Gift
          </div>
        </div>

        <div className="w-full h-full bg-[#FAF7F2] p-2 rounded-lg shadow-inner flex items-center justify-center border border-stone-200">
          <div className="w-full h-full rounded bg-gradient-to-br from-red-50/60 to-stone-100 border border-red-100 flex flex-col items-center justify-center p-2 text-center">
            <Gift size={20} className="text-[#D32F2F] mb-1" />
            <span className="text-xs font-serif font-bold text-stone-900">Celebration Gift</span>
            <span className="text-[10px] text-stone-500 mt-0.5">With Satin Ribbon &amp; Box</span>
          </div>
        </div>
      </div>
    )
  }

  // Fallback
  return (
    <div className="w-full aspect-[4/3] bg-stone-900 p-3 rounded-xl shadow-md flex items-center justify-center border-2 border-stone-800">
      <div className="w-full h-full bg-[#FAF8F5] p-2.5 rounded-lg shadow-inner flex flex-col items-center justify-center text-center">
        <Sparkles size={18} className="text-amber-800 mb-1" />
        <span className="text-xs font-serif font-bold text-stone-900">{name}</span>
      </div>
    </div>
  )
}
