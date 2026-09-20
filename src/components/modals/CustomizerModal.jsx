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
    <div className="modal-overlay" onClick={closeCustomModal} role="dialog" aria-modal="true">
      <div className="custom-builder-modal" onClick={e => e.stopPropagation()}>
        <div className="modal-header-bar">
          <div>
            <h3 className="serif-font text-[22px] font-bold text-stone-900">
              Create Your Custom Frame
            </h3>
            <p className="text-[13px] text-[#8B5E34] font-semibold">
              Customize your memories &amp; get instant WhatsApp quote
            </p>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={closeCustomModal}
            aria-label="Close customizer"
          >
            <X size={24} />
          </button>
        </div>

        <div className="modal-body">
          {/* Step 1: Occasion */}
          <div>
            <label className="form-group-label">1. Select Occasion</label>
            <div className="pill-select-grid">
              {occasionsList.map(occ => (
                <button
                  key={occ}
                  type="button"
                  className={`pill-select-btn ${customOccasion === occ ? 'active' : ''}`}
                  onClick={() => setCustomOccasion(occ)}
                >
                  {occ}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Frame Moulding Material */}
          <div>
            <label className="form-group-label">2. Choose Frame Moulding Style</label>
            <div className="pill-select-grid">
              {frameTypesList.map(style => (
                <button
                  key={style}
                  type="button"
                  className={`pill-select-btn ${customFrameType === style ? 'active' : ''}`}
                  onClick={() => setCustomFrameType(style)}
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          {/* Step 3: Size Dimensions */}
          <div>
            <label className="form-group-label">3. Frame Dimensions</label>
            <div className="pill-select-grid">
              {sizesList.map(sz => (
                <button
                  key={sz}
                  type="button"
                  className={`pill-select-btn ${customSize === sz ? 'active' : ''}`}
                  onClick={() => setCustomSize(sz)}
                >
                  {sz}
                </button>
              ))}
            </div>
          </div>

          {/* Step 4: Inner Museum Matte */}
          <div>
            <label className="form-group-label">4. Museum Matting Background</label>
            <div className="pill-select-grid">
              {mattesList.map(mat => (
                <button
                  key={mat}
                  type="button"
                  className={`pill-select-btn ${customMatte === mat ? 'active' : ''}`}
                  onClick={() => setCustomMatte(mat)}
                >
                  {mat}
                </button>
              ))}
            </div>
          </div>

          {/* Step 5: Custom Inscription */}
          <div>
            <label className="form-group-label">5. Custom Bottom Message / Inscription</label>
            <input
              type="text"
              className="custom-text-input"
              value={customNote}
              onChange={e => setCustomNote(e.target.value)}
              placeholder="e.g. Good Memories Forever ❤️ or Rahul & Priya - 2026"
            />
          </div>

          {/* Live Preview Box */}
          <div className="custom-preview-box">
            <div
              className={`custom-preview-frame rounded-lg overflow-hidden ${
                customFrameType.includes('Gold')
                  ? 'bg-[#8B5E34] border-[3px] border-[#C49A53]'
                  : customFrameType.includes('Black')
                  ? 'bg-[#1C1A18] border-[3px] border-[#2B160B]'
                  : 'bg-[#422414] border-[3px] border-[#2B160B]'
              }`}
            >
              <div
                className={`p-3 ${
                  customMatte.includes('Black')
                    ? 'bg-[#1F1E1D] text-[#FAF8F4] border border-white/10'
                    : 'bg-[#FAF8F4] text-[#1F1F1F] border border-black/10'
                }`}
              >
                <div className="w-full h-[110px] overflow-hidden bg-stone-200">
                  <img
                    src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=600&q=80"
                    alt="Preview frame sample"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="mt-2 text-[13px] font-semibold text-center">
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
            className="btn-whatsapp-header justify-center w-full p-3.5 text-[15px] rounded-xl shadow-[0_4px_16px_rgba(37,211,102,0.3)]"
          >
            <WhatsAppIcon size={22} variant="badge" />
            <span>Send Custom Specification to WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  )
}
