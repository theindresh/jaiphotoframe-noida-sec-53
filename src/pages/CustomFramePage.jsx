import { useState } from 'react'
import { Sparkles, CheckCircle2, ShieldCheck, Clock, Palette } from 'lucide-react'
import { getCustomOrderWhatsAppUrl } from '../utils/whatsapp'
import WhatsAppIcon from '../components/common/WhatsAppIcon'

export default function CustomFramePage() {
  const [occasion, setOccasion] = useState('Family')
  const [frameType, setFrameType] = useState('Classic Teak Wood')
  const [size, setSize] = useState('12 x 18 inch')
  const [matte, setMatte] = useState('Warm Off-White')
  const [customNote, setCustomNote] = useState('Good Memories Forever ❤️')

  const occasionsList = ['Family', 'Couple', 'Wedding', 'Baby', 'Portrait', 'Collage', 'Anniversary']
  const frameTypesList = [
    'Classic Teak Wood',
    'Ornate Gold Border',
    'Sleek Matte Black',
    'LED Illuminated Box',
    'Distressed Walnut',
  ]
  const sizesList = ['8 x 12 inch', '12 x 18 inch', '16 x 24 inch', '20 x 30 inch', '24 x 36 inch (Large)']
  const mattesList = ['Warm Off-White', 'Classic Pure White', 'Regal Charcoal Black', 'Antique Gold Accent']

  const whatsAppUrl = getCustomOrderWhatsAppUrl({
    occasion,
    frameType,
    size,
    matte,
    customNote: customNote || 'Good Memories Forever ❤️',
  })

  return (
    <div className="pb-16 bg-[#FAF8F4] min-h-screen">
      {/* Header Banner */}
      <div className="bg-gradient-to-b from-[#F3ECE2] to-[#FAF8F4] py-14 border-b border-[#E8D9C5]">
        <div className="content-wrapper text-center max-w-3xl">
          <div className="inline-flex items-center gap-1.5 bg-[#FAF0E6] text-[#8B5E34] border border-[#E8D9C5] px-3.5 py-1.5 rounded-full text-xs font-bold mb-4 shadow-2xs">
            <Sparkles size={14} className="text-[#A67C3A]" />
            <span>Studio Workshop • Noida Sector 53</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold font-serif text-stone-900 mb-3">
            Custom Frame Studio
          </h1>
          <p className="text-base text-stone-600 leading-relaxed max-w-xl mx-auto">
            Design your bespoke frame in 5 simple steps. Pick your wood moulding style, dimensions, and personal inscription to get an instant quote on WhatsApp.
          </p>
        </div>
      </div>

      <div className="content-wrapper mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
          
          {/* Left: Interactive Configurator */}
          <div className="bg-white rounded-3xl border border-[#E8D9C5] p-6 sm:p-8 shadow-sm flex flex-col gap-6">
            <h2 className="font-serif text-2xl font-bold text-stone-900 pb-4 border-b border-[#E8D9C5]/60">
              Configure Your Frame
            </h2>

            {/* Step 1: Occasion */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2.5">
                1. Select Occasion
              </label>
              <div className="flex flex-wrap gap-2">
                {occasionsList.map(occ => (
                  <button
                    key={occ}
                    type="button"
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      occasion === occ
                        ? 'bg-[#8B5E34] text-white shadow-xs'
                        : 'bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100'
                    }`}
                    onClick={() => setOccasion(occ)}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Frame Style */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2.5">
                2. Frame Moulding Style
              </label>
              <div className="flex flex-wrap gap-2">
                {frameTypesList.map(style => (
                  <button
                    key={style}
                    type="button"
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      frameType === style
                        ? 'bg-[#8B5E34] text-white shadow-xs'
                        : 'bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100'
                    }`}
                    onClick={() => setFrameType(style)}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Size */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2.5">
                3. Frame Dimensions
              </label>
              <div className="flex flex-wrap gap-2">
                {sizesList.map(sz => (
                  <button
                    key={sz}
                    type="button"
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      size === sz
                        ? 'bg-[#8B5E34] text-white shadow-xs'
                        : 'bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100'
                    }`}
                    onClick={() => setSize(sz)}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Matting */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2.5">
                4. Museum Matting Background
              </label>
              <div className="flex flex-wrap gap-2">
                {mattesList.map(m => (
                  <button
                    key={m}
                    type="button"
                    className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                      matte === m
                        ? 'bg-[#8B5E34] text-white shadow-xs'
                        : 'bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100'
                    }`}
                    onClick={() => setMatte(m)}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Inscription */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2.5">
                5. Custom Bottom Inscription / Quote
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-stone-300 focus:border-[#8B5E34] focus:outline-hidden text-sm bg-stone-50"
                value={customNote}
                onChange={e => setCustomNote(e.target.value)}
                placeholder="e.g. Good Memories Forever ❤️ or Happy 25th Anniversary"
              />
            </div>

            {/* Submit CTA */}
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5B] text-white font-bold text-base shadow-md transition-all active:scale-95"
            >
              <WhatsAppIcon size={22} variant="badge" />
              <span>Get Instant Quotation on WhatsApp</span>
            </a>
          </div>

          {/* Right: Live Frame Preview & Studio Guarantee */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-3xl border border-[#E8D9C5] p-6 shadow-sm text-center">
              <h3 className="text-base font-bold text-stone-900 mb-4 font-serif">
                Live Mockup Preview
              </h3>

              <div
                className={`p-4 rounded-2xl shadow-xl max-w-[280px] mx-auto mb-4 ${
                  frameType.includes('Gold')
                    ? 'bg-[#8B5E34] border-4 border-[#C49A53]'
                    : frameType.includes('Black')
                    ? 'bg-[#1C1A18] border-4 border-[#2B160B]'
                    : 'bg-[#422414] border-4 border-[#2B160B]'
                }`}
              >
                <div
                  className={`p-3 rounded-lg ${
                    matte.includes('Black')
                      ? 'bg-[#1F1E1D] text-[#FAF8F4]'
                      : 'bg-[#FAF8F4] text-[#1F1F1F]'
                  }`}
                >
                  <div className="w-full h-40 overflow-hidden rounded bg-stone-200 shadow-inner">
                    <img
                      src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=700&q=80"
                      alt="Sample portrait preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-3 text-xs font-bold text-center">
                    {customNote || 'Your Inscription Here'}
                  </div>
                </div>
              </div>

              <div className="text-xs text-stone-500 leading-relaxed">
                Occasion: <strong className="text-stone-800">{occasion}</strong> • Style: <strong className="text-stone-800">{frameType}</strong> • Size: <strong className="text-stone-800">{size}</strong>
              </div>
            </div>

            {/* Studio Guarantee */}
            <div className="bg-[#FAF5EF] rounded-3xl border border-[#EBDCCB] p-6">
              <h4 className="text-base font-bold text-stone-900 mb-4 font-serif">
                Why Order Custom From Us?
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-stone-700">
                <li className="flex items-center gap-2.5">
                  <CheckCircle2 size={18} className="text-[#8B5E34] shrink-0" />
                  <span>Museum-grade acrylic &amp; non-reflective glass</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <ShieldCheck size={18} className="text-[#8B5E34] shrink-0" />
                  <span>Moisture-resistant backing for 20+ years durability</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Clock size={18} className="text-[#8B5E34] shrink-0" />
                  <span>Express 24-hour turnaround available in Noida</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Palette size={18} className="text-[#8B5E34] shrink-0" />
                  <span>Free consultation &amp; photo touch-up assistance</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
