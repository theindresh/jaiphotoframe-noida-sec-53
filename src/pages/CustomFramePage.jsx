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
    <div className="custom-frame-page-wrapper pb-16">
      {/* Header Banner */}
      <div className="bg-[#FAF8F4] py-14 px-0 border-b border-[#EBDCCB]">
        <div className="content-wrapper text-center max-w-[780px]">
          <div className="hero-pill-badge mx-auto mb-4">
            <Sparkles size={14} color="var(--gold-dark)" />
            <span>Studio Workshop</span>
          </div>
          <h1 className="serif-font text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
            Custom Frame Studio
          </h1>
          <p className="text-base text-stone-600 leading-relaxed">
            Design your bespoke frame in 5 simple steps. Pick your wood style, dimensions, and personal inscription, and send your specifications directly to our master craftsmen on WhatsApp.
          </p>
        </div>
      </div>

      <div className="content-wrapper mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-10 items-start">
          {/* Left: Interactive Configurator */}
          <div className="bg-white rounded-2xl border border-stone-200 p-6 sm:p-8 shadow-sm">
            <h2 className="serif-font text-2xl font-bold mb-6 text-stone-900">
              Configure Your Frame
            </h2>

            {/* Step 1: Occasion */}
            <div className="mb-6">
              <label className="form-group-label">1. Select Occasion</label>
              <div className="pill-select-grid">
                {occasionsList.map(occ => (
                  <button
                    key={occ}
                    type="button"
                    className={`pill-select-btn ${occasion === occ ? 'active' : ''}`}
                    onClick={() => setOccasion(occ)}
                  >
                    {occ}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Frame Style */}
            <div className="mb-6">
              <label className="form-group-label">2. Frame Moulding Style</label>
              <div className="pill-select-grid">
                {frameTypesList.map(style => (
                  <button
                    key={style}
                    type="button"
                    className={`pill-select-btn ${frameType === style ? 'active' : ''}`}
                    onClick={() => setFrameType(style)}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Size */}
            <div className="mb-6">
              <label className="form-group-label">3. Frame Dimensions</label>
              <div className="pill-select-grid">
                {sizesList.map(sz => (
                  <button
                    key={sz}
                    type="button"
                    className={`pill-select-btn ${size === sz ? 'active' : ''}`}
                    onClick={() => setSize(sz)}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Matting */}
            <div className="mb-6">
              <label className="form-group-label">4. Museum Matting</label>
              <div className="pill-select-grid">
                {mattesList.map(m => (
                  <button
                    key={m}
                    type="button"
                    className={`pill-select-btn ${matte === m ? 'active' : ''}`}
                    onClick={() => setMatte(m)}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 5: Inscription */}
            <div className="mb-7">
              <label className="form-group-label">5. Custom Inscription / Quote</label>
              <input
                type="text"
                className="custom-text-input"
                value={customNote}
                onChange={e => setCustomNote(e.target.value)}
                placeholder="e.g. Good Memories Forever ❤️ or Happy 25th Anniversary"
              />
            </div>

            {/* Submit via WhatsApp */}
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="btn-whatsapp-header justify-center w-full p-4 text-[15px] rounded-xl shadow-[0_4px_16px_rgba(37,211,102,0.3)]"
            >
              <WhatsAppIcon size={24} variant="badge" />
              <span>Get Instant Quotation on WhatsApp</span>
            </a>
          </div>

          {/* Right: Live Frame Preview & Studio Guarantee */}
          <div>
            {/* Frame Live Preview Card */}
            <div className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm mb-6 text-center">
              <h3 className="text-base font-bold text-stone-900 mb-4">
                Live Mockup Preview
              </h3>

              <div
                className={`p-4 rounded-xl shadow-lg max-w-[300px] mx-auto mb-4 ${
                  frameType.includes('Gold')
                    ? 'bg-[#8B5E34] border-4 border-[#C49A53]'
                    : frameType.includes('Black')
                    ? 'bg-[#1C1A18] border-4 border-[#2B160B]'
                    : 'bg-[#422414] border-4 border-[#2B160B]'
                }`}
              >
                <div
                  className={`p-4 ${
                    matte.includes('Black')
                      ? 'bg-[#1F1E1D] text-[#FAF8F4] border border-white/10'
                      : 'bg-[#FAF8F4] text-[#1F1F1F] border border-black/10'
                  }`}
                >
                  <div className="w-full h-40 overflow-hidden bg-stone-200">
                    <img
                      src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=700&q=80"
                      alt="Sample portrait preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="mt-3 text-sm font-bold">
                    {customNote || 'Your Inscription Here'}
                  </div>
                </div>
              </div>

              <div className="text-[13px] text-stone-500 leading-relaxed">
                Occasion: <strong className="text-stone-800">{occasion}</strong><br />
                Style: <strong className="text-stone-800">{frameType}</strong> • Size: <strong className="text-stone-800">{size}</strong>
              </div>
            </div>

            {/* Studio Guarantees */}
            <div className="bg-[#FAF8F4] rounded-2xl border border-[#EBDCCB] p-6">
              <h4 className="text-base font-bold text-stone-900 mb-4">
                Why Order Custom From Us?
              </h4>
              <ul className="list-none flex flex-col gap-3">
                <li className="flex items-center gap-2.5 text-sm text-stone-700">
                  <CheckCircle2 size={18} className="text-[#8B5E34] shrink-0" />
                  <span>Museum-grade acrylic &amp; non-reflective glass options</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-stone-700">
                  <ShieldCheck size={18} className="text-[#8B5E34] shrink-0" />
                  <span>Moisture-resistant backing for 20+ years durability</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-stone-700">
                  <Clock size={18} className="text-[#8B5E34] shrink-0" />
                  <span>Express 24-hour turnaround available in Noida</span>
                </li>
                <li className="flex items-center gap-2.5 text-sm text-stone-700">
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
