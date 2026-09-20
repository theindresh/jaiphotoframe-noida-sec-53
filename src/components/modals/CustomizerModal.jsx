import { X } from 'lucide-react'
import { useFrame } from '../../context/useFrame'
import { getCustomOrderWhatsAppUrl } from '../../utils/whatsapp'
import WhatsAppIcon from '../common/WhatsAppIcon'

export default function CustomizerModal() {
  const {
    customModalOpen,
    closeCustomModal,
    customOccasion,
    setCustomOccasion,
    customFrameType,
    setCustomFrameType,
    customSize,
    setCustomSize,
    customMatte,
    setCustomMatte,
    customNote,
    setCustomNote,
  } = useFrame()

  if (!customModalOpen) return null

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
    occasion: customOccasion,
    frameType: customFrameType,
    size: customSize,
    matte: customMatte,
    customNote: customNote || 'Good Memories Forever ❤️',
  })

  return (
    <div
      className="fixed inset-0 z-[200] bg-stone-950/75 backdrop-blur-xs flex items-center justify-center p-4"
      onClick={closeCustomModal}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="bg-white rounded-3xl w-full max-w-[540px] max-h-[90vh] flex flex-col shadow-2xl border border-[#E8D9C5] overflow-hidden"
        onClick={e => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E8D9C5] bg-[#FAF8F4]">
          <div>
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Create Your Custom Frame
            </h3>
            <p className="text-xs text-[#8B5E34] font-semibold mt-0.5">
              Customize your memories &amp; get instant WhatsApp quote
            </p>
          </div>
          <button
            type="button"
            className="w-8 h-8 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
            onClick={closeCustomModal}
            aria-label="Close customizer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex flex-col gap-5 text-sm">
          {/* Step 1: Occasion */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              1. Select Occasion
            </label>
            <div className="flex flex-wrap gap-2">
              {occasionsList.map(occ => (
                <button
                  key={occ}
                  type="button"
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    customOccasion === occ
                      ? 'bg-[#8B5E34] text-white shadow-xs'
                      : 'bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                  onClick={() => setCustomOccasion(occ)}
                >
                  {occ}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Frame Moulding Material */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              2. Frame Moulding Style
            </label>
            <div className="flex flex-wrap gap-2">
              {frameTypesList.map(style => (
                <button
                  key={style}
                  type="button"
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    customFrameType === style
                      ? 'bg-[#8B5E34] text-white shadow-xs'
                      : 'bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                  onClick={() => setCustomFrameType(style)}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Size Dimensions */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              3. Frame Dimensions
            </label>
            <div className="flex flex-wrap gap-2">
              {sizesList.map(sz => (
                <button
                  key={sz}
                  type="button"
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    customSize === sz
                      ? 'bg-[#8B5E34] text-white shadow-xs'
                      : 'bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                  onClick={() => setCustomSize(sz)}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Inner Museum Matte */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              4. Museum Matting Background
            </label>
            <div className="flex flex-wrap gap-2">
              {mattesList.map(mat => (
                <button
                  key={mat}
                  type="button"
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    customMatte === mat
                      ? 'bg-[#8B5E34] text-white shadow-xs'
                      : 'bg-stone-50 border border-stone-200 text-stone-700 hover:bg-stone-100'
                  }`}
                  onClick={() => setCustomMatte(mat)}
                >
                  {mat}
                </button>
              ))}
            </div>
          </div>

          {/* Step 5: Custom Inscription */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
              5. Custom Message / Inscription
            </label>
            <input
              type="text"
              className="w-full px-4 py-2.5 rounded-xl border border-stone-300 focus:border-[#8B5E34] focus:outline-hidden text-sm"
              value={customNote}
              onChange={e => setCustomNote(e.target.value)}
              placeholder="e.g. Good Memories Forever ❤️"
            />
          </div>

          {/* Live Preview Box */}
          <div className="bg-[#FAF8F4] rounded-2xl border border-[#E8D9C5] p-4 text-center">
            <div
              className={`max-w-[240px] mx-auto p-3 rounded-xl shadow-md mb-2 ${
                customFrameType.includes('Gold')
                  ? 'bg-[#8B5E34] border-2 border-[#C49A53]'
                  : customFrameType.includes('Black')
                  ? 'bg-[#1C1A18] border-2 border-[#2B160B]'
                  : 'bg-[#422414] border-2 border-[#2B160B]'
              }`}
            >
              <div
                className={`p-2.5 rounded ${
                  customMatte.includes('Black')
                    ? 'bg-[#1F1E1D] text-[#FAF8F4]'
                    : 'bg-[#FAF8F4] text-[#1F1F1F]'
                }`}
              >
                <div className="w-full h-24 overflow-hidden rounded bg-stone-200 mb-1.5">
                  <img
                    src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80"
                    alt="Preview frame sample"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs font-bold">
                  {customNote || 'Your Inscription Here'}
                </div>
              </div>
            </div>
            <div className="text-xs text-stone-500">
              Selected: <strong>{customOccasion}</strong> • <strong>{customFrameType}</strong> • <strong>{customSize}</strong>
            </div>
          </div>

          {/* Send Order Button */}
          <a
            href={whatsAppUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-[#25D366] hover:bg-[#1EBE5B] text-white font-bold text-sm shadow-md transition-all active:scale-95"
          >
            <WhatsAppIcon size={20} variant="badge" />
            <span>Send Custom Spec to WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  )
}
