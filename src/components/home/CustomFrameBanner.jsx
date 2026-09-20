import { Image, Square, Maximize2, MessageSquare, ArrowRight } from 'lucide-react'
import { useFrame } from '../../context/useFrame'
import FrameVisualDemo from '../common/FrameVisualDemo'

export default function CustomFrameBanner() {
  const { openCustomModal } = useFrame()

  return (
    <section className="custom-frame-section" id="custom-frame">
      <div className="content-wrapper">
        <div className="custom-frame-grid">
          {/* Left Sample Visual with FrameVisualDemo */}
          <div className="custom-visual-card p-3">
            <FrameVisualDemo
              size="16 × 24 in"
              styleName="Solid Teakwood Moulding"
              aspectRatio="4 / 3"
              label="Custom Made Order"
              sublabel="Museum Mat • High Clarity Glass"
              caption="Collect Beautiful Moments ❤️"
              compact={true}
            />
          </div>

          {/* Center Copy */}
          <div className="custom-copy-center">
            <div className="custom-eyebrow">Handmade With Love</div>
            <h2 className="custom-heading">Create Your Own Custom Frame</h2>
            <p className="custom-desc">
              Turn your favorite photos into a unique frame. Choose design, size, and add your special message. Our Noida studio brings your vision to life.
            </p>
            <button
              type="button"
              className="btn-start-custom"
              onClick={() => openCustomModal('Family')}
            >
              <span>Start Custom Order</span>
              <ArrowRight size={17} />
            </button>
          </div>

          {/* Right Steps Flow with Lucide Icons */}
          <div className="custom-steps-flow">
            <div className="step-item">
              <div className="step-icon-box">
                <Image size={20} />
              </div>
              <span className="step-number-tag">1</span>
              <span className="step-name">Upload Photo</span>
            </div>

            <span className="step-arrow-divider">›</span>

            <div className="step-item">
              <div className="step-icon-box">
                <Square size={20} />
              </div>
              <span className="step-number-tag">2</span>
              <span className="step-name">Choose Frame</span>
            </div>

            <span className="step-arrow-divider">›</span>

            <div className="step-item">
              <div className="step-icon-box">
                <Maximize2 size={20} />
              </div>
              <span className="step-number-tag">3</span>
              <span className="step-name">Select Size</span>
            </div>

            <span className="step-arrow-divider">›</span>

            <div className="step-item">
              <div className="step-icon-box">
                <MessageSquare size={20} />
              </div>
              <span className="step-number-tag">4</span>
              <span className="step-name">Add Message</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
